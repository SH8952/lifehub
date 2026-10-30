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
    ],
    faq: [
      { q: "월세 계약의 거래 금액은 어떻게 계산하나요?", a: "임대차 거래 금액 = 보증금 + (월세 × 100)으로 환산해 계산합니다. 예를 들어 보증금 1000만원, 월세 50만원이면 1000만 + 5000만 = 6000만원이 거래 금액이 됩니다." },
      { q: "상한 요율이란 법정 고정 수수료인가요?", a: "아니요. 상한 요율은 중개사가 받을 수 있는 최대 한도이며, 실제 수수료는 이 한도 내에서 중개사와 협의하여 더 낮게 결정될 수 있습니다." },
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
    ],
    faq: [
      { q: "How is the transaction amount calculated for monthly rent?", a: "Lease transaction amount = deposit + (monthly rent × 100). For example, a 10M deposit with 500K monthly rent equals a 60M transaction amount." },
      { q: "Is the maximum rate a fixed fee?", a: "No. The maximum rate is the ceiling an agent can charge; the actual fee can be negotiated lower within that cap." },
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
    ],
    faq: [
      { q: "月貸契約の取引金額はどう計算しますか？", a: "賃貸取引金額＝保証金＋（月貸×100）で換算して計算します。" },
      { q: "上限料率は法定固定手数料ですか？", a: "いいえ。上限料率は仲介士が受け取れる最大限度であり、実際の手数料はこの限度内で仲介士と協議してより低く決定される場合があります。" },
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
    ],
    faq: [
      { q: "¿Cómo se calcula el monto para renta mensual?", a: "Monto de alquiler = depósito + (renta mensual × 100)." },
      { q: "¿La tasa máxima es una tarifa fija?", a: "No. Es el límite que un agente puede cobrar; la tarifa real puede negociarse más baja dentro de ese límite." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
