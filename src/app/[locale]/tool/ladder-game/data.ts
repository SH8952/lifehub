export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  participantCountLabel: string;
  participantNamesLabel: string;
  resultsLabel: string;
  participantPlaceholder: string;
  resultPlaceholder: string;
  generate: string;
  clickToReveal: string;
  revealAll: string;
  reset: string;
  finalResultPrefix: string;
  allResultsTitle: string;
  generateFirst: string;
  whyLadder: string;
  ladderExplanation: string;
  disclaimer: string;
  footer: string;
  faq: FAQ[];
}

export const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "사다리타기",
    subtitle: "참가자와 결과를 입력하고 사다리를 타며 랜덤으로 결과를 확인하세요",
    inputs: "설정",
    participantCountLabel: "참가자 수",
    participantNamesLabel: "참가자 이름",
    resultsLabel: "결과 항목",
    participantPlaceholder: "참가자",
    resultPlaceholder: "결과",
    generate: "사다리 생성",
    clickToReveal: "클릭해서 결과 보기",
    revealAll: "전체 결과 한번에 보기",
    reset: "다시 하기",
    finalResultPrefix: "님의 결과",
    allResultsTitle: "전체 결과",
    generateFirst: "먼저 '사다리 생성' 버튼을 눌러주세요",
    whyLadder: "사다리타기란?",
    ladderExplanation:
      "사다리타기는 여러 사람이 공평하게 역할이나 순서, 벌칙 등을 무작위로 정할 때 사용하는 대표적인 방법입니다. 참가자 수만큼 세로줄을 그리고 줄 사이에 무작위로 가로줄(다리)을 연결한 뒤, 각자 자신의 줄을 따라 내려가면서 가로줄을 만날 때마다 옆줄로 이동합니다. 이 도구는 매번 새로운 무작위 사다리를 생성하여 공정한 추첨을 도와줍니다.",
    disclaimer:
      "이 도구는 재미와 공정한 무작위 선택을 위한 용도로만 사용해 주세요. 결과는 Math.random()을 이용한 무작위 생성이며, 법적·금전적 의사결정의 근거로 사용할 수 없습니다.",
    footer: "LifeHub 도구 모음",
    faq: [
      {
        q: "사다리는 어떻게 생성되나요?",
        a: "참가자 수만큼 세로줄을 만들고, 각 줄 사이에 무작위로 가로줄(연결선)을 생성합니다. 같은 가로줄에서 두 개의 연결선이 같은 세로줄을 공유하지 않도록 하여 항상 1:1로 결과가 매칭되도록 설계되었습니다.",
      },
      {
        q: "결과가 겹칠 수 있나요?",
        a: "사다리 구조상 각 참가자는 서로 다른 결과 칸에 도착하도록 보장됩니다(1:1 매칭). 다만 결과 항목의 텍스트 내용이 같다면(예: '꽝'을 여러 개 입력한 경우) 같은 문구가 여러 참가자에게 나타날 수 있습니다.",
      },
      {
        q: "같은 사다리로 다시 할 수 있나요?",
        a: "'사다리 생성' 버튼을 누르면 매번 새로운 무작위 사다리가 만들어집니다. 같은 사다리를 재사용하는 기능은 제공하지 않습니다.",
      },
    ],
  },
  en: {
    title: "Ladder Game",
    subtitle: "Enter participants and results, then climb the ladder for a random outcome",
    inputs: "Settings",
    participantCountLabel: "Number of participants",
    participantNamesLabel: "Participant names",
    resultsLabel: "Result items",
    participantPlaceholder: "Participant",
    resultPlaceholder: "Result",
    generate: "Generate ladder",
    clickToReveal: "Click to reveal",
    revealAll: "Reveal all results",
    reset: "Start over",
    finalResultPrefix: "'s result",
    allResultsTitle: "All results",
    generateFirst: "Please click 'Generate ladder' first",
    whyLadder: "What is a ladder game?",
    ladderExplanation:
      "A ladder game (also known as Amidakuji) is a popular way to randomly and fairly assign roles, order, or penalties among a group. A vertical line is drawn for each participant, and random horizontal rungs connect adjacent lines. Each participant follows their line downward, switching lanes whenever they hit a rung. This tool generates a brand-new random ladder each time to help you make a fair random pick.",
    disclaimer:
      "This tool is intended for fun and fair random selection only. Results are generated using Math.random() and should not be used as the basis for legal or financial decisions.",
    footer: "LifeHub Tools",
    faq: [
      {
        q: "How is the ladder generated?",
        a: "A vertical line is created for each participant, and random horizontal rungs are added between adjacent lines. No two rungs in the same row share a line, which guarantees a one-to-one mapping between participants and results.",
      },
      {
        q: "Can results overlap?",
        a: "The ladder structure guarantees each participant lands on a distinct result slot (one-to-one mapping). However, if you enter the same text for multiple result items (e.g. 'none' several times), the same text may appear for multiple participants.",
      },
      {
        q: "Can I reuse the same ladder?",
        a: "Clicking 'Generate ladder' always creates a brand-new random ladder. Reusing a previous ladder is not supported.",
      },
    ],
  },
  ja: {
    title: "あみだくじ",
    subtitle: "参加者と結果を入力して、あみだくじでランダムに結果を確認しましょう",
    inputs: "設定",
    participantCountLabel: "参加者数",
    participantNamesLabel: "参加者名",
    resultsLabel: "結果項目",
    participantPlaceholder: "参加者",
    resultPlaceholder: "結果",
    generate: "あみだくじ生成",
    clickToReveal: "クリックして結果を見る",
    revealAll: "全ての結果を見る",
    reset: "もう一度",
    finalResultPrefix: "さんの結果",
    allResultsTitle: "全体の結果",
    generateFirst: "まず「あみだくじ生成」ボタンを押してください",
    whyLadder: "あみだくじとは?",
    ladderExplanation:
      "あみだくじは、複数の人の役割や順番、罰ゲームなどを公平にランダムで決める代表的な方法です。参加者数分の縦線を引き、縦線の間にランダムに横線(橋)をつなぎ、各自が自分の縦線に沿って下り、横線に出会うたびに隣の線に移動します。このツールは毎回新しいランダムなあみだくじを生成し、公正な抽選を助けます。",
    disclaimer:
      "このツールは娯楽目的および公正なランダム選択のためにのみご利用ください。結果はMath.random()によるランダム生成であり、法的・金銭的な意思決定の根拠として使用できません。",
    footer: "LifeHub ツール集",
    faq: [
      {
        q: "あみだくじはどのように生成されますか?",
        a: "参加者数分の縦線を作り、各線の間にランダムな横線(接続線)を生成します。同じ行で2つの横線が同じ縦線を共有しないように設計されているため、常に1対1で結果がマッチングされます。",
      },
      {
        q: "結果が重なることはありますか?",
        a: "あみだくじの構造上、各参加者は異なる結果枠に到着することが保証されます(1対1マッチング)。ただし結果項目のテキスト内容が同じ場合(例:「ハズレ」を複数入力した場合)、同じ文言が複数の参加者に表示されることがあります。",
      },
      {
        q: "同じあみだくじを再利用できますか?",
        a: "「あみだくじ生成」ボタンを押すたびに新しいランダムなあみだくじが作られます。同じあみだくじを再利用する機能は提供していません。",
      },
    ],
  },
  es: {
    title: "Juego de la Escalera",
    subtitle: "Introduce participantes y resultados, luego sube la escalera para un resultado aleatorio",
    inputs: "Configuración",
    participantCountLabel: "Número de participantes",
    participantNamesLabel: "Nombres de participantes",
    resultsLabel: "Elementos de resultado",
    participantPlaceholder: "Participante",
    resultPlaceholder: "Resultado",
    generate: "Generar escalera",
    clickToReveal: "Clic para revelar",
    revealAll: "Revelar todos los resultados",
    reset: "Empezar de nuevo",
    finalResultPrefix: ": resultado",
    allResultsTitle: "Todos los resultados",
    generateFirst: "Primero haz clic en 'Generar escalera'",
    whyLadder: "¿Qué es el juego de la escalera?",
    ladderExplanation:
      "El juego de la escalera (Amidakuji) es una forma popular de asignar roles, orden o penalizaciones de manera aleatoria y justa entre un grupo. Se dibuja una línea vertical para cada participante y se conectan líneas horizontales aleatorias entre líneas adyacentes. Cada participante sigue su línea hacia abajo, cambiando de carril cada vez que encuentra un peldaño. Esta herramienta genera una escalera aleatoria completamente nueva cada vez para ayudarte a hacer una selección aleatoria justa.",
    disclaimer:
      "Esta herramienta está destinada únicamente a fines de entretenimiento y selección aleatoria justa. Los resultados se generan con Math.random() y no deben usarse como base para decisiones legales o financieras.",
    footer: "Herramientas LifeHub",
    faq: [
      {
        q: "¿Cómo se genera la escalera?",
        a: "Se crea una línea vertical para cada participante y se añaden peldaños horizontales aleatorios entre líneas adyacentes. Dos peldaños en la misma fila nunca comparten una línea, lo que garantiza una correspondencia uno a uno entre participantes y resultados.",
      },
      {
        q: "¿Pueden superponerse los resultados?",
        a: "La estructura de la escalera garantiza que cada participante llegue a una casilla de resultado distinta (correspondencia uno a uno). Sin embargo, si introduces el mismo texto en varios elementos de resultado (por ejemplo, 'nada' varias veces), ese mismo texto puede aparecer para varios participantes.",
      },
      {
        q: "¿Puedo reutilizar la misma escalera?",
        a: "Al hacer clic en 'Generar escalera' siempre se crea una escalera aleatoria completamente nueva. No se admite reutilizar una escalera anterior.",
      },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
