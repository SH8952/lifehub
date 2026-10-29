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
  sizeLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "정사각형 썸네일 생성기(SNS용)",
    subtitle: "이미지를 중앙 기준으로 정사각형으로 잘라 SNS 프로필·게시물에 바로 쓸 수 있는 썸네일을 만드세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    sizeLabel: "출력 크기",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "원하는 출력 크기를 선택합니다.",
      "중앙 기준으로 잘린 정사각형 썸네일을 다운로드합니다.",
    ],
    faq: [
      { q: "어떤 기준으로 정사각형으로 잘리나요?", a: "이미지의 짧은 쪽 길이를 기준으로 가운데 영역을 정사각형으로 잘라냅니다." },
      { q: "원하는 영역을 직접 선택할 수 있나요?", a: "현재 버전은 중앙 자동 크롭만 지원합니다. 특정 영역 선택 기능은 추후 추가될 수 있습니다." },
      { q: "어떤 SNS에 사용하기 좋나요?", a: "인스타그램 프로필, 유튜브 채널 아트, 블로그 썸네일 등 정사각형 이미지가 필요한 모든 곳에 사용할 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Square Thumbnail Generator (for Social Media)",
    subtitle: "Center-crop your image into a perfect square, ready for social media profiles and posts. All processing happens in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    sizeLabel: "Output Size",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Choose the output size you want.",
      "Download the center-cropped square thumbnail.",
    ],
    faq: [
      { q: "How is the square crop determined?", a: "It crops a centered square region based on the shorter side of your image." },
      { q: "Can I manually choose the crop area?", a: "The current version only supports automatic center cropping. Manual area selection may be added later." },
      { q: "What's this useful for?", a: "It's great for Instagram profile pictures, YouTube channel art, blog thumbnails, and anywhere a square image is needed." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "正方形サムネイル生成ツール（SNS用）",
    subtitle: "画像を中央基準で正方形に切り出し、SNSのプロフィールや投稿にそのまま使えるサムネイルを作成します。すべての処理はブラウザで行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    sizeLabel: "出力サイズ",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "希望する出力サイズを選択します。",
      "中央基準で切り出された正方形サムネイルをダウンロードします。",
    ],
    faq: [
      { q: "正方形のクロップはどのように決まりますか？", a: "画像の短い辺を基準に、中央領域を正方形として切り出します。" },
      { q: "クロップ範囲を自分で選択できますか？", a: "現在のバージョンは自動中央クロップのみに対応しています。範囲選択機能は今後追加される可能性があります。" },
      { q: "どのようなSNSに向いていますか？", a: "Instagramのプロフィール写真、YouTubeチャンネルアート、ブログのサムネイルなど、正方形画像が必要な場面で使えます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Miniaturas Cuadradas (para Redes Sociales)",
    subtitle: "Recorta tu imagen al centro en un cuadrado perfecto, listo para perfiles y publicaciones en redes sociales. Todo se procesa en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    sizeLabel: "Tamaño de Salida",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Elige el tamaño de salida que quieras.",
      "Descarga la miniatura cuadrada recortada al centro.",
    ],
    faq: [
      { q: "¿Cómo se determina el recorte cuadrado?", a: "Recorta una región centrada cuadrada basada en el lado más corto de tu imagen." },
      { q: "¿Puedo elegir manualmente el área de recorte?", a: "La versión actual solo admite recorte automático centrado. La selección manual podría añadirse más adelante." },
      { q: "¿Para qué sirve esto?", a: "Es ideal para fotos de perfil de Instagram, arte de canal de YouTube, miniaturas de blog y cualquier lugar que necesite una imagen cuadrada." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
