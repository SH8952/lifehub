export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  generateBtn: string;
  quoteLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "오늘의 명언 생성기",
    subtitle: "버튼을 누르면 오늘 하루에 힘이 되는 짧은 문장을 하나씩 보여드립니다.",
    generateBtn: "명언 받기",
    quoteLabel: "오늘의 한마디",
    howTitle: "사용 방법",
    howSteps: [
      "\"명언 받기\" 버튼을 누릅니다.",
      "40여 개의 문장 중 하나가 무작위로 표시됩니다.",
      "다시 누르면 새로운 문장을 받을 수 있습니다.",
    ],
    faq: [
      { q: "이 문장들은 유명인의 명언인가요?", a: "아니요, 저작권 문제를 피하기 위해 특정 유명인의 명언이 아닌 자체 제작한 짧은 문장들을 사용합니다." },
      { q: "매번 다른 문장이 나오나요?", a: "네, 버튼을 누를 때마다 무작위로 선택되어 같은 문장이 반복될 수도 있고 새로운 문장이 나올 수도 있습니다." },
    ],
    disclaimer: "이 문장들은 자체 제작된 창작 문구로 특정 인물의 발언이 아닙니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Daily Quote Generator",
    subtitle: "Click the button to get a short, uplifting line for today.",
    generateBtn: "Get a Quote",
    quoteLabel: "Today's Words",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Get a Quote.\"",
      "One of over 40 lines is randomly shown.",
      "Click again for a new line.",
    ],
    faq: [
      { q: "Are these famous quotes from real people?", a: "No, to avoid copyright issues, these are original short lines, not attributed quotes from real public figures." },
      { q: "Do I get a different line every time?", a: "Yes, it's randomly picked each click, so you may see a repeat or a new line." },
    ],
    disclaimer: "These lines are original creative content and are not attributed to any specific real person.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "今日の名言生成ツール",
    subtitle: "ボタンを押すと今日一日の力になる短い文章を一つお届けします。",
    generateBtn: "名言を受け取る",
    quoteLabel: "今日の一言",
    howTitle: "使用方法",
    howSteps: [
      "「名言を受け取る」ボタンを押します。",
      "40種類以上の文章の中から1つがランダムに表示されます。",
      "もう一度押すと新しい文章を受け取れます。",
    ],
    faq: [
      { q: "これらの文章は有名人の名言ですか？", a: "いいえ、著作権問題を避けるため特定の有名人の名言ではなく、独自に作成した短い文章を使用しています。" },
      { q: "毎回違う文章が出ますか？", a: "はい、ボタンを押すたびにランダムに選ばれるため、同じ文章が繰り返されることもあれば新しい文章が出ることもあります。" },
    ],
    disclaimer: "これらの文章は独自に作成された創作文であり、特定の人物の発言ではありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Frases del Día",
    subtitle: "Haz clic en el botón para obtener una frase corta y alentadora para hoy.",
    generateBtn: "Obtener una Frase",
    quoteLabel: "Las Palabras de Hoy",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Obtener una Frase.\"",
      "Se muestra al azar una de más de 40 frases.",
      "Haz clic de nuevo para una frase nueva.",
    ],
    faq: [
      { q: "¿Estas son frases famosas de personas reales?", a: "No, para evitar problemas de derechos de autor, son frases originales cortas, no citas atribuidas a figuras públicas reales." },
      { q: "¿Obtengo una frase diferente cada vez?", a: "Sí, se elige al azar en cada clic, así que puedes ver una repetida o una nueva." },
    ],
    disclaimer: "Estas frases son contenido creativo original y no se atribuyen a ninguna persona real específica.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
