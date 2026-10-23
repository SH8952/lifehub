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
  widthLabel: string;
  heightLabel: string;
  lockAspect: string;
  presetLabel: string;
  originalDims: string;
  resultDims: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 리사이징",
    subtitle: "가로·세로 크기를 원하는 픽셀 값으로 조절하세요 (브라우저에서 100% 처리)",
    uploadLabel: "이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    widthLabel: "가로 (px)",
    heightLabel: "세로 (px)",
    lockAspect: "가로세로 비율 유지",
    presetLabel: "빠른 배율 선택",
    originalDims: "원본 크기",
    resultDims: "변경된 크기",
    download: "리사이징된 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "리사이징할 이미지 파일을 업로드합니다.",
      "가로/세로 값을 직접 입력하거나 배율 버튼(25%, 50%, 75%)을 클릭합니다.",
      "비율 유지 옵션을 켜면 가로 값 입력 시 세로 값이 자동으로 맞춰집니다.",
      "결과를 확인하고 다운로드합니다.",
    ],
    faq: [
      {
        q: "이미지를 원본보다 크게 키울 수도 있나요?",
        a: "네, 가능합니다. 다만 원본보다 크게 확대하면 화질이 흐려질 수 있으니 참고하세요.",
      },
      {
        q: "비율을 유지하지 않고 강제로 늘리거나 줄일 수 있나요?",
        a: "네. '가로세로 비율 유지' 옵션을 끄면 가로와 세로 값을 독립적으로 지정할 수 있습니다. 다만 이미지가 찌그러져 보일 수 있습니다.",
      },
      {
        q: "업로드한 이미지가 서버에 저장되나요?",
        a: "아니요. 모든 처리는 브라우저 안에서 Canvas API로 이루어지며 서버로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 원본보다 큰 크기로 확대하면 화질이 저하될 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Image Resizer",
    subtitle: "Adjust width and height to the exact pixel size you need (100% processed in your browser)",
    uploadLabel: "Drag & drop an image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose a different image",
    widthLabel: "Width (px)",
    heightLabel: "Height (px)",
    lockAspect: "Lock aspect ratio",
    presetLabel: "Quick scale presets",
    originalDims: "Original size",
    resultDims: "Resized to",
    download: "Download Resized Image",
    howTitle: "How to Use",
    howSteps: [
      "Upload the image file you want to resize.",
      "Enter width/height directly, or click a preset (25%, 50%, 75%).",
      "With aspect ratio locked, height adjusts automatically as you type width.",
      "Check the result and download it.",
    ],
    faq: [
      {
        q: "Can I enlarge an image beyond its original size?",
        a: "Yes, though enlarging beyond the original resolution may reduce sharpness.",
      },
      {
        q: "Can I resize without keeping the aspect ratio?",
        a: "Yes. Turn off 'Lock aspect ratio' to set width and height independently, though the image may appear stretched.",
      },
      {
        q: "Is my uploaded image stored on a server?",
        a: "No. All processing happens locally in your browser using the Canvas API; nothing is uploaded.",
      },
    ],
    disclaimer: "Enlarging beyond the original size may reduce image sharpness.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "画像リサイズ",
    subtitle: "縦横のサイズを希望のピクセル値に調整します（ブラウザで100%処理）",
    uploadLabel: "画像をドラッグ＆ドロップ、またはクリックしてアップロード",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    widthLabel: "幅 (px)",
    heightLabel: "高さ (px)",
    lockAspect: "縦横比を維持",
    presetLabel: "クイック倍率選択",
    originalDims: "元のサイズ",
    resultDims: "変更後のサイズ",
    download: "リサイズした画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "リサイズしたい画像ファイルをアップロードします。",
      "幅・高さを直接入力するか、倍率ボタン（25%、50%、75%）をクリックします。",
      "縦横比維持をオンにすると、幅を入力した際に高さが自動調整されます。",
      "結果を確認してダウンロードします。",
    ],
    faq: [
      {
        q: "元のサイズより大きく拡大できますか？",
        a: "はい、可能です。ただし元の解像度より大きく拡大すると画質が粗くなる場合があります。",
      },
      {
        q: "縦横比を維持せずに強制的に変更できますか？",
        a: "はい。「縦横比を維持」をオフにすると幅と高さを個別に指定できます。ただし画像が歪んで見える場合があります。",
      },
      {
        q: "アップロードした画像はサーバーに保存されますか？",
        a: "いいえ。すべての処理はブラウザ内でCanvas APIを使って行われ、サーバーには送信されません。",
      },
    ],
    disclaimer: "⚠️ 元のサイズより大きく拡大すると画質が低下する場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Redimensionador de Imágenes",
    subtitle: "Ajusta el ancho y alto al tamaño exacto en píxeles que necesitas (100% procesado en tu navegador)",
    uploadLabel: "Arrastra y suelta una imagen, o haz clic para subirla",
    uploadHint: "Compatible con JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    widthLabel: "Ancho (px)",
    heightLabel: "Alto (px)",
    lockAspect: "Bloquear proporción",
    presetLabel: "Escalas rápidas",
    originalDims: "Tamaño original",
    resultDims: "Redimensionado a",
    download: "Descargar Imagen Redimensionada",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube el archivo de imagen que deseas redimensionar.",
      "Ingresa el ancho/alto directamente, o haz clic en un preajuste (25%, 50%, 75%).",
      "Con la proporción bloqueada, el alto se ajusta automáticamente al escribir el ancho.",
      "Revisa el resultado y descárgalo.",
    ],
    faq: [
      {
        q: "¿Puedo agrandar una imagen más allá de su tamaño original?",
        a: "Sí, aunque agrandarla más allá de la resolución original puede reducir la nitidez.",
      },
      {
        q: "¿Puedo redimensionar sin mantener la proporción?",
        a: "Sí. Desactiva 'Bloquear proporción' para establecer ancho y alto de forma independiente, aunque la imagen puede verse distorsionada.",
      },
      {
        q: "¿Se guarda mi imagen subida en un servidor?",
        a: "No. Todo el procesamiento ocurre localmente en tu navegador usando la API de Canvas; no se sube nada.",
      },
    ],
    disclaimer: "Agrandar más allá del tamaño original puede reducir la nitidez de la imagen.",
    footer: "Procesado 100% en tu navegador. No se envían datos a ningún servidor.",
  },
};
