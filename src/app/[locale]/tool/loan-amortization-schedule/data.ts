export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  loanAmount: string;
  annualRate: string;
  months: string;
  repaymentType: string;
  typeEqualPayment: string;
  typeEqualPrincipal: string;
  calculate: string;
  result: string;
  totalPayment: string;
  totalInterest: string;
  scheduleTitle: string;
  colRound: string;
  colPayment: string;
  colPrincipal: string;
  colInterest: string;
  colBalance: string;
  whyAmortization: string;
  amortizationExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "대출 원리금 상환 스케줄표",
    subtitle: "대출금액, 이율, 상환기간, 상환방식으로 회차별 상환 스케줄을 계산합니다",
    inputs: "정보 입력",
    loanAmount: "대출 금액",
    annualRate: "연이율 (%)",
    months: "상환 기간 (개월)",
    repaymentType: "상환 방식",
    typeEqualPayment: "원리금균등상환 (매월 동일 납입액)",
    typeEqualPrincipal: "원금균등상환 (매월 동일 원금, 이자는 점차 감소)",
    calculate: "계산하기",
    result: "계산 결과",
    totalPayment: "총 상환액",
    totalInterest: "총 이자",
    scheduleTitle: "회차별 상환 스케줄",
    colRound: "회차",
    colPayment: "납입액",
    colPrincipal: "원금",
    colInterest: "이자",
    colBalance: "잔액",
    whyAmortization: "원리금균등상환과 원금균등상환은 어떻게 다른가요?",
    amortizationExplanation: "원리금균등상환은 매월 납입액(원금+이자)이 동일하도록 계산하는 방식입니다. 월상환액 = 대출금액×월이율×(1+월이율)^기간 ÷ ((1+월이율)^기간−1)으로 고정되며, 매회차 이자는 잔액×월이율, 원금은 월상환액−이자로 계산됩니다.\n\n원금균등상환은 매월 갚는 원금(대출금액÷기간)이 동일하고, 이자는 남은 잔액에 비례해 매월 줄어들어 전체 납입액이 점차 감소하는 방식입니다. 동일한 조건이라면 원금균등상환의 총 이자가 원리금균등상환보다 약간 적습니다.",
    disclaimer: "본 계산 결과는 참고용이며, 실제 대출 상환은 금융기관의 상환 방식, 중도상환 수수료, 금리 변동 등에 따라 달라질 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "상환 스케줄 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "두 방식 중 어느 것이 더 유리한가요?", a: "원금균등상환은 총 이자가 조금 더 적지만 초반 납입액이 더 큽니다. 원리금균등상환은 매월 동일한 금액을 내므로 자금 계획이 더 쉽습니다. 본인의 초기 상환 능력에 따라 선택하세요." },
      { q: "최대 몇 개월까지 계산할 수 있나요?", a: "최대 360개월(30년)까지 계산할 수 있으며, 전체 회차별 스케줄을 스크롤로 확인할 수 있습니다." },
      { q: "마지막 회차의 잔액이 정확히 0이 되나요?", a: "계산 과정의 소수점 처리로 인해 마지막 회차의 잔액이 미세한 오차(소수점 이하)를 가질 수 있으나, 화면에는 0으로 표시되도록 보정합니다." },
    ],
  },
  en: {
    title: "Loan Amortization Schedule",
    subtitle: "Calculate a month-by-month repayment schedule from loan amount, rate, term, and repayment type",
    inputs: "Enter Information",
    loanAmount: "Loan Amount",
    annualRate: "Annual Rate (%)",
    months: "Repayment Term (months)",
    repaymentType: "Repayment Type",
    typeEqualPayment: "Equal Payment (same monthly payment)",
    typeEqualPrincipal: "Equal Principal (same monthly principal, interest decreases)",
    calculate: "Calculate",
    result: "Result",
    totalPayment: "Total Payment",
    totalInterest: "Total Interest",
    scheduleTitle: "Monthly Repayment Schedule",
    colRound: "Month",
    colPayment: "Payment",
    colPrincipal: "Principal",
    colInterest: "Interest",
    colBalance: "Balance",
    whyAmortization: "What's the difference between equal payment and equal principal?",
    amortizationExplanation: "Equal payment (amortizing) repayment keeps the monthly payment (principal+interest) the same each month. The fixed monthly payment = Loan Amount × Monthly Rate × (1+Monthly Rate)^Months ÷ ((1+Monthly Rate)^Months−1), with interest = balance×monthly rate and principal = payment−interest each round.\n\nEqual principal repayment keeps the monthly principal (loan amount ÷ months) the same, while interest decreases each month as the remaining balance shrinks, so the total payment gradually decreases. Under the same conditions, equal principal results in slightly less total interest than equal payment.",
    disclaimer: "This result is for reference only — actual loan repayment depends on the lender's repayment method, prepayment fees, rate changes, and other factors.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Amortization schedule calculation is processed in your browser.",
    faq: [
      { q: "Which repayment type is better?", a: "Equal principal has slightly less total interest but a larger initial payment. Equal payment keeps the same amount every month, making budgeting easier. Choose based on your early repayment capacity." },
      { q: "What's the maximum number of months supported?", a: "Up to 360 months (30 years) can be calculated, and the full month-by-month schedule can be viewed by scrolling." },
      { q: "Does the final month's balance come out to exactly 0?", a: "Due to decimal rounding during calculation, the final balance may have a tiny residual, but it is corrected to display as 0 on screen." },
    ],
  },
  ja: {
    title: "ローン元利返済スケジュール表",
    subtitle: "ローン金額、利率、返済期間、返済方式から月々の返済スケジュールを計算します",
    inputs: "情報入力",
    loanAmount: "ローン金額",
    annualRate: "年利率（%）",
    months: "返済期間（月）",
    repaymentType: "返済方式",
    typeEqualPayment: "元利均等返済（毎月同じ返済額）",
    typeEqualPrincipal: "元金均等返済（毎月同じ元金、利息は徐々に減少）",
    calculate: "計算する",
    result: "計算結果",
    totalPayment: "総返済額",
    totalInterest: "合計利息",
    scheduleTitle: "月々の返済スケジュール",
    colRound: "回",
    colPayment: "返済額",
    colPrincipal: "元金",
    colInterest: "利息",
    colBalance: "残高",
    whyAmortization: "元利均等返済と元金均等返済はどう違いますか？",
    amortizationExplanation: "元利均等返済は毎月の返済額（元金＋利息）が同じになるように計算する方式です。月返済額＝ローン金額×月利率×(1+月利率)^期間÷((1+月利率)^期間−1)で固定され、各回の利息＝残高×月利率、元金＝月返済額−利息で計算されます。\n\n元金均等返済は毎月返済する元金（ローン金額÷期間）が同じで、利息は残高が減るにつれて毎月減少するため、総返済額が徐々に減少する方式です。同じ条件なら元金均等返済の総利息は元利均等返済よりやや少なくなります。",
    disclaimer: "この計算結果は参考用であり、実際のローン返済は金融機関の返済方式、早期返済手数料、金利変動などにより異なる場合があります。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "返済スケジュールの計算はブラウザで処理されます。",
    faq: [
      { q: "どちらの方式がより有利ですか？", a: "元金均等返済は総利息がやや少ないですが、初期の返済額が大きくなります。元利均等返済は毎月同じ金額を支払うため資金計画が立てやすいです。初期の返済能力に応じて選択してください。" },
      { q: "最大何ヶ月まで計算できますか？", a: "最大360ヶ月（30年）まで計算でき、全回次のスケジュールをスクロールで確認できます。" },
      { q: "最終回の残高はちょうど0になりますか？", a: "計算過程の小数点処理により最終回の残高にわずかな誤差（小数点以下）が生じることがありますが、画面には0と表示されるよう補正しています。" },
    ],
  },
  es: {
    title: "Tabla de Amortización de Préstamo",
    subtitle: "Calcula el calendario de pagos mensuales según el monto, la tasa, el plazo y el tipo de amortización",
    inputs: "Ingresa la información",
    loanAmount: "Monto del Préstamo",
    annualRate: "Tasa Anual (%)",
    months: "Plazo de Pago (meses)",
    repaymentType: "Tipo de Amortización",
    typeEqualPayment: "Cuota Fija (mismo pago mensual)",
    typeEqualPrincipal: "Capital Fijo (mismo capital mensual, el interés disminuye)",
    calculate: "Calcular",
    result: "Resultado",
    totalPayment: "Pago Total",
    totalInterest: "Interés Total",
    scheduleTitle: "Calendario de Pagos Mensuales",
    colRound: "Mes",
    colPayment: "Pago",
    colPrincipal: "Capital",
    colInterest: "Interés",
    colBalance: "Saldo",
    whyAmortization: "¿Cuál es la diferencia entre cuota fija y capital fijo?",
    amortizationExplanation: "La amortización de cuota fija mantiene el mismo pago mensual (capital+interés) cada mes. El pago fijo = Monto del Préstamo × Tasa Mensual × (1+Tasa Mensual)^Meses ÷ ((1+Tasa Mensual)^Meses−1), con interés = saldo×tasa mensual y capital = pago−interés en cada ronda.\n\nLa amortización de capital fijo mantiene el mismo capital mensual (monto del préstamo ÷ meses), mientras que el interés disminuye cada mes a medida que el saldo restante se reduce, por lo que el pago total disminuye gradualmente. Bajo las mismas condiciones, el capital fijo resulta en un interés total ligeramente menor que la cuota fija.",
    disclaimer: "Este resultado es solo de referencia — el reembolso real del préstamo depende del método del prestamista, las comisiones por pago anticipado, los cambios de tasa y otros factores.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo del calendario de amortización se procesa en tu navegador.",
    faq: [
      { q: "¿Qué tipo de amortización es mejor?", a: "El capital fijo tiene un interés total ligeramente menor pero un pago inicial mayor. La cuota fija mantiene el mismo monto cada mes, facilitando la planificación. Elige según tu capacidad de pago inicial." },
      { q: "¿Cuál es el número máximo de meses soportado?", a: "Se pueden calcular hasta 360 meses (30 años), y el calendario completo mes por mes se puede ver desplazándose." },
      { q: "¿El saldo del último mes queda exactamente en 0?", a: "Debido al redondeo decimal durante el cálculo, el saldo final puede tener un residuo mínimo, pero se corrige para mostrarse como 0 en pantalla." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
