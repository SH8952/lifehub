export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  dealTypeLabel: string;
  dealSale: string;
  dealLease: string;
  amountLabel: string;
  calculateBtn: string;
  resultLabel: string;
  rateAppliedLabel: string;
  maxCommissionLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "부동산 중개수수료 계산기",
    subtitle: "거래 금액과 거래 유형(매매/임대차)을 입력해 법정 상한 중개수수료를 계산합니다.",
    dealTypeLabel: "거래 유형",
    dealSale: "매매",
    dealLease: "임대차 (전세/월세)",
    amountLabel: "거래 금액 (매매가 또는 보증금 환산액)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    rateAppliedLabel: "적용 요율 (상한)",
    maxCommissionLabel: "법정 상한 중개수수료",
    disclaimer: "본 계산은 한국 공인중개사 법정 중개수수료 상한 요율(2021년 개정 기준)을 적용한 참고용 추정치입니다. 실제 수수료는 상한 범위 내에서 중개사와 협의해 결정되며, 지역(시·도)별로 세부 기준이 다를 수 있습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "거래 유형(매매/임대차)을 선택합니다.",
      "거래 금액을 입력합니다 (임대차는 보증금+월세×100 환산액).",
      "'계산하기'를 눌러 법정 상한 중개수수료를 확인하세요.",
      "계산 결과는 '상한' 금액이므로, 실제 지급 전 중개사와 협의해 더 낮은 금액으로 조정할 수 있는지 확인해보세요.",
    ],
    faq: [
      { q: "월세 계약의 거래 금액은 어떻게 계산하나요?", a: "임대차 거래 금액 = 보증금 + (월세 × 100)으로 환산해 계산합니다. 예를 들어 보증금 1000만원, 월세 50만원이면 1000만 + 5000만 = 6000만원이 거래 금액이 됩니다." },
      { q: "상한 요율이란 법정 고정 수수료인가요?", a: "아니요. 상한 요율은 중개사가 받을 수 있는 최대 한도이며, 실제 수수료는 이 한도 내에서 중개사와 협의하여 더 낮게 결정될 수 있습니다." },
      { q: "중개수수료 외에 다른 비용도 드나요?", a: "네. 매매의 경우 취득세·등기비용·법무사 수수료 등이, 임대차의 경우 확정일자 비용 등이 추가로 발생할 수 있습니다. 중개수수료는 전체 거래 비용의 일부입니다." },
      { q: "상가 등 비주거용 부동산에도 동일한 요율이 적용되나요?", a: "아니요. 상가·오피스 등 비주거용 부동산은 주택과 다른(통상 더 높은) 요율 체계가 적용되는 경우가 많습니다. 이 계산기는 주거용 거래(매매/임대차) 기준으로 설계되었습니다." },
      { q: "거래 금액에 따라 요율이 달라지나요?", a: "네. 한국의 법정 중개수수료는 거래 금액 구간별로 상한 요율이 다르게 정해져 있으며, 금액이 클수록 적용 요율은 낮아지는 구조입니다. 이 계산기는 해당 구간별 요율을 자동으로 적용합니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Real Estate Agent Commission Calculator",
    subtitle: "Enter the transaction amount and type (sale/lease) to calculate the legal maximum agent commission.",
    dealTypeLabel: "Transaction Type",
    dealSale: "Sale",
    dealLease: "Lease (Jeonse/Monthly Rent)",
    amountLabel: "Transaction Amount (Sale Price or Converted Deposit)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    rateAppliedLabel: "Applied Rate (Max)",
    maxCommissionLabel: "Legal Maximum Commission",
    disclaimer: "This uses the legal maximum commission rate structure (2021 revision, Korea). Actual fees are negotiated within this cap and may vary by region.",
    howTitle: "How to Use",
    howSteps: [
      "Select the transaction type (sale/lease).",
      "Enter the transaction amount (for lease, deposit + monthly rent × 100).",
      "Click 'Calculate' to see the legal maximum commission.",
      "The result shown is the legal maximum, so before paying, it's worth asking the agent whether a lower fee can be negotiated.",
    ],
    faq: [
      { q: "How is the transaction amount calculated for monthly rent?", a: "Lease transaction amount = deposit + (monthly rent × 100). For example, a 10M deposit with 500K monthly rent equals a 60M transaction amount." },
      { q: "Is the maximum rate a fixed fee?", a: "No. The maximum rate is the ceiling an agent can charge; the actual fee can be negotiated lower within that cap." },
      { q: "Are there other costs besides the agent commission?", a: "Yes. For a sale, acquisition tax, registration fees, and notary fees typically apply; for a lease, there may be minor administrative fees. The agent commission is only part of the total transaction cost." },
      { q: "Does the same rate apply to commercial property?", a: "No. Commercial properties such as retail or office space typically follow a different (often higher) rate structure than residential property. This calculator is designed for residential sale and lease transactions." },
      { q: "Does the rate change based on the transaction amount?", a: "Yes. Korea's legal maximum commission rate is tiered by transaction amount, with the applicable rate generally decreasing as the amount increases. This calculator applies the correct tier automatically." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "不動産仲介手数料計算機",
    subtitle: "取引金額と取引タイプ（売買/賃貸）を入力して法定上限仲介手数料を計算します。",
    dealTypeLabel: "取引タイプ",
    dealSale: "売買",
    dealLease: "賃貸（伝貰/月貸）",
    amountLabel: "取引金額（売買価格または保証金換算額）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    rateAppliedLabel: "適用料率（上限）",
    maxCommissionLabel: "法定上限仲介手数料",
    disclaimer: "この計算は韓国の公認仲介士法定仲介手数料上限料率（2021年改正基準）を適用した参考推定値です。実際の手数料はこの上限内で仲介士と協議して決定され、地域によって詳細基準が異なる場合があります。",
    howTitle: "使用方法",
    howSteps: [
      "取引タイプ（売買/賃貸）を選択します。",
      "取引金額を入力します（賃貸は保証金+月貸×100換算額）。",
      "「計算する」を押して法定上限仲介手数料を確認しましょう。",
      "計算結果は「上限」金額であるため、実際の支払い前に仲介士と協議してより低い金額に調整できるか確認してみましょう。",
    ],
    faq: [
      { q: "月貸契約の取引金額はどう計算しますか？", a: "賃貸取引金額＝保証金＋（月貸×100）で換算して計算します。" },
      { q: "上限料率は法定固定手数料ですか？", a: "いいえ。上限料率は仲介士が受け取れる最大限度であり、実際の手数料はこの限度内で仲介士と協議してより低く決定される場合があります。" },
      { q: "仲介手数料以外にも費用がかかりますか？", a: "はい。売買の場合、取得税・登記費用・法務士手数料などが、賃貸の場合は確定日付費用などが追加で発生する場合があります。仲介手数料は取引費用全体の一部です。" },
      { q: "商業用不動産にも同じ料率が適用されますか？", a: "いいえ。店舗・オフィスなどの非住居用不動産には住宅とは異なる（通常より高い）料率体系が適用される場合が多いです。このツールは住居用取引（売買/賃貸）を基準に設計されています。" },
      { q: "取引金額によって料率は変わりますか？", a: "はい。韓国の法定仲介手数料は取引金額の区間ごとに上限料率が異なり、金額が大きいほど適用料率は低くなる構造です。このツールは該当区間の料率を自動的に適用します。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Comisión Inmobiliaria",
    subtitle: "Introduce el monto y tipo de transacción (venta/alquiler) para calcular la comisión máxima legal.",
    dealTypeLabel: "Tipo de Transacción",
    dealSale: "Venta",
    dealLease: "Alquiler (Jeonse/Renta Mensual)",
    amountLabel: "Monto de Transacción (Precio o Depósito Convertido)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    rateAppliedLabel: "Tasa Aplicada (Máx)",
    maxCommissionLabel: "Comisión Máxima Legal",
    disclaimer: "Esto usa la estructura de tasa máxima legal (revisión 2021, Corea). Las tarifas reales se negocian dentro de este límite y pueden variar por región.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona el tipo de transacción (venta/alquiler).",
      "Introduce el monto de transacción.",
      "Haz clic en 'Calcular' para ver la comisión máxima legal.",
      "El resultado mostrado es el máximo legal, así que antes de pagar vale la pena preguntar al agente si se puede negociar una tarifa más baja.",
    ],
    faq: [
      { q: "¿Cómo se calcula el monto para renta mensual?", a: "Monto de alquiler = depósito + (renta mensual × 100)." },
      { q: "¿La tasa máxima es una tarifa fija?", a: "No. Es el límite que un agente puede cobrar; la tarifa real puede negociarse más baja dentro de ese límite." },
      { q: "¿Hay otros costos además de la comisión del agente?", a: "Sí. En una venta suelen aplicar impuesto de adquisición, gastos de registro y honorarios notariales; en un alquiler puede haber pequeños costos administrativos. La comisión del agente es solo parte del costo total de la transacción." },
      { q: "¿Se aplica la misma tasa a propiedades comerciales?", a: "No. Las propiedades comerciales, como locales u oficinas, suelen seguir una estructura de tasas diferente (a menudo más alta) que la residencial. Esta calculadora está diseñada para transacciones residenciales de venta y alquiler." },
      { q: "¿Cambia la tasa según el monto de la transacción?", a: "Sí. La comisión máxima legal en Corea se escalona por monto de transacción, y la tasa aplicable generalmente disminuye a medida que aumenta el monto. Esta calculadora aplica automáticamente el nivel correspondiente." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
