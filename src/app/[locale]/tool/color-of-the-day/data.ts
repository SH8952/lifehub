export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  checkBtn: string;
  dateLabel: string;
  colorNameLabel: string;
  meaningLabel: string;
  adviceLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "오늘의 색깔 운세",
    subtitle: "오늘 날짜를 기준으로 나만의 행운의 색깔과 의미를 재미로 알려드립니다.",
    checkBtn: "오늘의 색깔 확인하기",
    dateLabel: "오늘 날짜",
    colorNameLabel: "오늘의 색",
    meaningLabel: "색깔의 의미",
    adviceLabel: "오늘의 조언",
    howTitle: "사용 방법",
    howSteps: [
      "\"오늘의 색깔 확인하기\" 버튼을 누릅니다.",
      "오늘 날짜를 기반으로 계산된 색깔과 그 의미, 조언이 표시됩니다.",
      "같은 날 다시 눌러도 같은 결과가 나오며, 다음 날에는 새로운 색이 나타납니다.",
      "색상을 직접 선택할 수는 없으며, 오늘 날짜에 따라 자동으로 하나의 색이 정해집니다.",
    ],
    faq: [
      { q: "색깔은 어떻게 결정되나요?", a: "오늘 날짜(연-월-일)를 숫자로 변환해 색상 목록 중 하나를 고르는 방식으로, 특정 색채심리학 공식이 아닌 재미 콘텐츠입니다." },
      { q: "매일 다른 색이 나오나요?", a: "네, 날짜가 바뀌면 새로운 색깔과 메시지가 나타납니다." },
      { q: "색상 풀에는 몇 가지 색이 준비되어 있나요?", a: "다양한 색상과 그에 어울리는 의미·조언 메시지가 미리 준비되어 있어, 날짜가 바뀔 때마다 그중 하나가 선택됩니다." },
      { q: "같은 날짜에 다른 사람이 확인해도 같은 색이 나오나요?", a: "네, 날짜만을 기준으로 결정되는 방식이라 같은 날짜에는 누가 확인하든 동일한 색과 메시지가 표시됩니다." },
      { q: "시간대에 따라 '오늘'이 다르게 적용되나요?", a: "네, 기기에 설정된 로컬 시간대를 기준으로 '오늘'을 판단하므로, 자정을 전후해 시간대가 다른 사용자는 서로 다른 날짜(색상)를 볼 수도 있습니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 색채심리학적 근거를 보장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Color of the Day Fortune",
    subtitle: "Discover a lucky color and its meaning for today, for fun, based on today's date.",
    checkBtn: "Reveal Today's Color",
    dateLabel: "Today's Date",
    colorNameLabel: "Today's Color",
    meaningLabel: "What It Means",
    adviceLabel: "Today's Advice",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Reveal Today's Color.\"",
      "A color calculated from today's date appears, along with its meaning and advice.",
      "Clicking again on the same day gives the same result; a new color appears the next day.",
      "You can't manually pick a color — one is automatically determined based on today's date.",
    ],
    faq: [
      { q: "How is the color decided?", a: "Today's date is converted to a number used to pick from a list of colors — this is entertainment content, not a formal color-psychology formula." },
      { q: "Does it change every day?", a: "Yes, a new color and message appear whenever the date changes." },
      { q: "How many colors are in the pool?", a: "A variety of colors, each with its own meaning and advice message, are pre-prepared, and one is selected whenever the date changes." },
      { q: "Will two different people see the same color on the same date?", a: "Yes, since the result depends only on the date, anyone checking on the same day sees the same color and message." },
      { q: "Does time zone affect what counts as 'today'?", a: "Yes, 'today' is determined by your device's local time zone, so around midnight, users in different time zones might see a different date (and color)." },
    ],
    disclaimer: "This content is for entertainment purposes and does not guarantee any color-psychology basis.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "今日のカラー運勢",
    subtitle: "今日の日付を基に、あなただけのラッキーカラーとその意味を楽しくお届けします。",
    checkBtn: "今日のカラーを確認する",
    dateLabel: "今日の日付",
    colorNameLabel: "今日の色",
    meaningLabel: "色の意味",
    adviceLabel: "今日のアドバイス",
    howTitle: "使用方法",
    howSteps: [
      "「今日のカラーを確認する」ボタンを押します。",
      "今日の日付から算出された色とその意味、アドバイスが表示されます。",
      "同じ日にもう一度押しても同じ結果になり、次の日には新しい色が表示されます。",
      "色を自分で選ぶことはできず、今日の日付に応じて自動的に1色が決まります。",
    ],
    faq: [
      { q: "色はどのように決まりますか？", a: "今日の日付（年-月-日）を数値に変換してカラーリストから1つを選ぶ方式で、特定の色彩心理学の公式ではなく娯楽コンテンツです。" },
      { q: "毎日違う色が出ますか？", a: "はい、日付が変わると新しい色とメッセージが表示されます。" },
      { q: "カラープールにはいくつの色が用意されていますか？", a: "様々な色と、それに合った意味・アドバイスメッセージがあらかじめ用意されており、日付が変わるたびにその中から1つが選ばれます。" },
      { q: "同じ日付でも別の人が確認したら違う色になりますか？", a: "いいえ、日付のみを基準に決まる方式のため、同じ日付であれば誰が確認しても同じ色とメッセージが表示されます。" },
      { q: "タイムゾーンによって「今日」の判定は変わりますか？", a: "はい、端末に設定されたローカルタイムゾーンを基準に「今日」が判定されるため、日付が変わる前後の時間帯では、タイムゾーンが異なるユーザー同士で異なる日付（色）が表示される場合があります。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、色彩心理学的根拠を保証するものではありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Fortuna del Color del Día",
    subtitle: "Descubre un color de la suerte y su significado para hoy, por diversión, según la fecha de hoy.",
    checkBtn: "Revelar el Color de Hoy",
    dateLabel: "Fecha de Hoy",
    colorNameLabel: "Color de Hoy",
    meaningLabel: "Qué Significa",
    adviceLabel: "Consejo de Hoy",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Revelar el Color de Hoy.\"",
      "Aparece un color calculado a partir de la fecha de hoy, junto con su significado y consejo.",
      "Al hacer clic de nuevo el mismo día obtendrás el mismo resultado; al día siguiente aparecerá un color nuevo.",
      "No puedes elegir un color manualmente — se determina automáticamente uno según la fecha de hoy.",
    ],
    faq: [
      { q: "¿Cómo se decide el color?", a: "La fecha de hoy se convierte en un número usado para elegir de una lista de colores; esto es contenido de entretenimiento, no una fórmula formal de psicología del color." },
      { q: "¿Cambia todos los días?", a: "Sí, aparece un nuevo color y mensaje cada vez que cambia la fecha." },
      { q: "¿Cuántos colores hay en el conjunto?", a: "Hay una variedad de colores preparados, cada uno con su propio significado y mensaje de consejo, y se elige uno cada vez que cambia la fecha." },
      { q: "¿Verán dos personas distintas el mismo color en la misma fecha?", a: "Sí, como el resultado depende solo de la fecha, cualquiera que lo consulte el mismo día ve el mismo color y mensaje." },
      { q: "¿Afecta la zona horaria a lo que cuenta como 'hoy'?", a: "Sí, 'hoy' se determina según la zona horaria local de tu dispositivo, así que cerca de la medianoche, usuarios en distintas zonas horarias podrían ver una fecha (y color) diferente." },
    ],
    disclaimer: "Este contenido es para entretenimiento y no garantiza ninguna base de psicología del color.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
