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
  percent: string;
  people: string;
  calculate: string;
  result: string;
  tipAmount: string;
  totalAmount: string;
  perPerson: string;
  whyTip: string;
  tipExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "팁 계산기",
    subtitle: "금액과 팁 비율로 팁액·총액·더치페이 금액을 계산합니다",
    inputs: "정보 입력",
    amount: "결제 금액",
    percent: "팁 비율 (%)",
    people: "인원수 (더치페이)",
    calculate: "계산하기",
    result: "계산 결과",
    tipAmount: "팁 금액",
    totalAmount: "총 결제 금액",
    perPerson: "1인당 금액",
    whyTip: "팁 계산기는 어떻게 쓰나요?",
    tipExplanation: "결제 금액과 팁 비율(%)을 입력하면 팁 금액과 총 결제 금액을 바로 계산합니다. 프리셋 버튼(10/15/18/20%)으로 빠르게 선택하거나 직접 비율을 입력할 수 있습니다.\n\n인원수를 입력하면 더치페이 시 1인당 부담할 금액도 함께 계산됩니다.",
    disclaimer: "본 계산 결과는 참고용입니다. 실제 결제 시 세금, 서비스 요금 등은 별도로 확인하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "팁 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "팁 비율은 보통 얼마가 적당한가요?", a: "국가와 상황에 따라 다르지만, 일반적으로 10~20% 사이가 많이 쓰입니다. 프리셋 버튼으로 빠르게 선택해보세요." },
      { q: "더치페이 계산도 되나요?", a: "네, 인원수를 입력하면 총 결제 금액을 인원수로 나눈 1인당 금액을 함께 보여줍니다." },
      { q: "세금이 포함된 금액인가요?", a: "본 계산기는 입력한 결제 금액을 기준으로 팁만 계산합니다. 세금이 별도라면 세금 포함 금액을 입력해 주세요." },
    ],
  },
  en: {
    title: "Tip Calculator",
    subtitle: "Calculate tip amount, total, and split-bill amount from your bill and tip rate",
    inputs: "Enter Information",
    amount: "Bill Amount",
    percent: "Tip Rate (%)",
    people: "Number of People (split bill)",
    calculate: "Calculate",
    result: "Result",
    tipAmount: "Tip Amount",
    totalAmount: "Total Amount",
    perPerson: "Amount Per Person",
    whyTip: "How do I use the tip calculator?",
    tipExplanation: "Enter your bill amount and tip rate (%) to instantly calculate the tip amount and total. Use the preset buttons (10/15/18/20%) for quick selection, or enter a custom rate.\n\nEnter the number of people to also calculate the amount each person owes when splitting the bill.",
    disclaimer: "This result is for reference only. Please check taxes and service charges separately when paying.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Tip calculation is processed in your browser.",
    faq: [
      { q: "What is a typical tip rate?", a: "It varies by country and situation, but 10-20% is commonly used. Try the preset buttons for quick selection." },
      { q: "Can it calculate a split bill?", a: "Yes, enter the number of people and it will show the total divided evenly per person." },
      { q: "Does the amount include tax?", a: "This calculator only computes the tip based on the bill amount you enter. If tax is separate, enter the tax-included amount." },
    ],
  },
  ja: {
    title: "チップ計算機",
    subtitle: "金額とチップ率からチップ額・合計額・割り勘額を計算します",
    inputs: "情報入力",
    amount: "お支払い金額",
    percent: "チップ率（%）",
    people: "人数（割り勘）",
    calculate: "計算する",
    result: "計算結果",
    tipAmount: "チップ金額",
    totalAmount: "合計金額",
    perPerson: "1人当たりの金額",
    whyTip: "チップ計算機の使い方は？",
    tipExplanation: "お支払い金額とチップ率（%）を入力すると、チップ金額と合計金額をすぐに計算します。プリセットボタン（10/15/18/20%）で素早く選択するか、直接率を入力できます。\n\n人数を入力すると、割り勘の際に1人が負担する金額も一緒に計算されます。",
    disclaimer: "この計算結果は参考用です。実際の支払い時は税金やサービス料などを別途ご確認ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "チップの計算はブラウザで処理されます。",
    faq: [
      { q: "チップ率は通常どのくらいが適当ですか？", a: "国や状況によって異なりますが、一般的に10～20%がよく使われます。プリセットボタンで素早く選んでみてください。" },
      { q: "割り勘の計算もできますか？", a: "はい、人数を入力すると合計金額を人数で割った1人当たりの金額も表示されます。" },
      { q: "税金は含まれた金額ですか？", a: "このツールは入力されたお支払い金額を基準にチップのみ計算します。税金が別の場合は税込み金額を入力してください。" },
    ],
  },
  es: {
    title: "Calculadora de Propinas",
    subtitle: "Calcula la propina, el total y el monto dividido a partir de tu cuenta y la tasa de propina",
    inputs: "Ingresa la información",
    amount: "Monto de la cuenta",
    percent: "Tasa de propina (%)",
    people: "Número de personas (dividir cuenta)",
    calculate: "Calcular",
    result: "Resultado",
    tipAmount: "Monto de propina",
    totalAmount: "Monto total",
    perPerson: "Monto por persona",
    whyTip: "¿Cómo uso la calculadora de propinas?",
    tipExplanation: "Ingresa el monto de tu cuenta y la tasa de propina (%) para calcular instantáneamente la propina y el total. Usa los botones predefinidos (10/15/18/20%) para una selección rápida, o ingresa una tasa personalizada.\n\nIngresa el número de personas para calcular también cuánto debe pagar cada persona al dividir la cuenta.",
    disclaimer: "Este resultado es solo de referencia. Verifica impuestos y cargos por servicio por separado al pagar.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de propinas se procesa en tu navegador.",
    faq: [
      { q: "¿Cuál es una tasa de propina típica?", a: "Varía según el país y la situación, pero 10-20% es comúnmente usado. Prueba los botones predefinidos para una selección rápida." },
      { q: "¿Puede calcular una cuenta dividida?", a: "Sí, ingresa el número de personas y mostrará el total dividido equitativamente por persona." },
      { q: "¿El monto incluye impuestos?", a: "Esta calculadora solo calcula la propina basada en el monto que ingreses. Si el impuesto es aparte, ingresa el monto con impuesto incluido." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
