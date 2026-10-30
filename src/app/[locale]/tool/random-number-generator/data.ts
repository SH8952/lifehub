export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  modeNumber: string;
  modeString: string;
  minLabel: string;
  maxLabel: string;
  countLabel: string;
  uniqueLabel: string;
  lengthLabel: string;
  charsetLabel: string;
  charsetUpper: string;
  charsetLower: string;
  charsetDigits: string;
  charsetSymbols: string;
  generateBtn: string;
  resultLabel: string;
  copyBtn: string;
  copied: string;
  errorRange: string;
  errorUniqueRange: string;
  errorNoCharset: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "범용 랜덤 숫자·문자열 생성기",
    subtitle: "원하는 범위의 랜덤 숫자 또는 다양한 조합의 랜덤 문자열을 즉시 생성합니다.",
    modeNumber: "숫자 모드",
    modeString: "문자열 모드",
    minLabel: "최소값",
    maxLabel: "최대값",
    countLabel: "생성 개수",
    uniqueLabel: "중복 없이 생성",
    lengthLabel: "문자열 길이",
    charsetLabel: "포함할 문자 종류",
    charsetUpper: "대문자 (A-Z)",
    charsetLower: "소문자 (a-z)",
    charsetDigits: "숫자 (0-9)",
    charsetSymbols: "특수문자 (!@#$%)",
    generateBtn: "생성하기",
    resultLabel: "생성 결과",
    copyBtn: "결과 복사",
    copied: "복사됨!",
    errorRange: "최소값은 최대값보다 작아야 합니다.",
    errorUniqueRange: "중복 없는 생성을 위해서는 범위가 생성 개수보다 커야 합니다.",
    errorNoCharset: "최소 하나 이상의 문자 종류를 선택하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "숫자 모드 또는 문자열 모드를 선택합니다.",
      "범위, 개수, 길이, 문자 종류 등 원하는 옵션을 설정합니다.",
      "\"생성하기\" 버튼을 누르면 결과가 즉시 표시되고, 복사 버튼으로 바로 복사할 수 있습니다.",
    ],
    faq: [
      { q: "추첨이나 중요한 결정에 사용해도 되나요?", a: "이 도구는 브라우저의 Math.random() 기반 난수를 사용하는 일반적인 유틸리티로, 간단한 추첨이나 아이디어 발상용으로 적합합니다. 보안이 중요한 암호 키 생성 등에는 사용하지 마세요." },
      { q: "중복 없이 생성은 어떻게 동작하나요?", a: "설정한 범위 내에서 서로 다른 숫자만 뽑도록 보장하며, 범위가 생성 개수보다 작으면 오류 메시지가 표시됩니다." },
    ],
    disclaimer: "이 도구는 일반적인 용도의 난수 생성기이며 암호학적 보안 용도로 사용해서는 안 됩니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Random Number & String Generator",
    subtitle: "Instantly generate random numbers in a range, or random strings with custom character sets.",
    modeNumber: "Number Mode",
    modeString: "String Mode",
    minLabel: "Minimum",
    maxLabel: "Maximum",
    countLabel: "Count",
    uniqueLabel: "No Duplicates",
    lengthLabel: "String Length",
    charsetLabel: "Character Types",
    charsetUpper: "Uppercase (A-Z)",
    charsetLower: "Lowercase (a-z)",
    charsetDigits: "Digits (0-9)",
    charsetSymbols: "Symbols (!@#$%)",
    generateBtn: "Generate",
    resultLabel: "Result",
    copyBtn: "Copy Result",
    copied: "Copied!",
    errorRange: "Minimum must be less than maximum.",
    errorUniqueRange: "The range must be larger than the count when generating without duplicates.",
    errorNoCharset: "Select at least one character type.",
    howTitle: "How to Use",
    howSteps: [
      "Choose number mode or string mode.",
      "Set your desired options: range, count, length, character types.",
      "Click \"Generate\" to see results instantly, and copy them with one click.",
    ],
    faq: [
      { q: "Can I use this for raffles or important decisions?", a: "This tool uses the browser's Math.random() and is fine for casual raffles or brainstorming, but not for cryptographic key generation or anything security-sensitive." },
      { q: "How does no-duplicates generation work?", a: "It guarantees distinct numbers within your range, and shows an error if the range is smaller than the requested count." },
    ],
    disclaimer: "This is a general-purpose random generator and should not be used for cryptographic security purposes.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "汎用ランダム数字・文字列生成ツール",
    subtitle: "指定した範囲のランダムな数字、または様々な組み合わせのランダム文字列を即座に生成します。",
    modeNumber: "数字モード",
    modeString: "文字列モード",
    minLabel: "最小値",
    maxLabel: "最大値",
    countLabel: "生成個数",
    uniqueLabel: "重複なし生成",
    lengthLabel: "文字列の長さ",
    charsetLabel: "含める文字の種類",
    charsetUpper: "大文字 (A-Z)",
    charsetLower: "小文字 (a-z)",
    charsetDigits: "数字 (0-9)",
    charsetSymbols: "特殊文字 (!@#$%)",
    generateBtn: "生成する",
    resultLabel: "生成結果",
    copyBtn: "結果をコピー",
    copied: "コピーしました！",
    errorRange: "最小値は最大値より小さくなければなりません。",
    errorUniqueRange: "重複なしで生成するには、範囲が生成個数より大きくなければなりません。",
    errorNoCharset: "少なくとも1つの文字種類を選択してください。",
    howTitle: "使用方法",
    howSteps: [
      "数字モードまたは文字列モードを選択します。",
      "範囲、個数、長さ、文字の種類などのオプションを設定します。",
      "「生成する」ボタンを押すと結果が即座に表示され、コピーボタンでそのままコピーできます。",
    ],
    faq: [
      { q: "抽選や重要な決定に使っても良いですか？", a: "このツールはブラウザのMath.random()に基づく乱数を使用する一般的なユーティリティで、簡単な抽選やアイデア発想に適しています。セキュリティが重要な暗号鍵生成などには使用しないでください。" },
      { q: "重複なし生成はどのように動作しますか？", a: "設定した範囲内で異なる数字のみを選ぶことを保証し、範囲が生成個数より小さい場合はエラーメッセージが表示されます。" },
    ],
    disclaimer: "このツールは一般的な用途の乱数生成器であり、暗号学的セキュリティ用途には使用しないでください。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Números y Cadenas Aleatorias",
    subtitle: "Genera al instante números aleatorios en un rango, o cadenas aleatorias con conjuntos de caracteres personalizados.",
    modeNumber: "Modo Número",
    modeString: "Modo Cadena",
    minLabel: "Mínimo",
    maxLabel: "Máximo",
    countLabel: "Cantidad",
    uniqueLabel: "Sin Duplicados",
    lengthLabel: "Longitud de Cadena",
    charsetLabel: "Tipos de Caracteres",
    charsetUpper: "Mayúsculas (A-Z)",
    charsetLower: "Minúsculas (a-z)",
    charsetDigits: "Dígitos (0-9)",
    charsetSymbols: "Símbolos (!@#$%)",
    generateBtn: "Generar",
    resultLabel: "Resultado",
    copyBtn: "Copiar Resultado",
    copied: "¡Copiado!",
    errorRange: "El mínimo debe ser menor que el máximo.",
    errorUniqueRange: "El rango debe ser mayor que la cantidad al generar sin duplicados.",
    errorNoCharset: "Selecciona al menos un tipo de carácter.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige el modo número o el modo cadena.",
      "Configura las opciones deseadas: rango, cantidad, longitud, tipos de caracteres.",
      "Haz clic en \"Generar\" para ver resultados al instante y cópialos con un clic.",
    ],
    faq: [
      { q: "¿Puedo usarlo para sorteos o decisiones importantes?", a: "Esta herramienta usa Math.random() del navegador y es adecuada para sorteos casuales o lluvia de ideas, pero no para generación de claves criptográficas ni nada sensible a la seguridad." },
      { q: "¿Cómo funciona la generación sin duplicados?", a: "Garantiza números distintos dentro de tu rango, y muestra un error si el rango es menor que la cantidad solicitada." },
    ],
    disclaimer: "Esta es una herramienta de generación aleatoria de propósito general y no debe usarse para fines de seguridad criptográfica.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
