import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SITE_URL, languageAlternates } from "@/lib/seo";

type Locale = "ko" | "en" | "ja" | "es";

interface FAQ {
  q: string;
  a: string;
}

const data: Record<Locale, {
  title: string;
  subtitle: string;
  inputs: string;
  year: string;
  month: string;
  day: string;
  hour: string;
  calculate: string;
  result: string;
  dayMaster: string;
  fourPillars: string;
  fiveElements: string;
  whySaju: string;
  sajuExplanation: string;
  limitations: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
  branches: string[];
  stems: string[];
  elements: string[];
}> = {
  ko: {
    title: "정통 사주풀이",
    subtitle: "생년월시(生年月上時)로 사주팔자(四柱八字)를 계산합니다",
    inputs: "생정보 입력",
    year: "년도 (예: 1990)",
    month: "월 (1-12)",
    day: "일 (1-31)",
    hour: "출생 시각 (24시간제)",
    calculate: "사주 풀이",
    result: "사주팔자 결과",
    dayMaster: "일주 (Day Master)",
    fourPillars: "사주팔자 (四柱八字)",
    fiveElements: "오행(五行) 비율",
    whySaju: "왜 사주풀이가 필요한가요?",
    sajuExplanation:
      "사주팔자는 태어난 연·월·일·시(生年月上時)를 간지(干支) 여덟 글자로 표현한 것입니다. 일주(日柱)의 천간(天干) 오행을 본인이며, 오행(목·화·토·금·수)의 균형으로 성향과 강약을 봅니다.\n\n이 도구는 전통 만세력(萬年曆) 알고리즘으로 간지를 계산하며, 참고용 성향 분석입니다. 사주는 한 가지 관점일 뿐, 인생의 모든 것을 결정하지 않습니다.",
    limitations: "사주풀이는 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    disclaimer: "이 사주풀이는 전통 명리학 알고리즘을 기반으로 한 참고용이며, 의학적·금융적·의학적 진단이 아닙니다. 참고용 목적으로만 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "사주팔자 계산은 브라우저에서 처리됩니다.",
    faq: [
      {
        q: "사주풀이가 정확하다고 믿어야 하나요?",
        a: "사주는 한 가지 관점에서 자신을 돌아보는 참고용 도구입니다. 과학적으로 입증된 진단이 아니며, 재미와 자기 성찰의 도구로 즐기세요.",
      },
      {
        q: "출생 시각을 모르면 어떻게 하나요?",
        a: "시(時)를 모르면 사주의 3柱(연·월·일)만 볼 수 있습니다. 정확한 사주를 위해서는 출생 시각이 필요합니다. 대략적인 시간만 알려줘도 큰 도움이 됩니다.",
      },
      {
        q: "간지(干支)는 어떻게 계산하나요?",
        a: "이 도구는 전통 만세력(萬年曆) 알고리즘을 사용합니다. 연지는 입춘(2월 4일경)을 경계로 나뉘고, 월지는 절기(節氣)를 기준으로 합니다.",
      },
    ],
    branches: ["자(子)", "축(丑)", "인(寅)", "묘(卯)", "진(辰)", "사(巳)", "오(午)", "미(未)", "신(申)", "유(酉)", "술(戌)", "해(亥)"],
    stems: ["갑(甲)", "을(乙)", "병(丙)", "정(丁)", "무(戊)", "기(己)", "경(庚)", "신(辛)", "임(壬)", "계(癸)"],
    elements: ["목(木)", "화(火)", "토(土)", "금(金)", "수(水)"],
  },
  en: {
    title: "Traditional Saju (Four Pillars)",
    subtitle: "Calculate your Four Pillars from birth year, month, day, and hour",
    inputs: "Birth Information",
    year: "Year (e.g., 1990)",
    month: "Month (1-12)",
    day: "Day (1-31)",
    hour: "Birth Hour (24-hour)",
    calculate: "Calculate Saju",
    result: "Four Pillars Result",
    dayMaster: "Day Master (日主)",
    fourPillars: "Four Pillars (四柱八字)",
    fiveElements: "Five Elements Ratio",
    whySaju: "Why explore Saju?",
    sajuExplanation:
      "Saju (사주) expresses your birth year, month, day, and hour as eight Chinese character strokes (干支). The Day Master (日主) represents you, and the balance of Five Elements (Wood, Fire, Earth, Metal, Water) reveals personality traits and tendencies.\n\nThis tool uses a traditional calendar algorithm to calculate the stems and branches for reference. Saju is one perspective, not a determinant of your fate.",
    limitations: "Saju is for reference only and is not a scientifically proven diagnosis.",
    disclaimer: "This Saju reading is based on traditional Korean astrology algorithms and is for reference purposes only. It is not a medical, financial, or professional diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Saju calculation is processed in your browser.",
    faq: [
      {
        q: "Should I take Saju seriously?",
        a: "Saju is a reference tool for self-reflection. It is not scientifically proven. Enjoy it as a fun way to explore your personality.",
      },
      {
        q: "What if I don't know my birth hour?",
        a: "Without the hour pillar, you can only see the Three Pillars (year, month, day). For a complete reading, the birth hour is needed. An approximate time still helps.",
      },
      {
        q: "How are the stems and branches calculated?",
        a: "This tool uses a traditional calendar algorithm. The year branch changes around立春 (Feb 4), and the month branch follows solar terms.",
      },
    ],
    branches: ["Rat (子)", "Ox (丑)", "Tiger (寅)", "Rabbit (卯)", "Dragon (辰)", "Snake (巳)", "Horse (午)", "Goat (未)", "Monkey (申)", "Rooster (酉)", "Dog (戌)", "Pig (亥)"],
    stems: ["Jia (甲)", "Yi (乙)", "Bing (丙)", "Ding (丁)", "Wu (戊)", "Ji (己)", "Geng (庚)", "Xin (辛)", "Ren (壬)", "Gui (癸)"],
    elements: ["Wood (木)", "Fire (火)", "Earth (土)", "Metal (金)", "Water (水)"],
  },
  ja: {
    title: "正統サジュー（四柱推命）",
    subtitle: "生年月日時で四柱八字を計算します",
    inputs: "生情報入力",
    year: "年（例：1990）",
    month: "月（1-12）",
    day: "日（1-31）",
    hour: "出生時刻（24時間制）",
    calculate: "サジューを解く",
    result: "四柱八字の結果",
    dayMaster: "日主（Day Master）",
    fourPillars: "四柱八字（四柱八字）",
    fiveElements: "五行（木火土金水）比率",
    whySaju: "なぜサジューを学ぶのか？",
    sajuExplanation:
      "サジュー（四柱推命）は、生まれた年・月・日・時を干支（かんし）の8文字で表したものです。日主（日柱の天干）が自分自身を表し、五行（木・火・土・金・水）のバランスで性格や傾向を見ます。\n\nこのツールは伝統的な萬年暦アルゴリズムで干支を計算します。参考用の性格分析です。サジューは一つの視点であり、人生の全てを決定するものではありません。",
    limitations: "サジューは参考用であり、科学的に証明された診断ではありません。",
    disclaimer: "このサジューは伝統的な韓国命理アルゴリズムに基づく参考用であり、医学的・金融的な診断ではありません。参考目的でのみご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "四柱推命の計算はブラウザで処理されます。",
    faq: [
      {
        q: "サジューを本物として信じるべきですか？",
        a: "サジューは自己省察のための参考ツールです。科学的に証明された診断ではありません。楽しみとして性格を探るツールとして楽しんでください。",
      },
      {
        q: "出生時刻がわからない場合はどうすれば？",
        a: "時柱がわからないと、三柱（年・月・日）しか見えません。正確なサジューには出生時刻が必要です。おおよその時間でも役立ちます。",
      },
      {
        q: "干支はどのように計算されますか？",
        a: "このツールは伝統的な萬年暦アルゴリズムを使用します。年の干支は立春（2月4日頃）を境に変わり、月の干支は節気に基づきます。",
      },
    ],
    branches: ["子(ね)", "丑(うし)", "寅(とら)", "卯(う)", "辰(たつ)", "巳(み)", "午(うま)", "未(ひつじ)", "申(さる)", "酉(とり)", "戌(いぬ)", "亥(い)"],
    stems: ["甲(こう)", "乙(おつ)", "丙(へい)", "丁(てい)", "戊(ぼ)", "己(き)", "庚(こう)", "辛(しん)", "壬(じん)", "癸(き)"],
    elements: ["木(もく)", "火(か)", "土(つち)", "金(きん)", "水(みず)"],
  },
  es: {
    title: "Saju Tradicional (Cuatro Pilares)",
    subtitle: "Calcula tus Cuatro Pilares a partir del año, mes, día y hora de nacimiento",
    inputs: "Información de nacimiento",
    year: "Año (ej., 1990)",
    month: "Mes (1-12)",
    day: "Día (1-31)",
    hour: "Hora de nacimiento (24h)",
    calculate: "Calcular Saju",
    result: "Resultado de los Cuatro Pilares",
    dayMaster: "Dominante del Día (日主)",
    fourPillars: "Cuatro Pilares (四柱八字)",
    fiveElements: "Proporción de los Cinco Elementos",
    whySaju: "¿Por qué explorar el Saju?",
    sajuExplanation:
      "El Saju (사주) expresa tu año, mes, día y hora de nacimiento como ocho caracteres de los troncos y ramas. El Dominante del Día (日主) te representa a ti, y el equilibrio de los Cinco Elementos (Madera, Fuego, Tierra, Metal, Agua) revela rasgos de personalidad y tendencias.\n\nEsta herramienta usa un algoritmo de calendario tradicional para calcular los troncos y ramas con fines de referencia. El Saju es una perspectiva, no un determinante de tu destino.",
    limitations: "El Saju es solo para referencia, no es un diagnóstico científicamente probado.",
    disclaimer: "Esta lectura de Saju se basa en algoritmos tradicionales de astrología coreana y es solo para fines de referencia. No es un diagnóstico médico, financiero o profesional.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de Saju se procesa en tu navegador.",
    faq: [
      {
        q: "¿Debo tomarme el Saju en serio?",
        a: "El Saju es una herramienta de referencia para la reflexión personal. No está científicamente comprobado. Disfrútalo como una forma divertida de explorar tu personalidad.",
      },
      {
        q: "¿Qué pasa si no sé mi hora de nacimiento?",
        a: "Sin la hora, solo puedes ver los Tres Pilares (año, mes, día). Para una lectura completa, se necesita la hora de nacimiento. Una hora aproximada también ayuda.",
      },
      {
        q: "¿Cómo se calculan los troncos y ramas?",
        a: "Esta herramienta usa un algoritmo de calendario tradicional. La rama del año cambia alrededor del 4 de febrero, y la rama del mes sigue los trópicos solares.",
      },
    ],
    branches: ["Rata (子)", "Buey (丑)", "Tigre (寅)", "Conejo (卯)", "Dragón (辰)", "Serpiente (巳)", "Caballo (午)", "Cabra (未)", "Mono (申)", "Gallo (酉)", "Perro (戌)", "Cerdo (亥)"],
    stems: ["Jia (甲)", "Yi (乙)", "Bing (丙)", "Ding (丁)", "Wu (戊)", "Ji (己)", "Geng (庚)", "Xin (辛)", "Ren (壬)", "Gui (癸)"],
    elements: ["Madera (木)", "Fuego (火)", "Tierra (土)", "Metal (金)", "Agua (水)"],
  },
};

/* ---------- client: saju algorithm + interactive UI ---------- */
function SajuCalculator({ processingMsg }: { processingMsg: string }) {
  return (
    <div className="mt-8">
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            {processingMsg}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/saju-pool"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/saju-pool`,
    },
  };
}

export default async function SajuPoolPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Tools");
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;

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

      <SajuCalculator processingMsg={d.processingMsg} />

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whySaju}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.sajuExplanation}</p>
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
