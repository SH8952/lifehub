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
  generateButton: string;
  processing: string;
  download: string;
  warningText: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 흑백 변환기",
    subtitle: "컬러 PDF의 모든 페이지를 흑백(그레이스케일)으로 변환하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    generateButton: "흑백으로 변환",
    processing: "변환 중...",
    download: "변환된 PDF 다운로드",
    warningText: "⚠️ 이 도구는 각 페이지를 이미지로 변환해 흑백 처리합니다. 변환 후에는 텍스트 선택/검색이 불가능해집니다.",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "흑백 변환을 실행합니다.",
      "결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "왜 흑백으로 변환하나요?", a: "인쇄 비용 절감이나 흑백 프린터로 출력할 문서를 미리 확인하는 데 유용합니다." },
      { q: "원본 파일이 수정되나요?", a: "아니요, 새로운 PDF 파일로 다운로드되며 원본은 그대로 유지됩니다." },
      { q: "파일 크기가 작아지나요?", a: "이미지 기반으로 재생성되므로 원본에 따라 크기가 달라질 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Grayscale Converter",
    subtitle: "Convert every page of a color PDF to grayscale. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    generateButton: "Convert to Grayscale",
    processing: "Converting...",
    download: "Download Converted PDF",
    warningText: "⚠️ This tool converts each page into an image and applies grayscale. After conversion, text can no longer be selected or searched.",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Run the grayscale conversion.",
      "Download the resulting PDF.",
    ],
    faq: [
      { q: "Why convert to grayscale?", a: "It's useful for reducing print costs or previewing how a document will look on a black-and-white printer." },
      { q: "Does this modify my original file?", a: "No, a new PDF file is downloaded and your original stays unchanged." },
      { q: "Will the file size get smaller?", a: "Since it's regenerated as images, the size may vary depending on the original." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFグレースケール変換ツール",
    subtitle: "カラーPDFのすべてのページをグレースケール（白黒）に変換します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    generateButton: "グレースケールに変換",
    processing: "変換中...",
    download: "変換済みPDFをダウンロード",
    warningText: "⚠️ このツールは各ページを画像に変換してグレースケール処理します。変換後はテキストの選択・検索ができなくなります。",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "グレースケール変換を実行します。",
      "結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "なぜグレースケールに変換するのですか？", a: "印刷コストの削減や、白黒プリンターでの出力結果を事前に確認するのに役立ちます。" },
      { q: "元のファイルは変更されますか？", a: "いいえ、新しいPDFファイルがダウンロードされ、元のファイルはそのまま保持されます。" },
      { q: "ファイルサイズは小さくなりますか？", a: "画像ベースで再生成されるため、元のファイルによってサイズが変わることがあります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de PDF a Blanco y Negro",
    subtitle: "Convierte todas las páginas de un PDF en color a escala de grises. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    generateButton: "Convertir a Escala de Grises",
    processing: "Convirtiendo...",
    download: "Descargar PDF Convertido",
    warningText: "⚠️ Esta herramienta convierte cada página en una imagen y aplica escala de grises. Tras la conversión, el texto ya no se puede seleccionar ni buscar.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Ejecuta la conversión a escala de grises.",
      "Descarga el PDF resultante.",
    ],
    faq: [
      { q: "¿Por qué convertir a escala de grises?", a: "Es útil para reducir costos de impresión o previsualizar cómo se verá un documento en una impresora en blanco y negro." },
      { q: "¿Esto modifica mi archivo original?", a: "No, se descarga un nuevo archivo PDF y tu original permanece sin cambios." },
      { q: "¿El tamaño del archivo será menor?", a: "Como se regenera como imágenes, el tamaño puede variar según el original." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
