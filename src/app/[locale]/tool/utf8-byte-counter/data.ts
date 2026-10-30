export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  charCount: string;
  codePointCount: string;
  byteCount: string;
  byteCountEucKr: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "UTF-8 바이트 수 계산기",
    subtitle: "텍스트의 글자 수, UTF-8 바이트 수, 유니코드 코드포인트 수를 동시에 확인하세요.",
    inputLabel: "텍스트 입력",
    charCount: "글자 수 (JS length)",
    codePointCount: "유니코드 코드포인트 수",
    byteCount: "UTF-8 바이트 수",
    byteCountEucKr: "EUC-KR 추정 바이트 수 (한글 2바이트 기준)",
    howTitle: "사용 방법",
    howSteps: [
      "텍스트 입력창에 확인하고 싶은 문자열을 입력합니다.",
      "글자 수, 코드포인트 수, UTF-8 바이트 수가 실시간으로 계산됩니다.",
      "데이터베이스 컬럼 길이나 SMS 바이트 제한을 확인할 때 유용합니다.",
    ],
    faq: [
      { q: "글자 수와 UTF-8 바이트 수가 왜 다른가요?", a: "영문·숫자는 1바이트지만 한글·한자 등은 UTF-8에서 보통 3바이트를 차지하기 때문입니다. 이모지는 4바이트인 경우가 많습니다." },
      { q: "코드포인트 수는 왜 글자 수와 다를 수 있나요?", a: "일부 이모지나 특수 문자는 JavaScript의 length 기준으로는 2개(서로게이트 쌍)로 계산되지만 실제 유니코드 코드포인트는 1개이기 때문입니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 입력한 텍스트를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "UTF-8 Byte Counter",
    subtitle: "See character count, UTF-8 byte count, and Unicode code point count all at once.",
    inputLabel: "Enter Text",
    charCount: "Character Count (JS length)",
    codePointCount: "Unicode Code Points",
    byteCount: "UTF-8 Byte Count",
    byteCountEucKr: "Estimated EUC-KR Bytes (2 bytes per Korean char)",
    howTitle: "How to Use",
    howSteps: [
      "Type the text you want to check into the input box.",
      "Character count, code point count, and UTF-8 byte count are calculated in real time.",
      "Useful for checking database column limits or SMS byte limits.",
    ],
    faq: [
      { q: "Why do character count and UTF-8 byte count differ?", a: "Letters and digits take 1 byte, but Korean, Chinese, and similar characters usually take 3 bytes in UTF-8. Emoji often take 4 bytes." },
      { q: "Why can code point count differ from character count?", a: "Some emoji or special characters count as 2 in JavaScript's length (surrogate pairs) but are actually 1 Unicode code point." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your text on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "UTF-8バイト数計算機",
    subtitle: "テキストの文字数、UTF-8バイト数、Unicodeコードポイント数を同時に確認できます。",
    inputLabel: "テキスト入力",
    charCount: "文字数（JS length）",
    codePointCount: "Unicodeコードポイント数",
    byteCount: "UTF-8バイト数",
    byteCountEucKr: "EUC-KR推定バイト数（ハングル2バイト基準）",
    howTitle: "使用方法",
    howSteps: [
      "確認したい文字列をテキスト入力欄に入力します。",
      "文字数、コードポイント数、UTF-8バイト数がリアルタイムで計算されます。",
      "データベースのカラム長やSMSのバイト制限を確認する際に便利です。",
    ],
    faq: [
      { q: "文字数とUTF-8バイト数はなぜ異なりますか？", a: "英数字は1バイトですが、ハングルや漢字などはUTF-8で通常3バイトを占めるためです。絵文字は4バイトの場合が多いです。" },
      { q: "コードポイント数はなぜ文字数と異なることがありますか？", a: "一部の絵文字や特殊文字はJavaScriptのlength基準では2個（サロゲートペア）として計算されますが、実際のUnicodeコードポイントは1個だからです。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、入力したテキストをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Contador de Bytes UTF-8",
    subtitle: "Consulta el número de caracteres, bytes UTF-8 y puntos de código Unicode a la vez.",
    inputLabel: "Introducir Texto",
    charCount: "Caracteres (JS length)",
    codePointCount: "Puntos de Código Unicode",
    byteCount: "Bytes UTF-8",
    byteCountEucKr: "Bytes EUC-KR Estimados",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe el texto que quieres comprobar en el cuadro.",
      "El conteo de caracteres, puntos de código y bytes UTF-8 se calcula en tiempo real.",
      "Útil para comprobar límites de columnas de bases de datos o límites de bytes de SMS.",
    ],
    faq: [
      { q: "¿Por qué difieren el conteo de caracteres y bytes UTF-8?", a: "Las letras y dígitos ocupan 1 byte, pero caracteres como coreano o chino suelen ocupar 3 bytes en UTF-8. Los emojis suelen ocupar 4 bytes." },
      { q: "¿Por qué puede diferir el conteo de puntos de código del de caracteres?", a: "Algunos emojis o caracteres especiales cuentan como 2 en el length de JavaScript (pares sustitutos) pero son en realidad 1 punto de código Unicode." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu texto en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
