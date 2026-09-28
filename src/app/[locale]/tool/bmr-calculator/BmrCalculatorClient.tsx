"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  title: string;
  subtitle: string;
  gender: string;
  male: string;
  female: string;
  age: string;
  agePlaceholder: string;
  height: string;
  heightPlaceholder: string;
  heightUnit: string;
  weight: string;
  weightPlaceholder: string;
  weightUnit: string;
  calculate: string;
  result: string;
  bmr: string;
  bmrDescription: string;
  tdee: string;
  activityLevel: string;
  sedentary: string;
  sedentaryDesc: string;
  light: string;
  lightDesc: string;
  moderate: string;
  moderateDesc: string;
  active: string;
  activeDesc: string;
  veryActive: string;
  veryActiveDesc: string;
  limitations: string;
  whyBmr: string;
  bmrExplanation: string;
  footer: string;
  presets: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "기초대사량 (BMR) & 활동대사량 (TDEE) 계산기",
    subtitle: "성별, 나이, 키, 몸무게를 입력하면 기초대사량과 활동대사량을 계산합니다.",
    gender: "성별",
    male: "남성",
    female: "여성",
    age: "나이",
    agePlaceholder: "나이 입력",
    height: "키",
    heightPlaceholder: "키 입력",
    heightUnit: "cm",
    weight: "몸무게",
    weightPlaceholder: "몸무게 입력",
    weightUnit: "kg",
    calculate: "계산하기",
    result: "계산 결과",
    bmr: "기초대사량 (BMR)",
    bmrDescription: "하루에 최소한으로 필요한 칼로리 (잠만 누어져 있어도 소비되는 에너지)",
    tdee: "활동대사량 (TDEE)",
    activityLevel: "활동량 선택",
    sedentary: "거의 앉아서 생활",
    sedentaryDesc: "× 1.2 — 매일 앉아있고 거의 운동 안 함",
    light: "가벼운 활동",
    lightDesc: "× 1.375 — 주 1~3일 가벼운 운동",
    moderate: "보통 활동",
    moderateDesc: "× 1.55 — 주 3~5일 중간 강도 운동",
    active: "매우 활동적",
    activeDesc: "× 1.725 — 주 6~7일 강도 있는 운동",
    veryActive: "극도 활동적",
    veryActiveDesc: "× 1.9 — 매우 힘든 신체 노동 또는 하루 두 차례 훈련",
    limitations: "계산 결과는 참고용이며, 실제 대사량은 근육량, 유전체질, 건강 상태에 따라 다를 수 있습니다.",
    whyBmr: "왜 기초대사량/활동대사량을 계산해야 하나요?",
    bmrExplanation:
      "기초대사량(BMR)은 하루에 최소한으로 필요한 칼로리를 의미합니다. 이 칼로리보다 적게 먹으면 체중이 줄지만, 장기적으로 대사 속도가 느려지고 근육이 손실될 수 있습니다.\n\n활동대사량(TDEE)은 일상 활동과 운동을 포함해 하루에 실제로 소비하는 총 칼로리입니다. 체중 감량을 위해선 TDEE보다 적게, 체중 증가를 위해선 TDEE보다 많이 먹는 것이 기본 원칙입니다.\n\n이 도구에서는 Mifflin-St Jeor 공식을 사용하며, 이는 기존 Harris-Benedict 공식보다 더 정확하다고 평가받는 현대적인 표준입니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    presets: "프리셋",
    faq: [
      {
        q: "BMR과 TDEE의 차이는 무엇인가요?",
        a: "BMR은 숨 쉬고 혈액을 순환시키는 등 생명 유지에 필요한 최소 에너지입니다. TDEE는 여기에 일상 활동과 운동을 더한 총 소비 칼로리입니다.",
      },
      {
        q: "체중 감량을 위해 하루 몇 칼로리를 먹어야 하나요?",
        a: "안전한 체중 감량을 위해선 TDEE보다 하루 500칼로리 정도 적게 먹는 것을 권장합니다. 하지만 최소 BMR 이하로 먹는 것은 권장하지 않습니다.",
      },
      {
        q: "계산 결과의 정확도는 어떻게 되나요?",
        a: "Mifflin-St Jeor 공식은 임상 시험에서 검증된 과학적 공식입니다. 하지만 개인의 근육량, 유전체질, 건강 상태에 따라 실제 대사량과는 차이가 있을 수 있습니다.",
      },
    ],
  },
  en: {
    title: "BMR & TDEE Calculator",
    subtitle: "Enter your gender, age, height, and weight to calculate your Basal Metabolic Rate and Total Daily Energy Expenditure.",
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    agePlaceholder: "Enter age",
    height: "Height",
    heightPlaceholder: "Enter height",
    heightUnit: "cm",
    weight: "Weight",
    weightPlaceholder: "Enter weight",
    weightUnit: "kg",
    calculate: "Calculate",
    result: "Result",
    bmr: "Basal Metabolic Rate (BMR)",
    bmrDescription: "Minimum calories needed per day (energy burned at complete rest)",
    tdee: "Total Daily Energy Expenditure (TDEE)",
    activityLevel: "Activity level",
    sedentary: "Sedentary",
    sedentaryDesc: "× 1.2 — Little or no exercise, desk job",
    light: "Lightly active",
    lightDesc: "× 1.375 — Light exercise 1–3 days/week",
    moderate: "Moderately active",
    moderateDesc: "× 1.55 — Moderate exercise 3–5 days/week",
    active: "Very active",
    activeDesc: "× 1.725 — Hard exercise 6–7 days/week",
    veryActive: "Extra active",
    veryActiveDesc: "× 1.9 — Physical job or twice-daily training",
    limitations: "These results are estimates. Actual metabolic rates vary by muscle mass, genetics, and health conditions.",
    whyBmr: "Why calculate your BMR and TDEE?",
    bmrExplanation:
      "Your Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic life functions at rest — breathing, circulation, cell production.\n\nYour Total Daily Energy Expenditure (TDEE) adds your daily activities and exercise to the BMR. To lose weight, eat fewer calories than your TDEE; to gain weight, eat more.\n\nThis calculator uses the Mifflin-St Jeor equation, which is considered more accurate than the older Harris-Benedict formula.",
    footer: "100% processed in your browser. No data is sent to the server.",
    presets: "Presets",
    faq: [
      {
        q: "What is the difference between BMR and TDEE?",
        a: "BMR is the minimum energy your body needs for basic life functions. TDEE includes your daily activities and exercise on top of BMR.",
      },
      {
        q: "How many calories should I eat to lose weight?",
        a: "A safe approach is to eat about 500 calories less than your TDEE per day. However, eating below your BMR is not recommended.",
      },
      {
        q: "How accurate is this calculator?",
        a: "The Mifflin-St Jeor equation is a scientifically validated formula. However, actual metabolism varies by muscle mass, genetics, and health.",
      },
    ],
  },
  ja: {
    title: "基礎代謝量 (BMR) & 活動代謝量 (TDEE) 計算機",
    subtitle: "性別、年齢、身長、体重を入力すると、基礎代謝量と活動代謝量を計算します。",
    gender: "性別",
    male: "男性",
    female: "女性",
    age: "年齢",
    agePlaceholder: "年齢を入力",
    height: "身長",
    heightPlaceholder: "身長を入力",
    heightUnit: "cm",
    weight: "体重",
    weightPlaceholder: "体重を入力",
    weightUnit: "kg",
    calculate: "計算",
    result: "計算結果",
    bmr: "基礎代謝量 (BMR)",
    bmrDescription: "1日に最低必要なカロリー（寝ているだけでも消費されるエネルギー）",
    tdee: "活動代謝量 (TDEE)",
    activityLevel: "活動レベルを選択",
    sedentary: "座席 life",
    sedentaryDesc: "× 1.2 — ほとんどの時間座っている",
    light: "軽い活動",
    lightDesc: "× 1.375 — 週1〜3回軽い運動",
    moderate: "普通の活動",
    moderateDesc: "× 1.55 — 週3〜5回中強度の運動",
    active: "非常に活動的",
    activeDesc: "× 1.725 — 週6〜7回激しい運動",
    veryActive: "極度の活動的",
    veryActiveDesc: "× 1.9 — 非常に厳しい肉体労働または1日2回トレーニング",
    limitations: "計算結果は参考用です。実際の代謝量は筋肉量、遺伝体質、健康状態によって異なります。",
    whyBmr: "なぜ基礎代謝量・活動代謝量を計算するのですか？",
    bmrExplanation:
      "基礎代謝量(BMR)は、1日に少なくとも必要なカロリー数を意味します。このカロリーより少なく食べると体重は減りますが、長期的には代謝が遅くなり、筋肉が失われる可能性があります。\n\n活動代謝量(TDEE)は、日常活動と運動を含めて実際に消費する総カロリーです。体重減量のためにはTDEEより少なく、増量のためにTDEEより多く食べるのが基本原則です。\n\nこの計算機ではMifflin-St Jeor式を使用しています。これは従来のHarris-Benedict式より正確だと評価される現代的な標準です。",
    footer: "ブラウザで100％処理。サーバーに送信されるデータはありません。",
    presets: "プリセット",
    faq: [
      {
        q: "BMRとTDEEの違いは何ですか？",
        a: "BMRは息をしたり血液を循環させるなど生命維持に必要な最小エネルギーです。TDEEはこれに日常活動と運動を加えた総消費カロリーです。",
      },
      {
        q: "体重減少のために一日に何カロリーを食べるべきですか？",
        a: "安全な体重減少のためには、TDEEより一日500カロリーほど少なく食べることを推奨します。ただし、最低BMR以下で食べることは推奨しません。",
      },
      {
        q: "計算結果の精度はどのくらいですか？",
        a: "Mifflin-St Jeor式は臨床試験で検証された科学的公式です。しかし、個人の筋肉量、遺伝体質、健康状態によって実際の代謝量とは差がある場合があります。",
      },
    ],
  },
  es: {
    title: "Calculadora de BMR y TDEE",
    subtitle: "Ingresa tu género, edad, altura y peso para calcular tu Tasa Metabólica Basal y Gasto Energético Diario Total.",
    gender: "Género",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    agePlaceholder: "Ingresa edad",
    height: "Altura",
    heightPlaceholder: "Ingresa altura",
    heightUnit: "cm",
    weight: "Peso",
    weightPlaceholder: "Ingresa peso",
    weightUnit: "kg",
    calculate: "Calcular",
    result: "Resultado",
    bmr: "Tasa Metabólica Basal (BMR)",
    bmrDescription: "Calorías mínimas necesarias al día (energía gastada en reposo total)",
    tdee: "Gasto Energético Diario Total (TDEE)",
    activityLevel: "Nivel de actividad",
    sedentary: "Sedentario",
    sedentaryDesc: "× 1.2 — Trabaja sentado, casi sin ejercicio",
    light: "Ligeramente activo",
    lightDesc: "× 1.375 — Ejercicio ligero 1–3 días/semana",
    moderate: "Moderadamente activo",
    moderateDesc: "× 1.55 — Ejercicio moderado 3–5 días/semana",
    active: "Muy activo",
    activeDesc: "× 1.725 — Ejercicio intenso 6–7 días/semana",
    veryActive: "Extra activo",
    veryActiveDesc: "× 1.9 — Trabajo físico intenso o entrenamiento doble diario",
    limitations: "Los resultados son estimaciones. Las tasas metabólicas reales varían según masa muscular, genética y condiciones de salud.",
    whyBmr: "¿Por qué calcular tu BMR y TDEE?",
    bmrExplanation:
      "Tu Tasa Metabólica Basal (BMR) es la cantidad de calorías que tu cuerpo necesita para mantener funciones básicas en reposo — respirar, circular sangre, producir células.\n\nTu Gasto Energético Diario Total (TDEE) suman tus actividades diarias y ejercicio al BMR. Para perder peso, come menos calorías que tu TDEE; para ganar peso, come más.\n\nEsta calculadora usa la ecuación de Mifflin-St Jeor, considerada más precisa que la antigua fórmula de Harris-Benedict.",
    footer: "Procesado 100% en tu navegador. No se envían datos al servidor.",
    presets: "Preajustes",
    faq: [
      {
        q: "¿Cuál es la diferencia entre BMR y TDEE?",
        a: "BMR es la energía mínima que tu cuerpo necesita para funciones básicas. TDEE incluye tus actividades diarias y ejercicio además del BMR.",
      },
      {
        q: "¿Cuántas calorías debo comer para perder peso?",
        a: "Un enfoque seguro es comer aproximadamente 500 calorías menos que tu TDEE por día. Sin embargo, no se recomienda comer por debajo de tu BMR.",
      },
      {
        q: "¿Qué precisión tiene esta calculadora?",
        a: "La ecuación de Mifflin-St Jeor es una fórmula científicamente validada. Sin embargo, el metabolismo real varía según masa muscular, genética y salud.",
      },
    ],
  },
};

