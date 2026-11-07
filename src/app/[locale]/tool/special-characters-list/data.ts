export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  copied: string;
  catArrows: string;
  catMath: string;
  catCurrency: string;
  catBrackets: string;
  catStars: string;
  catLines: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "특수문자 모음",
    subtitle: "카테고리별 특수문자를 클릭 한 번으로 복사해 사용하세요.",
    copied: "복사됨!",
    catArrows: "화살표",
    catMath: "수학 기호",
    catCurrency: "통화 기호",
    catBrackets: "괄호·구두점",
    catStars: "별·도형",
    catLines: "선·박스 그리기",
    howTitle: "사용 방법",
    howSteps: [
      "원하는 카테고리에서 특수문자를 찾습니다.",
      "문자를 클릭하면 클립보드에 자동 복사됩니다.",
      "원하는 곳에 붙여넣으세요(Ctrl+V 또는 Cmd+V).",
    ],
    faq: [
      { q: "이 문자들이 모든 폰트에서 보이나요?", a: "대부분의 시스템 폰트에서 지원되지만, 일부 특수한 기호는 사용하는 폰트에 따라 다르게 보이거나 표시되지 않을 수 있습니다." },
      { q: "키보드로 직접 입력할 수도 있나요?", a: "Windows는 Alt+코드, Mac은 유니코드 입력기를 사용할 수 있지만, 이 도구로 복사하는 것이 더 간편합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Special Characters List",
    subtitle: "Browse special characters by category and copy them with a single click.",
    copied: "Copied!",
    catArrows: "Arrows",
    catMath: "Math Symbols",
    catCurrency: "Currency",
    catBrackets: "Brackets & Punctuation",
    catStars: "Stars & Shapes",
    catLines: "Lines & Box Drawing",
    howTitle: "How to Use",
    howSteps: [
      "Find the character you want in the relevant category.",
      "Click a character to automatically copy it to your clipboard.",
      "Paste it (Ctrl+V or Cmd+V) wherever you need it.",
    ],
    faq: [
      { q: "Will these characters display in every font?", a: "Most system fonts support them, but some unusual symbols may render differently or not at all depending on the font." },
      { q: "Can I type these directly from my keyboard?", a: "Windows supports Alt+code and Mac has Unicode input methods, but copying from this tool is simpler." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "特殊文字一覧",
    subtitle: "カテゴリ別の特殊文字をクリック1つでコピーして使用できます。",
    copied: "コピーしました！",
    catArrows: "矢印",
    catMath: "数学記号",
    catCurrency: "通貨記号",
    catBrackets: "括弧・句読点",
    catStars: "星・図形",
    catLines: "線・罫線",
    howTitle: "使用方法",
    howSteps: [
      "該当カテゴリで目的の特殊文字を探します。",
      "文字をクリックするとクリップボードに自動コピーされます。",
      "必要な場所に貼り付け（Ctrl+VまたはCmd+V）してください。",
    ],
    faq: [
      { q: "これらの文字はすべてのフォントで表示されますか？", a: "ほとんどのシステムフォントで対応していますが、一部の特殊な記号はフォントによって異なって表示されたり表示されない場合があります。" },
      { q: "キーボードで直接入力できますか？", a: "WindowsはAlt+コード、MacはUnicode入力を使用できますが、このツールでコピーする方が簡単です。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Lista de Caracteres Especiales",
    subtitle: "Explora caracteres especiales por categoría y cópialos con un solo clic.",
    copied: "¡Copiado!",
    catArrows: "Flechas",
    catMath: "Símbolos Matemáticos",
    catCurrency: "Moneda",
    catBrackets: "Paréntesis y Puntuación",
    catStars: "Estrellas y Formas",
    catLines: "Líneas y Dibujo de Cajas",
    howTitle: "Cómo Usar",
    howSteps: [
      "Encuentra el carácter que buscas en la categoría correspondiente.",
      "Haz clic en un carácter para copiarlo automáticamente al portapapeles.",
      "Pégalo (Ctrl+V o Cmd+V) donde lo necesites.",
    ],
    faq: [
      { q: "¿Se mostrarán estos caracteres en todas las fuentes?", a: "La mayoría de fuentes del sistema los admiten, pero algunos símbolos inusuales pueden verse diferentes o no mostrarse según la fuente." },
      { q: "¿Puedo escribirlos directamente desde el teclado?", a: "Windows admite Alt+código y Mac tiene métodos de entrada Unicode, pero copiar desde esta herramienta es más sencillo." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
