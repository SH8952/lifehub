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
      "굴릴 주사위 개수(1~6개)를 선택합니다.",
      "\"주사위 굴리기\" 버튼을 누릅니다.",
      "각 주사위의 결과와 전체 합계가 표시됩니다.",
    ],
    faq: [
      { q: "보드게임에 실제로 사용해도 되나요?", a: "네, 무작위 숫자 생성 방식으로 동작하므로 보드게임이나 테이블탑 게임에서 실제 주사위 대신 사용할 수 있습니다." },
      { q: "최대 몇 개까지 굴릴 수 있나요?", a: "한 번에 최대 6개까지 주사위를 굴릴 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Dice Roller (1-6 Dice at Once)",
    subtitle: "Roll any number of dice at once and see the results and total.",
    diceCountLabel: "Number of Dice",
    rollBtn: "Roll the Dice",
    resultLabel: "Result",
    totalLabel: "Total",
    howTitle: "How to Use",
    howSteps: [
      "Choose how many dice to roll (1-6).",
      "Click \"Roll the Dice.\"",
      "Each die's result and the overall total are shown.",
    ],
    faq: [
      { q: "Can I actually use this for board games?", a: "Yes, it uses genuine random number generation, so it works as a substitute for physical dice in board or tabletop games." },
      { q: "What's the maximum number of dice?", a: "You can roll up to 6 dice at once." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "サイコロを振る（1〜6個同時に振る）",
    subtitle: "好きな個数のサイコロを一度に振って結果と合計を確認しましょう。",
    diceCountLabel: "サイコロの個数",
    rollBtn: "サイコロを振る",
    resultLabel: "結果",
    totalLabel: "合計",
    howTitle: "使用方法",
    howSteps: [
      "振るサイコロの個数（1〜6個）を選択します。",
      "「サイコロを振る」ボタンを押します。",
      "各サイコロの結果と全体の合計が表示されます。",
    ],
    faq: [
      { q: "ボードゲームに実際に使ってもいいですか？", a: "はい、ランダムな数字生成方式で動作するため、ボードゲームやテーブルトップゲームで実際のサイコロの代わりに使用できます。" },
      { q: "最大何個まで振れますか？", a: "一度に最大6個までサイコロを振ることができます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Lanzador de Dados (1-6 Dados a la Vez)",
    subtitle: "Lanza cualquier cantidad de dados a la vez y ve los resultados y el total.",
    diceCountLabel: "Número de Dados",
    rollBtn: "Lanzar los Dados",
    resultLabel: "Resultado",
    totalLabel: "Total",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige cuántos dados lanzar (1-6).",
      "Haz clic en \"Lanzar los Dados.\"",
      "Se muestra el resultado de cada dado y el total general.",
    ],
    faq: [
      { q: "¿Puedo usarlo realmente para juegos de mesa?", a: "Sí, usa generación de números aleatorios genuina, así que funciona como sustituto de dados físicos en juegos de mesa." },
      { q: "¿Cuál es el número máximo de dados?", a: "Puedes lanzar hasta 6 dados a la vez." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
