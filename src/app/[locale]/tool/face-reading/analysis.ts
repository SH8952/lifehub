// 관상 도구 — 얼굴 특징점(MediaPipe Face Mesh 468점)으로 정면 여부를 판별하고 부위별 특징을 분류한다.
// 모든 계산은 방문자의 브라우저 안에서만 이루어지며, 이 파일은 순수 함수만 담고 있다(서버·클라이언트 모두 안전).
// 임계값은 오락용 분류 기준이며 아래 THRESHOLDS 한 곳에서 조정한다.

export interface Pt {
  x: number;
  y: number;
  z: number;
}

export type PoseIssue = "none" | "cut" | "small" | "yaw" | "pitch" | "roll";

export type FaceShape = "oval" | "round" | "square" | "long" | "heart";
export type Zone = "upper" | "middle" | "lower" | "balanced";
export type Spacing = "wide" | "balanced" | "close";
export type EyeTilt = "up" | "straight" | "down";
export type EyeSize = "large" | "medium" | "small";
export type Brow = "arched" | "soft" | "straight";
export type NoseWidth = "broad" | "medium" | "narrow";
export type MouthWidth = "wide" | "medium" | "small";
export type Corner = "up" | "flat" | "down";

export interface Reading {
  shape: FaceShape;
  zone: Zone;
  spacing: Spacing;
  tilt: EyeTilt;
  eyeSize: EyeSize;
  brow: Brow;
  nose: NoseWidth;
  mouth: MouthWidth;
  corner: Corner;
}

export interface Measures {
  lengthRatio: number; // 얼굴 세로 / 가로
  jawRatio: number; // 턱 폭 / 광대 폭
  zones: [number, number, number]; // 상정·중정·하정 비율(합 1)
  eyeSpacing: number; // 눈 사이 / 눈 너비
  eyeTilt: number; // 눈꼬리 각도(도, +는 올라감)
  eyeOpen: number; // 눈 높이 / 눈 너비
  browArch: number; // 눈썹 곡선 높이 / 눈썹 길이
  noseWidth: number; // 코 폭 / 눈 사이
  mouthWidth: number; // 입 너비 / 얼굴 너비
  mouthCorner: number; // 입꼬리 올라감 정도(입 너비 대비)
}

export const THRESHOLDS = {
  // 정면 판별(도 단위). pitchBias: 실제 정면 얼굴도 특징점 깊이 차이로 약 +8도가 측정되어 그만큼 보정한다.
  yawMax: 12,
  pitchBias: 8,
  pitchMax: 14,
  rollMax: 20,
  noseOffsetMax: 0.09,
  minFaceWidthRatio: 0.15,
  edgeMargin: 0.01,
  // 얼굴형 (얼굴 세로/가로, 턱 폭/광대 폭)
  longRatio: 1.22,
  roundRatio: 1.12,
  squareRatio: 1.2,
  squareJaw: 0.835,
  heartJaw: 0.77,
  // 삼정: 일반적인 비율(상·중·하)에서 가장 크게 벗어난 구간을 두드러진 구간으로 본다
  zoneTypical: [0.195, 0.415, 0.39],
  zoneDeviation: 0.03,
  // 눈
  spacingWide: 1.28,
  spacingClose: 1.18,
  tiltUp: 7,
  tiltDown: 2,
  eyeLarge: 0.37,
  eyeSmall: 0.29,
  // 눈썹
  browArched: 0.155,
  browStraight: 0.115,
  // 코·입
  noseBroad: 1.33,
  noseNarrow: 1.22,
  mouthWide: 0.44,
  mouthSmall: 0.345,
  cornerUp: 0.07,
  cornerDown: -0.02,
} as const;

const I = {
  top: 10,
  chin: 152,
  cheekL: 234,
  cheekR: 454,
  jawL: 172,
  jawR: 397,
  browMid: 9,
  noseTip: 1,
  noseBase: 2,
  alarL: 129,
  alarR: 358,
  mouthL: 61,
  mouthR: 291,
  lipInUp: 13,
  lipInLow: 14,
  eyeLOut: 33,
  eyeLIn: 133,
  eyeLUp: 159,
  eyeLLow: 145,
  eyeRIn: 362,
  eyeROut: 263,
  eyeRUp: 386,
  eyeRLow: 374,
  browLIn: 107,
  browLPeak: 105,
  browLOut: 70,
  browRIn: 336,
  browRPeak: 334,
  browROut: 300,
} as const;

