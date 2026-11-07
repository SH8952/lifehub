"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download } from "lucide-react";
import { data, type Locale } from "./data";

type Mode = "text" | "image";
type Position = "top-left" | "top-center" | "top-right" | "middle-left" | "center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right";

const POSITIONS: Position[] = [
  "top-left", "top-center", "top-right",
  "middle-left", "center", "middle-right",
  "bottom-left", "bottom-center", "bottom-right",
];

export default function ImageWatermark({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [originalType, setOriginalType] = useState<string>("image/png");
  const [mode, setMode] = useState<Mode>("text");
  const [text, setText] = useState("© My Brand");
  const [fontSize, setFontSize] = useState(32);
  const [color, setColor] = useState("#ffffff");
  const [wmImgEl, setWmImgEl] = useState<HTMLImageElement | null>(null);
  const [scale, setScale] = useState(25);
  const [opacity, setOpacity] = useState(60);
  const [position, setPosition] = useState<Position>("bottom-right");
  const [resultUrl, setResultUrl] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const wmFileInputRef = useRef<HTMLInputElement>(null);
  const resultUrlRef = useRef<string>("");

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setOriginalType(file.type || "image/png");
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => setImgEl(img);
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  const handleWmFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => setWmImgEl(img);
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  useEffect(() => {
    if (!imgEl) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = imgEl.naturalWidth;
    const h = imgEl.naturalHeight;
    canvas.width = w;
    canvas.height = h;
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = 1;
    ctx.drawImage(imgEl, 0, 0);

    const padding = Math.max(w, h) * 0.03;
    const isTop = position.startsWith("top");
    const isBottom = position.startsWith("bottom");
    const isLeft = position.endsWith("left");
    const isRight = position.endsWith("right");

    if (mode === "text" && text) {
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity / 100;
      ctx.textBaseline = isTop ? "top" : isBottom ? "bottom" : "middle";
      ctx.textAlign = isLeft ? "left" : isRight ? "right" : "center";
      const x = isLeft ? padding : isRight ? w - padding : w / 2;
      const y = isTop ? padding : isBottom ? h - padding : h / 2;
      ctx.fillText(text, x, y);
    } else if (mode === "image" && wmImgEl) {
      const wmW = w * (scale / 100);
      const wmH = wmW * (wmImgEl.naturalHeight / wmImgEl.naturalWidth);
      const x = isLeft ? padding : isRight ? w - padding - wmW : (w - wmW) / 2;
      const y = isTop ? padding : isBottom ? h - padding - wmH : (h - wmH) / 2;
      ctx.globalAlpha = opacity / 100;
      ctx.drawImage(wmImgEl, x, y, wmW, wmH);
    }
    ctx.globalAlpha = 1;

    canvas.toBlob((blob) => {
      if (!blob) return;
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
      const url = URL.createObjectURL(blob);
      resultUrlRef.current = url;
      setResultUrl(url);
    }, originalType);
  }, [imgEl, mode, text, fontSize, color, wmImgEl, scale, opacity, position, originalType]);

  useEffect(() => {
    return () => {
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    };
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const outExt = originalType === "image/png" ? "png" : originalType === "image/webp" ? "webp" : "jpg";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.subtitle,
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      <input
        ref={wmFileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleWmFile(file);
        }}
      />

      {!imgEl ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 text-center transition-colors ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-muted-foreground/30 hover:bg-muted/50"}`}
        >
          <UploadCloud className="h-10 w-10 text-muted-foreground" />
          <p className="font-medium">{d.uploadLabel}</p>
          <p className="text-sm text-muted-foreground">{d.uploadHint}</p>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <canvas ref={canvasRef} className="hidden" />

          <Card>
            <CardContent className="flex flex-col gap-4 p-5">
              <div>
                <label className="mb-1 block text-sm font-medium">{d.modeLabel}</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMode("text")}
                    className={`rounded-md border px-4 py-2 text-sm ${mode === "text" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                  >
                    {d.modeText}
                  </button>
                  <button
                    onClick={() => setMode("image")}
                    className={`rounded-md border px-4 py-2 text-sm ${mode === "image" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                  >
                    {d.modeImage}
                  </button>
                </div>
              </div>

              {mode === "text" ? (
                <>
                  <div>
                    <label className="mb-1 block text-sm font-medium">{d.textInputLabel}</label>
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder={d.textInputPlaceholder}
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        {d.fontSizeLabel}: {fontSize}px
                      </label>
                      <input type="range" min={12} max={160} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium">{d.colorLabel}</label>
                      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-9 w-full rounded-md border" />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label className="mb-1 block text-sm font-medium">{d.watermarkImageLabel}</label>
                  <button onClick={() => wmFileInputRef.current?.click()} className="rounded-md border px-4 py-2 text-sm hover:bg-muted">
                    {d.watermarkImageUpload}
                  </button>
                  {wmImgEl && (
                    <div className="mt-2">
                      <label className="mb-1 block text-sm font-medium">
                        {d.scaleLabel}: {scale}%
                      </label>
                      <input type="range" min={5} max={100} value={scale} onChange={(e) => setScale(Number(e.target.value))} className="w-full" />
                    </div>
                  )}
                </div>
              )}

              <div>
                <label className="mb-1 block text-sm font-medium">
                  {d.opacityLabel}: {opacity}%
                </label>
                <input type="range" min={5} max={100} value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">{d.positionLabel}</label>
                <div className="grid w-32 grid-cols-3 gap-1">
                  {POSITIONS.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPosition(p)}
                      className={`h-9 w-9 rounded-md border ${position === p ? "bg-indigo-600" : "bg-white hover:bg-muted"}`}
                      aria-label={p}
                    >
                      <span className={`mx-auto block h-2 w-2 rounded-full ${position === p ? "bg-white" : "bg-muted-foreground/50"}`} />
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => fileInputRef.current?.click()} className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted">
                {d.changeImage}
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님 */}
              {resultUrl && <img src={resultUrl} alt="result" className="max-h-96 rounded-md object-contain" />}
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download={`watermarked.${outExt}`}
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <Download className="h-4 w-4" />
              {d.download}
            </a>
          )}
        </div>
      )}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.howTitle}</h2>
        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
          {d.howSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {faq.q}
                </p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
