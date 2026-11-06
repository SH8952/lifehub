export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  arabicLabel: string;
  romanLabel: string;
  invalidRoman: string;
  outOfRange: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "로마 숫자 변환기",
    subtitle: "아라비아 숫자와 로마 숫자를 양방향으로 변환합니다.",
    arabicLabel: "아라비아 숫자 (1~3999)",
    romanLabel: "로마 숫자",
    invalidRoman: "올바른 로마 숫자 형식이 아닙니다.",
    outOfRange: "1~3999 범위의 숫자만 변환 가능합니다.",
    howTitle: "사용 방법",
    howSteps: [
      "아라비아 숫자 입력창에 숫자를 입력하면 로마 숫자로 자동 변환됩니다.",
      "반대로 로마 숫자 입력창에 로마 숫자를 입력하면 아라비아 숫자로 변환됩니다.",
      "로마 숫자는 1~3999 범위만 표현 가능합니다(로마 숫자 체계의 한계).",
      "로마 숫자는 감법 표기(예: IV=4, IX=9)를 사용하므로, 입력 시에도 이 규칙에 맞는 올바른 조합이어야 변환됩니다.",
    ],
    faq: [
      { q: "0이나 음수도 변환할 수 있나요?", a: "아니요, 로마 숫자 체계에는 0과 음수 개념이 없어 1~3999의 양의 정수만 지원합니다." },
      { q: "소문자 로마 숫자도 인식하나요?", a: "네, 대소문자 구분 없이 입력해도 자동으로 인식해 변환합니다." },
      { q: "왜 3999까지만 변환할 수 있나요?", a: "표준 로마 숫자 표기법에서 가장 큰 단일 기호는 M(1000)이며, 반복 가능한 최대 조합이 MMMCMXCIX(3999)이기 때문입니다. 이보다 큰 수는 특수 표기(윗줄 등)가 필요합니다." },
      { q: "로마 숫자는 요즘 어디에 쓰이나요?", a: "영화 속편 번호, 시계 문자판, 서적의 서문 쪽수, 올림픽 회차, 왕족의 이름(예: 엘리자베스 2세) 등에서 여전히 흔히 사용됩니다." },
      { q: "일부 시계에서 4를 IIII로 표기하는 걸 봤는데, 오류인가요?", a: "오류가 아닙니다. 표준 표기는 IV이지만, 전통적으로 시계 문자판에서는 미관상 균형(VI와의 혼동 방지 등 여러 설이 있음)을 위해 관례적으로 IIII를 사용하기도 합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Roman Numeral Converter",
    subtitle: "Convert between Arabic numerals and Roman numerals in both directions.",
    arabicLabel: "Arabic Numeral (1–3999)",
    romanLabel: "Roman Numeral",
    invalidRoman: "Not a valid Roman numeral.",
    outOfRange: "Only numbers from 1 to 3999 can be converted.",
    howTitle: "How to Use",
    howSteps: [
      "Type a number in the Arabic numeral box and it converts to Roman numerals automatically.",
      "Conversely, type Roman numerals in that box to convert to Arabic numbers.",
      "Roman numerals can only represent 1–3999 (a limitation of the numeral system itself).",
      "Roman numerals use subtractive notation (e.g., IV = 4, IX = 9), so your input must follow this rule to convert correctly.",
    ],
    faq: [
      { q: "Can it convert 0 or negative numbers?", a: "No, the Roman numeral system has no concept of zero or negatives, so only positive integers 1–3999 are supported." },
      { q: "Does it recognize lowercase Roman numerals?", a: "Yes, input is recognized regardless of case." },
      { q: "Why can it only convert up to 3999?", a: "In standard Roman numeral notation, the largest single symbol is M (1000), and the largest value expressible through normal repetition is MMMCMXCIX (3999). Larger numbers require special notation like an overline." },
      { q: "Where are Roman numerals still used today?", a: "They're still commonly seen in movie sequel numbers, clock faces, front-matter page numbers in books, Olympic Games numbering, and royal names (e.g., Elizabeth II)." },
      { q: "I've seen some clocks show 4 as IIII — is that a mistake?", a: "It's not an error. While IV is the standard notation, clock faces have traditionally used IIII for visual balance (there are several theories, including avoiding confusion with VI)." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "ローマ数字変換ツール",
    subtitle: "アラビア数字とローマ数字を双方向に変換します。",
    arabicLabel: "アラビア数字（1〜3999）",
    romanLabel: "ローマ数字",
    invalidRoman: "正しいローマ数字の形式ではありません。",
    outOfRange: "1〜3999の範囲の数字のみ変換可能です。",
    howTitle: "使用方法",
    howSteps: [
      "アラビア数字の入力欄に数字を入力すると自動的にローマ数字に変換されます。",
      "逆にローマ数字の入力欄にローマ数字を入力するとアラビア数字に変換されます。",
      "ローマ数字は1〜3999の範囲のみ表現可能です（ローマ数字体系の限界）。",
      "ローマ数字は減算表記（例：IV=4、IX=9）を使用するため、入力時もこの規則に合った正しい組み合わせでないと変換されません。",
    ],
    faq: [
      { q: "0や負の数も変換できますか？", a: "いいえ、ローマ数字体系には0や負の数の概念がないため、1〜3999の正の整数のみ対応しています。" },
      { q: "小文字のローマ数字も認識しますか？", a: "はい、大文字・小文字を区別せず自動的に認識して変換します。" },
      { q: "なぜ3999までしか変換できないのですか？", a: "標準的なローマ数字表記法では最大の単一記号はM（1000）であり、繰り返しで表現できる最大値がMMMCMXCIX（3999）だからです。これより大きい数は特殊表記（上線など）が必要です。" },
      { q: "ローマ数字は今でもどこで使われていますか？", a: "映画の続編番号、時計の文字盤、書籍の序文ページ番号、オリンピックの回数、王族の名前（例：エリザベス2世）などで今でも広く使われています。" },
      { q: "一部の時計で4をIIIIと表記しているのを見ましたが、間違いですか？", a: "間違いではありません。標準表記はIVですが、時計の文字盤では伝統的に見た目のバランス（VIとの混同を避けるためなど諸説あり）のためIIIIが慣例的に使われることがあります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Números Romanos",
    subtitle: "Convierte entre números arábigos y números romanos en ambas direcciones.",
    arabicLabel: "Número Arábigo (1–3999)",
    romanLabel: "Número Romano",
    invalidRoman: "No es un número romano válido.",
    outOfRange: "Solo se pueden convertir números del 1 al 3999.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe un número en el cuadro arábigo y se convierte automáticamente a números romanos.",
      "Al contrario, escribe números romanos en ese cuadro para convertir a números arábigos.",
      "Los números romanos solo pueden representar del 1 al 3999 (una limitación del propio sistema).",
      "Los números romanos usan notación sustractiva (por ejemplo, IV = 4, IX = 9), así que tu entrada debe seguir esta regla para convertirse correctamente.",
    ],
    faq: [
      { q: "¿Puede convertir 0 o números negativos?", a: "No, el sistema de números romanos no tiene concepto de cero ni negativos, así que solo se admiten enteros positivos del 1 al 3999." },
      { q: "¿Reconoce números romanos en minúsculas?", a: "Sí, la entrada se reconoce sin importar las mayúsculas o minúsculas." },
      { q: "¿Por qué solo puede convertir hasta 3999?", a: "En la notación romana estándar, el símbolo individual más grande es M (1000), y el mayor valor expresable mediante repetición normal es MMMCMXCIX (3999). Números mayores requieren notación especial como una línea superior." },
      { q: "¿Dónde se siguen usando hoy los números romanos?", a: "Todavía son comunes en números de secuelas de películas, esferas de relojes, numeración de páginas preliminares de libros, la numeración de los Juegos Olímpicos y nombres reales (por ejemplo, Isabel II)." },
      { q: "He visto relojes que muestran el 4 como IIII, ¿es un error?", a: "No es un error. Aunque IV es la notación estándar, las esferas de reloj han usado tradicionalmente IIII por equilibrio visual (hay varias teorías, incluida evitar confusión con VI)." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
