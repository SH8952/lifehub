export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  namesLabel: string;
  placeholder: string;
  teamCountLabel: string;
  divideButton: string;
  teamLabel: string;
  needMoreNames: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "랜덤 팀 나누기",
    subtitle: "이름 목록을 입력하면 원하는 팀 수로 무작위로 공평하게 나눠줍니다.",
    namesLabel: "이름 목록 (한 줄에 한 명씩)",
    placeholder: "홍길동\\n김철수\\n이영희\\n...",
    teamCountLabel: "팀 개수",
    divideButton: "팀 나누기",
    teamLabel: "팀",
    needMoreNames: "팀 수보다 많은 이름을 입력해주세요.",
    howTitle: "사용 방법",
    howSteps: [
      "이름 목록을 한 줄에 한 명씩 입력합니다.",
      "나누고 싶은 팀 개수를 선택합니다.",
      "'팀 나누기' 버튼을 누르면 무작위로 공평하게 배분된 팀 목록이 나타납니다.",
    ],
    faq: [
      { q: "인원이 팀 수로 나누어 떨어지지 않으면?", a: "남는 인원은 앞쪽 팀부터 순서대로 1명씩 추가로 배정되어 최대한 균등하게 나뉩니다." },
      { q: "다시 나누면 결과가 바뀌나요?", a: "네, 매번 새롭게 무작위로 섞어서 나누므로 버튼을 다시 누르면 다른 결과가 나올 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 입력한 이름을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Random Team Divider",
    subtitle: "Enter a list of names and randomly split them into the number of teams you want.",
    namesLabel: "Name List (one per line)",
    placeholder: "Alice\\nBob\\nCarol\\n...",
    teamCountLabel: "Number of Teams",
    divideButton: "Divide Teams",
    teamLabel: "Team",
    needMoreNames: "Please enter more names than the number of teams.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the names, one per line.",
      "Select how many teams you want.",
      "Press 'Divide Teams' to see a randomly and evenly distributed team list.",
    ],
    faq: [
      { q: "What if the count doesn't divide evenly?", a: "Any remainder is distributed one by one starting from the first team, keeping teams as even as possible." },
      { q: "Does the result change if I divide again?", a: "Yes, each click reshuffles randomly, so pressing the button again may give a different result." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your names on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "ランダムチーム分けツール",
    subtitle: "名前のリストを入力すると、希望のチーム数にランダムかつ公平に分けます。",
    namesLabel: "名前リスト（1行に1人）",
    placeholder: "田中\\n佐藤\\n鈴木\\n...",
    teamCountLabel: "チーム数",
    divideButton: "チーム分け",
    teamLabel: "チーム",
    needMoreNames: "チーム数より多くの名前を入力してください。",
    howTitle: "使用方法",
    howSteps: [
      "名前のリストを1行に1人ずつ入力します。",
      "分けたいチーム数を選択します。",
      "「チーム分け」ボタンを押すと、ランダムかつ公平に配分されたチームリストが表示されます。",
    ],
    faq: [
      { q: "人数がチーム数で割り切れない場合は？", a: "余った人数は前のチームから順に1人ずつ追加で割り当てられ、できる限り均等に分けられます。" },
      { q: "再度分けると結果は変わりますか？", a: "はい、毎回新しくランダムにシャッフルして分けるため、ボタンを再度押すと異なる結果になることがあります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、入力した名前をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Divisor Aleatorio de Equipos",
    subtitle: "Introduce una lista de nombres y divídelos aleatoriamente en el número de equipos que quieras.",
    namesLabel: "Lista de Nombres (uno por línea)",
    placeholder: "Ana\\nBruno\\nCarlos\\n...",
    teamCountLabel: "Número de Equipos",
    divideButton: "Dividir Equipos",
    teamLabel: "Equipo",
    needMoreNames: "Introduce más nombres que el número de equipos.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce los nombres, uno por línea.",
      "Selecciona cuántos equipos quieres.",
      "Pulsa 'Dividir Equipos' para ver una lista distribuida de forma aleatoria y equitativa.",
    ],
    faq: [
      { q: "¿Qué pasa si el número no se divide uniformemente?", a: "El resto se distribuye uno por uno comenzando por el primer equipo, manteniéndolos lo más equilibrados posible." },
      { q: "¿Cambia el resultado si divido de nuevo?", a: "Sí, cada clic reorganiza aleatoriamente, así que al pulsar de nuevo puede salir un resultado distinto." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tus nombres en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
