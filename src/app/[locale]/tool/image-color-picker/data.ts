export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  uploadLabel: string;
  clickHintLabel: string;
  currentColorLabel: string;
  hexLabel: string;
  rgbLabel: string;
  copyBtn: string;
  copiedMsg: string;
  historyLabel: string;
  resetBtn: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 색상 추출기 (스포이드)",
    subtitle: "이미지를 업로드하고 원하는 위치를 클릭하면 해당 픽셀의 색상 코드를 바로 추출합니다.",
    uploadLabel: "이미지를 드래그하거나 클릭하여 업로드",
    clickHintLabel: "이미지를 클릭해 색상을 추출하세요",
    currentColorLabel: "선택한 색상",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyBtn: "복사",
    copiedMsg: "복사됨!",
    historyLabel: "추출 기록",
    resetBtn: "초기화",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "색상을 추출하고 싶은 위치를 클릭합니다.",
      "하단에 표시되는 HEX·RGB 코드를 복사 버튼으로 바로 복사하세요.",
      "정확한 픽셀을 선택하기 어렵다면 브라우저 확대(Ctrl/Cmd + +)를 사용해 이미지를 키운 뒤 클릭하면 더 정밀하게 추출할 수 있습니다.",
    ],
    faq: [
      { q: "추출한 색상은 어디에 쓸 수 있나요?", a: "CSS, 디자인 툴, 그림 작업 등에서 정확한 색상 코드가 필요할 때 바로 복사해 사용할 수 있습니다." },
      { q: "이미지가 서버로 전송되나요?", a: "아니요, 이미지는 브라우저 안에서만 처리되며 서버로 전송되지 않습니다." },
      { q: "어떤 이미지 형식을 업로드할 수 있나요?", a: "JPG, PNG, WebP, GIF 등 브라우저가 기본적으로 표시할 수 있는 대부분의 이미지 형식을 지원합니다." },
      { q: "추출 기록은 몇 개까지 저장되나요?", a: "최근에 추출한 색상들이 목록에 쌓이며, '초기화' 버튼을 누르면 기록이 모두 지워집니다. 기록은 현재 세션에서만 유지되고 페이지를 새로고침하면 사라집니다." },
      { q: "아주 큰 이미지도 업로드할 수 있나요?", a: "대부분의 사진 크기는 문제없이 처리되지만, 매우 큰 고해상도 이미지는 브라우저와 기기 성능에 따라 로딩이 느려질 수 있습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Image Color Picker (Eyedropper)",
    subtitle: "Upload an image and click anywhere on it to instantly extract that pixel's color code.",
    uploadLabel: "Drag an image here or click to upload",
    clickHintLabel: "Click on the image to extract a color",
    currentColorLabel: "Selected Color",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    historyLabel: "Extraction History",
    resetBtn: "Reset",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Click the spot whose color you want to extract.",
      "Copy the HEX/RGB code shown below with the copy button.",
      "If it's hard to click the exact pixel, zoom in with your browser (Ctrl/Cmd + +) first for more precise extraction.",
    ],
    faq: [
      { q: "Where can I use the extracted color?", a: "You can copy the exact color code directly for use in CSS, design tools, or artwork." },
      { q: "Is my image uploaded to a server?", a: "No, the image is processed entirely in your browser and never sent to a server." },
      { q: "What image formats can I upload?", a: "Most formats your browser can display natively are supported, including JPG, PNG, WebP, and GIF." },
      { q: "How many colors does the history keep?", a: "Recently extracted colors are added to the list, and the 'Reset' button clears all of them. History is kept only for the current session and is lost on page reload." },
      { q: "Can I upload very large images?", a: "Most typical photo sizes work without issue, but extremely large, high-resolution images may load more slowly depending on your browser and device." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "画像色抽出機（スポイト）",
    subtitle: "画像をアップロードして任意の位置をクリックすると、そのピクセルの色コードを即座に抽出します。",
    uploadLabel: "画像をドラッグまたはクリックしてアップロード",
    clickHintLabel: "画像をクリックして色を抽出してください",
    currentColorLabel: "選択した色",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyBtn: "コピー",
    copiedMsg: "コピーしました！",
    historyLabel: "抽出履歴",
    resetBtn: "リセット",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "色を抽出したい位置をクリックします。",
      "下に表示されるHEX・RGBコードをコピーボタンでコピーしましょう。",
      "正確なピクセルを選択しにくい場合は、ブラウザの拡大（Ctrl/Cmd + +）で画像を大きくしてからクリックすると、より精密に抽出できます。",
    ],
    faq: [
      { q: "抽出した色はどこで使えますか？", a: "CSS、デザインツール、作画作業などで正確な色コードが必要な時に直接コピーして使用できます。" },
      { q: "画像はサーバーに送信されますか？", a: "いいえ、画像はブラウザ内でのみ処理され、サーバーには送信されません。" },
      { q: "どのような画像形式をアップロードできますか？", a: "JPG、PNG、WebP、GIFなど、ブラウザが標準的に表示できるほとんどの画像形式をサポートしています。" },
      { q: "抽出履歴はいくつまで保存されますか？", a: "最近抽出した色がリストに蓄積され、「リセット」ボタンを押すと履歴がすべて消去されます。履歴は現在のセッションのみ保持され、ページを更新すると消えます。" },
      { q: "非常に大きな画像もアップロードできますか？", a: "ほとんどの写真サイズは問題なく処理されますが、非常に大きな高解像度画像はブラウザや端末の性能によって読み込みが遅くなる場合があります。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Extractor de Color de Imagen (Cuentagotas)",
    subtitle: "Sube una imagen y haz clic en cualquier parte para extraer instantáneamente el código de color de ese píxel.",
    uploadLabel: "Arrastra una imagen o haz clic para subir",
    clickHintLabel: "Haz clic en la imagen para extraer un color",
    currentColorLabel: "Color Seleccionado",
    hexLabel: "HEX",
    rgbLabel: "RGB",
    copyBtn: "Copiar",
    copiedMsg: "¡Copiado!",
    historyLabel: "Historial de Extracción",
    resetBtn: "Reiniciar",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Haz clic en el punto cuyo color quieres extraer.",
      "Copia el código HEX/RGB mostrado abajo con el botón de copiar.",
      "Si es difícil hacer clic en el píxel exacto, acerca la imagen con el zoom del navegador (Ctrl/Cmd + +) antes de hacer clic para una extracción más precisa.",
    ],
    faq: [
      { q: "¿Dónde puedo usar el color extraído?", a: "Puedes copiar el código de color exacto para usarlo en CSS, herramientas de diseño o arte." },
      { q: "¿Se sube mi imagen a un servidor?", a: "No, la imagen se procesa completamente en tu navegador y nunca se envía a un servidor." },
      { q: "¿Qué formatos de imagen puedo subir?", a: "Se admiten la mayoría de los formatos que tu navegador puede mostrar de forma nativa, incluidos JPG, PNG, WebP y GIF." },
      { q: "¿Cuántos colores guarda el historial?", a: "Los colores extraídos recientemente se añaden a la lista, y el botón 'Reiniciar' los borra todos. El historial se conserva solo durante la sesión actual y se pierde al recargar la página." },
      { q: "¿Puedo subir imágenes muy grandes?", a: "La mayoría de los tamaños de foto típicos funcionan sin problema, pero imágenes de muy alta resolución pueden cargarse más lentamente según tu navegador y dispositivo." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
