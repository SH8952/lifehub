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
    title: "이미지 노이즈(그레인) 필터",
    subtitle: "슬라이더로 강도를 조절해 이미지에 필름 그레인 같은 노이즈 질감을 추가하세요. 모든 처리는 브라우저에서 즉시 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    intensityLabel: "노이즈 강도",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "슬라이더로 노이즈 강도를 조절합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "노이즈 효과는 어떻게 만들어지나요?", a: "각 픽셀의 RGB 값에 임의의 난수를 더하거나 빼서 필름 그레인과 비슷한 질감을 만듭니다." },
      { q: "빈티지한 느낌을 주고 싶은데 어떻게 하나요?", a: "노이즈 강도를 중간 정도로 설정하면 옛 필름 사진 같은 분위기를 연출할 수 있습니다." },
      { q: "노이즈 강도를 너무 높이면 어떻게 되나요?", a: "강도가 높을수록 이미지가 거칠어지고 원본 디테일이 가려질 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Noise/Grain Filter",
    subtitle: "Adjust the slider to add film-grain-like noise texture to your image. All processing happens instantly in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    intensityLabel: "Noise Intensity",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Adjust the noise intensity slider.",
      "Download the result image.",
    ],
    faq: [
      { q: "How is the noise effect created?", a: "A random value is added to or subtracted from each pixel's RGB value, creating a texture similar to film grain." },
      { q: "How do I get a vintage look?", a: "Set the noise intensity to a moderate level to recreate the feel of an old film photo." },
      { q: "What happens if I set the intensity too high?", a: "Higher intensity makes the image grittier and can obscure the original detail." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像ノイズ（グレイン）フィルター",
    subtitle: "スライダーで強度を調整し、画像にフィルムグレインのようなノイズ質感を追加します。すべての処理はブラウザで即座に行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    intensityLabel: "ノイズ強度",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "スライダーでノイズ強度を調整します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "ノイズ効果はどのように作られますか？", a: "各ピクセルのRGB値にランダムな値を加減し、フィルムグレインに似た質感を作ります。" },
      { q: "ビンテージな雰囲気を出すにはどうすればいいですか？", a: "ノイズ強度を中程度に設定すると、古いフィルム写真のような雰囲気を演出できます。" },
      { q: "ノイズ強度を高くしすぎるとどうなりますか？", a: "強度が高いほど画像が粗くなり、元のディテールが見えにくくなります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Filtro de Ruido/Grano de Imagen",
    subtitle: "Ajusta la intensidad para añadir una textura de ruido tipo grano de película a tu imagen. Todo se procesa al instante en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    intensityLabel: "Intensidad de Ruido",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Ajusta el control deslizante de intensidad de ruido.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Cómo se crea el efecto de ruido?", a: "Se suma o resta un valor aleatorio al valor RGB de cada píxel, creando una textura similar al grano de película." },
      { q: "¿Cómo consigo un aspecto vintage?", a: "Ajusta la intensidad del ruido a un nivel moderado para recrear la sensación de una foto de película antigua." },
      { q: "¿Qué pasa si pongo la intensidad muy alta?", a: "Una intensidad mayor hace que la imagen se vea más granulada y puede ocultar el detalle original." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
