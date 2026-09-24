import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import CityLivingCost from "@/components/city-living-cost";

type Locale = "ko" | "en" | "ja" | "es";

interface FAQ {
  q: string;
  a: string;
}

const i18n: Record<Locale, {
  title: string;
  subtitle: string;
  regionFilter: string;
  all: string;
  asia: string;
  northAmerica: string;
  europe: string;
  oceania: string;
  city: string;
  country: string;
  rent: string;
  food: string;
  transport: string;
  entertainment: string;
  utilities: string;
  total: string;
  note: string;
  whyCalculator: string;
  explanation: string;
  limitations: string;
  footer: string;
  dataNote: string;
  faq: FAQ[];
}> = {
  ko: {
    title: "도시별 한달살기 비용 비교",
    subtitle: "주요 도시 월별 생활비를 한눈에 비교하세요",
    regionFilter: "지역 필터",
    all: "전체",
    asia: "아시아",
    northAmerica: "북미",
    europe: "유럽",
    oceania: "오세아니아",
    city: "도시",
    country: "국가",
    rent: "주거비",
    food: "식품비",
    transport: "교통비",
    entertainment: "유흥비",
    utilities: "기타",
    total: "월 총비용",
    note: "※ 모든 비용은 1인 기준 월평균 예상 비용이며, 원화 기준입니다.",
    whyCalculator: "왜 도시별 한달살기 비용 비교가 필요한가요?",
    explanation:
      "한달살기(월체류)를 계획할 때 가장 먼저 확인해야 할 것이 월 생활비입니다. 도시별 물가 차이가 크므로, 내 예산에 맞는 도시를 선택하는 것이 중요합니다.\n\n이 도구는 아시아, 북미, 유럽, 오세아니아 등 주요 도시 17곳의 월별 생활비를 카테고리별로 정리했습니다. 주거비(1인용 원룸/1BED 아파트), 식품비(싱글), 대중교통비, 유흥비, 기타 비용(인터넷/모바일/헬스장)을 각각 비교할 수 있습니다.\n\n물가는 도시 내부의 지역, 생활 방식, 환율 변동에 따라 달라질 수 있습니다. 아래 데이터는 참고용 기준치이며, 실제 거주 전에는 최신 물가를 반드시 다시 확인하시기 바랍니다.",
    limitations: "이 데이터는 참고용이며, 실제 생활비를 보장하지 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    dataNote: "※ 데이터는 Numbeo 2024~2025 중간값 및 각국 공식 통계를 기반으로 한 추정치입니다. 실제 비용은 생활 방식, 거주 지역, 환율에 따라 달라질 수 있습니다.",
    faq: [
      {
        q: "한달살기에 가장 저렴한 도시는 어디인가요?",
        a: "데이터 기준 호치민(베트남)이 월 총비용 약 1,250,000원으로 가장 저렴합니다. 이어 방콕(태국) 약 1,620,000원, 타이페이(대만) 약 1,640,000원 순입니다. 아시아 도시가 전반적으로 물가가 저렴합니다. 다만 안전, 의료 수준, 비자 규정 등 다른 요소도 함께 고려해야 합니다.",
      },
      {
        q: "물가는 얼마나 자주 업데이트되나요?",
        a: "이 데이터는 2024~2025년 기준 추정치입니다. 물가는 인플레이션, 환율, 현지 사정에 따라 수시로 변하므로, 실제 거주를 계획 중이라면 Numbeo, 현지 정부 통계, expat 커뮤니티 등 최신 정보를 병행 확인하는 것이 좋습니다.",
      },
      {
        q: "한달살기 비자는 어떻게 받나요?",
        a: "국가별로 장기 관광 비자(30~90일), 디지털노마드 비자, 장기 체류 비자 등 다양한 옵션이 있습니다. 한국 여권은 140개 이상 국가에서 무비자 또는 비자 도착이 가능하므로, 비자 부담이 적은 도시를 우선으로 고려하는 것도 좋은 전략입니다. 각국 대사관 홈페이지에서 최신 비자 정책을 확인하세요.",
      },
    ],
  },
  en: {
    title: "Monthly Cost by City Comparison",
    subtitle: "Compare monthly living costs across major cities at a glance",
    regionFilter: "Region Filter",
    all: "All",
    asia: "Asia",
    northAmerica: "North America",
    europe: "Europe",
    oceania: "Oceania",
    city: "City",
    country: "Country",
    rent: "Rent",
    food: "Food",
    transport: "Transport",
    entertainment: "Entertainment",
    utilities: "Utilities",
    total: "Monthly Total",
    note: "※ All costs are monthly estimates for 1 person, in KRW.",
    whyCalculator: "Why compare monthly costs by city?",
    explanation:
      "When planning a month-long stay (monthly residence), the first thing to check is the monthly living cost. Since prices vary significantly by city, choosing one that fits your budget is essential.\n\nThis tool compiles monthly living costs for 17 major cities across Asia, North America, Europe, and Oceania by category. You can compare rent (1-bedroom apartment), food (groceries for 1), public transportation, entertainment, and other costs (internet/mobile/gym) separately.\n\nPrices can vary by neighborhood, lifestyle, and exchange rate fluctuations. The data below serves as a reference benchmark — always verify current prices before moving.",
    limitations: "This data is for reference only and does not guarantee actual living costs.",
    footer: "100% processed in browser. No data is sent to the server.",
    dataNote: "※ Data is estimated based on Numbeo 2024-2025 mid-values and official statistics from each country. Actual costs may vary based on lifestyle, neighborhood, and exchange rates.",
    faq: [
      {
        q: "What is the cheapest city for a month-long stay?",
        a: "Based on the data, Ho Chi Minh City (Vietnam) is the cheapest at approximately 1,250,000 KRW per month. Next is Bangkok (Thailand) at about 1,620,000 KRW, and Taipei (Taiwan) at about 1,640,000 KRW. Asian cities are generally more affordable. However, consider other factors such as safety, healthcare, and visa requirements.",
      },
      {
        q: "How often is the data updated?",
        a: "This data is based on 2024-2025 estimates. Prices change with inflation, exchange rates, and local conditions. If you're planning to live somewhere, we recommend checking Numbeo, official government statistics, and expat communities for the latest information.",
      },
      {
        q: "How do I get a month-long stay visa?",
        a: "Countries offer various options: long-term tourist visas (30-90 days), digital nomad visas, long-stay visas, and more. Korean passport holders can enter 140+ countries visa-free or with a visa on arrival, so prioritizing cities with low visa burden is a good strategy. Check each country's embassy website for the latest visa policies.",
      },
    ],
  },
  ja: {
    title: "都市別1ヶ月生活コスト比較",
    subtitle: "主要都市の月額生活費を一目で比較",
    regionFilter: "地域フィルター",
    all: "すべて",
    asia: "アジア",
    northAmerica: "北米",
    europe: "欧州",
    oceania: "オセアニア",
    city: "都市",
    country: "国",
    rent: "家賃",
    food: "食費",
    transport: "交通費",
    entertainment: "娯楽費",
    utilities: "その他",
    total: "月額合計",
    note: "※すべての費用は1人基準の月額予想費用で、ウォン基準です。",
    whyCalculator: "なぜ都市別1ヶ月生活コスト比較が必要ですか？",
    explanation:
      "1ヶ月滞在（月間居住）を計画する際、最初に確認すべきことが月額生活費です。都市によって物価の差が大きいため、予算に合った都市を選ぶことが重要です。\n\nこのツールは、アジア、北米、欧州、オセアニアの主要都市17か所の月額生活費をカテゴリ別に整理しています。家賃（1人用アパート/1ベッドルーム）、食費（シングル）、公共交通費、娯楽費、その他費用（インターネット/モバイル/フィットネス）をそれぞれ比較できます。\n\n物価は地域、生活様式、為替変動によって異なります。以下のデータは参考基準値であり、実際の居住前に最新の物価を必ず確認してください。",
    limitations: "このデータは参考用であり、実際の生活費を保証するものではありません。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    dataNote: "※データはNumbeo 2024〜2025中間値および各国公式統計に基づいた推計値です。実際の費用は生活様式、居住地域、為替によって異なります。",
    faq: [
      {
        q: "1ヶ月滞在に最も安い都市はどこですか？",
        a: "データ基準ではホーチミン（ベトナム）が月額約1,250,000ウォンで最も安価です。次いでバンコク（タイ）約1,620,000ウォン、タイペイ（台湾）約1,640,000ウォンです。アジア都市は全体的に物価が安いです。ただし、安全、医療水準、ビザ規定などの他の要素も考慮する必要があります。",
      },
      {
        q: "データはどのくらいの頻度で更新されますか？",
        a: "このデータは2024〜2025年基準の推計値です。物価はインフレ、為替、現地の状況によって変動するため、実際に居住を計画している場合はNumbeo、各国政府統計、expatコミュニティなどの最新情報を併せて確認することをお勧めします。",
      },
      {
        q: "1ヶ月滞在ビザはどうやって取得しますか？",
        a: "各国で長期観光ビザ（30〜90日）、デジタルノマドビザ、長期滞在ビザなど様々なオプションがあります。韓国パスポートは140か国以上で無ビザまたは到着時ビザが可能なため、ビザ負担が少ない都市を優先で考慮するのも良い戦略です。各国大使館の公式サイトで最新のビザ政策を確認してください。",
      },
    ],
  },
  es: {
    title: "Comparación de Costos Mensuales por Ciudad",
    subtitle: "Compara los costos de vida mensuales de las principales ciudades de un vistazo",
    regionFilter: "Filtro de Región",
    all: "Todas",
    asia: "Asia",
    northAmerica: "América del Norte",
    europe: "Europa",
    oceania: "Oceanía",
    city: "Ciudad",
    country: "País",
    rent: "Alquiler",
    food: "Alimentos",
    transport: "Transporte",
    entertainment: "Entretenimiento",
    utilities: "Otros",
    total: "Total Mensual",
    note: "※ Todos los costos son estimaciones mensuales para 1 persona, en KRW.",
    whyCalculator: "¿Por qué comparar costos mensuales por ciudad?",
    explanation:
      "Al planificar una estancia mensual, lo primero que hay que verificar es el costo de vida mensual. Como los precios varían significativamente según la ciudad, elegir una que se adapte a tu presupuesto es esencial.\n\nEsta herramienta compila los costos de vida mensuales de 17 ciudades principales en Asia, América del Norte, Europa y Oceanía por categoría. Puedes comparar alquiler (apartamento de 1 habitación), alimentos (para 1 persona), transporte público, entretenimiento y otros costos (internet/móvil/gimnasio) por separado.\n\nLos precios pueden variar según el barrio, el estilo de vida y las fluctuaciones del tipo de cambio. Los datos de abajo sirven como referencia — siempre verifica los precios actuales antes de mudarte.",
    limitations: "Estos datos son solo de referencia y no garantizan los costos de vida reales.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    dataNote: "※ Los datos son estimaciones basadas en valores medios de Numbeo 2024-2025 y estadísticas oficiales de cada país. Los costos reales pueden variar según el estilo de vida, el barrio y los tipos de cambio.",
    faq: [
      {
        q: "¿Cuál es la ciudad más barata para una estancia mensual?",
        a: "Según los datos, Ciudad Ho Chi Minh (Vietnam) es la más barata con aproximadamente 1,250,000 KRW por mes. Le sigue Bangkok (Tailandia) con unos 1,620,000 KRW y Taipéi (Taiwán) con unos 1,640,000 KRW. Las ciudades asiáticas son generalmente más asequibles. Sin embargo, considera otros factores como seguridad, atención médica y requisitos de visa.",
      },
      {
        q: "¿Con qué frecuencia se actualizan los datos?",
        a: "Estos datos se basan en estimaciones de 2024-2025. Los precios cambian con la inflación, los tipos de cambio y las condiciones locales. Si planeas vivir en algún lugar, recomendamos verificar Numbeo, estadísticas oficiales del gobierno y comunidades de expatriados para la información más reciente.",
      },
      {
        q: "¿Cómo obtengo una visa de estancia mensual?",
        a: "Los países ofrecen varias opciones: visas de turismo de largo plazo (30-90 días), visas de nómadas digitales, visas de larga estancia y más. Los titulares de pasaporte coreano pueden entrar a más de 140 países sin visa o con visa a la llegada, por lo que priorizar ciudades con baja carga de visa es una buena estrategia. Consulta el sitio web de la embajada de cada país para las últimas políticas de visa.",
      },
    ],
  },
};

