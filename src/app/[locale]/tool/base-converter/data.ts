export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  inputBaseLabel: string;
  binaryLabel: string;
  octalLabel: string;
  decimalLabel: string;
  hexLabel: string;
  copyBtn: string;
  copied: string;
  errorInvalid: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "진법 변환기",
    subtitle: "2진수, 8진수, 10진수, 16진수 사이의 숫자를 즉시 변환합니다.",
    inputLabel: "입력 값",
    inputBaseLabel: "입력 진법",
    binaryLabel: "2진수 (Binary)",
    octalLabel: "8진수 (Octal)",
    decimalLabel: "10진수 (Decimal)",
    hexLabel: "16진수 (Hex)",
    copyBtn: "복사",
    copied: "복사됨!",
    errorInvalid: "선택한 진법에 맞는 올바른 숫자를 입력하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "변환할 숫자를 입력합니다.",
      "입력한 숫자의 진법(2/8/10/16진수)을 선택합니다.",
      "네 가지 진법으로 변환된 결과를 바로 확인하고 복사하세요.",
    ],
    faq: [
      { q: "음수나 소수도 변환할 수 있나요?", a: "현재 버전은 0 이상의 정수만 지원합니다. 음수나 소수점이 있는 값은 변환되지 않습니다." },
      { q: "16진수 입력 시 접두사(0x)를 붙여야 하나요?", a: "아니요, 접두사 없이 숫자만 입력하면 됩니다. 예: FF, 1A2B 등." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Number Base Converter",
    subtitle: "Instantly convert numbers between binary, octal, decimal, and hexadecimal.",
    inputLabel: "Input Value",
    inputBaseLabel: "Input Base",
    binaryLabel: "Binary",
    octalLabel: "Octal",
    decimalLabel: "Decimal",
    hexLabel: "Hexadecimal",
    copyBtn: "Copy",
    copied: "Copied!",
    errorInvalid: "Please enter a valid number for the selected base.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the number you want to convert.",
      "Select the base of your input (binary/octal/decimal/hex).",
      "View the result in all four bases and copy as needed.",
    ],
    faq: [
      { q: "Can negative numbers or decimals be converted?", a: "This version only supports non-negative integers. Negative numbers or decimal values are not converted." },
      { q: "Do I need to add a prefix (0x) for hex input?", a: "No, just enter the digits without a prefix. For example: FF, 1A2B." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "進数変換ツール",
    subtitle: "2進数、8進数、10進数、16進数の間で数値を即座に変換します。",
    inputLabel: "入力値",
    inputBaseLabel: "入力進数",
    binaryLabel: "2進数（Binary）",
    octalLabel: "8進数（Octal）",
    decimalLabel: "10進数（Decimal）",
    hexLabel: "16進数（Hex）",
    copyBtn: "コピー",
    copied: "コピーしました！",
    errorInvalid: "選択した進数に合った正しい数値を入力してください。",
    howTitle: "使用方法",
    howSteps: [
      "変換したい数値を入力します。",
      "入力した数値の進数（2/8/10/16進数）を選択します。",
      "4つの進数に変換された結果を確認しコピーしましょう。",
    ],
    faq: [
      { q: "負の数や小数も変換できますか？", a: "現在のバージョンは0以上の整数のみサポートしています。負の数や小数点のある値は変換されません。" },
      { q: "16進数入力時にプレフィックス（0x）を付ける必要がありますか？", a: "いいえ、プレフィックスなしで数字のみ入力してください。例：FF、1A2Bなど。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Bases Numéricas",
    subtitle: "Convierte instantáneamente números entre binario, octal, decimal y hexadecimal.",
    inputLabel: "Valor de Entrada",
    inputBaseLabel: "Base de Entrada",
    binaryLabel: "Binario",
    octalLabel: "Octal",
    decimalLabel: "Decimal",
    hexLabel: "Hexadecimal",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    errorInvalid: "Introduce un número válido para la base seleccionada.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el número que deseas convertir.",
      "Selecciona la base de tu entrada (binario/octal/decimal/hex).",
      "Ve el resultado en las cuatro bases y copia según necesites.",
    ],
    faq: [
      { q: "¿Se pueden convertir números negativos o decimales?", a: "Esta versión solo soporta enteros no negativos. Los números negativos o con decimales no se convierten." },
      { q: "¿Necesito agregar un prefijo (0x) para entrada hexadecimal?", a: "No, solo introduce los dígitos sin prefijo. Por ejemplo: FF, 1A2B." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
