export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  placeholderText: string;
  editLabel: string;
  previewLabel: string;
  formatLabel: string;
  downloadButton: string;
  generatingLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "마크다운 → PDF 변환기",
    subtitle: "마크다운 문서를 작성하고 실시간 미리보기를 확인한 뒤 PDF 파일로 바로 다운로드하세요. 모든 처리는 브라우저에서 이루어집니다.",
    placeholderText: "# 제목을 입력하세요\n\n여기에 **마크다운** 내용을 작성합니다.\n\n- 목록 항목 1\n- 목록 항목 2",
    editLabel: "마크다운 입력",
    previewLabel: "미리보기",
    formatLabel: "용지 크기",
    downloadButton: "PDF 다운로드",
    generatingLabel: "PDF 생성 중...",
    howTitle: "사용 방법",
    howSteps: [
      "왼쪽 칸에 마크다운 문서를 작성합니다.",
      "오른쪽에서 실시간 미리보기를 확인합니다.",
      "용지 크기를 선택하고 PDF로 다운로드합니다.",
    ],
    faq: [
      { q: "어떤 마크다운 문법을 지원하나요?", a: "제목, 굵게/기울임, 목록, 링크, 표, 코드블록 등 일반적인 마크다운(GFM) 문법을 지원합니다." },
      { q: "한글이 PDF에 깨지지 않고 나오나요?", a: "네, 브라우저가 렌더링한 화면을 그대로 캡처하는 방식이라 한글/일본어/스페인어 등 모든 언어가 폰트 걱정 없이 정확히 표시됩니다." },
      { q: "문서가 길면 여러 페이지로 나뉘나요?", a: "네, 내용이 한 페이지를 넘으면 자동으로 다음 페이지로 이어져 출력됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 문서를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Markdown to PDF Converter",
    subtitle: "Write Markdown, preview it live, and download it directly as a PDF file. All processing happens in your browser.",
    placeholderText: "# Enter a title\n\nWrite your **Markdown** content here.\n\n- List item 1\n- List item 2",
    editLabel: "Markdown Input",
    previewLabel: "Preview",
    formatLabel: "Page Size",
    downloadButton: "Download PDF",
    generatingLabel: "Generating PDF...",
    howTitle: "How to Use",
    howSteps: [
      "Write your Markdown document in the left panel.",
      "Check the live preview on the right.",
      "Choose a page size and download as PDF.",
    ],
    faq: [
      { q: "What Markdown syntax is supported?", a: "Standard Markdown (GFM) syntax is supported, including headings, bold/italic, lists, links, tables, and code blocks." },
      { q: "Will non-Latin text render correctly in the PDF?", a: "Yes, since it captures exactly what your browser renders, Korean, Japanese, Spanish, and other languages display correctly with no font issues." },
      { q: "Does a long document split across multiple pages?", a: "Yes, content that exceeds one page automatically continues onto the next page." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your document on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "マークダウン → PDF変換ツール",
    subtitle: "マークダウン文書を作成し、リアルタイムプレビューを確認してからPDFファイルとして直接ダウンロードします。すべての処理はブラウザで行われます。",
    placeholderText: "# タイトルを入力してください\n\nここに**マークダウン**内容を書きます。\n\n- リスト項目1\n- リスト項目2",
    editLabel: "マークダウン入力",
    previewLabel: "プレビュー",
    formatLabel: "用紙サイズ",
    downloadButton: "PDFをダウンロード",
    generatingLabel: "PDF生成中...",
    howTitle: "使用方法",
    howSteps: [
      "左側にマークダウン文書を作成します。",
      "右側でリアルタイムプレビューを確認します。",
      "用紙サイズを選択してPDFとしてダウンロードします。",
    ],
    faq: [
      { q: "どのマークダウン記法に対応していますか？", a: "見出し、太字／斜体、リスト、リンク、表、コードブロックなど、一般的なマークダウン（GFM）記法に対応しています。" },
      { q: "日本語がPDFで崩れずに表示されますか？", a: "はい、ブラウザがレンダリングした画面をそのままキャプチャする方式のため、韓国語・日本語・スペイン語などすべての言語がフォントの心配なく正確に表示されます。" },
      { q: "文書が長い場合は複数ページに分かれますか？", a: "はい、内容が1ページを超える場合は自動的に次のページへ続けて出力されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、文書をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Markdown a PDF",
    subtitle: "Escribe Markdown, previsualízalo en tiempo real y descárgalo directamente como PDF. Todo se procesa en tu navegador.",
    placeholderText: "# Escribe un título\n\nEscribe tu contenido en **Markdown** aquí.\n\n- Elemento de lista 1\n- Elemento de lista 2",
    editLabel: "Entrada de Markdown",
    previewLabel: "Vista Previa",
    formatLabel: "Tamaño de Página",
    downloadButton: "Descargar PDF",
    generatingLabel: "Generando PDF...",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe tu documento Markdown en el panel izquierdo.",
      "Revisa la vista previa en vivo a la derecha.",
      "Elige un tamaño de página y descarga como PDF.",
    ],
    faq: [
      { q: "¿Qué sintaxis de Markdown se admite?", a: "Se admite la sintaxis estándar de Markdown (GFM), incluyendo títulos, negrita/cursiva, listas, enlaces, tablas y bloques de código." },
      { q: "¿El texto no latino se mostrará correctamente en el PDF?", a: "Sí, como captura exactamente lo que renderiza tu navegador, el coreano, japonés, español y otros idiomas se muestran correctamente sin problemas de fuentes." },
      { q: "¿Un documento largo se divide en varias páginas?", a: "Sí, el contenido que supera una página continúa automáticamente en la siguiente." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu documento en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
