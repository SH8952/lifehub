export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  bmrInput: string;
  bmrPlaceholder: string;
  bmrLabel: string;
  bmrHelp: string;
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
  calculate: string;
  result: string;
  tdee: string;
  tdeeDescription: string;
  maintenance: string;
  weightLoss: string;
  weightGain: string;
  weightLossDesc: string;
  weightGainDesc: string;
  maintenanceDesc: string;
  orCalculateBmr: string;
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
  limitations: string;
  whyTdee: string;
  tdeeExplanation: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "활동대사량 (TDEE) 계산기",
    subtitle: "기초대사량(BMR)과 활동량을 입력하면 하루 필요 칼로리를 계산합니다.",
    bmrInput: "기초대사량 (BMR)",
    bmrPlaceholder: "BMR 값 입력",
    bmrLabel: "또는 아래에서 직접 계산하기",
    bmrHelp: "BMR을 모르시면 아래 항목을 입력해 자동 계산할 수 있습니다.",
    activityLevel: "활동량",
    sedentary: "거의 앉아서 생활",
    sedentaryDesc: "× 1.2 — 하루 대부분 앉아서 지내고 운동은 거의 안 함",
    light: "가벼운 활동",
    lightDesc: "× 1.375 — 주 1~3일 가벼운 운동",
    moderate: "보통 활동",
    moderateDesc: "× 1.55 — 주 3~5일 중간 강도 운동",
    active: "매우 활동적",
    activeDesc: "× 1.725 — 주 6~7일 강도 있는 운동",
    veryActive: "극도로 활동적",
    veryActiveDesc: "× 1.9 — 매우 힘든 신체 노동 또는 하루 두 차례 훈련",
    calculate: "계산하기",
    result: "계산 결과",
    tdee: "활동대사량 (TDEE)",
    tdeeDescription: "하루에 실제로 소비하는 총 칼로리 (일상 활동 + 운동 포함)",
    maintenance: "체중 유지",
    weightLoss: "체중 감량",
    weightGain: "체중 증가",
    weightLossDesc: "하루 500칼로리 부족 → 주 0.5kg 감량",
    weightGainDesc: "하루 500칼로리 초과 → 주 0.5kg 증가",
    maintenanceDesc: "현재 칼로리 섭취 → 체중 유지",
    orCalculateBmr: "",
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
    limitations: "계산 결과는 참고용이며, 실제 대사량은 근육량, 유전적 체질, 건강 상태에 따라 다를 수 있습니다.",
    whyTdee: "왜 TDEE를 계산해야 하나요?",
    tdeeExplanation:
      "TDEE(활동대사량)는 하루에 실제로 소비하는 총 칼로리입니다. BMR(기초대사량)에 일상 활동과 운동을 더합니다.\n\n체중 관리를 위해선 TDEE가 기준이 됩니다:\n• 체중 유지: TDEE와 같은 칼로리 섭취\n• 체중 감량: TDEE에서 500칼로리 뺀 섭취 (주 0.5kg 감량)\n• 체중 증가: TDEE에 500칼로리 더한 섭취 (주 0.5kg 증가)\n\n이 도구는 Mifflin-St Jeor 공식을 사용해 BMR을 자동 계산합니다. 정확하지 않으면 직접 BMR 값을 입력하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "BMR과 TDEE가 어떻게 다른가요?",
        a: "BMR은 생명 유지에만 필요한 최소 에너지입니다. TDEE는 여기에 일상 활동과 운동을 더한 총 소비 칼로리입니다.",
      },
      {
        q: "TDEE를 계산한 후 섭취량은 어떻게 결정하나요?",
        a: "체중 관리 목표를 설정하세요. 유지: TDEE 섭취, 감량: TDEE-500, 증가: TDEE+500을 권장합니다.",
      },
      {
        q: "계산 결과의 정확도는 어떻게 되나요?",
        a: "Mifflin-St Jeor 공식은 임상에서 검증된 과학적 공식입니다. 하지만 개인의 근육량, 유전적 체질, 건강 상태에 따라 실제 대사량과는 차이가 있을 수 있습니다.",
      },
    ],
  },
  en: {
    title: "TDEE Calculator (Total Daily Energy Expenditure)",
    subtitle: "Enter your BMR and activity level to calculate your daily calorie needs.",
    bmrInput: "Basal Metabolic Rate (BMR)",
    bmrPlaceholder: "Enter your BMR value",
    bmrLabel: "Or calculate below",
    bmrHelp: "Don't know your BMR? Enter details below for automatic calculation.",
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
    calculate: "Calculate",
    result: "Result",
    tdee: "Total Daily Energy Expenditure (TDEE)",
    tdeeDescription: "Total calories burned per day (including daily activities and exercise)",
    maintenance: "Maintain weight",
    weightLoss: "Lose weight",
    weightGain: "Gain weight",
    weightLossDesc: "500 cal deficit → 0.5 kg/week loss",
    weightGainDesc: "500 cal surplus → 0.5 kg/week gain",
    maintenanceDesc: "Eat TDEE → maintain current weight",
    orCalculateBmr: "",
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
    limitations: "These results are estimates. Actual metabolic rates vary by muscle mass, genetics, and health conditions.",
    whyTdee: "Why calculate your TDEE?",
    tdeeExplanation:
      "Your Total Daily Energy Expenditure (TDEE) is the total calories you burn in a day, including all activities and exercise.\n\nTo manage your weight:\n• Maintain: eat calories equal to your TDEE\n• Lose weight: eat 500 calories less than your TDEE (0.5 kg/week loss)\n• Gain weight: eat 500 calories more than your TDEE (0.5 kg/week gain)\n\nThis tool uses the Mifflin-St Jeor equation to auto-calculate your BMR. If you don't know your BMR, enter your details below.",
    footer: "100% processed in your browser. No data is sent to the server.",
    faq: [
      {
        q: "What is the difference between BMR and TDEE?",
        a: "BMR is the minimum energy needed for basic life functions. TDEE adds your daily activities and exercise on top of BMR.",
      },
      {
        q: "How do I set my daily calorie intake after calculating TDEE?",
        a: "Set your weight management goal: Maintain = eat TDEE, Lose = TDEE-500, Gain = TDEE+500 calories.",
      },
      {
        q: "How accurate is this calculator?",
        a: "The Mifflin-St Jeor equation is scientifically validated. However, actual metabolism varies by muscle mass, genetics, and health.",
      },
    ],
  },
  ja: {
    title: "活動代謝量 (TDEE) 計算機",
    subtitle: "基礎代謝量(BMR)と活動量を入力すると、1日に必要なカロリーを計算します。",
    bmrInput: "基礎代謝量 (BMR)",
    bmrPlaceholder: "BMR値を入力",
    bmrLabel: "または以下から直接計算",
    bmrHelp: "BMRがわからない方は、下の項目を入力すると自動計算できます。",
    activityLevel: "活動量",
    sedentary: "ほとんど運動しない、デスクワーク",
    sedentaryDesc: "× 1.2 — ほとんどの時間座っている",
    light: "軽い活動",
    lightDesc: "× 1.375 — 週1〜3回軽い運動",
    moderate: "普通の活動",
    moderateDesc: "× 1.55 — 週3〜5回中強度の運動",
    active: "非常に活動的",
    activeDesc: "× 1.725 — 週6〜7回激しい運動",
    veryActive: "極度の活動的",
    veryActiveDesc: "× 1.9 — 非常に厳しい肉体労働または1日2回トレーニング",
    calculate: "計算",
    result: "計算結果",
    tdee: "活動代謝量 (TDEE)",
    tdeeDescription: "実際に1日に消費する総カロリー（日常活動＋運動を含む）",
    maintenance: "体重維持",
    weightLoss: "体重減少",
    weightGain: "体重増加",
    weightLossDesc: "1日500カロリー不足 → 週0.5kg減量",
    weightGainDesc: "1日500カロリー超過 → 週0.5kg増加",
    maintenanceDesc: "現在の摂取カロリーのまま → 体重維持",
    orCalculateBmr: "",
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
    limitations: "計算結果は参考用です。実際の代謝量は筋肉量、遺伝体質、健康状態によって異なります。",
    whyTdee: "なぜTDEEを計算するのですか？",
    tdeeExplanation:
      "TDEE（活動代謝量）は、日常活動と運動を含めて実際に消費する総カロリーです。BMR（基礎代謝量）に日常活動と運動を加えます。\n\n体重管理のためにTDEEが基準になります:\n• 体重維持：TDEEと同じカロリーを摂取\n• 体重減量：TDEEから500kcal引いたカロリーを摂取（週0.5kg減量）\n• 体重増加：TDEEに500kcal足したカロリーを摂取（週0.5kg増加）\n\nこの計算機はMifflin-St Jeor式を使用してBMRを自動計算します。正確な値がわからない場合は直接BMR値を入力してください。",
    footer: "ブラウザで100％処理。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "BMRとTDEEの違いは何ですか？",
        a: "BMRは生命維持に最小限必要なエネルギーです。TDEEには日常活動と運動が加えられた総消費カロリーです。",
      },
      {
        q: "TDEEを計算した後、摂取量はどう決めればいいですか？",
        a: "体重管理目標を設定してください。維持：TDEE摂取、減量：TDEE-500、増加：TDEE+500を推奨します。",
      },
      {
        q: "計算結果の精度はどのくらいですか？",
        a: "Mifflin-St Jeor式は臨床で検証された科学的公式です。しかし、個人の筋肉量、遺伝体質、健康状態によって実際の代謝量とは差がある場合があります。",
      },
    ],
  },
  es: {
    title: "Calculadora de TDEE (Gasto Energético Diario Total)",
    subtitle: "Ingresa tu TMB y nivel de actividad para calcular tus necesidades calóricas diarias.",
    bmrInput: "Tasa Metabólica Basal (TMB/BMR)",
    bmrPlaceholder: "Ingresa tu valor de TMB",
    bmrLabel: "O calcular abajo",
    bmrHelp: "¿No conoces tu TMB? Ingresa los datos abajo para cálculo automático.",
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
    calculate: "Calcular",
    result: "Resultado",
    tdee: "Gasto Energético Diario Total (TDEE)",
    tdeeDescription: "Calorías totales quemadas por día (incluye actividades diarias y ejercicio)",
    maintenance: "Mantener peso",
    weightLoss: "Perder peso",
    weightGain: "Subir peso",
    weightLossDesc: "500 cal defecto → 0.5 kg/semana pérdida",
    weightGainDesc: "500 cal exceso → 0.5 kg/semana ganancia",
    maintenanceDesc: "Comer TDEE → mantener peso actual",
    orCalculateBmr: "",
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
    limitations: "Estos resultados son estimaciones. Las tasas metabólicas reales varían según masa muscular, genética y condiciones de salud.",
    whyTdee: "¿Por qué calcular tu TDEE?",
    tdeeExplanation:
      "Tu Gasto Energético Diario Total (TDEE) es el total de calorías que quemas en un día, incluindo todas las actividades y ejercicios.\n\nPara gestionar tu peso:\n• Mantener: comer igual a tu TDEE\n• Perder: comer 500 calorías menos que tu TDEE (0.5 kg/semana de pérdida)\n• Ganar: comer 500 calorías más que tu TDEE (0.5 kg/semana de ganancia)\n\nEsta herramienta usa la ecuación de Mifflin-St Jeor para calcular automáticamente tu TMB. Si no conoces tu TMB, ingresa tus datos abajo.",
    footer: "Procesado 100% en tu navegador. No se envían datos al servidor.",
    faq: [
      {
        q: "¿Cuál es la diferencia entre TMB y TDEE?",
        a: "La TMB es la energía mínima para funciones vitales. El TDEE incluye tus actividades diarias y ejercicio además de la TMB.",
      },
      {
        q: "¿Cómo determino mi ingesta calórica después de calcular el TDEE?",
        a: "Establece tu meta: Mantener = comer TDEE, Perder = TDEE-500, Ganar = TDEE+500 calorías.",
      },
      {
        q: "¿Qué precisión tiene esta calculadora?",
        a: "La ecuación de Mifflin-St Jeor está validada científicamente. Sin embargo, el metabolismo real varía según masa muscular, genética y salud.",
      },
    ],
  },
};
