"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  title: string;
  subtitle: string;
  intro: string;
  recipes: Array<{
    name: string;
    ingredients: string[];
    method: string[];
    effect: string;
    color: string;
  }>;
  tips: string;
  tipsList: string[];
  why: string;
  whyExplanation: string;
  disclaimer: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "ABC 주스 레시피",
    subtitle: "ABC 과일 주스 다이어트의 맛과 영양을 담은 레시피",
    intro:
      "ABC 주스 다이어트는 영국에서 큰 인기를 얻은 다이어트 방법입니다. A, B, C 알파벳으로 시작하는 과일 3가지를 섞어 마시는 다이어트 주스 레시피를 소개합니다.\n\n매일 다른 조합으로 만들어 마시면 단조로움을 피할 수 있습니다.",
    recipes: [
      {
        name: "레드 ABC 주스",
        ingredients: ["사과(Apple) 1개", "블루베리(Blueberry) 1/2컵", "체리(Cherry) 10알"],
        method: [
          "사과는 씨를 빼고 적당한 크기로 자른다.",
          "블루베리와 체리는 씻어둔다.",
          "모든 재료를 믹서기에 넣고 갈아준다.",
          "취향에 따라 물을 조금 추가한다.",
        ],
        effect: "항산화 작용, 피부 미용, 눈 건강",
        color: "red",
      },
      {
        name: "골드 ABC 주스",
        ingredients: ["사과(Apple) 1개", "바나나(Banana) 1개", "복숭아(Peach/Apricot) 1개"],
        method: [
          "사과는 씨를 빼고 자른다.",
          "바나나는 껍질을 벗겨 자른다.",
          "복숭아는 껍질을 벗기고 씨를 뺀 후 자른다.",
          "믹서기에 넣고 갈아준다.",
        ],
        effect: "에너지 보충, 소화 건강, 면역력 강화",
        color: "yellow",
      },
      {
        name: "그린 ABC 주스",
        ingredients: ["사과(Apple) 1개", "바나나(Banana) 1/2개", "키위(Kiwi) 1개"],
        method: [
          "사과는 씨를 빼고 자른다.",
          "바나나는 껍질을 벗긴다.",
          "키위는 껍질을 벗기고 자른다.",
          "믹서기에 넣고 부드럽게 갈아준다.",
        ],
        effect: "위장 건강, 변비 개선, 비타민 보충",
        color: "green",
      },
      {
        name: "퍼플 ABC 주스",
        ingredients: ["사과(Apple) 1개", "블루베리(Blueberry) 1컵", "바나나(Banana) 1개"],
        method: [
          "사과는 씨를 빼고 자른다.",
          "블루베리는 씻어둔다.",
          "바나나는 껍질을 벗겨 자른다.",
          "모든 재료를 믹서기에 넣고 갈아준다.",
        ],
        effect: "노화 방지, 뇌 건강, 혈류 개선",
        color: "purple",
      },
      {
        name: "오렌지 ABC 주스",
        ingredients: ["사과(Apple) 1개", "바나나(Banana) 1개", "오렌지(Orange) 1개"],
        method: [
          "사과는 씨를 빼고 자른다.",
          "바나나는 껍질을 벗긴다.",
          "오렌지는 껍질을 벗겨 알맹이를 분리한다.",
          "믹서기에 넣고 갈아준다.",
        ],
        effect: "비타민 C 보충, 감기 예방, 피부 건강",
        color: "orange",
      },
    ],
    tips: "ABC 주스 만드는 팁",
    tipsList: [
      "가공하지 않은 생과일을 사용하는 것이 가장 좋습니다.",
      "가능한 한 껍질째 사용하는 것이 영양소 섭취에 유리합니다. (물로 충분히 세척)",
      "간 직후 바로 마시는 것이 가장 영양소가 풍부합니다.",
      "단백질을 보강하고 싶으면 견과류를 약간 추가하세요.",
      "다이어트 시에는 당도를 위해 간식 대신 또는 식사 대체로 섭취하세요.",
      "하루 2잔 이내로 섭취하는 것을 권장합니다.",
    ],
    why: "ABC 주스 다이어트란?",
    whyExplanation:
      "ABC 주스 다이어트는 2010년대 영국에서 큰 인기를 끌었던 다이어트 방식입니다.\n\nABC는 Apple(사과), Banana(바나나), Cherry(체리) 또는 Blueberry(블루베리), Apricot(살구) 등 알파벳 A, B, C로 시작하는 과일을 의미합니다.\n\n이 다이어트의 핵심은 '신선한 과일 주스'를 통해 영양소를 보충하고, 가공 식품을 줄이며, 자연스러운 포만감을 느끼는 것입니다.\n\n주 5일 동안 아침과점심으로ABC 주스를 마시고, 그 외 식사(저녁과 저녁)는 평소처럼 먹되 과자는 줄이는 방식입니다.",
    disclaimer: "⚠️ ABC 주스 다이어트는 참고 용도이며, 전문 영양사의 조언을 대체할 수 없습니다. 당뇨병 등 건강상 문제가 있으시다면 전문가와 상담하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "ABC 주스는 왜 하루 2잔만 마시라고 하나요?",
        a: "과일 주스도 당분이 많기 때문입니다. 하루 2잔(아침+점심)을 주스로 대체하고, 저녁은 균형 잡힌 식사를 하는 것이 핵심입니다.",
      },
      {
        q: "ABC 주스로만 다이어트하면 되나요?",
        a: "아닙니다. 아침+점심을 ABC 주스로 대체하고, 저녁은 평소처럼 건강한 식사를 해야 합니다. 과자나 단 음식은 줄이세요.",
      },
      {
        q: "ABC 주스 다이어트의 주의점은?",
        a: "당뇨병 환자, 저혈압 환자, 임산부, 어린이 등은 전문의와 상담 후 진행하세요. 과일 알레르기가 있다면 해당 과원을 생략하세요.",
      },
    ],
  },
  en: {
    title: "ABC Juice Recipes",
    subtitle: "Recipes for the ABC Fruit Juice Diet",
    intro:
      "The ABC juice diet was a huge trend that originated in the UK. We introduce recipes that mix three fruits starting with the letters A, B, and C.\n\nTry different combinations each day to avoid monotony.",
    recipes: [
      {
        name: "Red ABC Juice",
        ingredients: ["Apple 1", "Blueberry 1/2 cup", "Cherry 10"],
        method: [
          "Core the apple and cut into chunks.",
          "Wash the blueberries and cherries.",
          "Put all ingredients in a blender and blend.",
          "Add a little water if desired.",
        ],
        effect: "Antioxidant, skin health, eye health",
        color: "red",
      },
      {
        name: "Gold ABC Juice",
        ingredients: ["Apple 1", "Banana 1", "Peach/Apricot 1"],
        method: [
          "Core the apple and cut into chunks.",
          "Peel and slice the banana.",
          "Peeled and pitted the peach.",
          "Blend in a blender.",
        ],
        effect: "Energy boost, digestive health, immunity",
        color: "yellow",
      },
      {
        name: "Green ABC Juice",
        ingredients: ["Apple 1", "Banana 1/2", "Kiwi 1"],
        method: [
          "Core the apple and cut into chunks.",
          "Peel the banana.",
          "Peel and slice the kiwi.",
          "Blend in a blender until smooth.",
        ],
        effect: "Gut health, constipation relief, vitamin boost",
        color: "green",
      },
      {
        name: "Purple ABC Juice",
        ingredients: ["Apple 1", "Blueberry 1 cup", "Banana 1"],
        method: [
          "Core the apple and cut into chunks.",
          "Wash the blueberries.",
          "Peel and slice the banana.",
          "Blend all in a blender.",
        ],
        effect: "Anti-aging, brain health, blood flow",
        color: "purple",
      },
      {
        name: "Orange ABC Juice",
        ingredients: ["Apple 1", "Banana 1", "Orange 1"],
        method: [
          "Core the apple and cut into chunks.",
          "Peel the banana.",
          "Peel the orange and separate the segments.",
          "Blend in a blender.",
        ],
        effect: "Vitamin C, cold prevention, skin health",
        color: "orange",
      },
    ],
    tips: "ABC Juice Making Tips",
    tipsList: [
      "Use fresh, unprocessed fruit whenever possible.",
      "Wash thoroughly and use the peel when possible for more nutrients.",
      "Drink immediately after blending for the most nutrients.",
      "Add a few nuts if you want to boost protein.",
      "Consume as a meal replacement instead of snacks during dieting.",
      "It is recommended to consume up to 2 cups per day.",
    ],
    why: "What is the ABC Juice Diet?",
    whyExplanation:
      "The ABC juice diet became a huge trend in the UK in the 2010s.\n\nABC stands for fruits starting with the letters A, B, and C — Apple, Banana, Cherry, Blueberry, Apricot, Orange, etc.\n\nThe core of this diet is replenishing nutrients with fresh fruit juice, reducing processed foods, and feeling naturally full.",
    disclaimer: "⚠️ The ABC juice diet is for reference only and doesn't replace advice from a nutritionist. Consult a professional if you have health conditions like diabetes.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "Why only 2 cups of ABC juice per day?",
        a: "Because fruit juice contains sugar. The key is to replace breakfast and lunch with juice and eat a balanced dinner.",
      },
      {
        q: "Can I diet with only ABC juice?",
        a: "No, replace breakfast + lunch with ABC juice and eat healthy dinner. Reduce sweets and snacks.",
      },
      {
        q: "What are the cautions for the ABC juice diet?",
        a: "Diabetics, pregnant women, children should consult a doctor before starting. Skip fruits you're allergic to.",
      },
    ],
  },
  ja: {
    title: "ABCジュースレシピ",
    subtitle: "ABCフルーツジュースダイエットのレシピ",
    intro:
      "ABCジュースダイエットは英国では大ブームになったダイエット法です。A, B, Cのアルファベットで始まる果物を3つ混ぜて飲むABCジュースのレシピをご紹介します。\n\n毎日違う組み合わせで飲みましょう。",
    recipes: [
      {
        name: "レッドABCジュース",
        ingredients: ["りんご(Apple) 1個", "ブルーベリー(Blueberry) 1/2カップ", "チェリー(Cherry) 10個"],
        method: [
          "りんごの芯を取り、適当な大きさに切る。",
          "ブルーベリーとチェリーはよく洗う。",
          "すべての材料をミキサーに入れ、よく混ぜる。",
          "好みに応じて水を少し加える。",
        ],
        effect: "抗酸化作用、肌荒れ、目健康",
        color: "red",
      },
      {
        name: "ゴールドABCジュース",
        ingredients: ["りんご(Apple) 1個", "バナナ(Banana) 1本", "桃(Peach) もしくは Apricot 1個"],
        method: [
          "りんごの芯を取り、適当な大きさに切る。",
          "バナナは皮をむき、切る。",
          "桃は皮をむき、種を取る。",
          "ミキサーで混ぜる。",
        ],
        effect: "エネルギー補給、消化健康、免疫力強化",
        color: "yellow",
      },
      {
        name: "グリーンABCジュース",
        ingredients: ["りんご(Apple) 1個", "バナナ(Banana) 1/2本", "キウイ(Kiwi) 1個"],
        method: [
          "りんごの芯を取り、適当な大きさに切る。",
          "バナナは皮をむく。",
          "キウイは皮をむき、切る。",
          "ミキサーで滑らかになるまで混ぜる。",
        ],
        effect: "胃腸健康、便秘改善、ビタミン補給",
        color: "green",
      },
      {
        name: "パープルABCジュース",
        ingredients: ["りんご(Apple) 1個", "ブルーベリー(Blueberry) 1カップ", "バナナ(Banana) 1本"],
        method: [
          "りんごの芯を取り、適当な大きさに切る。",
          "ブルーベリーはよく洗う。",
          "バナナは皮をむき、切る。",
          "ミキサーで混ぜる。",
        ],
        effect: "老化防止、脳健康、血流改善",
        color: "purple",
      },
      {
        name: "オレンジABCジュース",
        ingredients: ["りんご(Apple) 1個", "バナナ(Banana) 1本", "オレンジ(Orange) 1個"],
        method: [
          "りんごの芯を取り、適当な大きさに切る。",
          "バナナは皮をむく。",
          "オレンジは皮をむき、わす取り出す。",
          "ミキサーで混ぜる。",
        ],
        effect: "ビタミンC補給、風邪予防、肌健康",
        color: "orange",
      },
    ],
    tips: "ABCジュースの作り方のヒント",
    tipsList: [
      "加工されていない生果子を使うのが最もよいです。",
      "できるだけ皮ごと使用するのが栄養素摂取に有利です(よく洗って)。",
      "混ぜた直後に飲むのが最も栄養が豊かです。",
      "タンパク質を補いたい場合は、ナッツを少し追加してください。",
      "ダイエット時は、おやつではなく食事代わりに摂取してください。",
      "1日に2杯以内で摂取することを推奨します。",
    ],
    why: "ABCジュースダイエットとは？",
    whyExplanation:
      "ABCジュースダイエットは2010年代の英国で大ブームになったダイエット法です。\n\nABCはA, B, Cで始まる果物を意味します。りんご(Apple)、バナナ(Banana)、チェリー(Cherry)、ブルーベリー(Blueberry)、Apricotなど。\n\nこのダイエットの核心は「新鮮な果子ジュース」で栄養を補い、「加工食品」を減らし、自然な満腹感を得ることです。\n\n週5日間、ABCジュースを朝食と昼食として飲んで、他の食事(dinner)は、いつものように食べたが、おやつを減らす方式です。",
    disclaimer: "⚠️ ABCジュースダイエットは参考用であり、専門栄養士のアドバイスと入れ替えるものではありません。糖尿病などの健康上の問題がある場合は、専門医に相談してください。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "なぜABCジュースは1日2杯だけですか？",
        a: "果子ジュースにも糖分が多いからです。朝食+昼食をABCジュースで置き換え、夕食は普段の食事にするのが核心です。",
      },
      {
        q: "ABCジュースだけでダイエットできますか？",
        a: "できません。朝食と昼食はABCジュースで置き換え、夕食はいつもと同じ食べ物をください。おやつを減らしてください。",
      },
      {
        q: "ABCジュースダイエットの注意点は何ですか？",
        a: "糖尿病のある人、妊婦、子供は、専門医に相談してください。果物アレルギーがある場合は、その果物はスキップしてください。",
      },
    ],
  },
  es: {
    title: "Recetas de Zumo ABC",
    subtitle: "Recetas para la Dieta del Zumo de Frutas ABC",
    intro:
      "La dieta del zumo ABC fue una gran tendencia que se originó en el Reino Unido. Presentamos recetas que mezclan tres frutas que comienzan con las letras A, B y C.\n\nPrueba diferentes combinaciones cada día para evitar la monotonía.",
    recipes: [
      {
        name: "Zumo ABC Rojo",
        ingredients: ["Apple (Manzana) 1", "Blueberry (Arándano) 1/2 taza", "Cherry (Cereza) 10"],
        method: [
          "Quita el corazón de la manzana y córtala en trozos.",
          "Lava los aráanos y cerezas.",
          "Pon todos los ingredientes en una licuadora y mezcla.",
          "Añade un poco de agua si se desea.",
        ],
        effect: "Antioxidante, salud de la piel, salud ocular",
        color: "red",
      },
      {
        name: "Zumo ABC Dorado",
        ingredients: ["Apple (Manzana) 1", "Banana (Plátano) 1", "Peach (Durazno) o Apricot (Albaricoque) 1"],
        method: [
          "Quita el corazón de la manzana y córtala en trozos.",
          "Pela y corta el plátano.",
          "Pela el durazno y quita el hueso.",
          "Licúa en una licuadora.",
        ],
        effect: "Refuerzo de energía, salud digestiva, inmunidad",
        color: "yellow",
      },
      {
        name: "Zumo ABC Verde",
        ingredients: ["Apple (Manzana) 1", "Banana (Plátano) 1/2", "Kiwi 1"],
        method: [
          "Quita el corazón de la manzana y córtala en trozos.",
          "Pela el plátano.",
          "Pela y corta el kiwi.",
          "Licúa hasta que esté suave.",
        ],
        effect: "Salud intestinal, alivio del estreñimiento, vitaminas",
        color: "green",
      },
      {
        name: "Zumo ABC Púrpura",
        ingredients: ["Apple (Manzana) 1", "Blueberry (Arándano) 1 taza", "Banana (Plátano) 1"],
        method: [
          "Quita el corazón de la manzana y córtala en trozos.",
          "Lava los aráanos.",
          "Pela y corta el plátano.",
          "Licúa todo en una licuadora.",
        ],
        effect: "Antienvejecimiento, salud cerebral, flujo sanguíneo",
        color: "purple",
      },
      {
        name: "Zumo ABC Naranja",
        ingredients: ["Apple (Manzana) 1", "Banana (Plátano) 1", "Orange (Naranja) 1"],
        method: [
          "Quita el corazón de la manzana y córtala en trozos.",
          "Pela el plátano.",
          "Pela la naranja y separa los gajos.",
          "Licúa en una licuadora.",
        ],
        effect: "Vitamina C, prevención de resfriados, salud de la piel",
        color: "orange",
      },
    ],
    tips: "Consejos para hacer Zumo ABC",
    tipsList: [
      "Usa fruta fresca y sin procesar siempre que sea posible.",
      "Cuando sea posible, usa la cáscara para más nutrientes. (Lava bien)",
      "Tómalo inmediatamente después de licuar para más nutrientes.",
      "Añade algunos nueces si quieres aumentar proteínas.",
      "Durante la dieta, consúmelos como sustituto de comidas en lugar de snacks.",
      "Se recomienda consumir hasta 2 tazas por día.",
    ],
    why: "¿Qué es la Dieta del Zumo ABC?",
    whyExplanation:
      "La dieta del zumo ABC se convirtió en una gran tendencia en el Reino Unido en la década de 2010.\n\nABC se refiere a frutas que comienzan con las letras A, B y C — Apple, Banana, Cherry, Blueberry, Apricot, Orange, etc.",
    disclaimer: "⚠️ La dieta del zumo ABC es solo de referencia y no reemplaza el consejo de un nutricionista. Consulta a un profesional si tienes condiciones de salud como diabetes.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    faq: [
      {
        q: "¿Por qué solo 2 tazas de zumo ABC al día?",
        a: "Porque el zumo de fruta contiene azúcar. La clave es reemplazar el desayuno y almuerzo con zumo y comer una cena balanceada.",
      },
      {
        q: "¿Puedo hacer dieta solo con zumo ABC?",
        a: "No, reemplaza el desayuno + almuerzo con zumo ABC y come una cena saludable. Reduce dulces y snacks.",
      },
      {
        q: "¿Cuáles son las precauciones para la dieta del zumo ABC?",
        a: "Personas con diabetes, embarazadas, niños deben consultar a un médico antes de empezar. Salta las frutas a las que seas alérgico.",
      },
    ],
  },
};

