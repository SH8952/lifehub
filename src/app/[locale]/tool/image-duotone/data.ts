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
  shadowLabel: string;
  highlightLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 듀오톤(2색) 필터",
    subtitle: "밝은 영역과 어두운 영역에 각각 다른 색상을 매핑해 세련된 듀오톤 효과를 만드세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    shadowLabel: "어두운 영역 색상",
    highlightLabel: "밝은 영역 색상",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "어두운 영역과 밝은 영역의 색상을 각각 선택합니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "듀오톤 효과는 어떻게 만들어지나요?", a: "각 픽셀의 명암(밝기)을 계산한 뒤 어두운 색상과 밝은 색상 사이를 보간하여 두 가지 색조만으로 이미지를 표현합니다." },
      { q: "원본 색상 정보는 사라지나요?", a: "네, 듀오톤은 원래 색상 정보를 버리고 선택한 두 색상으로만 이미지를 재구성하는 효과입니다." },
      { q: "어떤 색상 조합이 인기 있나요?", a: "네이비+핑크, 블랙+오렌지, 퍼플+옐로우 등 대비가 강한 색상 조합이 많이 사용됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image Duotone Filter",
    subtitle: "Map two colors onto the light and dark areas of your image to create a stylish duotone effect. All processing happens in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    shadowLabel: "Shadow Color",
    highlightLabel: "Highlight Color",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Choose the shadow and highlight colors.",
      "Download the result image.",
    ],
    faq: [
      { q: "How is the duotone effect created?", a: "Each pixel's brightness is calculated, then interpolated between the shadow and highlight colors, so the image is rendered using only those two tones." },
      { q: "Does this lose the original color information?", a: "Yes, duotone discards the original colors and reconstructs the image using only the two colors you chose." },
      { q: "What color combinations are popular?", a: "High-contrast pairs like navy+pink, black+orange, or purple+yellow are commonly used." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像デュオトーン（2色）フィルター",
    subtitle: "明るい部分と暗い部分にそれぞれ異なる色を割り当て、洗練されたデュオトーン効果を作ります。すべての処理はブラウザで行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    shadowLabel: "暗い部分の色",
    highlightLabel: "明るい部分の色",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "暗い部分と明るい部分の色をそれぞれ選択します。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "デュオトーン効果はどのように作られますか？", a: "各ピクセルの明るさを計算し、暗い色と明るい色の間を補間することで、2色のみで画像を表現します。" },
      { q: "元の色情報は失われますか？", a: "はい、デュオトーンは元の色情報を破棄し、選択した2色だけで画像を再構成する効果です。" },
      { q: "どんな色の組み合わせが人気ですか？", a: "ネイビー+ピンク、ブラック+オレンジ、パープル+イエローなど、コントラストの強い組み合わせがよく使われます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Filtro Duotono (2 Colores) de Imagen",
    subtitle: "Asigna dos colores a las áreas claras y oscuras de tu imagen para crear un elegante efecto duotono. Todo se procesa en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    shadowLabel: "Color de Sombras",
    highlightLabel: "Color de Luces",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Elige los colores de sombras y luces.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Cómo se crea el efecto duotono?", a: "Se calcula el brillo de cada píxel y se interpola entre el color de sombra y el de luces, representando la imagen solo con esos dos tonos." },
      { q: "¿Se pierde la información de color original?", a: "Sí, el duotono descarta los colores originales y reconstruye la imagen usando solo los dos colores elegidos." },
      { q: "¿Qué combinaciones de colores son populares?", a: "Combinaciones de alto contraste como azul marino+rosa, negro+naranja o morado+amarillo son muy usadas." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
