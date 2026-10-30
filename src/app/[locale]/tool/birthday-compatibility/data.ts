export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  birth1Label: string;
  birth2Label: string;
  checkBtn: string;
  scoreLabel: string;
  messageLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "생일 궁합 계산기",
    subtitle: "두 사람의 생년월일을 입력하면 재미로 보는 궁합 점수를 계산해드립니다.",
    birth1Label: "첫 번째 생년월일",
    birth2Label: "두 번째 생년월일",
    checkBtn: "궁합 계산하기",
    scoreLabel: "궁합 점수",
    messageLabel: "결과 메시지",
    howTitle: "사용 방법",
    howSteps: [
      "두 사람의 생년월일을 각각 선택합니다.",
      "\"궁합 계산하기\" 버튼을 누릅니다.",
      "생년월일 숫자 조합을 기반으로 한 궁합 점수와 메시지가 표시됩니다.",
    ],
    faq: [
      { q: "이 궁합 점수는 사주나 운세와 관련이 있나요?", a: "아니요, 생년월일의 숫자를 조합한 계산식으로 산출되는 재미 콘텐츠이며 사주, 명리학과는 무관합니다." },
      { q: "이름 궁합과 생일 궁합은 다른가요?", a: "네, 두 도구는 서로 다른 입력값(이름 vs 생년월일)과 계산 방식을 사용하므로 결과가 다를 수 있습니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 실제 궁합이나 운세를 보장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Birthday Compatibility Calculator",
    subtitle: "Enter two birthdates to calculate a fun compatibility score.",
    birth1Label: "First Birthdate",
    birth2Label: "Second Birthdate",
    checkBtn: "Calculate Compatibility",
    scoreLabel: "Compatibility Score",
    messageLabel: "Result Message",
    howTitle: "How to Use",
    howSteps: [
      "Select both birthdates.",
      "Click \"Calculate Compatibility.\"",
      "A score and message based on the combination of both birthdates appears.",
    ],
    faq: [
      { q: "Is this score related to astrology or fortune-telling?", a: "No, it's entertainment content calculated by combining birthdate numbers, unrelated to astrology or fortune-telling systems." },
      { q: "Is this different from the name compatibility tool?", a: "Yes, the two tools use different inputs (names vs. birthdates) and calculations, so results can differ." },
    ],
    disclaimer: "This content is for entertainment purposes only and does not guarantee real compatibility or fortune.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "誕生日相性計算機",
    subtitle: "二人の生年月日を入力すると楽しい相性スコアを計算します。",
    birth1Label: "一人目の生年月日",
    birth2Label: "二人目の生年月日",
    checkBtn: "相性を計算する",
    scoreLabel: "相性スコア",
    messageLabel: "結果メッセージ",
    howTitle: "使用方法",
    howSteps: [
      "二人の生年月日をそれぞれ選択します。",
      "「相性を計算する」ボタンを押します。",
      "生年月日の数字の組み合わせに基づいた相性スコアとメッセージが表示されます。",
    ],
    faq: [
      { q: "この相性スコアは四柱推命や運勢と関係がありますか？", a: "いいえ、生年月日の数字を組み合わせた計算式で算出される娯楽コンテンツであり、四柱推命や命理学とは無関係です。" },
      { q: "名前相性と生日相性は違いますか？", a: "はい、2つのツールは異なる入力値（名前対生年月日）と計算方式を使用するため、結果が異なる場合があります。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、実際の相性や運勢を保証するものではありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Calculadora de Compatibilidad por Fecha de Nacimiento",
    subtitle: "Introduce dos fechas de nacimiento para calcular una puntuación de compatibilidad divertida.",
    birth1Label: "Primera Fecha de Nacimiento",
    birth2Label: "Segunda Fecha de Nacimiento",
    checkBtn: "Calcular Compatibilidad",
    scoreLabel: "Puntuación de Compatibilidad",
    messageLabel: "Mensaje del Resultado",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona ambas fechas de nacimiento.",
      "Haz clic en \"Calcular Compatibilidad.\"",
      "Aparece una puntuación y mensaje basados en la combinación de ambas fechas.",
    ],
    faq: [
      { q: "¿Esta puntuación está relacionada con la astrología o la adivinación?", a: "No, es contenido de entretenimiento calculado combinando números de fechas de nacimiento, sin relación con sistemas de astrología." },
      { q: "¿Es diferente de la herramienta de compatibilidad de nombres?", a: "Sí, las dos herramientas usan entradas diferentes (nombres vs. fechas de nacimiento) y cálculos distintos, por lo que los resultados pueden diferir." },
    ],
    disclaimer: "Este contenido es solo para entretenimiento y no garantiza compatibilidad real ni fortuna.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
