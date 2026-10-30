export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  baseTimeLabel: string;
  baseCityLabel: string;
  nowButton: string;
  cityTimeLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "세계 시간대 변환기",
    subtitle: "기준 시각을 입력하면 전 세계 주요 도시의 시간을 한눈에 비교할 수 있습니다.",
    baseTimeLabel: "기준 날짜/시각",
    baseCityLabel: "기준 도시",
    nowButton: "지금 시각으로",
    cityTimeLabel: "각 도시 시각",
    howTitle: "사용 방법",
    howSteps: [
      "기준 도시와 날짜·시각을 선택합니다 (기본값은 현재 시각).",
      "아래 목록에서 전 세계 주요 도시의 변환된 시각을 확인합니다.",
      "'지금 시각으로' 버튼으로 언제든 현재 시각으로 초기화할 수 있습니다.",
    ],
    faq: [
      { q: "서머타임(DST)도 반영되나요?", a: "네, 브라우저의 Intl 시간대 데이터를 사용하므로 각 지역의 서머타임 적용 여부가 자동으로 반영됩니다." },
      { q: "도시를 추가할 수 있나요?", a: "현재는 가장 많이 찾는 주요 도시 목록을 고정으로 제공합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내장 시간대 데이터를 사용하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "World Time Converter",
    subtitle: "Enter a reference time and compare it across major cities around the world at a glance.",
    baseTimeLabel: "Reference Date/Time",
    baseCityLabel: "Reference City",
    nowButton: "Use Current Time",
    cityTimeLabel: "City Times",
    howTitle: "How to Use",
    howSteps: [
      "Select a reference city and date/time (defaults to now).",
      "Check the converted time for major world cities in the list below.",
      "Use 'Use Current Time' to reset to the current moment anytime.",
    ],
    faq: [
      { q: "Does it account for daylight saving time (DST)?", a: "Yes, since it uses the browser's built-in Intl timezone data, DST is automatically applied where relevant." },
      { q: "Can I add more cities?", a: "Currently a fixed list of the most commonly searched major cities is provided." },
    ],
    disclaimer: "This tool uses the browser's built-in timezone data and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "世界時間帯変換ツール",
    subtitle: "基準時刻を入力すると、世界の主要都市の時間を一目で比較できます。",
    baseTimeLabel: "基準日時",
    baseCityLabel: "基準都市",
    nowButton: "現在時刻にする",
    cityTimeLabel: "各都市の時刻",
    howTitle: "使用方法",
    howSteps: [
      "基準都市と日付・時刻を選択します（デフォルトは現在時刻）。",
      "下のリストで世界の主要都市に変換された時刻を確認します。",
      "「現在時刻にする」ボタンでいつでも現在時刻にリセットできます。",
    ],
    faq: [
      { q: "サマータイム（DST）も反映されますか？", a: "はい、ブラウザ内蔵のIntlタイムゾーンデータを使用するため、各地域のサマータイム適用が自動的に反映されます。" },
      { q: "都市を追加できますか？", a: "現在は最もよく検索される主要都市のリストを固定で提供しています。" },
    ],
    disclaimer: "このツールはブラウザ内蔵のタイムゾーンデータを使用し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Husos Horarios",
    subtitle: "Introduce una hora de referencia y compárala al instante en las principales ciudades del mundo.",
    baseTimeLabel: "Fecha/Hora de Referencia",
    baseCityLabel: "Ciudad de Referencia",
    nowButton: "Usar Hora Actual",
    cityTimeLabel: "Horas por Ciudad",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona una ciudad y fecha/hora de referencia (por defecto, ahora).",
      "Consulta la hora convertida para las principales ciudades del mundo en la lista.",
      "Usa 'Usar Hora Actual' para restablecer al momento actual en cualquier momento.",
    ],
    faq: [
      { q: "¿Tiene en cuenta el horario de verano (DST)?", a: "Sí, como usa los datos de zona horaria Intl integrados del navegador, el DST se aplica automáticamente donde corresponda." },
      { q: "¿Puedo agregar más ciudades?", a: "Actualmente se ofrece una lista fija de las ciudades principales más buscadas." },
    ],
    disclaimer: "Esta herramienta usa los datos de zona horaria integrados del navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
