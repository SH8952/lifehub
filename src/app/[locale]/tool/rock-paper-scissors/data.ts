export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  rock: string;
  paper: string;
  scissors: string;
  yourChoiceLabel: string;
  computerChoiceLabel: string;
  resultWin: string;
  resultLose: string;
  resultDraw: string;
  scoreLabel: string;
  resetBtn: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "가위바위보 vs 컴퓨터",
    subtitle: "컴퓨터와 가위바위보 대결을 하고 승률을 기록해보세요.",
    rock: "바위",
    paper: "보",
    scissors: "가위",
    yourChoiceLabel: "나의 선택",
    computerChoiceLabel: "컴퓨터의 선택",
    resultWin: "승리!",
    resultLose: "패배",
    resultDraw: "무승부",
    scoreLabel: "승 {wins} / 패 {losses} / 무 {draws}",
    resetBtn: "기록 초기화",
    howTitle: "사용 방법",
    howSteps: [
      "바위, 보, 가위 중 하나를 선택합니다.",
      "컴퓨터도 즉시 무작위로 선택하고 승패가 바로 표시됩니다.",
      "계속 플레이하면 승/패/무 기록이 누적되어 표시됩니다.",
    ],
    faq: [
      { q: "컴퓨터는 어떤 패턴으로 선택하나요?", a: "매번 완전히 무작위로 선택하며 특정 패턴이나 전략은 없습니다." },
      { q: "기록은 어디에 저장되나요?", a: "브라우저 메모리에만 저장되며 페이지를 새로고침하면 초기화됩니다." },
    ],
    disclaimer: "이 게임은 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Rock Paper Scissors vs Computer",
    subtitle: "Play rock-paper-scissors against the computer and track your win rate.",
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors",
    yourChoiceLabel: "Your Choice",
    computerChoiceLabel: "Computer's Choice",
    resultWin: "You Win!",
    resultLose: "You Lose",
    resultDraw: "Draw",
    scoreLabel: "W {wins} / L {losses} / D {draws}",
    resetBtn: "Reset Score",
    howTitle: "How to Use",
    howSteps: [
      "Choose Rock, Paper, or Scissors.",
      "The computer picks randomly and the result is shown instantly.",
      "Keep playing to build up your win/loss/draw record.",
    ],
    faq: [
      { q: "Does the computer follow a pattern?", a: "No, it chooses completely at random each time with no pattern or strategy." },
      { q: "Where is the score saved?", a: "Only in browser memory for this session — it resets when you refresh the page." },
    ],
    disclaimer: "This game runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "じゃんけん vs コンピュータ",
    subtitle: "コンピュータとじゃんけん対決をして勝率を記録しましょう。",
    rock: "グー（石）",
    paper: "パー（紙）",
    scissors: "チョキ（ハサミ）",
    yourChoiceLabel: "あなたの選択",
    computerChoiceLabel: "コンピュータの選択",
    resultWin: "勝利！",
    resultLose: "敗北",
    resultDraw: "引き分け",
    scoreLabel: "勝{wins} / 敗{losses} / 分{draws}",
    resetBtn: "記録をリセット",
    howTitle: "使用方法",
    howSteps: [
      "グー、パー、チョキのいずれかを選択します。",
      "コンピュータも即座にランダムに選び、勝敗がすぐに表示されます。",
      "続けてプレイすると勝ち/負け/引き分けの記録が累積して表示されます。",
    ],
    faq: [
      { q: "コンピュータはどのようなパターンで選びますか？", a: "毎回完全にランダムに選択し、特定のパターンや戦略はありません。" },
      { q: "記録はどこに保存されますか？", a: "ブラウザのメモリにのみ保存され、ページを更新するとリセットされます。" },
    ],
    disclaimer: "このゲームはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Piedra, Papel o Tijeras vs la Computadora",
    subtitle: "Juega piedra, papel o tijeras contra la computadora y registra tu tasa de victorias.",
    rock: "Piedra",
    paper: "Papel",
    scissors: "Tijeras",
    yourChoiceLabel: "Tu Elección",
    computerChoiceLabel: "Elección de la Computadora",
    resultWin: "¡Ganaste!",
    resultLose: "Perdiste",
    resultDraw: "Empate",
    scoreLabel: "G {wins} / P {losses} / E {draws}",
    resetBtn: "Reiniciar Puntuación",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige Piedra, Papel o Tijeras.",
      "La computadora elige al azar y el resultado se muestra al instante.",
      "Sigue jugando para acumular tu registro de victorias/derrotas/empates.",
    ],
    faq: [
      { q: "¿La computadora sigue un patrón?", a: "No, elige completamente al azar cada vez, sin patrón ni estrategia." },
      { q: "¿Dónde se guarda la puntuación?", a: "Solo en la memoria del navegador durante esta sesión; se reinicia al actualizar la página." },
    ],
    disclaimer: "Este juego funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
