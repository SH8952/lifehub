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
  fileListLabel: string;
  addMore: string;
  remove: string;
  generateButton: string;
  generatingLabel: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 → PDF 변환기(여러 장)",
    subtitle: "여러 장의 이미지를 업로드해 각 장이 한 페이지씩 되는 PDF 파일로 만드세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요(여러 장 선택 가능)",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    fileListLabel: "선택된 이미지 (순서대로 페이지가 됩니다)",
    addMore: "이미지 추가",
    remove: "제거",
    generateButton: "PDF 생성하기",
    generatingLabel: "PDF 생성 중...",
    download: "PDF 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 여러 장 업로드합니다.",
      "필요하면 각 이미지를 제거하거나 더 추가합니다.",
      "PDF를 생성하고 다운로드합니다.",
    ],
    faq: [
      { q: "이미지 순서를 바꿀 수 있나요?", a: "현재는 업로드한 순서대로 페이지가 생성됩니다. 원하는 순서로 파일을 선택해 업로드해주세요." },
      { q: "이미지가 페이지에 꽉 차게 나오나요?", a: "각 이미지는 비율을 유지한 채 A4 용지 중앙에 최대한 크게 배치됩니다." },
      { q: "몇 장까지 변환할 수 있나요?", a: "브라우저 메모리가 허용하는 한 제한 없이 여러 장을 한 번에 변환할 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Images to PDF Converter (Multiple)",
    subtitle: "Upload multiple images and turn each one into a page of a single PDF file. All processing happens in your browser.",
    uploadLabel: "Upload images (multiple selection supported)",
    uploadHint: "Click or drag and drop files (JPG, PNG, WebP, etc.)",
    fileListLabel: "Selected Images (become pages in this order)",
    addMore: "Add more images",
    remove: "Remove",
    generateButton: "Generate PDF",
    generatingLabel: "Generating PDF...",
    download: "Download PDF",
    howTitle: "How to Use",
    howSteps: [
      "Upload multiple images.",
      "Remove or add images as needed.",
      "Generate and download the PDF.",
    ],
    faq: [
      { q: "Can I reorder the images?", a: "Pages are currently created in upload order. Select and upload your files in the order you want." },
      { q: "Will the image fill the entire page?", a: "Each image is centered on an A4 page and scaled as large as possible while keeping its aspect ratio." },
      { q: "How many images can I convert?", a: "There's no hard limit — you can convert as many images as your browser's memory allows." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your images on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像 → PDF変換ツール（複数枚）",
    subtitle: "複数の画像をアップロードし、それぞれを1ページとするPDFファイルを作成します。すべての処理はブラウザで行われます。",
    uploadLabel: "画像をアップロードしてください（複数選択可能）",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    fileListLabel: "選択された画像（この順でページになります）",
    addMore: "画像を追加",
    remove: "削除",
    generateButton: "PDFを生成",
    generatingLabel: "PDF生成中...",
    download: "PDFをダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "複数の画像をアップロードします。",
      "必要に応じて画像を削除または追加します。",
      "PDFを生成してダウンロードします。",
    ],
    faq: [
      { q: "画像の順序を変更できますか？", a: "現在はアップロードした順にページが作成されます。希望の順序でファイルを選択してアップロードしてください。" },
      { q: "画像はページいっぱいに表示されますか？", a: "各画像は比率を保ったままA4用紙の中央にできるだけ大きく配置されます。" },
      { q: "何枚まで変換できますか？", a: "ブラウザのメモリが許す限り、枚数の制限なく一度に変換できます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Imágenes a PDF (Varias)",
    subtitle: "Sube varias imágenes y convierte cada una en una página de un único archivo PDF. Todo se procesa en tu navegador.",
    uploadLabel: "Sube imágenes (se admite selección múltiple)",
    uploadHint: "Haz clic o arrastra y suelta archivos (JPG, PNG, WebP, etc.)",
    fileListLabel: "Imágenes Seleccionadas (se convierten en páginas en este orden)",
    addMore: "Añadir más imágenes",
    remove: "Eliminar",
    generateButton: "Generar PDF",
    generatingLabel: "Generando PDF...",
    download: "Descargar PDF",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube varias imágenes.",
      "Elimina o añade imágenes según sea necesario.",
      "Genera y descarga el PDF.",
    ],
    faq: [
      { q: "¿Puedo reordenar las imágenes?", a: "Las páginas se crean actualmente en el orden de subida. Selecciona y sube tus archivos en el orden que quieras." },
      { q: "¿La imagen llenará toda la página?", a: "Cada imagen se centra en una página A4 y se escala lo más grande posible manteniendo su proporción." },
      { q: "¿Cuántas imágenes puedo convertir?", a: "No hay un límite estricto: puedes convertir tantas imágenes como la memoria de tu navegador permita." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tus imágenes en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
