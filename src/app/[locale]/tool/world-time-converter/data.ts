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
      "목록은 UTC 기준 주요 시간대를 대표하는 도시들로 구성되어 있어, 근처 시간대의 다른 지역도 대략적으로 가늠할 수 있습니다.",
    ],
    faq: [
      { q: "서머타임(DST)도 반영되나요?", a: "네, 브라우저의 Intl 시간대 데이터를 사용하므로 각 지역의 서머타임 적용 여부가 자동으로 반영됩니다." },
      { q: "도시를 추가할 수 있나요?", a: "현재는 가장 많이 찾는 주요 도시 목록을 고정으로 제공합니다." },
      { q: "여러 시간대의 팀원과 회의 시간을 잡을 때 쓸 수 있나요?", a: "네, 기준 시각을 하나 입력하면 각 도시의 시각이 동시에 표시되므로, 여러 지역 참가자에게 적합한 회의 시간을 찾는 데 유용합니다." },
      { q: "과거나 미래의 특정 날짜도 변환할 수 있나요?", a: "네, 날짜·시각을 자유롭게 선택할 수 있어 과거 특정일이나 미래 예정일의 각 도시 시각도 확인할 수 있습니다." },
      { q: "시간대 정보는 얼마나 정확한가요?", a: "브라우저의 표준 Intl 시간대 데이터베이스(IANA 타임존 데이터)를 사용하므로, 대부분의 경우 정확하고 최신 상태를 유지합니다." },
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
      "The list covers cities representing the world's major UTC time zones, so you can roughly estimate nearby regions too.",
    ],
    faq: [
      { q: "Does it account for daylight saving time (DST)?", a: "Yes, since it uses the browser's built-in Intl timezone data, DST is automatically applied where relevant." },
      { q: "Can I add more cities?", a: "Currently a fixed list of the most commonly searched major cities is provided." },
      { q: "Can I use this to schedule a meeting across time zones?", a: "Yes, entering one reference time shows the corresponding time in each city at once, making it useful for finding a meeting time that works for participants in different regions." },
      { q: "Can I convert a specific date in the past or future?", a: "Yes, you can freely select any date and time, so you can also check city times for a specific past date or a future scheduled date." },
      { q: "How accurate is the time zone information?", a: "It relies on the browser's standard Intl time zone database (IANA time zone data), which stays accurate and up to date in most cases." },
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
      "リストはUTC基準の主要な時間帯を代表する都市で構成されているため、近隣の時間帯の他地域もおおよそ把握できます。",
    ],
    faq: [
      { q: "サマータイム（DST）も反映されますか？", a: "はい、ブラウザ内蔵のIntlタイムゾーンデータを使用するため、各地域のサマータイム適用が自動的に反映されます。" },
      { q: "都市を追加できますか？", a: "現在は最もよく検索される主要都市のリストを固定で提供しています。" },
      { q: "複数の時間帯のチームメンバーと会議時間を決めるのに使えますか？", a: "はい、基準時刻を一つ入力すると各都市の時刻が同時に表示されるため、複数地域の参加者に適した会議時間を見つけるのに役立ちます。" },
      { q: "過去や未来の特定日も変換できますか？", a: "はい、日付・時刻を自由に選択できるため、過去の特定日や将来の予定日の各都市の時刻も確認できます。" },
      { q: "タイムゾーン情報はどれくらい正確ですか？", a: "ブラウザの標準Intlタイムゾーンデータベース（IANAタイムゾーンデータ）を使用しているため、ほとんどの場合正確で最新の状態が保たれます。" },
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
      "La lista incluye ciudades que representan las principales zonas horarias UTC del mundo, por lo que también puedes estimar aproximadamente regiones cercanas.",
    ],
    faq: [
      { q: "¿Tiene en cuenta el horario de verano (DST)?", a: "Sí, como usa los datos de zona horaria Intl integrados del navegador, el DST se aplica automáticamente donde corresponda." },
      { q: "¿Puedo agregar más ciudades?", a: "Actualmente se ofrece una lista fija de las ciudades principales más buscadas." },
      { q: "¿Puedo usar esto para programar una reunión entre zonas horarias?", a: "Sí, al introducir una hora de referencia se muestra la hora correspondiente en cada ciudad a la vez, lo que es útil para encontrar un horario de reunión que funcione para participantes de distintas regiones." },
      { q: "¿Puedo convertir una fecha específica del pasado o futuro?", a: "Sí, puedes seleccionar libremente cualquier fecha y hora, así que también puedes consultar las horas por ciudad para una fecha pasada específica o una fecha futura programada." },
      { q: "¿Qué tan precisa es la información de zona horaria?", a: "Se basa en la base de datos estándar de zonas horarias Intl del navegador (datos de zona horaria IANA), que se mantiene precisa y actualizada en la mayoría de los casos." },
    ],
    disclaimer: "Esta herramienta usa los datos de zona horaria integrados del navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
