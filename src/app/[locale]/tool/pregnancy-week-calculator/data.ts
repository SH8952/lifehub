export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  lmpLabel: string;
  calculateBtn: string;
  resultLabel: string;
  currentWeekLabel: string;
  weeksUnit: string;
  daysUnit: string;
  dueDateLabel: string;
  trimesterLabel: string;
  trimester1: string;
  trimester2: string;
  trimester3: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "임신 주수 계산기",
    subtitle: "마지막 생리 시작일을 입력하면 현재 임신 주수와 예정일, 임신 분기를 계산합니다.",
    lmpLabel: "마지막 생리 시작일",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    currentWeekLabel: "현재 임신 주수",
    weeksUnit: "주",
    daysUnit: "일",
    dueDateLabel: "출산 예정일",
    trimesterLabel: "임신 분기",
    trimester1: "1분기 (1~13주)",
    trimester2: "2분기 (14~27주)",
    trimester3: "3분기 (28주~)",
    disclaimer: "⚠️ 본 계산 결과는 일반적인 공식(평균 280일, 40주)에 기반한 참고용 추정치이며, 의학적 진단을 대체하지 않습니다. 정확한 주수와 예정일은 산부인과 초음파 검사를 통해 확인하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "마지막 생리가 시작된 날짜를 입력합니다.",
      "'계산하기'를 눌러 현재 임신 주수와 출산 예정일을 확인하세요.",
      "임신 분기(1~3분기)도 함께 표시됩니다.",
    ],
    faq: [
      { q: "임신 주수는 어떻게 계산되나요?", a: "일반적으로 마지막 생리 시작일을 기준으로 계산하며(제1일 = 0주 0일), 평균 임신 기간은 280일(40주)로 봅니다." },
      { q: "예정일이 정확한가요?", a: "예정일은 평균적인 공식에 기반한 추정치입니다. 실제 분만일은 예정일 전후 2주 범위 내에서도 정상으로 간주되며, 정확한 날짜는 초음파 검사로 확인해야 합니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Pregnancy Week Calculator",
    subtitle: "Enter the first day of your last menstrual period to calculate your current pregnancy week, due date, and trimester.",
    lmpLabel: "First Day of Last Menstrual Period",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    currentWeekLabel: "Current Pregnancy Week",
    weeksUnit: "weeks",
    daysUnit: "days",
    dueDateLabel: "Estimated Due Date",
    trimesterLabel: "Trimester",
    trimester1: "1st Trimester (weeks 1-13)",
    trimester2: "2nd Trimester (weeks 14-27)",
    trimester3: "3rd Trimester (28 weeks+)",
    disclaimer: "⚠️ This result is a reference estimate based on the standard 280-day (40-week) formula and does not substitute for medical diagnosis. Confirm exact dates with your OB-GYN via ultrasound.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the date your last menstrual period started.",
      "Click 'Calculate' to see your current pregnancy week and due date.",
      "Your trimester (1st-3rd) is also shown.",
    ],
    faq: [
      { q: "How is pregnancy week calculated?", a: "It's typically calculated from the first day of the last menstrual period (day 1 = week 0, day 0), with an average pregnancy length of 280 days (40 weeks)." },
      { q: "Is the due date accurate?", a: "The due date is an estimate based on an average formula. Actual delivery within 2 weeks before or after is considered normal; confirm exact dates via ultrasound." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "妊娠週数計算機",
    subtitle: "最後の生理開始日を入力すると、現在の妊娠週数と予定日、妊娠期を計算します。",
    lmpLabel: "最後の生理開始日",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    currentWeekLabel: "現在の妊娠週数",
    weeksUnit: "週",
    daysUnit: "日",
    dueDateLabel: "出産予定日",
    trimesterLabel: "妊娠期",
    trimester1: "妊娠初期（1〜13週）",
    trimester2: "妊娠中期（14〜27週）",
    trimester3: "妊娠後期（28週〜）",
    disclaimer: "⚠️ この結果は一般的な公式（平均280日、40週）に基づく参考用の推定値であり、医学的診断に代わるものではありません。正確な週数と予定日は産婦人科の超音波検査で確認してください。",
    howTitle: "使用方法",
    howSteps: [
      "最後の生理が始まった日付を入力します。",
      "「計算する」を押して現在の妊娠週数と出産予定日を確認しましょう。",
      "妊娠期（1〜3期）も表示されます。",
    ],
    faq: [
      { q: "妊娠週数はどのように計算されますか？", a: "一般的に最後の生理開始日を基準に計算され（第1日＝0週0日）、平均妊娠期間は280日（40週）とされます。" },
      { q: "予定日は正確ですか？", a: "予定日は平均的な公式に基づく推定値です。実際の分娩日は予定日前後2週間の範囲内でも正常とされ、正確な日付は超音波検査で確認する必要があります。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Semanas de Embarazo",
    subtitle: "Introduce el primer día de tu último período menstrual para calcular tu semana de embarazo actual, fecha de parto y trimestre.",
    lmpLabel: "Primer Día del Último Período Menstrual",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    currentWeekLabel: "Semana de Embarazo Actual",
    weeksUnit: "semanas",
    daysUnit: "días",
    dueDateLabel: "Fecha Estimada de Parto",
    trimesterLabel: "Trimestre",
    trimester1: "1er Trimestre (semanas 1-13)",
    trimester2: "2do Trimestre (semanas 14-27)",
    trimester3: "3er Trimestre (28+ semanas)",
    disclaimer: "⚠️ Este resultado es una estimación de referencia basada en la fórmula estándar de 280 días (40 semanas) y no sustituye un diagnóstico médico. Confirma las fechas exactas con tu ginecólogo mediante ecografía.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce la fecha en que comenzó tu último período menstrual.",
      "Haz clic en 'Calcular' para ver tu semana de embarazo actual y fecha de parto.",
      "También se muestra tu trimestre (1-3).",
    ],
    faq: [
      { q: "¿Cómo se calcula la semana de embarazo?", a: "Normalmente se calcula desde el primer día del último período menstrual (día 1 = semana 0, día 0), con una duración promedio de 280 días (40 semanas)." },
      { q: "¿Es exacta la fecha de parto?", a: "La fecha de parto es una estimación basada en una fórmula promedio. El parto real dentro de 2 semanas antes o después se considera normal." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
