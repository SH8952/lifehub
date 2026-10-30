export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  birthLabel: string;
  checkBtn: string;
  typeLabel: string;
  traitsLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "생일로 보는 성격 유형",
    subtitle: "생일을 입력하면 12가지 성격 유형 중 하나를 재미로 알려드립니다.",
    birthLabel: "생년월일",
    checkBtn: "성격 유형 확인하기",
    typeLabel: "당신의 유형",
    traitsLabel: "주요 특징",
    howTitle: "사용 방법",
    howSteps: [
      "생년월일을 선택합니다.",
      "\"성격 유형 확인하기\" 버튼을 누릅니다.",
      "월과 일을 조합한 12가지 유형 중 하나와 그 특징이 표시됩니다.",
    ],
    faq: [
      { q: "이 유형 분류는 심리학적으로 검증된 것인가요?", a: "아니요, 생일의 월/일 숫자를 조합한 재미 콘텐츠이며 공식적인 심리검사가 아닙니다." },
      { q: "서양 별자리 운세와는 다른가요?", a: "네, 이 도구는 별자리가 아닌 생일 숫자 조합만으로 독자적인 12가지 유형을 분류하는 재미 콘텐츠입니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 심리학적·과학적 근거가 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Birthday Personality Type",
    subtitle: "Enter your birthday to discover one of 12 playful personality types.",
    birthLabel: "Date of Birth",
    checkBtn: "Check My Type",
    typeLabel: "Your Type",
    traitsLabel: "Key Traits",
    howTitle: "How to Use",
    howSteps: [
      "Select your date of birth.",
      "Click \"Check My Type.\"",
      "One of 12 types, based on your month and day, appears along with its traits.",
    ],
    faq: [
      { q: "Is this personality classification psychologically validated?", a: "No, it's entertainment content based on combining your birth month and day — not a formal psychological assessment." },
      { q: "Is this different from Western zodiac signs?", a: "Yes, this tool classifies 12 original types purely from your birth month/day numbers, unrelated to zodiac signs." },
    ],
    disclaimer: "This content is for entertainment purposes only and has no psychological or scientific basis.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "誕生日で見る性格タイプ",
    subtitle: "誕生日を入力すると12種類の性格タイプの1つを楽しく診断します。",
    birthLabel: "生年月日",
    checkBtn: "性格タイプを確認する",
    typeLabel: "あなたのタイプ",
    traitsLabel: "主な特徴",
    howTitle: "使用方法",
    howSteps: [
      "生年月日を選択します。",
      "「性格タイプを確認する」ボタンを押します。",
      "月と日を組み合わせた12種類のタイプの1つとその特徴が表示されます。",
    ],
    faq: [
      { q: "この性格分類は心理学的に検証されたものですか？", a: "いいえ、誕生日の月と日の数字を組み合わせた娯楽コンテンツであり、正式な心理検査ではありません。" },
      { q: "西洋の星座占いとは違いますか？", a: "はい、このツールは星座ではなく誕生日の数字の組み合わせだけで独自の12タイプを分類する娯楽コンテンツです。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、心理学的・科学的根拠はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Tipo de Personalidad por Fecha de Nacimiento",
    subtitle: "Introduce tu fecha de nacimiento para descubrir uno de 12 tipos de personalidad divertidos.",
    birthLabel: "Fecha de Nacimiento",
    checkBtn: "Ver mi Tipo",
    typeLabel: "Tu Tipo",
    traitsLabel: "Rasgos Principales",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona tu fecha de nacimiento.",
      "Haz clic en \"Ver mi Tipo.\"",
      "Aparece uno de 12 tipos, basado en tu mes y día, junto con sus rasgos.",
    ],
    faq: [
      { q: "¿Esta clasificación de personalidad está validada psicológicamente?", a: "No, es contenido de entretenimiento basado en combinar tu mes y día de nacimiento, no una evaluación psicológica formal." },
      { q: "¿Es diferente de los signos del zodiaco occidental?", a: "Sí, esta herramienta clasifica 12 tipos originales solo a partir de los números de tu mes/día de nacimiento, sin relación con el zodiaco." },
    ],
    disclaimer: "Este contenido es solo para entretenimiento y no tiene base psicológica ni científica.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
