export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  targetAmountLabel: string;
  periodLabel: string;
  currentSavingsLabel: string;
  annualRateLabel: string;
  calculateBtn: string;
  resultLabel: string;
  monthlyAmountLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "목표 저축액 역산 계산기",
    subtitle: "목표 금액과 기간을 입력하면 매월 얼마씩 저축해야 하는지 역산해줍니다.",
    targetAmountLabel: "목표 금액",
    periodLabel: "저축 기간 (개월)",
    currentSavingsLabel: "현재 보유 금액",
    annualRateLabel: "예상 연이율 (%, 선택)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    monthlyAmountLabel: "매월 저축해야 할 금액",
    disclaimer: "이율을 입력한 경우 단리 기준 근사치로 계산되며, 실제 금융상품의 복리 적용 방식에 따라 결과가 다를 수 있습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "모으고 싶은 목표 금액과 기간(개월)을 입력합니다.",
      "현재 보유 금액과 예상 연이율(선택)을 입력합니다.",
      "'계산하기'를 눌러 매월 저축해야 할 금액을 확인하세요.",
    ],
    faq: [
      { q: "이율을 입력하지 않으면 어떻게 계산되나요?", a: "이율을 0으로 두면 단순히 (목표금액 - 현재금액)을 기간으로 나눈 값이 계산됩니다." },
      { q: "목표를 더 빨리 달성하려면 어떻게 해야 하나요?", a: "기간을 줄이거나 현재 보유 금액을 늘리면 매월 필요한 저축액이 줄어듭니다. 또한 이율이 높은 상품을 활용하면 필요한 월 저축액을 약간 낮출 수 있습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Reverse Savings Goal Calculator",
    subtitle: "Enter your target amount and timeframe to calculate how much you need to save each month.",
    targetAmountLabel: "Target Amount",
    periodLabel: "Savings Period (Months)",
    currentSavingsLabel: "Current Savings",
    annualRateLabel: "Expected Annual Rate (%, optional)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    monthlyAmountLabel: "Required Monthly Savings",
    disclaimer: "When a rate is entered, the result is a simple-interest approximation. Actual compound interest products may yield different results.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your target amount and timeframe in months.",
      "Enter your current savings and expected annual rate (optional).",
      "Click 'Calculate' to see the required monthly savings.",
    ],
    faq: [
      { q: "How is it calculated without a rate?", a: "With a 0% rate, it's simply (target amount - current savings) divided by the number of months." },
      { q: "How can I reach my goal faster?", a: "Shortening the period or increasing your current savings reduces the required monthly amount. A higher interest rate product can also slightly lower it." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "目標貯蓄額逆算計算機",
    subtitle: "目標金額と期間を入力すると毎月いくら貯蓄すべきか逆算します。",
    targetAmountLabel: "目標金額",
    periodLabel: "貯蓄期間（か月）",
    currentSavingsLabel: "現在の保有金額",
    annualRateLabel: "予想年利率（%、任意）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    monthlyAmountLabel: "毎月貯蓄すべき金額",
    disclaimer: "利率を入力した場合、単利基準の近似値として計算され、実際の金融商品の複利適用方式によって結果が異なる場合があります。",
    howTitle: "使用方法",
    howSteps: [
      "貯めたい目標金額と期間（か月）を入力します。",
      "現在の保有金額と予想年利率（任意）を入力します。",
      "「計算する」を押して毎月貯蓄すべき金額を確認しましょう。",
    ],
    faq: [
      { q: "利率を入力しないとどう計算されますか？", a: "利率を0にすると、単純に（目標金額－現在金額）を期間で割った値が計算されます。" },
      { q: "目標をより早く達成するにはどうすればいいですか？", a: "期間を短縮するか現在の保有金額を増やすと、毎月必要な貯蓄額が減ります。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora Inversa de Meta de Ahorro",
    subtitle: "Introduce tu monto objetivo y plazo para calcular cuánto necesitas ahorrar cada mes.",
    targetAmountLabel: "Monto Objetivo",
    periodLabel: "Período de Ahorro (Meses)",
    currentSavingsLabel: "Ahorros Actuales",
    annualRateLabel: "Tasa Anual Esperada (%, opcional)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    monthlyAmountLabel: "Ahorro Mensual Requerido",
    disclaimer: "Cuando se introduce una tasa, el resultado es una aproximación de interés simple. Los productos reales pueden variar.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu monto objetivo y plazo en meses.",
      "Introduce tus ahorros actuales y tasa anual esperada (opcional).",
      "Haz clic en 'Calcular' para ver el ahorro mensual requerido.",
    ],
    faq: [
      { q: "¿Cómo se calcula sin una tasa?", a: "Con una tasa del 0%, es simplemente (monto objetivo - ahorros actuales) dividido por los meses." },
      { q: "¿Cómo puedo alcanzar mi meta más rápido?", a: "Acortar el período o aumentar tus ahorros actuales reduce el monto mensual requerido." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
