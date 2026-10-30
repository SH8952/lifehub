export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  previewLabel: string;
  placeholder: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "마크다운 미리보기",
    subtitle: "마크다운을 입력하면 실시간으로 렌더링된 결과를 확인할 수 있습니다.",
    inputLabel: "마크다운 입력",
    previewLabel: "미리보기",
    placeholder: "# 제목\n\n**굵게**, *기울임*, [링크](https://example.com)\n\n- 목록 1\n- 목록 2\n\n```\n코드 블록\n```",
    howTitle: "사용 방법",
    howSteps: [
      "왼쪽 입력창에 마크다운 문법으로 글을 작성합니다.",
      "오른쪽 미리보기에서 렌더링된 결과를 바로 확인합니다.",
      "GitHub 등에 올리기 전 레이아웃을 빠르게 점검할 수 있습니다.",
    ],
    faq: [
      { q: "GitHub Flavored Markdown(표, 체크박스)도 지원하나요?", a: "네, 표와 작업 목록(체크박스) 등 GitHub Flavored Markdown 문법을 대부분 지원합니다." },
      { q: "입력한 내용이 서버로 전송되나요?", a: "아니요. 모든 렌더링은 브라우저 내에서 즉시 처리되며 서버로 전송되지 않습니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Markdown Preview",
    subtitle: "Type markdown and see the rendered result update in real time.",
    inputLabel: "Markdown Input",
    previewLabel: "Preview",
    placeholder: "# Heading\n\n**bold**, *italic*, [link](https://example.com)\n\n- item 1\n- item 2\n\n```\ncode block\n```",
    howTitle: "How to Use",
    howSteps: [
      "Write your text using markdown syntax in the left panel.",
      "Check the rendered result instantly in the right preview.",
      "Quickly verify the layout before posting to GitHub or elsewhere.",
    ],
    faq: [
      { q: "Does it support GitHub Flavored Markdown (tables, checkboxes)?", a: "Yes, most GFM syntax including tables and task list checkboxes is supported." },
      { q: "Is my input sent to a server?", a: "No. All rendering happens instantly in your browser and nothing is sent to a server." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "マークダウンプレビュー",
    subtitle: "マークダウンを入力するとリアルタイムでレンダリング結果を確認できます。",
    inputLabel: "マークダウン入力",
    previewLabel: "プレビュー",
    placeholder: "# 見出し\n\n**太字**、*斜体*、[リンク](https://example.com)\n\n- 項目1\n- 項目2\n\n```\nコードブロック\n```",
    howTitle: "使用方法",
    howSteps: [
      "左側の入力欄にマークダウン記法で文章を作成します。",
      "右側のプレビューでレンダリング結果をすぐに確認します。",
      "GitHubなどに投稿する前にレイアウトを素早く確認できます。",
    ],
    faq: [
      { q: "GitHub Flavored Markdown（表、チェックボックス）もサポートしますか？", a: "はい、表やタスクリスト（チェックボックス）などGitHub Flavored Markdown記法のほとんどをサポートします。" },
      { q: "入力した内容はサーバーに送信されますか？", a: "いいえ。すべてのレンダリングはブラウザ内で即座に処理され、サーバーには送信されません。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Vista Previa de Markdown",
    subtitle: "Escribe markdown y ve el resultado renderizado actualizarse en tiempo real.",
    inputLabel: "Entrada de Markdown",
    previewLabel: "Vista Previa",
    placeholder: "# Encabezado\n\n**negrita**, *cursiva*, [enlace](https://example.com)\n\n- item 1\n- item 2\n\n```\nbloque de codigo\n```",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe tu texto con sintaxis markdown en el panel izquierdo.",
      "Revisa el resultado renderizado al instante en la vista previa derecha.",
      "Verifica rápidamente el diseño antes de publicar en GitHub u otro sitio.",
    ],
    faq: [
      { q: "¿Soporta GitHub Flavored Markdown (tablas, casillas)?", a: "Sí, se soporta la mayoría de la sintaxis GFM, incluyendo tablas y casillas de tareas." },
      { q: "¿Se envía mi entrada a un servidor?", a: "No. Todo el renderizado ocurre instantáneamente en tu navegador y no se envía nada a un servidor." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
