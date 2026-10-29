export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  amount: string;
  months: string;
  monthlyFeeRate: string;
  calculate: string;
  result: string;
  monthlyPayment: string;
  totalFee: string;
  totalPayment: string;
  whyCardInstallment: string;
  cardInstallmentExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "신용카드 할부 수수료 계산기",
    subtitle: "결제금액, 할부기간, 월 수수료율로 할부 수수료를 계산합니다",
    inputs: "정보 입력",
    amount: "결제 금액",
    months: "할부 개월수",
    monthlyFeeRate: "월 수수료율 (%)",
    calculate: "계산하기",
    result: "계산 결과",
    monthlyPayment: "월 납입금",
    totalFee: "총 수수료",
    totalPayment: "총 납입액",
    whyCardInstallment: "카드 할부 수수료는 어떻게 계산하나요?",
    cardInstallmentExplanation: "본 계산기는 단순 선형 방식으로 근사 계산합니다: 총 수수료 = 결제금액 × 월 수수료율 × 할부개월수 ÷ 100. 월 납입금 = (결제금액 + 총 수수료) ÷ 할부개월수.\n\n실제 카드사는 매월 남은 잔액을 기준으로 수수료를 계산하는 경우가 많아, 이 계산기의 결과는 근사치입니다. 정확한 수수료는 이용하는 카드사의 안내를 확인하세요.",
    disclaimer: "본 계산 결과는 단순화된 근사치이며, 실제 할부 수수료는 카드사, 가맹점, 할부 유형(무이자 할부 포함 여부 등)에 따라 다를 수 있습니다. 정확한 금액은 카드사에 확인하시기 바랍니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "카드 할부 수수료 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "월 수수료율 1.5%는 어떤 기준인가요?", a: "카드사와 할부 개월수에 따라 월 수수료율이 다르므로, 1.5%는 안내용 기본값일 뿐입니다. 실제 이용하시는 카드사의 할부 수수료율을 확인해 직접 입력해 주세요." },
      { q: "왜 '근사치'라고 표시되나요?", a: "이 계산기는 결제금액 전체에 수수료율을 곱하는 단순 선형 방식을 사용합니다. 실제 카드사는 매월 상환 후 남은 잔액을 기준으로 수수료를 계산하는 경우가 많아 정확한 금액과 차이가 있을 수 있습니다." },
      { q: "무이자 할부도 계산할 수 있나요?", a: "네, 월 수수료율을 0으로 입력하면 수수료 없이 결제금액을 할부개월수로 나눈 월 납입금이 계산됩니다." },
    ],
  },
  en: {
    title: "Card Installment Fee Calculator",
    subtitle: "Calculate installment fees from payment amount, term, and monthly fee rate",
    inputs: "Enter Information",
    amount: "Payment Amount",
    months: "Installment Months",
    monthlyFeeRate: "Monthly Fee Rate (%)",
    calculate: "Calculate",
    result: "Result",
    monthlyPayment: "Monthly Payment",
    totalFee: "Total Fee",
    totalPayment: "Total Payment",
    whyCardInstallment: "How is the card installment fee calculated?",
    cardInstallmentExplanation: "This calculator uses a simplified linear approximation: Total Fee = Payment Amount × Monthly Fee Rate × Months ÷ 100. Monthly Payment = (Payment Amount + Total Fee) ÷ Months.\n\nActual card companies often calculate fees based on the remaining balance each month, so this calculator's result is an approximation. Check your card issuer's exact terms for the precise fee.",
    disclaimer: "This result is a simplified approximation — actual installment fees vary by card issuer, merchant, and installment type (e.g., whether it's interest-free). Check with your card issuer for the exact amount.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Card installment fee calculation is processed in your browser.",
    faq: [
      { q: "What is the basis for the 1.5% monthly fee rate?", a: "Monthly fee rates vary by card issuer and installment term, so 1.5% is just a reference default. Check your actual card issuer's installment fee rate and enter it directly." },
      { q: "Why is this labeled an 'approximation'?", a: "This calculator uses a simple linear method that multiplies the full payment amount by the fee rate. Actual card companies often calculate fees based on the remaining balance after each monthly payment, which can differ from the exact amount." },
      { q: "Can I calculate interest-free installments?", a: "Yes, entering 0 for the monthly fee rate calculates the monthly payment as the payment amount divided by the number of installment months, with no fee." },
    ],
  },
  ja: {
    title: "クレジットカード分割手数料計算機",
    subtitle: "決済金額、分割期間、月利手数料率で分割手数料を計算します",
    inputs: "情報入力",
    amount: "決済金額",
    months: "分割回数",
    monthlyFeeRate: "月利手数料率（%）",
    calculate: "計算する",
    result: "計算結果",
    monthlyPayment: "月々の支払額",
    totalFee: "総手数料",
    totalPayment: "総支払額",
    whyCardInstallment: "カード分割手数料はどのように計算しますか？",
    cardInstallmentExplanation: "この計算機は単純な線形方式で近似計算します：総手数料＝決済金額×月利手数料率×分割回数÷100。月々の支払額＝（決済金額＋総手数料）÷分割回数。\n\n実際のカード会社は毎月の残高を基準に手数料を計算する場合が多いため、この計算機の結果は近似値です。正確な手数料はご利用のカード会社の案内をご確認ください。",
    disclaimer: "この計算結果は単純化された近似値であり、実際の分割手数料はカード会社、加盟店、分割タイプ（無利子分割の有無など）により異なる場合があります。正確な金額はカード会社にご確認ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "カード分割手数料の計算はブラウザで処理されます。",
    faq: [
      { q: "月利手数料率1.5%はどのような基準ですか？", a: "カード会社と分割回数によって月利手数料率は異なるため、1.5%は案内用のデフォルト値に過ぎません。実際にご利用のカード会社の分割手数料率を確認して直接入力してください。" },
      { q: "なぜ「近似値」と表示されますか？", a: "この計算機は決済金額全体に手数料率を掛ける単純な線形方式を使用しています。実際のカード会社は毎月の返済後の残高を基準に手数料を計算する場合が多く、正確な金額と差が生じる可能性があります。" },
      { q: "無利子分割も計算できますか？", a: "はい、月利手数料率を0と入力すると、手数料なしで決済金額を分割回数で割った月々の支払額が計算されます。" },
    ],
  },
  es: {
    title: "Calculadora de Comisión por Pago en Cuotas",
    subtitle: "Calcula las comisiones por pago en cuotas a partir del monto, el plazo y la tasa mensual",
    inputs: "Ingresa la información",
    amount: "Monto del Pago",
    months: "Número de Cuotas",
    monthlyFeeRate: "Tasa de Comisión Mensual (%)",
    calculate: "Calcular",
    result: "Resultado",
    monthlyPayment: "Pago Mensual",
    totalFee: "Comisión Total",
    totalPayment: "Pago Total",
    whyCardInstallment: "¿Cómo se calcula la comisión por pago en cuotas de tarjeta?",
    cardInstallmentExplanation: "Esta calculadora usa una aproximación lineal simplificada: Comisión Total = Monto del Pago × Tasa de Comisión Mensual × Cuotas ÷ 100. Pago Mensual = (Monto del Pago + Comisión Total) ÷ Cuotas.\n\nLas emisoras de tarjetas reales a menudo calculan las comisiones según el saldo restante cada mes, por lo que el resultado de esta calculadora es una aproximación. Consulta los términos exactos de tu emisora de tarjeta.",
    disclaimer: "Este resultado es una aproximación simplificada — las comisiones reales por cuotas varían según la emisora de la tarjeta, el comercio y el tipo de plan (si es libre de intereses, etc.). Consulta a tu emisora de tarjeta para el monto exacto.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de la comisión por cuotas se procesa en tu navegador.",
    faq: [
      { q: "¿Cuál es la base de la tasa de comisión mensual del 1.5%?", a: "Las tasas de comisión mensual varían según la emisora de la tarjeta y el plazo de cuotas, así que 1.5% es solo un valor de referencia predeterminado. Verifica la tasa real de tu emisora de tarjeta e ingrésala directamente." },
      { q: "¿Por qué se etiqueta como 'aproximación'?", a: "Esta calculadora usa un método lineal simple que multiplica el monto total del pago por la tasa de comisión. Las emisoras de tarjetas reales a menudo calculan las comisiones según el saldo restante después de cada pago mensual, lo cual puede diferir del monto exacto." },
      { q: "¿Puedo calcular cuotas sin intereses?", a: "Sí, ingresar 0 en la tasa de comisión mensual calcula el pago mensual como el monto dividido entre el número de cuotas, sin comisión." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
