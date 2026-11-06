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
      "결과가 마음에 들지 않으면 버튼을 다시 눌러 언제든 새로운 숫자 조합을 받을 수 있습니다.",
    ],
    faq: [
      { q: "이 숫자로 로또를 사면 당첨되나요?", a: "아니요, 이 도구는 순수하게 재미를 위한 무작위 숫자 생성기이며 당첨을 보장하지 않습니다." },
      { q: "매번 다른 숫자가 나오나요?", a: "네, 생성 버튼을 누를 때마다 새로운 무작위 숫자 조합이 나타납니다." },
      { q: "메시지는 어떻게 결정되나요?", a: "생성된 6개 숫자의 합계를 기준으로 미리 준비된 여러 재미 메시지 중 하나가 연결되어 표시됩니다. 통계적·점술적 근거는 없습니다." },
      { q: "1~45와 1~99 범위는 어떤 차이가 있나요?", a: "1~45는 한국 로또 번호 범위와 동일해 친숙하며, 1~99는 더 넓은 범위에서 다양한 숫자 조합을 보고 싶을 때 선택하면 좋습니다." },
      { q: "6개 숫자 안에 중복된 숫자가 나올 수도 있나요?", a: "아니요, 6개 숫자는 서로 겹치지 않도록 중복 없이 무작위로 선택됩니다." },
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
      "If you don't like the result, just click the button again anytime for a new combination.",
    ],
    faq: [
      { q: "Will these numbers win the lottery?", a: "No, this is purely a random number generator for fun and does not guarantee any winnings." },
      { q: "Do I get different numbers each time?", a: "Yes, a new random combination appears every time you click generate." },
      { q: "How is the message chosen?", a: "One of several pre-written fun messages is linked based on the sum of the 6 generated numbers. It has no statistical or fortune-telling basis." },
      { q: "What's the difference between the 1-45 and 1-99 ranges?", a: "1-45 matches the familiar range used in many lottery formats, while 1-99 is a good choice if you want to see a wider variety of number combinations." },
      { q: "Can the same number appear twice among the 6?", a: "No, the 6 numbers are randomly selected without duplicates, so each one is unique within a single draw." },
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
      "結果が気に入らない場合は、いつでもボタンをもう一度押して新しい数字の組み合わせを受け取れます。",
    ],
    faq: [
      { q: "この数字で宝くじを買えば当たりますか？", a: "いいえ、このツールは純粋に娯楽目的のランダム数字生成ツールであり、当選を保証するものではありません。" },
      { q: "毎回違う数字が出ますか？", a: "はい、生成ボタンを押すたびに新しいランダムな数字の組み合わせが表示されます。" },
      { q: "メッセージはどのように決まりますか？", a: "生成された6個の数字の合計を基準に、あらかじめ用意された複数の楽しいメッセージの中から一つが連動して表示されます。統計的・占い的な根拠はありません。" },
      { q: "1〜45と1〜99の範囲にはどんな違いがありますか？", a: "1〜45は韓国の宝くじ番号範囲と同じでなじみがあり、1〜99はより広い範囲で様々な数字の組み合わせを見たいときに選ぶと良いでしょう。" },
      { q: "6個の数字の中に重複した数字が出ることもありますか？", a: "いいえ、6個の数字は重複しないようランダムに選ばれます。" },
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
      "Si no te gusta el resultado, simplemente haz clic en el botón de nuevo en cualquier momento para obtener una nueva combinación.",
    ],
    faq: [
      { q: "¿Estos números ganarán la lotería?", a: "No, esto es puramente un generador de números aleatorios para diversión y no garantiza ninguna ganancia." },
      { q: "¿Obtengo números diferentes cada vez?", a: "Sí, aparece una nueva combinación aleatoria cada vez que haces clic en generar." },
      { q: "¿Cómo se elige el mensaje?", a: "Se vincula uno de varios mensajes divertidos preescritos según la suma de los 6 números generados. No tiene base estadística ni de adivinación." },
      { q: "¿Cuál es la diferencia entre los rangos 1-45 y 1-99?", a: "1-45 coincide con el rango habitual usado en muchos formatos de lotería, mientras que 1-99 es una buena opción si quieres ver una variedad más amplia de combinaciones numéricas." },
      { q: "¿Puede aparecer el mismo número dos veces entre los 6?", a: "No, los 6 números se seleccionan al azar sin duplicados, así que cada uno es único dentro de un mismo sorteo." },
    ],
    disclaimer: "Esta es una herramienta de números aleatorios solo para entretenimiento y no garantiza ningún resultado.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
