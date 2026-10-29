export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  currentAge: string;
  retireAge: string;
  currentAssets: string;
  monthlyContribution: string;
  annualReturn: string;
  annualInflation: string;
  calculate: string;
  result: string;
  nominalValue: string;
  realValue: string;
  increase: string;
  whyRetirement: string;
  retirementExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "은퇴자금 시뮬레이터 (간이 버전)",
    subtitle: "현재 자산과 월 적립액으로 은퇴 시점 예상 자산을 간단히 계산합니다",
    inputs: "정보 입력",
    currentAge: "현재 나이",
    retireAge: "은퇴 목표 나이",
    currentAssets: "현재 자산",
    monthlyContribution: "월 적립액",
    annualReturn: "예상 연 수익률 (%)",
    annualInflation: "예상 연 물가상승률 (%)",
    calculate: "계산하기",
    result: "계산 결과",
    nominalValue: "은퇴 시점 예상 자산 (명목가치)",
    realValue: "물가반영 실질가치 (현재 화폐 기준)",
    increase: "현재 자산 대비 증가분",
    whyRetirement: "은퇴자금은 어떻게 계산하나요?",
    retirementExplanation: "미래가치 = 현재자산×(1+월수익률)^개월수 + 월적립액×(((1+월수익률)^개월수−1)÷월수익률)로 계산합니다. 월수익률은 연수익률÷100÷12입니다.\n\n물가반영 실질가치는 미래가치를 (1+연물가상승률/100)^투자기간(년)으로 나누어, 현재 화폐 가치 기준으로 환산한 값입니다.",
    disclaimer: "본 계산은 단순 적립 시뮬레이션이며, 은퇴 후 인출 단계·세금·수익률 변동성(몬테카를로 시뮬레이션 등)은 반영하지 않습니다. 더 정밀한 경제적 자유(FIRE) 계산이 필요하면 전용 FIRE 계산기를 이용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "은퇴자금 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "이 계산기는 은퇴 후 인출도 계산하나요?", a: "아니요. 본 계산기는 은퇴 시점까지 자산을 적립하는 단계만 계산하는 간이 버전입니다. 은퇴 후 자산을 어떻게 인출하며 얼마나 오래 유지되는지는 계산하지 않습니다." },
      { q: "실질가치는 왜 명목가치보다 작게 나오나요?", a: "물가상승률만큼 돈의 구매력이 떨어지기 때문입니다. 실질가치는 미래의 명목 금액을 현재 화폐 가치로 환산해, 실제 구매력이 어느 정도인지 보여줍니다." },
      { q: "수익률 변동성은 고려하지 않나요?", a: "네, 이 계산기는 매년 동일한 수익률이 적용된다고 가정하는 단순 모델입니다. 실제 투자는 수익률이 매년 달라지므로(변동성), 더 정밀한 분석에는 몬테카를로 시뮬레이션 같은 별도 도구가 필요합니다." },
    ],
  },
  en: {
    title: "Retirement Savings Simulator (Simple Version)",
    subtitle: "Simply estimate your assets at retirement from current assets and monthly contributions",
    inputs: "Enter Information",
    currentAge: "Current Age",
    retireAge: "Target Retirement Age",
    currentAssets: "Current Assets",
    monthlyContribution: "Monthly Contribution",
    annualReturn: "Expected Annual Return (%)",
    annualInflation: "Expected Annual Inflation (%)",
    calculate: "Calculate",
    result: "Result",
    nominalValue: "Estimated Assets at Retirement (Nominal)",
    realValue: "Inflation-Adjusted Real Value (Today's Money)",
    increase: "Increase vs. Current Assets",
    whyRetirement: "How are retirement savings calculated?",
    retirementExplanation: "Future Value = Current Assets × (1+Monthly Return)^Months + Monthly Contribution × (((1+Monthly Return)^Months−1) ÷ Monthly Return). Monthly return is the annual return ÷ 100 ÷ 12.\n\nThe inflation-adjusted real value divides the future value by (1+Annual Inflation/100)^(Years to Retirement), converting it to today's purchasing power.",
    disclaimer: "This is a simplified accumulation-only simulation and does not account for the withdrawal phase after retirement, taxes, or return volatility (e.g., Monte Carlo simulation). For more precise Financial Independence (FIRE) calculations, use a dedicated FIRE calculator.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Retirement savings calculation is processed in your browser.",
    faq: [
      { q: "Does this calculator also account for withdrawals after retirement?", a: "No. This is a simplified version that only calculates the accumulation phase up to retirement. It does not calculate how assets are withdrawn after retirement or how long they would last." },
      { q: "Why is the real value lower than the nominal value?", a: "Because purchasing power decreases by the rate of inflation. The real value converts the future nominal amount into today's purchasing power." },
      { q: "Does this account for return volatility?", a: "No, this calculator assumes the same return rate every year as a simplified model. Since actual investment returns vary year to year (volatility), a separate tool like a Monte Carlo simulation is needed for more precise analysis." },
    ],
  },
  ja: {
    title: "退職資金シミュレーター（簡易版）",
    subtitle: "現在の資産と月々の積立額から退職時の予想資産を簡単に計算します",
    inputs: "情報入力",
    currentAge: "現在の年齢",
    retireAge: "退職目標年齢",
    currentAssets: "現在の資産",
    monthlyContribution: "月々の積立額",
    annualReturn: "予想年間収益率（%）",
    annualInflation: "予想年間物価上昇率（%）",
    calculate: "計算する",
    result: "計算結果",
    nominalValue: "退職時の予想資産（名目価値）",
    realValue: "物価反映実質価値（現在の貨幣基準）",
    increase: "現在資産に対する増加分",
    whyRetirement: "退職資金はどのように計算しますか？",
    retirementExplanation: "将来価値＝現在資産×(1+月収益率)^月数＋月積立額×(((1+月収益率)^月数－1)÷月収益率) で計算します。月収益率は年収益率÷100÷12です。\n\n物価反映実質価値は、将来価値を(1+年物価上昇率/100)^投資期間(年) で割り、現在の貨幣価値基準に換算した値です。",
    disclaimer: "この計算は単純な積立シミュレーションであり、退職後の引き出し段階・税金・収益率の変動性（モンテカルロシミュレーションなど）は反映していません。より精密な経済的自由（FIRE）計算が必要な場合は、専用のFIRE計算機をご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "退職資金の計算はブラウザで処理されます。",
    faq: [
      { q: "このツールは退職後の引き出しも計算しますか？", a: "いいえ。本ツールは退職時までの資産積立段階のみを計算する簡易版です。退職後に資産をどのように引き出し、どのくらい持続するかは計算しません。" },
      { q: "実質価値が名目価値より小さく出るのはなぜですか？", a: "物価上昇率の分だけお金の購買力が下がるためです。実質価値は将来の名目金額を現在の貨幣価値に換算し、実際の購買力がどの程度かを示します。" },
      { q: "収益率の変動性は考慮されませんか？", a: "はい、このツールは毎年同じ収益率が適用されると仮定する単純なモデルです。実際の投資は毎年収益率が異なるため（変動性）、より精密な分析にはモンテカルロシミュレーションのような別のツールが必要です。" },
    ],
  },
  es: {
    title: "Simulador de Ahorro para el Retiro (Versión Simple)",
    subtitle: "Estima de forma simple tus activos al retiro a partir de los activos actuales y las aportaciones mensuales",
    inputs: "Ingresa la información",
    currentAge: "Edad Actual",
    retireAge: "Edad Objetivo de Retiro",
    currentAssets: "Activos Actuales",
    monthlyContribution: "Aportación Mensual",
    annualReturn: "Rendimiento Anual Esperado (%)",
    annualInflation: "Inflación Anual Esperada (%)",
    calculate: "Calcular",
    result: "Resultado",
    nominalValue: "Activos Estimados al Retiro (Nominal)",
    realValue: "Valor Real Ajustado por Inflación (Dinero de Hoy)",
    increase: "Incremento vs. Activos Actuales",
    whyRetirement: "¿Cómo se calculan los ahorros para el retiro?",
    retirementExplanation: "Valor Futuro = Activos Actuales × (1+Rendimiento Mensual)^Meses + Aportación Mensual × (((1+Rendimiento Mensual)^Meses−1) ÷ Rendimiento Mensual). El rendimiento mensual es el rendimiento anual ÷ 100 ÷ 12.\n\nEl valor real ajustado por inflación divide el valor futuro entre (1+Inflación Anual/100)^(Años al Retiro), convirtiéndolo al poder de compra de hoy.",
    disclaimer: "Esta es una simulación simplificada solo de acumulación y no considera la fase de retiro después de jubilarse, impuestos, ni la volatilidad de rendimientos (p. ej., simulación de Monte Carlo). Para cálculos más precisos de independencia financiera (FIRE), usa una calculadora FIRE dedicada.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de ahorro para el retiro se procesa en tu navegador.",
    faq: [
      { q: "¿Esta calculadora también considera los retiros después de jubilarse?", a: "No. Esta es una versión simplificada que solo calcula la fase de acumulación hasta el retiro. No calcula cómo se retiran los activos después de jubilarse ni cuánto durarían." },
      { q: "¿Por qué el valor real es menor que el valor nominal?", a: "Porque el poder de compra disminuye según la tasa de inflación. El valor real convierte el monto nominal futuro al poder de compra de hoy." },
      { q: "¿Se considera la volatilidad de los rendimientos?", a: "No, esta calculadora asume la misma tasa de rendimiento cada año como modelo simplificado. Dado que los rendimientos reales varían año a año (volatilidad), se necesita una herramienta separada como una simulación de Monte Carlo para un análisis más preciso." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
