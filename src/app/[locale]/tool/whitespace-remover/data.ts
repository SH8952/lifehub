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
  trimLines: string;
  collapseSpaces: string;
  removeEmptyLines: string;
  collapseEmptyLines: string;
  tabsToSpaces: string;
  removeAllBreaks: string;
  statsLabel: string;
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
    title: "공백·줄바꿈 정리기",
    subtitle: "불필요한 공백, 탭, 빈 줄, 줄바꿈을 깔끔하게 정리합니다.",
    inputLabel: "원본 텍스트",
    outputLabel: "정리 결과",
    placeholder: "정리할 텍스트를 붙여넣으세요...",
    trimLines: "각 줄 앞뒤 공백 제거",
    collapseSpaces: "연속 공백을 하나로 압축",
    removeEmptyLines: "빈 줄 모두 제거",
    collapseEmptyLines: "연속된 빈 줄을 하나로 압축",
    tabsToSpaces: "탭을 공백으로 변환",
    removeAllBreaks: "모든 줄바꿈 제거 (한 줄로 합치기)",
    statsLabel: "원본 {origLen}자 → 결과 {newLen}자",
    copyBtn: "결과 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "정리하고 싶은 텍스트를 입력창에 붙여넣습니다.",
      "원하는 정리 옵션(줄 앞뒤 공백, 연속 공백, 빈 줄, 탭 등)을 체크합니다.",
      "결과가 즉시 반영되며 복사 버튼으로 바로 가져갈 수 있습니다.",
    ],
    faq: [
      { q: "워드나 메모장에서 복사한 텍스트의 이상한 공백도 정리되나요?", a: "네, 일반적인 공백 문자(스페이스, 탭)와 줄바꿈 패턴을 정리합니다. 다만 특수한 비가시 문자(예: zero-width space)는 별도 처리가 필요할 수 있습니다." },
      { q: "원본은 어떻게 되나요?", a: "원본 텍스트는 그대로 입력창에 남아있으며, 정리된 결과만 별도로 표시됩니다." },
    ],
    disclaimer: "입력한 텍스트는 서버로 전송되지 않고 브라우저 내에서만 처리됩니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Whitespace & Line Break Cleaner",
    subtitle: "Clean up extra spaces, tabs, blank lines, and line breaks in your text.",
    inputLabel: "Original Text",
    outputLabel: "Cleaned Result",
    placeholder: "Paste text to clean up...",
    trimLines: "Trim Each Line",
    collapseSpaces: "Collapse Multiple Spaces",
    removeEmptyLines: "Remove All Empty Lines",
    collapseEmptyLines: "Collapse Multiple Blank Lines",
    tabsToSpaces: "Convert Tabs to Spaces",
    removeAllBreaks: "Remove All Line Breaks (Join as One Line)",
    statsLabel: "{origLen} chars → {newLen} chars",
    copyBtn: "Copy Result",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Paste the text you want to clean into the input box.",
      "Check the cleanup options you want (line trimming, multiple spaces, blank lines, tabs, etc.).",
      "The result updates instantly — copy it with one click.",
    ],
    faq: [
      { q: "Does it clean up odd spacing from Word or Notepad?", a: "Yes, it handles standard whitespace characters (spaces, tabs) and line break patterns. Special invisible characters like zero-width spaces may need separate handling." },
      { q: "What happens to my original text?", a: "The original stays untouched in the input box; only the cleaned result is shown separately." },
    ],
    disclaimer: "Your text is never sent to a server — all processing happens in your browser.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "空白・改行整理ツール",
    subtitle: "不要な空白、タブ、空行、改行をきれいに整理します。",
    inputLabel: "元のテキスト",
    outputLabel: "整理結果",
    placeholder: "整理したいテキストを貼り付けてください...",
    trimLines: "各行の前後の空白を削除",
    collapseSpaces: "連続する空白を1つに圧縮",
    removeEmptyLines: "空行をすべて削除",
    collapseEmptyLines: "連続する空行を1つに圧縮",
    tabsToSpaces: "タブをスペースに変換",
    removeAllBreaks: "すべての改行を削除（1行に結合）",
    statsLabel: "元{origLen}文字 → 結果{newLen}文字",
    copyBtn: "結果をコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "整理したいテキストを入力欄に貼り付けます。",
      "希望する整理オプション（行の前後の空白、連続空白、空行、タブなど）にチェックを入れます。",
      "結果が即座に反映され、コピーボタンでそのまま取得できます。",
    ],
    faq: [
      { q: "Wordやメモパッドからコピーしたテキストのおかしなスペースもきれいになりますか？", a: "はい、一般的な空白文字（スペース、タブ）と改行パターンを整理します。ただし特殊な不可視文字（ゼロ幅スペースなど）は別途処理が必要な場合があります。" },
      { q: "元のテキストはどうなりますか？", a: "元のテキストは入力欄にそのまま残り、整理された結果だけが別途表示されます。" },
    ],
    disclaimer: "入力したテキストはサーバーに送信されず、ブラウザ内でのみ処理されます。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Limpiador de Espacios y Saltos de Línea",
    subtitle: "Limpia espacios extra, tabulaciones, líneas vacías y saltos de línea en tu texto.",
    inputLabel: "Texto Original",
    outputLabel: "Resultado Limpio",
    placeholder: "Pega el texto a limpiar...",
    trimLines: "Recortar Cada Línea",
    collapseSpaces: "Reducir Espacios Múltiples",
    removeEmptyLines: "Eliminar Todas las Líneas Vacías",
    collapseEmptyLines: "Reducir Líneas Vacías Múltiples",
    tabsToSpaces: "Convertir Tabs a Espacios",
    removeAllBreaks: "Eliminar Todos los Saltos (Unir en Una Línea)",
    statsLabel: "{origLen} caracteres → {newLen} caracteres",
    copyBtn: "Copiar Resultado",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Pega el texto que quieres limpiar en el cuadro de entrada.",
      "Marca las opciones de limpieza que desees (recorte de línea, espacios múltiples, líneas vacías, tabs, etc.).",
      "El resultado se actualiza al instante; cópialo con un clic.",
    ],
    faq: [
      { q: "¿Limpia espacios raros copiados de Word o el Bloc de notas?", a: "Sí, maneja caracteres de espacio estándar (espacios, tabs) y patrones de saltos de línea. Los caracteres invisibles especiales pueden necesitar un tratamiento aparte." },
      { q: "¿Qué pasa con mi texto original?", a: "El original permanece intacto en el cuadro de entrada; solo se muestra el resultado limpio por separado." },
    ],
    disclaimer: "Tu texto nunca se envía a un servidor; todo el procesamiento ocurre en tu navegador.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
