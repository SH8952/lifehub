import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import SupplementRecommender from "@/components/supplement-recommender";
import { SITE_URL, languageAlternates } from "@/lib/seo";

type Locale = "ko" | "en" | "ja" | "es";

interface FAQ {
  q: string;
  a: string;
}

const data: Record<Locale, {
  title: string;
  subtitle: string;
  age: string;
  ages: Record<string, string>;
  gender: string;
  male: string;
  female: string;
  healthConcern: string;
  concerns: Record<string, string>;
  lifestyle: string;
  lifestyles: Record<string, string>;
  diet: string;
  diets: Record<string, string>;
  recommend: string;
  results: string;
  disclaimer: string;
  whySupplement: string;
  supplementExplanation: string;
  footer: string;
  faq: FAQ[];
  noneSelected: string;
  dosage: string;
  note: string;
}> = {
  ko: {
    title: "영양제 추천 서비스",
    subtitle: "건강 상태와 생활습관에 맞는 영양제를 추천해 드립니다",
    age: "연령대",
    ages: {
      "10": "10대",
      "20": "20대",
      "30": "30대",
      "40": "40대",
      "50": "50대",
      "60": "60대 이상",
    },
    gender: "성별",
    male: "남성",
    female: "여성",
    healthConcern: "주요 건강 고민 (복수 선택 가능)",
    concerns: {
      "bone": "뼈 건강",
      "eye": "눈 건강",
      "skin": "피부/미용",
      "immunity": "면역력",
      "fatigue": "피로 회복",
      "stress": "스트레스/수면",
      "cardio": "심혈관 건강",
      "digest": "소화/장 건강",
      "brain": "뇌/집중력",
      "joint": "관절 건강",
      "women": "여성 건강",
      "men": "남성 건강",
    },
    lifestyle: "생활습관 (복수 선택 가능)",
    lifestyles: {
      "meat": "육식 위주",
      "veggie": "채식/채식주의",
      "alcohol": "술 자주 마심",
      "eatout": "외식 많음",
      "exercise": "운동 자주 함",
      "indoor": "실내 작업 위주",
    },
    diet: "식단 유형",
    diets: {
      "balanced": "균형 식단",
      "lowcarb": "저탄수화물",
      "highprotein": "고단백",
      "fasting": "간헐적 단식",
    },
    recommend: "추천 받기",
    results: "추천 영양제",
    disclaimer:
      "⚠️ 이 추천은 참고용이며 의학적 진단이나 처방이 아닙니다. 영양제 섭취 전에는 반드시 의사 또는 약사와 상담하시기 바랍니다.",
    whySupplement: "왜 영양제 추천 서비스가 필요한가요?",
    supplementExplanation:
      "현대인의 식생활은 다양해졌지만, 필요한 영양소를 충분히 챙기기 어려운 경우가 많습니다. 영양제 추천 서비스는 당신의 건강 고민과 생활습관을 분석하여, 가장 필요한 영양소를 과학적으로 추천해 드립니다.\n\n각 영양제는 한국식품연구원, 미국 국립보건원(NIH), 유럽식품안전청(EFSA) 등의 공신력 있는 자료를 기준으로 권장 섭취량을 안내합니다. 하지만 개인에 따라 필요한 양이 다르므로, 전문가와 상담 후 자신에게 맞는 용량을 결정하시기 바랍니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "영양제는 언제 먹는 것이 가장 좋은가요?",
        a: "영양제 종류에 따라 섭취 시기가 다릅니다. 지용성 비타민(A, D, E, K)과 오메가-3은 식사 후(기름과 함께) 먹는 것이 흡수율이 높습니다. 비타민 B군과 비타민 C는 공복에 먹어도 되지만 위가 민감하면 식사 후 드시는 것이 좋습니다. 마그네슘은 수면 개선 효과가 있어 취침 전에 먹는 것을 권장합니다.",
      },
      {
        q: "여러 영양제를 동시에食べて도 괜찮나요?",
        a: "대부분의 영양제는 함께 섭취해도 안전하지만, 일부는 상호작용에 주의가 필요합니다. 예를 들어 칼슘과 철분을 동시에 먹으면 흡수가 방해될 수 있으므로分开 드시는 것이 좋습니다. 오메가-3과 비타민 E를 과도하게 함께 섭취하면 출혈 위험이 증가할 수 있습니다. 여러 영양제를 병용할 때는 약사나 전문가와 상담하세요.",
      },
      {
        q: "영양제 대신 식품으로 영양을 섭취할 수 있나요?",
        a: "가능하면 식품으로 영양을 섭취하는 것이 가장 이상적입니다. 오메가-3은 등푸른생선, 비타민 D는 버섯과 계란 노른자, 마그네슘은 견과류와 녹색 잎채소에서 얻을 수 있습니다. 다만 식습관으로 충분히 채우기 어려운 영양소(비타민 D 등)는 영양제로 보완하는 것이 효과적입니다.",
      },
    ],
    noneSelected: "건강 고민을 최소 1개 이상 선택해주세요.",
    dosage: "권장 섭취량",
    note: "참고",
  },
  en: {
    title: "Supplement Recommender",
    subtitle: "Get personalized supplement recommendations based on your health needs",
    age: "Age group",
    ages: {
      "10": "Teens",
      "20": "20s",
      "30": "30s",
      "40": "40s",
      "50": "50s",
      "60": "60+",
    },
    gender: "Gender",
    male: "Male",
    female: "Female",
    healthConcern: "Main health concerns (select multiple)",
    concerns: {
      "bone": "Bone health",
      "eye": "Eye health",
      "skin": "Skin & beauty",
      "immunity": "Immunity",
      "fatigue": "Fatigue recovery",
      "stress": "Stress & sleep",
      "cardio": "Cardiovascular health",
      "digest": "Digestive & gut health",
      "brain": "Brain & focus",
      "joint": "Joint health",
      "women": "Women's health",
      "men": "Men's health",
    },
    lifestyle: "Lifestyle habits (select multiple)",
    lifestyles: {
      "meat": "Meat-heavy diet",
      "veggie": "Vegetarian/Vegan",
      "alcohol": "Drinks alcohol frequently",
      "eatout": "Eats out often",
      "exercise": "Exercises regularly",
      "indoor": "Mostly indoor work",
    },
    diet: "Diet type",
    diets: {
      "balanced": "Balanced diet",
      "lowcarb": "Low-carb",
      "highprotein": "High protein",
      "fasting": "Intermittent fasting",
    },
    recommend: "Get Recommendations",
    results: "Recommended Supplements",
    disclaimer:
      "⚠️ These recommendations are for reference only and are not medical diagnoses or prescriptions. Always consult a doctor or pharmacist before starting any supplements.",
    whySupplement: "Why do you need a supplement recommender?",
    supplementExplanation:
      "Modern diets are more varied than ever, yet it's often difficult to get all the nutrients you need from food alone. The supplement recommender analyzes your health concerns and lifestyle to scientifically recommend the nutrients you need most.\n\nEach supplement's recommended intake is based on credible sources including the Korean Food Research Institute, the US National Institutes of Health (NIH), and the European Food Safety Authority (EFSA). However, individual needs vary, so consult a healthcare professional to determine the right dosage for you.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "When is the best time to take supplements?",
        a: "It depends on the supplement. Fat-soluble vitamins (A, D, E, K) and omega-3 are best absorbed when taken with a meal containing oil. B vitamins and vitamin C can be taken on an empty stomach, but if you have a sensitive stomach, take them after meals. Magnesium has sleep-improving effects, so it's recommended before bed.",
      },
      {
        q: "Is it okay to take multiple supplements at the same time?",
        a: "Most supplements are safe to take together, but some require caution due to interactions. For example, calcium and iron can interfere with each other's absorption, so take them separately. Taking excessive omega-3 and vitamin E together may increase bleeding risk. Consult a pharmacist or healthcare professional when combining supplements.",
      },
      {
        q: "Can I get nutrients from food instead of supplements?",
        a: "Ideally, getting nutrients from food is the best approach. Omega-3 is found in fatty fish, vitamin D in mushrooms and egg yolks, and magnesium in nuts and leafy greens. However, it's hard to get enough of certain nutrients (like vitamin D) from diet alone, so supplements can be a useful complement.",
      },
    ],
    noneSelected: "Please select at least one health concern.",
    dosage: "Recommended Dosage",
    note: "Note",
  },
  ja: {
    title: "サプリメント推奨サービス",
    subtitle: "健康状態や生活習慣に合わせたサプリメントをおすすめします",
    age: "年齢層",
    ages: {
      "10": "10代",
      "20": "20代",
      "30": "30代",
      "40": "40代",
      "50": "50代",
      "60": "60歳以上",
    },
    gender: "性別",
    male: "男性",
    female: "女性",
    healthConcern: "主な健康上の悩み（複数選択可能）",
    concerns: {
      "bone": "骨の健康",
      "eye": "目の健康",
      "skin": "肌・美容",
      "immunity": "免疫力",
      "fatigue": "疲労回復",
      "stress": "ストレス・睡眠",
      "cardio": "心臓・血管の健康",
      "digest": "消化・腸の健康",
      "brain": "脳・集中力",
      "joint": "関節の健康",
      "women": "女性の健康",
      "men": "男性の健康",
    },
    lifestyle: "生活習慣（複数選択可能）",
    lifestyles: {
      "meat": "肉中心の食事",
      "veggie": "ベジタリアン/ビーガン",
      "alcohol": "頻繁に飲酒する",
      "eatout": "外食が多い",
      "exercise": "定期的に運動する",
      "indoor": "室内作業中心",
    },
    diet: "食事タイプ",
    diets: {
      "balanced": "バランス食",
      "lowcarb": "ローカーボ（低炭水化物）",
      "highprotein": "高タンパク",
      "fasting": "間欠的ファスティング",
    },
    recommend: "推奨を取得",
    results: "推奨サプリメント",
    disclaimer:
      "⚠️ この推奨は参考用であり、医学的な診断や処方ではありません。サプリメントを摂取する前には必ず医師または薬剤師に相談してください。",
    whySupplement: "なぜサプリメント推奨サービスが必要ですか？",
    supplementExplanation:
      "現代の食生活は多様化していますが、必要な栄養素を十分に摂るのは難しい場合があります。サプリメント推奨サービスは、あなたの健康上の悩みと生活習慣を分析し、最も必要な栄養素を科学的に推奨します。\n\n各栄養素の推奨摂取量は、韓国食品研究院、米国国立保健研究所（NIH）、欧州食品安全機関（EFSA）などの信頼できる資料を基準にしています。ただし個人により必要な量は異なりますので、専門家と相談して自分に合った用量を決定してください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "サプリメントはいつ飲むのが一番良いですか？",
        a: "サプリメントによって摂取時期が異なります。脂溶性ビタミン（A、D、E、K）とオメガ3は、食後（油と一緒に）飲むと吸収率が高まります。ビタミンB群とビタミンCは空腹時に飲めますが、胃が敏感な場合は食後の方が良いでしょう。マグネシウムは睡眠改善効果があるので、就寝前に飲むことを推奨します。",
      },
      {
        q: "複数のサプリメントを同時に食べても大丈夫ですか？",
        a: "ほとんどのサプリメントは一緒に摂っても安全ですが、相互作用に注意が必要なものもあります。例えば、カルシウムと鉄分を同時に摂ると吸収が妨げられるため、分けて飲むのが良いでしょう。オメガ3とビタミンEを過剰に一緒に摂取すると出血リスクが増す可能性があります。複数のサプリメントを併用する場合は薬剤師や専門家に相談してください。",
      },
      {
        q: "サプリメントではなく食品で栄養を摂取できますか？",
        a: "可能であれば、食品から栄養を摂るのが最も理想的です。オメガ3は青魚、ビタミンDは茸や卵黄、マグネシウムはナッツや緑葉野菜から得られます。ただし食事だけでは足りない栄養素（ビタミンDなど）はサプリメントで補うのが効果的です。",
      },
    ],
    noneSelected: "健康上の悩みを少なくとも1つ選択してください。",
    dosage: "推奨摂取量",
    note: "参考",
  },
  es: {
    title: "Recomendador de Suplementos",
    subtitle: "Obtén recomendaciones personalizadas de suplementos según tus necesidades de salud",
    age: "Grupo de edad",
    ages: {
      "10": "Teenager",
      "20": "20s",
      "30": "30s",
      "40": "40s",
      "50": "50s",
      "60": "60+",
    },
    gender: "Género",
    male: "Masculino",
    female: "Femenino",
    healthConcern: "Principales problemas de salud (selección múltiple)",
    concerns: {
      "bone": "Salud ósea",
      "eye": "Salud ocular",
      "skin": "Piel y belleza",
      "immunity": "Inmunidad",
      "fatigue": "Recuperación de fatiga",
      "stress": "Estrés y sueño",
      "cardio": "Salud cardiovascular",
      "digest": "Salud digestiva e intestinal",
      "brain": "Cerebro y concentración",
      "joint": "Salud articular",
      "women": "Salud de la mujer",
      "men": "Salud del hombre",
    },
    lifestyle: "Hábitos de vida (selección múltiple)",
    lifestyles: {
      "meat": "Dieta alta en carne",
      "veggie": "Vegetariano/Vegano",
      "alcohol": "Bebe alcohol frecuentemente",
      "eatout": "Come fuera frecuentemente",
      "exercise": "Ejercita regularmente",
      "indoor": "Trabajo principalmente de interior",
    },
    diet: "Tipo de dieta",
    diets: {
      "balanced": "Dieta equilibrada",
      "lowcarb": "Baja en carbohidratos",
      "highprotein": "Alta en proteína",
      "fasting": "Ayuno intermitente",
    },
    recommend: "Obtener recomendaciones",
    results: "Suplementos recomendados",
    disclaimer:
      "⚠️ Estas recomendaciones son solo de referencia y no constituyen diagnósticos ni prescripciones médicas. Siempre consulta a un médico o farmacéutico antes de tomar suplementos.",
    whySupplement: "¿Por qué necesitas un recomendador de suplementos?",
    supplementExplanation:
      "Las dietas modernas son más variadas que nunca, pero a menudo es difícil obtener todos los nutrientes que necesitas solo con la comida. El recomendador de suplementos analiza tus problemas de salud y hábitos de vida para recomendarte científicamente los nutrientes que más necesitas.\n\nLa ingesta recomendada de cada nutriente se basa en fuentes creíbles como el Instituto Coreano de Investigación de Alimentos, los Institutos Nacionales de Salud de EE. UU. (NIH) y la Autoridad Europea de Seguridad Alimentaria (EFSA). Sin embargo, las necesidades individuales varían, así que consulta con un profesional de la salud para determinar la dosis adecuada para ti.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    faq: [
      {
        q: "¿Cuál es el mejor momento para tomar suplementos?",
        a: "Depende del suplemento. Las vitaminas liposolubles (A, D, E, K) y el omega-3 se absorben mejor con una comida que contenga grasa. Las vitaminas B y C se pueden tomar en ayunas, pero si tienes el estómago sensible, es mejor tomarlas después de comer. El magnesio tiene efectos de mejora del sueño, por lo que se recomienda antes de dormir.",
      },
      {
        q: "¿Es seguro tomar varios suplementos al mismo tiempo?",
        a: "La mayoría de los suplementos son seguros para tomar juntos, pero algunos requieren precaución por interacciones. Por ejemplo, el calcio y el hierro pueden interferir con la absorción mutua, así que es mejor tomarlos separados. Tomar omega-3 y vitamina E en exceso juntos puede aumentar el riesgo de sangrado. Consulta con un farmacéutico o profesional de la salud al combinar suplementos.",
      },
      {
        q: "¿Puedo obtener nutrientes de los alimentos en lugar de suplementos?",
        a: "Idealmente, obtener nutrientes de los alimentos es lo mejor. El omega-3 se encuentra en pescado azul, la vitamina D en hongos y yemas de huevo, y el magnesio en nueces y verduras de hoja verde. Sin embargo, es difícil obtener suficientes ciertos nutrientes (como la vitamina D) solo con la dieta, por lo que los suplementos pueden ser un complemento útil.",
      },
    ],
    noneSelected: "Por favor selecciona al menos una preocupación de salud.",
    dosage: "Dosis recomendada",
    note: "Nota",
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
      languages: languageAlternates("/tool/supplement-recommender"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/supplement-recommender`,
    },
  };
}

export default async function SupplementRecommenderPage({
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
        type="application/ld-json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.supplementExplanation.split("\n\n")[0],
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <SupplementRecommender d={d} lang={lang} />

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whySupplement}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.supplementExplanation}</p>
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
