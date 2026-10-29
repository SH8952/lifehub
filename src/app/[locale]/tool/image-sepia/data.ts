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
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 세피아 필터",
    subtitle: "이미지에 따뜻한 갈색 톤의 세피아 필터를 적용하세요 (브라우저에서 100% 처리)",
    uploadLabel: "이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    resultLabel: "세피아 변환 결과",
    download: "세피아 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "필터를 적용할 이미지 파일을 업로드합니다.",
      "자동으로 세피아 톤으로 변환된 결과를 확인합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "업로드한 이미지가 서버로 전송되나요?", a: "아니요. 모든 변환 작업은 브라우저 안에서 Canvas API로 처리되며, 이미지 파일은 서버로 전송되지 않습니다." },
      { q: "세피아 필터는 어디에 주로 사용되나요?", a: "오래된 사진 느낌, 빈티지 감성의 SNS 게시물, 추억을 담은 앨범 등에 세피아 톤이 자주 사용됩니다." },
      { q: "원본 색상을 다시 복원할 수 있나요?", a: "세피아로 변환된 결과 이미지에서는 원본 색상 정보가 사라지므로 복원할 수 없습니다. 원본 파일을 따로 보관해두세요." },
    ],
    disclaimer: "이 도구는 참고용이며, 변환 결과의 품질이나 특정 용도 적합성을 보장하지 않습니다.",
    footer: "LifeHub 도구 모음",
  },
  en: {
    title: "Image Sepia Filter",
    subtitle: "Apply a warm brownish sepia tone to your image — 100% processed in your browser",
    uploadLabel: "Drag and drop an image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose another image",
    resultLabel: "Sepia result",
    download: "Download sepia image",
    howTitle: "How to use",
    howSteps: [
      "Upload the image you want to apply the filter to.",
      "The sepia-toned result is generated automatically.",
      "Download the result image.",
    ],
    faq: [
      { q: "Is my uploaded image sent to a server?", a: "No. All conversion happens in your browser using the Canvas API — your image file is never sent to a server." },
      { q: "Where is the sepia filter commonly used?", a: "It's often used to give photos an old-fashioned feel, for vintage-style social media posts, and for nostalgic photo albums." },
      { q: "Can I restore the original colors later?", a: "No, once converted to sepia the original color information is discarded. Keep a copy of the original file if you need it later." },
    ],
    disclaimer: "This tool is provided for reference only and does not guarantee the quality or suitability of the result for any specific purpose.",
    footer: "LifeHub Tools",
  },
  ja: {
    title: "画像セピアフィルター",
    subtitle: "画像に暖かい茶色のセピアフィルターを適用します(ブラウザで100%処理)",
    uploadLabel: "画像をドラッグまたはクリックしてアップロードしてください",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    resultLabel: "セピア変換結果",
    download: "セピア画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "フィルターを適用したい画像ファイルをアップロードします。",
      "自動的にセピア調に変換された結果を確認します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "アップロードした画像はサーバーに送信されますか?", a: "いいえ。すべての変換作業はブラウザ内でCanvas APIによって処理され、画像ファイルはサーバーに送信されません。" },
      { q: "セピアフィルターは主にどこで使われますか?", a: "古い写真のような雰囲気、ビンテージ感のあるSNS投稿、思い出のアルバムなどによく使われます。" },
      { q: "元の色を復元できますか?", a: "セピアに変換された結果画像では元の色情報が失われるため復元できません。元のファイルは別途保管してください。" },
    ],
    disclaimer: "このツールは参考用であり、変換結果の品質や特定用途への適合性を保証しません。",
    footer: "LifeHub ツール集",
  },
  es: {
    title: "Filtro Sepia para Imágenes",
    subtitle: "Aplica un cálido tono sepia marrón a tu imagen — procesado 100% en tu navegador",
    uploadLabel: "Arrastra una imagen o haz clic para subirla",
    uploadHint: "Admite JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado sepia",
    download: "Descargar imagen sepia",
    howTitle: "Cómo usarlo",
    howSteps: [
      "Sube la imagen a la que quieres aplicar el filtro.",
      "El resultado en tono sepia se genera automáticamente.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Se envía mi imagen a un servidor?", a: "No. Toda la conversión ocurre en tu navegador usando la API Canvas — tu archivo de imagen nunca se envía a un servidor." },
      { q: "¿Dónde se usa comúnmente el filtro sepia?", a: "Se usa a menudo para dar a las fotos un aire antiguo, en publicaciones de estilo vintage en redes sociales y en álbumes nostálgicos." },
      { q: "¿Puedo restaurar los colores originales después?", a: "No, una vez convertida a sepia la información de color original se descarta. Guarda una copia del archivo original si la necesitas." },
    ],
    disclaimer: "Esta herramienta se ofrece solo como referencia y no garantiza la calidad ni la idoneidad del resultado para un uso específico.",
    footer: "Herramientas LifeHub",
  },

};
