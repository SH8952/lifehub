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
  person1: string;
  person2: string;
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  calculate: string;
  result: string;
  compatibility: string;
  compatibilityRate: string;
  strengths: string;
  challenges: string;
  advice: string;
  whyCompatibility: string;
  compatibilityExplanation: string;
  limitations: string;
  disclaimer: string;
  footer: string;
  faq: FAQ[];
  processingMsg: string;
}> = {
  ko: {
    title: "궁합 풀이",
    subtitle: "이름과 생년월일로 보는 두 사람의 궁합",
    person1: "첫 번째 사람",
    person2: "두 번째 사람",
    name: "이름",
    birthYear: "출생년도",
    birthMonth: "출생월",
    birthDay: "출생일",
    calculate: "궁합 풀이",
    result: "궁합 결과",
    compatibility: "궁합",
    compatibilityRate: "궁합 비율",
    strengths: "강점",
    challenges: "주의사항",
    advice: "조언",
    whyCompatibility: "왜 궁합을 보나요?",
    compatibilityExplanation:
      "궁합은 두 사람의 생년월일(간지)과 이름의 오행(五行) 관계를 분석하여 상호작용의 조화를 보는 전통입니다.\n\n오행(목·화·토·금·수)의 상생(相生)과 상극(相剋) 관계로 두 사람의 성향, 강점, 주의할 점을 참고로 살펴봅니다.\n\n이 도구는 전통 명리학 알고리즘을 기반으로 한 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    limitations: "궁합 풀이는 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    disclaimer: "이 궁합 풀이는 전통 명리학 알고리즘을 기반으로 한 참고용이며, 의학적·금융적·의학적 진단이 아닙니다. 참고용 목적으로만 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "궁합 계산은 브라우저에서 처리됩니다.",
    faq: [
      {
        q: "궁합이 중요하다고 믿어야 하나요?",
        a: "궁합은 두 사람의 관계를 돌아보는 참고용 도구입니다. 과학적으로 입증된 진단이 아니며, 관계의 시작을 응원하는 마음으로 즐기세요.",
      },
      {
        q: "어떤 기준으로 궁합을 보나요?",
        a: "전통적으로 생년월일의 간지(干支)와 오행(五行) 관계를 봅니다. 오행의 상생(相生)이 좋다고 여겨집니다.",
      },
      {
        q: "궁합이 낮게 나오면 어떻게 하나요?",
        a: "궁합은 한 가지 관점일 뿐입니다. 낮은 궁합도 서로 노력하고 이해하면 좋은 관계가 될 수 있습니다.",
      },
    ],
  },
  en: {
    title: "Compatibility Reading",
    subtitle: "Check compatibility between two people by name and birth date",
    person1: "Person 1",
    person2: "Person 2",
    name: "Name",
    birthYear: "Birth Year",
    birthMonth: "Birth Month",
    birthDay: "Birth Day",
    calculate: "Check Compatibility",
    result: "Compatibility Result",
    compatibility: "Compatibility",
    compatibilityRate: "Compatibility Rate",
    strengths: "Strengths",
    challenges: "Challenges",
    advice: "Advice",
    whyCompatibility: "Why check compatibility?",
    compatibilityExplanation:
      "Compatibility reading analyzes the Five Elements (Wood, Fire, Earth, Metal, Water) relationship between two people based on their birth stems and branches, as well as name elements.\n\nThe traditional approach looks at mutual generation (相生) and mutual restriction (相剋) patterns to understand personality dynamics, strengths, and areas of attention.\n\nThis tool uses traditional Korean astrology algorithms for reference. It is not a scientifically proven diagnosis.",
    limitations: "Compatibility reading is for reference only and is not a scientifically proven diagnosis.",
    disclaimer: "This compatibility reading is based on traditional Korean astrology algorithms and is for reference purposes only. It is not a medical, financial, or professional diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Compatibility calculation is processed in your browser.",
    faq: [
      {
        q: "Should I take compatibility seriously?",
        a: "Compatibility is a reference tool for reflecting on relationships. It is not scientifically proven. Enjoy it as a way to cheer on your relationships.",
      },
      {
        q: "What criteria are used for compatibility?",
        a: "Traditionally, the stem-branch (干支) and Five Elements (五行) relationship of birth dates is examined. Mutual generation (相生) is considered favorable.",
      },
      {
        q: "What if the compatibility score is low?",
        a: "Compatibility is just one perspective. Even with a lower score, relationships can be wonderful with effort and understanding.",
      },
    ],
  },
  ja: {
    title: "相性占い",
    subtitle: "名前と生年月日から二人の相性をチェック",
    person1: "最初の人物",
    person2: "2番目の人物",
    name: "名前",
    birthYear: "出生年",
    birthMonth: "出生月",
    birthDay: "出生日",
    calculate: "相性をチェック",
    result: "相性結果",
    compatibility: "相性",
    compatibilityRate: "相性率",
    strengths: "強み",
    challenges: "注意点",
    advice: "アドバイス",
    whyCompatibility: "なぜ相性を見るのか？",
    compatibilityExplanation:
      "相性は、二人の生年月日（干支）と名前の五行の関係を分析し、相互の調いを見る伝統です。\n\n五行（木・火・土・金・水）の相生と相剋の関係で、二人の性格、強み、注意点を参考に調べます。\n\nこのツールは伝統的な命理アルゴリズムに基づいた参考用であり、科学的に証明された診断ではありません。",
    limitations: "相性占い参考用であり、科学的に証明された診断ではありません。",
    disclaimer: "この相性占いは伝統的な命理アルゴリズムに基づいた参考用であり、医学的・金融的な診断ではありません。参考目的でのみご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "相性の計算はブラウザで処理されます。",
    faq: [
      {
        q: "相性を本物として信じるべきですか？",
        a: "相性は二人の関係を振り返る参考用ツールです。科学的に証明された診断ではありません。関係を応援する気持ちで楽しんでください。",
      },
      {
        q: "どのような基準で相性を見るのですか？",
        a: "伝統的に生年月日の干支と五行の関係を見ます。相生が良いとされています。",
      },
      {
        q: "相性が低く出たらどうすれば？",
        a: "相性は一つの視点です。低い相性でも互いに努力し理解すれば良い関係になれます。",
      },
    ],
  },
  es: {
    title: "Lectura de Compatibilidad",
    subtitle: "Verifica compatibilidad entre dos personas por nombre y fecha de nacimiento",
    person1: "Persona 1",
    person2: "Persona 2",
    name: "Nombre",
    birthYear: "Año de nacimiento",
    birthMonth: "Mes de nacimiento",
    birthDay: "Día de nacimiento",
    calculate: "Verificar Compatibilidad",
    result: "Resultado de Compatibilidad",
    compatibility: "Compatibilidad",
    compatibilityRate: "Tasa de Compatibilidad",
    strengths: "Fortalezas",
    challenges: "Desafíos",
    advice: "Consejo",
    whyCompatibility: "¿Por qué verificar compatibilidad?",
    compatibilityExplanation:
      "La lectura de compatibilidad analiza la relación de los Cinco Elementos (Madera, Fuego, Tierra, Metal, Agua) entre dos personas basada en sus troncos y ramas de nacimiento, así como los elementos del nombre.\n\nEl enfoque tradicional observa los patrones de generación mutua (相生) y restricción mutua (相剋) para entender dinámicas de personalidad, fortalezas y áreas de atención.\n\nEsta herramienta usa algoritmos tradicionales de astrología coreana para referencia. No es un diagnóstico científicamente comprobado.",
    limitations: "La lectura de compatibilidad es solo para referencia, no es un diagnóstico científicamente comprobado.",
    disclaimer: "Esta lectura de compatibilidad se basa en algoritmos tradicionales de astrología coreana y es solo para fines de referencia. No es un diagnóstico médico, financiero o profesional.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de compatibilidad se procesa en tu navegador.",
    faq: [
      {
        q: "¿Debo tomar la compatibilidad en serio?",
        a: "La compatibilidad es una herramienta de referencia para reflexionar sobre las relaciones. No está científicamente comprobado. DisfrútalO como una forma de animar tus relaciones.",
      },
      {
        q: "¿Qué criterios se usan para la compatibilidad?",
        a: "Tradicionalmente, se examina la relación de tronco-rama (干支) y Cinco Elementos (五行) de las fechas de nacimiento. La generación mutua (相生) se considera favorable.",
      },
      {
        q: "¿Qué pasa si la puntuación de compatibilidad es baja?",
        a: "La compatibilidad es solo una perspectiva. Incluso con una puntuación más baja, las relaciones pueden ser maravillosas con esfuerzo y comprensión.",
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
  const d = data[lang];
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/compatibility"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/compatibility`,
    },
  };
}

export default async function CompatibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Tools");
  const lang = locale as Locale;
  const d = data[lang];

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
        <h2 className="mb-4 text-xl font-semibold">{d.whyCompatibility}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.compatibilityExplanation}</p>
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
