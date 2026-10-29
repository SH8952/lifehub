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
  layoutLabel: string;
  gapLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 콜라주 메이커(그리드)",
    subtitle: "여러 이미지를 업로드해 그리드 레이아웃으로 하나의 콜라주 이미지를 만드세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 2~4장 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (여러 장 선택 가능)",
    changeImage: "이미지 다시 선택",
    resultLabel: "콜라주 결과",
    download: "이미지 다운로드",
    layoutLabel: "레이아웃",
    gapLabel: "이미지 간격",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 2~4장 선택합니다.",
      "원하는 그리드 레이아웃과 간격을 선택합니다.",
      "완성된 콜라주 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "이미지는 몇 장까지 사용할 수 있나요?", a: "현재 버전은 최대 4장까지 지원하며, 레이아웃에 맞게 균등한 크기로 배치됩니다." },
      { q: "이미지 비율이 다르면 어떻게 되나요?", a: "각 셀에 맞춰 중앙 기준으로 잘려서(cover 방식) 채워지므로 비율이 달라도 깔끔하게 배치됩니다." },
      { q: "이미지 순서를 바꿀 수 있나요?", a: "현재는 업로드한 순서대로 배치되며, 순서 변경 기능은 추후 추가될 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Collage Maker (Grid)",
    subtitle: "Upload multiple images and combine them into a single grid-layout collage. All processing happens in your browser.",
    uploadLabel: "Upload 2–4 images",
    uploadHint: "Click or drag and drop files (multiple selection supported)",
    changeImage: "Choose images again",
    resultLabel: "Collage Result",
    download: "Download Image",
    layoutLabel: "Layout",
    gapLabel: "Gap Between Images",
    howTitle: "How to Use",
    howSteps: [
      "Select 2–4 images.",
      "Choose the grid layout and gap you want.",
      "Download the finished collage image.",
    ],
    faq: [
      { q: "How many images can I use?", a: "The current version supports up to 4 images, evenly arranged according to the layout." },
      { q: "What happens if the images have different aspect ratios?", a: "Each image is center-cropped to fill its cell (cover-fit), so mixed ratios still look clean." },
      { q: "Can I reorder the images?", a: "Currently images are placed in upload order; reordering may be added in a future update." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像コラージュメーカー（グリッド）",
    subtitle: "複数の画像をアップロードして、グリッドレイアウトで1枚のコラージュ画像を作成します。すべての処理はブラウザで行われます。",
    uploadLabel: "画像を2〜4枚アップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（複数選択可能）",
    changeImage: "画像を再選択",
    resultLabel: "コラージュ結果",
    download: "画像をダウンロード",
    layoutLabel: "レイアウト",
    gapLabel: "画像間隔",
    howTitle: "使用方法",
    howSteps: [
      "画像を2〜4枚選択します。",
      "希望のグリッドレイアウトと間隔を選択します。",
      "完成したコラージュ画像をダウンロードします。",
    ],
    faq: [
      { q: "画像は何枚まで使えますか？", a: "現在のバージョンは最大4枚まで対応し、レイアウトに応じて均等なサイズで配置されます。" },
      { q: "画像の比率が異なる場合はどうなりますか？", a: "各セルに合わせて中央基準で切り取られ（カバー方式）配置されるため、比率が違っても綺麗に収まります。" },
      { q: "画像の順序を変更できますか？", a: "現在はアップロードした順に配置され、順序変更機能は今後追加される可能性があります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Creador de Collages de Imágenes (Cuadrícula)",
    subtitle: "Sube varias imágenes y combínalas en un único collage con diseño de cuadrícula. Todo se procesa en tu navegador.",
    uploadLabel: "Sube de 2 a 4 imágenes",
    uploadHint: "Haz clic o arrastra y suelta archivos (se admite selección múltiple)",
    changeImage: "Elegir imágenes de nuevo",
    resultLabel: "Resultado del Collage",
    download: "Descargar Imagen",
    layoutLabel: "Diseño",
    gapLabel: "Espacio Entre Imágenes",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona de 2 a 4 imágenes.",
      "Elige el diseño de cuadrícula y el espacio que quieras.",
      "Descarga la imagen del collage terminado.",
    ],
    faq: [
      { q: "¿Cuántas imágenes puedo usar?", a: "La versión actual admite hasta 4 imágenes, distribuidas de forma uniforme según el diseño." },
      { q: "¿Qué pasa si las imágenes tienen proporciones distintas?", a: "Cada imagen se recorta al centro para llenar su celda (ajuste de cobertura), así que proporciones mixtas igual se ven bien." },
      { q: "¿Puedo reordenar las imágenes?", a: "Actualmente se colocan en el orden de subida; reordenar podría añadirse en el futuro." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
