export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  stockPriceLabel: string;
  dividendPerShareLabel: string;
  sharesLabel: string;
  calculateBtn: string;
  resultLabel: string;
  yieldLabel: string;
  annualIncomeLabel: string;
  monthlyAvgLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "배당수익률 계산기",
    subtitle: "주가와 주당 배당금을 입력해 배당수익률과 연간 예상 배당금을 계산합니다.",
    stockPriceLabel: "현재 주가",
    dividendPerShareLabel: "주당 배당금 (연간 총액)",
    sharesLabel: "보유 주식 수",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    yieldLabel: "배당수익률",
    annualIncomeLabel: "연간 예상 배당금 총액",
    monthlyAvgLabel: "월평균 환산액",
    disclaimer: "본 계산은 입력한 배당금이 향후에도 동일하게 유지된다고 가정한 참고용 추정치이며, 실제 배당금은 기업 실적과 정책에 따라 변동되거나 중단될 수 있습니다. 또한 배당소득세(일반적으로 15.4%)는 반영되지 않았습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "현재 주가와 연간 주당 배당금 총액을 입력합니다.",
      "보유 중인(또는 매수 예정인) 주식 수를 입력합니다.",
      "'계산하기'를 눌러 배당수익률과 연간 예상 배당금을 확인하세요.",
    ],
    faq: [
      { q: "배당수익률이 높을수록 무조건 좋은 건가요?", a: "꼭 그렇지는 않습니다. 비정상적으로 높은 배당수익률은 주가 급락이나 일시적 특별배당 때문일 수 있어, 기업의 실적과 배당 지속 가능성을 함께 확인하는 것이 중요합니다." },
      { q: "배당금은 세금을 떼고 받나요?", a: "네, 한국에서는 배당소득에 대해 일반적으로 15.4%(지방소득세 포함)가 원천징수된 후 지급됩니다. 이 계산기는 세전 기준으로 계산되므로 실제 수령액은 더 적을 수 있습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Dividend Yield Calculator",
    subtitle: "Enter the stock price and dividend per share to calculate the dividend yield and estimated annual dividend income.",
    stockPriceLabel: "Current Stock Price",
    dividendPerShareLabel: "Dividend Per Share (Annual Total)",
    sharesLabel: "Number of Shares Held",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    yieldLabel: "Dividend Yield",
    annualIncomeLabel: "Estimated Annual Dividend Income",
    monthlyAvgLabel: "Monthly Average Equivalent",
    disclaimer: "This is a reference estimate assuming the dividend remains unchanged going forward. Actual dividends may change or be discontinued based on company performance and policy, and dividend income tax (typically 15.4%) is not reflected.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the current stock price and the annual dividend per share.",
      "Enter the number of shares you hold (or plan to buy).",
      "Click 'Calculate' to see your dividend yield and estimated annual income.",
    ],
    faq: [
      { q: "Is a higher dividend yield always better?", a: "Not necessarily. An unusually high yield can result from a sharp stock price drop or a one-time special dividend, so checking company performance and dividend sustainability is important." },
      { q: "Is dividend income taxed?", a: "Yes, in Korea dividend income is typically subject to a 15.4% withholding tax. This calculator shows pre-tax figures, so the actual amount received may be lower." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "配当利回り計算機",
    subtitle: "株価と1株当たり配当金を入力して配当利回りと年間予想配当金を計算します。",
    stockPriceLabel: "現在の株価",
    dividendPerShareLabel: "1株当たり配当金（年間総額）",
    sharesLabel: "保有株式数",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    yieldLabel: "配当利回り",
    annualIncomeLabel: "年間予想配当金総額",
    monthlyAvgLabel: "月平均換算額",
    disclaimer: "この計算は入力した配当金が今後も同じに維持されると仮定した参考推定値であり、実際の配当金は企業業績と政策によって変動または中断される場合があります。また配当所得税（一般的に15.4%）は反映されていません。",
    howTitle: "使用方法",
    howSteps: [
      "現在の株価と年間1株当たり配当金総額を入力します。",
      "保有中（または購入予定）の株式数を入力します。",
      "「計算する」を押して配当利回りと年間予想配当金を確認しましょう。",
    ],
    faq: [
      { q: "配当利回りが高いほど必ず良いということですか？", a: "必ずしもそうではありません。異常に高い配当利回りは株価急落や一時的な特別配当が原因である場合があり、企業の実績と配当持続可能性を併せて確認することが重要です。" },
      { q: "配当金は税金が引かれて支払われますか？", a: "はい、韓国では配当所得に対して一般的に15.4%（地方所得税含む）が源泉徴収された後支払われます。このツールは税引前基準で計算されるため、実際の受取額はより少ない場合があります。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Rendimiento de Dividendos",
    subtitle: "Introduce el precio de la acción y el dividendo por acción para calcular el rendimiento y el ingreso anual estimado.",
    stockPriceLabel: "Precio Actual de la Acción",
    dividendPerShareLabel: "Dividendo por Acción (Total Anual)",
    sharesLabel: "Número de Acciones",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    yieldLabel: "Rendimiento de Dividendo",
    annualIncomeLabel: "Ingreso Anual Estimado por Dividendos",
    monthlyAvgLabel: "Promedio Mensual Equivalente",
    disclaimer: "Esta es una estimación de referencia asumiendo que el dividendo se mantiene igual. Los dividendos reales pueden cambiar, y el impuesto sobre dividendos (típicamente 15.4%) no está reflejado.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el precio actual y el dividendo anual por acción.",
      "Introduce el número de acciones que posees (o planeas comprar).",
      "Haz clic en 'Calcular' para ver tu rendimiento e ingreso estimado.",
    ],
    faq: [
      { q: "¿Un rendimiento más alto siempre es mejor?", a: "No necesariamente. Un rendimiento inusualmente alto puede resultar de una caída brusca del precio o un dividendo especial único, así que verificar el desempeño de la empresa es importante." },
      { q: "¿Se gravan los dividendos?", a: "Sí, en Corea los dividendos suelen tener una retención del 15.4%. Esta calculadora muestra cifras antes de impuestos, así que el monto real recibido puede ser menor." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