const EDGE_POINTS = [I.top, I.chin, I.cheekL, I.cheekR, I.jawL, I.jawR, I.eyeLOut, I.eyeROut, I.mouthL, I.mouthR];

const RAD = 180 / Math.PI;

const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);

function toPixels(lms: Pt[], w: number, h: number): Pt[] {
  return lms.map((p) => ({ x: p.x * w, y: p.y * h, z: p.z * w }));
}

export interface PoseResult {
  ok: boolean;
  issue: PoseIssue;
  yaw: number;
  pitch: number;
  roll: number;
}

// 정면 사진인지 판별한다. 정면이 아니면 어떤 문제인지(issue)를 돌려준다.
export function checkPose(lms: Pt[], w: number, h: number): PoseResult {
  const px = toPixels(lms, w, h);
  const T = THRESHOLDS;

  const roll = Math.atan2(px[I.eyeROut].y - px[I.eyeLOut].y, px[I.eyeROut].x - px[I.eyeLOut].x) * RAD;
  const yaw =
    Math.atan2(px[I.cheekR].z - px[I.cheekL].z, px[I.cheekR].x - px[I.cheekL].x) * RAD;
  const pitch = Math.atan2(px[I.chin].z - px[I.top].z, px[I.chin].y - px[I.top].y) * RAD;

  const faceW = dist(px[I.cheekL], px[I.cheekR]);
  const noseOffset =
    faceW > 0
      ? Math.abs(px[I.noseTip].x - (px[I.cheekL].x + px[I.cheekR].x) / 2) / faceW
      : 1;

  const result = (issue: PoseIssue): PoseResult => ({ ok: issue === "none", issue, yaw, pitch, roll });

  for (const i of EDGE_POINTS) {
    const p = lms[i];
    if (p.x < T.edgeMargin || p.x > 1 - T.edgeMargin || p.y < T.edgeMargin || p.y > 1 - T.edgeMargin) {
      return result("cut");
    }
  }
  if (faceW / w < T.minFaceWidthRatio) return result("small");
  if (Math.abs(yaw) > T.yawMax || noseOffset > T.noseOffsetMax) return result("yaw");
  if (Math.abs(pitch - T.pitchBias) > T.pitchMax) return result("pitch");
  if (Math.abs(roll) > T.rollMax) return result("roll");
  return result("none");
}

// 머리가 기울어진 정도(roll)를 보정해 얼굴이 수평이 되도록 점을 회전한다.
function levelPoints(px: Pt[]): Pt[] {
  const roll = Math.atan2(px[I.eyeROut].y - px[I.eyeLOut].y, px[I.eyeROut].x - px[I.eyeLOut].x);
  const cx = (px[I.cheekL].x + px[I.cheekR].x) / 2;
  const cy = (px[I.cheekL].y + px[I.cheekR].y) / 2;
  const c = Math.cos(-roll);
  const s = Math.sin(-roll);
  return px.map((p) => {
    const dx = p.x - cx;
    const dy = p.y - cy;
    return { x: cx + dx * c - dy * s, y: cy + dx * s + dy * c, z: p.z };
  });
}

// 눈썹 곡선의 높이: 안쪽 끝~바깥쪽 끝을 잇는 선에서 눈썹 정점이 얼마나 위로 솟았는지(눈썹 길이 대비)
function browArch(inn: Pt, peak: Pt, out: Pt): number {
  const len = dist(inn, out);
  if (len === 0) return 0;
  const t = (peak.x - inn.x) / (out.x - inn.x || 1);
  const lineY = inn.y + (out.y - inn.y) * t;
  return (lineY - peak.y) / len;
}

