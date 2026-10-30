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
  targetPageLabel: string;
  copiesLabel: string;
  generateButton: string;
  processing: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 특정 페이지 복제기",
    subtitle: "PDF의 특정 페이지를 원하는 횟수만큼 복제해 바로 뒤에 삽입하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    pageCountLabel: "전체 페이지 수",
    targetPageLabel: "복제할 페이지 번호",
    copiesLabel: "복제 횟수",
    generateButton: "복제하고 저장",
    processing: "처리 중...",
    download: "PDF 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "복제할 페이지 번호와 복제 횟수를 입력합니다.",
      "복제를 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "복제된 페이지는 어디에 삽입되나요?", a: "원본 페이지 바로 뒤에 순서대로 삽입됩니다." },
      { q: "여러 페이지를 동시에 복제할 수 있나요?", a: "현재 버전은 한 번에 하나의 페이지만 복제합니다. 다른 페이지가 필요하면 다시 진행해 주세요." },
      { q: "복제된 페이지의 내용도 독립적으로 수정할 수 있나요?", a: "이 도구는 복제만 수행하며, 내용 편집은 다른 PDF 편집 도구를 이용해 주세요." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Page Duplicator",
    subtitle: "Duplicate a specific PDF page as many times as you need, right after the original. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    pageCountLabel: "Total Pages",
    targetPageLabel: "Page to Duplicate",
    copiesLabel: "Number of Copies",
    generateButton: "Duplicate & Save",
    processing: "Processing...",
    download: "Download PDF",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Enter the page number to duplicate and how many copies you need.",
      "Apply the duplication and download the resulting PDF.",
    ],
    faq: [
      { q: "Where are the duplicated pages inserted?", a: "They're inserted right after the original page, in order." },
      { q: "Can I duplicate multiple pages at once?", a: "The current version duplicates one page at a time. Run it again for other pages." },
      { q: "Can the duplicated pages be edited independently afterward?", a: "This tool only duplicates — use another PDF editing tool for content edits." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDF特定ページ複製ツール",
    subtitle: "PDFの特定ページを必要な回数だけ複製し、元のページの直後に挿入します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    pageCountLabel: "総ページ数",
    targetPageLabel: "複製するページ番号",
    copiesLabel: "複製回数",
    generateButton: "複製して保存",
    processing: "処理中...",
    download: "PDFをダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "複製するページ番号と複製回数を入力します。",
      "複製を適用して結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "複製されたページはどこに挿入されますか？", a: "元のページの直後に順番に挿入されます。" },
      { q: "複数のページを同時に複製できますか？", a: "現在のバージョンは一度に1ページのみ複製します。他のページが必要な場合は再度実行してください。" },
      { q: "複製されたページの内容を個別に編集できますか？", a: "このツールは複製のみを行います。内容の編集には他のPDF編集ツールをご利用ください。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Duplicador de Páginas PDF",
    subtitle: "Duplica una página específica de un PDF las veces que necesites, justo después de la original. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    pageCountLabel: "Total de Páginas",
    targetPageLabel: "Página a Duplicar",
    copiesLabel: "Número de Copias",
    generateButton: "Duplicar y Guardar",
    processing: "Procesando...",
    download: "Descargar PDF",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Introduce el número de página a duplicar y cuántas copias necesitas.",
      "Aplica la duplicación y descarga el PDF resultante.",
    ],
    faq: [
      { q: "¿Dónde se insertan las páginas duplicadas?", a: "Se insertan justo después de la página original, en orden." },
      { q: "¿Puedo duplicar varias páginas a la vez?", a: "La versión actual duplica una página a la vez. Repite el proceso para otras páginas." },
      { q: "¿Las páginas duplicadas se pueden editar después de forma independiente?", a: "Esta herramienta solo duplica; usa otra herramienta de edición de PDF para editar el contenido." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
