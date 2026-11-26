// 도구 상세 페이지의 "관련 도구" 선정 로직 (순수 함수 · 빌드 시점에 계산됨).
// - 이름/설명의 어휘 유사도(TF-IDF 코사인) + 같은 카테고리 가산점으로 상위 후보 풀을 만든 뒤,
//   도구 id 해시를 시드로 풀에서 섞어 뽑는다. 따라서 같은 id는 언제나 같은 결과(재현 가능)이고,
//   도구마다 링크 구성이 서로 달라 "모든 페이지가 똑같은 틀"로 보이지 않는다.
import { allTools, type FlatTool } from "./tools-data";

export function hash32(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function mulberry32(seed: number): () => number {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function grams(text: string): string[] {
  const out: string[] = [];
  for (const word of text.toLowerCase().split(/[^0-9a-zㄱ-ㆎ가-힣]+/)) {
    if (word.length < 2) continue;
    if (/^[a-z0-9]+$/.test(word)) {
      out.push(word);
      continue;
    }
    for (let i = 0; i < word.length - 1; i++) out.push(word.slice(i, i + 2));
  }
  return out;
}

interface Feat {
  tool: FlatTool;
  vec: Map<string, number>;
  norm: number;
}

let FEATS: Feat[] | null = null;

function build(): Feat[] {
  if (FEATS) return FEATS;
  const raw = allTools.map((tool) => {
    const w = new Map<string, number>();
    for (const g of grams(`${tool.name} ${tool.nameEn}`)) w.set(g, 2);
    for (const g of grams(tool.description)) if (!w.has(g)) w.set(g, 1);
    for (const g of grams(tool.descriptionEn)) if (!w.has(g)) w.set(g, 1);
    return { tool, w };
  });
  const df = new Map<string, number>();
  for (const r of raw) for (const g of r.w.keys()) df.set(g, (df.get(g) ?? 0) + 1);
  const N = raw.length;
  // 너무 흔한 조각("계산", "변환", "도구" 등)은 관련도 판단에서 제외한다.
  const COMMON_LIMIT = Math.floor(N * 0.07);
  FEATS = raw.map((r) => {
    const vec = new Map<string, number>();
    let sq = 0;
    for (const [g, w] of r.w) {
      const f = df.get(g) ?? 1;
      if (f > COMMON_LIMIT) continue;
      const v = w * Math.log(1 + N / f);
      vec.set(g, v);
      sq += v * v;
    }
    return { tool: r.tool, vec, norm: Math.sqrt(sq) || 1 };
  });
  return FEATS;
}

function cosine(a: Feat, b: Feat): number {
  const [small, big] = a.vec.size <= b.vec.size ? [a, b] : [b, a];
  let dot = 0;
  for (const [g, v] of small.vec) {
    const o = big.vec.get(g);
    if (o) dot += v * o;
  }
  return dot / (a.norm * b.norm);
}

export const POOL_SIZE = 9;

/** 관련도 순으로 정렬한 후보 풀 (자기 자신 제외). */
export function relatedPool(toolId: string, poolSize = POOL_SIZE): FlatTool[] {
  const feats = build();
  const me = feats.find((f) => f.tool.id === toolId);
  if (!me) return [];
  return feats
    .filter((f) => f.tool.id !== toolId)
    .map((f) => ({
      tool: f.tool,
      score: cosine(me, f) + (f.tool.categoryId === me.tool.categoryId ? 0.12 : 0),
    }))
    .sort((x, y) => y.score - x.score || x.tool.id.localeCompare(y.tool.id))
    .slice(0, poolSize)
    .map((x) => x.tool);
}

/** 시드(도구 id)로 풀을 섞어 count개를 뽑는다. */
export function pickRelated(toolId: string, count: number): FlatTool[] {
  const pool = relatedPool(toolId);
  const rand = mulberry32(hash32(`rel|${toolId}`));
  const arr = pool.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}
