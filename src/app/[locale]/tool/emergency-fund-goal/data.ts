export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  monthlyExpenseLabel: string;
  targetMonthsLabel: string;
  currentSavingsLabel: string;
  monthlySavingLabel: string;
  calculateBtn: string;
  resultLabel: string;
  goalAmountLabel: string;
  remainingLabel: string;
  monthsNeededLabel: string;
  monthsUnit: string;
  alreadyReachedMsg: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "비상금 목표 계산기",
    subtitle: "월 생활비와 목표 개월 수를 입력해 필요한 비상금 목표액과 모으는 데 걸리는 기간을 계산합니다.",
    monthlyExpenseLabel: "월 생활비",
    targetMonthsLabel: "목표 개월 수",
    currentSavingsLabel: "현재 보유 비상금",
    monthlySavingLabel: "월 저축 가능액",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    goalAmountLabel: "목표 비상금",
    remainingLabel: "추가로 모아야 할 금액",
    monthsNeededLabel: "목표 달성까지 소요 기간",
    monthsUnit: "개월",
    alreadyReachedMsg: "🎉 이미 목표를 달성했습니다!",
    howTitle: "사용 방법",
    howSteps: [
      "월 생활비와 목표로 하는 개월 수(보통 3~6개월)를 입력합니다.",
      "현재 비상금과 월 저축 가능액을 입력합니다.",
      "'계산하기'를 눌러 목표액과 달성까지 걸리는 기간을 확인하세요.",
    ],
    faq: [
      { q: "비상금은 보통 몇 개월치를 모아야 하나요?", a: "일반적으로 월 생활비의 3~6개월치를 권장하지만, 소득이 불안정하거나 부양가족이 많다면 6~12개월치를 목표로 하는 것이 더 안전합니다." },
      { q: "비상금은 어디에 보관해야 하나요?", a: "비상금은 투자 위험 없이 필요시 즉시 꺼낼 수 있어야 하므로, 일반적으로 입출금이 자유로운 통장이나 단기 예금에 보관하는 것이 권장됩니다." },
    ],
    disclaimer: "⚠️ 본 계산 결과는 입력하신 월 생활비를 기준으로 한 참고용 추정치이며, 실제 적정 비상금 규모는 개인의 소득 안정성, 부양가족, 보험 가입 여부 등에 따라 달라질 수 있습니다. 구체적인 재무 계획은 전문가와 상담하세요.",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Emergency Fund Goal Calculator",
    subtitle: "Enter your monthly expenses and target months to calculate your emergency fund goal and how long it will take to save.",
    monthlyExpenseLabel: "Monthly Living Expenses",
    targetMonthsLabel: "Target Months",
    currentSavingsLabel: "Current Emergency Fund",
    monthlySavingLabel: "Monthly Savings Capacity",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    goalAmountLabel: "Emergency Fund Goal",
    remainingLabel: "Remaining to Save",
    monthsNeededLabel: "Time to Reach Goal",
    monthsUnit: "months",
    alreadyReachedMsg: "🎉 You've already reached your goal!",
    howTitle: "How to Use",
    howSteps: [
      "Enter your monthly expenses and target months (usually 3-6).",
      "Enter your current emergency fund and monthly savings capacity.",
      "Click 'Calculate' to see your goal amount and time to reach it.",
    ],
    faq: [
      { q: "How many months of expenses should an emergency fund cover?", a: "3-6 months is commonly recommended, but 6-12 months may be safer if your income is unstable or you have many dependents." },
      { q: "Where should I keep my emergency fund?", a: "It should be easily accessible without investment risk, so a liquid savings account or short-term deposit is generally recommended." },
    ],
    disclaimer: "⚠️ This result is a reference estimate based on your monthly expenses. The appropriate emergency fund size can vary depending on income stability, dependents, and insurance coverage. Consult a financial professional for a specific financial plan.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "緊急資金目標計算機",
    subtitle: "月の生活費と目標月数を入力して必要な緊急資金目標額と貯める期間を計算します。",
    monthlyExpenseLabel: "月の生活費",
    targetMonthsLabel: "目標月数",
    currentSavingsLabel: "現在の緊急資金",
    monthlySavingLabel: "月の貯蓄可能額",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    goalAmountLabel: "目標緊急資金",
    remainingLabel: "追加で貯めるべき金額",
    monthsNeededLabel: "目標達成までの期間",
    monthsUnit: "か月",
    alreadyReachedMsg: "🎉 すでに目標を達成しています！",
    howTitle: "使用方法",
    howSteps: [
      "月の生活費と目標月数（通常3〜6か月）を入力します。",
      "現在の緊急資金と月の貯蓄可能額を入力します。",
      "「計算する」を押して目標額と達成までの期間を確認しましょう。",
    ],
    faq: [
      { q: "緊急資金は通常何か月分貯めるべきですか？", a: "一般的に月の生活費の3〜6か月分が推奨されますが、収入が不安定な場合や扶養家族が多い場合は6〜12か月分を目標にする方が安全です。" },
      { q: "緊急資金はどこに保管すべきですか？", a: "投資リスクなく必要時すぐに取り出せる必要があるため、一般的に入出金自由な口座や短期預金が推奨されます。" },
    ],
    disclaimer: "⚠️ この結果は入力した月の生活費に基づく参考用の推定値であり、実際の適正な緊急資金規模は収入の安定性、扶養家族、保険加入状況などによって異なります。具体的な財務計画については専門家にご相談ください。",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Meta de Fondo de Emergencia",
    subtitle: "Introduce tus gastos mensuales y meses objetivo para calcular tu meta de fondo de emergencia.",
    monthlyExpenseLabel: "Gastos de Vida Mensuales",
    targetMonthsLabel: "Meses Objetivo",
    currentSavingsLabel: "Fondo de Emergencia Actual",
    monthlySavingLabel: "Capacidad de Ahorro Mensual",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    goalAmountLabel: "Meta de Fondo de Emergencia",
    remainingLabel: "Faltante por Ahorrar",
    monthsNeededLabel: "Tiempo para Alcanzar la Meta",
    monthsUnit: "meses",
    alreadyReachedMsg: "🎉 ¡Ya alcanzaste tu meta!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tus gastos mensuales y meses objetivo (normalmente 3-6).",
      "Introduce tu fondo actual y capacidad de ahorro mensual.",
      "Haz clic en 'Calcular' para ver tu meta y el tiempo para alcanzarla.",
    ],
    faq: [
      { q: "¿Cuántos meses de gastos debería cubrir un fondo de emergencia?", a: "Se recomiendan comúnmente 3-6 meses, pero 6-12 meses puede ser más seguro si tu ingreso es inestable." },
      { q: "¿Dónde debería guardar mi fondo de emergencia?", a: "Debe ser fácilmente accesible sin riesgo de inversión, por lo que se recomienda una cuenta líquida o depósito a corto plazo." },
    ],
    disclaimer: "⚠️ Este resultado es una estimación de referencia basada en tus gastos mensuales. El tamaño adecuado del fondo de emergencia puede variar según la estabilidad de ingresos, dependientes y cobertura de seguro. Consulta a un profesional financiero para un plan específico.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
