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
  pageCountLabel: string;
  rangeLabel: string;
  rangePlaceholder: string;
  rangeHint: string;
  generateButton: string;
  processing: string;
  download: string;
  errorAllPages: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 페이지 삭제기",
    subtitle: "PDF 파일에서 원하는 페이지만 골라 삭제하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    pageCountLabel: "전체 페이지 수",
    rangeLabel: "삭제할 페이지",
    rangePlaceholder: "예: 2, 4-6",
    rangeHint: "쉼표로 구분하거나 하이픈으로 범위를 지정하세요.",
    generateButton: "삭제 적용하기",
    processing: "처리 중...",
    download: "PDF 다운로드",
    errorAllPages: "모든 페이지를 삭제할 수는 없습니다. 최소 1페이지는 남겨야 합니다.",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "삭제할 페이지 번호를 입력합니다.",
      "삭제를 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "여러 페이지를 한 번에 삭제할 수 있나요?", a: "네, 쉼표와 하이픈을 조합해 여러 페이지와 범위를 동시에 지정할 수 있습니다(예: 2, 5-7)." },
      { q: "모든 페이지를 삭제하면 어떻게 되나요?", a: "최소 1페이지는 남아 있어야 하므로, 전체 페이지를 모두 지정하면 오류가 표시됩니다." },
      { q: "원본 파일이 수정되나요?", a: "아니요, 원본 파일은 그대로 유지되며 삭제가 적용된 새 PDF 파일을 다운로드합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Page Deleter",
    subtitle: "Remove specific pages from a PDF file. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    pageCountLabel: "Total Pages",
    rangeLabel: "Pages to Delete",
    rangePlaceholder: "e.g. 2, 4-6",
    rangeHint: "Separate with commas, or use a hyphen for a range.",
    generateButton: "Apply Deletion",
    processing: "Processing...",
    download: "Download PDF",
    errorAllPages: "You cannot delete every page. At least one page must remain.",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Enter the page numbers to delete.",
      "Apply the deletion and download the result.",
    ],
    faq: [
      { q: "Can I delete multiple pages at once?", a: "Yes, you can combine commas and hyphens to specify multiple pages and ranges at once (e.g. 2, 5-7)." },
      { q: "What happens if I try to delete every page?", a: "At least one page must remain, so an error is shown if you select all pages." },
      { q: "Does this modify the original file?", a: "No, the original file stays untouched — you download a new PDF with the deletion applied." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFページ削除ツール",
    subtitle: "PDFファイルから特定のページだけを選んで削除します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    pageCountLabel: "総ページ数",
    rangeLabel: "削除するページ",
    rangePlaceholder: "例: 2, 4-6",
    rangeHint: "カンマで区切るか、ハイフンで範囲を指定してください。",
    generateButton: "削除を適用",
    processing: "処理中...",
    download: "PDFをダウンロード",
    errorAllPages: "すべてのページを削除することはできません。最低1ページは残す必要があります。",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "削除するページ番号を入力します。",
      "削除を適用し、結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "複数のページを一度に削除できますか？", a: "はい、カンマとハイフンを組み合わせて複数のページと範囲を同時に指定できます（例: 2, 5-7）。" },
      { q: "すべてのページを削除するとどうなりますか？", a: "最低1ページは残す必要があるため、すべてのページを指定するとエラーが表示されます。" },
      { q: "元のファイルは変更されますか？", a: "いいえ、元のファイルはそのまま保持され、削除が適用された新しいPDFファイルをダウンロードします。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Eliminador de Páginas PDF",
    subtitle: "Elimina páginas específicas de un archivo PDF. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    pageCountLabel: "Total de Páginas",
    rangeLabel: "Páginas a Eliminar",
    rangePlaceholder: "ej. 2, 4-6",
    rangeHint: "Separa con comas, o usa un guion para un rango.",
    generateButton: "Aplicar Eliminación",
    processing: "Procesando...",
    download: "Descargar PDF",
    errorAllPages: "No puedes eliminar todas las páginas. Debe quedar al menos una.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Introduce los números de página a eliminar.",
      "Aplica la eliminación y descarga el resultado.",
    ],
    faq: [
      { q: "¿Puedo eliminar varias páginas a la vez?", a: "Sí, puedes combinar comas y guiones para especificar varias páginas y rangos a la vez (ej. 2, 5-7)." },
      { q: "¿Qué pasa si intento eliminar todas las páginas?", a: "Debe quedar al menos una página, así que se muestra un error si seleccionas todas." },
      { q: "¿Esto modifica el archivo original?", a: "No, el archivo original permanece intacto; descargas un nuevo PDF con la eliminación aplicada." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