// City data with native city names (Korean for East Asian cities, English for others).
// Country column resolved via countryNames per locale.
const cityData = [
  // Asia
  { city: "서울", region: "asia", rent: 1500000, food: 600000, transport: 130000, entertainment: 500000, utilities: 150000 },
  { city: "東京", region: "asia", rent: 1800000, food: 700000, transport: 90000, entertainment: 600000, utilities: 150000 },
  { city: "大阪", region: "asia", rent: 1200000, food: 650000, transport: 85000, entertainment: 500000, utilities: 130000 },
  { city: "台北", region: "asia", rent: 800000, food: 400000, transport: 40000, entertainment: 300000, utilities: 100000 },
  { city: "กรุงเทพฯ", region: "asia", rent: 700000, food: 350000, transport: 50000, entertainment: 400000, utilities: 120000 },
  { city: "Singapore", region: "asia", rent: 2500000, food: 800000, transport: 80000, entertainment: 700000, utilities: 150000 },
  { city: "호치민시", region: "asia", rent: 500000, food: 300000, transport: 30000, entertainment: 250000, utilities: 80000 },
  // North America
  { city: "필라델피아", region: "northAmerica", rent: 2000000, food: 900000, transport: 100000, entertainment: 600000, utilities: 200000 },
  { city: "뉴욕", region: "northAmerica", rent: 3500000, food: 1200000, transport: 130000, entertainment: 900000, utilities: 250000 },
  { city: "로스앤젤레스", region: "northAmerica", rent: 3000000, food: 1100000, transport: 120000, entertainment: 800000, utilities: 230000 },
  // Europe
  { city: "런던", region: "europe", rent: 2800000, food: 1000000, transport: 180000, entertainment: 700000, utilities: 180000 },
  { city: "파리", region: "europe", rent: 2500000, food: 1100000, transport: 75000, entertainment: 800000, utilities: 200000 },
  { city: "베를린", region: "europe", rent: 1500000, food: 800000, transport: 100000, entertainment: 500000, utilities: 150000 },
  { city: "마드리드", region: "europe", rent: 1200000, food: 700000, transport: 60000, entertainment: 500000, utilities: 130000 },
  { city: "바르셀로나", region: "europe", rent: 1300000, food: 700000, transport: 60000, entertainment: 550000, utilities: 130000 },
  // Oceania
  { city: "멜버른", region: "oceania", rent: 2000000, food: 900000, transport: 120000, entertainment: 600000, utilities: 150000 },
  { city: "시드니", region: "oceania", rent: 2300000, food: 950000, transport: 130000, entertainment: 650000, utilities: 160000 },
];

