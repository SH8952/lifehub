export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  itemsLabel: string;
  itemsPlaceholder: string;
  removeAfterPick: string;
  pick: string;
  pickAgain: string;
  result: string;
  remainingItems: string;
  tooFewItems: string;
  tooManyItems: string;
  allPicked: string;
  whyPicker: string;
  pickerExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "랜덤 추첨기",
    subtitle: "목록에서 무작위로 하나를 뽑습니다",
    inputs: "항목 입력",
    itemsLabel: "항목 목록 (한 줄에 하나씩, 2~50개)",
    itemsPlaceholder: "예:\n김철수\n이영희\n박민수",
    removeAfterPick: "중복 제거 (한 번 뽑힌 항목 제외)",
    pick: "뽑기",
    pickAgain: "다시 뽑기",
    result: "당첨!",
    remainingItems: "남은 항목",
    tooFewItems: "최소 2개 이상의 항목을 입력해 주세요.",
    tooManyItems: "항목은 최대 50개까지 입력할 수 있습니다.",
    allPicked: "모든 항목이 이미 뽑혔습니다. 초기화 후 다시 시도하세요.",
    whyPicker: "랜덤 추첨은 어떻게 이루어지나요?",
    pickerExplanation: "입력한 항목 목록 중에서 브라우저의 난수 생성 기능(Math.random)을 이용해 무작위로 하나를 선택합니다. 모든 항목은 동일한 확률로 선택됩니다.\n\n'중복 제거' 옵션을 켜면 이미 뽑힌 항목은 다음 추첨에서 제외되어, 모든 항목이 한 번씩 뽑힐 때까지 반복해서 사용할 수 있습니다.",
    disclaimer: "본 도구는 일상적인 추첨 용도(게임, 발표 순서 정하기 등)에 적합하며, 암호학적으로 안전한 수준의 무작위성이 필요한 용도(보안, 복권 등)에는 적합하지 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "추첨은 브라우저에서 처리됩니다.",
    faq: [
      { q: "항목은 최대 몇 개까지 입력할 수 있나요?", a: "최소 2개부터 최대 50개까지 입력할 수 있습니다. 한 줄에 하나씩 입력해 주세요." },
      { q: "중복 제거 옵션을 켜면 어떻게 동작하나요?", a: "한 번 뽑힌 항목은 목록에서 제외되어 다음 추첨 대상에서 빠집니다. 모든 항목이 뽑히면 더 이상 추첨할 수 없으니, 처음부터 다시 시작하려면 항목 목록을 다시 입력해 주세요." },
      { q: "이 추첨 결과를 중요한 의사결정(예: 당첨자 선정)에 사용해도 되나요?", a: "간단한 게임이나 순서 정하기 등 일상적인 용도로는 적합하지만, 법적·금전적으로 중요한 추첨(복권, 경품 당첨자 선정 등)에는 더 엄격한 공정성 기준을 갖춘 전문 도구를 사용하는 것을 권장합니다." },
    ],
  },
  en: {
    title: "Random Picker",
    subtitle: "Randomly pick one item from a list",
    inputs: "Enter Items",
    itemsLabel: "Item List (one per line, 2-50 items)",
    itemsPlaceholder: "e.g.\nAlice\nBob\nCarol",
    removeAfterPick: "Remove After Pick (exclude previously picked items)",
    pick: "Pick",
    pickAgain: "Pick Again",
    result: "Winner!",
    remainingItems: "Remaining Items",
    tooFewItems: "Please enter at least 2 items.",
    tooManyItems: "You can enter up to 50 items.",
    allPicked: "All items have already been picked. Reset and try again.",
    whyPicker: "How does the random pick work?",
    pickerExplanation: "One item is randomly selected from your list using the browser's random number function (Math.random). Every item has an equal chance of being selected.\n\nWith 'Remove After Pick' enabled, previously picked items are excluded from future picks, so you can keep picking until every item has been chosen once.",
    disclaimer: "This tool is suitable for everyday picking purposes (games, deciding presentation order, etc.) but is not suitable for uses requiring cryptographically secure randomness (security, lotteries, etc.).",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "The pick is processed in your browser.",
    faq: [
      { q: "How many items can I enter at most?", a: "You can enter from 2 up to 50 items, one per line." },
      { q: "How does the Remove After Pick option work?", a: "An item that has been picked once is excluded from the list for future picks. Once all items have been picked, no more picks are possible — re-enter the item list to start over." },
      { q: "Can I use this for important decisions like selecting winners?", a: "It's suitable for simple games or determining order, but for legally or financially important drawings (lotteries, prize winners, etc.), it's recommended to use a dedicated tool with stricter fairness standards." },
    ],
  },
  ja: {
    title: "ランダム抽選機",
    subtitle: "リストからランダムに1つを選びます",
    inputs: "項目入力",
    itemsLabel: "項目リスト（1行に1つ、2~50個）",
    itemsPlaceholder: "例:\n田中\n佐藤\n鈴木",
    removeAfterPick: "重複除外（一度選ばれた項目を除外）",
    pick: "抽選する",
    pickAgain: "再度抽選",
    result: "当選！",
    remainingItems: "残りの項目",
    tooFewItems: "最低2つ以上の項目を入力してください。",
    tooManyItems: "項目は最大50個まで入力できます。",
    allPicked: "すべての項目が既に選ばれました。リセットして再試行してください。",
    whyPicker: "ランダム抽選はどのように行われますか？",
    pickerExplanation: "入力した項目リストの中から、ブラウザの乱数生成機能（Math.random）を使ってランダムに1つを選択します。すべての項目は同じ確率で選ばれます。\n\n「重複除外」オプションを有効にすると、既に選ばれた項目は次の抽選から除外され、すべての項目が1回ずつ選ばれるまで繰り返し使用できます。",
    disclaimer: "本ツールは日常的な抽選用途（ゲーム、発表順の決定など）に適していますが、暗号学的に安全なレベルのランダム性が必要な用途（セキュリティ、くじ等）には適していません。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "抽選はブラウザで処理されます。",
    faq: [
      { q: "項目は最大何個まで入力できますか？", a: "最低2個から最大50個まで入力できます。1行に1つずつ入力してください。" },
      { q: "重複除外オプションを有効にするとどう動作しますか？", a: "一度選ばれた項目はリストから除外され、次の抽選対象から外れます。すべての項目が選ばれると、それ以上抽選できないため、最初からやり直すには項目リストを再入力してください。" },
      { q: "この抽選結果を重要な意思決定（当選者選定など）に使ってもいいですか？", a: "簡単なゲームや順番決めなどの日常的な用途には適していますが、法的・金銭的に重要な抽選（くじ、賞品当選者選定など）にはより厳格な公正性基準を備えた専門ツールの使用をお勧めします。" },
    ],
  },
  es: {
    title: "Selector Aleatorio",
    subtitle: "Elige al azar un elemento de una lista",
    inputs: "Ingresa los Elementos",
    itemsLabel: "Lista de Elementos (uno por línea, 2-50 elementos)",
    itemsPlaceholder: "p. ej.\nAlicia\nBeto\nCarla",
    removeAfterPick: "Eliminar Después de Elegir (excluir elementos ya elegidos)",
    pick: "Elegir",
    pickAgain: "Elegir de Nuevo",
    result: "¡Ganador!",
    remainingItems: "Elementos Restantes",
    tooFewItems: "Por favor ingresa al menos 2 elementos.",
    tooManyItems: "Puedes ingresar hasta 50 elementos.",
    allPicked: "Todos los elementos ya han sido elegidos. Reinicia e intenta de nuevo.",
    whyPicker: "¿Cómo funciona la selección aleatoria?",
    pickerExplanation: "Se selecciona aleatoriamente un elemento de tu lista usando la función de números aleatorios del navegador (Math.random). Cada elemento tiene la misma probabilidad de ser seleccionado.\n\nCon 'Eliminar Después de Elegir' activado, los elementos ya elegidos se excluyen de futuras selecciones, para que puedas seguir eligiendo hasta que cada elemento haya sido elegido una vez.",
    disclaimer: "Esta herramienta es adecuada para propósitos de selección cotidianos (juegos, decidir el orden de presentación, etc.) pero no para usos que requieran aleatoriedad criptográficamente segura (seguridad, loterías, etc.).",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "La selección se procesa en tu navegador.",
    faq: [
      { q: "¿Cuántos elementos puedo ingresar como máximo?", a: "Puedes ingresar entre 2 y 50 elementos, uno por línea." },
      { q: "¿Cómo funciona la opción Eliminar Después de Elegir?", a: "Un elemento que ya ha sido elegido se excluye de la lista para futuras selecciones. Una vez que todos los elementos han sido elegidos, no se pueden hacer más selecciones — vuelve a ingresar la lista de elementos para empezar de nuevo." },
      { q: "¿Puedo usar esto para decisiones importantes como elegir ganadores?", a: "Es adecuado para juegos simples o determinar el orden, pero para sorteos legal o financieramente importantes (loterías, ganadores de premios, etc.), se recomienda usar una herramienta dedicada con estándares de equidad más estrictos." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
