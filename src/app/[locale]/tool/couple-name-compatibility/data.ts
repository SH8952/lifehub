export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  name1Label: string;
  name2Label: string;
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
    title: "커플 이름 궁합 점수",
    subtitle: "두 사람의 이름을 입력하면 재미로 보는 궁합 점수를 알려드립니다.",
    name1Label: "첫 번째 이름",
    name2Label: "두 번째 이름",
    checkBtn: "궁합 확인하기",
    scoreLabel: "궁합 점수",
    messageLabel: "결과 메시지",
    howTitle: "사용 방법",
    howSteps: [
      "두 사람의 이름을 각각 입력합니다.",
      "\"궁합 확인하기\" 버튼을 누릅니다.",
      "0~100점 사이의 궁합 점수와 그에 맞는 메시지가 표시됩니다.",
    ],
    faq: [
      { q: "이 점수는 실제 궁합을 나타내나요?", a: "아니요, 두 이름의 글자를 조합한 계산식으로 산출되는 재미 콘텐츠이며 실제 관계나 운명과는 무관합니다." },
      { q: "이름 순서를 바꾸면 점수가 달라지나요?", a: "아니요, 두 이름의 조합을 기준으로 계산되므로 순서를 바꿔도 동일한 점수가 나옵니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 실제 관계의 궁합을 보장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Couple Name Compatibility",
    subtitle: "Enter two names to get a fun compatibility score.",
    name1Label: "First Name",
    name2Label: "Second Name",
    checkBtn: "Check Compatibility",
    scoreLabel: "Compatibility Score",
    messageLabel: "Result Message",
    howTitle: "How to Use",
    howSteps: [
      "Enter both names in the two input boxes.",
      "Click \"Check Compatibility.\"",
      "A score between 0 and 100 appears, along with a matching message.",
    ],
    faq: [
      { q: "Does this score reflect real compatibility?", a: "No, it's entertainment content calculated by combining the letters of both names, unrelated to actual relationships or fate." },
      { q: "Does swapping the name order change the score?", a: "No, the calculation is based on the combination of both names, so the score stays the same regardless of order." },
    ],
    disclaimer: "This content is for entertainment purposes only and does not reflect real relationship compatibility.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "カップル名前相性スコア",
    subtitle: "二人の名前を入力すると楽しい相性スコアをお届けします。",
    name1Label: "一人目の名前",
    name2Label: "二人目の名前",
    checkBtn: "相性を確認する",
    scoreLabel: "相性スコア",
    messageLabel: "結果メッセージ",
    howTitle: "使用方法",
    howSteps: [
      "二人の名前をそれぞれ入力します。",
      "「相性を確認する」ボタンを押します。",
      "0〜100点の相性スコアとそれに合ったメッセージが表示されます。",
    ],
    faq: [
      { q: "このスコアは実際の相性を示しますか？", a: "いいえ、二人の名前の文字を組み合わせた計算式で算出される娯楽コンテンツであり、実際の関係や運命とは無関係です。" },
      { q: "名前の順番を変えるとスコアが変わりますか？", a: "いいえ、二つの名前の組み合わせを基準に計算されるため、順番を変えても同じスコアになります。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、実際の関係の相性を保証するものではありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Compatibilidad de Nombres de Pareja",
    subtitle: "Introduce dos nombres para obtener una puntuación de compatibilidad divertida.",
    name1Label: "Primer Nombre",
    name2Label: "Segundo Nombre",
    checkBtn: "Ver Compatibilidad",
    scoreLabel: "Puntuación de Compatibilidad",
    messageLabel: "Mensaje del Resultado",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce ambos nombres en los dos cuadros.",
      "Haz clic en \"Ver Compatibilidad.\"",
      "Aparece una puntuación entre 0 y 100, junto con un mensaje acorde.",
    ],
    faq: [
      { q: "¿Esta puntuación refleja compatibilidad real?", a: "No, es contenido de entretenimiento calculado combinando las letras de ambos nombres, sin relación con relaciones reales o el destino." },
      { q: "¿Cambiar el orden de los nombres cambia la puntuación?", a: "No, el cálculo se basa en la combinación de ambos nombres, así que la puntuación es igual sin importar el orden." },
    ],
    disclaimer: "Este contenido es solo para entretenimiento y no refleja la compatibilidad real de una relación.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
