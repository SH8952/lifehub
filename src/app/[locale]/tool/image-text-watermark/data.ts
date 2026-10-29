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
  textLabel: string;
  sizeLabel: string;
  opacityLabel: string;
  colorLabel: string;
  positionLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 텍스트 워터마크 추가기",
    subtitle: "원하는 텍스트, 위치, 크기, 투명도를 설정해 이미지에 워터마크를 추가하세요. 모든 처리는 브라우저에서 즉시 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    textLabel: "워터마크 텍스트",
    sizeLabel: "글자 크기",
    opacityLabel: "투명도",
    colorLabel: "글자 색상",
    positionLabel: "위치",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "텍스트, 크기, 색상, 투명도, 위치를 설정합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "워터마크 위치를 자유롭게 옮길 수 있나요?", a: "9개 기본 위치(모서리/가운데) 중에서 선택할 수 있습니다. 자유 드래그 배치는 추후 추가될 수 있습니다." },
      { q: "저작권 표시용으로 사용할 수 있나요?", a: "네, 사진이나 이미지에 소유자 표시나 로고 텍스트를 추가하는 용도로 적합합니다." },
      { q: "한글, 일본어, 특수문자도 입력할 수 있나요?", a: "네, 브라우저가 지원하는 모든 유니코드 문자를 입력할 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Text Watermark Adder",
    subtitle: "Set your text, position, size, and opacity to add a watermark to your image. All processing happens instantly in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    textLabel: "Watermark Text",
    sizeLabel: "Font Size",
    opacityLabel: "Opacity",
    colorLabel: "Text Color",
    positionLabel: "Position",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Set the text, size, color, opacity, and position.",
      "Download the result image.",
    ],
    faq: [
      { q: "Can I freely move the watermark position?", a: "You can choose from 9 preset positions (corners/edges/center). Free drag placement may be added later." },
      { q: "Can I use this for copyright notices?", a: "Yes, it's well suited for adding an owner mark or logo text to your photos and images." },
      { q: "Can I type non-English characters?", a: "Yes, you can type any Unicode characters your browser supports." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像テキストウォーターマーク追加ツール",
    subtitle: "テキスト、位置、サイズ、不透明度を設定して画像にウォーターマークを追加します。すべての処理はブラウザで即座に行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    textLabel: "ウォーターマークテキスト",
    sizeLabel: "文字サイズ",
    opacityLabel: "不透明度",
    colorLabel: "文字の色",
    positionLabel: "位置",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "テキスト、サイズ、色、不透明度、位置を設定します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "ウォーターマークの位置を自由に移動できますか？", a: "9つの基本位置（角・辺・中央）から選択できます。自由なドラッグ配置は今後追加される可能性があります。" },
      { q: "著作権表示として使えますか？", a: "はい、写真や画像に所有者の表示やロゴテキストを追加する用途に適しています。" },
      { q: "日本語や特殊文字も入力できますか？", a: "はい、ブラウザが対応するすべてのUnicode文字を入力できます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Añadidor de Marca de Agua de Texto en Imagen",
    subtitle: "Configura el texto, posición, tamaño y opacidad para añadir una marca de agua a tu imagen. Todo se procesa al instante en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    textLabel: "Texto de la Marca de Agua",
    sizeLabel: "Tamaño de Fuente",
    opacityLabel: "Opacidad",
    colorLabel: "Color del Texto",
    positionLabel: "Posición",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Configura el texto, tamaño, color, opacidad y posición.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Puedo mover libremente la posición de la marca de agua?", a: "Puedes elegir entre 9 posiciones predefinidas (esquinas/bordes/centro). El posicionamiento libre podría añadirse más adelante." },
      { q: "¿Puedo usar esto para avisos de copyright?", a: "Sí, es ideal para añadir una marca de propietario o texto de logo a tus fotos e imágenes." },
      { q: "¿Puedo escribir caracteres no latinos?", a: "Sí, puedes escribir cualquier carácter Unicode que tu navegador admita." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
