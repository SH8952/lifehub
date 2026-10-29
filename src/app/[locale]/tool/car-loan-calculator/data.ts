export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  carPrice: string;
  downPayment: string;
  annualRate: string;
  months: string;
  calculate: string;
  result: string;
  monthlyPayment: string;
  totalPayment: string;
  totalInterest: string;
  whyCarLoan: string;
  carLoanExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "자동차 할부금 계산기",
    subtitle: "차량가격, 선수금, 이율, 할부기간으로 월 납입금을 계산합니다",
    inputs: "정보 입력",
    carPrice: "차량 가격",
    downPayment: "선수금 (계약금)",
    annualRate: "연이율 (%)",
    months: "할부 기간 (개월)",
    calculate: "계산하기",
    result: "계산 결과",
    monthlyPayment: "월 납입금",
    totalPayment: "총 납입액",
    totalInterest: "총 이자",
    whyCarLoan: "자동차 할부금은 어떻게 계산하나요?",
    carLoanExplanation: "대출원금 = 차량가격 − 선수금으로 계산한 뒤, 월이율(연이율÷100÷12)을 적용한 원리금균등상환 공식으로 월 납입금을 계산합니다.\n\n월 납입금 = 대출원금 × 월이율 × (1+월이율)^할부기간 ÷ ((1+월이율)^할부기간 − 1).\n\n총 납입액은 월 납입금 × 할부기간 + 선수금이며, 총 이자는 총 납입액에서 차량가격을 뺀 값입니다.",
    disclaimer: "본 계산 결과는 참고용이며, 실제 할부 조건은 금융사, 신용등급, 부대 수수료 등에 따라 달라질 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "자동차 할부금 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "선수금을 많이 낼수록 유리한가요?", a: "선수금이 많을수록 대출원금이 줄어들어 월 납입금과 총 이자가 줄어듭니다. 다만 초기 자금 부담이 커지므로 본인의 자금 상황을 고려해야 합니다." },
      { q: "할부기간을 늘리면 총 이자가 늘어나나요?", a: "일반적으로 할부기간이 길어지면 월 납입금은 줄어들지만, 이자를 내는 기간이 길어져 총 이자는 늘어납니다." },
      { q: "무이자 할부(0%)도 계산할 수 있나요?", a: "네, 연이율을 0으로 입력하면 이자 없이 대출원금을 할부기간으로 나눈 월 납입금이 계산됩니다." },
    ],
  },
  en: {
    title: "Car Loan Calculator",
    subtitle: "Calculate the monthly payment from car price, down payment, rate, and loan term",
    inputs: "Enter Information",
    carPrice: "Car Price",
    downPayment: "Down Payment",
    annualRate: "Annual Rate (%)",
    months: "Loan Term (months)",
    calculate: "Calculate",
    result: "Result",
    monthlyPayment: "Monthly Payment",
    totalPayment: "Total Payment",
    totalInterest: "Total Interest",
    whyCarLoan: "How is a car loan payment calculated?",
    carLoanExplanation: "The loan principal = car price − down payment. Using the monthly rate (annual rate ÷ 100 ÷ 12), the monthly payment is calculated with the amortizing loan formula.\n\nMonthly Payment = Principal × Monthly Rate × (1+Monthly Rate)^Months ÷ ((1+Monthly Rate)^Months − 1).\n\nTotal payment = monthly payment × months + down payment, and total interest is total payment minus car price.",
    disclaimer: "This result is for reference only — actual loan terms vary by lender, credit rating, and additional fees.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Car loan calculation is processed in your browser.",
    faq: [
      { q: "Is a larger down payment better?", a: "A larger down payment reduces the loan principal, lowering both the monthly payment and total interest. However, it increases your upfront cash burden, so consider your own financial situation." },
      { q: "Does a longer loan term increase total interest?", a: "Generally, a longer term lowers the monthly payment but increases the total interest paid, since interest accrues over a longer period." },
      { q: "Can I calculate a 0% interest installment plan?", a: "Yes, entering 0 for the annual rate calculates the monthly payment as the principal divided by the loan term, with no interest." },
    ],
  },
  ja: {
    title: "自動車ローン計算機",
    subtitle: "車両価格、頭金、利率、ローン期間から月々の支払額を計算します",
    inputs: "情報入力",
    carPrice: "車両価格",
    downPayment: "頭金（契約金）",
    annualRate: "年利率（%）",
    months: "ローン期間（月）",
    calculate: "計算する",
    result: "計算結果",
    monthlyPayment: "月々の支払額",
    totalPayment: "総支払額",
    totalInterest: "合計利息",
    whyCarLoan: "自動車ローンの支払額はどのように計算しますか？",
    carLoanExplanation: "ローン元金＝車両価格－頭金で計算した後、月利率（年利率÷100÷12）を適用した元利均等返済の公式で月々の支払額を計算します。\n\n月々の支払額＝ローン元金×月利率×(1+月利率)^ローン期間÷((1+月利率)^ローン期間－1)。\n\n総支払額は月々の支払額×ローン期間＋頭金であり、合計利息は総支払額から車両価格を引いた値です。",
    disclaimer: "この計算結果は参考用であり、実際のローン条件は金融会社、信用等級、付帯手数料などにより異なる場合があります。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "自動車ローン計算はブラウザで処理されます。",
    faq: [
      { q: "頭金を多く払うほど有利ですか？", a: "頭金が多いほどローン元金が減り、月々の支払額と合計利息が減ります。ただし初期資金の負担が大きくなるため、自身の資金状況を考慮する必要があります。" },
      { q: "ローン期間を延ばすと合計利息は増えますか？", a: "一般的にローン期間が長くなると月々の支払額は減りますが、利息を払う期間が長くなるため合計利息は増えます。" },
      { q: "無利子ローン（0%）も計算できますか？", a: "はい、年利率を0と入力すると、利息なしでローン元金をローン期間で割った月々の支払額が計算されます。" },
    ],
  },
  es: {
    title: "Calculadora de Préstamo Automotriz",
    subtitle: "Calcula el pago mensual a partir del precio del auto, el enganche, la tasa y el plazo",
    inputs: "Ingresa la información",
    carPrice: "Precio del Auto",
    downPayment: "Enganche (Pago Inicial)",
    annualRate: "Tasa Anual (%)",
    months: "Plazo del Préstamo (meses)",
    calculate: "Calcular",
    result: "Resultado",
    monthlyPayment: "Pago Mensual",
    totalPayment: "Pago Total",
    totalInterest: "Interés Total",
    whyCarLoan: "¿Cómo se calcula el pago de un préstamo automotriz?",
    carLoanExplanation: "El capital del préstamo = precio del auto − enganche. Usando la tasa mensual (tasa anual ÷ 100 ÷ 12), el pago mensual se calcula con la fórmula de amortización.\n\nPago Mensual = Capital × Tasa Mensual × (1+Tasa Mensual)^Meses ÷ ((1+Tasa Mensual)^Meses − 1).\n\nEl pago total = pago mensual × meses + enganche, y el interés total es el pago total menos el precio del auto.",
    disclaimer: "Este resultado es solo de referencia — las condiciones reales del préstamo varían según la entidad financiera, la calificación de crédito y las comisiones adicionales.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo del préstamo automotriz se procesa en tu navegador.",
    faq: [
      { q: "¿Es mejor dar un enganche más grande?", a: "Un enganche más grande reduce el capital del préstamo, disminuyendo tanto el pago mensual como el interés total. Sin embargo, aumenta la carga de efectivo inicial, así que considera tu propia situación financiera." },
      { q: "¿Un plazo más largo aumenta el interés total?", a: "Generalmente, un plazo más largo reduce el pago mensual pero aumenta el interés total pagado, ya que el interés se acumula durante un período más largo." },
      { q: "¿Puedo calcular un plan de pago sin intereses (0%)?", a: "Sí, ingresar 0 en la tasa anual calcula el pago mensual como el capital dividido entre el plazo, sin intereses." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