export function measure(lms: Pt[], w: number, h: number): Measures {
  const p = levelPoints(toPixels(lms, w, h));

  const faceLen = dist(p[I.top], p[I.chin]);
  const faceW = dist(p[I.cheekL], p[I.cheekR]);
  const jawW = dist(p[I.jawL], p[I.jawR]);

  const upper = Math.max(p[I.browMid].y - p[I.top].y, 0);
  const middle = Math.max(p[I.noseBase].y - p[I.browMid].y, 0);
  const lower = Math.max(p[I.chin].y - p[I.noseBase].y, 0);
  const zoneSum = upper + middle + lower || 1;

  const eyeLW = dist(p[I.eyeLOut], p[I.eyeLIn]);
  const eyeRW = dist(p[I.eyeRIn], p[I.eyeROut]);
  const eyeAvgW = (eyeLW + eyeRW) / 2 || 1;
  const innerGap = dist(p[I.eyeLIn], p[I.eyeRIn]);

  const tiltL = Math.atan2(p[I.eyeLIn].y - p[I.eyeLOut].y, Math.abs(p[I.eyeLIn].x - p[I.eyeLOut].x) || 1) * RAD;
  const tiltR = Math.atan2(p[I.eyeRIn].y - p[I.eyeROut].y, Math.abs(p[I.eyeRIn].x - p[I.eyeROut].x) || 1) * RAD;

  const openL = dist(p[I.eyeLUp], p[I.eyeLLow]) / (eyeLW || 1);
  const openR = dist(p[I.eyeRUp], p[I.eyeRLow]) / (eyeRW || 1);

  const archL = browArch(p[I.browLIn], p[I.browLPeak], p[I.browLOut]);
  const archR = browArch(p[I.browRIn], p[I.browRPeak], p[I.browROut]);

  const mouthW = dist(p[I.mouthL], p[I.mouthR]);
  const lipCenterY = (p[I.lipInUp].y + p[I.lipInLow].y) / 2;
  const cornerY = (p[I.mouthL].y + p[I.mouthR].y) / 2;

  return {
    lengthRatio: faceW ? faceLen / faceW : 1.4,
    jawRatio: faceW ? jawW / faceW : 0.72,
    zones: [upper / zoneSum, middle / zoneSum, lower / zoneSum],
    eyeSpacing: innerGap / eyeAvgW,
    eyeTilt: (tiltL + tiltR) / 2,
    eyeOpen: (openL + openR) / 2,
    browArch: (archL + archR) / 2,
    noseWidth: innerGap ? dist(p[I.alarL], p[I.alarR]) / innerGap : 1,
    mouthWidth: faceW ? mouthW / faceW : 0.38,
    mouthCorner: mouthW ? (lipCenterY - cornerY) / mouthW : 0,
  };
}

export function classify(m: Measures): Reading {
  const T = THRESHOLDS;

  let shape: FaceShape = "oval";
  if (m.jawRatio < T.heartJaw) shape = "heart";
  else if (m.lengthRatio >= T.longRatio) shape = "long";
  else if (m.jawRatio >= T.squareJaw && m.lengthRatio < T.squareRatio) shape = "square";
  else if (m.lengthRatio < T.roundRatio) shape = "round";

  const devs = m.zones.map((z, i) => z - T.zoneTypical[i]);
  const maxDev = Math.max(...devs);
  const zone: Zone =
    maxDev >= T.zoneDeviation ? (["upper", "middle", "lower"] as const)[devs.indexOf(maxDev)] : "balanced";

  return {
    shape,
    zone,
    spacing: m.eyeSpacing >= T.spacingWide ? "wide" : m.eyeSpacing < T.spacingClose ? "close" : "balanced",
    tilt: m.eyeTilt >= T.tiltUp ? "up" : m.eyeTilt < T.tiltDown ? "down" : "straight",
    eyeSize: m.eyeOpen >= T.eyeLarge ? "large" : m.eyeOpen < T.eyeSmall ? "small" : "medium",
    brow: m.browArch >= T.browArched ? "arched" : m.browArch < T.browStraight ? "straight" : "soft",
    nose: m.noseWidth >= T.noseBroad ? "broad" : m.noseWidth < T.noseNarrow ? "narrow" : "medium",
    mouth: m.mouthWidth >= T.mouthWide ? "wide" : m.mouthWidth < T.mouthSmall ? "small" : "medium",
    corner: m.mouthCorner >= T.cornerUp ? "up" : m.mouthCorner < T.cornerDown ? "down" : "flat",
  };
}
