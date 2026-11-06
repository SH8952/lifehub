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
      "아침 루틴이나 일기 쓰기 전에 습관처럼 눌러보면 하루를 시작하는 짧은 리추얼로 활용할 수 있습니다.",
    ],
    faq: [
      { q: "다짐 문장은 어떤 원리로 선택되나요?", a: "준비된 20여 개의 1인칭 다짐 문장 중에서 완전히 무작위로 하나가 선택됩니다." },
      { q: "자기계발서의 명언을 가져온 것인가요?", a: "아니요, 특정 출처가 아닌 자체 제작한 다짐 문구들로 구성되어 있습니다." },
      { q: "같은 다짐이 반복해서 나올 수도 있나요?", a: "네, 완전 무작위 방식이라 같은 다짐이 연달아 나올 수도 있습니다. 마음에 드는 문장이 다시 나왔다면 오늘 특히 필요한 메시지일 수도 있습니다." },
      { q: "다짐 문장을 따로 저장하거나 공유할 수 있나요?", a: "현재는 화면에 표시된 문장을 직접 복사해 메모 앱이나 메시지로 공유하는 방식만 지원합니다." },
      { q: "부정적이거나 불편한 문장이 나올 수도 있나요?", a: "아니요, 모든 문장은 긍정적이고 힘이 되는 내용으로만 구성되어 있어 안심하고 사용하실 수 있습니다." },
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
      "Make it part of your morning routine or journaling habit — a quick ritual to start the day with intention.",
    ],
    faq: [
      { q: "How is the affirmation chosen?", a: "It's fully random, picked from a set of about 20 original first-person affirmations." },
      { q: "Are these quotes from self-help books?", a: "No, these are original affirmations we wrote, not sourced from any specific book or author." },
      { q: "Can the same affirmation appear twice in a row?", a: "Yes, since it's fully random, the same line can repeat. If a familiar one shows up again, maybe it's exactly what you need to hear today." },
      { q: "Can I save or share an affirmation?", a: "Right now you can copy the text shown on screen and paste it into a notes app or message — there's no built-in save or share button yet." },
      { q: "Could a negative or uncomfortable line show up?", a: "No, every line in the set is written to be positive and encouraging, so there's nothing to worry about." },
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
      "朝のルーティンや日記を書く前に押す習慣にすると、一日を意図的に始める小さな儀式として活用できます。",
    ],
    faq: [
      { q: "決意の文章はどのように選ばれますか？", a: "用意された20個ほどの一人称の決意文の中から完全にランダムに1つが選ばれます。" },
      { q: "自己啓発書の名言を持ってきたものですか？", a: "いいえ、特定の出典ではなく独自に作成した決意の文章で構成されています。" },
      { q: "同じ決意が続けて出ることもありますか？", a: "はい、完全ランダムなので同じ文章が続けて表示されることもあります。見覚えのある文章がまた出たなら、今日特に必要なメッセージかもしれません。" },
      { q: "決意の文章を保存したり共有したりできますか？", a: "現在は画面に表示された文章をコピーしてメモアプリやメッセージで共有する方法のみ対応しています。" },
      { q: "ネガティブな文章が出ることもありますか？", a: "いいえ、すべての文章は前向きで励みになる内容のみで構成されているため、安心してご利用いただけます。" },
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
      "Conviértelo en parte de tu rutina matutina o de escritura de diario: un pequeño ritual para empezar el día con intención.",
    ],
    faq: [
      { q: "¿Cómo se elige la afirmación?", a: "Es completamente aleatoria, elegida de un conjunto de unas 20 afirmaciones originales en primera persona." },
      { q: "¿Son citas de libros de autoayuda?", a: "No, son afirmaciones originales que escribimos, no provienen de ningún libro o autor específico." },
      { q: "¿Puede aparecer la misma afirmación dos veces seguidas?", a: "Sí, como es completamente aleatorio, la misma frase puede repetirse. Si aparece una que ya conoces, tal vez sea justo lo que necesitas escuchar hoy." },
      { q: "¿Puedo guardar o compartir una afirmación?", a: "Por ahora puedes copiar el texto mostrado en pantalla y pegarlo en una app de notas o mensaje; todavía no hay un botón integrado de guardar o compartir." },
      { q: "¿Podría aparecer una frase negativa o incómoda?", a: "No, todas las frases del conjunto están escritas para ser positivas y alentadoras, así que no hay nada de qué preocuparse." },
    ],
    disclaimer: "Estas frases son contenido original y no provienen de ningún libro o persona específica.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
