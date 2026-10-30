export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  yearLabel: string;
  checkBtn: string;
  animalLabel: string;
  fortuneLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "띠 운세 (간지)",
    subtitle: "태어난 연도를 입력하면 나의 띠와 오늘의 운세를 재미로 알려드립니다.",
    yearLabel: "태어난 연도",
    checkBtn: "띠 운세 확인하기",
    animalLabel: "나의 띠",
    fortuneLabel: "오늘의 운세",
    howTitle: "사용 방법",
    howSteps: [
      "태어난 연도를 입력합니다.",
      "\"띠 운세 확인하기\" 버튼을 누릅니다.",
      "12가지 띠 중 하나와 오늘 날짜를 반영한 운세 메시지가 표시됩니다.",
    ],
    faq: [
      { q: "띠는 어떻게 계산되나요?", a: "태어난 연도를 12로 나눈 나머지를 기준으로 쥐, 소, 호랑이 등 12가지 동물 중 하나를 결정합니다." },
      { q: "이 운세는 정식 명리학에 기반한 것인가요?", a: "아니요, 재미를 위한 콘텐츠로 간단한 연도 계산만 사용하며 정식 명리학적 근거는 없습니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 정식 명리학적 근거가 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Chinese Zodiac Fortune",
    subtitle: "Enter your birth year to see your Chinese zodiac animal and today's fortune, for fun.",
    yearLabel: "Birth Year",
    checkBtn: "Check My Fortune",
    animalLabel: "Your Zodiac Animal",
    fortuneLabel: "Today's Fortune",
    howTitle: "How to Use",
    howSteps: [
      "Enter your birth year.",
      "Click \"Check My Fortune.\"",
      "One of 12 zodiac animals appears along with a fortune message reflecting today's date.",
    ],
    faq: [
      { q: "How is the zodiac animal calculated?", a: "It's determined from the remainder of your birth year divided by 12, mapping to one of 12 animals like Rat, Ox, Tiger, and so on." },
      { q: "Is this based on formal astrology?", a: "No, it's entertainment content using a simple year calculation, without a formal astrological basis." },
    ],
    disclaimer: "This content is for entertainment purposes only and has no formal astrological basis.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "干支運勢",
    subtitle: "生まれた年を入力すると自分の干支と今日の運勢を楽しくお届けします。",
    yearLabel: "生まれた年",
    checkBtn: "干支運勢を確認する",
    animalLabel: "あなたの干支",
    fortuneLabel: "今日の運勢",
    howTitle: "使用方法",
    howSteps: [
      "生まれた年を入力します。",
      "「干支運勢を確認する」ボタンを押します。",
      "12種類の干支の1つと今日の日付を反映した運勢メッセージが表示されます。",
    ],
    faq: [
      { q: "干支はどのように計算されますか？", a: "生まれた年を12で割った余りを基準に、ねずみ、うし、とらなど12種類の動物のうち1つが決まります。" },
      { q: "この運勢は正式な命理学に基づいていますか？", a: "いいえ、娯楽目的のコンテンツで簡単な年数計算のみを使用し、正式な命理学的根拠はありません。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、正式な命理学的根拠はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Fortuna del Zodiaco Chino",
    subtitle: "Introduce tu año de nacimiento para ver tu animal del zodiaco chino y la fortuna de hoy, por diversión.",
    yearLabel: "Año de Nacimiento",
    checkBtn: "Ver mi Fortuna",
    animalLabel: "Tu Animal del Zodiaco",
    fortuneLabel: "Fortuna de Hoy",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu año de nacimiento.",
      "Haz clic en \"Ver mi Fortuna.\"",
      "Aparece uno de 12 animales del zodiaco junto con un mensaje de fortuna que refleja la fecha de hoy.",
    ],
    faq: [
      { q: "¿Cómo se calcula el animal del zodiaco?", a: "Se determina por el resto de dividir tu año de nacimiento entre 12, que corresponde a uno de 12 animales como Rata, Buey, Tigre, etc." },
      { q: "¿Esto se basa en astrología formal?", a: "No, es contenido de entretenimiento que usa un simple cálculo de año, sin base astrológica formal." },
    ],
    disclaimer: "Este contenido es solo para entretenimiento y no tiene base astrológica formal.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
