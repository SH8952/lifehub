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
      "퇴직금은 지급 시 퇴직소득세가 원천징수된 후 실수령액이 지급되므로, 이 계산기의 결과는 세전 금액임을 참고하세요.",
    ],
    faq: [
      { q: "퇴직금은 어떻게 계산되나요?", a: "퇴직금 = 1일 평균임금 × 30일 × (총 재직일수 ÷ 365)로 계산됩니다. 1일 평균임금은 최근 3개월간 받은 임금과 상여금·연차수당 가산액을 합쳐 해당 기간의 총 일수로 나눈 값입니다." },
      { q: "1년 미만 근무해도 퇴직금을 받을 수 있나요?", a: "한국의 근로기준법상 퇴직금은 1년 이상 계속 근로한 경우에만 지급 대상이 됩니다. 1년 미만 근무 시에는 일반적으로 퇴직금이 발생하지 않습니다." },
      { q: "퇴직금과 퇴직연금(DB/DC)은 같은 건가요?", a: "아니요. 퇴직금은 회사가 퇴직 시 일시금으로 직접 지급하는 제도이고, 퇴직연금(DB형·DC형)은 회사가 외부 금융기관에 적립해 운용하는 제도입니다. 회사가 퇴직연금 제도를 도입했다면 실제 산정·지급 방식이 이 계산기와 다를 수 있습니다." },
      { q: "퇴직소득세는 어떻게 계산되나요?", a: "퇴직소득세는 근속연수에 따른 공제를 적용한 후 별도의 세율 구조(근속연수 공제, 환산급여 공제 등)로 계산되며, 일반 근로소득세보다 낮은 실효세율이 적용되는 경우가 많습니다. 정확한 세액은 회사의 원천징수 명세서를 확인하세요." },
      { q: "이직하면 이전 직장의 재직기간도 합산되나요?", a: "아니요. 퇴직금은 각 사업장(고용주) 단위로 별도 산정되는 것이 원칙이므로, 이전 직장에서 이미 퇴직금을 정산받았다면 새 직장에서는 그 직장에서의 재직기간만 다시 처음부터 계산됩니다." },
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
      "Severance pay is subject to retirement income tax withheld at payment, so the result shown here is a pre-tax figure - the actual amount you receive will be somewhat lower.",
    ],
    faq: [
      { q: "How is severance pay calculated?", a: "Severance pay = average daily wage × 30 days × (total days of service ÷ 365). The average daily wage is your total wages over the last 3 months (plus bonus/leave allowance) divided by the total days in that period." },
      { q: "Can I receive severance pay with less than 1 year of service?", a: "Under Korean labor law, severance pay generally applies only to employees with 1 year or more of continuous service." },
      { q: "Is severance pay the same as a retirement pension (DB/DC)?", a: "No. Severance pay is a lump sum the company pays directly at termination, while a retirement pension (defined-benefit or defined-contribution) is funded and managed through an outside financial institution. If your company uses a pension scheme, the actual calculation and payout process may differ from this calculator." },
      { q: "How is retirement income tax calculated?", a: "Retirement income tax applies deductions based on years of service and uses its own rate structure (service-year deduction, converted-salary deduction, etc.), which often results in a lower effective rate than regular wage income tax. Check your company's withholding statement for the exact figure." },
      { q: "If I change jobs, does my previous employer's tenure carry over?", a: "No. Severance pay is calculated separately per employer, so if you already received a settlement from your previous job, tenure at your new employer starts counting from zero again." },
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
      "退職金は支給時に退職所得税が源泉徴収された後の実受取額が支給されるため、このツールの結果は税引前の金額であることにご留意ください。",
    ],
    faq: [
      { q: "退職金はどのように計算されますか？", a: "退職金＝1日平均賃金×30日×（総在職日数÷365）で計算されます。1日平均賃金は直近3か月間の賃金と賞与・年次手当加算額を合わせ、その期間の総日数で割った値です。" },
      { q: "1年未満勤務でも退職金を受け取れますか？", a: "韓国の労働基準法上、退職金は1年以上継続勤務した場合にのみ支給対象となります。1年未満勤務の場合、一般的に退職金は発生しません。" },
      { q: "退職金と退職年金（DB/DC）は同じですか？", a: "いいえ。退職金は会社が退職時に一時金として直接支給する制度で、退職年金（DB型・DC型）は会社が外部金融機関に積立・運用する制度です。会社が退職年金制度を導入している場合、実際の算定・支給方式はこのツールと異なる場合があります。" },
      { q: "退職所得税はどのように計算されますか？", a: "退職所得税は勤続年数に応じた控除を適用した後、独自の税率構造（勤続年数控除、換算給与控除など）で計算され、一般の勤労所得税より低い実効税率が適用される場合が多いです。正確な税額は会社の源泉徴収明細書をご確認ください。" },
      { q: "転職すると前職の在職期間も合算されますか？", a: "いいえ。退職金は各事業所（雇用主）ごとに別途算定されるのが原則のため、前職ですでに退職金を精算済みであれば、新しい職場ではその在職期間のみゼロから再計算されます。" },
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
      "La indemnización está sujeta a retención de impuesto sobre la renta de jubilación al momento del pago, así que el resultado mostrado aquí es un monto antes de impuestos - el monto real recibido será algo menor.",
    ],
    faq: [
      { q: "¿Cómo se calcula la indemnización?", a: "Indemnización = salario diario promedio × 30 días × (días totales de servicio ÷ 365). El salario diario promedio es tu salario total de los últimos 3 meses dividido por los días totales de ese período." },
      { q: "¿Puedo recibir indemnización con menos de 1 año de servicio?", a: "Bajo la ley laboral coreana, la indemnización generalmente aplica solo a empleados con 1 año o más de servicio continuo." },
      { q: "¿Es la indemnización lo mismo que una pensión de jubilación (DB/DC)?", a: "No. La indemnización es una suma única que la empresa paga directamente al terminar el empleo, mientras que una pensión de jubilación (de beneficio o contribución definida) se financia y gestiona a través de una institución financiera externa. Si tu empresa usa un plan de pensión, el cálculo y pago real pueden diferir de esta calculadora." },
      { q: "¿Cómo se calcula el impuesto sobre la renta de jubilación?", a: "El impuesto sobre la renta de jubilación aplica deducciones según los años de servicio y usa su propia estructura de tasas, lo que a menudo resulta en una tasa efectiva más baja que el impuesto sobre la renta laboral regular. Consulta el comprobante de retención de tu empresa para la cifra exacta." },
      { q: "Si cambio de trabajo, ¿se acumula la antigüedad del empleador anterior?", a: "No. La indemnización se calcula por separado para cada empleador, así que si ya recibiste la liquidación de tu trabajo anterior, la antigüedad en el nuevo empleo comienza a contar desde cero." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
