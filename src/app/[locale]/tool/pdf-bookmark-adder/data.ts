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
  bookmarksLabel: string;
  titlePlaceholder: string;
  pageLabel: string;
  addBookmark: string;
  removeBookmark: string;
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
    title: "PDF 북마크(목차) 추가기",
    subtitle: "PDF에 페이지별 북마크(목차)를 추가해 PDF 뷰어에서 바로 이동할 수 있게 하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    pageCountLabel: "전체 페이지 수",
    bookmarksLabel: "북마크 목록",
    titlePlaceholder: "북마크 제목",
    pageLabel: "페이지",
    addBookmark: "+ 북마크 추가",
    removeBookmark: "삭제",
    generateButton: "북마크 적용하고 저장",
    processing: "처리 중...",
    download: "PDF 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "북마크 제목과 해당 페이지 번호를 입력해 목록을 구성합니다.",
      "북마크를 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "북마크는 어디서 확인할 수 있나요?", a: "Adobe Acrobat, 대부분의 브라우저 내장 PDF 뷰어 등에서 왼쪽 패널의 목차/북마크 영역에 표시됩니다." },
      { q: "중첩된(하위) 북마크도 만들 수 있나요?", a: "현재 버전은 모두 같은 단계(평면 목록)의 북마크만 지원합니다." },
      { q: "기존 북마크가 있는 PDF는 어떻게 되나요?", a: "기존 북마크는 새로 입력한 목록으로 교체됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Bookmark (Outline) Adder",
    subtitle: "Add page bookmarks (an outline/table of contents) to a PDF so viewers can jump directly to them. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    pageCountLabel: "Total Pages",
    bookmarksLabel: "Bookmark List",
    titlePlaceholder: "Bookmark title",
    pageLabel: "Page",
    addBookmark: "+ Add Bookmark",
    removeBookmark: "Remove",
    generateButton: "Apply Bookmarks & Save",
    processing: "Processing...",
    download: "Download PDF",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Build the list by entering bookmark titles and their page numbers.",
      "Apply the bookmarks and download the resulting PDF.",
    ],
    faq: [
      { q: "Where can I see the bookmarks?", a: "They appear in the table-of-contents/bookmarks panel of Adobe Acrobat, most browser built-in PDF viewers, and similar readers." },
      { q: "Can I create nested (sub) bookmarks?", a: "The current version only supports flat, same-level bookmarks." },
      { q: "What happens to a PDF that already has bookmarks?", a: "Existing bookmarks are replaced with the new list you entered." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFブックマーク（目次）追加ツール",
    subtitle: "PDFにページごとのブックマーク（目次）を追加し、PDFビューアで直接移動できるようにします。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    pageCountLabel: "総ページ数",
    bookmarksLabel: "ブックマーク一覧",
    titlePlaceholder: "ブックマークタイトル",
    pageLabel: "ページ",
    addBookmark: "+ ブックマークを追加",
    removeBookmark: "削除",
    generateButton: "ブックマークを適用して保存",
    processing: "処理中...",
    download: "PDFをダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "ブックマークのタイトルと対応するページ番号を入力してリストを作成します。",
      "ブックマークを適用して結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "ブックマークはどこで確認できますか？", a: "Adobe Acrobatやほとんどのブラウザ内蔵PDFビューアなどの左側パネルの目次・ブックマーク領域に表示されます。" },
      { q: "入れ子（下位）のブックマークも作れますか？", a: "現在のバージョンはすべて同じ階層（フラットなリスト）のブックマークのみ対応しています。" },
      { q: "既存のブックマークがあるPDFはどうなりますか？", a: "既存のブックマークは置き換えられ、新しく入力したリストに置き換わります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Añadir Marcadores (Índice) a PDF",
    subtitle: "Añade marcadores de página (un índice) a un PDF para poder saltar directamente a ellos. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    pageCountLabel: "Total de Páginas",
    bookmarksLabel: "Lista de Marcadores",
    titlePlaceholder: "Título del marcador",
    pageLabel: "Página",
    addBookmark: "+ Añadir Marcador",
    removeBookmark: "Eliminar",
    generateButton: "Aplicar Marcadores y Guardar",
    processing: "Procesando...",
    download: "Descargar PDF",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Crea la lista introduciendo títulos de marcador y sus números de página.",
      "Aplica los marcadores y descarga el PDF resultante.",
    ],
    faq: [
      { q: "¿Dónde puedo ver los marcadores?", a: "Aparecen en el panel de índice/marcadores de Adobe Acrobat, la mayoría de visores PDF integrados en navegadores y similares." },
      { q: "¿Puedo crear marcadores anidados (subniveles)?", a: "La versión actual solo admite marcadores planos, todos al mismo nivel." },
      { q: "¿Qué pasa con un PDF que ya tiene marcadores?", a: "Los marcadores existentes se reemplazan por la nueva lista que introduzcas." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