export default function BmrCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState<number>(1.55);
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  const d = i18nData[locale];

  function handleCalculate() {
    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (isNaN(ageNum) || isNaN(heightNum) || isNaN(weightNum)) return;
    if (ageNum < 10 || ageNum > 120 || heightNum < 50 || heightNum > 300 || weightNum < 10 || weightNum > 500) {
      return;
    }

    // Mifflin-St Jeor equation
    let bmrValue: number;
    if (gender === "male") {
      bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    setBmr(Math.round(bmrValue));
    setTdee(Math.round(bmrValue * activityLevel));
  }

  const presets = [
    { label: "20대", age: 28 },
    { label: "30대", age: 35 },
    { label: "40대", age: 45 },
    { label: "50대", age: 55 },
    { label: "60대", age: 65 },
  ];

  function setPresetAge(ageVal: number) {
    setAge(String(ageVal));
  }

  function getActivityOption(level: number) {
    const key = Object.keys({
      1.2: "sedentary",
      1.375: "light",
      1.55: "moderate",
      1.725: "active",
      1.9: "veryActive",
    })[Object.values({ 1.2: "sedentary", 1.375: "light", 1.55: "moderate", 1.725: "active", 1.9: "veryActive" }).indexOf(level as never)];
    const key2 = Object.entries({
      1.2: "sedentary" as const,
      1.375: "light" as const,
      1.55: "moderate" as const,
      1.725: "active" as const,
      1.9: "veryActive" as const,
    }).find(([k]) => parseFloat(k) === level);
    return key2 ? key2[1] : "moderate";
  }

  const activityMap: Record<string, { desc: (d: Data) => string; label: (d: Data) => string; value: number }> = {
    "1.2": {
      label: (d) => d.sedentary,
      desc: (d) => d.sedentaryDesc,
      value: 1.2,
    },
    "1.375": {
      label: (d) => d.light,
      desc: (d) => d.lightDesc,
      value: 1.375,
    },
    "1.55": {
      label: (d) => d.moderate,
      desc: (d) => d.moderateDesc,
      value: 1.55,
    },
    "1.725": {
      label: (d) => d.active,
      desc: (d) => d.activeDesc,
      value: 1.725,
    },
    "1.9": {
      label: (d) => d.veryActive,
      desc: (d) => d.veryActiveDesc,
      value: 1.9,
    },
  };

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
            name: "BMR & TDEE Calculator",
            description: "Calculate Basal Metabolic Rate and Total Daily Energy Expenditure using Mifflin-St Jeor equation",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

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

      <div className="mt-8">
        <Card className="border shadow-md">
          <CardContent className="space-y-6 p-6">
            <div className="rounded-lg bg-muted p-4 space-y-4">
              <p className="text-sm font-medium">{d.title.split(" ")[0]}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">{d.gender}</p>
                  <div className="mt-1 flex gap-4">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        checked={gender === "male"}
                        onChange={() => setGender("male")}
                        className="accent-indigo-600"
                      />
                      <span>{d.male}</span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        checked={gender === "female"}
                        onChange={() => setGender("female")}
                        className="accent-indigo-600"
                      />
                      <span>{d.female}</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-medium">{d.age}</p>
                    <input
                      type="number"
                      min="10"
                      max="120"
                      placeholder={d.agePlaceholder}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-1 w-full rounded-md border px-3 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{d.height}</p>
                    <input
                      type="number"
                      min="50"
                      max="300"
                      placeholder={d.heightPlaceholder}
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="mt-1 w-full rounded-md border px-3 py-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">{d.heightUnit}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-medium">{d.weight}</p>
                    <input
                      type="number"
                      min="10"
                      max="500"
                      placeholder={d.weightPlaceholder}
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="mt-1 w-full rounded-md border px-3 py-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">{d.weightUnit}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{d.activityLevel}</p>
                    <select
                      value={activityLevel}
                      onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
                      className="mt-1 w-full rounded-md border px-3 py-2"
                    >
                      {Object.keys(activityMap).map((k) => (
                        <option key={k} value={activityMap[k].value}>
                          {activityMap[k].label(d)}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">{activityMap[String(activityLevel)].desc(d)}</p>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm text-muted-foreground">{d.presets}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {presets.map((p) => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => setPresetAge(p.age)}
                        className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    onClick={handleCalculate}
                    className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                  >
                    {d.calculate}
                  </button>
                </div>
              </div>
            </div>

            {bmr !== null && tdee !== null && (
              <div className="rounded-lg bg-indigo-50 p-6 space-y-4">
                <p className="text-sm font-medium">{d.result}</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="text-center">
                    <p className="text-sm font-medium text-indigo-600">{d.bmr}</p>
                    <p className="mt-2 text-5xl font-bold text-indigo-700">{bmr.toLocaleString()}</p>
                    <p className="mt-1 text-sm text-muted-foreground">kcal/일</p>
                    <p className="mt-2 text-xs text-muted-foreground">{d.bmrDescription}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-indigo-600">{d.tdee}</p>
                    <p className="mt-2 text-5xl font-bold text-indigo-700">{tdee.toLocaleString()}</p>
                    <p className="mt-1 text-sm text-muted-foreground">kcal/일</p>
                    <p className="mt-2 text-xs text-muted-foreground">{activityMap[String(activityLevel)].desc(d)}</p>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-indigo-700">체중 감량:</span> 하루{" "}
                    <strong>{(tdee - 500).toLocaleString()} kcal</strong> 섭취 권장
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="font-semibold text-indigo-700">체중 증가:</span> 하루{" "}
                    <strong>{(tdee + 500).toLocaleString()} kcal</strong> 섭취 권장
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyBmr}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.bmrExplanation}</p>
      </section>

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

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
