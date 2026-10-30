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
    ],
    faq: [
      { q: "색깔은 어떻게 결정되나요?", a: "오늘 날짜(연-월-일)를 숫자로 변환해 색상 목록 중 하나를 고르는 방식으로, 특정 색채심리학 공식이 아닌 재미 콘텐츠입니다." },
      { q: "매일 다른 색이 나오나요?", a: "네, 날짜가 바뀌면 새로운 색깔과 메시지가 나타납니다." },
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
    ],
    faq: [
      { q: "How is the color decided?", a: "Today's date is converted to a number used to pick from a list of colors — this is entertainment content, not a formal color-psychology formula." },
      { q: "Does it change every day?", a: "Yes, a new color and message appear whenever the date changes." },
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
    ],
    faq: [
      { q: "色はどのように決まりますか？", a: "今日の日付（年-月-日）を数値に変換してカラーリストから1つを選ぶ方式で、特定の色彩心理学の公式ではなく娯楽コンテンツです。" },
      { q: "毎日違う色が出ますか？", a: "はい、日付が変わると新しい色とメッセージが表示されます。" },
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
    ],
    faq: [
      { q: "¿Cómo se decide el color?", a: "La fecha de hoy se convierte en un número usado para elegir de una lista de colores; esto es contenido de entretenimiento, no una fórmula formal de psicología del color." },
      { q: "¿Cambia todos los días?", a: "Sí, aparece un nuevo color y mensaje cada vez que cambia la fecha." },
    ],
    disclaimer: "Este contenido es para entretenimiento y no garantiza ninguna base de psicología del color.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
