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
      "숫자나 진법을 바꿀 때마다 나머지 세 가지 진법 결과가 즉시 자동으로 갱신됩니다.",
    ],
    faq: [
      { q: "음수나 소수도 변환할 수 있나요?", a: "현재 버전은 0 이상의 정수만 지원합니다. 음수나 소수점이 있는 값은 변환되지 않습니다." },
      { q: "16진수 입력 시 접두사(0x)를 붙여야 하나요?", a: "아니요, 접두사 없이 숫자만 입력하면 됩니다. 예: FF, 1A2B 등." },
      { q: "아주 큰 숫자도 변환할 수 있나요?", a: "자바스크립트의 안전한 정수 범위(약 2^53) 내에서는 정확하게 변환됩니다. 이보다 훨씬 큰 숫자는 정밀도가 떨어질 수 있습니다." },
      { q: "이 변환기는 보통 어디에 사용하나요?", a: "프로그래밍 시 비트 연산 결과 확인, 색상 코드(16진수) 해석, 네트워크·메모리 주소 분석, 전산학 과제 등에서 자주 사용됩니다." },
      { q: "16진수 입력 시 대소문자를 구분하나요?", a: "아니요, 대문자(FF)와 소문자(ff) 모두 동일하게 인식하여 변환합니다." },
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
      "Every time you change the number or base, the other three base results update automatically and instantly.",
    ],
    faq: [
      { q: "Can negative numbers or decimals be converted?", a: "This version only supports non-negative integers. Negative numbers or decimal values are not converted." },
      { q: "Do I need to add a prefix (0x) for hex input?", a: "No, just enter the digits without a prefix. For example: FF, 1A2B." },
      { q: "Can very large numbers be converted?", a: "Numbers within JavaScript's safe integer range (about 2^53) convert accurately. Numbers much larger than that may lose precision." },
      { q: "What is this converter typically used for?", a: "It's commonly used for checking bitwise operation results while coding, interpreting hex color codes, analyzing network or memory addresses, and computer science coursework." },
      { q: "Is hex input case-sensitive?", a: "No, both uppercase (FF) and lowercase (ff) are recognized and converted the same way." },
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
      "数値や進数を変更するたびに、残り3つの進数の結果が即座に自動更新されます。",
    ],
    faq: [
      { q: "負の数や小数も変換できますか？", a: "現在のバージョンは0以上の整数のみサポートしています。負の数や小数点のある値は変換されません。" },
      { q: "16進数入力時にプレフィックス（0x）を付ける必要がありますか？", a: "いいえ、プレフィックスなしで数字のみ入力してください。例：FF、1A2Bなど。" },
      { q: "非常に大きな数値も変換できますか？", a: "JavaScriptの安全な整数範囲（約2^53）内であれば正確に変換されます。これを大きく超える数値は精度が落ちる場合があります。" },
      { q: "この変換ツールは通常どこで使われますか？", a: "プログラミング時のビット演算結果の確認、カラーコード（16進数）の解釈、ネットワーク・メモリアドレスの分析、情報科学の課題などでよく使われます。" },
      { q: "16進数入力時に大文字・小文字は区別されますか？", a: "いいえ、大文字（FF）と小文字（ff）のどちらも同じように認識され変換されます。" },
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
      "Cada vez que cambias el número o la base, los otros tres resultados se actualizan automática e instantáneamente.",
    ],
    faq: [
      { q: "¿Se pueden convertir números negativos o decimales?", a: "Esta versión solo soporta enteros no negativos. Los números negativos o con decimales no se convierten." },
      { q: "¿Necesito agregar un prefijo (0x) para entrada hexadecimal?", a: "No, solo introduce los dígitos sin prefijo. Por ejemplo: FF, 1A2B." },
      { q: "¿Se pueden convertir números muy grandes?", a: "Los números dentro del rango entero seguro de JavaScript (unos 2^53) se convierten con precisión. Números mucho mayores pueden perder precisión." },
      { q: "¿Para qué se usa normalmente este conversor?", a: "Se usa comúnmente para verificar resultados de operaciones bit a bit al programar, interpretar códigos de color hexadecimales, analizar direcciones de red o memoria, y en trabajos de ciencias de la computación." },
      { q: "¿La entrada hexadecimal distingue entre mayúsculas y minúsculas?", a: "No, tanto mayúsculas (FF) como minúsculas (ff) se reconocen y convierten de la misma manera." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
