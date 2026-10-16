import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import BMICalculator from "@/components/bmi-calculator";
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
  gender: string;
  male: string;
  female: string;
  height: string;
  weight: string;
  calculate: string;
  result: string;
  normal: string;
  whyBMI: string;
  bmiExplanation: string;
  limitations: string;
  footer: string;
  faq: FAQ[];
}> = {
  ko: {
    title: "BMI(비만도) 계산기",
    subtitle: "키는 150~250cm, 몸무게는 30~300kg까지 계산 가능",
    inputs: "입력",
    gender: "성별",
    male: "남성",
    female: "여성",
    height: "키 (cm)",
    weight: "몸무게 (kg)",
    calculate: "계산하기",
    result: "결과",
    normal: "정상 체중",
    whyBMI: "왜 BMI 계산기가 필요한가요?",
    bmiExplanation:
      "BMI(체질량지수)는 키와 몸무게로 계산하는 대표적 비만 지표입니다.\n\n세계보건기구(WHO)는 아시아인에게 더 낮은 기준을 권장하며, 한국 기준에서 정상 체중은 18.5~22.9입니다. BMI만으로는 체지방률이나 근량을 알 수 없으므로 운동과 식사 루틴의 참고지표로 쓰는 것이 좋습니다.",
    limitations: "BMI는 참고용 지표이며 의학적 진단이 아닙니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "BMI가 정상 범위가 아니라면 어떻게 해야 하나요?",
        a: "BMI가 정상 범위를 벗어나도 체지방률, 근량, 연령 등을 종합적으로 봐야 합니다. 전문가와 상담하고, 건강에 맞는 식단과 운동 루틴을 추천드립니다.",
      },
      {
        q: "근육량이 많은 운동선수도 BMI 계산이 가능한가요?",
        a: "네, 계산은 가능합니다. 다만 근육량이 많으면 BMI가 비만으로 나올 수 있습니다. 이 경우 체지방률(Fat %)이나 허리둘레 등 다른 지표를 함께 참고하는 것이 좋습니다.",
      },
      {
        q: "한국과 해외 BMI 기준이 다른가요?",
        a: "네, 세계보건기구(WHO)는 아시아인에게 더 낮은 BMI 기준을 권장합니다. 아시아인은 정상 체중의 상한을 23으로 보는 경우가 많습니다.",
      },
    ],
  },
  en: {
    title: "BMI Calculator",
    subtitle: "Supports 150-250cm height and 30-300kg weight",
    inputs: "Input",
    gender: "Gender",
    male: "Male",
    female: "Female",
    height: "Height (cm)",
    weight: "Weight (kg)",
    calculate: "Calculate",
    result: "Result",
    normal: "Normal weight",
    whyBMI: "Why do you need a BMI calculator?",
    bmiExplanation:
      "BMI (Body Mass Index) is the most common obesity indicator calculated from height and weight.\n\nThe WHO recommends lower thresholds for Asians, and the Korean standard considers 18.5-22.9 as normal weight. BMI alone cannot measure body fat percentage or muscle mass, so it is best used as a reference indicator for exercise and diet routines.",
    limitations: "BMI is a reference indicator, not a medical diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "What should I do if my BMI is outside the normal range?",
        a: "Even if your BMI is outside the normal range, you should consider body fat percentage, muscle mass, age, and other factors. Consult a healthcare professional and get a healthy diet and exercise plan.",
      },
      {
        q: "Can fitness professionals with high muscle mass use the BMI calculator?",
        a: "Yes, the calculation is possible. However, if you have a lot of muscle mass, your BMI may come out as obese. In this case, it is recommended to check other indicators such as body fat percentage (Fat %) or waist circumference.",
      },
      {
        q: "Is there a difference between Korean and overseas BMI standards?",
        a: "Yes, the World Health Organization (WHO) recommends lower BMI thresholds for Asians. In Asia, the upper limit of normal weight is often considered 23.",
      },
    ],
  },
  ja: {
    title: "BMI（肥満度）計算機",
    subtitle: "身長150～250cm、体重30～300kgに対応",
    inputs: "入力",
    gender: "性別",
    male: "男性",
    female: "女性",
    height: "身長（cm）",
    weight: "体重（kg）",
    calculate: "計算",
    result: "結果",
    normal: "標準体重",
    whyBMI: "なぜBMI計算機が必要ですか？",
    bmiExplanation:
      "BMI（体格指数）は身長と体重から計算される代表的な肥満指標です。\n\nWHOはアジア人により低い基準を推奨しており、韓国の基準では正常体重を18.5～22.9としています。BMIだけでは体脂肪率や筋肉量を測定できませんので、運動と食事の参考指標として使うのがおすすめです。",
    limitations: "BMIは参考指標であり、医師の診断ではありません。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "BMIが正常範囲外の場合どうすればいいですか？",
        a: "BMIが正常範囲外でも、体脂肪率、筋肉量、年齢などを総合的に見る必要があります。専門家に相談し、健康に合った食事と運動ルーティンを推奨します。",
      },
      {
        q: "筋肉量の多いアスリートのBMI計算は可能ですか？",
        a: "はい、計算は可能ですが、筋肉量が多いとBMIが肥満とでる場合があります。この場合、体脂肪率（Fat％）や腰囲などの他の指標を一緒に見ることを推奨します。",
      },
      {
        q: "韓国と日本のBMI基準は異なりますか？",
        a: "はい、世界保健機構（WHO）はアジア人により低いBMI基準を推奨しています。アジアでは正常体重の上限は23と考えられることが多いです。",
      },
    ],
  },
  es: {
    title: "Calculadora de IMC",
    subtitle: "Soporta altura de 150-250cm y peso de 30-300kg",
    inputs: "Entrada",
    gender: "Género",
    male: "Masculino",
    female: "Femenino",
    height: "Altura (cm)",
    weight: "Peso (kg)",
    calculate: "Calcular",
    result: "Resultado",
    normal: "Peso normal",
    whyBMI: "¿Por qué necesitas una calculadora de IMC?",
    bmiExplanation:
      "El IMC es el indicador de obesidad más común calculado a partir de la altura y el peso.\n\nLa OMS recomienda umbrales más bajos para los asiáticos, y el estándar coreano considera 18.5-22.9 como peso normal. El IMC por sí solo no puede medir el porcentaje de grasa corporal ni la masa muscular, para que se mejor usar como indicador de referencia para rutinas de ejercicio y dieta.",
    limitations: "El IMC es un indicador de referencia, no es un diagnóstico médico.",
    footer: "100% procesado en el navegador. No hay datos enviados al servidor.",
    faq: [
      {
        q: "¿Qué debo hacer si mi IMC está fuera del rango normal?",
        a: "Incluso si tu IMC está fuera del rango normal, debes considerar el porcentaje de grasa corporal, la masa muscular, la edad y otros factores. Consultar con un profesional de la salud.",
      },
      {
        q: "¿Los atletas con mucha masa muscular pueden usar la calculadora de IMC?",
        a: "Sí, el cálculo es posible. Sin embargo, si tienes mucha masa muscular, tu IMC puede aparecer como obeso. En este caso, se recomienda revisar otros indicadores como el porcentaje de grasa corporal (Fat％) o el perímetro de cintura.",
      },
      {
        q: "¿Hay diferencia entre los estándares coreanos y japoneses de IMC?",
        a: "Sí, la Organización Mundial de la Salud (OMS) recomienda umbrales de IMC más bajos para los asiáticos. En Asia, el límite superior del peso normal a menudo se considera 23.",
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
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/bmi"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/bmi`,
    },
  };
}

export default async function BMIPage({
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
            description: d.bmiExplanation.split("\n\n")[0],
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <BMICalculator d={d} lang={lang} />

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyBMI}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.bmiExplanation}</p>
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
