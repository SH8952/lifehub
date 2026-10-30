export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  startBtn: string;
  questionProgress: string;
  resultTitle: string;
  restartBtn: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "MBTI 간이 테스트",
    subtitle: "8개의 간단한 질문으로 나의 MBTI 유형을 재미로 알아봅니다. (정식 검사가 아닌 간이 버전입니다)",
    startBtn: "테스트 시작하기",
    questionProgress: "질문 {current} / {total}",
    resultTitle: "당신의 간이 MBTI 유형은",
    restartBtn: "다시 테스트하기",
    howTitle: "사용 방법",
    howSteps: [
      "\"테스트 시작하기\" 버튼을 눌러 8개 질문에 순서대로 답합니다.",
      "각 질문마다 더 가깝게 느껴지는 선택지를 고릅니다.",
      "마지막 질문을 마치면 4글자 유형과 각 알파벳의 간단한 설명이 표시됩니다.",
    ],
    faq: [
      { q: "이 테스트가 정식 MBTI 검사와 동일한가요?", a: "아니요, 8개의 간단한 질문만으로 구성된 재미용 간이 버전입니다. 정확한 결과를 원하신다면 공식 MBTI 검사 기관을 이용하세요." },
      { q: "결과가 매번 똑같이 나오나요?", a: "같은 질문에 같은 답을 선택하면 항상 같은 유형이 나옵니다. 결과는 선택한 답변 조합에 따라 결정됩니다." },
    ],
    disclaimer: "이 테스트는 재미를 위한 간이 버전으로 공식 심리검사를 대체할 수 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Simple MBTI Test",
    subtitle: "Discover your MBTI type for fun with 8 simple questions. (A casual version, not an official test.)",
    startBtn: "Start Test",
    questionProgress: "Question {current} of {total}",
    resultTitle: "Your Simple MBTI Type Is",
    restartBtn: "Retake Test",
    howTitle: "How to Use",
    howSteps: [
      "Click \"Start Test\" and answer 8 questions in order.",
      "For each question, pick the option that feels closer to you.",
      "After the last question, your 4-letter type appears with a brief description of each letter.",
    ],
    faq: [
      { q: "Is this the same as an official MBTI assessment?", a: "No, this is a casual version with just 8 simple questions for fun. For accurate results, please use an official MBTI testing provider." },
      { q: "Will I get the same result every time?", a: "Yes, if you choose the same answers to the same questions, you'll always get the same type — the result is fully determined by your answer combination." },
    ],
    disclaimer: "This is a casual version for entertainment and cannot replace an official psychological assessment.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "簡易MBTIテスト",
    subtitle: "8つの簡単な質問で自分のMBTIタイプを楽しく診断します。（正式な検査ではない簡易版です）",
    startBtn: "テストを始める",
    questionProgress: "質問 {current} / {total}",
    resultTitle: "あなたの簡易MBTIタイプは",
    restartBtn: "もう一度テストする",
    howTitle: "使用方法",
    howSteps: [
      "「テストを始める」ボタンを押して8つの質問に順番に答えます。",
      "各質問でより自分に近いと感じる選択肢を選びます。",
      "最後の質問が終わると4文字のタイプと各アルファベットの簡単な説明が表示されます。",
    ],
    faq: [
      { q: "このテストは正式なMBTI検査と同じですか？", a: "いいえ、8つの簡単な質問だけで構成された娯楽用の簡易版です。正確な結果を希望する場合は正式なMBTI検査機関をご利用ください。" },
      { q: "結果は毎回同じになりますか？", a: "同じ質問に同じ答えを選べば常に同じタイプになります。結果は選択した回答の組み合わせによって決まります。" },
    ],
    disclaimer: "このテストは娯楽用の簡易版であり、正式な心理検査の代わりにはなりません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Prueba Rápida de MBTI",
    subtitle: "Descubre tu tipo MBTI por diversión con 8 preguntas simples. (Una versión casual, no una prueba oficial.)",
    startBtn: "Comenzar Prueba",
    questionProgress: "Pregunta {current} de {total}",
    resultTitle: "Tu Tipo MBTI Simple Es",
    restartBtn: "Repetir Prueba",
    howTitle: "Cómo Usar",
    howSteps: [
      "Haz clic en \"Comenzar Prueba\" y responde 8 preguntas en orden.",
      "En cada pregunta, elige la opción que sientas más cercana a ti.",
      "Después de la última pregunta, aparece tu tipo de 4 letras con una breve descripción de cada letra.",
    ],
    faq: [
      { q: "¿Esto es lo mismo que una evaluación MBTI oficial?", a: "No, esta es una versión casual con solo 8 preguntas simples por diversión. Para resultados precisos, usa un proveedor oficial de pruebas MBTI." },
      { q: "¿Obtendré el mismo resultado cada vez?", a: "Sí, si eliges las mismas respuestas a las mismas preguntas, siempre obtendrás el mismo tipo: el resultado está completamente determinado por la combinación de tus respuestas." },
    ],
    disclaimer: "Esta es una versión casual para entretenimiento y no puede reemplazar una evaluación psicológica oficial.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
