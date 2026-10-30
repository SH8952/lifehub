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
  rendering: string;
  formatLabel: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 표지 썸네일 추출기",
    subtitle: "PDF 첫 페이지(표지)를 이미지 파일로 추출하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    rendering: "썸네일 생성 중...",
    formatLabel: "이미지 형식",
    download: "썸네일 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "첫 페이지가 자동으로 렌더링되어 미리보기로 표시됩니다.",
      "원하는 이미지 형식을 선택하고 다운로드합니다.",
    ],
    faq: [
      { q: "다른 페이지도 썸네일로 추출할 수 있나요?", a: "현재 버전은 첫 페이지(표지)만 지원합니다. 여러 페이지가 필요하면 'PDF → 이미지 변환기'를 이용해 주세요." },
      { q: "이미지 해상도는 어떻게 되나요?", a: "원본 페이지 크기를 기준으로 선명하게 보이도록 2배 해상도로 렌더링됩니다." },
      { q: "PNG와 JPEG 중 어떤 것을 선택해야 하나요?", a: "투명도나 선명한 텍스트가 중요하면 PNG, 파일 크기가 중요하면 JPEG를 선택하세요." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Cover Thumbnail Extractor",
    subtitle: "Extract the first page (cover) of a PDF as an image file. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    rendering: "Generating thumbnail...",
    formatLabel: "Image Format",
    download: "Download Thumbnail",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "The first page is automatically rendered and shown as a preview.",
      "Choose your preferred image format and download.",
    ],
    faq: [
      { q: "Can I extract thumbnails of other pages too?", a: "The current version only supports the first page (cover). For multiple pages, use the 'PDF to Image Converter'." },
      { q: "What resolution is the image?", a: "It's rendered at 2x the original page size for a crisp result." },
      { q: "Should I choose PNG or JPEG?", a: "Choose PNG if transparency or crisp text matters, or JPEG if file size matters more." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDF表紙サムネイル抽出ツール",
    subtitle: "PDFの最初のページ（表紙）を画像ファイルとして抽出します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    rendering: "サムネイル生成中...",
    formatLabel: "画像形式",
    download: "サムネイルをダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "最初のページが自動的にレンダリングされプレビュー表示されます。",
      "希望の画像形式を選択してダウンロードします。",
    ],
    faq: [
      { q: "他のページもサムネイルとして抽出できますか？", a: "現在のバージョンは最初のページ（表紙）のみ対応しています。複数ページが必要な場合は「PDF→画像変換ツール」をご利用ください。" },
      { q: "画像の解像度はどうなりますか？", a: "元のページサイズを基準に、鮮明に見えるよう2倍の解像度でレンダリングされます。" },
      { q: "PNGとJPEGどちらを選ぶべきですか？", a: "透明度や鮮明なテキストが重要ならPNG、ファイルサイズが重要ならJPEGを選んでください。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Extractor de Miniatura de Portada PDF",
    subtitle: "Extrae la primera página (portada) de un PDF como archivo de imagen. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    rendering: "Generando miniatura...",
    formatLabel: "Formato de Imagen",
    download: "Descargar Miniatura",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "La primera página se renderiza automáticamente y se muestra como vista previa.",
      "Elige tu formato de imagen preferido y descarga.",
    ],
    faq: [
      { q: "¿Puedo extraer miniaturas de otras páginas también?", a: "La versión actual solo admite la primera página (portada). Para varias páginas, usa el 'Convertidor de PDF a Imagen'." },
      { q: "¿Qué resolución tiene la imagen?", a: "Se renderiza al doble del tamaño original de la página para un resultado nítido." },
      { q: "¿Debo elegir PNG o JPEG?", a: "Elige PNG si la transparencia o el texto nítido importan, o JPEG si el tamaño del archivo importa más." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
