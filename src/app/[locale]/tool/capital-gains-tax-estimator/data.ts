export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  salePriceLabel: string;
  acquisitionPriceLabel: string;
  expensesLabel: string;
  holdingYearsLabel: string;
  residenceYearsLabel: string;
  oneHouseLabel: string;
  calculateBtn: string;
  resultLabel: string;
  gainLabel: string;
  longTermDeductionLabel: string;
  taxableLabel: string;
  taxLabel: string;
  exemptNotice: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "양도소득세 간이 계산기",
    subtitle: "양도가액, 취득가액, 보유 기간을 입력해 부동산 양도소득세를 간단히 추정합니다.",
    salePriceLabel: "양도가액 (매도 가격)",
    acquisitionPriceLabel: "취득가액 (매수 가격)",
    expensesLabel: "필요경비 (중개수수료·취득세 등)",
    holdingYearsLabel: "보유 기간 (년)",
    residenceYearsLabel: "거주 기간 (년, 1세대 1주택일 때)",
    oneHouseLabel: "1세대 1주택 여부",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    gainLabel: "양도차익",
    longTermDeductionLabel: "장기보유특별공제",
    taxableLabel: "과세표준",
    taxLabel: "예상 양도소득세",
    exemptNotice: "⚠️ 1세대 1주택이며 2년 이상 보유한 경우, 양도가액 12억원 이하 구간은 비과세 대상일 수 있습니다 (단, 고가주택·다주택 여부 등 세부 조건 확인 필요).",
    disclaimer: "본 계산은 기본공제(연 250만원), 단순화된 장기보유특별공제, 누진세율만 반영한 참고용 추정치입니다. 실제 양도소득세는 다주택 여부, 조정대상지역, 단기 보유(2년 미만) 중과세율 등 복잡한 요건에 따라 크게 달라지므로, 정확한 세액은 세무사와 상담하시기 바랍니다.",
    howTitle: "사용 방법",
    howSteps: [
      "양도가액, 취득가액, 필요경비를 입력합니다.",
      "보유 기간(년)과 1세대 1주택 여부를 선택합니다. 1세대 1주택이면 거주 기간(년)도 입력합니다.",
      "'계산하기'를 눌러 장기보유특별공제를 반영한 예상 양도소득세를 확인하세요.",
    ],
    faq: [
      { q: "장기보유특별공제는 어떻게 적용되나요?", a: "3년 이상 보유해야 적용됩니다. 일반 부동산은 보유 연수 × 2%(최대 30%)이고, 1세대 1주택은 보유 기간 공제(연 4%, 최대 40%)와 거주 기간 공제(2년 이상부터 연 4%, 최대 40%)를 합산해 최대 80%입니다. 거주 기간이 2년 미만이면 일반 부동산 기준(최대 30%)을 적용합니다. 이 계산기는 입력한 보유·거주 연수를 1년 단위로 내림해 계산합니다." },
      { q: "2년 미만 보유하면 세율이 다른가요?", a: "네, 한국에서는 보유기간 1년 미만은 단기 중과세율(주택 등 70%), 1~2년은 60% 등 높은 단일세율이 적용될 수 있습니다. 이 계산기는 2년 이상 보유를 전제로 한 일반 누진세율만 다룹니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Capital Gains Tax Simple Estimator",
    subtitle: "Enter the sale price, acquisition price, and holding period to estimate real estate capital gains tax.",
    salePriceLabel: "Sale Price",
    acquisitionPriceLabel: "Acquisition Price",
    expensesLabel: "Necessary Expenses (fees, taxes, etc.)",
    holdingYearsLabel: "Holding Period (Years)",
    residenceYearsLabel: "Residence Period (Years, single-home only)",
    oneHouseLabel: "Single-Home Household",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    gainLabel: "Capital Gain",
    longTermDeductionLabel: "Long-Term Holding Deduction",
    taxableLabel: "Taxable Amount",
    taxLabel: "Estimated Capital Gains Tax",
    exemptNotice: "⚠️ If this is a single-home household held for 2+ years, sale prices under 1.2 billion KRW may be tax-exempt (subject to detailed conditions).",
    disclaimer: "This is a simplified reference estimate reflecting only the basic deduction, a simplified long-term holding deduction, and progressive rates. Actual capital gains tax varies significantly based on complex conditions — consult a tax professional for an exact figure.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the sale price, acquisition price, and necessary expenses.",
      "Select the holding period and single-home household status. For a single-home household, also enter the residence period.",
      "Click 'Calculate' to see the estimated tax reflecting the long-term holding deduction.",
    ],
    faq: [
      { q: "How is the long-term holding deduction applied?", a: "It applies from 3+ years of holding. General real estate gets 2% per year of holding (up to 30%). Single-home households get a holding-period deduction (4% per year, up to 40%) plus a residence-period deduction (4% per year from 2 years, up to 40%), up to 80% combined. With under 2 years of residence, the general rate (up to 30%) applies. Years are rounded down to whole years." },
      { q: "Is the rate different for under 2 years of holding?", a: "Yes, Korea applies higher flat short-term rates (e.g. 70% under 1 year) for short holding periods. This calculator only covers the general progressive rates for 2+ year holdings." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "譲渡所得税簡易計算機",
    subtitle: "譲渡価額、取得価額、保有期間を入力して不動産譲渡所得税を簡単に推定します。",
    salePriceLabel: "譲渡価額（売却価格）",
    acquisitionPriceLabel: "取得価額（購入価格）",
    expensesLabel: "必要経費（仲介手数料・取得税など）",
    holdingYearsLabel: "保有期間（年）",
    residenceYearsLabel: "居住期間（年・一世帯一住宅の場合）",
    oneHouseLabel: "一世帯一住宅かどうか",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    gainLabel: "譲渡差益",
    longTermDeductionLabel: "長期保有特別控除",
    taxableLabel: "課税標準",
    taxLabel: "予想譲渡所得税",
    exemptNotice: "⚠️ 一世帯一住宅で2年以上保有した場合、譲渡価額12億ウォン以下の区間は非課税対象となる可能性があります。",
    disclaimer: "この計算は基本控除、単純化された長期保有特別控除、累進税率のみを反映した参考推定値です。実際の譲渡所得税は複雑な要件によって大きく異なるため、正確な税額は税務士にご相談ください。",
    howTitle: "使用方法",
    howSteps: [
      "譲渡価額、取得価額、必要経費を入力します。",
      "保有期間（年）と一世帯一住宅かどうかを選択します。一世帯一住宅の場合は居住期間（年）も入力します。",
      "「計算する」を押して長期保有特別控除を反映した予想譲渡所得税を確認しましょう。",
    ],
    faq: [
      { q: "長期保有特別控除はどのように適用されますか？", a: "3年以上の保有から適用されます。一般の不動産は保有年数×2%（最大30%）、一世帯一住宅は保有期間控除（年4%、最大40%）と居住期間控除（2年以上から年4%、最大40%）を合算して最大80%です。居住期間が2年未満の場合は一般不動産の基準（最大30%）を適用します。年数は1年単位で切り捨てて計算します。" },
      { q: "2年未満保有だと税率が違いますか？", a: "はい、韓国では短期保有に高い単一税率（1年未満70%など）が適用される場合があります。このツールは2年以上保有を前提とした一般累進税率のみを扱います。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Estimador Simple de Impuesto sobre Ganancias de Capital",
    subtitle: "Introduce el precio de venta, adquisición y período de tenencia para estimar el impuesto.",
    salePriceLabel: "Precio de Venta",
    acquisitionPriceLabel: "Precio de Adquisición",
    expensesLabel: "Gastos Necesarios (comisiones, impuestos, etc.)",
    holdingYearsLabel: "Período de Tenencia (Años)",
    residenceYearsLabel: "Período de Residencia (Años, solo hogar único)",
    oneHouseLabel: "Único Hogar (Una Vivienda)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    gainLabel: "Ganancia de Capital",
    longTermDeductionLabel: "Deducción por Tenencia a Largo Plazo",
    taxableLabel: "Monto Imponible",
    taxLabel: "Impuesto Estimado",
    exemptNotice: "⚠️ Si es un único hogar con 2+ años de tenencia, los precios de venta bajo 1.200 millones de KRW pueden estar exentos.",
    disclaimer: "Esta es una estimación simplificada. El impuesto real varía significativamente según condiciones complejas — consulta a un profesional fiscal.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el precio de venta, adquisición y gastos necesarios.",
      "Selecciona el período de tenencia y el estado de único hogar. Si es hogar único, introduce también el período de residencia.",
      "Haz clic en 'Calcular' para ver el impuesto estimado.",
    ],
    faq: [
      { q: "¿Cómo se aplica la deducción por tenencia a largo plazo?", a: "Se aplica desde 3+ años de tenencia. Inmuebles generales: 2% por año de tenencia (hasta 30%). Hogar único: deducción por tenencia (4% por año, hasta 40%) más deducción por residencia (4% por año desde 2 años, hasta 40%), hasta 80% en total. Con menos de 2 años de residencia se aplica la tasa general (hasta 30%). Los años se redondean hacia abajo." },
      { q: "¿La tasa es diferente para menos de 2 años?", a: "Sí, Corea aplica tasas fijas más altas para tenencias cortas. Esta calculadora solo cubre tasas progresivas generales para 2+ años." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
