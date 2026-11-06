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
      "분기·반기 배당을 지급하는 종목이라면, 연간 총 배당금(분기 배당금 × 지급 횟수)으로 환산해 입력하세요.",
    ],
    faq: [
      { q: "배당수익률이 높을수록 무조건 좋은 건가요?", a: "꼭 그렇지는 않습니다. 비정상적으로 높은 배당수익률은 주가 급락이나 일시적 특별배당 때문일 수 있어, 기업의 실적과 배당 지속 가능성을 함께 확인하는 것이 중요합니다." },
      { q: "배당금은 세금을 떼고 받나요?", a: "네, 한국에서는 배당소득에 대해 일반적으로 15.4%(지방소득세 포함)가 원천징수된 후 지급됩니다. 이 계산기는 세전 기준으로 계산되므로 실제 수령액은 더 적을 수 있습니다." },
      { q: "배당수익률과 배당성향은 어떻게 다른가요?", a: "배당수익률은 주가 대비 배당금 비율이고, 배당성향은 당기순이익 중 배당금으로 지급한 비율입니다. 배당성향이 지나치게 높으면(예: 100% 이상) 이익을 초과해 배당하는 것이므로 지속 가능성을 의심해봐야 합니다." },
      { q: "배당금은 1년에 몇 번 지급되나요?", a: "기업과 시장마다 다릅니다. 한국 기업은 대부분 연 1회(일부 분기·반기 배당 확대 중)이며, 미국 주식은 분기 배당이 일반적입니다. 이 계산기는 입력한 금액을 연간 총액으로 가정하므로, 분기 배당이라면 4를 곱해 입력해야 합니다." },
      { q: "배당수익률이 몇 %면 괜찮은 수준인가요?", a: "시장 평균과 기준금리에 따라 달라지지만, 일반적으로 2~4%는 평균적인 수준, 4% 이상은 고배당주로 분류되는 경우가 많습니다. 다만 절대적인 기준은 없으므로 동일 업종 내 다른 기업과 비교하는 것이 더 의미 있습니다." },
      { q: "배당락일이란 무엇이고 계산에 영향을 주나요?", a: "배당락일은 배당받을 권리가 사라지는 날로, 그 전날까지 주식을 보유해야 배당을 받을 수 있습니다. 이 계산기는 현재 시점의 주가와 배당금을 기준으로 계산하므로, 배당락 이후 주가 변동은 별도로 반영해야 합니다." },
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
      "For stocks that pay quarterly or semi-annual dividends, enter the annualized total (per-payment amount × number of payments per year).",
    ],
    faq: [
      { q: "Is a higher dividend yield always better?", a: "Not necessarily. An unusually high yield can result from a sharp stock price drop or a one-time special dividend, so checking company performance and dividend sustainability is important." },
      { q: "Is dividend income taxed?", a: "Yes, in Korea dividend income is typically subject to a 15.4% withholding tax. This calculator shows pre-tax figures, so the actual amount received may be lower." },
      { q: "What's the difference between dividend yield and payout ratio?", a: "Dividend yield is the dividend relative to the stock price, while the payout ratio is the share of net income paid out as dividends. A payout ratio consistently above 100% means the company is paying out more than it earns, which may not be sustainable." },
      { q: "How many times a year are dividends usually paid?", a: "It varies by company and market. Many U.S. stocks pay quarterly, while dividend-paying companies elsewhere often pay annually or semi-annually. Since this calculator treats the entered figure as the annual total, multiply a per-quarter payment by 4 before entering it." },
      { q: "What dividend yield is considered good?", a: "It depends on the market and prevailing interest rates, but 2-4% is often seen as average, while above 4% is commonly classified as a high-yield stock. There's no universal threshold, so comparing against peers in the same industry is more meaningful." },
      { q: "What is the ex-dividend date and does it affect this calculation?", a: "The ex-dividend date is the cutoff after which a new buyer no longer qualifies for the upcoming dividend. This calculator uses the stock price and dividend you enter at the time of calculation, so any price change around the ex-dividend date isn't automatically reflected." },
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
      "四半期・半期配当を支給する銘柄の場合、年間配当金総額（1回あたりの配当金×支給回数）に換算して入力してください。",
    ],
    faq: [
      { q: "配当利回りが高いほど必ず良いということですか？", a: "必ずしもそうではありません。異常に高い配当利回りは株価急落や一時的な特別配当が原因である場合があり、企業の実績と配当持続可能性を併せて確認することが重要です。" },
      { q: "配当金は税金が引かれて支払われますか？", a: "はい、韓国では配当所得に対して一般的に15.4%（地方所得税含む）が源泉徴収された後支払われます。このツールは税引前基準で計算されるため、実際の受取額はより少ない場合があります。" },
      { q: "配当利回りと配当性向はどう違いますか？", a: "配当利回りは株価に対する配当金の比率で、配当性向は当期純利益のうち配当金として支払った比率です。配当性向が100%を超えて続く場合、利益を超えて配当していることになり持続可能性に注意が必要です。" },
      { q: "配当金は年に何回支払われますか？", a: "企業や市場によって異なります。米国株は四半期配当が一般的で、他の市場では年1回または半期配当が多い傾向です。このツールは入力金額を年間総額として扱うため、四半期配当の場合は4倍して入力してください。" },
      { q: "配当利回りは何%あれば良いとされますか？", a: "市場や金利水準によって異なりますが、一般的に2〜4%は平均的な水準、4%以上は高配当株に分類されることが多いです。絶対的な基準はないため、同業種の他企業と比較する方が意味があります。" },
      { q: "配当落ち日とは何ですか？計算に影響しますか？", a: "配当落ち日は配当を受け取る権利がなくなる日で、その前日までに株式を保有している必要があります。このツールは入力時点の株価と配当金を基準に計算するため、配当落ち後の株価変動は別途反映する必要があります。" },
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
      "Para acciones que pagan dividendos trimestrales o semestrales, introduce el total anualizado (monto por pago × número de pagos al año).",
    ],
    faq: [
      { q: "¿Un rendimiento más alto siempre es mejor?", a: "No necesariamente. Un rendimiento inusualmente alto puede resultar de una caída brusca del precio o un dividendo especial único, así que verificar el desempeño de la empresa es importante." },
      { q: "¿Se gravan los dividendos?", a: "Sí, en Corea los dividendos suelen tener una retención del 15.4%. Esta calculadora muestra cifras antes de impuestos, así que el monto real recibido puede ser menor." },
      { q: "¿Cuál es la diferencia entre rendimiento de dividendo y ratio de pago?", a: "El rendimiento es el dividendo relativo al precio de la acción, mientras que el ratio de pago es la parte de las ganancias netas distribuida como dividendos. Un ratio superior al 100% de forma sostenida indica que la empresa paga más de lo que gana." },
      { q: "¿Cuántas veces al año se pagan los dividendos normalmente?", a: "Varía según la empresa y el mercado. Muchas acciones de EE. UU. pagan trimestralmente, mientras que en otros mercados suele ser anual o semestral. Como esta calculadora trata el monto introducido como el total anual, multiplica por 4 un pago trimestral antes de introducirlo." },
      { q: "¿Qué rendimiento de dividendo se considera bueno?", a: "Depende del mercado y las tasas de interés vigentes, pero 2-4% suele considerarse promedio, y más del 4% se clasifica a menudo como una acción de alto rendimiento. No hay un umbral universal, así que comparar con empresas similares del mismo sector es más útil." },
      { q: "¿Qué es la fecha ex-dividendo y afecta este cálculo?", a: "La fecha ex-dividendo es el punto de corte después del cual un nuevo comprador ya no califica para el próximo dividendo. Esta calculadora usa el precio y dividendo que introduces en el momento del cálculo, así que cualquier cambio de precio alrededor de esa fecha no se refleja automáticamente." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
