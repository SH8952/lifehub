export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  dateLabel: string;
  resultLabel: string;
  weekNumberLabel: string;
  dayOfYearLabel: string;
  isWeekend: string;
  isWeekday: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "요일 계산기",
    subtitle: "특정 날짜가 무슨 요일인지 바로 확인하세요. 과거·미래 날짜 모두 계산 가능합니다.",
    dateLabel: "날짜 선택",
    resultLabel: "요일",
    weekNumberLabel: "연중 몇 번째 주",
    dayOfYearLabel: "연중 몇 번째 날",
    isWeekend: "주말입니다",
    isWeekday: "평일입니다",
    howTitle: "사용 방법",
    howSteps: [
      "확인하고 싶은 날짜를 선택합니다.",
      "해당 날짜의 요일과 평일/주말 여부를 확인합니다.",
      "연중 몇 번째 주·며칠째인지도 함께 표시됩니다.",
    ],
    faq: [
      { q: "아주 먼 과거나 미래 날짜도 계산되나요?", a: "네, JavaScript 날짜 계산을 사용하므로 그레고리력이 적용되는 범위 내에서 정확하게 계산됩니다." },
      { q: "연중 몇 번째 주는 어떤 기준으로 계산하나요?", a: "ISO 8601 기준(월요일 시작, 해당 연도의 첫 목요일이 포함된 주를 1주차)으로 계산합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Weekday Finder",
    subtitle: "Instantly find out what day of the week a specific date falls on — past or future.",
    dateLabel: "Select Date",
    resultLabel: "Day of the Week",
    weekNumberLabel: "Week of the Year",
    dayOfYearLabel: "Day of the Year",
    isWeekend: "This is a weekend",
    isWeekday: "This is a weekday",
    howTitle: "How to Use",
    howSteps: [
      "Select the date you want to check.",
      "See the day of the week and whether it's a weekday or weekend.",
      "The week number and day-of-year are also shown.",
    ],
    faq: [
      { q: "Can it calculate very distant past or future dates?", a: "Yes, since it uses JavaScript's date calculations, it's accurate within the range where the Gregorian calendar applies." },
      { q: "How is the week number calculated?", a: "Using the ISO 8601 standard (weeks start on Monday, and week 1 is the week containing the year's first Thursday)." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "曜日計算機",
    subtitle: "特定の日付が何曜日かすぐに確認できます。過去・未来の日付どちらも計算可能です。",
    dateLabel: "日付選択",
    resultLabel: "曜日",
    weekNumberLabel: "年間の第何週",
    dayOfYearLabel: "年間の第何日",
    isWeekend: "週末です",
    isWeekday: "平日です",
    howTitle: "使用方法",
    howSteps: [
      "確認したい日付を選択します。",
      "その日の曜日と平日・週末の区分を確認します。",
      "年間の第何週・第何日かも一緒に表示されます。",
    ],
    faq: [
      { q: "非常に遠い過去や未来の日付も計算できますか？", a: "はい、JavaScriptの日付計算を使用しているため、グレゴリオ暦が適用される範囲内で正確に計算されます。" },
      { q: "年間の第何週はどのような基準で計算しますか？", a: "ISO 8601基準（月曜始まり、その年の最初の木曜日を含む週を第1週）で計算します。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Buscador de Día de la Semana",
    subtitle: "Descubre al instante en qué día de la semana cae una fecha específica, pasada o futura.",
    dateLabel: "Seleccionar Fecha",
    resultLabel: "Día de la Semana",
    weekNumberLabel: "Semana del Año",
    dayOfYearLabel: "Día del Año",
    isWeekend: "Es fin de semana",
    isWeekday: "Es día laborable",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona la fecha que quieres comprobar.",
      "Consulta el día de la semana y si es laborable o fin de semana.",
      "También se muestra el número de semana y el día del año.",
    ],
    faq: [
      { q: "¿Puede calcular fechas muy lejanas en el pasado o futuro?", a: "Sí, como usa los cálculos de fecha de JavaScript, es preciso dentro del rango donde se aplica el calendario gregoriano." },
      { q: "¿Cómo se calcula el número de semana?", a: "Usando el estándar ISO 8601 (las semanas comienzan el lunes, y la semana 1 es la que contiene el primer jueves del año)." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
