export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  currentWeightLabel: string;
  targetWeightLabel: string;
  weeklyRateLabel: string;
  calculateBtn: string;
  resultLabel: string;
  weeksNeededLabel: string;
  weeksUnit: string;
  dailyDeficitLabel: string;
  kcalUnit: string;
  alreadyAtGoalMsg: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "목표체중 감량 계산기",
    subtitle: "현재 체중과 목표 체중, 주간 감량 속도를 입력해 목표 달성까지 걸리는 기간을 계산합니다.",
    currentWeightLabel: "현재 체중 (kg)",
    targetWeightLabel: "목표 체중 (kg)",
    weeklyRateLabel: "주간 감량 목표 (kg/주)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    weeksNeededLabel: "예상 소요 기간",
    weeksUnit: "주",
    dailyDeficitLabel: "필요한 일일 칼로리 결손",
    kcalUnit: "kcal",
    alreadyAtGoalMsg: "이미 목표 체중에 도달했거나 더 낮습니다.",
    disclaimer: "⚠️ 본 계산 결과는 일반적인 공식(지방 1kg ≈ 7,700kcal)에 기반한 참고용 추정치이며, 의학적 조언이 아닙니다. 건강한 감량 속도는 주당 0.5~1kg이 권장되며, 체중 관리 계획은 의사·영양사와 상담하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "현재 체중과 목표 체중을 입력합니다.",
      "주간 감량 목표(kg/주)를 설정합니다. 건강한 속도는 0.5~1kg/주입니다.",
      "'계산하기'를 눌러 목표 달성까지 걸리는 기간과 필요한 일일 칼로리 결손을 확인하세요.",
    ],
    faq: [
      { q: "건강한 체중 감량 속도는 얼마인가요?", a: "일반적으로 주당 0.5~1kg의 감량이 건강하고 지속 가능한 속도로 권장됩니다. 너무 빠른 감량은 근손실과 요요현상의 위험이 있습니다." },
      { q: "일일 칼로리 결손이란 무엇인가요?", a: "지방 1kg을 줄이려면 약 7,700kcal의 칼로리 결손이 필요합니다. 이를 목표 기간의 일수로 나누면 하루에 줄여야 할 칼로리를 알 수 있습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Weight Loss Goal Calculator",
    subtitle: "Enter your current weight, target weight, and weekly loss rate to calculate how long it will take to reach your goal.",
    currentWeightLabel: "Current Weight (kg)",
    targetWeightLabel: "Target Weight (kg)",
    weeklyRateLabel: "Weekly Loss Goal (kg/week)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    weeksNeededLabel: "Estimated Time Needed",
    weeksUnit: "weeks",
    dailyDeficitLabel: "Required Daily Calorie Deficit",
    kcalUnit: "kcal",
    alreadyAtGoalMsg: "You've already reached or passed your target weight.",
    disclaimer: "⚠️ This result is a reference estimate based on the general formula (1kg fat ≈ 7,700kcal) and is not medical advice. A healthy loss rate is 0.5–1kg per week; consult a doctor or dietitian for a personalized plan.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your current and target weight.",
      "Set your weekly loss goal (kg/week). A healthy rate is 0.5–1kg/week.",
      "Click 'Calculate' to see the time needed and the required daily calorie deficit.",
    ],
    faq: [
      { q: "What's a healthy weight loss rate?", a: "Losing 0.5–1kg per week is generally recommended as a healthy, sustainable pace. Losing too fast risks muscle loss and rebound weight gain." },
      { q: "What is daily calorie deficit?", a: "Losing 1kg of fat requires roughly a 7,700kcal deficit. Dividing that by the number of days in your goal period gives your daily target." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "目標体重減量計算機",
    subtitle: "現在の体重と目標体重、週間減量速度を入力して目標達成までの期間を計算します。",
    currentWeightLabel: "現在の体重 (kg)",
    targetWeightLabel: "目標体重 (kg)",
    weeklyRateLabel: "週間減量目標 (kg/週)",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    weeksNeededLabel: "予想所要期間",
    weeksUnit: "週",
    dailyDeficitLabel: "必要な1日のカロリー欠損",
    kcalUnit: "kcal",
    alreadyAtGoalMsg: "すでに目標体重に到達またはそれ以下です。",
    disclaimer: "⚠️ この結果は一般的な公式（脂肪1kg≈7,700kcal）に基づく参考用の推定値であり、医学的アドバイスではありません。健康的な減量速度は週0.5〜1kgが推奨され、体重管理計画は医師・栄養士に相談してください。",
    howTitle: "使用方法",
    howSteps: [
      "現在の体重と目標体重を入力します。",
      "週間減量目標（kg/週）を設定します。健康的な速度は週0.5〜1kgです。",
      "「計算する」を押して目標達成までの期間と必要な1日のカロリー欠損を確認しましょう。",
    ],
    faq: [
      { q: "健康的な減量速度はどのくらいですか？", a: "一般的に週0.5〜1kgの減量が健康的で持続可能な速度として推奨されます。速すぎる減量は筋肉減少とリバウンドのリスクがあります。" },
      { q: "1日のカロリー欠損とは何ですか？", a: "脂肪1kgを減らすには約7,700kcalのカロリー欠損が必要です。これを目標期間の日数で割ると1日に減らすべきカロリーがわかります。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Meta de Pérdida de Peso",
    subtitle: "Introduce tu peso actual, peso objetivo y tasa de pérdida semanal para calcular cuánto tardarás en alcanzar tu meta.",
    currentWeightLabel: "Peso Actual (kg)",
    targetWeightLabel: "Peso Objetivo (kg)",
    weeklyRateLabel: "Meta de Pérdida Semanal (kg/semana)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    weeksNeededLabel: "Tiempo Estimado Necesario",
    weeksUnit: "semanas",
    dailyDeficitLabel: "Déficit Calórico Diario Necesario",
    kcalUnit: "kcal",
    alreadyAtGoalMsg: "Ya has alcanzado o superado tu peso objetivo.",
    disclaimer: "⚠️ Este resultado es una estimación de referencia basada en la fórmula general (1kg de grasa ≈ 7,700kcal) y no es consejo médico. Consulta a un médico o nutricionista.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu peso actual y objetivo.",
      "Establece tu meta semanal (kg/semana). Una tasa saludable es 0.5–1kg/semana.",
      "Haz clic en 'Calcular' para ver el tiempo necesario y el déficit calórico diario.",
    ],
    faq: [
      { q: "¿Cuál es una tasa de pérdida de peso saludable?", a: "Perder 0.5–1kg por semana se recomienda generalmente como un ritmo saludable y sostenible." },
      { q: "¿Qué es el déficit calórico diario?", a: "Perder 1kg de grasa requiere un déficit de aproximadamente 7,700kcal. Dividiendo esto por los días de tu período objetivo obtienes tu meta diaria." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
