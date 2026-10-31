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
  changeImage: string;
  resultLabel: string;
  download: string;
  dimensionLabel: string;
  fileSizeLabel: string;
  aspectLabel: string;
  printSizeLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 해상도·DPI 정보 확인기",
    subtitle: "이미지의 픽셀 해상도, 파일 크기, 화면 비율, 인쇄 시 예상 크기를 한눈에 확인하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "이미지 정보",
    download: "",
    dimensionLabel: "픽셀 해상도",
    fileSizeLabel: "파일 크기",
    aspectLabel: "가로세로 비율",
    printSizeLabel: "예상 인쇄 크기",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "픽셀 해상도, 파일 크기, 비율을 확인합니다.",
      "72/150/300 DPI 기준 예상 인쇄 크기를 참고합니다.",
    ],
    faq: [
      { q: "실제 EXIF에 기록된 DPI 값을 보여주나요?", a: "대부분의 웹 이미지는 DPI 메타데이터가 없거나 의미가 없어, 이 도구는 픽셀 해상도를 기준으로 72/150/300 DPI일 때의 예상 인쇄 크기를 계산해 보여드립니다." },
      { q: "인쇄용으로 적합한 해상도는 어느 정도인가요?", a: "일반적으로 인쇄물에는 300 DPI, 웹용 화면에는 72~96 DPI가 권장됩니다." },
      { q: "파일 크기는 어떻게 측정되나요?", a: "업로드한 원본 파일의 바이트 크기를 그대로 표시합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Resolution & DPI Info Checker",
    subtitle: "Check your image's pixel resolution, file size, aspect ratio, and estimated print size at a glance. All processing happens in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Image Info",
    download: "",
    dimensionLabel: "Pixel Resolution",
    fileSizeLabel: "File Size",
    aspectLabel: "Aspect Ratio",
    printSizeLabel: "Estimated Print Size",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Check the pixel resolution, file size, and aspect ratio.",
      "Refer to the estimated print size at 72/150/300 DPI.",
    ],
    faq: [
      { q: "Does this show the actual DPI stored in EXIF?", a: "Most web images have no meaningful DPI metadata, so this tool instead calculates the estimated print size at 72/150/300 DPI based on pixel resolution." },
      { q: "What resolution is good for printing?", a: "300 DPI is typically recommended for printed materials, while 72–96 DPI is standard for on-screen web use." },
      { q: "How is the file size measured?", a: "It simply shows the byte size of the original uploaded file." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像解像度・DPI情報確認ツール",
    subtitle: "画像のピクセル解像度、ファイルサイズ、画面比率、印刷時の予想サイズを一目で確認できます。すべての処理はブラウザで行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "画像情報",
    download: "",
    dimensionLabel: "ピクセル解像度",
    fileSizeLabel: "ファイルサイズ",
    aspectLabel: "縦横比",
    printSizeLabel: "印刷時の予想サイズ",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "ピクセル解像度、ファイルサイズ、比率を確認します。",
      "72/150/300 DPI基準の予想印刷サイズを参考にします。",
    ],
    faq: [
      { q: "実際にEXIFに記録されたDPI値を表示しますか？", a: "ほとんどのWeb画像にはDPIメタデータがないか意味がないため、このツールはピクセル解像度を基準に72/150/300 DPI時の予想印刷サイズを計算して表示します。" },
      { q: "印刷に適した解像度はどれくらいですか？", a: "一般的に印刷物には300 DPI、Web画面には72〜96 DPIが推奨されます。" },
      { q: "ファイルサイズはどのように測定されますか？", a: "アップロードした元のファイルのバイトサイズをそのまま表示します。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Verificador de Resolución y DPI de Imagen",
    subtitle: "Consulta la resolución en píxeles, el tamaño de archivo, la proporción y el tamaño de impresión de tu imagen de un vistazo. Todo se procesa en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Información de la Imagen",
    download: "",
    dimensionLabel: "Resolución en Píxeles",
    fileSizeLabel: "Tamaño de Archivo",
    aspectLabel: "Proporción",
    printSizeLabel: "Tamaño de Impresión Estimado",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Revisa la resolución en píxeles, el tamaño de archivo y la proporción.",
      "Consulta el tamaño de impresión estimado a 72/150/300 DPI.",
    ],
    faq: [
      { q: "¿Esto muestra el DPI real guardado en EXIF?", a: "La mayoría de las imágenes web no tienen metadatos de DPI significativos, así que esta herramienta calcula el tamaño de impresión estimado a 72/150/300 DPI según la resolución en píxeles." },
      { q: "¿Qué resolución es buena para imprimir?", a: "Normalmente se recomienda 300 DPI para materiales impresos, y 72-96 DPI para uso web en pantalla." },
      { q: "¿Cómo se mide el tamaño del archivo?", a: "Simplemente muestra el tamaño en bytes del archivo original subido." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
