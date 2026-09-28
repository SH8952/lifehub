import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SITE_URL, languageAlternates } from "@/lib/seo";

type Locale = "ko" | "en" | "ja" | "es";

const pageMeta: Record<Locale, { title: string; description: string }> = {
  ko: { title: "나의 별자리 찾기", description: "생일을 선택하여 나의 별자리를 확인하세요" },
  en: { title: "Find My Zodiac Sign", description: "Select your birthday to discover your zodiac sign" },
  ja: { title: "自分の星座を見つける", description: "生年月日を選択して自分の星座を確認しましょう" },
  es: { title: "Descubre Mi Signo Zodiacal", description: "Selecciona tu cumpleaños para descubrir tu signo zodiacal" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const m = pageMeta[lang];
  const title = `${m.title} | LifeHub`;
  return {
    title,
    description: m.description,
    alternates: {
      languages: languageAlternates("/tool/zodiac-finder"),
    },
    openGraph: {
      title,
      description: m.description,
      url: `${SITE_URL}/${locale}/tool/zodiac-finder`,
    },
  };
}

interface ZodiacEntry {
  sign: string;
  emoji: string;
  dateRange: string;
  element: string;
  description: string;
}

const zodiacSigns: Record<Locale, ZodiacEntry[]> = {
  ko: [
    { sign: "물병자리", emoji: "♒", dateRange: "1월 20일 ~ 2월 18일", element: "공기", description: "독창적이고 혁신적인 사고를 가진 자유로운 영혼입니다." },
    { sign: "물고기자리", emoji: "♓", dateRange: "2월 19일 ~ 3월 20일", element: "물", description: "감수성이 풍부하고 예술적인 재능을 가진 직관적인 사람입니다." },
    { sign: "양자리", emoji: "♈", dateRange: "3월 21일 ~ 4월 19일", element: "불", description: "용감하고 리더십이 강한 선구자적인 성격을 가졌습니다." },
    { sign: "황소자리", emoji: "♉", dateRange: "4월 20일 ~ 5월 20일", element: "흙", description: "안정성을 중시하고 끈기와 인내심이 강한 사람입니다." },
    { sign: "쌍둥이자리", emoji: "♊", dateRange: "5월 21일 ~ 6월 21일", element: "공기", description: "호기심이 많고 대화 능력을 가진 다재다능한 커뮤니케이터입니다." },
    { sign: "게자리", emoji: "♋", dateRange: "6월 22일 ~ 7월 22일", element: "물", description: "감정적이고 가족을 중시하는 보호본능이 강한 사람입니다." },
    { sign: "사자자리", emoji: "♌", dateRange: "7월 23일 ~ 8월 22일", element: "불", description: "창조력과 자부심이 강한 자연적인 리더입니다." },
    { sign: "처녀자리", emoji: "♍", dateRange: "8월 23일 ~ 9월 22일", element: "흙", description: "꼼꼼하고 분석적인 능력을 가진 완벽주의자입니다." },
    { sign: "천칭자리", emoji: "♎", dateRange: "9월 23일 ~ 10월 23일", element: "공기", description: "조화와 균형을 추구하는 외교적이며 판단력이 뛰어난 사람입니다." },
    { sign: "전갈자리", emoji: "♏", dateRange: "10월 24일 ~ 11월 21일", element: "물", description: "강한 의지와 통찰력을 가진 집중력 높은 사람입니다." },
    { sign: "궁수자리", emoji: "♐", dateRange: "11월 22일 ~ 12월 21일", element: "불", description: "자유를 사랑하고 모험심 강한 낙관적인 탐험가입니다." },
    { sign: "염소자리", emoji: "♑", dateRange: "12월 22일 ~ 1월 19일", element: "흙", description: "인내심 있고 책임감이 강한 야망적인 성격을 가졌습니다." },
  ],
  en: [
    { sign: "Aquarius", emoji: "♒", dateRange: "Jan 20 - Feb 18", element: "Air", description: "A free spirit with original and innovative thinking." },
    { sign: "Pisces", emoji: "♓", dateRange: "Feb 19 - Mar 20", element: "Water", description: "An intuitive person with rich sensitivity and artistic talent." },
    { sign: "Aries", emoji: "♈", dateRange: "Mar 21 - Apr 19", element: "Fire", description: "A pioneering personality with courage and strong leadership." },
    { sign: "Taurus", emoji: "♉", dateRange: "Apr 20 - May 20", element: "Earth", description: "A person who values stability with strong perseverance and patience." },
    { sign: "Gemini", emoji: "♊", dateRange: "May 21 - Jun 21", element: "Air", description: "A versatile communicator with curiosity and conversation skills." },
    { sign: "Cancer", emoji: "♋", dateRange: "Jun 22 - Jul 22", element: "Water", description: "An emotional person who values family with strong protective instincts." },
    { sign: "Leo", emoji: "♌", dateRange: "Jul 23 - Aug 22", element: "Fire", description: "A natural leader with creativity and strong self-confidence." },
    { sign: "Virgo", emoji: "♍", dateRange: "Aug 23 - Sep 22", element: "Earth", description: "A perfectionist with meticulous and analytical abilities." },
    { sign: "Libra", emoji: "♎", dateRange: "Sep 23 - Oct 23", element: "Air", description: "A diplomatic person with strong judgment who pursues harmony and balance." },
    { sign: "Scorpio", emoji: "♏", dateRange: "Oct 24 - Nov 21", element: "Water", description: "A person with strong willpower and insight, highly focused." },
    { sign: "Sagittarius", emoji: "♐", dateRange: "Nov 22 - Dec 21", element: "Fire", description: "An optimistic adventurer who loves freedom and has a strong sense of exploration." },
    { sign: "Capricorn", emoji: "♑", dateRange: "Dec 22 - Jan 19", element: "Earth", description: "A person with patience and responsibility, ambitious in nature." },
  ],
  ja: [
    { sign: "みずがめ座", emoji: "♒", dateRange: "1月20日 ~ 2月18日", element: "空気", description: "独創的で革新的な思考を持つ自由な魂です。" },
    { sign: "うお座", emoji: "♓", dateRange: "2月19日 ~ 3月20日", element: "水", description: "感受性が豊かで芸術的な才能を持つ直感的な人です。" },
    { sign: "おひつじ座", emoji: "♈", dateRange: "3月21日 ~ 4月19日", element: "火", description: "勇気がありリーダーシップが強い先駆者的な性格を持っています。" },
    { sign: "おうし座", emoji: "♉", dateRange: "4月20日 ~ 5月20日", element: "土", description: "安定性を重視し、粘強さと忍耐が強い人です。" },
    { sign: "ふたご座", emoji: "♊", dateRange: "5月21日 ~ 6月21日", element: "空気", description: "好奇心が強く、会話能力を持つ多才なコミュニケーションターです。" },
    { sign: "かに座", emoji: "♋", dateRange: "6月22日 ~ 7月22日", element: "水", description: "感情的で家族を重視する保護本能の強い人です。" },
    { sign: "しし座", emoji: "♌", dateRange: "7月23日 ~ 8月22日", element: "火", description: "創造力と自負心の強い自然なリーダーです。" },
    { sign: "おとめ座", emoji: "♍", dateRange: "8月23日 ~ 9月22日", element: "土", description: "丹念で分析的な能力を持つ完璧主義者です。" },
    { sign: "てんびん座", emoji: "♎", dateRange: "9月23日 ~ 10月23日", element: "空気", description: "調和と均衡を追求する外交的で判断力の優れた人です。" },
    { sign: "さそり座", emoji: "♏", dateRange: "10月24日 ~ 11月21日", element: "水", description: "強い意志力と洞察力を持つ集中力の高い人です。" },
    { sign: "いて座", emoji: "♐", dateRange: "11月22日 ~ 12月21日", element: "火", description: "自由を愛し冒険心強い楽観的な探検家です。" },
    { sign: "やぎ座", emoji: "♑", dateRange: "12月22日 ~ 1月19日", element: "土", description: "忍耐強く責任感が強い野心的な性格を持っています。" },
  ],
  es: [
    { sign: "Acuario", emoji: "♒", dateRange: "20 ene - 18 feb", element: "Aire", description: "Un espíritu libre con pensamiento original e innovador." },
    { sign: "Piscis", emoji: "♓", dateRange: "19 feb - 20 mar", element: "Agua", description: "Una persona intuitiva con sensibilidad rica y talento artístico." },
    { sign: "Aries", emoji: "♈", dateRange: "21 mar - 19 abr", element: "Fuego", description: "Una personalidad pionera con coraje y fuerte liderazgo." },
    { sign: "Tauro", emoji: "♉", dateRange: "20 abr - 20 may", element: "Tierra", description: "Una persona que valora la estabilidad con perseverancia y paciencia." },
    { sign: "Géminis", emoji: "♊", dateRange: "21 may - 21 jun", element: "Aire", description: "Un comunicador versátil con curiosidad y habilidades de conversación." },
    { sign: "Cáncer", emoji: "♋", dateRange: "22 jun - 22 jul", element: "Agua", description: "Una persona emocional que valora la familia con fuertes instintos protectores." },
    { sign: "Leo", emoji: "♌", dateRange: "23 jul - 22 ago", element: "Fuego", description: "Un líder natural con creatividad y fuerte confianza en sí mismo." },
    { sign: "Virgo", emoji: "♍", dateRange: "23 ago - 22 sep", element: "Tierra", description: "Un perfeccionista con habilidades meticulosas y analíticas." },
    { sign: "Libra", emoji: "♎", dateRange: "23 sep - 23 oct", element: "Aire", description: "Una persona diplomática con buen juicio que busca armonía y equilibrio." },
    { sign: "Escorpio", emoji: "♏", dateRange: "24 oct - 21 nov", element: "Agua", description: "Una persona con fuerte voluntad e intuición, muy enfocada." },
    { sign: "Sagitario", emoji: "♐", dateRange: "22 nov - 21 dic", element: "Fuego", description: "Un aventurero optimista que ama la libertad y tiene espíritu explorador." },
    { sign: "Capricornio", emoji: "♑", dateRange: "22 dic - 19 ene", element: "Tierra", description: "Una persona paciente y responsable, con naturaleza ambiciosa." },
  ],
};

const getElementName = (locale: Locale, element: string): string => {
  const map: Record<Locale, Record<string, string>> = {
    ko: { 공기: "공기", 물: "물", 불: "불", 흙: "흙" },
    en: { Air: "Air", Water: "Water", Fire: "Fire", Earth: "Earth" },
    ja: { "空気": "空気", "水": "水", "火": "火", "土": "土" },
    es: { Aire: "Aire", Agua: "Agua", Fuego: "Fuego", Tierra: "Tierra" },
  };
  return map[locale][element] || element;
};

export default async function ZodiacFinderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Tools");
  const lang = locale as Locale;
  const signs = zodiacSigns[lang];

  const ko = {
    title: "나의 별자리 찾기",
    subtitle: "생일을 선택하여 나의 별자리를 확인하세요",
    selectBirthday: "생일 선택",
    monthLabel: "월",
    dayLabel: "일",
    processingMsg: "별자리 계산은 브라우저에서 처리됩니다.",
    find: "별자리 찾기",
    result: "나의 별자리",
    element: "오행",
    whyZodiac: "왜 내 별자리를 알아야 하나요?",
    zodiacExplanation:
      "별자리는 태어난 날짜에 따라 결정되는 12가지 유형 중 하나로, 성격과 성향을 이해하는 재미있는 도구입니다.\n\n생일을 선택하면 당신의 별자리, 오행(속성), 그리고 간단한 성격 설명을 제공합니다.\n\n이 도구는 재미와 자기 성찰을 위한 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    limitations: "별자리 정보는 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    disclaimer: "이 별자리 찾기는 재미와 자기 성찰을 위한 참고용이며, 의학적·금융적·의학적 진단이 아닙니다. 참고용 목적으로만 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "별자리가 과학적으로 증명되었나요?",
        a: "별자리는 과학적으로 입증된 진단이 아닙니다. 재미와 자기 성찰을 위한 참고용 도구로 즐기세요.",
      },
      {
        q: "경계일에 태어났는데 어느 별자리인가요?",
        a: "경계일은 별자리가 바뀌는 시기입니다. 정확한 날짜는 천문연도에 따라 다를 수 있으니, 대부분의 표준 별자리표에 따르면 확인하세요.",
      },
      {
        q: "오행(속성)이 뭐예요?",
        a: "오행은 별자리의 기본 에너지 속성입니다. 불(열정), 공기(사고), 물(감정), 흙(안정)의 네 가지가 있습니다.",
      },
    ],
  };

  const en = {
    title: "Find My Zodiac Sign",
    subtitle: "Select your birthday to discover your zodiac sign",
    selectBirthday: "Select Birthday",
    monthLabel: "Month",
    dayLabel: "Day",
    processingMsg: "Zodiac calculation is processed in your browser.",
    find: "Find My Sign",
    result: "My Zodiac Sign",
    element: "Element",
    whyZodiac: "Why know your zodiac sign?",
    zodiacExplanation:
      "Your zodiac sign is one of 12 types determined by your birth date. It's a fun way to understand personality and tendencies.\n\nSelect your birthday and we'll show your zodiac sign, element, and a brief personality description.\n\nThis tool is for fun and self-reflection. It is not a scientifically proven diagnosis.",
    limitations: "Zodiac information is for reference only and is not a scientifically proven diagnosis.",
    disclaimer: "This zodiac finder is for fun and self-reflection purposes only. It is not a medical, financial, or professional diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "Are zodiac signs scientifically proven?",
        a: "Zodiac signs are not scientifically proven diagnoses. Enjoy them as a fun tool for self-reflection.",
      },
      {
        q: "I was born on a boundary date. Which sign am I?",
        a: "Boundary dates are when signs change. The exact date may vary by year, so check against most standard zodiac charts.",
      },
      {
        q: "What are the elements?",
        a: "Elements are the basic energy types of zodiac signs. There are four: Fire (passion), Air (thought), Water (emotion), and Earth (stability).",
      },
    ],
  };

  const ja = {
    title: "自分の星座を見つける",
    subtitle: "生年月日を選択して自分の星座を確認しましょう",
    selectBirthday: "生年月日を選択",
    monthLabel: "月",
    dayLabel: "日",
    processingMsg: "星座計算はブラウザで処理されます。",
    find: "星座を探す",
    result: "自分の星座",
    element: "元素",
    whyZodiac: "なぜ自分の星座を知るのか？",
    zodiacExplanation:
      "星座は生まれた日付によって決まる12つのタイプの一つで、性格や傾向を理解する楽しいツールです。\n\n生年月日を選択すると、あなたの星座、元素（属性）、そして簡単な性格説明を表示します。\n\nこのツールは楽しみと自己省察のための参考用であり、科学的に証明された診断ではありません。",
    limitations: "星座情報は参考用であり、科学的に証明された診断ではありません。",
    disclaimer: "この星座探しは楽しみと自己省察のための参考用であり、医学的・金融的な診断ではありません。参考目的でのみご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "星座は科学的に証明されていますか？",
        a: "星座は科学的に証明された診断ではありません。楽しみと自己省察のための参考ツールとして楽しんでください。",
      },
      {
        q: "境界日に生まれました。どの星座ですか？",
        a: "境界日は星座が変わる時期です。正確な日付は年によって異なる場合があります。ほとんどの標準的な星座表に従って確認してください。",
      },
      {
        q: "元素（エレメント）とは何ですか？",
        a: "元素は星座の基本エネルギー属性です。火（情熱）、空気（思考）、水（感情）、土（安定）の4つがあります。",
      },
    ],
  };

  const es = {
    title: "Descubre Mi Signo Zodiacal",
    subtitle: "Selecciona tu cumpleaños para descubrir tu signo zodiacal",
    selectBirthday: "Selecciona Cumpleaños",
    monthLabel: "Mes",
    dayLabel: "Día",
    processingMsg: "El cálculo zodiacal se procesa en tu navegador.",
    find: "Descubrir Mi Signo",
    result: "Mi Signo Zodiacal",
    element: "Elemento",
    whyZodiac: "¿Por qué conocer tu signo zodiacal?",
    zodiacExplanation:
      "Tu signo zodiacal es uno de 12 tipos determinados por tu fecha de nacimiento. Es una forma divertida de entender la personalidad y las tendencias.\n\nSelecciona tu cumpleaños y te mostraremos tu signo zodiacal, elemento y una breve descripción de personalidad.\n\nEsta herramienta es para diversión y autorreflexión. No es un diagnóstico científicamente comprobado.",
    limitations: "La información zodiacal es solo para referencia, no es un diagnóstico científicamente comprobado.",
    disclaimer: "Este buscador zodiacal es solo para diversión y autorreflexión. No es un diagnóstico médico, financiero o profesional.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    faq: [
      {
        q: "¿Los signos zodiacales están científicamente comprobados?",
        a: "Los signos zodiacales no son diagnósticos científicamente comprobados. Disfrútalos como una herramienta divertida para la autorreflexión.",
      },
      {
        q: "Nací en una fecha límite. ¿Cuál es mi signo?",
        a: "Las fechas límite son cuando los signos cambian. La fecha exacta puede variar por año, así que verifica contra las tablas zodiacales estándar.",
      },
      {
        q: "¿Qué son los elementos?",
        a: "Los elementos son los tipos básicos de energía de los signos zodiacales. Hay cuatro: Fuego (pasión), Aire (pensamiento), Agua (emoción) y Tierra (estabilidad).",
      },
    ],
  };

  const d = { ko, en, ja, es }[lang];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.subtitle,
            applicationCategory: "Application",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="mt-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              {d.processingMsg}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <div
            key={month}
            className="flex items-center justify-center rounded-lg border p-3 text-center text-sm font-medium"
          >
            {month}{d.monthLabel}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-10 lg:grid-cols-12">
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className="flex items-center justify-center rounded-lg border p-2 text-center text-sm"
          >
            {day}{d.dayLabel}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => {
            const el = document.getElementById("zodiac-result");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className={buttonVariants({ size: "lg" })}
        >
          {d.find}
        </button>
      </div>

      <div id="zodiac-result" className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.result}</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((z, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{z.emoji}</span>
                  <div>
                    <p className="text-lg font-semibold">{z.sign}</p>
                    <p className="text-sm text-muted-foreground">{z.dateRange}</p>
                    <p className="text-sm font-medium text-primary">
                      {d.element}: {getElementName(lang, z.element)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {z.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyZodiac}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.zodiacExplanation}</p>
        <p className="mt-4 text-sm text-muted-foreground">{d.limitations}</p>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>

      <div className="mt-8">
        <a href={`/${locale}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
          &larr; {t("back")}
        </a>
      </div>
    </div>
  );
}
