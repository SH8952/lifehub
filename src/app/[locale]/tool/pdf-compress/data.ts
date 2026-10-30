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
  qualityLabel: string;
  qualityHigh: string;
  qualityMedium: string;
  qualityLow: string;
  generateButton: string;
  processing: string;
  download: string;
  originalSize: string;
  compressedSize: string;
  reducedBy: string;
  warningText: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 압축기",
    subtitle: "PDF의 각 페이지를 이미지로 재압축해 파일 크기를 줄이세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    qualityLabel: "압축 수준",
    qualityHigh: "낮은 압축 (고품질)",
    qualityMedium: "중간 압축",
    qualityLow: "높은 압축 (최대 축소)",
    generateButton: "압축 시작",
    processing: "압축 중...",
    download: "압축된 PDF 다운로드",
    originalSize: "원본 크기",
    compressedSize: "압축 후 크기",
    reducedBy: "감소율",
    warningText: "⚠️ 이 도구는 각 페이지를 이미지로 변환해 재압축하는 방식입니다. 변환 후에는 텍스트 선택/검색이 불가능해집니다.",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "압축 수준을 선택합니다.",
      "압축을 실행하고 결과 파일을 다운로드합니다.",
    ],
    faq: [
      { q: "압축 후 텍스트를 다시 선택할 수 있나요?", a: "아니요, 이 방식은 페이지를 이미지로 변환하기 때문에 텍스트 선택과 검색이 불가능해집니다. 문서 내용을 그대로 유지해야 한다면 사용을 권장하지 않습니다." },
      { q: "어떤 PDF에 효과적인가요?", a: "스캔된 문서나 이미지가 많이 포함된 PDF에서 파일 크기를 크게 줄일 수 있습니다. 순수 텍스트 PDF는 효과가 적을 수 있습니다." },
      { q: "원본 파일이 수정되나요?", a: "아니요, 새로운 PDF 파일로 다운로드되며 원본은 그대로 유지됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Compressor",
    subtitle: "Shrink your PDF's file size by re-compressing each page as an image. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    qualityLabel: "Compression Level",
    qualityHigh: "Low Compression (High Quality)",
    qualityMedium: "Medium Compression",
    qualityLow: "High Compression (Smallest Size)",
    generateButton: "Start Compressing",
    processing: "Compressing...",
    download: "Download Compressed PDF",
    originalSize: "Original Size",
    compressedSize: "Compressed Size",
    reducedBy: "Reduced By",
    warningText: "⚠️ This tool converts each page into an image and re-compresses it. After conversion, text can no longer be selected or searched.",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Choose a compression level.",
      "Run the compression and download the result.",
    ],
    faq: [
      { q: "Can I still select text after compressing?", a: "No, since this method converts pages to images, text selection and search become unavailable. Not recommended if you need to preserve searchable text." },
      { q: "What kind of PDFs does this work best on?", a: "It works well for scanned documents or image-heavy PDFs. Pure text PDFs may see less size reduction." },
      { q: "Does this modify my original file?", a: "No, a new PDF file is downloaded and your original stays unchanged." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDF圧縮ツール",
    subtitle: "PDFの各ページを画像として再圧縮し、ファイルサイズを縮小します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    qualityLabel: "圧縮レベル",
    qualityHigh: "低圧縮（高品質）",
    qualityMedium: "中圧縮",
    qualityLow: "高圧縮（最小サイズ）",
    generateButton: "圧縮を開始",
    processing: "圧縮中...",
    download: "圧縮PDFをダウンロード",
    originalSize: "元のサイズ",
    compressedSize: "圧縮後のサイズ",
    reducedBy: "削減率",
    warningText: "⚠️ このツールは各ページを画像に変換して再圧縮します。変換後はテキストの選択・検索ができなくなります。",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "圧縮レベルを選択します。",
      "圧縮を実行して結果ファイルをダウンロードします。",
    ],
    faq: [
      { q: "圧縮後もテキストを選択できますか？", a: "いいえ、この方式はページを画像に変換するため、テキストの選択や検索ができなくなります。検索可能なテキストを維持する必要がある場合は推奨しません。" },
      { q: "どんなPDFに効果的ですか？", a: "スキャン文書や画像が多いPDFでファイルサイズを大幅に削減できます。純粋なテキストPDFでは効果が少ない場合があります。" },
      { q: "元のファイルは変更されますか？", a: "いいえ、新しいPDFファイルがダウンロードされ、元のファイルはそのまま保持されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Compresor de PDF",
    subtitle: "Reduce el tamaño de tu PDF recomprimiendo cada página como imagen. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    qualityLabel: "Nivel de Compresión",
    qualityHigh: "Baja Compresión (Alta Calidad)",
    qualityMedium: "Compresión Media",
    qualityLow: "Alta Compresión (Tamaño Mínimo)",
    generateButton: "Iniciar Compresión",
    processing: "Comprimiendo...",
    download: "Descargar PDF Comprimido",
    originalSize: "Tamaño Original",
    compressedSize: "Tamaño Comprimido",
    reducedBy: "Reducido en",
    warningText: "⚠️ Esta herramienta convierte cada página en una imagen y la recomprime. Tras la conversión, el texto ya no se puede seleccionar ni buscar.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Elige un nivel de compresión.",
      "Ejecuta la compresión y descarga el resultado.",
    ],
    faq: [
      { q: "¿Puedo seguir seleccionando texto después de comprimir?", a: "No, ya que este método convierte las páginas en imágenes, la selección y búsqueda de texto no estarán disponibles. No se recomienda si necesitas mantener texto buscable." },
      { q: "¿Para qué tipo de PDF funciona mejor?", a: "Funciona bien con documentos escaneados o PDFs con muchas imágenes. Los PDF de solo texto pueden ver menos reducción de tamaño." },
      { q: "¿Esto modifica mi archivo original?", a: "No, se descarga un nuevo archivo PDF y tu original permanece sin cambios." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
