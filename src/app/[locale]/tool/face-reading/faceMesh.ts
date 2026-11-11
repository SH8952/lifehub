// 관상 도구 — MediaPipe Face Mesh 불러오기(클라이언트 전용).
// 라이브러리와 모델 파일은 public/mediapipe/face_mesh/ 에 함께 배포되어 있으며,
// 이 도구 페이지에서 사용자가 분석을 시작할 때만 동적으로 불러온다(다른 페이지의 용량·속도에는 영향이 없다).
import type { Pt } from "./analysis";

interface FaceMeshResults {
  multiFaceLandmarks?: Pt[][];
}

interface FaceMeshInstance {
  setOptions(options: Record<string, unknown>): void;
  onResults(cb: (results: FaceMeshResults) => void): void;
  send(input: { image: HTMLCanvasElement | HTMLVideoElement }): Promise<void>;
  initialize(): Promise<void>;
  reset(): void;
  close(): Promise<void> | void;
}

declare global {
  interface Window {
    FaceMesh?: new (config: { locateFile: (file: string) => string }) => FaceMeshInstance;
  }
}

const BASE = "/mediapipe/face_mesh/";
const DETECT_TIMEOUT_MS = 20000;

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.FaceMesh) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise<void>((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `${BASE}face_mesh.js`;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        scriptPromise = null;
        s.remove();
        reject(new Error("face_mesh.js load failed"));
      };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

export interface Detector {
  // fresh=true 이면 이전 프레임의 추적 상태를 지우고 정지 이미지로 새로 분석한다.
  detect(source: HTMLCanvasElement | HTMLVideoElement, fresh?: boolean): Promise<Pt[][]>;
  close(): void;
}

export async function createDetector(): Promise<Detector> {
  await loadScript();
  const FaceMesh = window.FaceMesh;
  if (!FaceMesh) throw new Error("FaceMesh unavailable");

  const fm = new FaceMesh({ locateFile: (file) => `${BASE}${file}` });
  fm.setOptions({
    maxNumFaces: 2,
    refineLandmarks: true,
    minDetectionConfidence: 0.6,
    minTrackingConfidence: 0.6,
    selfieMode: false,
  });

  let pending: ((faces: Pt[][]) => void) | null = null;
  fm.onResults((results) => {
    const cb = pending;
    pending = null;
    cb?.(results.multiFaceLandmarks ?? []);
  });
  await fm.initialize();

  return {
    detect(source, fresh = false) {
      return new Promise<Pt[][]>((resolve, reject) => {
        const timer = setTimeout(() => {
          pending = null;
          reject(new Error("detect timeout"));
        }, DETECT_TIMEOUT_MS);
        pending = (faces) => {
          clearTimeout(timer);
          resolve(faces);
        };
        try {
          if (fresh) fm.reset();
          fm.send({ image: source }).catch((err: unknown) => {
            clearTimeout(timer);
            pending = null;
            reject(err instanceof Error ? err : new Error("detect failed"));
          });
        } catch (err) {
          clearTimeout(timer);
          pending = null;
          reject(err instanceof Error ? err : new Error("detect failed"));
        }
      });
    },
    close() {
      try {
        void fm.close();
      } catch {
        /* 이미 닫힌 경우 무시 */
      }
    },
  };
}
