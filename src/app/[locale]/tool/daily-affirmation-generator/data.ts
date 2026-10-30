export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  generateBtn: string;
  affirmationLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "오늘의 다짐 생성기",
    subtitle: "버튼을 누르면 오늘 나에게 힘이 되는 다짐 문장을 하나 보여드립니다.",
    generateBtn: "다짐 받기",
    affirmationLabel: "오늘의 다짐",
    howTitle: "사용 방법",
    howSteps: [
      "\"다짐 받기\" 버튼을 누릅니다.",
      "1인칭 다짐 문장 중 하나가 무작위로 표시됩니다.",
      "마음에 드는 다짐을 오늘 하루의 모토로 삼아보세요.",
    ],
    faq: [
      { q: "다짐 문장은 어떤 원리로 선택되나요?", a: "준비된 20여 개의 1인칭 다짐 문장 중에서 완전히 무작위로 하나가 선택됩니다." },
      { q: "자기계발서의 명언을 가져온 것인가요?", a: "아니요, 특정 출처가 아닌 자체 제작한 다짐 문구들로 구성되어 있습니다." },
    ],
    disclaimer: "이 문장들은 자체 제작된 창작 문구로 특정 출처나 인물의 발언이 아닙니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Daily Affirmation Generator",
    subtitle: "Click the button to get a personal affirmation to strengthen your day.",
    generateBtn: "Get an Affirmation",
    affirmationLabel: "Today's Affirmation",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Get an Affirmation.\"",
      "One first-person affirmation is randomly shown.",
      "Adopt the one you like as today's personal motto.",
    ],
    faq: [
      { q: "How is the affirmation chosen?", a: "It's fully random, picked from a set of about 20 original first-person affirmations." },
      { q: "Are these quotes from self-help books?", a: "No, these are original affirmations we wrote, not sourced from any specific book or author." },
    ],
    disclaimer: "These lines are original content and are not sourced from any specific book or person.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "今日の決意生成ツール",
    subtitle: "ボタンを押すと今日の自分を励ます決意の言葉を一つお届けします。",
    generateBtn: "決意を受け取る",
    affirmationLabel: "今日の決意",
    howTitle: "使用方法",
    howSteps: [
      "「決意を受け取る」ボタンを押します。",
      "一人称の決意文の中から1つがランダムに表示されます。",
      "気に入った決意を今日のモットーにしてみましょう。",
    ],
    faq: [
      { q: "決意の文章はどのように選ばれますか？", a: "用意された20個ほどの一人称の決意文の中から完全にランダムに1つが選ばれます。" },
      { q: "自己啓発書の名言を持ってきたものですか？", a: "いいえ、特定の出典ではなく独自に作成した決意の文章で構成されています。" },
    ],
    disclaimer: "これらの文章は独自に作成された創作文であり、特定の出典や人物の発言ではありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Afirmaciones Diarias",
    subtitle: "Haz clic en el botón para obtener una afirmación personal que fortalezca tu día.",
    generateBtn: "Obtener una Afirmación",
    affirmationLabel: "Afirmación de Hoy",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Obtener una Afirmación.\"",
      "Se muestra al azar una afirmación en primera persona.",
      "Adopta la que te guste como tu lema personal de hoy.",
    ],
    faq: [
      { q: "¿Cómo se elige la afirmación?", a: "Es completamente aleatoria, elegida de un conjunto de unas 20 afirmaciones originales en primera persona." },
      { q: "¿Son citas de libros de autoayuda?", a: "No, son afirmaciones originales que escribimos, no provienen de ningún libro o autor específico." },
    ],
    disclaimer: "Estas frases son contenido original y no provienen de ningún libro o persona específica.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
