export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  drawBtn: string;
  optionALabel: string;
  optionBLabel: string;
  vsLabel: string;
  selectedLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이럴 때 당신의 선택은 (밸런스 게임)",
    subtitle: "둘 중 하나만 선택해야 하는 밸런스 게임 질문을 무작위로 뽑아드립니다.",
    drawBtn: "질문 뽑기",
    optionALabel: "A",
    optionBLabel: "B",
    vsLabel: "VS",
    selectedLabel: "당신의 선택",
    howTitle: "사용 방법",
    howSteps: [
      "\"질문 뽑기\" 버튼을 누릅니다.",
      "A와 B 중 더 마음에 드는 선택지를 고릅니다.",
      "친구나 가족과 함께 서로의 선택을 비교해보며 이야기 나눠보세요.",
      "여러 명이 함께 할 때는 각자 먼저 선택을 말한 뒤 공개하면 더 재미있게 즐길 수 있습니다.",
    ],
    faq: [
      { q: "정답이 있는 질문인가요?", a: "아니요, 이 게임에는 정답이 없으며 각자의 가치관과 취향을 재미로 알아보는 용도입니다." },
      { q: "질문은 몇 개나 준비되어 있나요?", a: "20개의 질문이 준비되어 있으며 \"질문 뽑기\"를 누를 때마다 무작위로 선택됩니다." },
      { q: "질문이 반복해서 나올 수도 있나요?", a: "네, 완전 무작위 방식이라 적은 횟수 안에서는 같은 질문이 다시 나올 수 있습니다." },
      { q: "파티 게임이나 아이스브레이킹 용도로 써도 되나요?", a: "네, 모임이나 첫 만남 자리에서 가볍게 대화를 시작하는 아이스브레이커로 특히 잘 어울립니다." },
      { q: "민감하거나 불쾌한 질문이 나올 수도 있나요?", a: "아니요, 모든 질문은 누구나 가볍게 즐길 수 있는 무난한 주제로만 구성되어 있습니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 정답이나 심리 분석을 제공하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Would You Rather",
    subtitle: "Draw a random 'would you rather' question where you must pick one of two options.",
    drawBtn: "Draw a Question",
    optionALabel: "A",
    optionBLabel: "B",
    vsLabel: "VS",
    selectedLabel: "Your Choice",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Draw a Question.\"",
      "Choose the option (A or B) you prefer.",
      "Compare your choice with friends or family and talk about why.",
      "Playing with a group? Have everyone say their pick out loud before revealing, for extra fun.",
    ],
    faq: [
      { q: "Is there a correct answer?", a: "No, there's no right answer — it's just a fun way to explore your own preferences and values." },
      { q: "How many questions are there?", a: "20 questions are prepared, and one is randomly picked each time you click \"Draw a Question.\"" },
      { q: "Can the same question come up twice?", a: "Yes, since it's fully random, the same question can reappear within a short session." },
      { q: "Can I use this as a party game or icebreaker?", a: "Yes, it works especially well as a light icebreaker for gatherings or first meetings." },
      { q: "Could a sensitive or uncomfortable question come up?", a: "No, every question is written to be light and appropriate for a general audience." },
    ],
    disclaimer: "This content is for entertainment purposes and does not provide correct answers or psychological analysis.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "こんな時あなたの選択は（究極の選択）",
    subtitle: "二つのうち一つだけを選ばなければならないバランスゲームの質問をランダムに引きます。",
    drawBtn: "質問を引く",
    optionALabel: "A",
    optionBLabel: "B",
    vsLabel: "VS",
    selectedLabel: "あなたの選択",
    howTitle: "使用方法",
    howSteps: [
      "「質問を引く」ボタンを押します。",
      "AとBのうちより気に入った選択肢を選びます。",
      "友達や家族と一緒にお互いの選択を比較しながら話してみましょう。",
      "複数人で遊ぶ場合は、それぞれ先に選択を言ってから公開すると、より盛り上がります。",
    ],
    faq: [
      { q: "正解がある質問ですか？", a: "いいえ、このゲームに正解はなく、それぞれの価値観や好みを楽しく知るためのものです。" },
      { q: "質問はいくつ用意されていますか？", a: "20個の質問が用意されており、「質問を引く」を押すたびにランダムに選ばれます。" },
      { q: "質問が繰り返し出ることもありますか？", a: "はい、完全ランダムなので短い回数の中で同じ質問が再び出ることもあります。" },
      { q: "パーティーゲームやアイスブレイクに使ってもいいですか？", a: "はい、集まりや初対面の場で気軽に会話を始めるアイスブレイクとして特に向いています。" },
      { q: "センシティブだったり不快な質問が出ることもありますか？", a: "いいえ、すべての質問は誰でも気軽に楽しめる無難なテーマのみで構成されています。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、正解や心理分析を提供するものではありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "¿Qué Preferirías?",
    subtitle: "Saca una pregunta aleatoria de '¿qué preferirías?' donde debes elegir una de dos opciones.",
    drawBtn: "Sacar una Pregunta",
    optionALabel: "A",
    optionBLabel: "B",
    vsLabel: "VS",
    selectedLabel: "Tu Elección",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Sacar una Pregunta.\"",
      "Elige la opción (A o B) que prefieras.",
      "Compara tu elección con amigos o familia y habla sobre por qué.",
      "¿Jugando en grupo? Que cada uno diga su elección en voz alta antes de revelarla, para más diversión.",
    ],
    faq: [
      { q: "¿Hay una respuesta correcta?", a: "No, no hay una respuesta correcta; es solo una forma divertida de explorar tus propias preferencias y valores." },
      { q: "¿Cuántas preguntas hay?", a: "Hay 20 preguntas preparadas, y una se elige al azar cada vez que haces clic en \"Sacar una Pregunta.\"" },
      { q: "¿Puede repetirse la misma pregunta?", a: "Sí, al ser completamente aleatorio, la misma pregunta puede volver a aparecer en poco tiempo." },
      { q: "¿Puedo usarlo como juego de fiesta o para romper el hielo?", a: "Sí, funciona especialmente bien como una forma ligera de romper el hielo en reuniones o primeros encuentros." },
      { q: "¿Podría salir una pregunta sensible o incómoda?", a: "No, todas las preguntas están pensadas para ser ligeras y apropiadas para cualquier público." },
    ],
    disclaimer: "Este contenido es para entretenimiento y no ofrece respuestas correctas ni análisis psicológico.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
