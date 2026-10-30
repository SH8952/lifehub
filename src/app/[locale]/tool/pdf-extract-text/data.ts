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
  extracting: string;
  resultLabel: string;
  pageLabel: string;
  copyButton: string;
  copied: string;
  download: string;
  noTextFound: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 텍스트 추출기",
    subtitle: "PDF 파일에서 모든 텍스트를 추출해 복사하거나 txt 파일로 저장하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    extracting: "텍스트 추출 중...",
    resultLabel: "추출된 텍스트",
    pageLabel: "페이지",
    copyButton: "전체 복사",
    copied: "복사됨!",
    download: "TXT 파일 다운로드",
    noTextFound: "이 PDF에서 추출 가능한 텍스트를 찾을 수 없습니다. (스캔 이미지일 수 있습니다)",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "자동으로 텍스트가 추출되어 화면에 표시됩니다.",
      "전체 복사하거나 txt 파일로 다운로드합니다.",
    ],
    faq: [
      { q: "스캔된 이미지 PDF에서도 텍스트를 추출할 수 있나요?", a: "아니요, 이 도구는 PDF 내부에 저장된 실제 텍스트 레이어만 추출합니다. 이미지로만 스캔된 문서는 OCR이 필요합니다." },
      { q: "표나 레이아웃이 그대로 유지되나요?", a: "텍스트 내용은 추출되지만 표나 복잡한 레이아웃의 정확한 배치는 유지되지 않을 수 있습니다." },
      { q: "파일이 서버에 업로드되나요?", a: "아니요, 모든 처리는 브라우저 내에서만 이루어지며 파일이 외부로 전송되지 않습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Text Extractor",
    subtitle: "Extract all text from a PDF to copy or save as a .txt file. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    extracting: "Extracting text...",
    resultLabel: "Extracted Text",
    pageLabel: "Page",
    copyButton: "Copy All",
    copied: "Copied!",
    download: "Download TXT File",
    noTextFound: "No extractable text was found in this PDF. (It may be a scanned image.)",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Text is automatically extracted and displayed.",
      "Copy it all or download as a txt file.",
    ],
    faq: [
      { q: "Can I extract text from a scanned image PDF?", a: "No, this tool only extracts the actual text layer stored inside the PDF. Image-only scanned documents require OCR." },
      { q: "Are tables and layout preserved?", a: "The text content is extracted, but the exact placement of tables or complex layouts may not be preserved." },
      { q: "Is my file uploaded to a server?", a: "No, all processing happens entirely in your browser and your file is never sent anywhere." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFテキスト抽出ツール",
    subtitle: "PDFファイルからすべてのテキストを抽出してコピーしたり、txtファイルとして保存したりできます。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    extracting: "テキストを抽出中...",
    resultLabel: "抽出されたテキスト",
    pageLabel: "ページ",
    copyButton: "全文コピー",
    copied: "コピーしました！",
    download: "TXTファイルをダウンロード",
    noTextFound: "このPDFから抽出可能なテキストが見つかりませんでした。（スキャン画像の可能性があります）",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "テキストが自動的に抽出されて表示されます。",
      "全文コピーするか、txtファイルとしてダウンロードします。",
    ],
    faq: [
      { q: "スキャンされた画像PDFからもテキストを抽出できますか？", a: "いいえ、このツールはPDF内部に保存された実際のテキストレイヤーのみを抽出します。画像のみのスキャン文書にはOCRが必要です。" },
      { q: "表やレイアウトはそのまま保持されますか？", a: "テキスト内容は抽出されますが、表や複雑なレイアウトの正確な配置は保持されない場合があります。" },
      { q: "ファイルはサーバーにアップロードされますか？", a: "いいえ、すべての処理はブラウザ内でのみ行われ、ファイルは外部に送信されません。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Extractor de Texto PDF",
    subtitle: "Extrae todo el texto de un PDF para copiarlo o guardarlo como archivo .txt. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    extracting: "Extrayendo texto...",
    resultLabel: "Texto Extraído",
    pageLabel: "Página",
    copyButton: "Copiar Todo",
    copied: "¡Copiado!",
    download: "Descargar Archivo TXT",
    noTextFound: "No se encontró texto extraíble en este PDF. (Puede ser una imagen escaneada.)",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "El texto se extrae automáticamente y se muestra.",
      "Cópialo todo o descárgalo como archivo txt.",
    ],
    faq: [
      { q: "¿Puedo extraer texto de un PDF con imágenes escaneadas?", a: "No, esta herramienta solo extrae la capa de texto real almacenada dentro del PDF. Los documentos escaneados solo como imagen requieren OCR." },
      { q: "¿Se conservan las tablas y el diseño?", a: "El contenido de texto se extrae, pero la ubicación exacta de tablas o diseños complejos puede no conservarse." },
      { q: "¿Se sube mi archivo a un servidor?", a: "No, todo el procesamiento ocurre completamente en tu navegador y tu archivo nunca se envía a ningún lugar." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
