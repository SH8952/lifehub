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
    title: "영화 추천 룰렛",
    subtitle: "룰렛을 돌려 오늘 보기 좋은 영화 장르와 분위기를 추천받아 보세요.",
    spinBtn: "룰렛 돌리기",
    genreLabel: "추천 장르",
    reasonLabel: "추천 이유",
    howTitle: "사용 방법",
    howSteps: [
      "\"룰렛 돌리기\" 버튼을 누릅니다.",
      "15가지 장르·분위기 조합 중 하나가 무작위로 선택되어 표시됩니다.",
      "결과가 마음에 들지 않으면 다시 눌러 새로운 추천을 받을 수 있습니다.",
    ],
    faq: [
      { q: "특정 영화 제목을 추천해주나요?", a: "아니요, 저작권 문제를 피하기 위해 특정 영화 제목이 아닌 장르와 분위기 조합을 추천합니다. 추천받은 장르로 직접 스트리밍 서비스에서 검색해보세요." },
      { q: "같은 결과가 반복되나요?", a: "무작위 선택이므로 같은 결과가 다시 나올 수도 있습니다. 다시 돌려 새로운 조합을 받아보세요." },
    ],
    disclaimer: "이 도구는 특정 영화를 추천하지 않으며 장르와 분위기만 재미로 제안합니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Movie Genre Roulette",
    subtitle: "Spin the roulette to get a movie genre and mood recommendation for tonight.",
    spinBtn: "Spin the Roulette",
    genreLabel: "Recommended Genre",
    reasonLabel: "Why This Fits",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Spin the Roulette.\"",
      "One of 15 genre-and-mood combinations is randomly selected and shown.",
      "If you don't like the result, click again for a new recommendation.",
    ],
    faq: [
      { q: "Does it recommend specific movie titles?", a: "No, to avoid copyright issues, it recommends genre-and-mood combinations rather than specific titles. Use the recommended genre to search your favorite streaming service." },
      { q: "Can the same result repeat?", a: "Since it's random, the same result can appear again. Spin again for a new combination." },
    ],
    disclaimer: "This tool does not recommend specific movies and only suggests a genre and mood for fun.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "映画ジャンルルーレット",
    subtitle: "ルーレットを回して今夜見るのに良い映画のジャンルと雰囲気のおすすめを受け取りましょう。",
    spinBtn: "ルーレットを回す",
    genreLabel: "おすすめジャンル",
    reasonLabel: "おすすめの理由",
    howTitle: "使用方法",
    howSteps: [
      "「ルーレットを回す」ボタンを押します。",
      "15種類のジャンル・雰囲気の組み合わせの中から1つがランダムに選ばれて表示されます。",
      "結果が気に入らない場合は再度押して新しいおすすめを受け取れます。",
    ],
    faq: [
      { q: "特定の映画タイトルをおすすめしてくれますか？", a: "いいえ、著作権問題を避けるため特定の映画タイトルではなくジャンルと雰囲気の組み合わせをおすすめします。おすすめされたジャンルでお好みのストリーミングサービスを検索してみてください。" },
      { q: "同じ結果が繰り返されますか？", a: "ランダム選択なので同じ結果が再び出ることもあります。もう一度回して新しい組み合わせを受け取ってみてください。" },
    ],
    disclaimer: "このツールは特定の映画を推薦せず、ジャンルと雰囲気のみを楽しく提案します。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Ruleta de Género de Películas",
    subtitle: "Gira la ruleta para obtener una recomendación de género y ambiente de película para esta noche.",
    spinBtn: "Girar la Ruleta",
    genreLabel: "Género Recomendado",
    reasonLabel: "Por Qué Encaja",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Girar la Ruleta.\"",
      "Se selecciona y muestra al azar una de 15 combinaciones de género y ambiente.",
      "Si no te gusta el resultado, haz clic de nuevo para una nueva recomendación.",
    ],
    faq: [
      { q: "¿Recomienda títulos de películas específicos?", a: "No, para evitar problemas de derechos de autor, recomienda combinaciones de género y ambiente en lugar de títulos específicos. Usa el género recomendado para buscar en tu servicio de streaming favorito." },
      { q: "¿Puede repetirse el mismo resultado?", a: "Como es aleatorio, el mismo resultado puede aparecer de nuevo. Gira otra vez para una nueva combinación." },
    ],
    disclaimer: "Esta herramienta no recomienda películas específicas y solo sugiere un género y ambiente por diversión.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
