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
  radiusLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 둥근 모서리 처리기",
    subtitle: "슬라이더로 둥근 정도를 조절해 이미지의 네 모서리를 둥글게 만드세요. 결과는 투명 배경 PNG로 다운로드됩니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과 (PNG, 투명 배경)",
    download: "PNG 다운로드",
    radiusLabel: "모서리 둥글기",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "슬라이더로 둥글기 정도를 조절합니다.",
      "투명 배경 PNG로 다운로드합니다.",
    ],
    faq: [
      { q: "결과물은 어떤 형식으로 저장되나요?", a: "모서리 바깥 영역이 투명 처리되어야 하므로 항상 PNG 형식으로 저장됩니다." },
      { q: "둥글기는 어떤 기준으로 계산되나요?", a: "이미지의 짧은 쪽 길이를 기준으로 비율(%)을 적용해 모서리 반경을 계산합니다." },
      { q: "정사각형 프로필 이미지에도 사용할 수 있나요?", a: "네, 프로필 사진이나 썸네일을 둥글게 만들 때 특히 유용합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Rounded Corners Tool",
    subtitle: "Round the corners of your image with an adjustable slider. The result downloads as a transparent PNG.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result (PNG, transparent background)",
    download: "Download PNG",
    radiusLabel: "Corner Radius",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Adjust the roundness with the slider.",
      "Download as a transparent PNG.",
    ],
    faq: [
      { q: "What format is the result saved in?", a: "Since the area outside the rounded corners must be transparent, the result is always saved as PNG." },
      { q: "How is the roundness calculated?", a: "The corner radius is calculated as a percentage of the image's shorter side." },
      { q: "Can I use this for square profile pictures?", a: "Yes, it's especially useful for rounding profile pictures and thumbnails." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像の角丸処理ツール",
    subtitle: "スライダーで角丸の度合いを調整し、画像の4つの角を丸くします。結果は透明背景のPNGでダウンロードされます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果（PNG、透明背景）",
    download: "PNGをダウンロード",
    radiusLabel: "角の丸み",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "スライダーで丸みの度合いを調整します。",
      "透明背景のPNGでダウンロードします。",
    ],
    faq: [
      { q: "結果はどの形式で保存されますか？", a: "角の外側が透明である必要があるため、結果は常にPNG形式で保存されます。" },
      { q: "丸みはどのように計算されますか？", a: "画像の短い辺の長さを基準に割合（%）を適用して角の半径を計算します。" },
      { q: "正方形のプロフィール画像にも使えますか？", a: "はい、プロフィール写真やサムネイルを丸くする際に特に便利です。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Herramienta de Esquinas Redondeadas de Imagen",
    subtitle: "Redondea las esquinas de tu imagen con un control deslizante ajustable. El resultado se descarga como PNG transparente.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado (PNG, fondo transparente)",
    download: "Descargar PNG",
    radiusLabel: "Radio de Esquina",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Ajusta la redondez con el control deslizante.",
      "Descarga como PNG transparente.",
    ],
    faq: [
      { q: "¿En qué formato se guarda el resultado?", a: "Como el área fuera de las esquinas redondeadas debe ser transparente, el resultado siempre se guarda como PNG." },
      { q: "¿Cómo se calcula la redondez?", a: "El radio de la esquina se calcula como un porcentaje del lado más corto de la imagen." },
      { q: "¿Puedo usarlo para fotos de perfil cuadradas?", a: "Sí, es especialmente útil para redondear fotos de perfil y miniaturas." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
