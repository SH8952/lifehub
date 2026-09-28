export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  menstrualCycle: string;
  cyclePlaceholder: string;
  cycleUnit: string;
  cycleHelp: string;
  lastPeriod: string;
  lastPeriodPlaceholder: string;
  calculate: string;
  result: string;
  ovulationDay: string;
  ovulationDesc: string;
  fertileStart: string;
  fertileEnd: string;
  fertileDesc: string;
  nextPeriod: string;
  nextPeriodDesc: string;
  testingStart: string;
  limitations: string;
  whyOvulation: string;
  explanation: string;
  footer: string;
  presets: string;
  presetShort: string;
  presetLong: string;
  faq: Array<{ q: string; a: string }>;
  inputs: string;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "배란일 계산기",
    subtitle: "마지막 생리일을 입력하면 배란일과 임신 가능 기간을 계산합니다.",
    inputs: "입력",
    menstrualCycle: "생리 주기",
    cyclePlaceholder: "생리 주기 입력",
    cycleUnit: "일",
    cycleHelp: "평균 생리 주기는 보통 21~35일입니다. 마지막 생리 시작일부터 다음 생리 시작일까지를 말합니다.",
    lastPeriod: "마지막 생리 시작일",
    lastPeriodPlaceholder: "날짜 선택",
    calculate: "계산하기",
    result: "계산 결과",
    ovulationDay: "배란일",
    ovulationDesc: "가장 임신 가능성이 높은 날 (약 14일 전)",
    fertileStart: "임신 가능 기간 시작",
    fertileEnd: "임신 가능 기간 종료",
    fertileDesc: "배란일 5일 전 ~ 배란일 하루 후",
    nextPeriod: "예상 다음 생리일",
    nextPeriodDesc: "생리 주기 기준",
    testingStart: "임신 검사 시작일",
    limitations: "계산 결과는 참고용이며, 개인별 생리 주기는 변동될 수 있습니다.",
    whyOvulation: "왜 배란일 계산기가 필요한가요?",
    explanation:
      "배란일 계산기를 사용하면 임신 가능 기간을 미리 예측할 수 있어 가족 계획에 유용합니다.\n\n배란은 보통 다음 생리일 기준으로 약 14일 전에 발생합니다. 임신 가능 기간은 배란일 5일 전부터 배란일 하루 후까지입니다. 정자들은 여성 기관 내에서 3~5일까지 생존할 수 있기 때문입니다.\n\n이 계산기는 표준 28일 주기를 기반으로 합니다. 개인별 주기가 다르면 반드시 해당 주기를 입력하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    presets: "프리셋 (생리 주기)",
    presetShort: "21일",
    presetLong: "35일",
    faq: [
      {
        q: "배란일 계산이 얼마나 정확한가요?",
        a: "배란일 계산은 규칙적인 주기를 기준으로 예측하는 것이므로, 규칙적인 생리 주기가 있어야 정확합니다. 스트레스, 질병, 호르몬 변화 등으로 주기가 변동되면 정확도가 떨어질 수 있습니다.",
      },
      {
        q: "임신 가능성을 높이려면 어떻게 해야 하나요?",
        a: "임신 가능 기간(배란일 5일 전 ~ 배란일 하루 후)에 정기적으로 관계를 가질 것을 권장합니다. 특히 배란일 하루 전과 그当天에 가장 가능성이 높습니다.",
      },
      {
        q: "생리 주기가 불규칙한데 계산이 가능한가요?",
        a: "평균 주기를 계산하면 됩니다. 예를 들어 지난달 20일과 이번달 25일 생리가 있다면 주기는 5일이 됩니다. 이 평균을 기준삼아 계산하세요.",
      },
    ],
  },
  en: {
    title: "Ovulation Calculator",
    subtitle: "Enter your last period date to predict your ovulation day and fertile window.",
    inputs: "Input",
    menstrualCycle: "Menstrual cycle",
    cyclePlaceholder: "Enter cycle length",
    cycleUnit: "days",
    cycleHelp: "Average cycle is 21-35 days. Its the number of days from the first day of your last period to the first day of the next one.",
    lastPeriod: "First day of last period",
    lastPeriodPlaceholder: "Select date",
    calculate: "Calculate",
    result: "Result",
    ovulationDay: "Ovulation Day",
    ovulationDesc: "Most fertile day (approx. 14 days before next period)",
    fertileStart: "Fertile window starts",
    fertileEnd: "Fertile window ends",
    fertileDesc: "5 days before ovulation - 1 day after ovulation (highest chance of pregnancy)",
    nextPeriod: "Expected next period",
    nextPeriodDesc: "Based on your cycle",
    testingStart: "Begin pregnancy test from",
    limitations: "This is an estimate. Individual cycles may vary.",
    whyOvulation: "Why use an ovulation calculator?",
    explanation:
      "An ovulation calculator helps you predict your fertile window for family planning.\n\nOvulation typically occurs approximately 14 days before your next period starts. The fertile window is 5 days before to 1 day after ovulation, since sperm can survive in the female reproductive tract for 3-5 days.\n\nThis calculator uses the standard 28-day period as its default. Always enter your actual cycle length.",
    footer: "100% processed in your browser. No data is sent to the server.",
    presets: "Presets (cycle length)",
    presetShort: "21 days",
    presetLong: "35 days",
    faq: [
      {
        q: "How accurate is the ovulation calculator?",
        a: "Ovulation tracking based on a regular cycle relies on a regular menstrual cycle for accuracy. Stress, illness, or hormonal changes can affect accuracy.",
      },
      {
        q: "How can I increase my chances of getting pregnant?",
        a: "Have relations during the fertile window (5 days before to 1 day after ovulation). Especially the day before and the day of ovulation is optimal.",
      },
      {
        q: "Can I use the calculator if my cycle is irregular?",
        a: "Use your average cycle. For example, last period on the 20th and this month on the 25th makes a cycle. Use this average as the basis.",
      },
    ],
  },
  ja: {
    title: "排卵日計算機",
    subtitle: "最後の生理日を入力すると、排卵期と妊孕期間を計算します。",
    inputs: "入力",
    menstrualCycle: "生理周期",
    cyclePlaceholder: "生理周期を入力",
    cycleUnit: "日",
    cycleHelp: "平均生理周期は通常21-35日です。最後の生理初日から次の生理初日までの日数です。",
    lastPeriod: "最後の生理初日",
    lastPeriodPlaceholder: "日付を選択",
    calculate: "計算",
    result: "結果",
    ovulationDay: "排卵日",
    ovulationDesc: "妊娠の可能性が最も高い日（次回生理の約14日前）",
    fertileStart: "妊可期間開始",
    fertileEnd: "妊可期間終了",
    fertileDesc: "排卵5日前〜排卵1日後（妊娠可能性が最も高い期間）",
    nextPeriod: "次回生理予定日",
    nextPeriodDesc: "生理周期基準",
    testingStart: "妊娠検査開始日",
    limitations: "計算結果は参考用であり、個人差により生理周期は変動する可能性があります。",
    whyOvulation: "なぜ排卵期計算が必要ですか？",
    explanation:
      "排卵期計算機は家族計画に有用な妊孕期間を予測できます。\n\n排卵は通常次回生理開始の約14日前に発生します。妊可期間は排卵5日前から排卵1日後までで、精子が女性の生殖器官内で3-5日間生存するためです。\n\nこの計算機は標準28日周期をデフォルトとしています。実際の周期を入力すればより正確な結果が得られます。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    presets: "プリセット（生理周期）",
    presetShort: "21日",
    presetLong: "35日",
    faq: [
      {
        q: "排卵期の計算はどれくらい正確ですか？",
        a: "排卵期は規則正しい周期を基準に予測するために、規則正しい生理周期がある場合に最も正確です。ストレスやホルモンバランスの変化で誤差が生じる可能性があります。",
      },
      {
        q: "妊娠の可能性を高めるにはどうすればいいですか？",
        a: "妊可期間中に定期的に行為を推奨します。特に排卵日前日と当日が最も確率が大きくなります。",
      },
      {
        q: "生理周期が不規則な場合でも計算できますか？",
        a: "平均周期を使って計算します。例えば先月20日、今月25日であれば5日周期が計算されます。この平均を基準としてください。",
      },
    ],
  },
  es: {
    title: "Calculadora de Ovulacion",
    subtitle: "Ingresa la fecha de tu ultimo periodo para predecir tu dia de ovulacion y ventana fertile.",
    inputs: "Entrada",
    menstrualCycle: "Ciclo menstrual",
    cyclePlaceholder: "Ingresa la duracion del ciclo",
    cycleUnit: "dias",
    cycleHelp: "El ciclo promedio es de 21-35 dias. Es el numero de dias desde el primer dia de tu ultimo periodo hasta el primer dia del siguiente.",
    lastPeriod: "Primer dia del ultimo periodo",
    lastPeriodPlaceholder: "Selecciona la fecha",
    calculate: "Calcular",
    result: "Resultado",
    ovulationDay: "Dia de Ovulacion",
    ovulationDesc: "Dia mas fertile (aprox. 14 dias antes del proximo periodo)",
    fertileStart: "La ventana de fertilidad comienza",
    fertileEnd: "La ventana de fertilidad termina",
    fertileDesc: "5 dias antes de la ovulacion - 1 dia despues (mayor probabilidad de embarazo)",
    nextPeriod: "Proximo periodo esperado",
    nextPeriodDesc: "Segun tu ciclo",
    testingStart: "Iniciar prueba de embarazo desde",
    limitations: "Esto es un estimado. Los ciclos individuales pueden variar.",
    whyOvulation: "¿Por que usar una calculadora de ovulacion?",
    explanation:
      "Una calculadora de ovulacion te ayuda a predecir tu ventana de fertilidad para la planificacion familiar.\n\nLa ovulacion generalmente ocurre aprox. 14 dias antes de que comience tu proximo periodo. La ventana de fertilidad es de 5 dias antes de hasta 1 dia despues de la ovulacion, ya que los espermatozoides pueden sobrevivir en el tracto reproductivo femenino por 3-5 dias.\n\nEsta calculadora usa un ciclo de 28 dias por defecto. Ingresa tu ciclo real para mejores resultados.",
    footer: "Procesado 100% en tu navegador. No se envian datos al servidor.",
    presets: "Preajustes (duracion del ciclo)",
    presetShort: "21 dias",
    presetLong: "35 dias",
    faq: [
      {
        q: "¿Que tan precisa es la calculadora de ovulacion?",
        a: "El seguimiento basado en un ciclo regular es mas preciso con un ciclo menstrual regular. El estres, enfermedades o cambios hormonales pueden afectar la precision.",
      },
      {
        q: "¿Como puedo aumentar mis posibilidades de quedar embarazada?",
        a: "Tener relaciones durante la ventana de fertilidad (5 dias antes de hasta 1 dia despues de la ovulacion). Especialmente el dia anterior y el dia de la ovulacion es lo mas optimo.",
      },
      {
        q: "¿Puedo usar la calculadora si mi ciclo es irregular?",
        a: "Usa tu ciclo promedio. Por ejemplo, si tu ultimo periodo fue el dia 20 y este mes el dia 25, el ciclo seria 5 dias. Usa este promedio como base.",
      },
    ],
  },
};
