export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  nameLabel: string;
  placeholder: string;
  checkBtn: string;
  strokeLabel: string;
  fortuneLabel: string;
  luckyColorLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이름 획수로 보는 운세",
    subtitle: "이름의 글자 수를 재미로 분석해서 오늘의 운세 메시지를 알려드립니다. (재미로 보는 콘텐츠입니다)",
    nameLabel: "이름 입력",
    placeholder: "예: 홍길동",
    checkBtn: "운세 확인하기",
    strokeLabel: "계산된 획수 지수",
    fortuneLabel: "오늘의 운세",
    luckyColorLabel: "행운의 색",
    howTitle: "사용 방법",
    howSteps: [
      "이름을 입력창에 입력합니다.",
      "\"운세 확인하기\" 버튼을 누르면 이름 글자들을 기반으로 계산된 지수와 운세 메시지가 표시됩니다.",
      "매일 같은 이름을 입력해도 날짜에 따라 다른 결과를 볼 수 있습니다.",
    ],
    faq: [
      { q: "이 운세는 과학적으로 검증된 것인가요?", a: "아니요, 이 도구는 이름의 글자 수를 활용한 재미 콘텐츠로 과학적 근거가 없습니다. 가볍게 즐기는 용도로만 이용해주세요." },
      { q: "같은 이름이면 매일 같은 결과가 나오나요?", a: "오늘 날짜와 이름을 함께 반영하여 계산하므로, 매일 다른 운세 메시지를 볼 수 있습니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 과학적·점술적 근거가 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Name Stroke Fortune",
    subtitle: "A fun analysis of your name that reveals a playful fortune message. (For entertainment only)",
    nameLabel: "Enter Your Name",
    placeholder: "e.g. John",
    checkBtn: "Check My Fortune",
    strokeLabel: "Calculated Stroke Index",
    fortuneLabel: "Today's Fortune",
    luckyColorLabel: "Lucky Color",
    howTitle: "How to Use",
    howSteps: [
      "Type your name into the input box.",
      "Click \"Check My Fortune\" to see an index calculated from your name's characters along with a fortune message.",
      "The result changes by date, so the same name can give different results on different days.",
    ],
    faq: [
      { q: "Is this fortune scientifically validated?", a: "No, this is purely entertainment content based on your name's characters, with no scientific basis. Please enjoy it lightly." },
      { q: "Will the same name give the same result every day?", a: "The calculation also factors in today's date, so the message can change from day to day even with the same name." },
    ],
    disclaimer: "This content is for entertainment purposes only and has no scientific or divinatory basis.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "名前の画数で見る運勢",
    subtitle: "名前の文字数を楽しく分析して今日の運勢メッセージをお届けします。（娯楽コンテンツです）",
    nameLabel: "名前を入力",
    placeholder: "例：田中",
    checkBtn: "運勢を確認する",
    strokeLabel: "算出された画数指数",
    fortuneLabel: "今日の運勢",
    luckyColorLabel: "ラッキーカラー",
    howTitle: "使用方法",
    howSteps: [
      "入力欄に名前を入力します。",
      "「運勢を確認する」ボタンを押すと、名前の文字から算出された指数と運勢メッセージが表示されます。",
      "同じ名前でも日付によって異なる結果が表示されます。",
    ],
    faq: [
      { q: "この運勢は科学的に検証されたものですか？", a: "いいえ、このツールは名前の文字数を活用した娯楽コンテンツで、科学的根拠はありません。気軽にお楽しみください。" },
      { q: "同じ名前なら毎日同じ結果になりますか？", a: "今日の日付と名前を組み合わせて計算するため、毎日異なる運勢メッセージが表示されます。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、科学的・占術的根拠はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Fortuna por Trazos del Nombre",
    subtitle: "Un análisis divertido de tu nombre que revela un mensaje de fortuna. (Solo para entretenimiento)",
    nameLabel: "Introduce tu Nombre",
    placeholder: "p. ej. María",
    checkBtn: "Ver mi Fortuna",
    strokeLabel: "Índice de Trazos Calculado",
    fortuneLabel: "Fortuna de Hoy",
    luckyColorLabel: "Color de la Suerte",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe tu nombre en el cuadro de entrada.",
      "Haz clic en \"Ver mi Fortuna\" para ver un índice calculado a partir de los caracteres de tu nombre junto con un mensaje de fortuna.",
      "El resultado cambia según la fecha, así que el mismo nombre puede dar resultados distintos en días diferentes.",
    ],
    faq: [
      { q: "¿Esta fortuna está científicamente validada?", a: "No, este es contenido puramente de entretenimiento basado en los caracteres de tu nombre, sin base científica. Disfrútalo con ligereza." },
      { q: "¿El mismo nombre da el mismo resultado todos los días?", a: "El cálculo también considera la fecha de hoy, así que el mensaje puede cambiar día a día incluso con el mismo nombre." },
    ],
    disclaimer: "Este contenido es solo para entretenimiento y no tiene base científica ni adivinatoria.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
