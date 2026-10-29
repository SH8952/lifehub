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
    title: "이미지 선명도(샤픈) 필터",
    subtitle: "슬라이더로 강도를 조절해 이미지의 윤곽선과 디테일을 더 선명하게 만드세요. 모든 처리는 브라우저에서 즉시 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    intensityLabel: "샤픈 강도",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "슬라이더로 샤픈 강도를 조절합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "샤픈 필터는 어떤 원리로 동작하나요?", a: "주변 픽셀과의 명암 차이를 강조하는 합성곱(컨볼루션) 커널을 적용해 윤곽선을 또렷하게 만듭니다." },
      { q: "흐릿한 사진도 선명하게 복원되나요?", a: "초점이 심하게 흐려진 사진은 완전히 복원되지 않지만, 윤곽선 대비를 높여 더 또렷하게 보이도록 할 수 있습니다." },
      { q: "강도를 너무 높이면 어떻게 되나요?", a: "강도가 지나치게 높으면 이미지에 거친 윤곽선과 노이즈가 생길 수 있어 적절한 수준으로 조절하는 것이 좋습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Sharpen Filter",
    subtitle: "Adjust the slider to sharpen edges and details in your image. All processing happens instantly in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    intensityLabel: "Sharpen Intensity",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Adjust the sharpen intensity slider.",
      "Download the result image.",
    ],
    faq: [
      { q: "How does the sharpen filter work?", a: "It applies a convolution kernel that emphasizes contrast differences between neighboring pixels, making edges more defined." },
      { q: "Can this fix a very blurry photo?", a: "A severely out-of-focus photo can't be fully restored, but sharpening can increase edge contrast to make it look crisper." },
      { q: "What happens if I set the intensity too high?", a: "Too much sharpening can introduce harsh edges and noise, so it's best to use a moderate setting." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像シャープ（鮮明化）フィルター",
    subtitle: "スライダーで強度を調整し、画像の輪郭やディテールをより鮮明にします。すべての処理はブラウザで即座に行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    intensityLabel: "シャープ強度",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "スライダーでシャープ強度を調整します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "シャープフィルターはどのような原理で動作しますか？", a: "隣接ピクセルとの明暗差を強調する畳み込み（コンボリューション）カーネルを適用し、輪郭をより鮮明にします。" },
      { q: "ピンボケした写真も鮮明に復元されますか？", a: "強くピンボケした写真は完全には復元されませんが、輪郭のコントラストを高めてより鮮明に見せることができます。" },
      { q: "強度を上げすぎるとどうなりますか？", a: "強度が高すぎると画像に粗い輪郭やノイズが生じるため、適度な強度に調整することをお勧めします。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Filtro de Enfoque de Imagen",
    subtitle: "Ajusta la intensidad para realzar los bordes y detalles de tu imagen. Todo se procesa al instante en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    intensityLabel: "Intensidad de Enfoque",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Ajusta el control deslizante de intensidad.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Cómo funciona el filtro de enfoque?", a: "Aplica un kernel de convolución que acentúa las diferencias de contraste entre píxeles vecinos, haciendo los bordes más definidos." },
      { q: "¿Puede esto arreglar una foto muy borrosa?", a: "Una foto muy desenfocada no se puede restaurar por completo, pero el enfoque puede aumentar el contraste de los bordes para que se vea más nítida." },
      { q: "¿Qué pasa si pongo la intensidad muy alta?", a: "Demasiado enfoque puede introducir bordes duros y ruido, así que es mejor usar un nivel moderado." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
