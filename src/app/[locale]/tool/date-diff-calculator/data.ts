export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  startDateLabel: string;
  endDateLabel: string;
  resultLabel: string;
  daysUnit: string;
  yearsMonthsDays: string;
  today: string;
  dDayBefore: string;
  dDayAfter: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "날짜 계산기 (D-Day)",
    subtitle: "두 날짜 사이의 일수를 계산하거나, 특정 날짜까지 D-Day를 확인하세요.",
    startDateLabel: "시작 날짜",
    endDateLabel: "종료 날짜",
    resultLabel: "결과",
    daysUnit: "일",
    yearsMonthsDays: "년 · 개월 · 일",
    today: "오늘",
    dDayBefore: "일 남음",
    dDayAfter: "일 지남",
    howTitle: "사용 방법",
    howSteps: [
      "시작 날짜와 종료 날짜를 선택합니다.",
      "두 날짜 사이의 총 일수와 년·개월·일 단위 결과를 확인합니다.",
      "종료 날짜가 미래라면 D-Day(남은 일수)로, 과거라면 지난 일수로 표시됩니다.",
    ],
    faq: [
      { q: "윤년도 정확히 계산되나요?", a: "네, JavaScript의 날짜 객체를 사용하므로 윤년을 포함한 모든 날짜 계산이 정확합니다." },
      { q: "시작일과 종료일이 같으면 어떻게 되나요?", a: "두 날짜가 같으면 0일로 표시됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Date Difference Calculator (D-Day)",
    subtitle: "Calculate the number of days between two dates, or check the D-Day countdown to a specific date.",
    startDateLabel: "Start Date",
    endDateLabel: "End Date",
    resultLabel: "Result",
    daysUnit: "days",
    yearsMonthsDays: "Years · Months · Days",
    today: "today",
    dDayBefore: "days left",
    dDayAfter: "days ago",
    howTitle: "How to Use",
    howSteps: [
      "Select a start date and an end date.",
      "Check the total number of days and the years/months/days breakdown.",
      "If the end date is in the future it shows as a D-Day countdown; if in the past, as elapsed days.",
    ],
    faq: [
      { q: "Does it correctly account for leap years?", a: "Yes, since it uses JavaScript's native Date object, all date calculations including leap years are accurate." },
      { q: "What if the start and end dates are the same?", a: "If both dates are the same, it shows 0 days." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "日付計算機（D-Day）",
    subtitle: "2つの日付間の日数を計算するか、特定の日付までのD-Dayを確認しましょう。",
    startDateLabel: "開始日",
    endDateLabel: "終了日",
    resultLabel: "結果",
    daysUnit: "日",
    yearsMonthsDays: "年・月・日",
    today: "今日",
    dDayBefore: "日前",
    dDayAfter: "日経過",
    howTitle: "使用方法",
    howSteps: [
      "開始日と終了日を選択します。",
      "2つの日付間の総日数と年・月・日単位の結果を確認します。",
      "終了日が未来の場合はD-Day（残り日数）、過去の場合は経過日数として表示されます。",
    ],
    faq: [
      { q: "うるう年も正確に計算されますか？", a: "はい、JavaScriptの日付オブジェクトを使用しているため、うるう年を含むすべての日付計算が正確です。" },
      { q: "開始日と終了日が同じ場合はどうなりますか？", a: "両日が同じ場合は0日として表示されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Calculadora de Diferencia de Fechas",
    subtitle: "Calcula el número de días entre dos fechas o revisa la cuenta regresiva hasta una fecha específica.",
    startDateLabel: "Fecha de Inicio",
    endDateLabel: "Fecha de Fin",
    resultLabel: "Resultado",
    daysUnit: "días",
    yearsMonthsDays: "Años · Meses · Días",
    today: "hoy",
    dDayBefore: "días restantes",
    dDayAfter: "días atrás",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona una fecha de inicio y una de fin.",
      "Consulta el total de días y el desglose en años/meses/días.",
      "Si la fecha de fin es futura se muestra como cuenta regresiva; si es pasada, como días transcurridos.",
    ],
    faq: [
      { q: "¿Tiene en cuenta correctamente los años bisiestos?", a: "Sí, como usa el objeto Date nativo de JavaScript, todos los cálculos de fecha, incluidos los años bisiestos, son precisos." },
      { q: "¿Qué pasa si la fecha de inicio y fin son la misma?", a: "Si ambas fechas son iguales, se muestran 0 días." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
