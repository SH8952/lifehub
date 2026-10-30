export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  buyPriceLabel: string;
  sellPriceLabel: string;
  quantityLabel: string;
  feeRateLabel: string;
  taxRateLabel: string;
  calculateBtn: string;
  resultLabel: string;
  totalBuyLabel: string;
  totalSellLabel: string;
  netProfitLabel: string;
  returnRateLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "주식 손익 계산기",
    subtitle: "매수·매도 가격과 수량, 수수료·세금을 입력해 실제 손익과 수익률을 계산합니다.",
    buyPriceLabel: "매수 가격",
    sellPriceLabel: "매도 가격",
    quantityLabel: "수량 (주)",
    feeRateLabel: "매수·매도 수수료율 (%, 각각)",
    taxRateLabel: "매도 시 거래세율 (%)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    totalBuyLabel: "총 매수금액 (수수료 포함)",
    totalSellLabel: "총 매도금액 (수수료·세금 제외)",
    netProfitLabel: "순손익",
    returnRateLabel: "수익률",
    disclaimer: "본 계산 결과는 입력한 수수료·세율을 기준으로 한 참고용 추정치입니다. 실제 수수료율은 증권사마다 다르며, 거래세율은 시장·종목(국내/해외, 코스피/코스닥 등)에 따라 다를 수 있습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "매수가, 매도가, 수량을 입력합니다.",
      "매수·매도 수수료율과 매도 시 거래세율을 입력합니다.",
      "'계산하기'를 눌러 수수료·세금을 반영한 실제 순손익과 수익률을 확인하세요.",
    ],
    faq: [
      { q: "수수료와 세금을 반영하지 않으면 왜 손익이 다르게 나오나요?", a: "매수·매도 시 부과되는 거래 수수료와 매도 시 부과되는 거래세(증권거래세 등)는 실제 손익에서 차감되므로, 단순 가격 차이만 계산하면 실제보다 수익이 과대평가됩니다." },
      { q: "해외 주식도 계산할 수 있나요?", a: "네, 수수료율과 세율을 해당 시장 기준으로 직접 입력하면 해외 주식 손익도 동일한 방식으로 계산할 수 있습니다. 단, 환율 변동은 반영되지 않습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Stock Profit Calculator",
    subtitle: "Enter your buy/sell prices, quantity, and fees/tax to calculate your actual profit and return.",
    buyPriceLabel: "Buy Price",
    sellPriceLabel: "Sell Price",
    quantityLabel: "Quantity (Shares)",
    feeRateLabel: "Buy/Sell Fee Rate (%, each)",
    taxRateLabel: "Sell Transaction Tax Rate (%)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    totalBuyLabel: "Total Buy Cost (incl. fees)",
    totalSellLabel: "Net Sell Proceeds (after fees/tax)",
    netProfitLabel: "Net Profit/Loss",
    returnRateLabel: "Return Rate",
    disclaimer: "This result is a reference estimate based on the fee/tax rates you entered. Actual fee rates vary by brokerage, and transaction tax rates vary by market and security type.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the buy price, sell price, and quantity.",
      "Enter the buy/sell fee rate and sell transaction tax rate.",
      "Click 'Calculate' to see your actual net profit and return after fees/tax.",
    ],
    faq: [
      { q: "Why does the profit differ if I don't account for fees and tax?", a: "Trading fees charged on both buy/sell and transaction tax charged on sell are deducted from actual profit, so a simple price difference overstates your real gain." },
      { q: "Can I calculate for overseas stocks too?", a: "Yes, by entering the fee and tax rates for that market. Note that currency exchange fluctuations are not factored in." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "株式損益計算機",
    subtitle: "買付・売却価格と数量、手数料・税金を入力して実際の損益と収益率を計算します。",
    buyPriceLabel: "買付価格",
    sellPriceLabel: "売却価格",
    quantityLabel: "数量（株）",
    feeRateLabel: "買付・売却手数料率（%、各）",
    taxRateLabel: "売却時取引税率（%）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    totalBuyLabel: "総買付金額（手数料含む）",
    totalSellLabel: "総売却金額（手数料・税金除く）",
    netProfitLabel: "純損益",
    returnRateLabel: "収益率",
    disclaimer: "この計算結果は入力した手数料・税率を基準とした参考推定値です。実際の手数料率は証券会社によって異なり、取引税率は市場・銘柄によって異なる場合があります。",
    howTitle: "使用方法",
    howSteps: [
      "買付価格、売却価格、数量を入力します。",
      "買付・売却手数料率と売却時取引税率を入力します。",
      "「計算する」を押して手数料・税金を反映した実際の純損益と収益率を確認しましょう。",
    ],
    faq: [
      { q: "手数料と税金を反映しないと損益が異なるのはなぜですか？", a: "買付・売却時に課される取引手数料と売却時に課される取引税は実際の損益から差し引かれるため、単純な価格差だけで計算すると実際より収益が過大評価されます。" },
      { q: "海外株式も計算できますか？", a: "はい、該当市場基準の手数料率・税率を直接入力すれば海外株式の損益も同じ方式で計算できます。ただし為替変動は反映されません。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Ganancias en Acciones",
    subtitle: "Introduce tus precios de compra/venta, cantidad y comisiones/impuestos para calcular tu ganancia real.",
    buyPriceLabel: "Precio de Compra",
    sellPriceLabel: "Precio de Venta",
    quantityLabel: "Cantidad (Acciones)",
    feeRateLabel: "Tasa de Comisión (%, cada una)",
    taxRateLabel: "Tasa de Impuesto de Venta (%)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    totalBuyLabel: "Costo Total de Compra (con comisión)",
    totalSellLabel: "Ingreso Neto de Venta (después de comisión/impuesto)",
    netProfitLabel: "Ganancia/Pérdida Neta",
    returnRateLabel: "Tasa de Retorno",
    disclaimer: "Este resultado es una estimación de referencia según las tasas que introdujiste. Las tasas reales varían según la correduría y el tipo de mercado.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el precio de compra, venta y cantidad.",
      "Introduce la tasa de comisión y el impuesto de transacción.",
      "Haz clic en 'Calcular' para ver tu ganancia neta real.",
    ],
    faq: [
      { q: "¿Por qué la ganancia difiere si no considero comisiones e impuestos?", a: "Las comisiones de compra/venta y el impuesto de transacción en la venta se deducen de la ganancia real, así que una diferencia de precio simple sobreestima tu ganancia." },
      { q: "¿Puedo calcular para acciones extranjeras?", a: "Sí, introduciendo las tasas de ese mercado. Nota que las fluctuaciones de tipo de cambio no se consideran." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
