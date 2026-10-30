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
  titleLabel: string;
  authorLabel: string;
  subjectLabel: string;
  keywordsLabel: string;
  creatorLabel: string;
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
    title: "PDF 메타데이터 편집기",
    subtitle: "PDF의 제목, 작성자, 주제, 키워드 등 메타데이터를 확인하고 수정하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    titleLabel: "제목",
    authorLabel: "작성자",
    subjectLabel: "주제",
    keywordsLabel: "키워드 (쉼표로 구분)",
    creatorLabel: "생성 프로그램",
    generateButton: "변경사항 적용",
    processing: "처리 중...",
    download: "PDF 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "자동으로 불러온 기존 메타데이터를 원하는 값으로 수정합니다.",
      "변경사항을 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "메타데이터를 수정하면 PDF 내용도 바뀌나요?", a: "아니요, 문서 내용은 그대로 유지되며 제목·작성자 등 속성 정보만 변경됩니다." },
      { q: "키워드는 어떻게 입력하나요?", a: "쉼표(,)로 구분해 여러 개를 입력할 수 있습니다." },
      { q: "기존 메타데이터가 없는 PDF도 편집할 수 있나요?", a: "네, 비어 있는 상태로 표시되며 새로 입력한 값이 저장됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Metadata Editor",
    subtitle: "View and edit a PDF's title, author, subject, keywords, and other metadata. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    titleLabel: "Title",
    authorLabel: "Author",
    subjectLabel: "Subject",
    keywordsLabel: "Keywords (comma-separated)",
    creatorLabel: "Creator",
    generateButton: "Apply Changes",
    processing: "Processing...",
    download: "Download PDF",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Edit the automatically loaded existing metadata to your desired values.",
      "Apply the changes and download the resulting PDF.",
    ],
    faq: [
      { q: "Does editing metadata change the PDF's content?", a: "No, the document content stays the same — only properties like title and author change." },
      { q: "How do I enter keywords?", a: "Separate multiple keywords with commas." },
      { q: "Can I edit a PDF with no existing metadata?", a: "Yes, the fields will show empty and your new values will be saved." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFメタデータ編集ツール",
    subtitle: "PDFのタイトル、作成者、サブジェクト、キーワードなどのメタデータを確認・編集します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    titleLabel: "タイトル",
    authorLabel: "作成者",
    subjectLabel: "サブジェクト",
    keywordsLabel: "キーワード（カンマ区切り）",
    creatorLabel: "作成アプリケーション",
    generateButton: "変更を適用",
    processing: "処理中...",
    download: "PDFをダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "自動的に読み込まれた既存のメタデータを希望の値に編集します。",
      "変更を適用して結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "メタデータを編集するとPDFの内容も変わりますか？", a: "いいえ、文書内容はそのまま保持され、タイトルや作成者などの属性情報のみが変更されます。" },
      { q: "キーワードはどう入力しますか？", a: "カンマ（,）で区切って複数入力できます。" },
      { q: "既存のメタデータがないPDFも編集できますか？", a: "はい、空の状態で表示され、新しく入力した値が保存されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Editor de Metadatos PDF",
    subtitle: "Visualiza y edita el título, autor, asunto, palabras clave y otros metadatos de un PDF. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    titleLabel: "Título",
    authorLabel: "Autor",
    subjectLabel: "Asunto",
    keywordsLabel: "Palabras Clave (separadas por comas)",
    creatorLabel: "Creador",
    generateButton: "Aplicar Cambios",
    processing: "Procesando...",
    download: "Descargar PDF",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Edita los metadatos existentes cargados automáticamente con los valores deseados.",
      "Aplica los cambios y descarga el PDF resultante.",
    ],
    faq: [
      { q: "¿Editar los metadatos cambia el contenido del PDF?", a: "No, el contenido del documento permanece igual; solo cambian propiedades como el título y el autor." },
      { q: "¿Cómo ingreso las palabras clave?", a: "Separa varias palabras clave con comas." },
      { q: "¿Puedo editar un PDF sin metadatos existentes?", a: "Sí, los campos se mostrarán vacíos y se guardarán tus nuevos valores." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
