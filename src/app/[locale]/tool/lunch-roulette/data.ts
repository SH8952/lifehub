export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  lunch: string;
  generate: string;
  result: string;
  again: string;
  categories: string;
  selectCategory: string;
  allMenu: string;
  limitations: string;
  whyRoulette: string;
  explanation: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "점심 메뉴 룰렛",
    subtitle: "무엇을 먹을지 고민일 때! 룰렛을 돌려 메뉴를 정해보세요.",
    lunch: "점심",
    generate: "메뉴 뽑기",
    result: "今天 점심 메뉴는",
    again: "다시 뽑기",
    categories: "카테고리",
    selectCategory: "전체 메뉴",
    allMenu: "전체",
    limitations: "선정된 메뉴는 참고용이며, 실제 영업 여부와 메뉴는 다를 수 있습니다.",
    whyRoulette: "왜 점심 메뉴 룰렛이 필요한가요?",
    explanation:
      "매일 똑같은 점심만 먹지 않았나요? 점심 메뉴 룰렛이 고민을 해결해드립니다.\n\n10개 이상의 카테고리에서 랜덤으로 메뉴를 추천해드리니, 새로운 조합을 발견할 수 있습니다.\n\n친구들과 함께 '오늘 점심 뭐 먹지?' 고민을 공유하고 함께 룰렛을 돌려보세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      { q: "다른 카테고리도 추가될 수 있나요?", a: "네, 인기 카테고리를 수시로 업데이트하고 있습니다. 댓글로 원하는 카테고리를 알려주세요!" },
      { q: "룰렛은 몇 번이나 돌릴 수 있나요?", a: "무제한으로 돌릴 수 있습니다. 마음에 드는 메뉴가 나올 때까지 도전해보세요." },
      { q: "회식을 위한 메뉴 추천도 가능한가요?", a: "기본 메뉴 외에 '회식' category를 추가로 준비 중입니다." },
    ],
  },
  en: {
    title: "Lunch Menu Roulette",
    subtitle: "Can't decide what to eat for lunch? Let the roulette decide for you!",
    lunch: "Lunch",
    generate: "Pick Menu",
    result: "Today's lunch menu is",
    again: "Pick Again",
    categories: "Categories",
    selectCategory: "All Menus",
    allMenu: "All",
    limitations: "Selected menus are for reference only. Actual availability and menus may vary.",
    whyRoulette: "Why do you need a lunch menu roulette?",
    explanation:
      "Tired of eating the same lunch every day? The lunch menu roulette solves your dilemma.\n\nWe recommend random menus from 10+ categories, so you can discover new combinations.\n\nShare the 'what should we eat for lunch?' dilemma with friends and spin the roulette together.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      { q: "Can more categories be added?", a: "Yes, we regularly update popular categories. Let us know what category you'd like to see!" },
      { q: "How many times can I spin the roulette?", a: "Unlimited spins! Keep trying until you find a menu you like." },
      { q: "Can this recommend menus for group dining?", a: "We're preparing a 'group dining' category in addition to basic menus." },
    ],
  },
  ja: {
    title: "ランチメニュールーレット",
    subtitle: "何を食べていいか分からないとき、ルーレットでメニューを決めてみましょう！",
    lunch: "ランチ",
    generate: "メニューを選ぶ",
    result: "今日のランチメニューは",
    again: "もう一度",
    categories: "カテゴリ",
    selectCategory: "全メニュー",
    allMenu: "全て",
    limitations: "選択されたメニューは参考用です。実際の営業状況やメニューと異なる場合があります。",
    whyRoulette: "なぜランチメニュールーレットが必要ですか？",
    explanation:
      "毎日同じランチばかり食べていませんか？ランチメニュールーレットが悩みの解決をお手伝いします。\n\n10以上のカテゴリからランダムにメニューをお勧めします。新しい発見ができるかもしれません。\n\n友達と「今日のランチ何をしよう？」の悩みを共有し、一緒にルーレットを回してみましょう。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      { q: "別のカテゴリも追加されますか？", a: "はい、人気カテゴリを更新しています。ご希望のカテゴリがあればお知らせください！" },
      { q: "ルーレットは何回でも回せますか？", a: "はい、無制限に回せます。気に入るメニューが出るまでチャレンジしてください。" },
      { q: "会食のメニュー推薦もできますか？", a: "基本メニューに加えて「会食」カテゴリを準備中です。" },
    ],
  },
  es: {
    title: "Ruleta de Menú de Almuerzo",
    subtitle: "¿No sabes qué almorzar? ¡Deja que la ruleta decida por ti!",
    lunch: "Almuerzo",
    generate: "Elegir Menú",
    result: "El menú de hoy es",
    again: "Elegir de Nuevo",
    categories: "Categorías",
    selectCategory: "Todos los Menús",
    allMenu: "Todos",
    limitations: "Los menús seleccionados son solo de referencia. La disponibilidad y menús reales pueden variar.",
    whyRoulette: "¿Por qué necesitas una ruleta de menú de almuerzo?",
    explanation:
      "¿Cansado de comer lo mismo todos los días? ¡La ruleta de menú de almuerzo resuelve tu dilema!\n\nRecomendamos menús aleatorios de 10+ categorías para que descubras nuevas combinaciones.\n\nComparte la duda de '¿qué almorzamos?' con amigos y gira la ruleta juntos.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    faq: [
      { q: "¿Se añadirán más categorías?", a: "¡Sí! Actualizamos categorías populares regularmente. ¡Dinos qué categoría te gustaría ver!" },
      { q: "¿Cuántas veces puedo girar la ruleta?", a: "¡Ilimitado! Sigue intentando hasta encontrar un menú que te guste." },
      { q: "¿Puede recomendar menús para comidas grupales?", a: "Estamos preparando una categoría de 'comidas grupales' además de los menús básicos." },
    ],
  },
};
