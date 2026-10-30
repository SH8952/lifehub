export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  uploadLabel: string;
  uploadHint: string;
  changeFile: string;
  pageListLabel: string;
  pageLabel: string;
  generateButton: string;
  processing: string;
  download: string;
  resetOrder: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 페이지 순서 변경기",
    subtitle: "PDF 페이지의 순서를 위/아래로 자유롭게 바꾸고 새 PDF로 저장하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    pageListLabel: "페이지 순서 (원래 번호)",
    pageLabel: "페이지",
    generateButton: "순서 적용하고 저장",
    processing: "처리 중...",
    download: "PDF 다운로드",
    resetOrder: "순서 초기화",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "각 페이지 옆의 위/아래 버튼으로 순서를 조정합니다.",
      "순서를 적용하고 새 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "페이지를 삭제할 수도 있나요?", a: "이 도구는 순서 변경 전용입니다. 페이지 삭제는 'PDF 페이지 삭제기'를 이용해 주세요." },
      { q: "원본 파일이 변경되나요?", a: "아니요, 새로운 PDF 파일로 다운로드되며 원본은 그대로 유지됩니다." },
      { q: "페이지가 많아도 사용할 수 있나요?", a: "네, 다만 페이지 수가 매우 많을 경우 처리 시간이 다소 걸릴 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Page Reorder Tool",
    subtitle: "Freely move PDF pages up or down and save as a new PDF. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    pageListLabel: "Page Order (original number)",
    pageLabel: "Page",
    generateButton: "Apply Order & Save",
    processing: "Processing...",
    download: "Download PDF",
    resetOrder: "Reset Order",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Use the up/down buttons next to each page to adjust order.",
      "Apply the order and download the new PDF.",
    ],
    faq: [
      { q: "Can I also delete pages here?", a: "This tool is for reordering only. Use the 'PDF Page Deleter' to remove pages." },
      { q: "Does this change my original file?", a: "No, a new PDF is downloaded and your original file stays unchanged." },
      { q: "Does it work with many pages?", a: "Yes, though processing may take a bit longer with a very large number of pages." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFページ順序変更ツール",
    subtitle: "PDFページの順序を上下に自由に変更して新しいPDFとして保存します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    pageListLabel: "ページ順序（元の番号）",
    pageLabel: "ページ",
    generateButton: "順序を適用して保存",
    processing: "処理中...",
    download: "PDFをダウンロード",
    resetOrder: "順序をリセット",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "各ページの上下ボタンで順序を調整します。",
      "順序を適用して新しいPDFをダウンロードします。",
    ],
    faq: [
      { q: "ページを削除することもできますか？", a: "このツールは順序変更専用です。ページの削除は「PDFページ削除ツール」をご利用ください。" },
      { q: "元のファイルは変更されますか？", a: "いいえ、新しいPDFファイルがダウンロードされ、元のファイルはそのまま保持されます。" },
      { q: "ページ数が多くても使えますか？", a: "はい、ただしページ数が非常に多い場合は処理に時間がかかることがあります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Reordenador de Páginas PDF",
    subtitle: "Mueve libremente las páginas de un PDF hacia arriba o abajo y guarda un nuevo PDF. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    pageListLabel: "Orden de Páginas (número original)",
    pageLabel: "Página",
    generateButton: "Aplicar Orden y Guardar",
    processing: "Procesando...",
    download: "Descargar PDF",
    resetOrder: "Restablecer Orden",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Usa los botones arriba/abajo junto a cada página para ajustar el orden.",
      "Aplica el orden y descarga el nuevo PDF.",
    ],
    faq: [
      { q: "¿También puedo eliminar páginas aquí?", a: "Esta herramienta es solo para reordenar. Usa el 'Eliminador de Páginas PDF' para quitar páginas." },
      { q: "¿Esto cambia mi archivo original?", a: "No, se descarga un nuevo PDF y tu archivo original permanece sin cambios." },
      { q: "¿Funciona con muchas páginas?", a: "Sí, aunque el procesamiento puede tardar un poco más con un número muy grande de páginas." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
