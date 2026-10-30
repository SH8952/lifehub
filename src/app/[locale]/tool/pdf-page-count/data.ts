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
  fileNameLabel: string;
  fileSizeLabel: string;
  pageCountLabel: string;
  avgSizeLabel: string;
  firstPageSizeLabel: string;
  titleLabel: string;
  authorLabel: string;
  producerLabel: string;
  notSet: string;
  copyButton: string;
  copied: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 페이지 수·용량 정보 확인기",
    subtitle: "PDF 파일의 페이지 수, 용량, 용지 크기, 메타데이터를 한눈에 확인하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    fileNameLabel: "파일명",
    fileSizeLabel: "파일 용량",
    pageCountLabel: "총 페이지 수",
    avgSizeLabel: "페이지당 평균 용량",
    firstPageSizeLabel: "첫 페이지 크기",
    titleLabel: "제목",
    authorLabel: "작성자",
    producerLabel: "생성 프로그램",
    notSet: "(없음)",
    copyButton: "정보 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "페이지 수, 용량, 용지 크기, 메타데이터가 자동으로 표시됩니다.",
      "필요하면 정보를 복사해 사용합니다.",
    ],
    faq: [
      { q: "용지 크기는 어떤 단위로 표시되나요?", a: "PDF 내부 단위(포인트, pt)와 밀리미터(mm)로 함께 표시됩니다." },
      { q: "모든 페이지의 크기를 확인할 수 있나요?", a: "현재 버전은 첫 페이지의 크기만 보여줍니다. 대부분의 PDF는 모든 페이지가 동일한 크기를 사용합니다." },
      { q: "메타데이터가 비어 있으면 어떻게 되나요?", a: "해당 PDF에 제목/작성자 등 정보가 입력되지 않은 경우 '(없음)'으로 표시됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Page Count & File Info",
    subtitle: "Check a PDF's page count, file size, page dimensions, and metadata at a glance. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    fileNameLabel: "File Name",
    fileSizeLabel: "File Size",
    pageCountLabel: "Total Pages",
    avgSizeLabel: "Avg. Size per Page",
    firstPageSizeLabel: "First Page Dimensions",
    titleLabel: "Title",
    authorLabel: "Author",
    producerLabel: "Producer",
    notSet: "(not set)",
    copyButton: "Copy Info",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Page count, file size, page dimensions, and metadata are shown automatically.",
      "Copy the info if needed.",
    ],
    faq: [
      { q: "What unit are page dimensions shown in?", a: "They're shown in both PDF internal units (points, pt) and millimeters (mm)." },
      { q: "Can I check the size of every page?", a: "The current version only shows the first page's dimensions. Most PDFs use the same size for every page." },
      { q: "What if the metadata is empty?", a: "If a PDF has no title/author set, it's shown as '(not set)'." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFページ数・容量情報確認ツール",
    subtitle: "PDFファイルのページ数、容量、用紙サイズ、メタデータをひと目で確認します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    fileNameLabel: "ファイル名",
    fileSizeLabel: "ファイル容量",
    pageCountLabel: "総ページ数",
    avgSizeLabel: "ページ当たり平均容量",
    firstPageSizeLabel: "最初のページサイズ",
    titleLabel: "タイトル",
    authorLabel: "作成者",
    producerLabel: "作成アプリケーション",
    notSet: "（なし）",
    copyButton: "情報をコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "ページ数、容量、用紙サイズ、メタデータが自動的に表示されます。",
      "必要に応じて情報をコピーしてご利用ください。",
    ],
    faq: [
      { q: "用紙サイズはどの単位で表示されますか？", a: "PDF内部の単位（ポイント、pt）とミリメートル（mm）の両方で表示されます。" },
      { q: "すべてのページのサイズを確認できますか？", a: "現在のバージョンは最初のページのサイズのみ表示します。ほとんどのPDFはすべてのページで同じサイズを使用しています。" },
      { q: "メタデータが空の場合はどうなりますか？", a: "そのPDFにタイトル・作成者などの情報が入力されていない場合、「（なし）」と表示されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Información de Páginas y Tamaño de PDF",
    subtitle: "Consulta de un vistazo el número de páginas, el tamaño del archivo, las dimensiones de página y los metadatos de un PDF. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    fileNameLabel: "Nombre de Archivo",
    fileSizeLabel: "Tamaño de Archivo",
    pageCountLabel: "Total de Páginas",
    avgSizeLabel: "Tamaño Promedio por Página",
    firstPageSizeLabel: "Dimensiones de la Primera Página",
    titleLabel: "Título",
    authorLabel: "Autor",
    producerLabel: "Productor",
    notSet: "(no definido)",
    copyButton: "Copiar Información",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "El número de páginas, tamaño, dimensiones y metadatos se muestran automáticamente.",
      "Copia la información si la necesitas.",
    ],
    faq: [
      { q: "¿En qué unidad se muestran las dimensiones?", a: "Se muestran tanto en unidades internas del PDF (puntos, pt) como en milímetros (mm)." },
      { q: "¿Puedo ver el tamaño de todas las páginas?", a: "La versión actual solo muestra las dimensiones de la primera página. La mayoría de PDFs usan el mismo tamaño en todas." },
      { q: "¿Qué pasa si los metadatos están vacíos?", a: "Si un PDF no tiene título/autor definidos, se muestra como '(no definido)'." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
