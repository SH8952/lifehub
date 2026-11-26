// 한국어 도구 해설(KoCommentary) 데이터 형식.
// 내용은 도구마다 직접 작성하고, 제목·순서·표시 형태는 도구 id 해시로 달라진다(KoCommentary.tsx).
export type SectionKind = "concept" | "example" | "caution" | "usecase";

export interface Section {
  kind: SectionKind;
  /** 도구 맞춤 제목(선택). 없으면 종류별 제목 후보 중에서 고른다. */
  title?: string;
  paras?: string[];
  items?: { t?: string; d: string }[];
  rows?: [string, string][];
  note?: string;
}

export interface Commentary {
  sections: Section[];
}
