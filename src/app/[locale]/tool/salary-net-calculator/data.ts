export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  modeAnnual: string;
  modeMonthly: string;
  amount: string;
  taxFreeAllowance: string;
  dependents: string;
  calculate: string;
  result: string;
  grossMonthly: string;
  pension: string;
  healthInsurance: string;
  longTermCare: string;
  employmentInsurance: string;
  incomeTax: string;
  localIncomeTax: string;
  totalDeduction: string;
  netPay: string;
  whySalary: string;
  salaryExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "급여 실수령액 계산기",
    subtitle: "연봉(또는 월급)으로 4대보험과 세금을 제외한 실수령액을 계산합니다",
    inputs: "정보 입력",
    modeAnnual: "연봉 입력",
    modeMonthly: "월급 입력",
    amount: "금액",
    taxFreeAllowance: "비과세액 (식대 등, 월)",
    dependents: "부양가족수 (본인 포함)",
    calculate: "계산하기",
    result: "계산 결과",
    grossMonthly: "월 급여 (세전)",
    pension: "국민연금",
    healthInsurance: "건강보험",
    longTermCare: "장기요양보험",
    employmentInsurance: "고용보험",
    incomeTax: "소득세 (근사치)",
    localIncomeTax: "지방소득세 (근사치)",
    totalDeduction: "공제 총액",
    netPay: "실수령액",
    whySalary: "실수령액은 어떻게 계산하나요?",
    salaryExplanation: "과세대상금액(월급여 − 비과세액)을 기준으로 국민연금(4.75%, 기준소득월액 상한 659만원 적용), 건강보험(3.595%), 장기요양보험(건강보험료×13.14%), 고용보험(0.9%)을 계산합니다.\n\n소득세는 국세청 간이세액표 전체를 구현하기 어려워 과세대상금액 구간별 근사 비율과 부양가족수에 따른 간단한 보정을 적용한 근사치이며, 지방소득세는 소득세의 10%입니다.\n\n실수령액 = 월급여 − (국민연금+건강보험+장기요양보험+고용보험+소득세+지방소득세) 입니다.\n\n⚠ 4대보험 요율과 상한액은 매년(국민연금은 7월, 건강보험은 보통 1월) 변경되며, 본 계산기는 2026년 하반기 기준 고시 수치를 반영한 근사치입니다. 소득세는 국세청 간이세액표와 차이가 있을 수 있습니다.",
    disclaimer: "실제 공제액은 회사의 급여 정책, 국세청 간이세액표, 최신 4대보험 요율 및 상한액에 따라 달라질 수 있습니다. 본 결과는 참고용 추정치입니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "급여 실수령액 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "국민연금 상한액은 왜 있나요?", a: "국민연금은 기준소득월액이 일정 금액(2026년 기준 월 659만원)을 넘으면 그 이상의 금액에는 보험료를 부과하지 않습니다. 고소득자의 보험료 부담을 일정 수준에서 제한하기 위한 제도입니다." },
      { q: "소득세가 실제와 다를 수 있나요?", a: "네. 실제 소득세(근로소득 간이세액표 기준)는 월급여, 비과세액, 부양가족수, 추가 공제 항목 등에 따라 정교하게 산정됩니다. 본 계산기는 구간별 근사 비율을 사용하므로 실제 급여명세서와 차이가 날 수 있습니다." },
      { q: "비과세액의 기본값 20만원은 어떤 의미인가요?", a: "식대 비과세 한도(월 20만원)를 기준으로 한 기본값입니다. 실제 비과세 항목(식대, 자가운전보조금 등)은 회사 정책에 따라 다르므로 본인의 급여 명세서를 참고해 직접 입력해 주세요." },
    ],
  },
  en: {
    title: "Salary Net Pay Calculator",
    subtitle: "Calculate take-home pay from annual (or monthly) salary after insurance and taxes",
    inputs: "Enter Information",
    modeAnnual: "Enter Annual Salary",
    modeMonthly: "Enter Monthly Salary",
    amount: "Amount",
    taxFreeAllowance: "Tax-Free Allowance (meal, etc., monthly)",
    dependents: "Number of Dependents (including yourself)",
    calculate: "Calculate",
    result: "Result",
    grossMonthly: "Monthly Gross Salary",
    pension: "National Pension",
    healthInsurance: "Health Insurance",
    longTermCare: "Long-Term Care Insurance",
    employmentInsurance: "Employment Insurance",
    incomeTax: "Income Tax (approximate)",
    localIncomeTax: "Local Income Tax (approximate)",
    totalDeduction: "Total Deductions",
    netPay: "Net Pay",
    whySalary: "How is net pay calculated?",
    salaryExplanation: "Based on the taxable amount (monthly salary − tax-free allowance), National Pension (4.75%, capped at a monthly income base of 6.59M KRW), Health Insurance (3.595%), Long-Term Care Insurance (Health Insurance × 13.14%), and Employment Insurance (0.9%) are calculated.\n\nIncome tax is an approximation using simplified bracket rates with a basic adjustment for dependents, since implementing the full National Tax Service withholding table is impractical; local income tax is 10% of income tax.\n\nNet Pay = Monthly Salary − (National Pension + Health Insurance + Long-Term Care + Employment Insurance + Income Tax + Local Income Tax).\n\n⚠ The four social insurance rates and caps change periodically (National Pension in July, Health Insurance usually in January), and this calculator reflects approximate figures as published in the second half of 2026. Income tax may differ from the official withholding table.",
    disclaimer: "Actual deductions vary based on your employer's payroll policy, the National Tax Service withholding table, and the latest insurance rates and caps. This result is an approximate estimate for reference only.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Net pay calculation is processed in your browser.",
    faq: [
      { q: "Why is there a cap on National Pension?", a: "National Pension does not charge premiums on income above a certain monthly base (6.59M KRW as of 2026), limiting the premium burden on higher earners to a certain level." },
      { q: "Can the income tax differ from the actual amount?", a: "Yes. Actual income tax (based on the wage withholding table) is calculated precisely based on monthly salary, tax-free allowance, number of dependents, and additional deduction items. This calculator uses simplified bracket rates, so it may differ from an actual pay stub." },
      { q: "What does the default tax-free allowance of 200,000 KRW mean?", a: "It's based on the tax-free meal allowance limit (200,000 KRW/month). Actual tax-free items (meals, car allowance, etc.) vary by company policy, so check your own pay stub and enter the exact amount." },
    ],
  },
  ja: {
    title: "給与実受取額計算機",
    subtitle: "年俸（または月給）から4大保険と税金を除いた実受取額を計算します",
    inputs: "情報入力",
    modeAnnual: "年俸を入力",
    modeMonthly: "月給を入力",
    amount: "金額",
    taxFreeAllowance: "非課税額（食事代など、月）",
    dependents: "扶養家族数（本人含む）",
    calculate: "計算する",
    result: "計算結果",
    grossMonthly: "月給与（税引前）",
    pension: "国民年金",
    healthInsurance: "健康保険",
    longTermCare: "長期療養保険",
    employmentInsurance: "雇用保険",
    incomeTax: "所得税（近似値）",
    localIncomeTax: "地方所得税（近似値）",
    totalDeduction: "控除総額",
    netPay: "実受取額",
    whySalary: "実受取額はどのように計算しますか？",
    salaryExplanation: "課税対象額（月給与－非課税額）を基準に、国民年金（4.75%、基準所得月額上限659万ウォン適用）、健康保険（3.595%）、長期療養保険（健康保険料×13.14%）、雇用保険（0.9%）を計算します。\n\n所得税は国税庁の簡易税額表全体を実装するのが難しいため、課税対象額の区間別近似比率と扶養家族数による簡単な補正を適用した近似値であり、地方所得税は所得税の10%です。\n\n実受取額＝月給与－（国民年金＋健康保険＋長期療養保険＋雇用保険＋所得税＋地方所得税）です。\n\n⚠ 4大保険の料率と上限額は毎年（国民年金は7月、健康保険は通常1月）変更され、本計算機は2026年下半期基準の告示数値を反映した近似値です。所得税は国税庁の簡易税額表と差がある場合があります。",
    disclaimer: "実際の控除額は会社の給与政策、国税庁の簡易税額表、最新の4大保険料率及び上限額により異なる場合があります。本結果は参考用の推定値です。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "給与実受取額の計算はブラウザで処理されます。",
    faq: [
      { q: "国民年金に上限額があるのはなぜですか？", a: "国民年金は基準所得月額が一定額（2026年基準で月659万ウォン）を超えると、それ以上の金額には保険料を課しません。高所得者の保険料負担を一定水準で制限するための制度です。" },
      { q: "所得税は実際と異なる場合がありますか？", a: "はい。実際の所得税（勤労所得簡易税額表基準）は月給与、非課税額、扶養家族数、追加控除項目などにより精密に算定されます。本計算機は区間別近似比率を使用するため、実際の給与明細書と差が出る場合があります。" },
      { q: "非課税額のデフォルト値20万ウォンはどのような意味ですか？", a: "食事代非課税限度（月20万ウォン）を基準としたデフォルト値です。実際の非課税項目（食事代、自家運転補助金など）は会社の政策により異なるため、ご自身の給与明細書を参考に直接入力してください。" },
    ],
  },
  es: {
    title: "Calculadora de Salario Neto",
    subtitle: "Calcula el salario neto a partir del salario anual (o mensual) tras seguros e impuestos",
    inputs: "Ingresa la información",
    modeAnnual: "Ingresar Salario Anual",
    modeMonthly: "Ingresar Salario Mensual",
    amount: "Monto",
    taxFreeAllowance: "Asignación Libre de Impuestos (comida, etc., mensual)",
    dependents: "Número de Dependientes (incluyéndote)",
    calculate: "Calcular",
    result: "Resultado",
    grossMonthly: "Salario Mensual Bruto",
    pension: "Pensión Nacional",
    healthInsurance: "Seguro de Salud",
    longTermCare: "Seguro de Cuidado a Largo Plazo",
    employmentInsurance: "Seguro de Empleo",
    incomeTax: "Impuesto sobre la Renta (aproximado)",
    localIncomeTax: "Impuesto Local sobre la Renta (aproximado)",
    totalDeduction: "Deducciones Totales",
    netPay: "Salario Neto",
    whySalary: "¿Cómo se calcula el salario neto?",
    salaryExplanation: "Basado en el monto gravable (salario mensual − asignación libre de impuestos), se calculan la Pensión Nacional (4.75%, con tope en una base mensual de 6.59M KRW), el Seguro de Salud (3.595%), el Seguro de Cuidado a Largo Plazo (Seguro de Salud × 13.14%) y el Seguro de Empleo (0.9%).\n\nEl impuesto sobre la renta es una aproximación usando tasas por tramos simplificadas con un ajuste básico por dependientes, ya que implementar la tabla completa de retención del Servicio Nacional de Impuestos no es práctico; el impuesto local sobre la renta es el 10% del impuesto sobre la renta.\n\nSalario Neto = Salario Mensual − (Pensión Nacional + Seguro de Salud + Cuidado a Largo Plazo + Seguro de Empleo + Impuesto sobre la Renta + Impuesto Local).\n\n⚠ Las tasas y topes de los cuatro seguros sociales cambian periódicamente (Pensión Nacional en julio, Seguro de Salud usualmente en enero), y esta calculadora refleja cifras aproximadas publicadas en la segunda mitad de 2026. El impuesto sobre la renta puede diferir de la tabla oficial de retención.",
    disclaimer: "Las deducciones reales varían según la política de nómina de tu empleador, la tabla de retención del Servicio Nacional de Impuestos y las tasas y topes de seguro más recientes. Este resultado es una estimación aproximada solo de referencia.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo del salario neto se procesa en tu navegador.",
    faq: [
      { q: "¿Por qué hay un tope en la Pensión Nacional?", a: "La Pensión Nacional no cobra primas sobre el ingreso por encima de cierta base mensual (6.59M KRW a partir de 2026), limitando la carga de primas de los ingresos más altos a cierto nivel." },
      { q: "¿El impuesto sobre la renta puede diferir del monto real?", a: "Sí. El impuesto sobre la renta real (basado en la tabla de retención salarial) se calcula con precisión según el salario mensual, la asignación libre de impuestos, el número de dependientes y deducciones adicionales. Esta calculadora usa tasas por tramos simplificadas, por lo que puede diferir de un recibo de pago real." },
      { q: "¿Qué significa la asignación libre de impuestos predeterminada de 200,000 KRW?", a: "Se basa en el límite de la asignación de comida libre de impuestos (200,000 KRW/mes). Los elementos libres de impuestos reales (comida, subsidio de auto, etc.) varían según la política de la empresa, así que consulta tu propio recibo de pago e ingresa el monto exacto." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
