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
  changeFile: string;
  textLabel: string;
  textPlaceholder: string;
  opacityLabel: string;
  sizeLabel: string;
  colorLabel: string;
  angleLabel: string;
  generateButton: string;
  processing: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 워터마크 추가기",
    subtitle: "모든 페이지에 텍스트 워터마크를 추가하세요. 투명도, 크기, 색상, 각도를 자유롭게 조정할 수 있습니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    textLabel: "워터마크 텍스트",
    textPlaceholder: "예: CONFIDENTIAL",
    opacityLabel: "투명도",
    sizeLabel: "글자 크기",
    colorLabel: "색상",
    angleLabel: "회전 각도",
    generateButton: "워터마크 적용",
    processing: "처리 중...",
    download: "PDF 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "워터마크 텍스트와 투명도, 크기, 색상, 각도를 설정합니다.",
      "워터마크를 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "이미지 워터마크도 추가할 수 있나요?", a: "현재는 텍스트 워터마크만 지원합니다." },
      { q: "모든 페이지에 동일하게 적용되나요?", a: "네, 설정한 텍스트와 스타일이 모든 페이지의 중앙에 동일하게 적용됩니다." },
      { q: "워터마크를 나중에 제거할 수 있나요?", a: "이 도구로 추가한 워터마크는 PDF에 영구적으로 삽입되므로 이후 제거하려면 원본 파일이 필요합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Watermark Tool",
    subtitle: "Add a text watermark to every page. Freely adjust opacity, size, color, and angle.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    textLabel: "Watermark Text",
    textPlaceholder: "e.g. CONFIDENTIAL",
    opacityLabel: "Opacity",
    sizeLabel: "Font Size",
    colorLabel: "Color",
    angleLabel: "Rotation Angle",
    generateButton: "Apply Watermark",
    processing: "Processing...",
    download: "Download PDF",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Set the watermark text, opacity, size, color, and angle.",
      "Apply the watermark and download the resulting PDF.",
    ],
    faq: [
      { q: "Can I add an image watermark too?", a: "Currently only text watermarks are supported." },
      { q: "Is it applied identically to every page?", a: "Yes, the text and style you set are applied identically to the center of every page." },
      { q: "Can the watermark be removed later?", a: "The watermark added by this tool is permanently embedded in the PDF, so you'd need your original file to remove it." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFウォーターマーク追加ツール",
    subtitle: "すべてのページにテキストウォーターマークを追加します。透明度、サイズ、色、角度を自由に調整できます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    textLabel: "ウォーターマークテキスト",
    textPlaceholder: "例: CONFIDENTIAL",
    opacityLabel: "透明度",
    sizeLabel: "文字サイズ",
    colorLabel: "色",
    angleLabel: "回転角度",
    generateButton: "ウォーターマークを適用",
    processing: "処理中...",
    download: "PDFをダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "ウォーターマークのテキスト、透明度、サイズ、色、角度を設定します。",
      "ウォーターマークを適用して結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "画像のウォーターマークも追加できますか？", a: "現在はテキストウォーターマークのみサポートしています。" },
      { q: "すべてのページに同じように適用されますか？", a: "はい、設定したテキストとスタイルがすべてのページの中央に同じように適用されます。" },
      { q: "後でウォーターマークを削除できますか？", a: "このツールで追加したウォーターマークはPDFに永久的に埋め込まれるため、削除するには元のファイルが必要です。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Añadir Marca de Agua a PDF",
    subtitle: "Añade una marca de agua de texto a todas las páginas. Ajusta libremente la opacidad, el tamaño, el color y el ángulo.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    textLabel: "Texto de la Marca de Agua",
    textPlaceholder: "ej. CONFIDENCIAL",
    opacityLabel: "Opacidad",
    sizeLabel: "Tamaño de Letra",
    colorLabel: "Color",
    angleLabel: "Ángulo de Rotación",
    generateButton: "Aplicar Marca de Agua",
    processing: "Procesando...",
    download: "Descargar PDF",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Configura el texto, opacidad, tamaño, color y ángulo de la marca de agua.",
      "Aplica la marca de agua y descarga el PDF resultante.",
    ],
    faq: [
      { q: "¿También puedo añadir una marca de agua de imagen?", a: "Actualmente solo se admiten marcas de agua de texto." },
      { q: "¿Se aplica igual a todas las páginas?", a: "Sí, el texto y el estilo que configures se aplican de forma idéntica al centro de todas las páginas." },
      { q: "¿Se puede quitar la marca de agua después?", a: "La marca de agua añadida por esta herramienta queda incrustada permanentemente en el PDF, por lo que necesitarías tu archivo original para quitarla." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
