export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  nameLabel: string;
  placeholder: string;
  colorLabel: string;
  shapeLabel: string;
  circle: string;
  square: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이름 이니셜 생성기",
    subtitle: "이름을 입력하면 프로필 아바타로 쓸 수 있는 이니셜 이미지를 생성합니다.",
    nameLabel: "이름 입력",
    placeholder: "예: 홍길동",
    colorLabel: "배경 색상",
    shapeLabel: "모양",
    circle: "원형",
    square: "사각형",
    download: "이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "이름을 입력하면 자동으로 이니셜 2글자가 추출됩니다.",
      "배경 색상과 모양(원형/사각형)을 원하는 대로 선택합니다.",
      "다운로드 버튼으로 PNG 이미지를 저장합니다.",
    ],
    faq: [
      { q: "이니셜은 어떻게 추출되나요?", a: "공백으로 구분된 단어의 첫 글자를 기준으로 최대 2글자를 추출합니다. 한글 이름은 첫 글자 1개만 사용합니다." },
      { q: "이미지 크기는 얼마인가요?", a: "512x512 픽셀의 정사각형 PNG로 생성되어 대부분의 프로필 사진 규격에 적합합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 입력한 이름을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Name Initials Generator",
    subtitle: "Enter a name to generate an initials avatar image you can use as a profile picture.",
    nameLabel: "Enter Name",
    placeholder: "e.g. John Doe",
    colorLabel: "Background Color",
    shapeLabel: "Shape",
    circle: "Circle",
    square: "Square",
    download: "Download Image",
    howTitle: "How to Use",
    howSteps: [
      "Type a name and the first 2 initials are extracted automatically.",
      "Choose a background color and shape (circle/square) as you like.",
      "Use the download button to save the PNG image.",
    ],
    faq: [
      { q: "How are initials extracted?", a: "Up to 2 letters are taken from the first letters of space-separated words. For single-word names, only the first letter is used." },
      { q: "What size is the image?", a: "A 512x512 pixel square PNG, suitable for most profile picture requirements." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your name on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "名前イニシャル生成ツール",
    subtitle: "名前を入力すると、プロフィールアバターとして使えるイニシャル画像を生成します。",
    nameLabel: "名前入力",
    placeholder: "例：山田太郎",
    colorLabel: "背景色",
    shapeLabel: "形",
    circle: "円形",
    square: "四角形",
    download: "画像をダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "名前を入力すると自動的にイニシャル2文字が抽出されます。",
      "背景色と形（円形・四角形）をお好みで選択します。",
      "ダウンロードボタンでPNG画像を保存します。",
    ],
    faq: [
      { q: "イニシャルはどのように抽出されますか？", a: "スペースで区切られた単語の頭文字を基準に最大2文字を抽出します。" },
      { q: "画像サイズはどのくらいですか？", a: "512x512ピクセルの正方形PNGで生成され、ほとんどのプロフィール写真規格に適合します。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、入力した名前をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Iniciales de Nombre",
    subtitle: "Introduce un nombre para generar una imagen de iniciales que puedes usar como avatar.",
    nameLabel: "Introducir Nombre",
    placeholder: "p. ej. Juan Pérez",
    colorLabel: "Color de Fondo",
    shapeLabel: "Forma",
    circle: "Círculo",
    square: "Cuadrado",
    download: "Descargar Imagen",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe un nombre y se extraen automáticamente las 2 primeras iniciales.",
      "Elige un color de fondo y forma (círculo/cuadrado) a tu gusto.",
      "Usa el botón de descarga para guardar la imagen PNG.",
    ],
    faq: [
      { q: "¿Cómo se extraen las iniciales?", a: "Se toman hasta 2 letras de las primeras letras de palabras separadas por espacios." },
      { q: "¿Qué tamaño tiene la imagen?", a: "Un PNG cuadrado de 512x512 píxeles, adecuado para la mayoría de requisitos de foto de perfil." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu nombre en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
