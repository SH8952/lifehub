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
    title: "이미지 네거티브(색 반전) 필터",
    subtitle: "이미지의 색상을 반전시켜 네거티브 효과를 만들어보세요 (브라우저에서 100% 처리)",
    uploadLabel: "이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    resultLabel: "색 반전 결과",
    download: "반전된 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "반전할 이미지 파일을 업로드합니다.",
      "자동으로 색상이 반전된 결과를 확인합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "업로드한 이미지가 서버로 전송되나요?", a: "아니요. 모든 변환 작업은 브라우저 안에서 Canvas API로 처리되며, 이미지 파일은 서버로 전송되지 않습니다." },
      { q: "네거티브 필터는 어떤 효과인가요?", a: "사진 필름의 네거티브처럼 색상이 반대로 바뀌는 효과로, 독특한 느낌의 이미지나 디자인 소스로 활용할 수 있습니다." },
      { q: "원본 색상을 다시 복원할 수 있나요?", a: "반전된 결과 이미지를 다시 한 번 이 도구에 넣으면 원래 색상으로 되돌릴 수 있습니다(반전을 두 번 적용하면 원본과 같아집니다)." },
    ],
    disclaimer: "이 도구는 참고용이며, 변환 결과의 품질이나 특정 용도 적합성을 보장하지 않습니다.",
    footer: "LifeHub 도구 모음",
  },
  en: {
    title: "Image Negative Filter",
    subtitle: "Invert the colors of your image to create a negative effect — 100% processed in your browser",
    uploadLabel: "Drag and drop an image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose another image",
    resultLabel: "Inverted result",
    download: "Download inverted image",
    howTitle: "How to use",
    howSteps: [
      "Upload the image you want to invert.",
      "The color-inverted result is generated automatically.",
      "Download the result image.",
    ],
    faq: [
      { q: "Is my uploaded image sent to a server?", a: "No. All conversion happens in your browser using the Canvas API — your image file is never sent to a server." },
      { q: "What effect does the negative filter create?", a: "It flips colors the way a photographic negative does, giving images a distinctive look useful for creative or design purposes." },
      { q: "Can I restore the original colors later?", a: "Yes — running the inverted result back through this tool will invert it again, returning it to the original colors." },
    ],
    disclaimer: "This tool is provided for reference only and does not guarantee the quality or suitability of the result for any specific purpose.",
    footer: "LifeHub Tools",
  },
  ja: {
    title: "画像ネガ(色反転)フィルター",
    subtitle: "画像の色を反転させてネガ効果を作ります(ブラウザで100%処理)",
    uploadLabel: "画像をドラッグまたはクリックしてアップロードしてください",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    resultLabel: "色反転結果",
    download: "反転画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "反転したい画像ファイルをアップロードします。",
      "自動的に色が反転された結果を確認します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "アップロードした画像はサーバーに送信されますか?", a: "いいえ。すべての変換作業はブラウザ内でCanvas APIによって処理され、画像ファイルはサーバーに送信されません。" },
      { q: "ネガフィルターはどんな効果ですか?", a: "写真のネガのように色が反対になる効果で、個性的な雰囲気の画像やデザイン素材として活用できます。" },
      { q: "元の色を復元できますか?", a: "反転された結果画像を再度このツールに入れると、もう一度反転されて元の色に戻ります。" },
    ],
    disclaimer: "このツールは参考用であり、変換結果の品質や特定用途への適合性を保証しません。",
    footer: "LifeHub ツール集",
  },
  es: {
    title: "Filtro Negativo de Imagen",
    subtitle: "Invierte los colores de tu imagen para crear un efecto negativo — procesado 100% en tu navegador",
    uploadLabel: "Arrastra una imagen o haz clic para subirla",
    uploadHint: "Admite JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado invertido",
    download: "Descargar imagen invertida",
    howTitle: "Cómo usarlo",
    howSteps: [
      "Sube la imagen que quieres invertir.",
      "El resultado con los colores invertidos se genera automáticamente.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Se envía mi imagen a un servidor?", a: "No. Toda la conversión ocurre en tu navegador usando la API Canvas — tu archivo de imagen nunca se envía a un servidor." },
      { q: "¿Qué efecto crea el filtro negativo?", a: "Invierte los colores igual que un negativo fotográfico, dando a las imágenes un aspecto distintivo útil para fines creativos o de diseño." },
      { q: "¿Puedo restaurar los colores originales después?", a: "Sí — si vuelves a pasar el resultado invertido por esta herramienta, se invertirá de nuevo y volverá a los colores originales." },
    ],
    disclaimer: "Esta herramienta se ofrece solo como referencia y no garantiza la calidad ni la idoneidad del resultado para un uso específico.",
    footer: "Herramientas LifeHub",
  },

};
