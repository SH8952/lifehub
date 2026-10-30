export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  spinBtn: string;
  themeLabel: string;
  reasonLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "여행지 추천 룰렛",
    subtitle: "룰렛을 돌려 지금 떠나기 좋은 여행 분위기와 테마를 추천받아 보세요.",
    spinBtn: "룰렛 돌리기",
    themeLabel: "추천 여행 테마",
    reasonLabel: "추천 이유",
    howTitle: "사용 방법",
    howSteps: [
      "\"룰렛 돌리기\" 버튼을 누릅니다.",
      "15가지 여행 테마 중 하나가 무작위로 선택되어 표시됩니다.",
      "추천받은 테마에 어울리는 구체적인 여행지를 직접 검색해보세요.",
    ],
    faq: [
      { q: "특정 지역이나 국가를 추천해주나요?", a: "아니요, 특정 장소가 아닌 여행의 분위기와 테마를 추천합니다. 추천받은 테마로 원하는 지역을 직접 검색해보세요." },
      { q: "같은 결과가 반복되나요?", a: "무작위 선택이므로 같은 결과가 다시 나올 수도 있습니다. 다시 돌려 새로운 테마를 받아보세요." },
    ],
    disclaimer: "이 도구는 특정 지역을 추천하지 않으며 여행 테마만 재미로 제안합니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Travel Mood Roulette",
    subtitle: "Spin the roulette to get a travel mood and theme recommendation for your next trip.",
    spinBtn: "Spin the Roulette",
    themeLabel: "Recommended Travel Theme",
    reasonLabel: "Why This Fits",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Spin the Roulette.\"",
      "One of 15 travel themes is randomly selected and shown.",
      "Search for a specific destination that fits the recommended theme.",
    ],
    faq: [
      { q: "Does it recommend specific regions or countries?", a: "No, it recommends a travel mood and theme rather than a specific place. Use the theme to search for a destination you like." },
      { q: "Can the same result repeat?", a: "Since it's random, the same result can appear again. Spin again for a new theme." },
    ],
    disclaimer: "This tool does not recommend specific regions and only suggests a travel theme for fun.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "旅行先ムードルーレット",
    subtitle: "ルーレットを回して今行くのに良い旅行の雰囲気とテーマのおすすめを受け取りましょう。",
    spinBtn: "ルーレットを回す",
    themeLabel: "おすすめ旅行テーマ",
    reasonLabel: "おすすめの理由",
    howTitle: "使用方法",
    howSteps: [
      "「ルーレットを回す」ボタンを押します。",
      "15種類の旅行テーマの中から1つがランダムに選ばれて表示されます。",
      "おすすめされたテーマに合う具体的な旅行先を自分で検索してみてください。",
    ],
    faq: [
      { q: "特定の地域や国をおすすめしてくれますか？", a: "いいえ、特定の場所ではなく旅行の雰囲気とテーマをおすすめします。おすすめされたテーマで希望の地域を自分で検索してみてください。" },
      { q: "同じ結果が繰り返されますか？", a: "ランダム選択なので同じ結果が再び出ることもあります。もう一度回して新しいテーマを受け取ってみてください。" },
    ],
    disclaimer: "このツールは特定の地域を推薦せず、旅行テーマのみを楽しく提案します。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Ruleta de Ambiente de Viaje",
    subtitle: "Gira la ruleta para obtener una recomendación de ambiente y tema de viaje para tu próxima escapada.",
    spinBtn: "Girar la Ruleta",
    themeLabel: "Tema de Viaje Recomendado",
    reasonLabel: "Por Qué Encaja",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Girar la Ruleta.\"",
      "Se selecciona y muestra al azar uno de 15 temas de viaje.",
      "Busca un destino específico que encaje con el tema recomendado.",
    ],
    faq: [
      { q: "¿Recomienda regiones o países específicos?", a: "No, recomienda un ambiente y tema de viaje en lugar de un lugar específico. Usa el tema para buscar un destino que te guste." },
      { q: "¿Puede repetirse el mismo resultado?", a: "Como es aleatorio, el mismo resultado puede aparecer de nuevo. Gira otra vez para un nuevo tema." },
    ],
    disclaimer: "Esta herramienta no recomienda regiones específicas y solo sugiere un tema de viaje por diversión.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
