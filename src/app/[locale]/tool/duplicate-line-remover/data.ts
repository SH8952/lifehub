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
  caseSensitive: string;
  trimWhitespace: string;
  sortResult: string;
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
    title: "텍스트 중복 줄 제거기",
    subtitle: "여러 줄의 텍스트에서 중복된 줄을 제거하고 고유한 줄만 남깁니다.",
    inputLabel: "원본 텍스트",
    outputLabel: "중복 제거 결과",
    placeholder: "한 줄에 하나씩 텍스트를 입력하세요...",
    caseSensitive: "대소문자 구분",
    trimWhitespace: "앞뒤 공백 무시",
    sortResult: "결과 정렬",
    statsLabel: "원본 {total}줄 → 고유 {unique}줄 (중복 {dup}줄 제거)",
    copyBtn: "결과 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "왼쪽 입력창에 중복이 포함된 텍스트를 한 줄씩 붙여넣습니다.",
      "필요에 따라 대소문자 구분, 공백 무시, 정렬 옵션을 켭니다.",
      "오른쪽에 고유한 줄만 남은 결과가 실시간으로 표시됩니다.",
    ],
    faq: [
      { q: "빈 줄도 중복으로 처리되나요?", a: "네, 빈 줄도 하나의 줄로 취급되어 중복이면 제거됩니다." },
      { q: "원본 줄 순서가 유지되나요?", a: "정렬 옵션을 끄면 처음 등장한 순서대로 고유한 줄이 유지됩니다." },
    ],
    disclaimer: "입력한 텍스트는 서버로 전송되지 않고 브라우저 내에서만 처리됩니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Duplicate Line Remover",
    subtitle: "Remove duplicate lines from multi-line text and keep only unique lines.",
    inputLabel: "Original Text",
    outputLabel: "De-duplicated Result",
    placeholder: "Enter text, one item per line...",
    caseSensitive: "Case Sensitive",
    trimWhitespace: "Trim Whitespace",
    sortResult: "Sort Result",
    statsLabel: "{total} lines → {unique} unique ({dup} duplicates removed)",
    copyBtn: "Copy Result",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Paste text with duplicate lines into the input box on the left.",
      "Toggle case sensitivity, whitespace trimming, or sorting as needed.",
      "The de-duplicated result appears instantly on the right.",
    ],
    faq: [
      { q: "Are empty lines treated as duplicates too?", a: "Yes, empty lines are treated as a line and deduplicated like any other." },
      { q: "Is the original line order preserved?", a: "With sorting off, unique lines keep their first-occurrence order." },
    ],
    disclaimer: "Your text is never sent to a server — all processing happens in your browser.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "テキスト重複行削除ツール",
    subtitle: "複数行のテキストから重複行を削除し、ユニークな行だけを残します。",
    inputLabel: "元のテキスト",
    outputLabel: "重複削除結果",
    placeholder: "1行に1つずつテキストを入力してください...",
    caseSensitive: "大文字小文字を区別",
    trimWhitespace: "前後の空白を無視",
    sortResult: "結果を並べ替え",
    statsLabel: "元{total}行 → ユニーク{unique}行（重複{dup}行削除）",
    copyBtn: "結果をコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "左の入力欄に重複を含むテキストを1行ずつ貼り付けます。",
      "必要に応じて大文字小文字の区別、空白の無視、並べ替えオプションを設定します。",
      "右側にユニークな行だけの結果がリアルタイムで表示されます。",
    ],
    faq: [
      { q: "空行も重複として処理されますか？", a: "はい、空行も1つの行として扱われ、重複していれば削除されます。" },
      { q: "元の行の順序は保持されますか？", a: "並べ替えオプションを無効にすると、最初に出現した順序が保持されます。" },
    ],
    disclaimer: "入力したテキストはサーバーに送信されず、ブラウザ内でのみ処理されます。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Eliminador de Líneas Duplicadas",
    subtitle: "Elimina líneas duplicadas de un texto de varias líneas y conserva solo las únicas.",
    inputLabel: "Texto Original",
    outputLabel: "Resultado Sin Duplicados",
    placeholder: "Introduce texto, uno por línea...",
    caseSensitive: "Distinguir Mayúsculas",
    trimWhitespace: "Ignorar Espacios",
    sortResult: "Ordenar Resultado",
    statsLabel: "{total} líneas → {unique} únicas ({dup} duplicados eliminados)",
    copyBtn: "Copiar Resultado",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Pega texto con líneas duplicadas en el cuadro de la izquierda.",
      "Activa distinción de mayúsculas, recorte de espacios u ordenación según necesites.",
      "El resultado sin duplicados aparece al instante a la derecha.",
    ],
    faq: [
      { q: "¿Las líneas vacías también se tratan como duplicados?", a: "Sí, las líneas vacías se tratan como una línea y se eliminan si se repiten." },
      { q: "¿Se conserva el orden original de las líneas?", a: "Con la ordenación desactivada, las líneas únicas mantienen el orden de primera aparición." },
    ],
    disclaimer: "Tu texto nunca se envía a un servidor; todo el procesamiento ocurre en tu navegador.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
