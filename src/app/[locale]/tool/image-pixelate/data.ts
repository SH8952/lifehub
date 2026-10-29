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
  blockLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 픽셀화(모자이크 아트) 필터",
    subtitle: "슬라이더로 픽셀 크기를 조절해 이미지를 모자이크 아트처럼 픽셀화하세요. 모든 처리는 브라우저에서 즉시 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    blockLabel: "픽셀 크기",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "슬라이더로 픽셀 크기를 조절합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "픽셀화는 어떤 원리로 동작하나요?", a: "이미지를 작은 해상도로 축소한 뒤 다시 확대하여 모자이크 같은 픽셀 블록 효과를 만듭니다." },
      { q: "얼굴을 가리는 용도로 쓸 수 있나요?", a: "현재 버전은 이미지 전체에 픽셀화를 적용합니다. 특정 영역만 가리는 기능은 추후 추가될 수 있습니다." },
      { q: "픽셀 크기를 최대로 하면 어떻게 되나요?", a: "픽셀 크기를 크게 설정할수록 이미지가 더 추상적인 모자이크 형태로 변합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Pixelate Filter",
    subtitle: "Adjust the pixel size slider to turn your image into mosaic-style pixel art. All processing happens instantly in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    blockLabel: "Pixel Size",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Adjust the pixel size slider.",
      "Download the result image.",
    ],
    faq: [
      { q: "How does pixelation work?", a: "The image is downscaled to a small resolution and then scaled back up, creating a mosaic-like pixel block effect." },
      { q: "Can I use this to hide a face?", a: "The current version pixelates the entire image. Region-specific pixelation may be added in a future update." },
      { q: "What happens if I max out the pixel size?", a: "A larger pixel size makes the image look more abstract and mosaic-like." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像のピクセル化（モザイクアート）フィルター",
    subtitle: "スライダーでピクセルサイズを調整し、画像をモザイクアート風にピクセル化します。すべての処理はブラウザで即座に行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    blockLabel: "ピクセルサイズ",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "スライダーでピクセルサイズを調整します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "ピクセル化はどのような原理で動作しますか？", a: "画像を小さい解像度に縮小してから再度拡大することで、モザイクのようなピクセルブロック効果を作ります。" },
      { q: "顔を隠す用途に使えますか？", a: "現在のバージョンは画像全体にピクセル化を適用します。特定領域のみの処理は今後追加される可能性があります。" },
      { q: "ピクセルサイズを最大にするとどうなりますか？", a: "ピクセルサイズを大きく設定するほど、画像はより抽象的なモザイク形状になります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Filtro de Pixelado de Imagen",
    subtitle: "Ajusta el tamaño de píxel para convertir tu imagen en arte de mosaico pixelado. Todo se procesa al instante en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    blockLabel: "Tamaño de Píxel",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Ajusta el control deslizante del tamaño de píxel.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Cómo funciona el pixelado?", a: "La imagen se reduce a una resolución pequeña y luego se amplía, creando un efecto de bloques de píxeles tipo mosaico." },
      { q: "¿Puedo usarlo para ocultar una cara?", a: "La versión actual pixela toda la imagen. El pixelado por región podría añadirse en el futuro." },
      { q: "¿Qué pasa si maximizo el tamaño de píxel?", a: "Un tamaño de píxel mayor hace que la imagen se vea más abstracta, como un mosaico." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
