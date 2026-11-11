"use client";

import { useEffect, useRef, useState } from "react";
import { checkPose, classify, measure, type PoseIssue, type Reading } from "./analysis";
import { createDetector, type Detector } from "./faceMesh";
import { i18n, type I18nData, type Locale } from "./data";
import { browText, cornerText, eyeSizeText, mouthText, noseText, shapeText, spacingText, tiltText, zoneText } from "./readings";

type Phase = "idle" | "loading" | "camera" | "analyzing" | "result";
type IssueKey = Exclude<PoseIssue, "none"> | "noFace" | "multiple";

interface ResultData {
  reading: Reading;
  zones: [number, number, number];
  photo: string;
}

interface Live {
  stream: MediaStream | null;
  timer: ReturnType<typeof setTimeout> | null;
  active: boolean;
  detector: Detector | null;
  detectorPromise: Promise<Detector> | null;
}

const MAX_SIDE = 1280;
const PHOTO_THUMB = 480;
const GOOD_FRAMES_NEEDED = 3;

function drawScaled(source: CanvasImageSource, sw: number, sh: number, maxSide: number): HTMLCanvasElement {
  const scale = Math.min(1, maxSide / Math.max(sw, sh));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(sw * scale));
  canvas.height = Math.max(1, Math.round(sh * scale));
  const ctx = canvas.getContext("2d");
  if (ctx) ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas;
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image load failed"));
    };
    img.src = url;
  });
}

