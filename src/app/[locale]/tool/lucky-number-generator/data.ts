export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  rangeLabel: string;
  generateBtn: string;
  numbersLabel: string;
  messageLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "행운의 숫자 생성기",
    subtitle: "버튼을 누르면 오늘의 행운의 숫자 6개와 재미로 보는 메시지를 보여드립니다.",
    rangeLabel: "숫자 범위",
    generateBtn: "행운의 숫자 생성하기",
    numbersLabel: "오늘의 행운의 숫자",
    messageLabel: "숫자가 전하는 메시지",
    howTitle: "사용 방법",
    howSteps: [
      "원하는 숫자 범위(1~45 또는 1~99)를 선택합니다.",
      "\"행운의 숫자 생성하기\" 버튼을 누릅니다.",
      "무작위로 생성된 6개의 숫자와 그 합계를 기반으로 한 재미 메시지가 표시됩니다.",
    ],
    faq: [
      { q: "이 숫자로 로또를 사면 당첨되나요?", a: "아니요, 이 도구는 순수하게 재미를 위한 무작위 숫자 생성기이며 당첨을 보장하지 않습니다." },
      { q: "매번 다른 숫자가 나오나요?", a: "네, 생성 버튼을 누를 때마다 새로운 무작위 숫자 조합이 나타납니다." },
    ],
    disclaimer: "이 도구는 재미를 위한 무작위 숫자 생성기이며 어떠한 당첨이나 결과도 보장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Lucky Number Generator",
    subtitle: "Click the button to get 6 lucky numbers for today, with a fun message.",
    rangeLabel: "Number Range",
    generateBtn: "Generate Lucky Numbers",
    numbersLabel: "Today's Lucky Numbers",
    messageLabel: "What These Numbers Say",
    howTitle: "How to Use",
    howSteps: [
      "Choose your number range (1-45 or 1-99).",
      "Click \"Generate Lucky Numbers.\"",
      "Six randomly generated numbers appear, along with a fun message based on their sum.",
    ],
    faq: [
      { q: "Will these numbers win the lottery?", a: "No, this is purely a random number generator for fun and does not guarantee any winnings." },
      { q: "Do I get different numbers each time?", a: "Yes, a new random combination appears every time you click generate." },
    ],
    disclaimer: "This is a random number generator for entertainment only and guarantees no winnings or outcomes.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "ラッキーナンバー生成ツール",
    subtitle: "ボタンを押すと今日のラッキーナンバー6個と楽しいメッセージが表示されます。",
    rangeLabel: "数字の範囲",
    generateBtn: "ラッキーナンバーを生成する",
    numbersLabel: "今日のラッキーナンバー",
    messageLabel: "数字が伝えるメッセージ",
    howTitle: "使用方法",
    howSteps: [
      "希望の数字範囲（1〜45または1〜99）を選択します。",
      "「ラッキーナンバーを生成する」ボタンを押します。",
      "ランダムに生成された6個の数字とその合計に基づいた楽しいメッセージが表示されます。",
    ],
    faq: [
      { q: "この数字で宝くじを買えば当たりますか？", a: "いいえ、このツールは純粋に娯楽目的のランダム数字生成ツールであり、当選を保証するものではありません。" },
      { q: "毎回違う数字が出ますか？", a: "はい、生成ボタンを押すたびに新しいランダムな数字の組み合わせが表示されます。" },
    ],
    disclaimer: "このツールは娯楽目的のランダム数字生成ツールであり、いかなる当選や結果も保証しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Números de la Suerte",
    subtitle: "Haz clic en el botón para obtener 6 números de la suerte para hoy, con un mensaje divertido.",
    rangeLabel: "Rango de Números",
    generateBtn: "Generar Números de la Suerte",
    numbersLabel: "Números de la Suerte de Hoy",
    messageLabel: "Lo que Dicen Estos Números",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige tu rango de números (1-45 o 1-99).",
      "Haz clic en \"Generar Números de la Suerte.\"",
      "Aparecen seis números generados al azar, junto con un mensaje divertido basado en su suma.",
    ],
    faq: [
      { q: "¿Estos números ganarán la lotería?", a: "No, esto es puramente un generador de números aleatorios para diversión y no garantiza ninguna ganancia." },
      { q: "¿Obtengo números diferentes cada vez?", a: "Sí, aparece una nueva combinación aleatoria cada vez que haces clic en generar." },
    ],
    disclaimer: "Esta es una herramienta de números aleatorios solo para entretenimiento y no garantiza ningún resultado.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
