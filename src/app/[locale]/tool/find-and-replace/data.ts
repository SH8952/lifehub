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
  findLabel: string;
  replaceLabel: string;
  caseSensitive: string;
  useRegex: string;
  wholeWord: string;
  matchCount: string;
  regexError: string;
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
    title: "텍스트 찾기·바꾸기 도구",
    subtitle: "긴 텍스트에서 특정 단어나 패턴을 찾아 일괄적으로 바꿔줍니다. 정규식도 지원합니다.",
    inputLabel: "원본 텍스트",
    outputLabel: "결과",
    placeholder: "텍스트를 입력하거나 붙여넣으세요...",
    findLabel: "찾을 내용",
    replaceLabel: "바꿀 내용",
    caseSensitive: "대소문자 구분",
    useRegex: "정규식 사용",
    wholeWord: "단어 단위로만 일치",
    matchCount: "{count}개 일치 항목을 바꿨습니다.",
    regexError: "정규식이 올바르지 않습니다. 패턴을 확인해주세요.",
    copyBtn: "결과 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "원본 텍스트를 입력창에 붙여넣습니다.",
      "찾을 내용과 바꿀 내용을 입력합니다. 필요시 대소문자 구분, 정규식, 단어 단위 옵션을 켭니다.",
      "결과가 실시간으로 반영되며, 몇 개의 항목이 바뀌었는지 함께 표시됩니다.",
    ],
    faq: [
      { q: "정규식을 사용할 때 특수 문법을 알아야 하나요?", a: "네, 정규식 옵션을 켜면 찾을 내용란에 JavaScript 정규식 문법(예: \\\\d+, [a-z]+)을 사용할 수 있습니다. 일반 텍스트 검색만 필요하면 옵션을 끄고 사용하세요." },
      { q: "바꿀 내용을 비워두면 어떻게 되나요?", a: "찾은 내용이 모두 삭제됩니다. 즉, 특정 텍스트를 제거하는 용도로도 사용할 수 있습니다." },
    ],
    disclaimer: "입력한 텍스트는 서버로 전송되지 않고 브라우저 내에서만 처리됩니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Find and Replace Tool",
    subtitle: "Find specific words or patterns in long text and replace them all at once. Regex supported.",
    inputLabel: "Original Text",
    outputLabel: "Result",
    placeholder: "Enter or paste your text...",
    findLabel: "Find",
    replaceLabel: "Replace With",
    caseSensitive: "Case Sensitive",
    useRegex: "Use Regex",
    wholeWord: "Whole Word Only",
    matchCount: "{count} matches replaced.",
    regexError: "Invalid regex pattern. Please check your pattern.",
    copyBtn: "Copy Result",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Paste your original text into the input box.",
      "Enter what to find and what to replace it with. Toggle case sensitivity, regex, or whole-word matching as needed.",
      "The result updates instantly, along with how many matches were replaced.",
    ],
    faq: [
      { q: "Do I need to know special syntax to use regex?", a: "Yes — enabling the regex option lets you use JavaScript regex syntax (e.g. \\\\d+, [a-z]+) in the Find field. For plain text search, leave it off." },
      { q: "What happens if I leave Replace With empty?", a: "All matches are simply removed, so this also works as a text-deletion tool." },
    ],
    disclaimer: "Your text is never sent to a server — all processing happens in your browser.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "テキスト検索・置換ツール",
    subtitle: "長いテキストから特定の単語やパターンを検索し、一括で置き換えます。正規表現にも対応。",
    inputLabel: "元のテキスト",
    outputLabel: "結果",
    placeholder: "テキストを入力または貼り付けてください...",
    findLabel: "検索する文字列",
    replaceLabel: "置換する文字列",
    caseSensitive: "大文字小文字を区別",
    useRegex: "正規表現を使用",
    wholeWord: "単語単位でのみ一致",
    matchCount: "{count}件の一致を置き換えました。",
    regexError: "正規表現が無効です。パターンを確認してください。",
    copyBtn: "結果をコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "元のテキストを入力欄に貼り付けます。",
      "検索する文字列と置換する文字列を入力します。必要に応じて大文字小文字の区別、正規表現、単語単位のオプションを設定します。",
      "結果がリアルタイムで反映され、何件が置き換えられたかも表示されます。",
    ],
    faq: [
      { q: "正規表現を使う際に特別な文法を知る必要がありますか？", a: "はい、正規表現オプションを有効にすると、検索欄でJavaScriptの正規表現文法（例：\\\\d+、[a-z]+）を使用できます。通常のテキスト検索のみ必要な場合はオプションを無効にしてください。" },
      { q: "置換する文字列を空にするとどうなりますか？", a: "一致した内容がすべて削除されます。つまり特定のテキストを除去する用途にも使えます。" },
    ],
    disclaimer: "入力したテキストはサーバーに送信されず、ブラウザ内でのみ処理されます。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Herramienta de Buscar y Reemplazar",
    subtitle: "Encuentra palabras o patrones específicos en texto largo y reemplázalos todos a la vez. Admite regex.",
    inputLabel: "Texto Original",
    outputLabel: "Resultado",
    placeholder: "Introduce o pega tu texto...",
    findLabel: "Buscar",
    replaceLabel: "Reemplazar Con",
    caseSensitive: "Distinguir Mayúsculas",
    useRegex: "Usar Expresión Regular",
    wholeWord: "Solo Palabra Completa",
    matchCount: "{count} coincidencias reemplazadas.",
    regexError: "Patrón de expresión regular inválido. Revisa tu patrón.",
    copyBtn: "Copiar Resultado",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Pega tu texto original en el cuadro de entrada.",
      "Introduce qué buscar y con qué reemplazarlo. Activa distinción de mayúsculas, regex o coincidencia de palabra completa según necesites.",
      "El resultado se actualiza al instante, junto con cuántas coincidencias se reemplazaron.",
    ],
    faq: [
      { q: "¿Necesito conocer sintaxis especial para usar regex?", a: "Sí, al activar la opción de regex puedes usar sintaxis de expresiones regulares de JavaScript (p. ej. \\\\d+, [a-z]+) en el campo Buscar. Para búsqueda de texto simple, déjala desactivada." },
      { q: "¿Qué pasa si dejo vacío el campo Reemplazar Con?", a: "Todas las coincidencias simplemente se eliminan, por lo que también funciona como herramienta de borrado de texto." },
    ],
    disclaimer: "Tu texto nunca se envía a un servidor; todo el procesamiento ocurre en tu navegador.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