type RecipeTab = number | null;

export default function ABCJuice({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [activeTab, setActiveTab] = useState<RecipeTab>(0);

  const d = i18nData[locale];

  const activeRecipe = activeTab !== null ? d.recipes[activeTab] : null;

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
            description: "ABC fruit juice diet recipes",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      {/* Language selector */}
      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Intro */}
      <div className="mt-4 text-base leading-relaxed text-muted-foreground">{d.intro}</div>

      {/* Recipe tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {d.recipes.map((recipe, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === i
                ? "bg-indigo-600 text-white"
                : "hover:bg-muted"
            }`}
          >
            {recipe.name}
          </button>
        ))}
      </div>

      {/* Active recipe */}
      {activeRecipe && (
        <div className="mt-6">
          <Card className="border shadow-md">
            <CardContent className="space-y-6 p-6">
              <div>
                <h2 className={`text-2xl font-bold text-${activeRecipe.color}-600`}>{activeRecipe.name}</h2>
                <p className="mt-1 font-medium text-muted-foreground">{activeRecipe.effect}</p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">재료 (Ingredients)</h3>
                <ul className="space-y-1 pl-5">
                  {activeRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="list-disc text-base">
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">만드는 방법 (Method)</h3>
                <ol className="space-y-2 pl-5">
                  {activeRecipe.method.map((step, i) => (
                    <li key={i} className="list-decimal text-base">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tips */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.tips}</h2>
        <div className="space-y-2">
          {d.tipsList.map((tip, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-3">
                <p className="text-base">
                  <span className="mr-2 text-indigo-600">•</span>
                  {tip}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why section */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.why}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.whyExplanation}</p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">{i + 1}. {faq.q}</p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
