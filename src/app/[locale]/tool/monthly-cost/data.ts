export type Locale = "ko" | "en" | "ja" | "es";

export interface CityCost {
  city: string;
  cityEn: string;
  country: string;
  rent: number;
  food: number;
  transport: number;
  utilities: number;
  internet: number;
  total: number;
  costLevel: "low" | "medium" | "high";
  note: string;
}

export interface Data {
  title: string;
  subtitle: string;
  city: string;
  country: string;
  rent: string;
  food: string;
  transport: string;
  utilities: string;
  internet: string;
  total: string;
  monthlyTotal: string;
  costLevel: string;
  low: string;
  medium: string;
  high: string;
  filterPlaceholder: string;
  filterNone: string;
  compare: string;
  why: string;
  whyExplanation: string;
  tips: string;
  tipsList: string[];
  faq: Array<{ q: string; a: string }>;
  disclaimer: string;
  footer: string;
  cities: CityCost[];
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "도시별 한 달 살기 비용",
    subtitle: "세계 10개 도시의 월간 생활비를 비교하고 최적의 한 달 살기 목적지를 찾아보세요",
    city: "도시",
    country: "국가",
    rent: "주거비",
    food: "식비",
    transport: "교통비",
    utilities: "공과금",
    internet: "인터넷",
    total: "총 비용",
    monthlyTotal: "월간 총 비용",
    costLevel: "비용 수준",
    low: "저렴함",
    medium: "중간",
    high: "비쌈",
    filterPlaceholder: "도시/국가 검색...",
    filterNone: "해당 도시가 없습니다",
    compare: "비용 비교",
    why: "왜 도시별 생활비를 알아야 하나요?",
    whyExplanation:
      "한 달 살기를 계획할 때 가장 중요한 것은 해당 도시의 실질 생활비입니다.\n\n주거비만 보면 저렴해도 식비나 교통비가 높은 경우가 많습니다.\n\n전체 비용을 종합적으로 비교하면 예산에 맞는 최적의 도시를 찾을 수 있습니다.",
    tips: "한 달 살기 비용 절감 팁",
    tipsList: [
      "현지 마트에서 장보기 (식비 30-40% 절감)",
      "정기교통패스 구매 (월 $50-$100)",
      "에어비앤비 월세 계약 (호텔 대비 50-70% 절약)",
      "무료 도보 투어·Wi-Fi 공유 공간 활용",
      "현지인 친구들과 교류하여 무료 이벤트 정보 얻기",
    ],
    faq: [
      {
        q: "비율이 어떻게 산정되나요?",
        a: "거주 유형(원룸/아파트), 식사 패턴(외식/자체 조리), 교통 수단(대중교통/택시) 기준 평균값입니다. 실제 비용은 개인의 생활 방식에 따라 다를 수 있습니다.",
      },
      {
        q: "환율은 어떻게 되나요?",
        a: "모든 비용은 USD 기준으로 표시됩니다. 현지 화폐로 결제 시 실시간 환율을 확인해주세요.",
      },
      {
        q: "비용에 비자 비용이 포함되나요?",
        a: "아니요. 비자 비용은 도시마다 매우 다르며 (무료~$500+), 별도로 고려해야 합니다.",
      },
    ],
    disclaimer: "⚠️ 모든 비용은 월간 예상 평균치이며, 2026년 기준 참고용입니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    cities: [
      { city: "방콕", cityEn: "Bangkok", country: "태국", rent: 600, food: 300, transport: 60, utilities: 50, internet: 20, total: 1030, costLevel: "low", note: "물가가 매우 저렴함" },
      { city: "치앙마이", cityEn: "Chiang Mai", country: "태국", rent: 400, food: 250, transport: 40, utilities: 40, internet: 18, total: 748, costLevel: "low", note: "방콕보다 더 저렴함" },
      { city: "다낭", cityEn: "Da Nang", country: "베트남", rent: 450, food: 240, transport: 35, utilities: 40, internet: 15, total: 780, costLevel: "low", note: "바다가 가까움" },
      { city: "호치민시티", cityEn: "Ho Chi Minh City", country: "베트남", rent: 500, food: 260, transport: 40, utilities: 45, internet: 15, total: 860, costLevel: "low", note: "번화한 도시" },
      { city: "클라크", cityEn: "Clark", country: "필리핀", rent: 350, food: 220, transport: 30, utilities: 35, internet: 20, total: 655, costLevel: "low", note: "근처 휴양지" },
      { city: "발리", cityEn: "Bali", country: "인도네시아", rent: 550, food: 280, transport: 45, utilities: 40, internet: 25, total: 940, costLevel: "low", note: "디지털 노마드 인기 지역" },
      { city: "푸켓", cityEn: "Phuket", country: "태국", rent: 700, food: 320, transport: 50, utilities: 55, internet: 22, total: 1147, costLevel: "medium", note: " TOURIST CITY" },
      { city: "메콩강삼각주", cityEn: "Mekong Delta", country: "베트남", rent: 350, food: 200, transport: 30, utilities: 35, internet: 12, total: 627, costLevel: "low", note: "자연 풍경" },
      { city: "쿠알라룸푸르", cityEn: "Kuala Lumpur", country: "말레이시아", rent: 500, food: 280, transport: 45, utilities: 45, internet: 18, total: 888, costLevel: "low", note: "현대적인 도시" },
      { city: "양곤", cityEn: "Yangon", country: "미얀마", rent: 300, food: 180, transport: 20, utilities: 30, internet: 10, total: 540, costLevel: "low", note: "아직 물가 낮음" },
    ],
  },
  en: {
    title: "Monthly Cost by City",
    subtitle: "Compare monthly living costs across 10 global cities and find your ideal long-term stay destination",
    city: "City",
    country: "Country",
    rent: "Rent",
    food: "Food",
    transport: "Transport",
    utilities: "Utilities",
    internet: "Internet",
    total: "Total",
    monthlyTotal: "Monthly Total",
    costLevel: "Cost Level",
    low: "Low",
    medium: "Medium",
    high: "High",
    filterPlaceholder: "Search city/country...",
    filterNone: "No cities found",
    compare: "Cost Compare",
    why: "Why know monthly costs by city?",
    whyExplanation:
      "The most important thing when planning a long-term stay is the actual cost of living in that city.\n\nJust because rent is cheap doesn't mean food and transport won't be expensive.\n\nA comprehensive cost comparison helps you find the optimal city for your budget.",
    tips: "Tips for reducing long-stay costs",
    tipsList: [
      "Shop at local markets (save 30-40% on food)",
      "Buy monthly transit passes ($50-$100/month)",
      "Monthly Airbnb rental (50-70% cheaper than hotels)",
      "Free walking tours and co-working spaces",
      "Connect with locals for free event info",
    ],
    faq: [
      {
        q: "How are the costs calculated?",
        a: "Based on average for studio apartment, eating habits (eating out vs. home cooking), and transport (public transit vs. taxi). Actual costs may vary by individual lifestyle.",
      },
      {
        q: "What about exchange rates?",
        a: "All costs are shown in USD. Check real-time rates when paying in local currency.",
      },
      {
        q: "Are visa costs included?",
        a: "No. Visa costs vary greatly by country (free to $500+) and must be considered separately.",
      },
    ],
    disclaimer: "⚠️ All costs are monthly estimated averages based on 2026 data.",
    footer: "100% processed in browser. No data sent to the server.",
    cities: [
      { city: "Bangkok", cityEn: "Bangkok", country: "Thailand", rent: 600, food: 300, transport: 60, utilities: 50, internet: 20, total: 1030, costLevel: "low", note: "Very low cost of living" },
      { city: "Chiang Mai", cityEn: "Chiang Mai", country: "Thailand", rent: 400, food: 250, transport: 40, utilities: 40, internet: 18, total: 748, costLevel: "low", note: "Even cheaper than Bangkok" },
      { city: "Da Nang", cityEn: "Da Nang", country: "Vietnam", rent: 450, food: 240, transport: 35, utilities: 40, internet: 15, total: 780, costLevel: "low", note: "Close to the beach" },
      { city: "Ho Chi Minh City", cityEn: "Ho Chi Minh City", country: "Vietnam", rent: 500, food: 260, transport: 40, utilities: 45, internet: 15, total: 860, costLevel: "low", note: "Vibrant city" },
      { city: "Clark", cityEn: "Clark", country: "Philippines", rent: 350, food: 220, transport: 30, utilities: 35, internet: 20, total: 655, costLevel: "low", note: "Near resort area" },
      { city: "Bali", cityEn: "Bali", country: "Indonesia", rent: 550, food: 280, transport: 45, utilities: 40, internet: 25, total: 940, costLevel: "low", note: "Digital nomad hotspot" },
      { city: "Phuket", cityEn: "Phuket", country: "Thailand", rent: 700, food: 320, transport: 50, utilities: 55, internet: 22, total: 1147, costLevel: "medium", note: "Tourist destination" },
      { city: "Mekong Delta", cityEn: "Mekong Delta", country: "Vietnam", rent: 350, food: 200, transport: 30, utilities: 35, internet: 12, total: 627, costLevel: "low", note: "Natural scenery" },
      { city: "Kuala Lumpur", cityEn: "Kuala Lumpur", country: "Malaysia", rent: 500, food: 280, transport: 45, utilities: 45, internet: 18, total: 888, costLevel: "low", note: "Modern metropolis" },
      { city: "Yangon", cityEn: "Yangon", country: "Myanmar", rent: 300, food: 180, transport: 20, utilities: 30, internet: 10, total: 540, costLevel: "low", note: "Still very affordable" },
    ],
  },
  ja: {
    title: "都市別ホームステイコスト",
    subtitle: "世界の10都市の月間生活コストを比較して、最適なホムステイ行き先を見つけましょう",
    city: "都市",
    country: "国",
    rent: "家賃",
    food: "食費",
    transport: "交通費",
    utilities: "光熱費",
    internet: "インターネット",
    total: "合計",
    monthlyTotal: "月間合計",
    costLevel: "コスト水準",
    low: "安い",
    medium: "普通",
    high: "高い",
    filterPlaceholder: "都市/国を検索...",
    filterNone: "該当都市はありません",
    compare: "コスト比較",
    why: "都市別の生活費をなぜ知る必要があるのか？",
    whyExplanation:
      "ホームステイを計画する際に最も重要なことは、その都市の実質生活費です。\n\n家賃だけが安くても、食費や交通費が高い場合があります。\n\n総コストを総合的に比較することで、予算に合った最適な都市を見つけることができます。",
    tips: "ホームステイの節約術",
    tipsList: [
      "現地市場で買い物(食費30-40%節約)",
      "定期交通パス購入(月$50-$100)",
      "Airbnb月間契約(ホテル比50-70%節約)",
      "無料ウォーキングツアーと共同作業スペース活用",
      "現地人と交流して無料イベント情報を入手",
    ],
    faq: [
      {
        q: "コストはどう算出されますか？",
        a: "スタジオアパート、食事パターン(外食/自炊)、交通手段(公共交通/タクシー)のaverage値です。実際のコードは個人のライフスタイルよって異なる場合があります。",
      },
      {
        q: "為替はどうなりますか？",
        a: "すべてのコストはUSD基準で表示されます。現地通貨での支払い時はリアルタイム為替を確認してください。",
      },
      {
        q: "ビザコストが含まれていますか？",
        a: "いいえ。ビザコストは国によって非常に異なり(無料~$500+)、別途考慮する必要があります。",
      },
    ],
    disclaimer: "⚠️ すべてのコストは月間の推定平均値であり、2026年基準の参考用です。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    cities: [
      { city: "バンコク", cityEn: "Bangkok", country: "タイ", rent: 600, food: 300, transport: 60, utilities: 50, internet: 20, total: 1030, costLevel: "low", note: "物価が非常に安い" },
      { city: "チェンマイ", cityEn: "Chiang Mai", country: "タイ", rent: 400, food: 250, transport: 40, utilities: 40, internet: 18, total: 748, costLevel: "low", note: "バンコクよりもさらに安い" },
      { city: "ダナン", cityEn: "Da Nang", country: "ベトナム", rent: 450, food: 240, transport: 35, utilities: 40, internet: 15, total: 780, costLevel: "low", note: "海が近い" },
      { city: "ホーチミン", cityEn: "Ho Chi Minh City", country: "ベトナム", rent: 500, food: 260, transport: 40, utilities: 45, internet: 15, total: 860, costLevel: "low", note: "にぎやかな都市" },
      { city: "クラーク", cityEn: "Clark", country: "フィリピン", rent: 350, food: 220, transport: 30, utilities: 35, internet: 20, total: 655, costLevel: "low", note: "リゾートエリアの近く" },
      { city: "バリ", cityEn: "Bali", country: "インドネシア", rent: 550, food: 280, transport: 45, utilities: 40, internet: 25, total: 940, costLevel: "low", note: "デジタルノマド人気" },
      { city: "プーケット", cityEn: "Phuket", country: "タイ", rent: 700, food: 320, transport: 50, utilities: 55, internet: 22, total: 1147, costLevel: "medium", note: "観光都市" },
      { city: "メコンデルタ", cityEn: "Mekong Delta", country: "ベトナム", rent: 350, food: 200, transport: 30, utilities: 35, internet: 12, total: 627, costLevel: "low", note: "自然景観" },
      { city: "クアラルンプール", cityEn: "Kuala Lumpur", country: "マレーシア", rent: 500, food: 280, transport: 45, utilities: 45, internet: 18, total: 888, costLevel: "low", note: "現代的な都市" },
      { city: "ヤンゴン", cityEn: "Yangon", country: "ミャンマー", rent: 300, food: 180, transport: 20, utilities: 30, internet: 10, total: 540, costLevel: "low", note: "まだ物価が低い" },
    ],
  },
  es: {
    title: "Costo Mensual por Ciudad",
    subtitle: "Compara el costo de vida mensual de 10 ciudades globales y encuentra tu destino ideal",
    city: "Ciudad",
    country: "Pais",
    rent: "Alquiler",
    food: "Alimento",
    transport: "Transporte",
    utilities: "Servicios",
    internet: "Internet",
    total: "Total",
    monthlyTotal: "Total Mensual",
    costLevel: "Nivel de Costo",
    low: "Barato",
    medium: "Medio",
    high: "Caro",
    filterPlaceholder: "Buscar ciudad/pais...",
    filterNone: "No se encontraron ciudades",
    compare: "Comparar Costos",
    why: "Por que saber el costo de vida por ciudad?",
    whyExplanation:
      "Lo más importante al planificar una estancia larga es el costo real de vida en esa ciudad.\n\nSolo porque el alquiler sea bajo no significa que la comida y el transporte serán baratos.\n\nUna comparación comprehensiva de costos te ayuda a encontrar la ciudad óptima para tu presupuesto.",
    tips: "Consejos para reducir costos de estancia larga",
    tipsList: [
      "Compra en mercados locales (ahorra 30-40% en comida)",
      "Compra pases de transporte mensual ($50-$100/mes)",
      "Alquiler Airbnb mensual (50-70% más barato que hoteles)",
      "Tours caminata gratis y espacios de trabajo compartido",
      "Conecta con locales para eventos gratis",
    ],
    faq: [
      {
        q: "Como se calculan los costos?",
        a: "Basado en promedio para apartamento studio, habitos de comida (de comer vs. cocinar en casa), y transporte (transito público vs. taxi). Los costos reales pueden variar por estilo de vida individual.",
      },
      {
        q: "Que pasa con las tasas de cambio?",
        a: "Todos los costos se muestran en USD. Consulta las tasas en tiempo real al pagar en moneda local.",
      },
      {
        q: "Los costos de visa estan incluidos?",
        a: "No. Los costos de visa varian mucho por pais (gratis a $500+) y deben considerarse por separado.",
      },
    ],
    disclaimer: "⚠️ Todos los costos son promedios mensuales estimados basados en datos de 2026.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    cities: [
      { city: "Bangkok", cityEn: "Bangkok", country: "Tailandia", rent: 600, food: 300, transport: 60, utilities: 50, internet: 20, total: 1030, costLevel: "low", note: "Costo de vida muy bajo" },
      { city: "Chiang Mai", cityEn: "Chiang Mai", country: "Tailandia", rent: 400, food: 250, transport: 40, utilities: 40, internet: 18, total: 748, costLevel: "low", note: "Aun más barato que Bangkok" },
      { city: "Da Nang", cityEn: "Da Nang", country: "Vietnam", rent: 450, food: 240, transport: 35, utilities: 40, internet: 15, total: 780, costLevel: "low", note: "Cerca de la playa" },
      { city: "Ho Chi Minh", cityEn: "Ho Chi Minh City", country: "Vietnam", rent: 500, food: 260, transport: 40, utilities: 45, internet: 15, total: 860, costLevel: "low", note: "Ciudad vibrante" },
      { city: "Clark", cityEn: "Clark", country: "Filipinas", rent: 350, food: 220, transport: 30, utilities: 35, internet: 20, total: 655, costLevel: "low", note: "Cerca de área de resort" },
      { city: "Bali", cityEn: "Bali", country: "Indonesia", rent: 550, food: 280, transport: 45, utilities: 40, internet: 25, total: 940, costLevel: "low", note: "Punto de nomada digital" },
      { city: "Phuket", cityEn: "Phuket", country: "Tailandia", rent: 700, food: 320, transport: 50, utilities: 55, internet: 22, total: 1147, costLevel: "medium", note: "Destino turistico" },
      { city: "Delta Mekong", cityEn: "Mekong Delta", country: "Vietnam", rent: 350, food: 200, transport: 30, utilities: 35, internet: 12, total: 627, costLevel: "low", note: "Paisaje natural" },
      { city: "Kuala Lumpur", cityEn: "Kuala Lumpur", country: "Malaysia", rent: 500, food: 280, transport: 45, utilities: 45, internet: 18, total: 888, costLevel: "low", note: "Metropolis moderno" },
      { city: "Yangon", cityEn: "Yangon", country: "Myanmar", rent: 300, food: 180, transport: 20, utilities: 30, internet: 10, total: 540, costLevel: "low", note: "Todavia muy accesible" },
    ],
  },
};
