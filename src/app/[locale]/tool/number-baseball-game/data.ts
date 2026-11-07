export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  digitsLabel: string;
  startBtn: string;
  guessPlaceholder: string;
  guessBtn: string;
  attemptsLabel: string;
  historyLabel: string;
  strikeLabel: string;
  ballLabel: string;
  winMessage: string;
  errorInvalid: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "숫자 야구 게임 (업다운)",
    subtitle: "컴퓨터가 정한 중복 없는 숫자를 추리해서 맞춰보세요. 스트라이크와 볼 힌트를 활용해 보세요!",
    digitsLabel: "자릿수",
    startBtn: "새 게임 시작",
    guessPlaceholder: "숫자를 입력하세요",
    guessBtn: "추리하기",
    attemptsLabel: "시도 횟수: {count}",
    historyLabel: "기록",
    strikeLabel: "스트라이크",
    ballLabel: "볼",
    winMessage: "정답입니다! {count}번 시도로 맞췄습니다.",
    errorInvalid: "자릿수에 맞는 숫자를 입력하고, 같은 숫자를 반복하지 마세요.",
    howTitle: "사용 방법",
    howSteps: [
      "자릿수(3자리 또는 4자리)를 선택하고 \"새 게임 시작\"을 누릅니다.",
      "컴퓨터가 서로 다른 숫자로 구성된 비밀 숫자를 정합니다.",
      "숫자를 입력해 추리하면 자릿값과 숫자가 모두 맞는 \"스트라이크\", 숫자만 맞는 \"볼\" 개수가 표시됩니다.",
      "모든 자리가 스트라이크가 되면 게임이 끝납니다.",
    ],
    faq: [
      { q: "스트라이크와 볼은 무슨 뜻인가요?", a: "스트라이크는 숫자와 위치가 모두 맞은 경우, 볼은 숫자는 맞지만 위치가 다른 경우를 의미합니다." },
      { q: "같은 숫자가 중복될 수 있나요?", a: "아니요, 비밀 숫자는 서로 다른 숫자로만 구성되며 추리할 때도 중복 없는 숫자를 입력해야 합니다." },
    ],
    disclaimer: "이 게임은 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Number Baseball Game (Up & Down)",
    subtitle: "Guess the computer's secret number with no repeated digits, using strike and ball hints!",
    digitsLabel: "Number of Digits",
    startBtn: "Start New Game",
    guessPlaceholder: "Enter your guess",
    guessBtn: "Guess",
    attemptsLabel: "Attempts: {count}",
    historyLabel: "History",
    strikeLabel: "Strike",
    ballLabel: "Ball",
    winMessage: "Correct! You got it in {count} attempts.",
    errorInvalid: "Enter a number matching the digit count with no repeated digits.",
    howTitle: "How to Use",
    howSteps: [
      "Choose the digit count (3 or 4) and click \"Start New Game.\"",
      "The computer picks a secret number with all different digits.",
      "Enter a guess to see how many \"Strikes\" (right digit, right position) and \"Balls\" (right digit, wrong position) you got.",
      "The game ends when all digits are strikes.",
    ],
    faq: [
      { q: "What do Strike and Ball mean?", a: "A Strike means the digit and position are both correct; a Ball means the digit is correct but in the wrong position." },
      { q: "Can digits repeat?", a: "No, the secret number always has all unique digits, and your guess should too." },
    ],
    disclaimer: "This game runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "数字野球ゲーム（アップダウン）",
    subtitle: "コンピュータが決めた重複のない数字を推理して当ててみましょう。ストライクとボールのヒントで推理しましょう！",
    digitsLabel: "桁数",
    startBtn: "新しいゲームを始める",
    guessPlaceholder: "数字を入力してください",
    guessBtn: "推理する",
    attemptsLabel: "試行回数：{count}",
    historyLabel: "履歴",
    strikeLabel: "ストライク",
    ballLabel: "ボール",
    winMessage: "正解です！{count}回の試行で当てました。",
    errorInvalid: "桁数に合った数字を入力し、同じ数字を繰り返さないでください。",
    howTitle: "使用方法",
    howSteps: [
      "桁数（3桁または4桁）を選択し「新しいゲームを始める」を押します。",
      "コンピュータが全て異なる数字で構成された秘密の数字を決めます。",
      "数字を入力して推理すると、桁と数字が両方正しい「ストライク」、数字だけ正しい「ボール」の数が表示されます。",
      "すべての桁がストライクになるとゲームが終わります。",
    ],
    faq: [
      { q: "ストライクとボールは何を意味しますか？", a: "ストライクは数字と位置が両方正しい場合、ボールは数字は合っているが位置が違う場合を意味します。" },
      { q: "同じ数字が重複することはありますか？", a: "いいえ、秘密の数字は全て異なる数字で構成され、推理する際も重複のない数字を入力する必要があります。" },
    ],
    disclaimer: "このゲームはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Juego de Béisbol Numérico (Arriba y Abajo)",
    subtitle: "¡Adivina el número secreto de la computadora (sin dígitos repetidos) usando pistas de strike y ball!",
    digitsLabel: "Número de Dígitos",
    startBtn: "Comenzar Nuevo Juego",
    guessPlaceholder: "Introduce tu suposición",
    guessBtn: "Adivinar",
    attemptsLabel: "Intentos: {count}",
    historyLabel: "Historial",
    strikeLabel: "Strike",
    ballLabel: "Ball",
    winMessage: "¡Correcto! Lo lograste en {count} intentos.",
    errorInvalid: "Introduce un número con la cantidad de dígitos correcta y sin repetir.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige la cantidad de dígitos (3 o 4) y haz clic en \"Comenzar Nuevo Juego.\"",
      "La computadora elige un número secreto con dígitos todos diferentes.",
      "Introduce una suposición para ver cuántos \"Strikes\" (dígito y posición correctos) y \"Balls\" (dígito correcto, posición incorrecta) obtuviste.",
      "El juego termina cuando todos los dígitos son strikes.",
    ],
    faq: [
      { q: "¿Qué significan Strike y Ball?", a: "Un Strike significa que el dígito y la posición son correctos; un Ball significa que el dígito es correcto pero en la posición equivocada." },
      { q: "¿Pueden repetirse los dígitos?", a: "No, el número secreto siempre tiene dígitos únicos, y tu suposición también debe tenerlos." },
    ],
    disclaimer: "Este juego funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
