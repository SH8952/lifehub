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
  ratioLabel: string;
  positionLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 크롭(자르기) 도구",
    subtitle: "원하는 비율을 선택하고 슬라이더로 위치를 조절해 이미지를 원하는 영역만 잘라내세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    ratioLabel: "비율 선택",
    positionLabel: "크롭 위치",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "원하는 비율을 선택하고, 필요하면 위치 슬라이더로 조절합니다.",
      "잘린 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "비율을 선택하면 어떻게 잘리나요?", a: "선택한 비율에 맞는 최대 크기의 영역을 이미지 안에서 찾아 자동으로 잘라냅니다." },
      { q: "크롭 위치는 어떤 역할을 하나요?", a: "이미지와 비율이 정확히 일치하지 않을 때, 잘려나가는 영역을 좌우 또는 상하로 이동시킬 수 있습니다." },
      { q: "자유 비율도 지원하나요?", a: "네, '자유' 비율을 선택하면 원본 이미지 전체 영역이 그대로 유지됩니다(크롭 없음)." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Crop Tool",
    subtitle: "Pick an aspect ratio and fine-tune the position with a slider to crop exactly the area you want. All processing happens in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    ratioLabel: "Aspect Ratio",
    positionLabel: "Crop Position",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Choose a ratio and fine-tune the position slider if needed.",
      "Download the cropped image.",
    ],
    faq: [
      { q: "How is the crop area determined?", a: "It automatically finds the largest area matching your chosen ratio within the image." },
      { q: "What does the crop position slider do?", a: "When the ratio doesn't exactly match the image, it lets you shift which part is kept, left-right or top-bottom." },
      { q: "Is a free-form ratio supported?", a: "Yes, choosing 'Free' keeps the entire original image with no cropping." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像クロップ（切り取り）ツール",
    subtitle: "希望の比率を選択し、スライダーで位置を調整して必要な部分だけを切り取ります。すべての処理はブラウザで行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    ratioLabel: "比率を選択",
    positionLabel: "クロップ位置",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "希望の比率を選択し、必要なら位置スライダーで調整します。",
      "切り取られた画像をダウンロードします。",
    ],
    faq: [
      { q: "クロップ範囲はどのように決まりますか？", a: "選択した比率に合う最大サイズの領域を画像内から自動的に見つけて切り取ります。" },
      { q: "クロップ位置スライダーの役割は何ですか？", a: "画像と比率が正確に一致しない場合、残す部分を左右または上下に移動させることができます。" },
      { q: "自由な比率にも対応していますか？", a: "はい、「自由」を選択すると元の画像全体がそのまま維持されます（クロップなし）。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Herramienta de Recorte de Imagen",
    subtitle: "Elige una proporción y ajusta la posición con el control deslizante para recortar exactamente el área que quieras. Todo se procesa en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    ratioLabel: "Proporción",
    positionLabel: "Posición de Recorte",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Elige una proporción y ajusta la posición si es necesario.",
      "Descarga la imagen recortada.",
    ],
    faq: [
      { q: "¿Cómo se determina el área de recorte?", a: "Encuentra automáticamente el área más grande que coincide con la proporción elegida dentro de la imagen." },
      { q: "¿Qué hace el control deslizante de posición?", a: "Cuando la proporción no coincide exactamente con la imagen, te permite desplazar qué parte se conserva." },
      { q: "¿Se admite una proporción libre?", a: "Sí, elegir 'Libre' conserva toda la imagen original sin recortar." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
