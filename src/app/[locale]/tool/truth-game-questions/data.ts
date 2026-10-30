export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  drawBtn: string;
  questionLabel: string;
  categoryLabel: string;
  levelLight: string;
  levelDeep: string;
  levelAll: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "진실게임 질문 룰렛",
    subtitle: "친구나 연인과 함께 즐기는 진실게임용 질문을 무작위로 뽑아드립니다.",
    drawBtn: "질문 뽑기",
    questionLabel: "오늘의 질문",
    categoryLabel: "난이도",
    levelLight: "가벼운 질문",
    levelDeep: "깊은 질문",
    levelAll: "전체",
    howTitle: "사용 방법",
    howSteps: [
      "원하는 난이도(가벼운 질문/깊은 질문/전체)를 선택합니다.",
      "\"질문 뽑기\" 버튼을 누릅니다.",
      "표시된 질문에 대해 돌아가면서 솔직하게 답해보세요.",
    ],
    faq: [
      { q: "질문 개수는 몇 개인가요?", a: "가벼운 질문과 깊은 질문을 합쳐 총 30개의 질문이 준비되어 있으며 무작위로 선택됩니다." },
      { q: "같은 질문이 반복될 수도 있나요?", a: "네, 무작위 추첨이므로 같은 질문이 다시 나올 수 있습니다. 다시 뽑아 새로운 질문을 받아보세요." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것이며 답변은 자유롭게 거부할 수 있습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Truth Game Question Roulette",
    subtitle: "Draw a random truth-game question to play with friends or a partner.",
    drawBtn: "Draw a Question",
    questionLabel: "Today's Question",
    categoryLabel: "Level",
    levelLight: "Light",
    levelDeep: "Deep",
    levelAll: "All",
    howTitle: "How to Use",
    howSteps: [
      "Choose a level (Light, Deep, or All).",
      "Click \"Draw a Question.\"",
      "Take turns answering the question honestly.",
    ],
    faq: [
      { q: "How many questions are there?", a: "A total of 30 questions, combining light and deep levels, are randomly selected from." },
      { q: "Can the same question repeat?", a: "Yes, since it's a random draw, the same question can appear again. Draw again for a new one." },
    ],
    disclaimer: "This content is for entertainment, and you're always free to decline answering.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "本音ゲーム質問ルーレット",
    subtitle: "友達や恋人と楽しむ本音ゲーム用の質問をランダムに引きます。",
    drawBtn: "質問を引く",
    questionLabel: "今日の質問",
    categoryLabel: "レベル",
    levelLight: "ライト",
    levelDeep: "ディープ",
    levelAll: "すべて",
    howTitle: "使用方法",
    howSteps: [
      "希望のレベル（ライト/ディープ/すべて）を選択します。",
      "「質問を引く」ボタンを押します。",
      "表示された質問に順番に正直に答えてみましょう。",
    ],
    faq: [
      { q: "質問の数はいくつですか？", a: "ライトとディープを合わせて合計30個の質問が用意されており、ランダムに選ばれます。" },
      { q: "同じ質問が繰り返されることもありますか？", a: "はい、ランダム抽選なので同じ質問が再び出ることもあります。もう一度引いて新しい質問を受け取ってみてください。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、答えを拒否する自由があります。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Ruleta de Preguntas del Juego de la Verdad",
    subtitle: "Saca una pregunta al azar del juego de la verdad para jugar con amigos o pareja.",
    drawBtn: "Sacar una Pregunta",
    questionLabel: "Pregunta de Hoy",
    categoryLabel: "Nivel",
    levelLight: "Ligero",
    levelDeep: "Profundo",
    levelAll: "Todos",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige un nivel (Ligero, Profundo o Todos).",
      "Haz clic en \"Sacar una Pregunta.\"",
      "Tomen turnos para responder la pregunta con honestidad.",
    ],
    faq: [
      { q: "¿Cuántas preguntas hay?", a: "Un total de 30 preguntas, combinando niveles ligero y profundo, se eligen al azar." },
      { q: "¿Puede repetirse la misma pregunta?", a: "Sí, como es un sorteo aleatorio, la misma pregunta puede aparecer de nuevo. Saca otra para una nueva." },
    ],
    disclaimer: "Este contenido es para entretenimiento, y siempre eres libre de no responder.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
