export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  amount: string;
  rate: string;
  modePretax: string;
  modePosttax: string;
  calculate: string;
  result: string;
  preTax: string;
  taxAmount: string;
  postTax: string;
  whyVat: string;
  vatExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "부가세 계산기",
    subtitle: "세전/세포함 금액을 서로 변환합니다",
    inputs: "정보 입력",
    amount: "금액",
    rate: "세율 (%)",
    modePretax: "세전 금액 입력 → 세포함 금액 계산",
    modePosttax: "세포함 금액 입력 → 세전 금액 계산",
    calculate: "계산하기",
    result: "계산 결과",
    preTax: "세전 금액",
    taxAmount: "부가세액",
    postTax: "세포함 금액",
    whyVat: "부가세 계산은 어떻게 하나요?",
    vatExplanation: "세전 금액에서 세포함 금액으로 변환할 때는 세액 = 세전 × 세율, 세포함 금액 = 세전 + 세액으로 계산합니다.\n\n반대로 세포함 금액에서 세전 금액을 구할 때는 세전 = 세포함 / (1 + 세율)로 계산합니다. 기본 세율은 10%로 설정되어 있으나(한국 부가세 기준), 국가별로 다를 수 있으니 직접 입력해 조정하세요.",
    disclaimer: "본 계산 결과는 참고용입니다. 실제 세율은 국가 및 품목에 따라 다를 수 있으니 정확한 세무 처리는 전문가와 상담하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "부가세 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "기본 세율이 10%인 이유는 무엇인가요?", a: "한국의 부가가치세 기준 세율이 10%이기 때문에 기본값으로 설정했습니다. 다른 국가나 품목은 세율을 직접 수정해 사용하세요." },
      { q: "세포함 금액에서 세전 금액을 어떻게 구하나요?", a: "세포함 금액을 (1+세율)로 나누면 세전 금액이 됩니다. 단순히 세율만큼 빼는 것과는 다릅니다." },
      { q: "이 계산기는 모든 국가의 부가세에 적용되나요?", a: "세율을 직접 입력할 수 있어 세율 체계가 동일한(단일 비율) 어떤 국가에도 참고용으로 적용할 수 있습니다." },
    ],
  },
  en: {
    title: "VAT Calculator",
    subtitle: "Convert between pre-tax and tax-included amounts",
    inputs: "Enter Information",
    amount: "Amount",
    rate: "Tax Rate (%)",
    modePretax: "Enter pre-tax amount → calculate tax-included amount",
    modePosttax: "Enter tax-included amount → calculate pre-tax amount",
    calculate: "Calculate",
    result: "Result",
    preTax: "Pre-Tax Amount",
    taxAmount: "Tax Amount",
    postTax: "Tax-Included Amount",
    whyVat: "How is VAT calculated?",
    vatExplanation: "To go from pre-tax to tax-included: Tax = Pre-tax × Rate, Tax-included = Pre-tax + Tax.\n\nTo go the other way, from tax-included to pre-tax: Pre-tax = Tax-included / (1 + Rate). The default rate is set to 10% (Korea's VAT rate), but it varies by country, so adjust it as needed.",
    disclaimer: "This result is for reference only. Actual tax rates vary by country and item — consult a professional for accurate tax matters.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "VAT calculation is processed in your browser.",
    faq: [
      { q: "Why is the default rate 10%?", a: "It's set as the default because Korea's standard VAT rate is 10%. Adjust the rate directly for other countries or items." },
      { q: "How do I get the pre-tax amount from a tax-included amount?", a: "Divide the tax-included amount by (1 + rate). This is different from simply subtracting the tax rate." },
      { q: "Does this work for any country's VAT?", a: "Since you can enter the rate directly, it can be used as a reference for any country with a single flat tax rate system." },
    ],
  },
  ja: {
    title: "付加価値税計算機",
    subtitle: "税抜・税込金額を相互に変換します",
    inputs: "情報入力",
    amount: "金額",
    rate: "税率（%）",
    modePretax: "税抜金額を入力 → 税込金額を計算",
    modePosttax: "税込金額を入力 → 税抜金額を計算",
    calculate: "計算する",
    result: "計算結果",
    preTax: "税抜金額",
    taxAmount: "税額",
    postTax: "税込金額",
    whyVat: "付加価値税の計算方法は？",
    vatExplanation: "税抜から税込に変換する場合：税額 = 税抜 × 税率、税込金額 = 税抜 + 税額。\n\n逆に税込から税抜を求める場合：税抜 = 税込 ÷ (1 + 税率)。デフォルトの税率は10%（韓国の付加価値税率）に設定されていますが、国によって異なるため必要に応じて調整してください。",
    disclaimer: "この計算結果は参考用です。実際の税率は国や品目によって異なるため、正確な税務処理は専門家にご相談ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "付加価値税の計算はブラウザで処理されます。",
    faq: [
      { q: "デフォルトの税率が10%なのはなぜですか？", a: "韓国の付加価値税の標準税率が10%であるためデフォルト値に設定しています。他の国や品目は税率を直接修正して使用してください。" },
      { q: "税込金額から税抜金額をどう求めますか？", a: "税込金額を(1+税率)で割ると税抜金額になります。単純に税率分を引くのとは異なります。" },
      { q: "このツールはどの国の付加価値税にも適用できますか？", a: "税率を直接入力できるため、単一税率制度であればどの国にも参考として使用できます。" },
    ],
  },
  es: {
    title: "Calculadora de IVA",
    subtitle: "Convierte entre montos antes de impuestos y con impuestos incluidos",
    inputs: "Ingresa la información",
    amount: "Monto",
    rate: "Tasa de impuesto (%)",
    modePretax: "Ingresa el monto antes de impuestos → calcula el monto con impuesto",
    modePosttax: "Ingresa el monto con impuesto → calcula el monto antes de impuestos",
    calculate: "Calcular",
    result: "Resultado",
    preTax: "Monto antes de impuestos",
    taxAmount: "Monto del impuesto",
    postTax: "Monto con impuesto incluido",
    whyVat: "¿Cómo se calcula el IVA?",
    vatExplanation: "Para ir de antes de impuestos a con impuesto incluido: Impuesto = Monto antes de impuestos × Tasa, Monto con impuesto = Monto antes de impuestos + Impuesto.\n\nPara ir al revés, de con impuesto a antes de impuestos: Monto antes de impuestos = Monto con impuesto / (1 + Tasa). La tasa predeterminada es 10% (tasa de IVA de Corea), pero varía según el país, así que ajústala según sea necesario.",
    disclaimer: "Este resultado es solo de referencia. Las tasas de impuestos reales varían según el país y el artículo — consulta a un profesional para asuntos fiscales precisos.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo del IVA se procesa en tu navegador.",
    faq: [
      { q: "¿Por qué la tasa predeterminada es 10%?", a: "Se establece como predeterminada porque la tasa estándar de IVA de Corea es 10%. Ajusta la tasa directamente para otros países o artículos." },
      { q: "¿Cómo obtengo el monto antes de impuestos desde un monto con impuesto?", a: "Divide el monto con impuesto por (1 + tasa). Esto es diferente de simplemente restar la tasa de impuesto." },
      { q: "¿Funciona para el IVA de cualquier país?", a: "Como puedes ingresar la tasa directamente, se puede usar como referencia para cualquier país con un sistema de tasa única." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
