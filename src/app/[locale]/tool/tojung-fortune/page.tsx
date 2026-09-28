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
  calculate: string;
  result: string;
  fortune: string;
  luckyColor: string;
  luckyItem: string;
  caution: string;
  whyTojung: string;
  tojungExplanation: string;
  limitations: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}> = {
  ko: {
    title: "2026 토정비결 신년운세",
    subtitle: "생년월일로 풀어보는 2026년 새해 운세",
    inputs: "생정보 입력",
    year: "출생년도",
    month: "출생월",
    day: "출생일",
    calculate: "2026 운세 풀이",
    result: "2026년 토정비결 운세",
    fortune: "운세",
    luckyColor: "행운의 색상",
    luckyItem: "행운의 물품",
    caution: "주의사항",
    whyTojung: "토정비결이 무엇인가요?",
    tojungExplanation:
      "토정비결은 조선 시대 암송 이암(李巖)이 지었다 전해지는 점성서로, 생년월일(음력)으로 운명을 풀이하는 전통 명리학의 한 분야입니다.\n\n2026년은 불원(丙午)년으로, 불(火)의 기운이 강한 해입니다. 토정비결은 생간(生干)의 오행 관계로 해운을 보며, 참고용 성향 분석과 운세 안내에 활용합니다.\n\n이 도구는 전통 알고리즘으로 간단한 간지 계산을 수행하며, 과학적으로 입증된 진단이 아닙니다.",
    limitations: "토정비결 운세는 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    disclaimer: "이 토정비결 풀이는 전통 명리학 알고리즘을 기반으로 한 참고용이며, 의학적·금융적·의학적 진단이 아닙니다. 참고용 목적으로만 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "토정비결 운세 계산은 브라우저에서 처리됩니다.",
    faq: [
      {
        q: "토정비결이 정확하다고 믿어야 하나요?",
        a: "토정비결은 재미와 자기 성찰의 참고용 도구입니다. 과학적으로 입증된 진단이 아니며, 한 해의 시작을 응원하는 마음으로 즐기세요.",
      },
      {
        q: "음력과 양력 중 무엇을 사용하나요?",
        a: "전통 토정비결은 음력(음력)을 사용합니다. 이 도구에서는 생년월일을 간지 계산에 적용합니다.",
      },
      {
        q: "2026년 불원(丙午)년의 특징은?",
        a: "불원(丙午)년은 불(火)의 기운이 강한 해로, 열정과 활동력이 강조되는 해입니다. 다만 개인별 생간(生干)에 따라 운세가 달라집니다.",
      },
    ],
  },
  en: {
    title: "2026 Tojung Fortune",
    subtitle: "Discover your 2026 New Year fortune by birth date",
    inputs: "Birth Information",
    year: "Birth Year",
    month: "Birth Month",
    day: "Birth Day",
    calculate: "2026 Fortune",
    result: "2026 Tojung Fortune",
    fortune: "Fortune",
    luckyColor: "Lucky Color",
    luckyItem: "Lucky Item",
    caution: "Precautions",
    whyTojung: "What is Tojung Bigyul?",
    tojungExplanation:
      "Tojung Bigyul (토정비결) is a traditional Korean fortune-telling text attributed to Yi Am (李巖), a hermit scholar of the Joseon Dynasty. It interprets destiny using birth year, month, and day (lunar calendar) as eight stem-branch characters.\n\n2026 is the year of Byulwon (丙午), a year with strong Fire energy. Tojung Bigyul examines the Five Elements relationship between your birth stem and the year stem for yearly fortune guidance.\n\nThis tool uses a traditional algorithm for simple stem-branch calculations and is not a scientifically proven diagnosis.",
    limitations: "Tojung fortune is for reference only and is not a scientifically proven diagnosis.",
    disclaimer: "This Tojung Bigyul reading is based on traditional Korean astrology algorithms and is for reference purposes only. It is not a medical, financial, or professional diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Tojung fortune calculation is processed in your browser.",
    faq: [
      {
        q: "Should I take Tojung Bigyul seriously?",
        a: "Tojung Bigyul is a reference tool for fun and self-reflection. It is not scientifically proven. Enjoy it as a way to cheer on the new year.",
      },
      {
        q: "Does it use lunar or solar calendar?",
        a: "Traditional Tojung Bigyul uses the lunar calendar. This tool applies your birth date to stem-branch calculations.",
      },
      {
        q: "What are the characteristics of 2026 Byulwon (丙午)?",
        a: "Byulwon (丙午) is a year with strong Fire energy, emphasizing passion and activity. However, fortune varies by individual birth stem.",
      },
    ],
  },
  ja: {
    title: "2026年 トジョンビギョル新年運勢",
    subtitle: "生年月日で占う2026年の新年運勢",
    inputs: "生情報入力",
    year: "出生年",
    month: "出生月",
    day: "出生日",
    calculate: "2026年 運勢を占う",
    result: "2026年 トジョンビギョル運勢",
    fortune: "運勢",
    luckyColor: "行運のカラー",
    luckyItem: "行運のアイテム",
    caution: "注意事項",
    whyTojung: "トジョンビギョルとは何ですか？",
    tojungExplanation:
      "トジョンビギョルは、朝鮮時代の李巖（イ・アム）が著したと伝わる占い書で、生年月日（旧暦）から運命を占う伝統命理学の一分野です。\n\n2026年は丙午（へいご）年で、火の気運が強い年です。トジョンビギョルは生まれた干（かん）の五行関係で運勢を見て、参考用の傾向分析や運勢案内に活用します。\n\nこのツールは伝統的なアルゴリズムで簡単な干支計算を行うもので、科学的に立証された診断ではありません。",
    limitations: "トジョンビギョルの運勢は参考用であり、科学的に立証された診断ではありません。",
    disclaimer: "このトジョンビギョル占いは伝統命理学アルゴリズムに基づく参考用であり、医学的・金融的な診断ではありません。参考用としてのみご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "トジョンビギョル運勢の計算はブラウザで処理されます。",
    faq: [
      {
        q: "トジョンビギョルは信じるべきですか？",
        a: "トジョンビギョルは楽しみと自己省察のための参考用ツールです。科学的に立証された診断ではなく、一年の始まりを応援する気持ちで楽しんでください。",
      },
      {
        q: "旧暦と新暦のどちらを使いますか？",
        a: "伝統的なトジョンビギョルは旧暦を使用します。このツールでは生年月日を干支計算に適用します。",
      },
      {
        q: "2026年 丙午年の特徴は？",
        a: "丙午年は火の気運が強い年で、情熱と活動力が強調される年です。ただし個人の生まれた干によって運勢は異なります。",
      },
    ],
  },
  es: {
    title: "Predicción Tojung 2026",
    subtitle: "Descubre tu fortuna del año nuevo 2026 por fecha de nacimiento",
    inputs: "Información de nacimiento",
    year: "Año de nacimiento",
    month: "Mes de nacimiento",
    day: "Día de nacimiento",
    calculate: "Fortuna 2026",
    result: "Fortuna Tojung 2026",
    fortune: "Fortuna",
    luckyColor: "Color de la suerte",
    luckyItem: "Objeto de la suerte",
    caution: "Precauciones",
    whyTojung: "¿Qué es Tojung Bigyul?",
    tojungExplanation:
      "Tojung Bigyul (토정비결) es un texto tradicional coreano de adivinación atribuido a Yi Am (李巖), un ermitaño erudito de la Dinastía Joseon. Interpreta el destino usando el año, mes y día de nacimiento (calendario lunar) como ocho caracteres de tronco-rama.\n\n2026 es el año de Byulwon (丙午), un año con fuerte energía de Fuego. Tojung Bigyul examina la relación de los Cinco Elementos entre tu tronco de nacimiento y el tronco del año para orientación de fortuna anual.\n\nEsta herramienta usa un algoritmo tradicional para cálculos simples de tronco-rama y no es un diagnóstico científicamente probado.",
    limitations: "La fortuna Tojung es solo para referencia, no es un diagnóstico científicamente probado.",
    disclaimer: "Esta lectura de Tojung Bigyul se basa en algoritmos tradicionales de astrología coreana y es solo para fines de referencia. No es un diagnóstico médico, financiero o profesional.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de Tojung fortune se procesa en tu navegador.",
    faq: [
      {
        q: "¿Debo tomarme Tojung Bigyul en serio?",
        a: "Tojung Bigyul es una herramienta de referencia para diversión y autorreflexión. No está científicamente comprobado. DisfrútalO como una forma de animar el nuevo año.",
      },
      {
        q: "¿Usa calendario lunar o solar?",
        a: "Tojung Bigyul tradicional usa el calendario lunar. Esta herramienta aplica tu fecha de nacimiento a cálculos de tronco-rama.",
      },
      {
        q: "¿Cuáles son las características de 2026 Byulwon (丙午)?",
        a: "Byulwon (丙午) es un año con fuerte energía de Fuego, enfatizando pasión y actividad. Sin embargo, la fortuna varía por el tronco de nacimiento individual.",
      },
    ],
  },
};

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
      languages: languageAlternates("/tool/tojung-fortune"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/tojung-fortune`,
    },
  };
}

export default async function TojungFortunePage({
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

      <div className="mt-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              {d.processingMsg}
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyTojung}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.tojungExplanation}</p>
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
