export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  monthlyIncome: string;
  monthlyDebt: string;
  calculate: string;
  result: string;
  dtiRate: string;
  gradeGood: string;
  gradeCaution: string;
  gradeRisk: string;
  whyDti: string;
  dtiExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "DTI(부채상환비율) 계산기",
    subtitle: "월소득과 월부채상환액으로 DTI를 계산합니다",
    inputs: "정보 입력",
    monthlyIncome: "월소득",
    monthlyDebt: "월부채상환총액",
    calculate: "계산하기",
    result: "계산 결과",
    dtiRate: "DTI (부채상환비율)",
    gradeGood: "양호 (36% 이하)",
    gradeCaution: "주의 (36~43%)",
    gradeRisk: "위험 (43% 초과)",
    whyDti: "DTI란 무엇인가요?",
    dtiExplanation: "DTI(Debt To Income, 부채상환비율)는 월소득 중 부채 상환에 쓰이는 비율을 나타내는 지표입니다. DTI = (월부채상환총액 / 월소득) × 100으로 계산합니다.\n\n일반적으로 36% 이하면 양호, 36~43%는 주의, 43%를 초과하면 위험 수준으로 참고됩니다. 다만 이는 일반론적 기준이며, 실제 대출 심사 기준은 금융기관·국가별로 다릅니다.",
    disclaimer: "본 계산 결과는 참고용 일반 기준이며, 실제 대출 심사나 금융 상담을 대체하지 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "DTI 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "DTI가 낮을수록 좋은가요?", a: "일반적으로 DTI가 낮을수록 상환 여력이 좋다고 평가됩니다. 다만 대출 심사 기준은 기관마다 다릅니다." },
      { q: "월부채상환총액에는 무엇이 포함되나요?", a: "주택담보대출, 신용대출, 카드 할부 등 매월 상환하는 모든 부채의 합계를 입력하세요." },
      { q: "DTI와 DSR은 다른가요?", a: "DTI는 부채상환비율이고, DSR(총부채원리금상환비율)은 모든 대출의 원리금을 기준으로 하는 더 엄격한 지표입니다. 본 계산기는 DTI만 다룹니다." },
    ],
  },
  en: {
    title: "DTI (Debt-to-Income) Calculator",
    subtitle: "Calculate your DTI from monthly income and monthly debt payments",
    inputs: "Enter Information",
    monthlyIncome: "Monthly Income",
    monthlyDebt: "Total Monthly Debt Payments",
    calculate: "Calculate",
    result: "Result",
    dtiRate: "DTI (Debt-to-Income Ratio)",
    gradeGood: "Good (36% or below)",
    gradeCaution: "Caution (36-43%)",
    gradeRisk: "Risk (over 43%)",
    whyDti: "What is DTI?",
    dtiExplanation: "DTI (Debt-to-Income ratio) shows the percentage of your monthly income spent on debt payments. DTI = (Total Monthly Debt Payments / Monthly Income) × 100.\n\nGenerally, 36% or below is considered good, 36-43% is caution, and over 43% is considered risky. However, these are general guidelines — actual loan approval criteria vary by institution and country.",
    disclaimer: "This result is a general reference guideline only, and does not replace an actual loan review or financial consultation.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "DTI calculation is processed in your browser.",
    faq: [
      { q: "Is a lower DTI better?", a: "Generally, a lower DTI is considered to indicate better repayment capacity. However, loan review criteria vary by institution." },
      { q: "What should be included in monthly debt payments?", a: "Include the total of all monthly debt payments: mortgage, credit loans, card installments, etc." },
      { q: "Is DTI different from DSR?", a: "DTI is the debt-to-income ratio, while DSR (Debt Service Ratio) is a stricter measure based on principal and interest of all loans. This calculator covers DTI only." },
    ],
  },
  ja: {
    title: "DTI（負債償還比率）計算機",
    subtitle: "月収と月々の負債償還額からDTIを計算します",
    inputs: "情報入力",
    monthlyIncome: "月収",
    monthlyDebt: "月々の負債償還総額",
    calculate: "計算する",
    result: "計算結果",
    dtiRate: "DTI（負債償還比率）",
    gradeGood: "良好（36%以下）",
    gradeCaution: "注意（36～43%）",
    gradeRisk: "危険（43%超）",
    whyDti: "DTIとは何ですか？",
    dtiExplanation: "DTI（Debt To Income、負債償還比率）は、月収のうち負債償還に使われる割合を示す指標です。DTI = (月々の負債償還総額 ÷ 月収) × 100で計算します。\n\n一般的に36%以下は良好、36～43%は注意、43%を超えると危険水準とされます。ただしこれは一般的な基準であり、実際の融資審査基準は金融機関・国によって異なります。",
    disclaimer: "この計算結果は参考用の一般的な基準であり、実際の融資審査や金融相談の代わりにはなりません。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "DTIの計算はブラウザで処理されます。",
    faq: [
      { q: "DTIは低いほど良いですか？", a: "一般的にDTIが低いほど返済余力が良いと評価されます。ただし融資審査基準は機関によって異なります。" },
      { q: "月々の負債償還総額には何が含まれますか？", a: "住宅ローン、信用貸付、カード分割払いなど、毎月返済するすべての負債の合計を入力してください。" },
      { q: "DTIとDSRは違いますか？", a: "DTIは負債償還比率で、DSR（総負債原理金償還比率）はすべての融資の元利金を基準とするより厳しい指標です。本計算機はDTIのみを扱います。" },
    ],
  },
  es: {
    title: "Calculadora de DTI (Deuda-Ingreso)",
    subtitle: "Calcula tu DTI a partir del ingreso mensual y los pagos mensuales de deuda",
    inputs: "Ingresa la información",
    monthlyIncome: "Ingreso mensual",
    monthlyDebt: "Total de pagos mensuales de deuda",
    calculate: "Calcular",
    result: "Resultado",
    dtiRate: "DTI (Ratio Deuda-Ingreso)",
    gradeGood: "Bueno (36% o menos)",
    gradeCaution: "Precaución (36-43%)",
    gradeRisk: "Riesgo (más de 43%)",
    whyDti: "¿Qué es el DTI?",
    dtiExplanation: "El DTI (ratio deuda-ingreso) muestra el porcentaje de tu ingreso mensual destinado a pagos de deuda. DTI = (Total de pagos mensuales de deuda / Ingreso mensual) × 100.\n\nGeneralmente, 36% o menos se considera bueno, 36-43% es precaución, y más de 43% se considera riesgoso. Sin embargo, estas son pautas generales — los criterios reales de aprobación de préstamos varían según la institución y el país.",
    disclaimer: "Este resultado es solo una pauta de referencia general y no sustituye una revisión real de préstamo o consulta financiera.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de DTI se procesa en tu navegador.",
    faq: [
      { q: "¿Un DTI más bajo es mejor?", a: "Generalmente, un DTI más bajo indica mejor capacidad de pago. Sin embargo, los criterios de revisión varían según la institución." },
      { q: "¿Qué debe incluirse en los pagos mensuales de deuda?", a: "Incluye el total de todos los pagos mensuales de deuda: hipoteca, préstamos de crédito, cuotas de tarjeta, etc." },
      { q: "¿El DTI es diferente del DSR?", a: "El DTI es el ratio deuda-ingreso, mientras que el DSR (Ratio de Servicio de Deuda) es una medida más estricta basada en el principal e intereses de todos los préstamos. Esta calculadora solo cubre el DTI." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
