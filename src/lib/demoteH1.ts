// 도구 페이지의 <h1>은 도구 제목 1개만 남겨야 하므로(검색엔진 사이트 진단: <H1> 2개 이상 발견),
// 사용자 문서 미리보기 안에서 렌더되는 <h1>을 <h2>로 바꿉니다.
// 마크다운 미리보기는 data-demoted-h1 속성을 기준으로 원래 h1 모양(크기·굵기)을 유지합니다.
export function demoteH1ToH2(html: string): string {
  return html
    .replace(/<h1(\s[^>]*)?>/gi, (_match, attrs: string | undefined) => `<h2${attrs ?? ""} data-demoted-h1>`)
    .replace(/<\/h1\s*>/gi, "</h2>");
}

// prose-sm 의 h1 스타일(@tailwindcss/typography)과 동일하게 맞춘 클래스.
export const DEMOTED_H1_PROSE_CLASS =
  "[&_h2[data-demoted-h1]]:mt-0 [&_h2[data-demoted-h1]]:mb-[0.8em] [&_h2[data-demoted-h1]]:text-[2.14285714em] [&_h2[data-demoted-h1]]:leading-[1.2] [&_h2[data-demoted-h1]]:font-extrabold";