export default function FaceReadingClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d: I18nData = i18n(locale);

  const [confirmed, setConfirmed] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [liveIssue, setLiveIssue] = useState<IssueKey | null>(null);
  const [frontal, setFrontal] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const live = useRef<Live>({ stream: null, timer: null, active: false, detector: null, detectorPromise: null });

  useEffect(() => {
    const s = live.current;
    return () => {
      s.active = false;
      if (s.timer) clearTimeout(s.timer);
      s.stream?.getTracks().forEach((t) => t.stop());
      s.stream = null;
      s.detector?.close();
      s.detector = null;
      s.detectorPromise = null;
    };
  }, []);

  function getDetector(): Promise<Detector> {
    const s = live.current;
    if (!s.detectorPromise) {
      s.detectorPromise = createDetector()
        .then((det) => {
          s.detector = det;
          return det;
        })
        .catch((err: unknown) => {
          s.detectorPromise = null;
          throw err;
        });
    }
    return s.detectorPromise;
  }

  function stopCamera() {
    const s = live.current;
    s.active = false;
    if (s.timer) {
      clearTimeout(s.timer);
      s.timer = null;
    }
    s.stream?.getTracks().forEach((t) => t.stop());
    s.stream = null;
    const v = videoRef.current;
    if (v) v.srcObject = null;
  }

  function reset() {
    stopCamera();
    setResult(null);
    setMessage(null);
    setLiveIssue(null);
    setFrontal(false);
    setPhase("idle");
  }

  async function analyze(canvas: HTMLCanvasElement) {
    setPhase("analyzing");
    setMessage(null);
    try {
      const det = await getDetector();
      const faces = await det.detect(canvas, true);
      if (faces.length === 0) return fail(d.issues.noFace);
      if (faces.length > 1) return fail(d.issues.multiple);
      const pose = checkPose(faces[0], canvas.width, canvas.height);
      if (!pose.ok && pose.issue !== "none") return fail(d.issues[pose.issue]);

      const m = measure(faces[0], canvas.width, canvas.height);
      const reading = classify(m);
      const thumb = drawScaled(canvas, canvas.width, canvas.height, PHOTO_THUMB);
      setResult({ reading, zones: m.zones, photo: thumb.toDataURL("image/jpeg", 0.85) });
      setPhase("result");
    } catch {
      fail(d.errors.loadFail);
    }
  }

  function fail(text: string) {
    setMessage(text);
    setPhase("idle");
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!confirmed) {
      setMessage(d.needConfirm);
      return;
    }
    setMessage(null);
    setPhase("loading");
    try {
      await getDetector();
    } catch {
      return fail(d.errors.loadFail);
    }
    try {
      const img = await loadImage(file);
      const canvas = drawScaled(img, img.naturalWidth, img.naturalHeight, MAX_SIDE);
      await analyze(canvas);
    } catch {
      fail(d.errors.imageFail);
    }
  }

  function pickFile() {
    if (!confirmed) {
      setMessage(d.needConfirm);
      return;
    }
    fileRef.current?.click();
  }

  async function startCamera() {
    if (!confirmed) {
      setMessage(d.needConfirm);
      return;
    }
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setMessage(d.errors.cameraUnsupported);
      return;
    }
    setMessage(null);
    setLiveIssue(null);
    setFrontal(false);
    setPhase("loading");

    let det: Detector;
    try {
      det = await getDetector();
    } catch {
      return fail(d.errors.loadFail);
    }

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 960 } },
        audio: false,
      });
    } catch (err) {
      const name = err instanceof DOMException ? err.name : "";
      if (name === "NotAllowedError" || name === "SecurityError") return fail(d.errors.cameraDenied);
      if (name === "NotFoundError" || name === "OverconstrainedError") return fail(d.errors.cameraUnsupported);
      return fail(d.errors.cameraBusy);
    }

    const s = live.current;
    s.stream = stream;
    s.active = true;
    setPhase("camera");

    // 비디오 요소가 화면에 나타난 뒤 스트림을 연결한다(최대 약 1초 대기).
    for (let i = 0; i < 20 && !videoRef.current; i++) {
      await new Promise<void>((resolve) => setTimeout(resolve, 50));
    }
    const video = videoRef.current;
    if (!video) {
      stopCamera();
      return fail(d.errors.cameraBusy);
    }
    video.srcObject = stream;
    try {
      await video.play();
    } catch {
      stopCamera();
      return fail(d.errors.cameraBusy);
    }

    let busy = false;
    let goodFrames = 0;
    const tick = async () => {
      if (!s.active) return;
      if (!busy && video.readyState >= 2 && video.videoWidth > 0) {
        busy = true;
        try {
          const faces = await det.detect(video);
          if (!s.active) return;
          let issue: IssueKey | null = null;
          if (faces.length === 0) issue = "noFace";
          else if (faces.length > 1) issue = "multiple";
          else {
            const pose = checkPose(faces[0], video.videoWidth, video.videoHeight);
            if (!pose.ok && pose.issue !== "none") issue = pose.issue;
          }
          goodFrames = issue ? 0 : goodFrames + 1;
          setLiveIssue(issue);
          setFrontal(goodFrames >= GOOD_FRAMES_NEEDED);
        } catch {
          /* 한 프레임 실패는 무시하고 계속 */
        } finally {
          busy = false;
        }
      }
      if (s.active) s.timer = setTimeout(tick, 160);
    };
    s.timer = setTimeout(tick, 300);
  }

  async function capture() {
    const video = videoRef.current;
    if (!video || !frontal || video.videoWidth === 0) return;
    const canvas = drawScaled(video, video.videoWidth, video.videoHeight, MAX_SIDE);
    stopCamera();
    await analyze(canvas);
  }

  const busy = phase === "loading" || phase === "analyzing";
  const btnPrimary =
    "rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50";
  const btnSecondary =
    "rounded-lg border border-border bg-background px-5 py-2.5 font-medium hover:bg-muted disabled:opacity-50";

  const fortunes = result
    ? [
        {
          title: d.fortune.general,
          items: [
            { label: d.part.shape, text: shapeText[result.reading.shape].text[locale] },
            { label: d.part.zone, text: zoneText[result.reading.zone][locale] },
          ],
        },
        {
          title: d.fortune.wealth,
          items: [
            { label: d.part.nose, text: noseText[result.reading.nose][locale] },
            { label: d.part.mouth, text: mouthText[result.reading.mouth][locale] },
          ],
        },
        {
          title: d.fortune.love,
          items: [
            { label: d.part.tilt, text: tiltText[result.reading.tilt][locale] },
            { label: d.part.corner, text: cornerText[result.reading.corner][locale] },
          ],
        },
        {
          title: d.fortune.career,
          items: [
            { label: d.part.brow, text: browText[result.reading.brow][locale] },
            { label: d.part.eyeSize, text: eyeSizeText[result.reading.eyeSize][locale] },
          ],
        },
        {
          title: d.fortune.people,
          items: [{ label: d.part.spacing, text: spacingText[result.reading.spacing][locale] }],
        },
      ]
    : [];

  return (
    <div className="space-y-6">
      {phase !== "result" && (
        <div className="rounded-lg border border-primary/40 bg-primary/10 p-4">
          <h2 className="mb-2 text-sm font-semibold">{d.guideTitle}</h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            {d.guide.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
          <label className="mt-4 flex cursor-pointer items-start gap-2 text-sm font-medium">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0"
              checked={confirmed}
              onChange={(e) => {
                setConfirmed(e.target.checked);
                if (e.target.checked) setMessage(null);
              }}
            />
            <span>{d.confirm}</span>
          </label>
        </div>
      )}

      <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
        {(phase === "idle" || phase === "loading" || phase === "analyzing") && (
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={pickFile} disabled={busy} className={btnPrimary}>
                {d.uploadBtn}
              </button>
              <button type="button" onClick={startCamera} disabled={busy} className={btnSecondary}>
                {d.cameraBtn}
              </button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
            </div>
            {phase === "loading" && <p className="text-sm text-muted-foreground">{d.loadingModel}</p>}
            {phase === "analyzing" && <p className="text-sm text-muted-foreground">{d.analyzing}</p>}
            <p className="text-xs text-muted-foreground">{d.privacyNote}</p>
          </div>
        )}

        {phase === "camera" && (
          <div className="space-y-4">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-black">
              <video
                ref={videoRef}
                playsInline
                muted
                autoPlay
                className="block w-full"
                style={{ transform: "scaleX(-1)" }}
              />
              <div
                aria-hidden
                className={`pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-2 border-dashed ${
                  frontal ? "border-emerald-400" : "border-white/70"
                }`}
              />
            </div>
            <p
              role="status"
              aria-live="polite"
              className={`text-center text-sm ${frontal ? "font-medium text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`}
            >
              {frontal ? d.frontalOk : liveIssue ? d.issues[liveIssue] : d.cameraHint}
            </p>
            <div className="flex justify-center gap-3">
              <button type="button" onClick={capture} disabled={!frontal} className={btnPrimary}>
                {d.capture}
              </button>
              <button type="button" onClick={reset} className={btnSecondary}>
                {d.cancel}
              </button>
            </div>
            <p className="text-center text-xs text-muted-foreground">{d.privacyNote}</p>
          </div>
        )}

        {phase === "result" && result && (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              {/* eslint-disable-next-line @next/next/no-img-element -- 사용자가 방금 올린/촬영한 사진을 data URL 로 미리 보여 주는 용도 */}
              <img
                src={result.photo}
                alt=""
                className="h-40 w-32 shrink-0 rounded-lg border border-border object-cover"
              />
              <div className="text-center sm:text-left">
                <p className="text-xs text-muted-foreground">{d.resultTitle}</p>
                <h2 className="mt-1 text-xl font-bold">{shapeText[result.reading.shape].title[locale]}</h2>
                <p className="mt-1 text-sm font-medium text-primary-foreground/90 dark:text-primary">
                  <span className="rounded bg-primary/20 px-2 py-0.5">{shapeText[result.reading.shape].tagline[locale]}</span>
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{d.photoNote}</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold">{d.zonesTitle}</h3>
              <div className="flex h-8 overflow-hidden rounded-md border border-border text-xs font-medium">
                {result.zones.map((z, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center ${i === 0 ? "bg-primary/30" : i === 1 ? "bg-primary/50" : "bg-primary/70"}`}
                    style={{ width: `${(z * 100).toFixed(1)}%` }}
                  >
                    {Math.round(z * 100)}%
                  </div>
                ))}
              </div>
              <div className="mt-1 grid grid-cols-3 text-center text-[11px] text-muted-foreground">
                {d.zoneNames.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {fortunes.map((f) => (
                <section key={f.title} className="rounded-lg border border-border bg-background p-4">
                  <h3 className="mb-2 text-base font-semibold">{f.title}</h3>
                  <div className="space-y-3">
                    {f.items.map((it) => (
                      <div key={it.label}>
                        <p className="text-xs font-semibold text-muted-foreground">{it.label}</p>
                        <p className="mt-0.5 text-sm leading-relaxed">{it.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="flex justify-center">
              <button type="button" onClick={reset} className={btnSecondary}>
                {d.retry}
              </button>
            </div>
          </div>
        )}

        {message && (
          <p role="alert" className="mt-4 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
