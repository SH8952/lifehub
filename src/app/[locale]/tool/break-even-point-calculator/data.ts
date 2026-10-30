export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  fixedCostLabel: string;
  variableCostLabel: string;
  unitPriceLabel: string;
  calculateBtn: string;
  resultLabel: string;
  contributionMarginLabel: string;
  bepUnitsLabel: string;
  bepRevenueLabel: string;
  unitsLabel: string;
  errorMsg: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "손익분기점(BEP) 계산기",
    subtitle: "고정비, 변동비, 판매 단가를 입력해 손익분기점 판매량과 매출액을 계산합니다.",
    fixedCostLabel: "고정비 (월, 임대료·인건비 등)",
    variableCostLabel: "단위당 변동비 (재료비 등)",
    unitPriceLabel: "판매 단가",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    contributionMarginLabel: "단위당 공헌이익",
    bepUnitsLabel: "손익분기 판매량",
    bepRevenueLabel: "손익분기 매출액",
    unitsLabel: "개",
    errorMsg: "⚠️ 판매 단가가 단위당 변동비보다 낮으면 판매량을 늘려도 손익분기점에 도달할 수 없습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "월 고정비(임대료, 인건비 등)를 입력합니다.",
      "제품 단위당 변동비와 판매 단가를 입력합니다.",
      "'계산하기'를 눌러 손익분기점에 도달하기 위한 판매량과 매출액을 확인하세요.",
    ],
    faq: [
      { q: "공헌이익이란 무엇인가요?", a: "공헌이익은 판매 단가에서 단위당 변동비를 뺀 금액으로, 제품 하나를 더 팔 때마다 고정비를 회수하는 데 기여하는 이익을 의미합니다." },
      { q: "손익분기점을 넘으면 바로 수익이 나나요?", a: "네, 손익분기점(BEP)을 넘는 판매량부터는 추가 판매분의 공헌이익이 모두 순이익으로 쌓이기 시작합니다." },
    ],
    disclaimer: "⚠️ 본 계산 결과는 입력하신 수치를 기반으로 한 단순 참고용 추정치이며, 실제 사업 운영에는 세금, 인건비 변동 등 다양한 요인이 작용합니다. 중요한 사업 결정 전에는 세무사·회계사 등 전문가와 상담하세요.",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Break-Even Point (BEP) Calculator",
    subtitle: "Enter fixed costs, variable costs, and unit price to calculate the break-even sales volume and revenue.",
    fixedCostLabel: "Fixed Costs (Monthly: rent, salaries, etc.)",
    variableCostLabel: "Variable Cost Per Unit (materials, etc.)",
    unitPriceLabel: "Unit Sale Price",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    contributionMarginLabel: "Contribution Margin Per Unit",
    bepUnitsLabel: "Break-Even Sales Volume",
    bepRevenueLabel: "Break-Even Revenue",
    unitsLabel: "units",
    errorMsg: "⚠️ If the unit price is lower than the variable cost per unit, increasing sales volume will never reach break-even.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your monthly fixed costs (rent, salaries, etc.).",
      "Enter the variable cost and sale price per unit.",
      "Click 'Calculate' to see the sales volume and revenue needed to break even.",
    ],
    faq: [
      { q: "What is the contribution margin?", a: "It's the sale price minus the variable cost per unit — the amount each additional unit sold contributes toward covering fixed costs." },
      { q: "Does profit start right after the break-even point?", a: "Yes, once sales exceed the BEP, the contribution margin from each additional unit becomes pure profit." },
    ],
    disclaimer: "⚠️ This result is a simple reference estimate based on your inputs. Actual business operations involve many additional factors such as taxes and labor cost changes. Consult a tax professional or accountant before making important business decisions.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "損益分岐点（BEP）計算機",
    subtitle: "固定費、変動費、販売単価を入力して損益分岐点の販売量と売上額を計算します。",
    fixedCostLabel: "固定費（月、賃貸料・人件費など）",
    variableCostLabel: "単位当たり変動費（材料費など）",
    unitPriceLabel: "販売単価",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    contributionMarginLabel: "単位当たり貢献利益",
    bepUnitsLabel: "損益分岐販売量",
    bepRevenueLabel: "損益分岐売上額",
    unitsLabel: "個",
    errorMsg: "⚠️ 販売単価が単位当たり変動費より低い場合、販売量を増やしても損益分岐点に到達できません。",
    howTitle: "使用方法",
    howSteps: [
      "月の固定費（賃貸料、人件費など）を入力します。",
      "製品単位当たりの変動費と販売単価を入力します。",
      "「計算する」を押して損益分岐点に到達するための販売量と売上額を確認しましょう。",
    ],
    faq: [
      { q: "貢献利益とは何ですか？", a: "貢献利益は販売単価から単位当たり変動費を引いた金額で、製品を1つ多く売るたびに固定費回収に貢献する利益を意味します。" },
      { q: "損益分岐点を超えるとすぐ利益が出ますか？", a: "はい、損益分岐点（BEP）を超える販売量からは追加販売分の貢献利益がすべて純利益として積み上がります。" },
    ],
    disclaimer: "⚠️ この結果は入力値に基づく単純な参考用推定値です。実際の事業運営には税金や人件費の変動など様々な要因が影響します。重要な経営判断の前には税理士などの専門家にご相談ください。",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Punto de Equilibrio (BEP)",
    subtitle: "Introduce costos fijos, variables y precio unitario para calcular el punto de equilibrio.",
    fixedCostLabel: "Costos Fijos (Mensual: alquiler, salarios, etc.)",
    variableCostLabel: "Costo Variable por Unidad (materiales, etc.)",
    unitPriceLabel: "Precio de Venta Unitario",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    contributionMarginLabel: "Margen de Contribución por Unidad",
    bepUnitsLabel: "Volumen de Ventas de Equilibrio",
    bepRevenueLabel: "Ingresos de Equilibrio",
    unitsLabel: "unidades",
    errorMsg: "⚠️ Si el precio es menor que el costo variable por unidad, aumentar el volumen nunca alcanzará el equilibrio.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tus costos fijos mensuales.",
      "Introduce el costo variable y precio de venta por unidad.",
      "Haz clic en 'Calcular' para ver el volumen e ingresos necesarios.",
    ],
    faq: [
      { q: "¿Qué es el margen de contribución?", a: "Es el precio de venta menos el costo variable por unidad — lo que cada unidad adicional contribuye a cubrir los costos fijos." },
      { q: "¿La ganancia comienza justo después del punto de equilibrio?", a: "Sí, una vez que las ventas superan el BEP, el margen de cada unidad adicional se convierte en ganancia pura." },
    ],
    disclaimer: "⚠️ Este resultado es una estimación de referencia simple basada en tus datos. La operación real del negocio involucra factores adicionales como impuestos y cambios en costos laborales. Consulta a un contador o asesor fiscal antes de tomar decisiones importantes.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
