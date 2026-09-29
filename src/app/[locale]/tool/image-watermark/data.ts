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
  modeLabel: string;
  modeText: string;
  modeImage: string;
  textInputLabel: string;
  textInputPlaceholder: string;
  fontSizeLabel: string;
  colorLabel: string;
  watermarkImageLabel: string;
  watermarkImageUpload: string;
  scaleLabel: string;
  opacityLabel: string;
  positionLabel: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 합성 · 워터마크",
    subtitle: "텍스트 또는 로고 이미지를 원하는 위치에 워터마크로 합성하세요 (브라우저에서 100% 처리)",
    uploadLabel: "배경 이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    modeLabel: "워터마크 종류",
    modeText: "텍스트",
    modeImage: "이미지(로고)",
    textInputLabel: "워터마크 문구",
    textInputPlaceholder: "예: © My Brand",
    fontSizeLabel: "글자 크기",
    colorLabel: "글자 색상",
    watermarkImageLabel: "워터마크 이미지",
    watermarkImageUpload: "로고/이미지 업로드",
    scaleLabel: "워터마크 크기 (%)",
    opacityLabel: "투명도",
    positionLabel: "위치",
    download: "합성된 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "배경으로 사용할 이미지를 업로드합니다.",
      "워터마크 종류(텍스트 또는 로고 이미지)를 선택합니다.",
      "문구/이미지, 크기, 투명도, 위치를 조절합니다.",
      "미리보기를 확인하고 합성된 이미지를 다운로드합니다.",
    ],
    faq: [
      {
        q: "텍스트와 로고 이미지를 동시에 넣을 수 있나요?",
        a: "현재는 텍스트 또는 이미지 중 한 가지 방식만 한 번에 적용할 수 있습니다. 두 가지를 모두 넣고 싶다면 결과물을 다운로드한 뒤 다시 업로드해서 반복 적용하세요.",
      },
      {
        q: "워터마크 위치는 어떻게 조절하나요?",
        a: "9방향 위치 버튼(상단/중앙/하단 x 좌측/가운데/우측)으로 원하는 모서리나 중앙에 배치할 수 있습니다.",
      },
      {
        q: "업로드한 이미지가 서버로 전송되나요?",
        a: "아니요. 모든 합성 작업은 브라우저 안에서 Canvas API로 처리되며 서버로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 합성 결과는 원본 이미지 크기와 워터마크 설정에 따라 달라질 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Image Watermark",
    subtitle: "Add a text or logo watermark at the position you choose (100% processed in your browser)",
    uploadLabel: "Drag & drop a background image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose a different image",
    modeLabel: "Watermark Type",
    modeText: "Text",
    modeImage: "Image (logo)",
    textInputLabel: "Watermark Text",
    textInputPlaceholder: "e.g. © My Brand",
    fontSizeLabel: "Font Size",
    colorLabel: "Text Color",
    watermarkImageLabel: "Watermark Image",
    watermarkImageUpload: "Upload logo/image",
    scaleLabel: "Watermark Size (%)",
    opacityLabel: "Opacity",
    positionLabel: "Position",
    download: "Download Watermarked Image",
    howTitle: "How to Use",
    howSteps: [
      "Upload the image to use as the background.",
      "Choose the watermark type (text or logo image).",
      "Adjust the text/image, size, opacity, and position.",
      "Check the preview and download the watermarked image.",
    ],
    faq: [
      {
        q: "Can I add both text and a logo image at once?",
        a: "Currently only one type applies at a time. To combine both, download the result and re-upload it to apply the second watermark.",
      },
      {
        q: "How do I control the watermark position?",
        a: "Use the 9-position grid (top/middle/bottom x left/center/right) to place it in any corner or the center.",
      },
      {
        q: "Is my uploaded image sent to a server?",
        a: "No. All compositing happens locally in your browser using the Canvas API; nothing is uploaded.",
      },
    ],
    disclaimer: "Results may vary depending on the original image size and watermark settings.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "画像合成・ウォーターマーク",
    subtitle: "テキストまたはロゴ画像を好きな位置にウォーターマークとして合成します（ブラウザで100%処理）",
    uploadLabel: "背景画像をドラッグ＆ドロップ、またはクリックしてアップロード",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    modeLabel: "ウォーターマークの種類",
    modeText: "テキスト",
    modeImage: "画像（ロゴ）",
    textInputLabel: "ウォーターマーク文言",
    textInputPlaceholder: "例：© My Brand",
    fontSizeLabel: "文字サイズ",
    colorLabel: "文字色",
    watermarkImageLabel: "ウォーターマーク画像",
    watermarkImageUpload: "ロゴ/画像をアップロード",
    scaleLabel: "ウォーターマークサイズ (%)",
    opacityLabel: "不透明度",
    positionLabel: "位置",
    download: "合成した画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "背景として使用する画像をアップロードします。",
      "ウォーターマークの種類（テキストまたはロゴ画像）を選択します。",
      "文言/画像、サイズ、不透明度、位置を調整します。",
      "プレビューを確認して合成した画像をダウンロードします。",
    ],
    faq: [
      {
        q: "テキストとロゴ画像を同時に入れられますか？",
        a: "現在は一度にどちらか一方のみ適用できます。両方入れたい場合は、結果をダウンロードして再度アップロードし、もう一方を適用してください。",
      },
      {
        q: "ウォーターマークの位置はどう調整しますか？",
        a: "9方向の位置ボタン（上/中央/下 × 左/中央/右）で好きな角や中央に配置できます。",
      },
      {
        q: "アップロードした画像はサーバーに送信されますか？",
        a: "いいえ。すべての合成処理はブラウザ内でCanvas APIを使って行われ、サーバーには送信されません。",
      },
    ],
    disclaimer: "⚠️ 合成結果は元画像のサイズとウォーターマーク設定によって異なる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Marca de Agua en Imagen",
    subtitle: "Agrega una marca de agua de texto o logo en la posicion que elijas (100% procesado en tu navegador)",
    uploadLabel: "Arrastra y suelta una imagen de fondo, o haz clic para subirla",
    uploadHint: "Compatible con JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    modeLabel: "Tipo de Marca de Agua",
    modeText: "Texto",
    modeImage: "Imagen (logo)",
    textInputLabel: "Texto de la Marca de Agua",
    textInputPlaceholder: "ej: © Mi Marca",
    fontSizeLabel: "Tamano de Fuente",
    colorLabel: "Color del Texto",
    watermarkImageLabel: "Imagen de Marca de Agua",
    watermarkImageUpload: "Subir logo/imagen",
    scaleLabel: "Tamano de Marca de Agua (%)",
    opacityLabel: "Opacidad",
    positionLabel: "Posicion",
    download: "Descargar Imagen con Marca de Agua",
    howTitle: "Como Usar",
    howSteps: [
      "Sube la imagen que se usara como fondo.",
      "Elige el tipo de marca de agua (texto o imagen de logo).",
      "Ajusta el texto/imagen, tamano, opacidad y posicion.",
      "Revisa la vista previa y descarga la imagen con marca de agua.",
    ],
    faq: [
      {
        q: "Puedo agregar texto y un logo al mismo tiempo?",
        a: "Actualmente solo se aplica un tipo a la vez. Para combinar ambos, descarga el resultado y vuelve a subirlo para aplicar la segunda marca de agua.",
      },
      {
        q: "Como controlo la posicion de la marca de agua?",
        a: "Usa la cuadricula de 9 posiciones (superior/medio/inferior x izquierda/centro/derecha) para colocarla en cualquier esquina o en el centro.",
      },
      {
        q: "Se envia mi imagen subida a un servidor?",
        a: "No. Toda la composicion ocurre localmente en tu navegador usando la API de Canvas; no se sube nada.",
      },
    ],
    disclaimer: "Los resultados pueden variar segun el tamano de la imagen original y la configuracion de la marca de agua.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
