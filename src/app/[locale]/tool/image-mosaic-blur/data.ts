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
  blurLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 모자이크·블러 처리기",
    subtitle: "슬라이더로 블러 강도를 조절해 이미지 전체에 모자이크·블러 효과를 적용하세요. 업로드/다운로드 모두 브라우저에서 처리되어 서버에 저장되지 않습니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "처리 결과",
    download: "이미지 다운로드",
    blurLabel: "블러 강도",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "슬라이더를 움직여 블러 강도를 조절합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "블러 처리는 어떻게 동작하나요?", a: "브라우저의 Canvas API를 이용해 가우시안 블러 필터를 실시간으로 적용합니다. 서버로 이미지가 전송되지 않습니다." },
      { q: "얼굴이나 민감한 부분만 가릴 수 있나요?", a: "현재 버전은 이미지 전체에 블러를 적용합니다. 특정 영역만 가리는 기능은 추후 추가될 수 있습니다." },
      { q: "원본 해상도가 유지되나요?", a: "네, 원본 이미지와 동일한 해상도로 결과물이 생성됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Mosaic & Blur Tool",
    subtitle: "Adjust the slider to apply a blur/mosaic effect across your image. Everything runs in your browser — nothing is uploaded to a server.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    blurLabel: "Blur Strength",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Move the slider to adjust the blur strength.",
      "Download the result image.",
    ],
    faq: [
      { q: "How does the blur work?", a: "It applies a Gaussian blur filter in real time using the browser's Canvas API. Your image is never sent to a server." },
      { q: "Can I blur only a specific area, like a face?", a: "The current version blurs the entire image. Region-specific blurring may be added in a future update." },
      { q: "Is the original resolution preserved?", a: "Yes, the result keeps the same resolution as the original image." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像モザイク・ブラー処理ツール",
    subtitle: "スライダーでブラー強度を調整し、画像全体にモザイク・ブラー効果を適用します。アップロード/ダウンロードはすべてブラウザ内で処理され、サーバーには保存されません。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "処理結果",
    download: "画像をダウンロード",
    blurLabel: "ブラー強度",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "スライダーを動かしてブラー強度を調整します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "ブラー処理はどのように動作しますか？", a: "ブラウザのCanvas APIを使用してガウシアンブラーフィルターをリアルタイムで適用します。画像はサーバーに送信されません。" },
      { q: "顔など特定の部分だけモザイクをかけられますか？", a: "現在のバージョンは画像全体にブラーを適用します。特定領域のみの処理は今後追加される可能性があります。" },
      { q: "元の解像度は維持されますか？", a: "はい、元画像と同じ解像度で結果が生成されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Herramienta de Mosaico y Difuminado de Imagen",
    subtitle: "Ajusta el control deslizante para aplicar un efecto de difuminado/mosaico a toda la imagen. Todo se procesa en tu navegador, nada se sube a un servidor.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    blurLabel: "Intensidad de Difuminado",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Mueve el control deslizante para ajustar la intensidad.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Cómo funciona el difuminado?", a: "Aplica un filtro de desenfoque gaussiano en tiempo real usando la API Canvas del navegador. Tu imagen nunca se envía a un servidor." },
      { q: "¿Puedo difuminar solo un área específica, como una cara?", a: "La versión actual difumina toda la imagen. El difuminado por región podría añadirse en el futuro." },
      { q: "¿Se conserva la resolución original?", a: "Sí, el resultado mantiene la misma resolución que la imagen original." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },

};
