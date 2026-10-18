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
  spinning: string;
}

export interface CategoryLabel {
  key: string;
  label: string;
}

// Menu data structure: Record<Locale, Record<category_key, menu_items[]>>
export const menuData: Record<Locale, Record<string, string[]>> = {
  ko: {
    Korean: ["김치찌개", "된장찌개", "비빔밥", "제육볶음", "한우구이", "육개장", "순두부찌개", "부대찌개", "국수", "냉면", "칼국수", "만두", "전골"],
    Chinese: ["짜장면", "짬뽕", "탕수육", "유린기", "마라탕", "마라샹궈", "볶음밥", "군만두", "깐풍기", "양장피", "낙지볶음"],
    Japanese: ["라멘", "우동", "돈카츠", "초밥", "돈부리", "소바", "규동", "야키니쿠", "카레라이스", "덴푸라"],
    Western: ["파스타", "피자", "버거", "샐러드", "스테이크", "치킨", "샌드위치", "리조또", "그라탕", "오믈렛"],
    Vietnamese: ["쌀국수(포)", "반미", "분짜", "반세오", "월남쌈", "분보후에"],
    Thai: ["팟타이", "똠얌꿍", "그린커리", "쏨땀", "카오팟", "마사만커리"],
    Mexican: ["타코", "부리또", "엔칠라다", "나초", "케사디아", "파히타"],
    Indonesian: ["나시고렝", "미고렝", "사테", "가도가도", "른당", "바쏘"],
    Dessert: ["케이크", "머핀", "브라우니", "마카롱", "쿠키", "타르트"],
    Drink: ["주스", "스무디", "라떼", "아메리카노", "녹차", "얼그레이"],
    FastFood: ["맥도날드", "KFC", "피자헛", "도미노피자", "버거킹", "스타벅스", "맘스터치", "노브랜드버거"],
    Chicken: ["후라이드치킨", "양념치킨", "간장치킨", "반반치킨", "파닭", "순살치킨"],
  },
  en: {
    Korean: ["Kimchi Stew", "Kimchi Fried Rice", "Bibimbap", "Spicy Pork Stir-fry", "Korean Beef BBQ", "Seaweed Soup", "Soft Tofu Stew", "Army Base Stew", "Noodles", "Cold Noodles", "Hand-cut Noodles", "Dumplings", "Hot Pot"],
    Chinese: ["Jajangmyeon (Black Bean Noodles)", "Jjamppong (Spicy Seafood Noodles)", "Tangsuyuk (Sweet and Sour Pork)", "Yukgeori", "Mala Tang", "Mala Xiangguo", "Fried Rice", "Fried Dumplings", "Kkanpunggi (Crispy Pork)", "Yangjangpi", "Spicy Octopus Stir-fry"],
    Japanese: ["Ramen", "Udon", "Tonkatsu (Pork Cutlet)", "Sushi", "Donburi (Rice Bowl)", "Soba", "Gyudon (Beef Bowl)", "Yakiniku (BBQ)", "Japanese Curry Rice", "Tempura"],
    Western: ["Pasta", "Pizza", "Burger", "Salad", "Steak", "Chicken", "Sandwich", "Risotto", "Gratin", "Omelet"],
    Vietnamese: ["Pho (Rice Noodle Soup)", "Banh Mi (Vietnamese Sandwich)", "Bun Cha (Grilled Pork Noodles)", "Bun Bo Hue (Spicy Beef Noodles)", "Fresh Spring Rolls", "Bun Bo Hue"],
    Thai: ["Pad Thai", "Tom Yum Goong", "Green Curry", "Som Tum (Papaya Salad)", "Khao Pad (Fried Rice)", "Massaman Curry"],
    Mexican: ["Taco", "Burrito", "Enchilada", "Nachos", "Quesadilla", "Fajita"],
    Indonesian: ["Nasi Goreng (Fried Rice)", "Mie Goreng (Fried Noodles)", "Satay", "Gado Gado (Peanut Salad)", "Rendang (Beef Curry)", "Baso (Meatball)"],
    Dessert: ["Cake", "Muffin", "Brownie", "Macaron", "Cookie", "Tart"],
    Drink: ["Juice", "Smoothie", "Latte", "American Coffee", "Green Tea", "Earl Grey"],
    FastFood: ["McDonald's", "KFC", "Pizza Hut", "Domino's Pizza", "Burger King", "Starbucks", "Mammoth Chicken", "N Brand Burger"],
    Chicken: ["Fried Chicken", "Sweet Soy Chicken", "Garlic Chicken", "Half-half Chicken", "Boneless Chicken", "Chicken Drumsticks"],
  },
  ja: {
    Korean: ["キムチチゲ", "ドゥンジャンチゲ（大根入り味噌汁）", "ビ빔バン", "ヤギボッカム（辛く炒め豚）", "韩牛グリル", "ユゲジャン（海帯の清汁）", "スンドブチゲ（豆腐チゲ）", "パドゥチゲ（部隊チゲ）", "冷麺", "カルグスク（手打ちうどん）", "マンデ（餃子）", "チョンゴル（鉄板料理）"],
    Chinese: ["ジャージャーメン", "짬뽕（海鮮麻辣麺）", "タンスユク（甜酸豚）", "マラタン", "マラシャングオ", "炒飯", "軍マンデ（焼き餃子）", "カンプギ（甘酢豚）", "ヤンジャンピ", "タックイボッカム（辛辛_octopus炒菜）"],
    Japanese: ["ラーメン", "うどん", "とんかつ", "寿司", "丼", "そば", "牛丼", "焼き肉", "カレーライス", "天ぷら"],
    Western: ["パスタ", "ピザ", "バーガー", "サラダ", "ステーキ", "チキン", "サンドイッチ", "リゾット", "グラタン", "オムレツ"],
    Vietnamese: ["フォー（ベトナム麺）", "バンミ（ベトナムサンド）", "ブンチャ（焼き豚麺）", "バンセオ（ベトナムクレープ）", "ウォンサム（春巻き）", "ブンボフエ（辛い牛肉麺）"],
    Thai: ["パッタイ", "トムヤムクン", "グリーンカレー", "ソムタム（青パパイヤサラダ）", "カオパット（チャーハン）", "マッサマンカレー"],
    Mexican: ["タコス", "ブリト", "エンチラーダ", "ナチョ", "ケサディージャ", "フィハータ"],
    Indonesian: ["ナシゴレン（インドネシア焼き飯）", "ミゴレン（インドネシア焼き麺）", "サテ（焼き串）", "ガドガド（ピーナッツサラダ）", "レンダン（スパイス煮込み）", "バソ（肉団子）"],
    Dessert: ["ケーキ", "マフィン", "ブラウニー", "マカロン", "クッキー", "タルト"],
    Drink: ["ジュース", "スムージー", "ラテ", "アメリカンコーヒー", "緑茶", "エルグレー"],
    FastFood: ["マクドナルド", "KFC", "ピザハット", "ドミノピザ", "バーガーキング", "スターバックス", "マンスターチ", "ノブランドバーガー"],
    Chicken: ["フライドチキン", "甘味噌チキン", "ガーリックチキン", "半々チキン", "骨なしチキン", "チキン団子"],
  },
  es: {
    Korean: ["Estofado de Kimchi", "Arroz Frito Kimchi", "Bibimbap", "Cerdo Picante Salteado", "BBQ de Res Coreana", "Sopa de Algas", "Estofado de Tofu Suave", "Estofado de División Militar", "Fideos", "Fíos Fríos", "Fideos a Mano", "Empanadas", "Olla Caliente"],
    Chinese: ["Jajangmyeon (Fideos con Pasta Negra)", "Jjamppong (Fideos Picantes de Mariscos)", "Tangsuyuk (Cerdo agridulce)", "Yukgeori", "Mala Tang", "Mala Xiangguo", "Arroz Frito", "Empanadas Fritas", "Kkanpunggi (Cerdo Crujiente)", "Yangjangpi", "Estofado de Pulpo Picante"],
    Japanese: ["Ramen", "Udon (Fideos Gruesos)", "Tonkatsu (Chuleta de Cerdo)", "Sushi", "Donburi (Arroz con Topping)", "Soba (Fideos de Trigomillo)", "Gyudon (Olla de res)", "Yakiniku (BBQ)", "Curry Japonés", "Tempura"],
    Western: ["Pasta", "Pizza", "Hamburguesa", "Ensalada", "Bistec", "Pollo", "Sándwich", "Risotto", "Gratinado", "Tortilla"],
    Vietnamese: ["Pho (Sopa de Fideos de Arroz)", "Banh Mi (Sándwich Vietnamita)", "Bun Cha (Fideos con Cerdo a la Parrilla)", "Bun Bo Hue (Fideos de Res Picantes)", "Rollitos de Primavera", "Bun Bo Hue"],
    Thai: ["Pad Thai", "Tom Yum Goong", "Curry Verde", "Som Tum (Ensalada de Papaya)", "Khao Pad (Arroz Frito)", "Curry Massaman"],
    Mexican: ["Taco", "Burrito", "Enchilada", "Nachos", "Quesadilla", "Fajita"],
    Indonesian: ["Nasi Goreng (Arroz Frito)", "Mie Goreng (Fideos Fritos)", "Saté (Brocheta)", "Gado Gado (Ensalada de Maní)", "Rendang (Curry de Res)", "Baso (Albondiga)"],
    Dessert: ["Pastel", "Muffin", "Brownie", "Macaron", "Galleta", "Tarta"],
    Drink: ["Jugo", "Smoothie", "Latte", "Café Americano", "Té Verde", "Earl Grey"],
    FastFood: ["McDonald's", "KFC", "Pizza Hut", "Domino's Pizza", "Burger King", "Starbucks", "Mamstuchi", "N Brand Burger"],
    Chicken: ["Pollo Frito", "Pollo Glaseado", "Pollo al Ajo", "Pollo Mitad-Mitad", "Pollo sin Hueso", "Palitos de Pollo"],
  },
};

