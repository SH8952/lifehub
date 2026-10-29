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
  copiedLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 색상 추출기(팔레트)",
    subtitle: "이미지에서 가장 많이 사용된 색상을 자동으로 추출해 팔레트로 보여드립니다. 각 색상의 HEX 코드를 클릭하면 바로 복사됩니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "추출된 색상 팔레트",
    download: "클릭하여 HEX 코드 복사",
    copiedLabel: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "자동으로 추출된 색상 팔레트를 확인합니다.",
      "원하는 색상을 클릭해 HEX 코드를 복사합니다.",
    ],
    faq: [
      { q: "색상은 어떤 기준으로 추출되나요?", a: "이미지의 모든 픽셀을 샘플링한 뒤 유사한 색상끼리 그룹화하여 가장 많이 등장한 상위 색상들을 보여줍니다." },
      { q: "몇 개의 색상이 추출되나요?", a: "기본적으로 6개의 대표 색상을 팔레트로 보여드립니다." },
      { q: "추출한 색상을 디자인 작업에 쓸 수 있나요?", a: "네, HEX 코드를 복사해 CSS, 디자인 툴, 그림 작업 등 어디서나 바로 사용할 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Color Palette Extractor",
    subtitle: "Automatically extract the most dominant colors from your image into a palette. Click any color's HEX code to copy it instantly.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Extracted Color Palette",
    download: "Click to copy HEX code",
    copiedLabel: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "View the automatically extracted color palette.",
      "Click a color to copy its HEX code.",
    ],
    faq: [
      { q: "How are the colors extracted?", a: "Every pixel is sampled, similar colors are grouped together, and the most frequent groups are shown as the palette." },
      { q: "How many colors are extracted?", a: "By default, 6 representative colors are shown in the palette." },
      { q: "Can I use the extracted colors in my design work?", a: "Yes, copy the HEX codes and use them directly in CSS, design tools, or illustration software." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像カラー抽出ツール（パレット）",
    subtitle: "画像から最も多く使われている色を自動的に抽出し、パレットとして表示します。各色のHEXコードをクリックするとすぐにコピーされます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "抽出されたカラーパレット",
    download: "クリックしてHEXコードをコピー",
    copiedLabel: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "自動的に抽出されたカラーパレットを確認します。",
      "色をクリックしてHEXコードをコピーします。",
    ],
    faq: [
      { q: "色はどのような基準で抽出されますか？", a: "画像のすべてのピクセルをサンプリングし、似た色同士をグループ化して最も多く登場した色を表示します。" },
      { q: "いくつの色が抽出されますか？", a: "デフォルトで6つの代表的な色がパレットとして表示されます。" },
      { q: "抽出した色をデザイン作業に使えますか？", a: "はい、HEXコードをコピーしてCSS、デザインツール、イラスト作業などどこでもすぐに使用できます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Extractor de Paleta de Colores de Imagen",
    subtitle: "Extrae automáticamente los colores dominantes de tu imagen en una paleta. Haz clic en el código HEX de cualquier color para copiarlo al instante.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Paleta de Colores Extraída",
    download: "Haz clic para copiar el código HEX",
    copiedLabel: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Observa la paleta de colores extraída automáticamente.",
      "Haz clic en un color para copiar su código HEX.",
    ],
    faq: [
      { q: "¿Cómo se extraen los colores?", a: "Se muestrean todos los píxeles, se agrupan los colores similares y se muestran los grupos más frecuentes como paleta." },
      { q: "¿Cuántos colores se extraen?", a: "Por defecto se muestran 6 colores representativos en la paleta." },
      { q: "¿Puedo usar los colores extraídos en mi trabajo de diseño?", a: "Sí, copia los códigos HEX y úsalos directamente en CSS, herramientas de diseño o software de ilustración." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
