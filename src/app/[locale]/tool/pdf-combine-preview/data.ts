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
  addMore: string;
  fileListLabel: string;
  pagesLabel: string;
  removeFile: string;
  generateButton: string;
  processing: string;
  download: string;
  needTwoFiles: string;
  totalPagesLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 결합 미리보기",
    subtitle: "여러 PDF를 업로드해 표지 미리보기로 확인하고, 순서를 조정한 뒤 하나로 합치세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일들을 업로드하세요 (여러 개 선택 가능)",
    uploadHint: "클릭하거나 파일들을 끌어다 놓으세요",
    addMore: "+ 파일 추가",
    fileListLabel: "결합 순서 (미리보기)",
    pagesLabel: "페이지",
    removeFile: "삭제",
    generateButton: "결합하고 다운로드",
    processing: "결합 중...",
    download: "결합된 PDF 다운로드",
    needTwoFiles: "2개 이상의 PDF 파일을 업로드해 주세요.",
    totalPagesLabel: "결합 후 전체 페이지 수",
    howTitle: "사용 방법",
    howSteps: [
      "결합할 PDF 파일들을 업로드합니다.",
      "각 파일의 표지 미리보기를 확인하고 위/아래 버튼으로 순서를 조정합니다.",
      "결합을 실행하고 하나의 PDF로 다운로드합니다.",
    ],
    faq: [
      { q: "기존 'PDF 병합/분할' 도구와 다른 점은 무엇인가요?", a: "이 도구는 합치기 전에 각 파일의 표지를 미리보기로 보여주어 순서를 더 쉽게 확인하고 조정할 수 있습니다." },
      { q: "몇 개까지 합칠 수 있나요?", a: "브라우저 메모리가 허용하는 한 여러 개를 합칠 수 있지만, 파일이 매우 많으면 처리 시간이 길어질 수 있습니다." },
      { q: "각 파일의 모든 페이지가 포함되나요?", a: "네, 설정한 순서대로 각 파일의 모든 페이지가 결합됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Combine with Preview",
    subtitle: "Upload multiple PDFs, preview their covers, reorder them, then combine into one. All processing happens in your browser.",
    uploadLabel: "Upload PDF files (multiple allowed)",
    uploadHint: "Click or drag and drop files",
    addMore: "+ Add More Files",
    fileListLabel: "Combine Order (Preview)",
    pagesLabel: "pages",
    removeFile: "Remove",
    generateButton: "Combine & Download",
    processing: "Combining...",
    download: "Download Combined PDF",
    needTwoFiles: "Please upload at least 2 PDF files.",
    totalPagesLabel: "Total Pages After Combining",
    howTitle: "How to Use",
    howSteps: [
      "Upload the PDF files you want to combine.",
      "Check each file's cover preview and reorder with up/down buttons.",
      "Combine and download as a single PDF.",
    ],
    faq: [
      { q: "How is this different from the existing 'PDF Merge/Split' tool?", a: "This tool shows a cover preview of each file before combining, making it easier to check and adjust the order." },
      { q: "How many files can I combine?", a: "As many as your browser's memory allows, though a very large number of files may take longer to process." },
      { q: "Are all pages of each file included?", a: "Yes, every page of each file is combined in order, following the order you set." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDF結合プレビュー",
    subtitle: "複数のPDFをアップロードして表紙プレビューで確認し、順序を調整してから1つに結合します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください（複数選択可）",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    addMore: "+ ファイルを追加",
    fileListLabel: "結合順序（プレビュー）",
    pagesLabel: "ページ",
    removeFile: "削除",
    generateButton: "結合してダウンロード",
    processing: "結合中...",
    download: "結合済みPDFをダウンロード",
    needTwoFiles: "2つ以上のPDFファイルをアップロードしてください。",
    totalPagesLabel: "結合後の総ページ数",
    howTitle: "使用方法",
    howSteps: [
      "結合するPDFファイルをアップロードします。",
      "各ファイルの表紙プレビューを確認し、上下ボタンで順序を調整します。",
      "結合を実行して1つのPDFとしてダウンロードします。",
    ],
    faq: [
      { q: "既存の「PDF結合・分割」ツールと何が違いますか？", a: "このツールは結合前に各ファイルの表紙プレビューを表示するため、順序の確認・調整がしやすくなっています。" },
      { q: "何個まで結合できますか？", a: "ブラウザのメモリが許す限り結合できますが、ファイル数が非常に多い場合は処理時間が長くなることがあります。" },
      { q: "各ファイルのすべてのページが含まれますか？", a: "はい、設定した順序に従って各ファイルのすべてのページが順番に結合されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Combinar PDF con Vista Previa",
    subtitle: "Sube varios PDF, previsualiza sus portadas, reordénalos y combínalos en uno. Todo se procesa en tu navegador.",
    uploadLabel: "Sube archivos PDF (se permiten varios)",
    uploadHint: "Haz clic o arrastra y suelta archivos",
    addMore: "+ Añadir Más Archivos",
    fileListLabel: "Orden de Combinación (Vista Previa)",
    pagesLabel: "páginas",
    removeFile: "Eliminar",
    generateButton: "Combinar y Descargar",
    processing: "Combinando...",
    download: "Descargar PDF Combinado",
    needTwoFiles: "Sube al menos 2 archivos PDF.",
    totalPagesLabel: "Total de Páginas tras Combinar",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube los archivos PDF que quieras combinar.",
      "Revisa la portada de cada archivo y reordénalos con los botones.",
      "Combina y descarga como un solo PDF.",
    ],
    faq: [
      { q: "¿En qué se diferencia de la herramienta existente 'Combinar/Dividir PDF'?", a: "Esta herramienta muestra una vista previa de la portada de cada archivo antes de combinar, facilitando revisar y ajustar el orden." },
      { q: "¿Cuántos archivos puedo combinar?", a: "Tantos como permita la memoria de tu navegador, aunque muchos archivos pueden tardar más en procesarse." },
      { q: "¿Se incluyen todas las páginas de cada archivo?", a: "Sí, todas las páginas de cada archivo se combinan en orden, según el orden que establezcas." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
