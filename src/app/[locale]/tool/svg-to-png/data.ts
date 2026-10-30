export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  uploadLabel: string;
  widthLabel: string;
  heightLabel: string;
  convertBtn: string;
  downloadBtn: string;
  previewLabel: string;
  errorInvalid: string;
  defaultSvg: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "SVG to PNG 변환기",
    subtitle: "SVG 코드를 입력하거나 파일을 올리면 원하는 크기의 PNG 이미지로 변환해 다운로드합니다.",
    inputLabel: "SVG 코드",
    uploadLabel: "또는 SVG 파일 업로드",
    widthLabel: "너비 (px)",
    heightLabel: "높이 (px)",
    convertBtn: "PNG로 변환",
    downloadBtn: "다운로드",
    previewLabel: "미리보기",
    errorInvalid: "올바른 SVG 코드가 아닙니다.",
    defaultSvg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"#6366f1\"/></svg>",
    howTitle: "사용 방법",
    howSteps: [
      "SVG 코드를 입력하거나 파일을 업로드합니다.",
      "원하는 너비와 높이를 지정합니다.",
      "'PNG로 변환'을 누른 뒤 다운로드 버튼으로 이미지를 저장하세요.",
    ],
    faq: [
      { q: "변환된 이미지가 서버에 저장되나요?", a: "아니요. 변환은 브라우저 내 캔버스에서 즉시 이루어지며 파일이 서버로 전송되지 않습니다." },
      { q: "투명 배경을 유지할 수 있나요?", a: "네, 원본 SVG에 배경이 지정되어 있지 않으면 PNG도 투명 배경으로 생성됩니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "SVG to PNG Converter",
    subtitle: "Paste SVG code or upload a file to convert it into a PNG image at your chosen size and download it.",
    inputLabel: "SVG Code",
    uploadLabel: "Or upload an SVG file",
    widthLabel: "Width (px)",
    heightLabel: "Height (px)",
    convertBtn: "Convert to PNG",
    downloadBtn: "Download",
    previewLabel: "Preview",
    errorInvalid: "This is not valid SVG code.",
    defaultSvg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"#6366f1\"/></svg>",
    howTitle: "How to Use",
    howSteps: [
      "Paste SVG code or upload a file.",
      "Specify the desired width and height.",
      "Click 'Convert to PNG' and save the image with the download button.",
    ],
    faq: [
      { q: "Is the converted image stored on a server?", a: "No. The conversion happens instantly on an in-browser canvas and no file is sent to a server." },
      { q: "Can transparency be preserved?", a: "Yes, if the original SVG has no background specified, the PNG will also have a transparent background." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "SVG to PNG変換ツール",
    subtitle: "SVGコードを入力またはファイルをアップロードすると、指定サイズのPNG画像に変換してダウンロードします。",
    inputLabel: "SVGコード",
    uploadLabel: "またはSVGファイルをアップロード",
    widthLabel: "幅（px）",
    heightLabel: "高さ（px）",
    convertBtn: "PNGに変換",
    downloadBtn: "ダウンロード",
    previewLabel: "プレビュー",
    errorInvalid: "正しいSVGコードではありません。",
    defaultSvg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"#6366f1\"/></svg>",
    howTitle: "使用方法",
    howSteps: [
      "SVGコードを入力するかファイルをアップロードします。",
      "希望する幅と高さを指定します。",
      "「PNGに変換」を押した後、ダウンロードボタンで画像を保存しましょう。",
    ],
    faq: [
      { q: "変換された画像はサーバーに保存されますか？", a: "いいえ。変換はブラウザ内のキャンバスで即座に行われ、ファイルはサーバーに送信されません。" },
      { q: "透明な背景を維持できますか？", a: "はい、元のSVGに背景が指定されていなければ、PNGも透明な背景で生成されます。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de SVG a PNG",
    subtitle: "Pega codigo SVG o sube un archivo para convertirlo a PNG en el tamaño que elijas y descargarlo.",
    inputLabel: "Código SVG",
    uploadLabel: "O sube un archivo SVG",
    widthLabel: "Ancho (px)",
    heightLabel: "Alto (px)",
    convertBtn: "Convertir a PNG",
    downloadBtn: "Descargar",
    previewLabel: "Vista Previa",
    errorInvalid: "Este no es un código SVG válido.",
    defaultSvg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"#6366f1\"/></svg>",
    howTitle: "Cómo Usar",
    howSteps: [
      "Pega código SVG o sube un archivo.",
      "Especifica el ancho y alto deseados.",
      "Haz clic en 'Convertir a PNG' y guarda la imagen con el botón de descarga.",
    ],
    faq: [
      { q: "¿Se almacena la imagen convertida en un servidor?", a: "No. La conversión ocurre instantáneamente en un lienzo del navegador y no se envía ningún archivo a un servidor." },
      { q: "¿Se puede preservar la transparencia?", a: "Sí, si el SVG original no tiene fondo especificado, el PNG también tendrá un fondo transparente." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
