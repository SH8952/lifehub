export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  patternLabel: string;
  flagsLabel: string;
  testTextLabel: string;
  matchesLabel: string;
  groupsLabel: string;
  errorInvalid: string;
  noMatches: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "정규식(Regex) 테스터",
    subtitle: "정규식 패턴을 입력하고 테스트 텍스트에서 일치하는 부분을 실시간으로 확인하세요.",
    patternLabel: "정규식 패턴",
    flagsLabel: "플래그",
    testTextLabel: "테스트 텍스트",
    matchesLabel: "일치 결과 ({count}개)",
    groupsLabel: "캡처 그룹",
    errorInvalid: "정규식이 올바르지 않습니다.",
    noMatches: "일치하는 항목이 없습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "정규식 패턴을 입력합니다.",
      "필요한 플래그(g, i, m, s 등)를 체크합니다.",
      "테스트 텍스트를 입력하면 일치하는 부분이 강조되고 캡처 그룹이 표시됩니다.",
    ],
    faq: [
      { q: "어떤 정규식 문법을 지원하나요?", a: "브라우저 내장 JavaScript 정규식 엔진을 그대로 사용하므로 표준 JS 정규식 문법을 모두 지원합니다." },
      { q: "g 플래그 없이도 모든 일치 항목을 볼 수 있나요?", a: "g(global) 플래그를 켜야 모든 일치 항목을 찾을 수 있습니다. 끄면 첫 번째 일치 항목만 표시됩니다." },
    ],
    disclaimer: "입력한 텍스트는 서버로 전송되지 않고 브라우저 내에서만 처리됩니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Regex Tester",
    subtitle: "Enter a regex pattern and see matches in your test text in real time.",
    patternLabel: "Regex Pattern",
    flagsLabel: "Flags",
    testTextLabel: "Test Text",
    matchesLabel: "Matches ({count})",
    groupsLabel: "Capture Groups",
    errorInvalid: "Invalid regular expression.",
    noMatches: "No matches found.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your regex pattern.",
      "Check the flags you need (g, i, m, s, etc.).",
      "Type test text to see matches highlighted and capture groups listed.",
    ],
    faq: [
      { q: "What regex syntax is supported?", a: "It uses the browser's built-in JavaScript regex engine directly, so standard JS regex syntax is fully supported." },
      { q: "Can I see all matches without the g flag?", a: "The g (global) flag is required to find all matches; without it, only the first match is shown." },
    ],
    disclaimer: "Your text is never sent to a server — all processing happens in your browser.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "正規表現テスター",
    subtitle: "正規表現パターンを入力し、テストテキストの一致箇所をリアルタイムで確認しましょう。",
    patternLabel: "正規表現パターン",
    flagsLabel: "フラグ",
    testTextLabel: "テストテキスト",
    matchesLabel: "一致結果（{count}件）",
    groupsLabel: "キャプチャグループ",
    errorInvalid: "正規表現が無効です。",
    noMatches: "一致する項目がありません。",
    howTitle: "使用方法",
    howSteps: [
      "正規表現パターンを入力します。",
      "必要なフラグ（g、i、m、sなど）をチェックします。",
      "テストテキストを入力すると一致箇所が強調表示され、キャプチャグループが表示されます。",
    ],
    faq: [
      { q: "どの正規表現文法がサポートされていますか？", a: "ブラウザ内蔵のJavaScript正規表現エンジンをそのまま使用するため、標準JS正規表現文法を全てサポートします。" },
      { q: "gフラグなしでも全ての一致項目を見られますか？", a: "g（グローバル）フラグをオンにする必要があります。オフの場合は最初の一致項目のみ表示されます。" },
    ],
    disclaimer: "入力したテキストはサーバーに送信されず、ブラウザ内でのみ処理されます。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Probador de Expresiones Regulares",
    subtitle: "Introduce un patrón regex y ve las coincidencias en tu texto de prueba en tiempo real.",
    patternLabel: "Patrón Regex",
    flagsLabel: "Banderas",
    testTextLabel: "Texto de Prueba",
    matchesLabel: "Coincidencias ({count})",
    groupsLabel: "Grupos de Captura",
    errorInvalid: "Expresión regular inválida.",
    noMatches: "No se encontraron coincidencias.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu patrón regex.",
      "Marca las banderas que necesites (g, i, m, s, etc.).",
      "Escribe texto de prueba para ver las coincidencias resaltadas y los grupos de captura.",
    ],
    faq: [
      { q: "¿Qué sintaxis regex se admite?", a: "Usa directamente el motor regex de JavaScript del navegador, por lo que admite toda la sintaxis estándar de regex de JS." },
      { q: "¿Puedo ver todas las coincidencias sin la bandera g?", a: "Se requiere la bandera g (global) para encontrar todas las coincidencias; sin ella, solo se muestra la primera." },
    ],
    disclaimer: "Tu texto nunca se envía a un servidor; todo el procesamiento ocurre en tu navegador.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
