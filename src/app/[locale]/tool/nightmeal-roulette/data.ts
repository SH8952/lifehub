export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  nightmeal: string;
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
    Korean: ["전골", "부대찌개", "김치찌개", "된장찌개", "순두부찌개", "육개장"],
    Chinese: ["짜장면", "짬뽕", "쟁반짜장", "냉면", "칼국수", "국수"],
    Japanese: ["라멘", "우동", "돈카츠", "초밥", "규동", "소바"],
    Western: ["피자", "치즈피자", "페페로니", "야채피자", "하와이안피자", "파스타"],
    Vietnamese: ["쌀국수", "반미", "분짜", "반세오", "월남쌈", "분보후에"],
    Thai: ["팟타이", "똠얌꿍", "그린커리", "쏨땀", "카오팟", "마사만커리"],
    Mexican: ["타코", "부리또", "엔칠라다", "나초", "케사디아", "파히타"],
    Indonesian: ["나시고렝", "미고렝", "사테", "가도가도", "렌당", "바쏘"],
    Dessert: ["케이크", "머핀", "브라우니", "마카롱", "쿠키", "타르트"],
    Drink: ["주스", "스무디", "라떼", "아메리카노", "녹차", "얼그레이"],
    Snack: ["핫도그", "순대", "튀김", "군고구마", "호두과자", "팝콘"],
  },
  en: {
    Korean: ["Hot Pot", "Army Base Stew", "Kimchi Stew", "Soybean Paste Stew", "Soft Tofu Stew", "Seaweed Soup"],
    Chinese: ["Jajangmyeon (Black Bean Noodles)", "Jjamppong (Spicy Seafood Noodles)", "Jangban Jajang", "Cold Noodles", "Hand-cut Noodles", "Noodles"],
    Japanese: ["Ramen", "Udon", "Tonkatsu (Pork Cutlet)", "Sushi", "Gyudon (Beef Bowl)", "Soba"],
    Western: ["Pizza", "Cheese Pizza", "Pepperoni", "Vegetable Pizza", "Hawaiian Pizza", "Pasta"],
    Vietnamese: ["Pho (Rice Noodle Soup)", "Banh Mi (Vietnamese Sandwich)", "Bun Cha (Grilled Pork Noodles)", "Bun Bo Hue (Spicy Beef Noodles)", "Fresh Spring Rolls", "Bun Bo Hue"],
    Thai: ["Pad Thai", "Tom Yum Goong", "Green Curry", "Som Tum (Papaya Salad)", "Khao Pad (Fried Rice)", "Massaman Curry"],
    Mexican: ["Taco", "Burrito", "Enchilada", "Nachos", "Quesadilla", "Fajita"],
    Indonesian: ["Nasi Goreng (Fried Rice)", "Mie Goreng (Fried Noodles)", "Satay", "Gado Gado (Peanut Salad)", "Rendang (Beef Curry)", "Baso (Meatball)"],
    Dessert: ["Cake", "Muffin", "Brownie", "Macaron", "Cookie", "Tart"],
    Drink: ["Juice", "Smoothie", "Latte", "American Coffee", "Green Tea", "Earl Grey"],
    Snack: ["Hot Dog", "Sundae (Korean Blood Sausage)", "Fried Kimchi", "Roasted Sweet Potato", "Walnut Cake", "Popcorn"],
  },
  ja: {
    Korean: ["チャウプー（鍋料理）", "部隊チゲ", "キムチチゲ", "ドゥンジャンチゲ（大根入り味噌汁）", "スンドブチゲ（豆腐チゲ）", "ユゲジャン（海帯の清汁）"],
    Chinese: ["ジャージャーメン", "짬뽕（海鮮麻辣麺）", "쟁반짜장", "冷麺", "カルグスク（手打ちうどん）", "冷麺"],
    Japanese: ["ラーメン", "うどん", "とんかつ", "寿司", "牛丼", "そば"],
    Western: ["ピザ", "チーズピザ", "ペペロニ", "野菜ピザ", "ハワイアンピザ", "パスタ"],
    Vietnamese: ["フォー（ベトナム麺）", "バンミ（ベトナムサンド）", "ブンチャ（焼き豚麺）", "バンセオ（ベトナムクレープ）", "ウォンサム（春巻き）", "ブンボフエ（辛い牛肉麺）"],
    Thai: ["パッタイ", "トムヤムクン", "グリーンカレー", "ソムタム（青パパイヤサラダ）", "カオパット（チャーハン）", "マッサマンカレー"],
    Mexican: ["タコス", "ブリト", "エンチラーダ", "ナチョ", "ケサディージャ", "フィハータ"],
    Indonesian: ["ナシゴレン（インドネシア焼き飯）", "ミゴレン（インドネシア焼き麺）", "サテ（焼き串）", "ガドガド（ピーナッツサラダ）", "レンダン（スパイス煮込み）", "バソ（肉団子）"],
    Dessert: ["ケーキ", "マフィン", "ブラウニー", "マカロン", "クッキー", "タルト"],
    Drink: ["ジュース", "スムージー", "ラテ", "アメリカンコーヒー", "緑茶", "エルグレー"],
    Snack: ["ホットドッグ", "スンデ（韓国ソーセージ）", "キムチ揚げ", "焼き芋", "胡瓜菓子", "ポップコーン"],
  },
  es: {
    Korean: ["Olla Caliente (チャウプー)", "Estofado de División Militar", "Estofado de Kimchi", "Estofado de Pasta de Soja", "Estofado de Tofu Suave", "Sopa de Algas"],
    Chinese: ["Jajangmyeon (Fideos con Pasta Negra)", "Jjamppong (Fideos Picantes de Mariscos)", "Jangban Jajang", "Fíos Fríos", "Fideos a Mano", "Fideos"],
    Japanese: ["Ramen", "Udon (Fideos Gruesos)", "Tonkatsu (Chuleta de Cerdo)", "Sushi", "Gyudon (Olla de res)", "Soba (Fideos de Trigomillo)"],
    Western: ["Pizza", "Pizza de Queso", "Pepperoni", "Pizza de Verduras", "Pizza Hawaiana", "Pasta"],
    Vietnamese: ["Pho (Sopa de Fideos de Arroz)", "Banh Mi (Sándwich Vietnamita)", "Bun Cha (Fideos con Cerdo a la Parrilla)", "Bun Bo Hue (Fideos de Res Picantes)", "Rollitos de Primavera", "Bun Bo Hue"],
    Thai: ["Pad Thai", "Tom Yum Goong", "Curry Verde", "Som Tum (Ensalada de Papaya)", "Khao Pad (Arroz Frito)", "Curry Massaman"],
    Mexican: ["Taco", "Burrito", "Enchilada", "Nachos", "Quesadilla", "Fajita"],
    Indonesian: ["Nasi Goreng (Arroz Frito)", "Mie Goreng (Fideos Fritos)", "Saté (Brocheta)", "Gado Gado (Ensalada de Maní)", "Rendang (Curry de Res)", "Baso (Albondiga)"],
    Dessert: ["Pastel", "Muffin", "Brownie", "Macaron", "Galleta", "Tarta"],
    Drink: ["Jugo", "Smoothie", "Latte", "Café Americano", "Té Verde", "Earl Grey"],
    Snack: ["Hot Dog", "Sundae (Salchicha Coreana)", "Kimchi Frito", "Boniato Asado", "Pastel de Nuez", "Palomitas de Maíz"],
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
    { key: "Snack", label: "간식" },
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
    { key: "Snack", label: "Snack" },
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
    { key: "Snack", label: "お菓子" },
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
    { key: "Snack", label: "Snack" },
  ],
};

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "야식 메뉴 룰렛",
    subtitle: "밤에 뭐 먹지? 야식 메뉴를 랜덤으로 추천합니다.",
    nightmeal: "야식",
    generate: "야식 뽑기",
    result: "오늘 야식 메뉴는",
    again: "다시 뽑기",
    categories: "카테고리",
    selectCategory: "전체 메뉴",
    allMenu: "전체",
    limitations: "선정된 메뉴는 참고용이며, 실제 영업 여부와 메뉴는 다를 수 있습니다.",
    whyRoulette: "왜 야식 메뉴 룰렛이 필요한가요?",
    explanation:
      "밤에 뭐 먹지? 야식은 언제나 고민입니다.\n\n야식의 세계는 상상 이상으로 넓습니다! 치킨부터 떡볶이, 볶음밥, 짜장면까지 20개 이상의 야식 메뉴가 준비되어 있습니다.\n\n배고플 때 누군가가 대신 선택해주면 얼마나 좋을까요? 야식 룰렛이 그 역할을 합니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    spinning: "돌리는 중...",
    faq: [
      { q: "야식은 몇 시부터인가요?", a: "저녁 식사(보통 6시)가 끝난 후부터 야식으로 봅니다. 보통 9시 이후를 야식의 시간으로 생각합니다." },
      { q: "새벽 식사도 추천되나요?", a: "네, 야식 메뉴는 새벽까지 이어지는 심야 식사의 선택지입니다." },
      { q: "건강한 야식 옵션이 있을까요?", a: "칼로리가 낮아 가볍게 즐길 수 있는 메뉴도 여러 가지 준비했습니다." },
    ],
  },
  en: {
    title: "Late Night Food Roulette",
    subtitle: "What to eat late at night? Get random late-night food recommendations.",
    nightmeal: "Night meal",
    generate: "Pick Menu",
    result: "Tonight's late-night meal is",
    again: "Pick Again",
    categories: "Categories",
    selectCategory: "All Menus",
    allMenu: "All",
    limitations: "Selected menus are for reference only. Actual availability and menus may vary.",
    whyRoulette: "Why do you need a late night food roulette?",
    explanation:
      "What to eat late at night? Late-night meals are always a dilemma.\n\nThe world of late-night food is wide! Over 20 late-night food options including chicken, tteokbokki, fried rice, and jjajangmen are ready.\n\nHow great would it be if someone else chose for you when you're hungry? The late-night food roulette plays that role.",
    footer: "100% processed in browser. No data is sent to the server.",
    spinning: "Spinning...",
    faq: [
      { q: "What time counts as late night food?", a: "We consider meals after regular dinner (usually 6pm). Usually 9pm onwards is considered late night dining." },
      { q: "Does it include breakfast options?", a: "Yes, late night food includes options that extend into the early morning." },
      { q: "Are there healthy late night food options?", a: "Yes, we have many lightly enjoyable options with lower calories." },
    ],
  },
  ja: {
    title: "夜食メニュールーレット",
    subtitle: "夜に何を食べていいか分からない？夜食をランダムに推します。",
    nightmeal: "夜食",
    generate: "夜食を選ぶ",
    result: "今日の夜食のメニューは",
    again: "もう一度",
    categories: "カテゴリ",
    selectCategory: "全メニュー",
    allMenu: "全て",
    limitations: "選択されたメニューは参考用です。実際の営業状況やメニューと異なる場合があります。",
    whyRoulette: "なぜ夜食メニュールーレットが必要ですか？",
    explanation:
      "夜に何を食べていいか？夜食はいつも悩みの種です。\n\n夜食の世界は意外にも広い！チキンから唐揚げ、チャーハン、ジャージャー麺まで20以上の夜食メニューが準備されています。\n\nお腹が空いたとき、誰かが選んでくれたらどれほど楽しいでしょう？夜食ルーレットがその役割を果たします。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    spinning: "ルーレット中...",
    faq: [
      { q: "夜食は何時からですか？", a: "通常夕食(6時)の後に夜食として見なします。通常9時以降を夜食の時間と見なします。" },
      { q: "朝の食事の選択肢もおすすめされますか？", a: "はい、夜食メニューは深夜まで続く深夜食の選択です。" },
      { q: "健康的な夜食選択肢はありますか？", a: "はい、カロリーが低く軽く楽しめるメニューを多数準備しています。" },
    ],
  },
  es: {
    title: "Ruleta de Comida de Medianuevacho",
    subtitle: "¿Qué comer de noche? Recomendamos menús aleatorios de comida de noche.",
    nightmeal: "Comida de noche",
    generate: "Elegir Menú",
    result: "La comida de esta noche es",
    again: "Elegir de Nuevo",
    categories: "Categorías",
    selectCategory: "Todos los Menús",
    allMenu: "Todos",
    limitations: "Los menús seleccionados son solo de referencia. La disponibilidad y menús reales pueden variar.",
    whyRoulette: "¿Por qué necesitas una ruleta de comida de medianoche?",
    explanation:
      "¿Qué comer de noche? La comida de medianoche siempre es un dilema.\n\n¡El mundo de la comida de noche es sorprendentemente amplio! Más de 20 opciones incluyen pollo, tteokbokki, arroz frito y jjajangmen.\n\n¿Qué grande sería si alguien más eligiera para ti cuando tienes hambre? La ruleta de comida de noche cumple ese papel.",
    footer: "Procesado 100% en tu navegador. No hay datos enviados al servidor.",
    spinning: "Girando...",
    faq: [
      { q: "¿A qué hora se considera comida de medianoche?", a: "Consideramos comidas después de la cena regular (usualmente 6pm). Generalmente 9pm en adelante se considera cena de noche." },
      { q: "¿Incluye opciones de desayuno?", a: "Sí, las opciones de comida de noche incluyen opciones que se extienden en la madrugada." },
      { q: "¿Hay opciones de comida de noche saludables?", a: "Sí, tenemos muchas opciones ligeras con menos calorías." },
    ],
  },
};
