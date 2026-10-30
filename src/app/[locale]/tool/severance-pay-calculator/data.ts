export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  wage3moLabel: string;
  daysIn3moLabel: string;
  annualBonusLabel: string;
  serviceDaysLabel: string;
  calculateBtn: string;
  resultLabel: string;
  avgDailyWageLabel: string;
  severanceLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "퇴직금 계산기",
    subtitle: "최근 3개월 임금 총액과 재직 기간을 입력해 예상 퇴직금을 계산합니다.",
    wage3moLabel: "최근 3개월 임금 총액",
    daysIn3moLabel: "해당 3개월 총 일수",
    annualBonusLabel: "연간 상여금 (해당 시)",
    serviceDaysLabel: "총 재직일수",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    avgDailyWageLabel: "1일 평균임금",
    severanceLabel: "예상 퇴직금",
    disclaimer: "본 계산 결과는 근로기준법상 평균임금 산정 방식을 단순화한 참고용 추정치입니다. 실제 퇴직금은 상여금·연차수당 가산 방식, 회사 규정 등에 따라 달라질 수 있으니 정확한 금액은 회사 인사팀이나 고용노동부에 확인하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "최근 3개월간 받은 임금 총액과 해당 기간의 총 일수를 입력합니다.",
      "연간 상여금(있는 경우)과 총 재직일수를 입력합니다.",
      "'계산하기'를 눌러 1일 평균임금과 예상 퇴직금을 확인하세요.",
    ],
    faq: [
      { q: "퇴직금은 어떻게 계산되나요?", a: "퇴직금 = 1일 평균임금 × 30일 × (총 재직일수 ÷ 365)로 계산됩니다. 1일 평균임금은 최근 3개월간 받은 임금과 상여금·연차수당 가산액을 합쳐 해당 기간의 총 일수로 나눈 값입니다." },
      { q: "1년 미만 근무해도 퇴직금을 받을 수 있나요?", a: "한국의 근로기준법상 퇴직금은 1년 이상 계속 근로한 경우에만 지급 대상이 됩니다. 1년 미만 근무 시에는 일반적으로 퇴직금이 발생하지 않습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Severance Pay Calculator",
    subtitle: "Enter your total wages for the last 3 months and your tenure to estimate your severance pay.",
    wage3moLabel: "Total Wages (Last 3 Months)",
    daysIn3moLabel: "Days in That Period",
    annualBonusLabel: "Annual Bonus (if any)",
    serviceDaysLabel: "Total Days of Service",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    avgDailyWageLabel: "Average Daily Wage",
    severanceLabel: "Estimated Severance Pay",
    disclaimer: "This is a simplified reference estimate based on the average wage calculation method. Actual severance pay may vary based on bonus/leave allowance inclusion and company policy — confirm with your HR department.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your total wages for the last 3 months and the total days in that period.",
      "Enter your annual bonus (if any) and total days of service.",
      "Click 'Calculate' to see your average daily wage and estimated severance pay.",
    ],
    faq: [
      { q: "How is severance pay calculated?", a: "Severance pay = average daily wage × 30 days × (total days of service ÷ 365). The average daily wage is your total wages over the last 3 months (plus bonus/leave allowance) divided by the total days in that period." },
      { q: "Can I receive severance pay with less than 1 year of service?", a: "Under Korean labor law, severance pay generally applies only to employees with 1 year or more of continuous service." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "退職金計算機",
    subtitle: "直近3か月の賃金総額と在職期間を入力して予想退職金を計算します。",
    wage3moLabel: "直近3か月賃金総額",
    daysIn3moLabel: "該当3か月の総日数",
    annualBonusLabel: "年間賞与（該当時）",
    serviceDaysLabel: "総在職日数",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    avgDailyWageLabel: "1日平均賃金",
    severanceLabel: "予想退職金",
    disclaimer: "この計算結果は労働基準法上の平均賃金算定方式を単純化した参考推定値です。実際の退職金は賞与・年次手当の加算方式、会社規定などによって異なる場合があるため、正確な金額は会社の人事部にご確認ください。",
    howTitle: "使用方法",
    howSteps: [
      "直近3か月間に受け取った賃金総額とその期間の総日数を入力します。",
      "年間賞与（ある場合）と総在職日数を入力します。",
      "「計算する」を押して1日平均賃金と予想退職金を確認しましょう。",
    ],
    faq: [
      { q: "退職金はどのように計算されますか？", a: "退職金＝1日平均賃金×30日×（総在職日数÷365）で計算されます。1日平均賃金は直近3か月間の賃金と賞与・年次手当加算額を合わせ、その期間の総日数で割った値です。" },
      { q: "1年未満勤務でも退職金を受け取れますか？", a: "韓国の労働基準法上、退職金は1年以上継続勤務した場合にのみ支給対象となります。1年未満勤務の場合、一般的に退職金は発生しません。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Indemnización",
    subtitle: "Introduce tu salario total de los últimos 3 meses y tu antigüedad para estimar tu indemnización.",
    wage3moLabel: "Salario Total (Últimos 3 Meses)",
    daysIn3moLabel: "Días en Ese Período",
    annualBonusLabel: "Bono Anual (si aplica)",
    serviceDaysLabel: "Días Totales de Servicio",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    avgDailyWageLabel: "Salario Diario Promedio",
    severanceLabel: "Indemnización Estimada",
    disclaimer: "Esta es una estimación de referencia simplificada. La indemnización real puede variar según bonos, políticas de la empresa, etc. — confirma con tu departamento de RH.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu salario total de los últimos 3 meses y los días totales en ese período.",
      "Introduce tu bono anual (si aplica) y días totales de servicio.",
      "Haz clic en 'Calcular' para ver tu salario diario promedio e indemnización estimada.",
    ],
    faq: [
      { q: "¿Cómo se calcula la indemnización?", a: "Indemnización = salario diario promedio × 30 días × (días totales de servicio ÷ 365). El salario diario promedio es tu salario total de los últimos 3 meses dividido por los días totales de ese período." },
      { q: "¿Puedo recibir indemnización con menos de 1 año de servicio?", a: "Bajo la ley laboral coreana, la indemnización generalmente aplica solo a empleados con 1 año o más de servicio continuo." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
