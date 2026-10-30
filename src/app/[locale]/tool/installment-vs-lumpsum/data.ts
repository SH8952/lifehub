export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  priceLabel: string;
  installmentMonthsLabel: string;
  installmentRateLabel: string;
  lumpSumDiscountLabel: string;
  calculateBtn: string;
  resultLabel: string;
  installmentTotalLabel: string;
  lumpSumTotalLabel: string;
  betterOptionLabel: string;
  savingsLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "할부 vs 일시불 비교기",
    subtitle: "할부 수수료(이자)와 카드 할인 혜택 등을 반영해 할부와 일시불 중 어느 쪽이 유리한지 비교합니다.",
    priceLabel: "구매 금액",
    installmentMonthsLabel: "할부 개월 수",
    installmentRateLabel: "할부 수수료율 (연, %)",
    lumpSumDiscountLabel: "일시불 결제 시 할인율 (%)",
    calculateBtn: "비교하기",
    resultLabel: "비교 결과",
    installmentTotalLabel: "할부 총 지불액",
    lumpSumTotalLabel: "일시불 지불액",
    betterOptionLabel: "더 유리한 방법",
    savingsLabel: "절약 금액",
    disclaimer: "본 계산은 입력한 수수료율·할인율을 기준으로 한 참고용 추정치이며, 실제 카드사·가맹점의 할부 수수료와 할인 조건은 다를 수 있습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "구매 금액과 할부 개월 수, 할부 수수료율을 입력합니다.",
      "일시불 결제 시 받을 수 있는 할인율(있는 경우)을 입력합니다.",
      "'비교하기'를 눌러 어느 쪽이 더 유리한지, 얼마를 절약할 수 있는지 확인하세요.",
    ],
    faq: [
      { q: "무이자 할부라면 항상 할부가 유리한가요?", a: "무이자 할부(수수료율 0%)인 경우 할부 총액이 구매 금액과 같으므로, 일시불 할인이 없다면 할부가 자금 유동성 측면에서 더 유리할 수 있습니다. 다만 일시불 할인이 있다면 할인율과 비교해 판단해야 합니다." },
      { q: "할부 수수료는 어떻게 계산되나요?", a: "일반적으로 할부 잔액에 대해 매월 연이율을 적용한 방식(월별 잔액 기준 단리와 유사)으로 계산되며, 이 도구는 평균 잔액 방식을 단순화하여 추정합니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Installment vs Lump Sum Comparator",
    subtitle: "Compare installment interest fees against lump-sum discounts to see which payment method is more favorable.",
    priceLabel: "Purchase Amount",
    installmentMonthsLabel: "Installment Months",
    installmentRateLabel: "Installment Fee Rate (Annual, %)",
    lumpSumDiscountLabel: "Lump Sum Discount Rate (%)",
    calculateBtn: "Compare",
    resultLabel: "Comparison Result",
    installmentTotalLabel: "Total Installment Payment",
    lumpSumTotalLabel: "Lump Sum Payment",
    betterOptionLabel: "Better Option",
    savingsLabel: "Savings",
    disclaimer: "This is a reference estimate based on the rates you entered. Actual card issuer/merchant installment fees and discounts may vary.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the purchase amount, installment months, and fee rate.",
      "Enter the lump-sum discount rate (if any).",
      "Click 'Compare' to see which option is better and how much you'd save.",
    ],
    faq: [
      { q: "Is interest-free installment always better?", a: "With 0% fees, the installment total equals the purchase price, so without a lump-sum discount, installments may be better for cash flow. But if there's a discount, compare it against the rate." },
      { q: "How is the installment fee calculated?", a: "Typically it's applied to the remaining balance each month (similar to simple interest on the declining balance); this tool uses a simplified average-balance approximation." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "分割払い vs 一括払い比較ツール",
    subtitle: "分割払いの手数料（利息）とカード割引などを反映して分割払いと一括払いのどちらが有利か比較します。",
    priceLabel: "購入金額",
    installmentMonthsLabel: "分割回数（か月）",
    installmentRateLabel: "分割手数料率（年、%）",
    lumpSumDiscountLabel: "一括払い時の割引率（%）",
    calculateBtn: "比較する",
    resultLabel: "比較結果",
    installmentTotalLabel: "分割払い総支払額",
    lumpSumTotalLabel: "一括払い支払額",
    betterOptionLabel: "より有利な方法",
    savingsLabel: "節約金額",
    disclaimer: "この計算は入力した手数料率・割引率を基準とした参考推定値であり、実際のカード会社・加盟店の分割手数料と割引条件は異なる場合があります。",
    howTitle: "使用方法",
    howSteps: [
      "購入金額、分割回数、分割手数料率を入力します。",
      "一括払い時の割引率（ある場合）を入力します。",
      "「比較する」を押してどちらがより有利か、いくら節約できるか確認しましょう。",
    ],
    faq: [
      { q: "無利子分割なら常に分割が有利ですか？", a: "無利子分割（手数料率0%）の場合、分割総額は購入金額と同じになるため、一括払い割引がなければ分割払いが資金流動性の面で有利な場合があります。" },
      { q: "分割手数料はどう計算されますか？", a: "一般的に分割残高に対して毎月年利率を適用する方式で計算され、このツールは平均残高方式を単純化して推定します。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Comparador de Cuotas vs Pago Único",
    subtitle: "Compara las comisiones de cuotas con los descuentos de pago único para ver qué opción es más favorable.",
    priceLabel: "Monto de Compra",
    installmentMonthsLabel: "Meses de Cuota",
    installmentRateLabel: "Tasa de Comisión de Cuota (Anual, %)",
    lumpSumDiscountLabel: "Tasa de Descuento por Pago Único (%)",
    calculateBtn: "Comparar",
    resultLabel: "Resultado de Comparación",
    installmentTotalLabel: "Pago Total en Cuotas",
    lumpSumTotalLabel: "Pago Único",
    betterOptionLabel: "Mejor Opción",
    savingsLabel: "Ahorro",
    disclaimer: "Esta es una estimación de referencia según las tasas introducidas. Las tarifas y descuentos reales pueden variar.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el monto, meses de cuota y tasa de comisión.",
      "Introduce la tasa de descuento por pago único (si aplica).",
      "Haz clic en 'Comparar' para ver cuál opción es mejor.",
    ],
    faq: [
      { q: "¿Las cuotas sin intereses siempre son mejores?", a: "Con 0% de comisión, el total de cuotas es igual al precio de compra, así que sin descuento por pago único, las cuotas pueden ser mejores para el flujo de caja." },
      { q: "¿Cómo se calcula la comisión de cuotas?", a: "Típicamente se aplica al saldo restante cada mes; esta herramienta usa una aproximación simplificada de saldo promedio." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