// Category labels per locale
export const categoryLabels: Record<Locale, CategoryLabel[]> = {
  ko: [
    { key: "Korean", label: "한식" },
    { key: "Chinese", label: "중식" },
    { key: "Japanese", label: "일식" },
    { key: "Western", label: "양식" },
    { key: "Vietnamese", label: "베트남" },
    { key: "Thai", label: "태국" },
    { key: "Mexican", label: "멕시칸" },
    { key: "Indonesian", label: "인도네시아" },
    { key: "Dessert", label: "디저트" },
    { key: "Drink", label: "음료" },
    { key: "FastFood", label: "패스트푸드" },
    { key: "Chicken", label: "치킨" },
  ],
  en: [
    { key: "Korean", label: "Korean" },
    { key: "Chinese", label: "Chinese" },
    { key: "Japanese", label: "Japanese" },
    { key: "Western", label: "Western" },
    { key: "Vietnamese", label: "Vietnamese" },
    { key: "Thai", label: "Thai" },
    { key: "Mexican", label: "Mexican" },
    { key: "Indonesian", label: "Indonesian" },
    { key: "Dessert", label: "Dessert" },
    { key: "Drink", label: "Drink" },
    { key: "FastFood", label: "Fast Food" },
    { key: "Chicken", label: "Chicken" },
  ],
  ja: [
    { key: "Korean", label: "韓国" },
    { key: "Chinese", label: "中華" },
    { key: "Japanese", label: "日本" },
    { key: "Western", label: "西洋" },
    { key: "Vietnamese", label: "ベトナム" },
    { key: "Thai", label: "タイ" },
    { key: "Mexican", label: "メキシコ" },
    { key: "Indonesian", label: "インドネシア" },
    { key: "Dessert", label: "デザート" },
    { key: "Drink", label: "飲み物" },
    { key: "FastFood", label: "ファーストフード" },
    { key: "Chicken", label: "チキン" },
  ],
  es: [
    { key: "Korean", label: "Coreano" },
    { key: "Chinese", label: "Chino" },
    { key: "Japanese", label: "Japonés" },
    { key: "Western", label: "Occidental" },
    { key: "Vietnamese", label: "Vietnamita" },
    { key: "Thai", label: "Tailandés" },
    { key: "Mexican", label: "Mexicano" },
    { key: "Indonesian", label: "Indonesio" },
    { key: "Dessert", label: "Postre" },
    { key: "Drink", label: "Bebida" },
    { key: "FastFood", label: "Comida Rápida" },
    { key: "Chicken", label: "Pollo" },
  ],
};

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