// Country names per locale for display
const countryNames: Record<Locale, Record<string, string>> = {
  ko: {
    "서울": "한국",
    "東京": "일본",
    "大阪": "일본",
    "台北": "대만",
    "กรุงเทพฯ": "태국",
    "Singapore": "싱가포르",
    "호치민시": "베트남",
    "필라델피아": "미국",
    "뉴욕": "미국",
    "로스앤젤레스": "미국",
    "런던": "영국",
    "파리": "프랑스",
    "베를린": "독일",
    "마드리드": "스페인",
    "바르셀로나": "스페인",
    "멜버른": "호주",
    "시드니": "호주",
  },
  en: {
    "서울": "South Korea",
    "東京": "Japan",
    "大阪": "Japan",
    "台北": "Taiwan",
    "กรุงเทพฯ": "Thailand",
    "Singapore": "Singapore",
    "호치민시": "Vietnam",
    "필라델피아": "USA",
    "뉴욕": "USA",
    "로스앤젤레스": "USA",
    "런던": "UK",
    "파리": "France",
    "베를린": "Germany",
    "마드리드": "Spain",
    "바르셀로나": "Spain",
    "멜버른": "Australia",
    "시드니": "Australia",
  },
  ja: {
    "서울": "韓国",
    "東京": "日本",
    "大阪": "日本",
    "台北": "台湾",
    "กรุงเทพฯ": "タイ",
    "Singapore": "シンガポール",
    "호치민시": "ベトナム",
    "필라델피아": "米国",
    "뉴욕": "米国",
    "로스앤젤레스": "米国",
    "런던": "英国",
    "파리": "フランス",
    "베를린": "ドイツ",
    "마드리드": "スペイン",
    "바르셀로나": "スペイン",
    "멜버른": "オーストラリア",
    "시드니": "オーストラリア",
  },
  es: {
    "서울": "Corea del Sur",
    "東京": "Japón",
    "大阪": "Japón",
    "台北": "Taiwán",
    "กรุงเทพฯ": "Tailandia",
    "Singapore": "Singapur",
    "호치민시": "Vietnam",
    "필라델피아": "EE. UU.",
    "뉴욕": "EE. UU.",
    "로스앤젤레스": "EE. UU.",
    "런던": "Reino Unido",
    "파리": "Francia",
    "베를린": "Alemania",
    "마드리드": "España",
    "바르셀로나": "España",
    "멜버른": "Australia",
    "시드니": "Australia",
  },
};

export default async function CityLivingCostPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Tools");
  const lang = locale as Locale;
  const d = i18n[lang];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.explanation.split("\n\n")[0],
            applicationCategory: "TravelApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <CityLivingCost d={d} countryNames={countryNames[lang]} lang={lang} />

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyCalculator}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.explanation}</p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {faq.q}
                </p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
