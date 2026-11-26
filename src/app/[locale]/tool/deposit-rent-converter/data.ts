export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  modeRentToDeposit: string;
  modeDepositToRent: string;
  currentDeposit: string;
  currentRent: string;
  rate: string;
  calculate: string;
  result: string;
  newDeposit: string;
  newRent: string;
  whyConvert: string;
  convertExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "보증금·월세 상호 환산기",
    subtitle: "전월세 전환율을 이용해 보증금과 월세를 서로 환산합니다",
    inputs: "정보 입력",
    modeRentToDeposit: "월세 전액 → 보증금으로 전환",
    modeDepositToRent: "보증금 전액 → 월세로 전환",
    currentDeposit: "현재 보증금",
    currentRent: "현재 월세",
    rate: "전환율 (연 %)",
    calculate: "계산하기",
    result: "환산 결과",
    newDeposit: "전환 후 보증금",
    newRent: "전환 후 월세",
    whyConvert: "보증금·월세 환산은 어떻게 계산하나요?",
    convertExplanation: "월세를 보증금으로 전환할 때는 추가보증금 = 월세×12 ÷ 전환율 × 100 으로 계산하여 기존 보증금에 더하고, 월세는 0원이 됩니다.\n\n보증금을 월세로 전환할 때는 월세증가분 = 보증금 × 전환율 ÷ 100 ÷ 12 로 계산하여 기존 월세에 더하고, 보증금은 0원이 됩니다.\n\n전환율은 법으로 정해진 상한(한국은행 기준금리에 연 2%p를 더한 비율과 대통령령으로 정한 비율 중 낮은 쪽)을 넘길 수 없고, 이 상한은 기준금리가 바뀔 때마다 달라집니다. 기본값 5%는 시작용 예시이므로 계약 시점의 기준금리를 확인한 뒤 직접 입력해 조정하세요.",
    disclaimer: "본 계산은 보증금 또는 월세 전액을 한쪽으로 완전히 전환하는 단순화된 결과이며, 실제 계약에서는 일부 금액만 조정하는 경우가 많습니다. 정확한 전환율은 공인중개사 또는 관련 법령(주택임대차보호법 등)을 참고하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "보증금·월세 환산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "전환율 기본값 5%는 어디서 왔나요?", a: "주택임대차보호법상 전월세 전환율 상한이 한국은행 기준금리에 연 2%p를 더한 비율(대통령령으로 정한 비율과 비교해 낮은 쪽)이어서, 2026년 10월 기준금리 3.00%에 2%p를 더한 5.0%를 시작 값으로 두었습니다. 기준금리는 수시로 바뀌므로 계약 시점의 값을 확인해 직접 입력하세요. 실제 적용 전환율은 계약에 따라 다릅니다." },
      { q: "일부 금액만 전환하고 싶으면 어떻게 하나요?", a: "이 계산기는 월세 또는 보증금 전액을 전환하는 단순화된 버전입니다. 일부만 전환하려면 전환하고 싶은 금액을 '현재 보증금' 또는 '현재 월세' 자리에 직접 입력해 계산해 보세요." },
      { q: "전환율이 높을수록 유리한가요?", a: "전환율이 높을수록 월세를 보증금으로 바꿀 때 필요한 추가보증금이 적어지고, 반대로 보증금을 월세로 바꿀 때는 월세 증가분이 커집니다. 임차인 입장에서는 상황에 따라 유불리가 달라집니다." },
    ],
  },
  en: {
    title: "Deposit-Rent Converter",
    subtitle: "Convert between deposit and monthly rent using the conversion rate",
    inputs: "Enter Information",
    modeRentToDeposit: "Convert full monthly rent → deposit",
    modeDepositToRent: "Convert full deposit → monthly rent",
    currentDeposit: "Current Deposit",
    currentRent: "Current Monthly Rent",
    rate: "Conversion Rate (annual %)",
    calculate: "Calculate",
    result: "Result",
    newDeposit: "Deposit After Conversion",
    newRent: "Monthly Rent After Conversion",
    whyConvert: "How is the deposit-rent conversion calculated?",
    convertExplanation: "When converting rent to deposit: additional deposit = monthly rent × 12 ÷ rate × 100, added to the current deposit; rent becomes 0.\n\nWhen converting deposit to rent: rent increase = deposit × rate ÷ 100 ÷ 12, added to the current rent; deposit becomes 0.\n\nBy law the conversion rate cannot exceed a cap (the lower of the Bank of Korea base rate plus 2 percentage points and the ratio set by presidential decree), and this cap changes whenever the base rate changes. The default of 5% is only a starting example, so check the base rate at the time of your contract and enter your own rate.",
    disclaimer: "This is a simplified calculation that fully converts one side (deposit or rent). In real contracts, only a partial amount is often adjusted. Consult a licensed real estate agent or relevant law for the exact applicable rate.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Deposit-rent conversion is processed in your browser.",
    faq: [
      { q: "Where does the default 5% rate come from?", a: "Korea's Housing Lease Protection Act caps the conversion rate at the lower of the Bank of Korea base rate plus 2 percentage points and the ratio set by presidential decree. The default of 5.0% is the October 2026 base rate of 3.00% plus 2 percentage points, used as a starting value. The base rate changes over time, so check the rate at your contract date and enter it yourself. Actual rates vary by contract." },
      { q: "What if I only want to convert part of the amount?", a: "This calculator is a simplified version that converts the full rent or deposit. To convert only part, enter the specific amount you want to convert in the 'Current Deposit' or 'Current Rent' field instead." },
      { q: "Is a higher conversion rate better?", a: "A higher rate means less additional deposit is needed when converting rent to deposit, but a larger rent increase when converting deposit to rent. Whether it's favorable depends on the tenant's situation." },
    ],
  },
  ja: {
    title: "保証金・家賃相互換算機",
    subtitle: "転貸換算率を利用して保証金と家賃を相互に換算します",
    inputs: "情報入力",
    modeRentToDeposit: "家賃全額 → 保証金に転換",
    modeDepositToRent: "保証金全額 → 家賃に転換",
    currentDeposit: "現在の保証金",
    currentRent: "現在の家賃",
    rate: "転換率（年%）",
    calculate: "計算する",
    result: "換算結果",
    newDeposit: "転換後の保証金",
    newRent: "転換後の家賃",
    whyConvert: "保証金・家賃の換算はどのように計算しますか？",
    convertExplanation: "家賃を保証金に転換する場合：追加保証金＝家賃×12÷転換率×100 で計算し、既存の保証金に加算、家賃は0になります。\n\n保証金を家賃に転換する場合：家賃増加分＝保証金×転換率÷100÷12 で計算し、既存の家賃に加算、保証金は0になります。\n\n転換率は法律で定められた上限（韓国銀行基準金利に年2%ptを加えた率と、大統領令で定める率のうち低い方）を超えることはできず、この上限は基準金利が変わるたびに変わります。デフォルトの5%は開始用の例ですので、契約時点の基準金利を確認して直接入力してください。",
    disclaimer: "この計算は保証金または家賃の全額を一方に完全に転換する単純化された結果です。実際の契約では一部金額のみ調整する場合が多いです。正確な転換率は不動産業者または関連法令を参照してください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "保証金・家賃の換算はブラウザで処理されます。",
    faq: [
      { q: "デフォルトの転換率5%はどこから来ていますか？", a: "住宅賃貸借保護法上の転換率の上限は、韓国銀行基準金利に年2%ptを加えた率（大統領令で定める率と比べて低い方）です。2026年10月の基準金利3.00%に2%ptを加えた5.0%を開始値としています。基準金利は随時変わるため、契約時点の値を確認して直接入力してください。実際の転換率は契約により異なります。" },
      { q: "一部の金額だけ転換したい場合はどうすればいいですか？", a: "このツールは家賃または保証金全額を転換する単純化バージョンです。一部だけ転換したい場合は、転換したい金額を「現在の保証金」または「現在の家賃」の欄に直接入力して計算してください。" },
      { q: "転換率が高いほど有利ですか？", a: "転換率が高いほど家賃を保証金に変える際に必要な追加保証金が少なくなり、逆に保証金を家賃に変える際は家賃の増加分が大きくなります。賃借人にとって有利不利は状況によって異なります。" },
    ],
  },
  es: {
    title: "Convertidor de Depósito-Renta",
    subtitle: "Convierte entre depósito y renta mensual usando la tasa de conversión",
    inputs: "Ingresa la información",
    modeRentToDeposit: "Convertir renta mensual completa → depósito",
    modeDepositToRent: "Convertir depósito completo → renta mensual",
    currentDeposit: "Depósito Actual",
    currentRent: "Renta Mensual Actual",
    rate: "Tasa de Conversión (% anual)",
    calculate: "Calcular",
    result: "Resultado",
    newDeposit: "Depósito Después de la Conversión",
    newRent: "Renta Mensual Después de la Conversión",
    whyConvert: "¿Cómo se calcula la conversión depósito-renta?",
    convertExplanation: "Al convertir renta a depósito: depósito adicional = renta mensual × 12 ÷ tasa × 100, se suma al depósito actual; la renta pasa a ser 0.\n\nAl convertir depósito a renta: aumento de renta = depósito × tasa ÷ 100 ÷ 12, se suma a la renta actual; el depósito pasa a ser 0.\n\nPor ley la tasa de conversión no puede superar un límite (la menor entre la tasa base del Banco de Corea más 2 puntos porcentuales y la tasa fijada por decreto presidencial), y ese límite cambia cada vez que cambia la tasa base. El valor predeterminado de 5% es solo un ejemplo inicial: consulta la tasa base en la fecha de tu contrato e introduce tu propia tasa.",
    disclaimer: "Este es un cálculo simplificado que convierte completamente un lado (depósito o renta). En contratos reales, a menudo solo se ajusta una parte. Consulta a un agente inmobiliario autorizado o la ley correspondiente para la tasa exacta aplicable.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "La conversión depósito-renta se procesa en tu navegador.",
    faq: [
      { q: "¿De dónde viene la tasa predeterminada de 5%?", a: "La Ley de Protección de Arrendamiento de Vivienda de Corea limita la tasa de conversión a la menor entre la tasa base del Banco de Corea más 2 puntos porcentuales y la tasa fijada por decreto. El 5.0% predeterminado es la tasa base de octubre de 2026 (3.00%) más 2 puntos, usado como valor inicial. La tasa base cambia con el tiempo, así que consulta el valor en la fecha de tu contrato e introdúcelo tú mismo. Las tasas reales varían según el contrato." },
      { q: "¿Qué pasa si solo quiero convertir parte del monto?", a: "Esta calculadora es una versión simplificada que convierte la renta o el depósito completo. Para convertir solo una parte, ingresa el monto específico que deseas convertir en el campo 'Depósito Actual' o 'Renta Actual'." },
      { q: "¿Es mejor una tasa de conversión más alta?", a: "Una tasa más alta significa que se necesita menos depósito adicional al convertir renta a depósito, pero un mayor aumento de renta al convertir depósito a renta. Si es favorable depende de la situación del inquilino." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
