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
      "추천받은 장르·분위기를 서점 베스트셀러 코너나 도서관 사서 추천과 함께 활용하면 더 구체적인 책을 찾기 쉽습니다.",
    ],
    faq: [
      { q: "특정 책 제목을 추천해주나요?", a: "아니요, 저작권 문제를 피하기 위해 특정 책 제목이 아닌 장르와 분위기 조합을 추천합니다." },
      { q: "같은 결과가 반복되나요?", a: "무작위 선택이므로 같은 결과가 다시 나올 수도 있습니다. 다시 돌려 새로운 조합을 받아보세요." },
      { q: "총 몇 가지 조합이 나올 수 있나요?", a: "15가지 장르·분위기 조합이 준비되어 있어, 계속 돌리다 보면 다양한 독서 방향을 접하실 수 있습니다." },
      { q: "장르를 직접 선택할 수는 없나요?", a: "이 도구는 의도적으로 무작위 추천 방식으로 설계되어, 평소 고르지 않던 장르를 우연히 접할 수 있도록 돕습니다. 특정 장르를 바로 찾고 싶다면 서점 카테고리를 이용하시는 것이 더 빠릅니다." },
      { q: "독서 슬럼프에 빠졌을 때 도움이 되나요?", a: "네, 평소와 다른 장르·분위기를 접하게 되므로 읽을 책을 고르기 막막할 때 새로운 시작점을 찾는 데 도움이 될 수 있습니다." },
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
      "Combine the recommended genre and mood with a bookstore's bestseller section or a librarian's picks to find a specific title more easily.",
    ],
    faq: [
      { q: "Does it recommend specific book titles?", a: "No, to avoid copyright issues, it recommends genre-and-mood combinations rather than specific titles." },
      { q: "Can the same result repeat?", a: "Since it's random, the same result can appear again. Spin again for a new combination." },
      { q: "How many total combinations are possible?", a: "There are 15 genre-and-mood combinations in the pool, so spinning repeatedly introduces you to a variety of reading directions." },
      { q: "Can I pick a genre directly instead of random?", a: "This tool is intentionally designed around random discovery, helping you stumble onto genres you might not normally choose. If you want a specific genre right away, browsing a bookstore's category pages is faster." },
      { q: "Does this help with a reading slump?", a: "Yes, since it introduces genres and moods you might not normally consider, it can give you a fresh starting point when you're stuck deciding what to read next." },
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
      "おすすめされたジャンル・雰囲気を書店のベストセラーコーナーや図書館司書のおすすめと組み合わせると、具体的な本を見つけやすくなります。",
    ],
    faq: [
      { q: "特定の本のタイトルをおすすめしてくれますか？", a: "いいえ、著作権問題を避けるため特定の本のタイトルではなくジャンルと雰囲気の組み合わせをおすすめします。" },
      { q: "同じ結果が繰り返されますか？", a: "ランダム選択なので同じ結果が再び出ることもあります。もう一度回して新しい組み合わせを受け取ってみてください。" },
      { q: "全部で何通りの組み合わせがありますか？", a: "15種類のジャンル・雰囲気の組み合わせが用意されており、何度も回すことで様々な読書の方向性に出会えます。" },
      { q: "ジャンルを直接選ぶことはできませんか？", a: "このツールは意図的にランダム推薦方式で設計されており、普段選ばないジャンルに偶然出会えるようにしています。特定のジャンルをすぐ探したい場合は、書店のカテゴリを利用する方が早いです。" },
      { q: "読書スランプに陥ったときに役立ちますか？", a: "はい、普段と違うジャンル・雰囲気に出会えるため、何を読むか迷っているときに新しい出発点を見つける助けになります。" },
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
      "Combina el género y ambiente recomendados con la sección de más vendidos de una librería o las recomendaciones de un bibliotecario para encontrar un título específico más fácilmente.",
    ],
    faq: [
      { q: "¿Recomienda títulos de libros específicos?", a: "No, para evitar problemas de derechos de autor, recomienda combinaciones de género y ambiente en lugar de títulos específicos." },
      { q: "¿Puede repetirse el mismo resultado?", a: "Como es aleatorio, el mismo resultado puede aparecer de nuevo. Gira otra vez para una nueva combinación." },
      { q: "¿Cuántas combinaciones totales son posibles?", a: "Hay 15 combinaciones de género y ambiente en el conjunto, así que girar repetidamente te presenta una variedad de direcciones de lectura." },
      { q: "¿Puedo elegir un género directamente en lugar de aleatorio?", a: "Esta herramienta está diseñada intencionalmente para el descubrimiento aleatorio, ayudándote a encontrar géneros que normalmente no elegirías. Si quieres un género específico de inmediato, explorar las categorías de una librería es más rápido." },
      { q: "¿Ayuda con una crisis lectora?", a: "Sí, como introduce géneros y ambientes que normalmente no considerarías, puede darte un nuevo punto de partida cuando no sabes qué leer a continuación." },
    ],
    disclaimer: "Esta herramienta no recomienda libros específicos y solo sugiere un género y ambiente por diversión.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
