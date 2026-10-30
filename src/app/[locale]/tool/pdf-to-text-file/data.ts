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
  converting: string;
  readyLabel: string;
  pageCountLabel: string;
  charCountLabel: string;
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
    title: "PDF → 텍스트 파일(.txt) 변환기",
    subtitle: "PDF 파일을 업로드하면 바로 텍스트(.txt) 파일로 변환해 다운로드합니다. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    converting: "변환 중...",
    readyLabel: "변환 완료",
    pageCountLabel: "페이지 수",
    charCountLabel: "추출된 글자 수",
    download: "TXT 파일 다운로드",
    noTextFound: "이 PDF에서 추출 가능한 텍스트를 찾을 수 없습니다. (스캔 이미지일 수 있습니다)",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "자동으로 텍스트가 추출됩니다.",
      "txt 파일로 다운로드합니다.",
    ],
    faq: [
      { q: "이 도구와 'PDF 텍스트 추출기'는 어떻게 다른가요?", a: "이 도구는 화면에서 텍스트를 읽는 대신 바로 txt 파일로 저장하는 데 초점을 맞춘 빠른 변환 도구입니다." },
      { q: "원본 서식(글꼴, 표 등)이 유지되나요?", a: "아니요, 순수 텍스트만 추출되며 서식이나 이미지는 포함되지 않습니다." },
      { q: "스캔된 PDF도 변환할 수 있나요?", a: "아니요, 이미지로만 스캔된 PDF는 텍스트 레이어가 없어 OCR이 필요합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF to TXT File Converter",
    subtitle: "Upload a PDF and convert it directly to a downloadable .txt file. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    converting: "Converting...",
    readyLabel: "Conversion Complete",
    pageCountLabel: "Pages",
    charCountLabel: "Characters Extracted",
    download: "Download TXT File",
    noTextFound: "No extractable text was found in this PDF. (It may be a scanned image.)",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Text is extracted automatically.",
      "Download it as a txt file.",
    ],
    faq: [
      { q: "How is this different from the 'PDF Text Extractor'?", a: "This tool focuses on a quick conversion straight to a downloadable txt file instead of reading text on screen." },
      { q: "Is original formatting (fonts, tables) preserved?", a: "No, only plain text is extracted — formatting and images are not included." },
      { q: "Can scanned PDFs be converted?", a: "No, image-only scanned PDFs have no text layer and require OCR." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDF → テキストファイル(.txt)変換ツール",
    subtitle: "PDFファイルをアップロードすると、すぐにテキスト（.txt）ファイルに変換してダウンロードできます。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    converting: "変換中...",
    readyLabel: "変換完了",
    pageCountLabel: "ページ数",
    charCountLabel: "抽出された文字数",
    download: "TXTファイルをダウンロード",
    noTextFound: "このPDFから抽出可能なテキストが見つかりませんでした。（スキャン画像の可能性があります）",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "テキストが自動的に抽出されます。",
      "txtファイルとしてダウンロードします。",
    ],
    faq: [
      { q: "「PDFテキスト抽出ツール」とは何が違いますか？", a: "このツールは画面でテキストを読むのではなく、すぐにtxtファイルとして保存することに特化した高速変換ツールです。" },
      { q: "元の書式（フォント、表など）は保持されますか？", a: "いいえ、プレーンテキストのみが抽出され、書式や画像は含まれません。" },
      { q: "スキャンされたPDFも変換できますか？", a: "いいえ、画像のみのスキャンPDFにはテキストレイヤーがなく、OCRが必要です。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de PDF a Archivo TXT",
    subtitle: "Sube un PDF y convviértelo directamente en un archivo .txt descargable. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    converting: "Convirtiendo...",
    readyLabel: "Conversión Completa",
    pageCountLabel: "Páginas",
    charCountLabel: "Caracteres Extraídos",
    download: "Descargar Archivo TXT",
    noTextFound: "No se encontró texto extraíble en este PDF. (Puede ser una imagen escaneada.)",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "El texto se extrae automáticamente.",
      "Descárgalo como archivo txt.",
    ],
    faq: [
      { q: "¿En qué se diferencia del 'Extractor de Texto PDF'?", a: "Esta herramienta se centra en una conversión rápida directamente a un archivo txt descargable, en vez de leer el texto en pantalla." },
      { q: "¿Se conserva el formato original (fuentes, tablas)?", a: "No, solo se extrae texto plano; el formato e imágenes no se incluyen." },
      { q: "¿Se pueden convertir PDFs escaneados?", a: "No, los PDF escaneados solo como imagen no tienen capa de texto y requieren OCR." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
