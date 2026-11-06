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
      "여러 번에 걸쳐 분할 매수했다면, 평균 매수단가(총 매수금액 ÷ 총 수량)를 계산해 매수 가격란에 입력하세요.",
    ],
    faq: [
      { q: "수수료와 세금을 반영하지 않으면 왜 손익이 다르게 나오나요?", a: "매수·매도 시 부과되는 거래 수수료와 매도 시 부과되는 거래세(증권거래세 등)는 실제 손익에서 차감되므로, 단순 가격 차이만 계산하면 실제보다 수익이 과대평가됩니다." },
      { q: "해외 주식도 계산할 수 있나요?", a: "네, 수수료율과 세율을 해당 시장 기준으로 직접 입력하면 해외 주식 손익도 동일한 방식으로 계산할 수 있습니다. 단, 환율 변동은 반영되지 않습니다." },
      { q: "증권거래세와 양도소득세는 다른 건가요?", a: "네, 다릅니다. 증권거래세는 매도 시 거래금액에 부과되는 세금으로 이 계산기에 반영되며, 양도소득세는 일정 요건(대주주, 해외주식 등)에 해당할 때 실현 수익에 대해 별도로 부과되는 세금으로 이 계산기에는 포함되지 않습니다." },
      { q: "소수점 이하는 어떻게 처리되나요?", a: "입력하신 가격·수량·요율을 기준으로 소수점까지 그대로 계산한 뒤 결과만 보기 좋게 반올림해 표시합니다. 실제 체결 시 증권사 내부 반올림 방식과 1~2원 정도 차이가 날 수 있습니다." },
      { q: "손실이 난 경우에도 세금을 내야 하나요?", a: "증권거래세는 손익과 무관하게 매도 금액 자체에 부과되므로, 손실 상태에서 매도해도 거래세는 발생합니다. 다만 양도소득세는 실현 이익이 없다면 일반적으로 부과되지 않습니다." },
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
      "If you bought in multiple batches, calculate your average cost basis (total cost ÷ total shares) and enter that as the buy price.",
    ],
    faq: [
      { q: "Why does the profit differ if I don't account for fees and tax?", a: "Trading fees charged on both buy/sell and transaction tax charged on sell are deducted from actual profit, so a simple price difference overstates your real gain." },
      { q: "Can I calculate for overseas stocks too?", a: "Yes, by entering the fee and tax rates for that market. Note that currency exchange fluctuations are not factored in." },
      { q: "Is the securities transaction tax the same as capital gains tax?", a: "No. The transaction tax is charged on the sale amount and is included in this calculator. Capital gains tax applies separately to realized profit under certain conditions (e.g., major shareholder status or overseas stocks) and is not included here." },
      { q: "How are decimal values handled?", a: "The calculation keeps full decimal precision internally and only rounds the final result for display. Actual brokerage execution may differ by a small amount (a cent or two) due to their own internal rounding rules." },
      { q: "Do I still owe tax if I sell at a loss?", a: "The securities transaction tax is charged on the sale amount itself regardless of profit or loss, so it still applies even if you sell at a loss. Capital gains tax, by contrast, generally doesn't apply when there's no realized profit." },
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
      "複数回に分けて買付した場合は、平均買付単価（総買付金額÷総数量）を計算して買付価格欄に入力してください。",
    ],
    faq: [
      { q: "手数料と税金を反映しないと損益が異なるのはなぜですか？", a: "買付・売却時に課される取引手数料と売却時に課される取引税は実際の損益から差し引かれるため、単純な価格差だけで計算すると実際より収益が過大評価されます。" },
      { q: "海外株式も計算できますか？", a: "はい、該当市場基準の手数料率・税率を直接入力すれば海外株式の損益も同じ方式で計算できます。ただし為替変動は反映されません。" },
      { q: "証券取引税と譲渡所得税は違いますか？", a: "はい、異なります。証券取引税は売却時の取引金額に課される税金でこのツールに反映されますが、譲渡所得税は一定要件（大株主、海外株式など）に該当する場合に実現利益に対して別途課される税金で、このツールには含まれません。" },
      { q: "小数点以下はどう処理されますか？", a: "入力された価格・数量・料率を小数点まで正確に計算し、結果のみ見やすく四捨五入して表示します。実際の約定時は証券会社内部の端数処理方式により1〜2円程度の差が出る場合があります。" },
      { q: "損失が出た場合でも税金を払う必要がありますか？", a: "証券取引税は損益に関係なく売却金額そのものに課されるため、損失状態で売却しても取引税は発生します。ただし譲渡所得税は実現利益がなければ一般的に課されません。" },
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
      "Si compraste en varios lotes, calcula tu costo promedio (costo total ÷ acciones totales) e introdúcelo como precio de compra.",
    ],
    faq: [
      { q: "¿Por qué la ganancia difiere si no considero comisiones e impuestos?", a: "Las comisiones de compra/venta y el impuesto de transacción en la venta se deducen de la ganancia real, así que una diferencia de precio simple sobreestima tu ganancia." },
      { q: "¿Puedo calcular para acciones extranjeras?", a: "Sí, introduciendo las tasas de ese mercado. Nota que las fluctuaciones de tipo de cambio no se consideran." },
      { q: "¿Es el impuesto de transacción lo mismo que el impuesto a las ganancias de capital?", a: "No. El impuesto de transacción se cobra sobre el monto de venta y está incluido en esta calculadora. El impuesto a las ganancias de capital aplica por separado a la ganancia realizada bajo ciertas condiciones (como ser accionista principal o acciones extranjeras) y no se incluye aquí." },
      { q: "¿Cómo se manejan los decimales?", a: "El cálculo mantiene la precisión decimal completa internamente y solo redondea el resultado final para mostrarlo. La ejecución real en la correduría puede diferir ligeramente debido a sus propias reglas de redondeo." },
      { q: "¿Debo pagar impuestos si vendo con pérdida?", a: "El impuesto de transacción se cobra sobre el monto de venta en sí, independientemente de la ganancia o pérdida, así que aplica incluso al vender con pérdida. El impuesto a las ganancias de capital, en cambio, generalmente no aplica si no hay ganancia realizada." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
