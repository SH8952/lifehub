export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  outputLabel: string;
  placeholder: string;
  sortAsc: string;
  sortDesc: string;
  sortNumeric: string;
  sortLength: string;
  sortReverse: string;
  sortRandom: string;
  caseInsensitive: string;
  removeEmpty: string;
  copyBtn: string;
  copied: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "텍스트 줄 정렬기",
    subtitle: "여러 줄의 텍스트를 가나다순, 알파벳순, 숫자순, 길이순으로 정렬합니다.",
    inputLabel: "원본 텍스트",
    outputLabel: "정렬 결과",
    placeholder: "한 줄에 하나씩 텍스트를 입력하세요...",
    sortAsc: "오름차순 (가나다/A-Z)",
    sortDesc: "내림차순 (하파타/Z-A)",
    sortNumeric: "숫자순",
    sortLength: "길이순 (짧은순)",
    sortReverse: "순서 거꾸로",
    sortRandom: "무작위 섞기",
    caseInsensitive: "대소문자 무시",
    removeEmpty: "빈 줄 제거",
    copyBtn: "결과 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "왼쪽 입력창에 정렬할 텍스트를 한 줄씩 입력하거나 붙여넣습니다.",
      "원하는 정렬 방식(오름차순, 내림차순, 숫자순, 길이순, 거꾸로, 무작위)을 선택합니다.",
      "오른쪽에 정렬된 결과가 실시간으로 표시되며 복사 버튼으로 바로 복사할 수 있습니다.",
    ],
    faq: [
      { q: "숫자순 정렬은 어떻게 동작하나요?", a: "각 줄을 숫자로 해석할 수 있을 때 숫자 값을 기준으로 정렬합니다. 숫자가 아닌 줄은 맨 뒤로 정렬됩니다." },
      { q: "한글 정렬 기준은 무엇인가요?", a: "브라우저의 기본 로케일 비교(localeCompare)를 사용하여 자연스러운 가나다순으로 정렬합니다." },
    ],
    disclaimer: "입력한 텍스트는 서버로 전송되지 않고 브라우저 내에서만 처리됩니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Text Line Sorter",
    subtitle: "Sort multi-line text alphabetically, numerically, by length, or reverse it.",
    inputLabel: "Original Text",
    outputLabel: "Sorted Result",
    placeholder: "Enter text, one item per line...",
    sortAsc: "Ascending (A-Z)",
    sortDesc: "Descending (Z-A)",
    sortNumeric: "Numeric",
    sortLength: "By Length (Shortest)",
    sortReverse: "Reverse Order",
    sortRandom: "Shuffle",
    caseInsensitive: "Ignore Case",
    removeEmpty: "Remove Empty Lines",
    copyBtn: "Copy Result",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Type or paste the text to sort, one item per line, in the box on the left.",
      "Choose a sort method: ascending, descending, numeric, by length, reverse, or shuffle.",
      "The sorted result appears instantly on the right — copy it with one click.",
    ],
    faq: [
      { q: "How does numeric sort work?", a: "Lines that can be parsed as numbers are sorted by their numeric value; non-numeric lines are sorted to the end." },
      { q: "What determines the sort order for non-Latin text?", a: "It uses the browser's locale-aware comparison (localeCompare) for natural alphabetical ordering." },
    ],
    disclaimer: "Your text is never sent to a server — all processing happens in your browser.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "テキスト行ソートツール",
    subtitle: "複数行のテキストをあいうえお順、アルファベット順、数字順、長さ順に並べ替えます。",
    inputLabel: "元のテキスト",
    outputLabel: "並べ替え結果",
    placeholder: "1行に1つずつテキストを入力してください...",
    sortAsc: "昇順 (あ-ん/A-Z)",
    sortDesc: "降順 (ん-あ/Z-A)",
    sortNumeric: "数字順",
    sortLength: "長さ順（短い順）",
    sortReverse: "順序を反転",
    sortRandom: "ランダムシャッフル",
    caseInsensitive: "大文字小文字を無視",
    removeEmpty: "空行を削除",
    copyBtn: "結果をコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "左の入力欄に並べ替えたいテキストを1行ずつ入力または貼り付けます。",
      "希望の並べ替え方式（昇順、降順、数字順、長さ順、反転、ランダム）を選択します。",
      "右側に並べ替えられた結果がリアルタイムで表示され、コピーボタンでそのままコピーできます。",
    ],
    faq: [
      { q: "数字順並べ替えはどのように動作しますか？", a: "各行を数字として解釈できる場合、その数値を基準に並べ替えます。数字でない行は末尾に並べ替えられます。" },
      { q: "並べ替えの基準は何ですか？", a: "ブラウザの標準ロケール比較（localeCompare）を使用して自然な順序で並べ替えます。" },
    ],
    disclaimer: "入力したテキストはサーバーに送信されず、ブラウザ内でのみ処理されます。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Ordenador de Líneas de Texto",
    subtitle: "Ordena texto de varias líneas alfabéticamente, numéricamente, por longitud o inviértelo.",
    inputLabel: "Texto Original",
    outputLabel: "Resultado Ordenado",
    placeholder: "Introduce texto, uno por línea...",
    sortAsc: "Ascendente (A-Z)",
    sortDesc: "Descendente (Z-A)",
    sortNumeric: "Numérico",
    sortLength: "Por Longitud (Más Corto)",
    sortReverse: "Invertir Orden",
    sortRandom: "Mezclar al Azar",
    caseInsensitive: "Ignorar Mayúsculas",
    removeEmpty: "Eliminar Líneas Vacías",
    copyBtn: "Copiar Resultado",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe o pega el texto a ordenar, uno por línea, en el cuadro de la izquierda.",
      "Elige un método de ordenación: ascendente, descendente, numérico, por longitud, inverso o mezcla.",
      "El resultado ordenado aparece al instante a la derecha; cópialo con un clic.",
    ],
    faq: [
      { q: "¿Cómo funciona el orden numérico?", a: "Las líneas que pueden interpretarse como números se ordenan por su valor numérico; las no numéricas van al final." },
      { q: "¿Qué determina el orden para texto no latino?", a: "Usa la comparación de localización del navegador (localeCompare) para un orden alfabético natural." },
    ],
    disclaimer: "Tu texto nunca se envía a un servidor; todo el procesamiento ocurre en tu navegador.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
