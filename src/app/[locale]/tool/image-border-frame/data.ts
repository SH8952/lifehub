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
  widthLabel: string;
  colorLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 테두리(프레임) 추가기",
    subtitle: "원하는 색상과 두께의 테두리를 이미지에 추가하세요. 모든 처리는 브라우저에서 즉시 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    widthLabel: "테두리 두께",
    colorLabel: "테두리 색상",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "테두리 두께와 색상을 선택합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "테두리는 이미지 크기에 어떻게 영향을 주나요?", a: "테두리 두께만큼 전체 이미지 크기가 커집니다. 원본 이미지 영역은 그대로 유지됩니다." },
      { q: "투명 배경 이미지도 지원하나요?", a: "PNG 투명 배경 이미지도 지원하며, 테두리는 불투명하게 추가됩니다." },
      { q: "색상은 자유롭게 지정할 수 있나요?", a: "네, 색상 선택기를 통해 원하는 색을 자유롭게 선택할 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Border/Frame Adder",
    subtitle: "Add a border frame to your image in any color and thickness. All processing happens instantly in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    widthLabel: "Border Width",
    colorLabel: "Border Color",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Choose the border width and color.",
      "Download the result image.",
    ],
    faq: [
      { q: "How does the border affect the image size?", a: "The overall image grows by the border width on each side; the original image content stays unchanged." },
      { q: "Does it support transparent PNGs?", a: "Yes, transparent PNGs are supported, and the border is added as an opaque frame around them." },
      { q: "Can I pick any color?", a: "Yes, use the color picker to choose any color you like." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像ボーダー（フレーム）追加ツール",
    subtitle: "好みの色と太さのボーダーを画像に追加します。すべての処理はブラウザで即座に行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    widthLabel: "ボーダーの太さ",
    colorLabel: "ボーダーの色",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "ボーダーの太さと色を選択します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "ボーダーは画像サイズにどう影響しますか？", a: "ボーダーの太さ分だけ画像全体のサイズが大きくなります。元の画像内容はそのまま維持されます。" },
      { q: "透明背景のPNGにも対応していますか？", a: "はい、透明背景のPNGにも対応しており、ボーダーは不透明なフレームとして追加されます。" },
      { q: "色は自由に指定できますか？", a: "はい、カラーピッカーで好きな色を自由に選択できます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Añadidor de Borde/Marco a Imagen",
    subtitle: "Añade un marco a tu imagen con el color y grosor que quieras. Todo se procesa al instante en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    widthLabel: "Grosor del Borde",
    colorLabel: "Color del Borde",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Elige el grosor y color del borde.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Cómo afecta el borde al tamaño de la imagen?", a: "La imagen completa crece según el grosor del borde en cada lado; el contenido original no cambia." },
      { q: "¿Soporta PNG transparentes?", a: "Sí, se admiten PNG transparentes y el borde se añade como un marco opaco alrededor." },
      { q: "¿Puedo elegir cualquier color?", a: "Sí, usa el selector de color para elegir el color que quieras." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
