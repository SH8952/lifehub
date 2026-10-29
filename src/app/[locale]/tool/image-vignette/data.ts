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
  intensityLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 비네트 효과 필터",
    subtitle: "슬라이더로 강도를 조절해 이미지 가장자리를 어둡게 하는 비네트 효과를 적용하세요. 모든 처리는 브라우저에서 즉시 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    intensityLabel: "비네트 강도",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "슬라이더로 비네트 강도를 조절합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "비네트 효과는 어떤 원리로 만들어지나요?", a: "이미지 중심은 투명하고 가장자리로 갈수록 어두워지는 원형(방사형) 그라데이션을 겹쳐서 만듭니다." },
      { q: "비네트는 왜 사용하나요?", a: "시선을 이미지 중앙으로 모으고, 사진에 감성적이고 영화 같은 분위기를 더하는 데 자주 사용됩니다." },
      { q: "강도를 최대로 하면 어떻게 되나요?", a: "강도를 높일수록 가장자리가 더 어두워지며, 과도하면 일부 디테일이 가려질 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Vignette Effect Filter",
    subtitle: "Adjust the slider to darken the edges of your image with a classic vignette effect. All processing happens instantly in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    intensityLabel: "Vignette Intensity",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Adjust the vignette intensity slider.",
      "Download the result image.",
    ],
    faq: [
      { q: "How is the vignette effect created?", a: "A radial gradient that's transparent in the center and dark at the edges is layered on top of the image." },
      { q: "Why would I use a vignette?", a: "It draws the eye toward the center of the image and adds a moody, cinematic feel to photos." },
      { q: "What happens at maximum intensity?", a: "Higher intensity darkens the edges more, and excessive settings can obscure some detail there." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像ビネット効果フィルター",
    subtitle: "スライダーで強度を調整し、画像の端を暗くするビネット効果を適用します。すべての処理はブラウザで即座に行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    intensityLabel: "ビネット強度",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "スライダーでビネット強度を調整します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "ビネット効果はどのように作られますか？", a: "中心が透明で端に向かって暗くなる放射状のグラデーションを画像に重ねて作ります。" },
      { q: "ビネットはなぜ使うのですか？", a: "視線を画像の中心に集め、写真に雰囲気のある映画的な印象を加えるためによく使われます。" },
      { q: "強度を最大にするとどうなりますか？", a: "強度を上げるほど端がより暗くなり、過度に設定すると一部のディテールが見えなくなることがあります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Filtro de Efecto Viñeta de Imagen",
    subtitle: "Ajusta la intensidad para oscurecer los bordes de tu imagen con un clásico efecto viñeta. Todo se procesa al instante en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    intensityLabel: "Intensidad de Viñeta",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Ajusta el control deslizante de intensidad.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Cómo se crea el efecto viñeta?", a: "Se superpone un degradado radial transparente en el centro y oscuro en los bordes sobre la imagen." },
      { q: "¿Por qué usar una viñeta?", a: "Atrae la mirada hacia el centro de la imagen y añade una sensación cinematográfica a las fotos." },
      { q: "¿Qué pasa con la intensidad máxima?", a: "Una mayor intensidad oscurece más los bordes, y un exceso puede ocultar algo de detalle allí." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
