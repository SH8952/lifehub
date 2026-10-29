export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  principal: string;
  annualRate: string;
  frequency: string;
  freqYearly: string;
  freqMonthly: string;
  freqDaily: string;
  years: string;
  calculate: string;
  result: string;
  finalAmount: string;
  totalInterest: string;
  whyCompound: string;
  compoundExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "복리 계산기",
    subtitle: "원금, 이율, 복리 빈도, 기간으로 최종 금액과 이자를 계산합니다",
    inputs: "정보 입력",
    principal: "원금",
    annualRate: "연이율 (%)",
    frequency: "복리 빈도",
    freqYearly: "연 1회",
    freqMonthly: "월 1회",
    freqDaily: "일 1회",
    years: "투자 기간 (년)",
    calculate: "계산하기",
    result: "계산 결과",
    finalAmount: "최종 금액",
    totalInterest: "총 이자",
    whyCompound: "복리는 어떻게 계산하나요?",
    compoundExplanation: "복리 계산 공식은 최종금액 = 원금 × (1 + 연이율/100/n)^(n×투자기간) 입니다. 여기서 n은 복리 빈도로, 연 1회는 1, 월 1회는 12, 일 1회는 365를 사용합니다.\n\n복리 빈도가 높을수록(연 1회 < 월 1회 < 일 1회) 동일한 연이율에서도 최종 금액이 더 커집니다. 총 이자는 최종금액에서 원금을 뺀 값입니다.",
    disclaimer: "본 계산 결과는 참고용이며, 실제 금융상품의 이자 계산 방식(세금, 수수료, 복리 적용 방식 등)은 다를 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "복리 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "복리와 단리는 어떻게 다른가요?", a: "단리는 원금에만 이자가 붙지만, 복리는 이전에 쌓인 이자에도 다시 이자가 붙어 시간이 지날수록 증가 속도가 빨라집니다." },
      { q: "복리 빈도가 다르면 결과가 많이 달라지나요?", a: "연이율이 같다면 복리 빈도가 높을수록(일 1회가 가장 높음) 최종 금액이 조금 더 커지지만, 그 차이는 일반적으로 크지 않습니다." },
      { q: "실제 예금·적금도 이 공식과 같나요?", a: "기본 원리는 같지만, 실제 금융상품은 세금(이자소득세), 수수료, 중도해지 조건 등이 추가로 적용되므로 정확한 금액은 금융기관에 확인하세요." },
    ],
  },
  en: {
    title: "Compound Interest Calculator",
    subtitle: "Calculate the final amount and interest from principal, rate, frequency, and term",
    inputs: "Enter Information",
    principal: "Principal",
    annualRate: "Annual Rate (%)",
    frequency: "Compounding Frequency",
    freqYearly: "Yearly",
    freqMonthly: "Monthly",
    freqDaily: "Daily",
    years: "Investment Term (years)",
    calculate: "Calculate",
    result: "Result",
    finalAmount: "Final Amount",
    totalInterest: "Total Interest",
    whyCompound: "How is compound interest calculated?",
    compoundExplanation: "The compound interest formula is: Final Amount = Principal × (1 + Annual Rate/100/n)^(n×Years). Here, n is the compounding frequency: 1 for yearly, 12 for monthly, and 365 for daily.\n\nThe higher the compounding frequency (yearly < monthly < daily), the larger the final amount at the same annual rate. Total interest is the final amount minus the principal.",
    disclaimer: "This result is for reference only — actual financial products may calculate interest differently (taxes, fees, compounding method, etc.).",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Compound interest calculation is processed in your browser.",
    faq: [
      { q: "How is compound interest different from simple interest?", a: "Simple interest only accrues on the principal, while compound interest also accrues on previously earned interest, so growth accelerates over time." },
      { q: "Does the compounding frequency make a big difference?", a: "At the same annual rate, a higher compounding frequency (daily being highest) gives a slightly larger final amount, but the difference is usually small." },
      { q: "Do actual savings/deposit products work the same way?", a: "The basic principle is the same, but real financial products also apply taxes, fees, and early withdrawal conditions, so check with the financial institution for exact figures." },
    ],
  },
  ja: {
    title: "複利計算機",
    subtitle: "元金、利率、複利頻度、期間から最終金額と利息を計算します",
    inputs: "情報入力",
    principal: "元金",
    annualRate: "年利率（%）",
    frequency: "複利頻度",
    freqYearly: "年1回",
    freqMonthly: "月1回",
    freqDaily: "日1回",
    years: "投資期間（年）",
    calculate: "計算する",
    result: "計算結果",
    finalAmount: "最終金額",
    totalInterest: "合計利息",
    whyCompound: "複利はどのように計算しますか？",
    compoundExplanation: "複利計算の公式は、最終金額＝元金×(1+年利率/100/n)^(n×投資期間) です。ここでnは複利頻度で、年1回は1、月1回は12、日1回は365を使用します。\n\n複利頻度が高いほど（年1回＜月1回＜日1回）、同じ年利率でも最終金額が大きくなります。合計利息は最終金額から元金を引いた値です。",
    disclaimer: "この計算結果は参考用であり、実際の金融商品の利息計算方式（税金、手数料、複利適用方式など）は異なる場合があります。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "複利計算はブラウザで処理されます。",
    faq: [
      { q: "複利と単利はどう違いますか？", a: "単利は元金にのみ利息が付きますが、複利は以前に積み立てられた利息にも再び利息が付くため、時間が経つほど増加速度が速くなります。" },
      { q: "複利頻度が違うと結果は大きく変わりますか？", a: "年利率が同じなら複利頻度が高いほど（日1回が最高）最終金額がやや大きくなりますが、その差は一般的に大きくありません。" },
      { q: "実際の預金・積金もこの公式と同じですか？", a: "基本原理は同じですが、実際の金融商品は税金（利子所得税）、手数料、中途解約条件などが追加で適用されるため、正確な金額は金融機関に確認してください。" },
    ],
  },
  es: {
    title: "Calculadora de Interés Compuesto",
    subtitle: "Calcula el monto final y los intereses a partir del capital, la tasa, la frecuencia y el plazo",
    inputs: "Ingresa la información",
    principal: "Capital",
    annualRate: "Tasa Anual (%)",
    frequency: "Frecuencia de Capitalización",
    freqYearly: "Anual",
    freqMonthly: "Mensual",
    freqDaily: "Diaria",
    years: "Plazo de Inversión (años)",
    calculate: "Calcular",
    result: "Resultado",
    finalAmount: "Monto Final",
    totalInterest: "Interés Total",
    whyCompound: "¿Cómo se calcula el interés compuesto?",
    compoundExplanation: "La fórmula del interés compuesto es: Monto Final = Capital × (1 + Tasa Anual/100/n)^(n×Años). Aquí, n es la frecuencia de capitalización: 1 para anual, 12 para mensual y 365 para diaria.\n\nCuanto mayor sea la frecuencia de capitalización (anual < mensual < diaria), mayor será el monto final con la misma tasa anual. El interés total es el monto final menos el capital.",
    disclaimer: "Este resultado es solo de referencia — los productos financieros reales pueden calcular los intereses de forma diferente (impuestos, comisiones, método de capitalización, etc.).",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo del interés compuesto se procesa en tu navegador.",
    faq: [
      { q: "¿En qué se diferencia el interés compuesto del interés simple?", a: "El interés simple solo se acumula sobre el capital, mientras que el interés compuesto también se acumula sobre los intereses ya ganados, por lo que el crecimiento se acelera con el tiempo." },
      { q: "¿La frecuencia de capitalización hace una gran diferencia?", a: "Con la misma tasa anual, una mayor frecuencia de capitalización (diaria siendo la más alta) da un monto final ligeramente mayor, pero la diferencia suele ser pequeña." },
      { q: "¿Los productos de ahorro reales funcionan igual?", a: "El principio básico es el mismo, pero los productos financieros reales también aplican impuestos, comisiones y condiciones de retiro anticipado, así que consulta con la institución financiera para cifras exactas." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
