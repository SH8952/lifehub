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
  brightnessLabel: string;
  contrastLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 밝기·대비 조정기",
    subtitle: "슬라이더로 밝기와 대비를 조절해 이미지를 원하는 느낌으로 보정하세요. 모든 처리는 브라우저에서 즉시 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "보정 결과",
    download: "이미지 다운로드",
    brightnessLabel: "밝기",
    contrastLabel: "대비",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "밝기와 대비 슬라이더를 조절합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "밝기와 대비는 어떻게 계산되나요?", a: "브라우저의 Canvas 필터(brightness/contrast)를 이용해 실시간으로 적용되며, 서버로 전송되지 않습니다." },
      { q: "원본은 변경되나요?", a: "아니요, 원본 파일은 그대로 유지되며 보정된 새 이미지를 다운로드합니다." },
      { q: "어떤 파일 형식을 지원하나요?", a: "JPG, PNG, WebP 등 대부분의 이미지 형식을 지원합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Brightness & Contrast Adjuster",
    subtitle: "Adjust brightness and contrast with sliders to get the look you want. All processing happens instantly in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    brightnessLabel: "Brightness",
    contrastLabel: "Contrast",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Adjust the brightness and contrast sliders.",
      "Download the result image.",
    ],
    faq: [
      { q: "How are brightness and contrast calculated?", a: "They're applied in real time using the browser's Canvas filter (brightness/contrast); nothing is sent to a server." },
      { q: "Does this change my original file?", a: "No, your original file stays untouched — you download a new, adjusted image." },
      { q: "What file formats are supported?", a: "Most image formats are supported, including JPG, PNG, and WebP." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像の明るさ・コントラスト調整ツール",
    subtitle: "スライダーで明るさとコントラストを調整し、画像を好みの雰囲気に補正します。すべての処理はブラウザで即座に行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "補正結果",
    download: "画像をダウンロード",
    brightnessLabel: "明るさ",
    contrastLabel: "コントラスト",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "明るさとコントラストのスライダーを調整します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "明るさとコントラストはどのように計算されますか？", a: "ブラウザのCanvasフィルター（brightness/contrast）を使ってリアルタイムに適用され、サーバーには送信されません。" },
      { q: "元のファイルは変更されますか？", a: "いいえ、元のファイルはそのまま保持され、補正された新しい画像をダウンロードします。" },
      { q: "どのファイル形式に対応していますか？", a: "JPG、PNG、WebPなど、ほとんどの画像形式に対応しています。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Ajustador de Brillo y Contraste de Imagen",
    subtitle: "Ajusta el brillo y el contraste con controles deslizantes para lograr el aspecto que deseas. Todo el procesamiento es instantáneo en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    brightnessLabel: "Brillo",
    contrastLabel: "Contraste",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Ajusta los controles de brillo y contraste.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Cómo se calculan el brillo y el contraste?", a: "Se aplican en tiempo real usando el filtro Canvas del navegador (brightness/contrast); nada se envía a un servidor." },
      { q: "¿Esto cambia mi archivo original?", a: "No, tu archivo original permanece intacto; descargas una nueva imagen ajustada." },
      { q: "¿Qué formatos de archivo son compatibles?", a: "Se admiten la mayoría de los formatos de imagen, incluyendo JPG, PNG y WebP." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },

};
