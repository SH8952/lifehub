export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  amountLabel: string;
  baseRateLabel: string;
  spreadLabel: string;
  discountRateLabel: string;
  calculateBtn: string;
  resultLabel: string;
  noDiscountLabel: string;
  withDiscountLabel: string;
  feeLabel: string;
  receivedLabel: string;
  savedByDiscountLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "환전 수수료 비교기",
    subtitle: "환전 금액과 수수료율(우대율)을 입력해 실제 받는 금액과 수수료를 비교합니다.",
    amountLabel: "환전할 금액 (KRW)",
    baseRateLabel: "매매기준율",
    spreadLabel: "기본 환전 스프레드 (%)",
    discountRateLabel: "우대 환율 적용율 (%, 90%면 스프레드의 90% 할인)",
    calculateBtn: "비교하기",
    resultLabel: "비교 결과",
    noDiscountLabel: "우대 없음 (기본 환율)",
    withDiscountLabel: "우대 적용",
    feeLabel: "수수료",
    receivedLabel: "실제 받는 외화 환산액",
    savedByDiscountLabel: "우대 적용으로 절약한 금액",
    disclaimer: "본 계산은 입력한 매매기준율과 스프레드를 기준으로 한 참고용 추정치이며, 실제 환율과 수수료는 환전 시점과 금융기관(은행/환전소/카드사)에 따라 달라집니다.",
    howTitle: "사용 방법",
    howSteps: [
      "환전할 금액(원화)과 매매기준율, 기본 스프레드를 입력합니다.",
      "은행·앱에서 제공하는 우대 환율 적용율(%)을 입력합니다.",
      "'비교하기'를 눌러 우대 적용 전후 수수료와 절약 금액을 확인하세요.",
    ],
    faq: [
      { q: "환전 스프레드란 무엇인가요?", a: "스프레드는 은행이 매매기준율에 추가로 붙이는 마진으로, 환전 시 실제 적용되는 환율과 매매기준율의 차이를 의미합니다. 이 차이가 곧 환전 수수료입니다." },
      { q: "우대율 100%는 수수료가 0원이라는 뜻인가요?", a: "네, 우대 환율 적용율 100%는 스프레드를 전액 할인받아 매매기준율 그대로 환전하는 것을 의미하며, 실질적으로 환전 수수료가 거의 없게 됩니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Currency Exchange Fee Comparator",
    subtitle: "Enter the exchange amount and fee/discount rates to compare the actual amount received and fees.",
    amountLabel: "Amount to Exchange (KRW)",
    baseRateLabel: "Base Exchange Rate",
    spreadLabel: "Base Exchange Spread (%)",
    discountRateLabel: "Preferential Discount Rate (%, 90% = 90% off the spread)",
    calculateBtn: "Compare",
    resultLabel: "Comparison Result",
    noDiscountLabel: "No Discount (Standard Rate)",
    withDiscountLabel: "With Discount",
    feeLabel: "Fee",
    receivedLabel: "Actual Foreign Currency Received (KRW equivalent)",
    savedByDiscountLabel: "Savings from Discount",
    disclaimer: "This is a reference estimate based on the entered base rate and spread. Actual rates and fees vary by timing and institution.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the KRW amount, base rate, and base spread.",
      "Enter the preferential discount rate (%) offered by your bank/app.",
      "Click 'Compare' to see the fee difference and savings.",
    ],
    faq: [
      { q: "What is the exchange spread?", a: "The spread is the margin a bank adds on top of the base rate — the difference between the actual applied rate and the base rate, which is effectively the exchange fee." },
      { q: "Does a 100% discount mean zero fees?", a: "Yes, a 100% preferential discount means the spread is fully waived, so you exchange at the base rate with virtually no fee." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "両替手数料比較ツール",
    subtitle: "両替金額と手数料率（優待率）を入力して実際に受け取る金額と手数料を比較します。",
    amountLabel: "両替する金額（KRW）",
    baseRateLabel: "売買基準率",
    spreadLabel: "基本両替スプレッド（%）",
    discountRateLabel: "優待レート適用率（%、90%ならスプレッドの90%割引）",
    calculateBtn: "比較する",
    resultLabel: "比較結果",
    noDiscountLabel: "優待なし（基本レート）",
    withDiscountLabel: "優待適用",
    feeLabel: "手数料",
    receivedLabel: "実際に受け取る外貨換算額",
    savedByDiscountLabel: "優待適用で節約した金額",
    disclaimer: "この計算は入力した売買基準率とスプレッドを基準とした参考推定値であり、実際の為替レートと手数料は両替時点と金融機関によって異なります。",
    howTitle: "使用方法",
    howSteps: [
      "両替する金額（ウォン）、売買基準率、基本スプレッドを入力します。",
      "銀行・アプリが提供する優待レート適用率（%）を入力します。",
      "「比較する」を押して優待適用前後の手数料と節約金額を確認しましょう。",
    ],
    faq: [
      { q: "両替スプレッドとは何ですか？", a: "スプレッドは銀行が売買基準率に追加で付けるマージンで、両替時に実際に適用される為替レートと売買基準率の差を意味します。" },
      { q: "優待率100%は手数料が0ウォンという意味ですか？", a: "はい、優待レート適用率100%はスプレッドを全額割引されて売買基準率そのままで両替することを意味します。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Comparador de Comisión de Cambio de Divisas",
    subtitle: "Introduce el monto y las tasas de comisión/descuento para comparar el monto real recibido.",
    amountLabel: "Monto a Cambiar (KRW)",
    baseRateLabel: "Tasa de Cambio Base",
    spreadLabel: "Spread de Cambio Base (%)",
    discountRateLabel: "Tasa de Descuento Preferencial (%, 90% = 90% de descuento)",
    calculateBtn: "Comparar",
    resultLabel: "Resultado de Comparación",
    noDiscountLabel: "Sin Descuento (Tasa Estándar)",
    withDiscountLabel: "Con Descuento",
    feeLabel: "Comisión",
    receivedLabel: "Monto Recibido (equivalente en KRW)",
    savedByDiscountLabel: "Ahorro por Descuento",
    disclaimer: "Esta es una estimación de referencia según la tasa base y spread introducidos. Las tasas y comisiones reales varían según el momento y la institución.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el monto en KRW, tasa base y spread base.",
      "Introduce la tasa de descuento preferencial de tu banco/app.",
      "Haz clic en 'Comparar' para ver la diferencia y el ahorro.",
    ],
    faq: [
      { q: "¿Qué es el spread de cambio?", a: "El spread es el margen que un banco añade sobre la tasa base — la diferencia entre la tasa aplicada y la tasa base, que es efectivamente la comisión." },
      { q: "¿Un descuento del 100% significa cero comisión?", a: "Sí, un descuento del 100% significa que el spread se elimina por completo, cambiando a la tasa base sin comisión." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
