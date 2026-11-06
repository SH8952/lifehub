export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  diceCountLabel: string;
  rollBtn: string;
  resultLabel: string;
  totalLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "주사위 굴리기 (1~6개 동시 굴림)",
    subtitle: "원하는 개수의 주사위를 한 번에 굴려 결과와 합계를 확인하세요.",
    diceCountLabel: "주사위 개수",
    rollBtn: "주사위 굴리기",
    resultLabel: "결과",
    totalLabel: "합계",
    howTitle: "사용 방법",
    howSteps: [
      "굴릴 주사위 개수(1~6개)를 선택합니다. 보드게임이나 TRPG 규칙에 맞게 필요한 개수를 고르면 됩니다.",
      "\"주사위 굴리기\" 버튼을 누릅니다. 매번 누를 때마다 새로운 난수로 각 주사위 값이 다시 정해집니다.",
      "각 주사위의 개별 결과와 전체 합계가 화면에 표시됩니다. 합계는 모노폴리 같은 이동 칸 수 계산이나 야추(Yacht) 점수 계산에 바로 활용할 수 있습니다.",
      "결과가 마음에 들지 않으면 버튼을 다시 눌러 즉시 새로 굴릴 수 있으며, 횟수에는 제한이 없습니다.",
    ],
    faq: [
      { q: "보드게임에 실제로 사용해도 되나요?", a: "네, 무작위 숫자 생성 방식으로 동작하므로 보드게임이나 테이블탑 게임에서 실제 주사위 대신 사용할 수 있습니다. 주사위를 분실했거나 여러 명이 화면 하나로 게임할 때 특히 편리합니다." },
      { q: "최대 몇 개까지 굴릴 수 있나요?", a: "한 번에 최대 6개까지 주사위를 굴릴 수 있습니다. 야추(Yacht Dice)처럼 5개가 필요한 게임이나, 6개 주사위를 쓰는 일부 TRPG 규칙에도 맞춰서 사용할 수 있습니다." },
      { q: "주사위 값은 정말 무작위인가요?", a: "네. 브라우저의 난수 생성 기능을 사용해 매번 독립적으로 1~6 사이의 값을 뽑습니다. 특정 숫자가 더 잘 나오도록 조작되어 있지 않습니다." },
      { q: "같은 결과가 저장되거나 기록되나요?", a: "아니요. 이 도구는 결과를 서버에 저장하지 않으며, 페이지를 새로고침하거나 닫으면 이전 결과는 모두 사라집니다. 순전히 그 순간의 굴림 결과만 보여줍니다." },
      { q: "D6(6면체) 외에 다른 면의 주사위도 지원하나요?", a: "현재는 가장 많이 쓰이는 표준 6면체(D6) 주사위만 지원합니다. D10, D20 같은 다면체 주사위가 필요하다면 전용 TRPG 주사위 도구를 이용해 주세요." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Dice Roller (Roll 1–6 Dice at Once)",
    subtitle: "Roll as many dice as you need at once and see each result plus the total.",
    diceCountLabel: "Number of Dice",
    rollBtn: "Roll Dice",
    resultLabel: "Result",
    totalLabel: "Total",
    howTitle: "How to Use",
    howSteps: [
      "Choose how many dice to roll (1–6), matching whatever your board game or tabletop RPG rules call for.",
      "Click \"Roll Dice.\" Each click generates a fresh set of random values for every die.",
      "Each die's individual result and the overall total are shown on screen — handy for counting movement spaces in games like Monopoly or scoring Yacht/Yahtzee-style games.",
      "Don't like the result? Just click again for an instant new roll — there's no limit on how many times you can roll.",
    ],
    faq: [
      { q: "Can I actually use this for board games?", a: "Yes. It generates genuinely random values, so it works as a substitute for physical dice in board games or tabletop games — especially handy if you've lost a die or everyone's playing from one shared screen." },
      { q: "What's the maximum number of dice I can roll?", a: "You can roll up to 6 dice at once, which covers games like Yacht Dice (5 dice) as well as some tabletop RPG rules that call for up to 6." },
      { q: "Are the dice values really random?", a: "Yes. Each die uses the browser's random number generation to independently produce a value from 1 to 6 every time — there's no bias toward any particular number." },
      { q: "Are my rolls saved or logged anywhere?", a: "No. This tool doesn't send or store any results on a server. Refresh or close the page and the previous roll is gone — it only ever shows the result of that one moment." },
      { q: "Does it support dice other than standard six-sided (D6)?", a: "Right now it only supports the standard six-sided die (D6), the most commonly used type. If you need polyhedral dice like D10 or D20, use a dedicated tabletop RPG dice tool instead." },
    ],
    disclaimer: "This tool runs entirely in your browser and does not store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "サイコロを振る（1〜6個同時）",
    subtitle: "好きな個数のサイコロを一度に振って、結果と合計を確認できます。",
    diceCountLabel: "サイコロの個数",
    rollBtn: "サイコロを振る",
    resultLabel: "結果",
    totalLabel: "合計",
    howTitle: "使用方法",
    howSteps: [
      "振るサイコロの個数（1〜6個）を選びます。ボードゲームやTRPGのルールに合わせて必要な個数を選んでください。",
      "「サイコロを振る」ボタンを押します。押すたびに新しい乱数で各サイコロの値が決まります。",
      "各サイコロの個別の結果と全体の合計が画面に表示されます。合計はモノポリーのようなマス移動の計算や、ヤッツィー（Yacht）のスコア計算にそのまま使えます。",
      "結果が気に入らなければ、もう一度ボタンを押してすぐに振り直せます。回数に制限はありません。",
    ],
    faq: [
      { q: "ボードゲームで実際に使っても大丈夫ですか？", a: "はい。ランダムな数値生成方式で動作するため、ボードゲームやテーブルトップゲームで実際のサイコロの代わりに使用できます。サイコロを失くした時や、複数人が1つの画面でゲームをする時に特に便利です。" },
      { q: "最大何個まで振れますか？", a: "一度に最大6個までサイコロを振ることができます。ヤッツィー（Yacht Dice）のように5個必要なゲームや、6個のサイコロを使う一部のTRPGルールにも対応できます。" },
      { q: "サイコロの値は本当にランダムですか？", a: "はい。ブラウザの乱数生成機能を使って、毎回独立して1〜6の値を選びます。特定の数字が出やすくなるような操作はされていません。" },
      { q: "結果は保存・記録されますか？", a: "いいえ。このツールは結果をサーバーに保存せず、ページを更新したり閉じたりすると以前の結果は消えます。その瞬間の結果だけを表示するものです。" },
      { q: "D6（6面）以外のサイコロにも対応していますか？", a: "現在は最も一般的な標準の6面サイコロ（D6）のみ対応しています。D10やD20のような多面体サイコロが必要な場合は、専用のTRPGダイスツールをご利用ください。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、別途データを保存しません。",
    footer: "すべての処理はローカルで即時に行われます。",
  },
  es: {
    title: "Lanzador de Dados (Tira de 1 a 6 Dados a la Vez)",
    subtitle: "Tira tantos dados como necesites a la vez y consulta cada resultado y el total.",
    diceCountLabel: "Cantidad de Dados",
    rollBtn: "Tirar Dados",
    resultLabel: "Resultado",
    totalLabel: "Total",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige cuántos dados tirar (de 1 a 6), según lo que pidan las reglas de tu juego de mesa o rol.",
      "Haz clic en \"Tirar Dados\". Cada clic genera un nuevo conjunto de valores aleatorios para cada dado.",
      "El resultado individual de cada dado y el total general se muestran en pantalla, útil para contar casillas de movimiento en juegos como el Monopoly o para puntuar juegos tipo Yacht/Yahtzee.",
      "¿No te gustó el resultado? Simplemente haz clic de nuevo para una tirada instantánea — no hay límite de tiradas.",
    ],
    faq: [
      { q: "¿Puedo usarlo realmente para juegos de mesa?", a: "Sí. Genera valores verdaderamente aleatorios, así que funciona como sustituto de dados físicos en juegos de mesa o de tablero — especialmente útil si perdiste un dado o si todos juegan desde una sola pantalla compartida." },
      { q: "¿Cuál es la cantidad máxima de dados que puedo tirar?", a: "Puedes tirar hasta 6 dados a la vez, lo cual cubre juegos como Yacht Dice (5 dados) y algunas reglas de rol de mesa que requieren hasta 6." },
      { q: "¿Los valores de los dados son realmente aleatorios?", a: "Sí. Cada dado usa la generación de números aleatorios del navegador para producir de forma independiente un valor del 1 al 6 cada vez — no hay sesgo hacia ningún número en particular." },
      { q: "¿Se guardan o registran mis tiradas en algún lugar?", a: "No. Esta herramienta no envía ni guarda resultados en ningún servidor. Si recargas o cierras la página, la tirada anterior desaparece — solo muestra el resultado de ese momento." },
      { q: "¿Admite dados distintos al estándar de seis caras (D6)?", a: "Por ahora solo admite el dado estándar de seis caras (D6), el tipo más usado. Si necesitas dados poliédricos como D10 o D20, usa una herramienta de dados de rol dedicada." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre al instante, de forma local en tu navegador.",
  },
};
