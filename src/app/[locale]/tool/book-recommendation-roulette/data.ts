export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  spinBtn: string;
  genreLabel: string;
  reasonLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "책 추천 룰렛",
    subtitle: "룰렛을 돌려 지금 읽기 좋은 책 장르와 분위기를 추천받아 보세요.",
    spinBtn: "룰렛 돌리기",
    genreLabel: "추천 장르",
    reasonLabel: "추천 이유",
    howTitle: "사용 방법",
    howSteps: [
      "\"룰렛 돌리기\" 버튼을 누릅니다.",
      "15가지 장르·분위기 조합 중 하나가 무작위로 선택되어 표시됩니다.",
      "추천받은 장르를 바탕으로 서점이나 도서관에서 책을 찾아보세요.",
    ],
    faq: [
      { q: "특정 책 제목을 추천해주나요?", a: "아니요, 저작권 문제를 피하기 위해 특정 책 제목이 아닌 장르와 분위기 조합을 추천합니다." },
      { q: "같은 결과가 반복되나요?", a: "무작위 선택이므로 같은 결과가 다시 나올 수도 있습니다. 다시 돌려 새로운 조합을 받아보세요." },
    ],
    disclaimer: "이 도구는 특정 책을 추천하지 않으며 장르와 분위기만 재미로 제안합니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Book Genre Roulette",
    subtitle: "Spin the roulette to get a book genre and mood recommendation for right now.",
    spinBtn: "Spin the Roulette",
    genreLabel: "Recommended Genre",
    reasonLabel: "Why This Fits",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Spin the Roulette.\"",
      "One of 15 genre-and-mood combinations is randomly selected and shown.",
      "Use the recommended genre to browse a bookstore or library.",
    ],
    faq: [
      { q: "Does it recommend specific book titles?", a: "No, to avoid copyright issues, it recommends genre-and-mood combinations rather than specific titles." },
      { q: "Can the same result repeat?", a: "Since it's random, the same result can appear again. Spin again for a new combination." },
    ],
    disclaimer: "This tool does not recommend specific books and only suggests a genre and mood for fun.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "本ジャンルルーレット",
    subtitle: "ルーレットを回して今読むのに良い本のジャンルと雰囲気のおすすめを受け取りましょう。",
    spinBtn: "ルーレットを回す",
    genreLabel: "おすすめジャンル",
    reasonLabel: "おすすめの理由",
    howTitle: "使用方法",
    howSteps: [
      "「ルーレットを回す」ボタンを押します。",
      "15種類のジャンル・雰囲気の組み合わせの中から1つがランダムに選ばれて表示されます。",
      "おすすめされたジャンルを基に書店や図書館で本を探してみてください。",
    ],
    faq: [
      { q: "特定の本のタイトルをおすすめしてくれますか？", a: "いいえ、著作権問題を避けるため特定の本のタイトルではなくジャンルと雰囲気の組み合わせをおすすめします。" },
      { q: "同じ結果が繰り返されますか？", a: "ランダム選択なので同じ結果が再び出ることもあります。もう一度回して新しい組み合わせを受け取ってみてください。" },
    ],
    disclaimer: "このツールは特定の本を推薦せず、ジャンルと雰囲気のみを楽しく提案します。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Ruleta de Género de Libros",
    subtitle: "Gira la ruleta para obtener una recomendación de género y ambiente de libro para ahora.",
    spinBtn: "Girar la Ruleta",
    genreLabel: "Género Recomendado",
    reasonLabel: "Por Qué Encaja",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Girar la Ruleta.\"",
      "Se selecciona y muestra al azar una de 15 combinaciones de género y ambiente.",
      "Usa el género recomendado para explorar una librería o biblioteca.",
    ],
    faq: [
      { q: "¿Recomienda títulos de libros específicos?", a: "No, para evitar problemas de derechos de autor, recomienda combinaciones de género y ambiente en lugar de títulos específicos." },
      { q: "¿Puede repetirse el mismo resultado?", a: "Como es aleatorio, el mismo resultado puede aparecer de nuevo. Gira otra vez para una nueva combinación." },
    ],
    disclaimer: "Esta herramienta no recomienda libros específicos y solo sugiere un género y ambiente por diversión.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
