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
    title: "이미지 흑백 변환기",
    subtitle: "컬러 이미지를 흑백(그레이스케일)으로 변환하세요 (브라우저에서 100% 처리)",
    uploadLabel: "이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    resultLabel: "흑백 변환 결과",
    download: "흑백 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "변환할 이미지 파일을 업로드합니다.",
      "자동으로 흑백(그레이스케일)으로 변환된 결과를 확인합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "업로드한 이미지가 서버로 전송되나요?", a: "아니요. 모든 변환 작업은 브라우저 안에서 Canvas API로 처리되며, 이미지 파일은 서버로 전송되지 않습니다." },
      { q: "원본 색상을 다시 복원할 수 있나요?", a: "흑백으로 변환된 결과 이미지에서는 색상 정보가 사라지므로 복원할 수 없습니다. 원본 파일을 따로 보관해두세요." },
      { q: "어떤 상황에 흑백 변환이 유용한가요?", a: "인쇄물, 신분증 사진, 빈티지한 느낌의 사진 편집, 문서 스캔본 정리 등에 흑백 변환이 자주 사용됩니다." },
    ],
    disclaimer: "이 도구는 참고용이며, 변환 결과의 품질이나 특정 용도 적합성을 보장하지 않습니다.",
    footer: "LifeHub 도구 모음",
  },
  en: {
    title: "Image Grayscale Converter",
    subtitle: "Convert a color image to black and white (grayscale) — 100% processed in your browser",
    uploadLabel: "Drag and drop an image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose another image",
    resultLabel: "Grayscale result",
    download: "Download grayscale image",
    howTitle: "How to use",
    howSteps: [
      "Upload the image you want to convert.",
      "The grayscale result is generated automatically.",
      "Download the result image.",
    ],
    faq: [
      { q: "Is my uploaded image sent to a server?", a: "No. All conversion happens in your browser using the Canvas API — your image file is never sent to a server." },
      { q: "Can I restore the original colors later?", a: "No, once converted to grayscale the color information is discarded. Keep a copy of the original file if you need it later." },
      { q: "When is grayscale conversion useful?", a: "It's commonly used for printed materials, ID photos, vintage-style photo edits, and cleaning up scanned documents." },
    ],
    disclaimer: "This tool is provided for reference only and does not guarantee the quality or suitability of the result for any specific purpose.",
    footer: "LifeHub Tools",
  },
  ja: {
    title: "画像グレースケール変換機",
    subtitle: "カラー画像を白黒(グレースケール)に変換します(ブラウザで100%処理)",
    uploadLabel: "画像をドラッグまたはクリックしてアップロードしてください",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    resultLabel: "グレースケール変換結果",
    download: "グレースケール画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "変換したい画像ファイルをアップロードします。",
      "自動的にグレースケールに変換された結果を確認します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "アップロードした画像はサーバーに送信されますか?", a: "いいえ。すべての変換作業はブラウザ内でCanvas APIによって処理され、画像ファイルはサーバーに送信されません。" },
      { q: "元の色を復元できますか?", a: "グレースケールに変換された結果画像では色情報が失われるため復元できません。元のファイルは別途保管してください。" },
      { q: "グレースケール変換はどんな時に便利ですか?", a: "印刷物、証明写真、ビンテージ風の写真編集、スキャン文書の整理などによく使われます。" },
    ],
    disclaimer: "このツールは参考用であり、変換結果の品質や特定用途への適合性を保証しません。",
    footer: "LifeHub ツール集",
  },
  es: {
    title: "Convertidor de Imagen a Escala de Grises",
    subtitle: "Convierte una imagen en color a blanco y negro (escala de grises) — procesado 100% en tu navegador",
    uploadLabel: "Arrastra una imagen o haz clic para subirla",
    uploadHint: "Admite JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado en escala de grises",
    download: "Descargar imagen en escala de grises",
    howTitle: "Cómo usarlo",
    howSteps: [
      "Sube la imagen que quieres convertir.",
      "El resultado en escala de grises se genera automáticamente.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Se envía mi imagen a un servidor?", a: "No. Toda la conversión ocurre en tu navegador usando la API Canvas — tu archivo de imagen nunca se envía a un servidor." },
      { q: "¿Puedo restaurar los colores originales después?", a: "No, una vez convertida a escala de grises la información de color se descarta. Guarda una copia del archivo original si la necesitas." },
      { q: "¿Cuándo es útil la conversión a escala de grises?", a: "Se usa comúnmente para materiales impresos, fotos de identificación, ediciones de estilo vintage y para limpiar documentos escaneados." },
    ],
    disclaimer: "Esta herramienta se ofrece solo como referencia y no garantiza la calidad ni la idoneidad del resultado para un uso específico.",
    footer: "Herramientas LifeHub",
  },

};
