export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  inputPlaceholder: string;
  clearBtn: string;
  emptyMsg: string;
  tooLongMsg: string;
  tableCharHeader: string;
  tableCodepointHeader: string;
  tableDecimalHeader: string;
  tableUtf8Header: string;
  tableUtf16Header: string;
  tableEntityHeader: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "유니코드 문자 정보",
    subtitle: "문자 하나하나의 유니코드 코드포인트, UTF-8/UTF-16 바이트, HTML 엔티티를 확인하세요 (브라우저에서 100% 처리)",
    inputLabel: "텍스트 입력",
    inputPlaceholder: "분석할 문자를 입력하세요 (예: A가🙂)",
    clearBtn: "지우기",
    emptyMsg: "위에 문자를 입력하면 상세 정보가 표시됩니다",
    tooLongMsg: "⚠️ 최대 200자까지만 한 번에 분석할 수 있습니다. 입력 중 앞 200자만 표시됩니다.",
    tableCharHeader: "문자",
    tableCodepointHeader: "코드포인트",
    tableDecimalHeader: "10진수",
    tableUtf8Header: "UTF-8 (hex)",
    tableUtf16Header: "UTF-16 코드 유닛",
    tableEntityHeader: "HTML 엔티티",
    howTitle: "사용 방법",
    howSteps: [
      "입력창에 분석하고 싶은 문자나 문자열을 입력합니다.",
      "각 문자별로 유니코드 코드포인트(U+XXXX), 10진수, UTF-8 바이트, UTF-16 코드 유닛, HTML 엔티티가 표로 표시됩니다.",
      "이모지, 한글, 일본어, 특수문자 등 어떤 문자든 입력해 확인할 수 있습니다.",
      "프로그래밍에서 특정 문자의 코드값이 필요하거나, 깨진 문자를 진단할 때 활용하세요.",
    ],
    faq: [
      {
        q: "입력한 텍스트가 서버로 전송되나요?",
        a: "아니요. 모든 분석은 사용자의 브라우저 안에서만 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "이모지처럼 코드포인트가 2개(서로게이트 쌍)로 이루어진 문자도 처리되나요?",
        a: "네. 문자 단위 분리 시 서로게이트 쌍을 고려해 실제 유니코드 문자(코드포인트) 단위로 정확히 분리합니다.",
      },
      {
        q: "HTML 엔티티는 어떻게 사용하나요?",
        a: "표시된 '&#숫자;' 형식의 문자열을 HTML 문서에 그대로 넣으면 해당 문자가 렌더링됩니다. 특수문자를 안전하게 표시해야 할 때 유용합니다.",
      },
    ],
    disclaimer: "⚠️ 한 번에 분석 가능한 문자 수는 최대 200자로 제한됩니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Unicode Character Info",
    subtitle: "Look up each character's Unicode code point, UTF-8/UTF-16 bytes, and HTML entity (100% processed in your browser)",
    inputLabel: "Text Input",
    inputPlaceholder: "Enter characters to inspect (e.g. A가🙂)",
    clearBtn: "Clear",
    emptyMsg: "Enter characters above to see detailed info",
    tooLongMsg: "Only the first 200 characters can be analyzed at once; the rest will be ignored.",
    tableCharHeader: "Char",
    tableCodepointHeader: "Code Point",
    tableDecimalHeader: "Decimal",
    tableUtf8Header: "UTF-8 (hex)",
    tableUtf16Header: "UTF-16 Code Units",
    tableEntityHeader: "HTML Entity",
    howTitle: "How to Use",
    howSteps: [
      "Type the character or string you want to inspect into the input box.",
      "Each character's Unicode code point (U+XXXX), decimal value, UTF-8 bytes, UTF-16 code units, and HTML entity appear in a table.",
      "Works with emoji, Korean, Japanese, special symbols — any character at all.",
      "Useful when you need a character's code value for programming, or when diagnosing garbled text.",
    ],
    faq: [
      {
        q: "Is my text sent to a server?",
        a: "No. All analysis happens entirely inside your browser. Nothing is ever uploaded.",
      },
      {
        q: "Does it handle characters made of surrogate pairs, like emoji?",
        a: "Yes. Characters are split accounting for surrogate pairs, so each row represents one true Unicode code point.",
      },
      {
        q: "How do I use the HTML entity?",
        a: "Paste the shown '&#number;' string directly into an HTML document to render that character — handy for safely displaying special characters.",
      },
    ],
    disclaimer: "Only up to 200 characters can be analyzed at once.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "ユニコード文字情報",
    subtitle: "1文字ごとのユニコードコードポイント、UTF-8/UTF-16バイト、HTMLエンティティを確認できます（ブラウザで100%処理）",
    inputLabel: "テキスト入力",
    inputPlaceholder: "調べたい文字を入力してください（例: A가🙂）",
    clearBtn: "クリア",
    emptyMsg: "上に文字を入力すると詳細情報が表示されます",
    tooLongMsg: "一度に分析できるのは最大200文字までです。それ以降は無視されます。",
    tableCharHeader: "文字",
    tableCodepointHeader: "コードポイント",
    tableDecimalHeader: "10進数",
    tableUtf8Header: "UTF-8（16進数）",
    tableUtf16Header: "UTF-16コードユニット",
    tableEntityHeader: "HTMLエンティティ",
    howTitle: "使い方",
    howSteps: [
      "入力欄に調べたい文字や文字列を入力します。",
      "各文字ごとにユニコードコードポイント（U+XXXX）、10進数、UTF-8バイト、UTF-16コードユニット、HTMLエンティティが表で表示されます。",
      "絵文字、韓国語、日本語、特殊記号など、どの文字でも入力して確認できます。",
      "プログラミングで特定の文字のコード値が必要な場合や、文字化けの診断に活用してください。",
    ],
    faq: [
      {
        q: "入力したテキストはサーバーに送信されますか？",
        a: "いいえ。すべての分析はブラウザ内だけで処理され、データはサーバーに送信されません。",
      },
      {
        q: "絵文字のようにサロゲートペア（2つのコード単位）で構成される文字も処理できますか？",
        a: "はい。サロゲートペアを考慮して文字を分割するため、各行は実際の1つのユニコード文字（コードポイント）に対応します。",
      },
      {
        q: "HTMLエンティティはどう使いますか？",
        a: "表示された「&#数字;」という文字列をHTML文書にそのまま入れると、その文字が表示されます。特殊文字を安全に表示したいときに便利です。",
      },
    ],
    disclaimer: "一度に分析できる文字数は最大200文字までに制限されます。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Información de Caracteres Unicode",
    subtitle: "Consulta el punto de código Unicode, bytes UTF-8/UTF-16 y entidad HTML de cada caracter (100% procesado en tu navegador)",
    inputLabel: "Entrada de Texto",
    inputPlaceholder: "Ingresa los caracteres a analizar (ej. A가🙂)",
    clearBtn: "Borrar",
    emptyMsg: "Ingresa caracteres arriba para ver la información detallada",
    tooLongMsg: "Solo se pueden analizar los primeros 200 caracteres a la vez; el resto se ignorara.",
    tableCharHeader: "Caracter",
    tableCodepointHeader: "Punto de Código",
    tableDecimalHeader: "Decimal",
    tableUtf8Header: "UTF-8 (hex)",
    tableUtf16Header: "Unidades de Código UTF-16",
    tableEntityHeader: "Entidad HTML",
    howTitle: "Como Usar",
    howSteps: [
      "Escribe el caracter o cadena que deseas analizar en el cuadro de entrada.",
      "El punto de código Unicode (U+XXXX), valor decimal, bytes UTF-8, unidades de código UTF-16 y entidad HTML de cada caracter aparecen en una tabla.",
      "Funciona con emojis, coreano, japones, simbolos especiales... cualquier caracter.",
      "Útil cuando necesitas el valor de código de un caracter para programar, o para diagnosticar texto con errores de codificación.",
    ],
    faq: [
      {
        q: "Se envia mi texto a un servidor?",
        a: "No. Todo el análisis ocurre completamente dentro de tu navegador. Nada se sube jamás.",
      },
      {
        q: "Maneja caracteres formados por pares sustitutos, como los emojis?",
        a: "Si. Los caracteres se dividen teniendo en cuenta los pares sustitutos, por lo que cada fila representa un verdadero punto de código Unicode.",
      },
      {
        q: "Como uso la entidad HTML?",
        a: "Pega la cadena '&#número;' mostrada directamente en un documento HTML para renderizar ese caracter, útil para mostrar caracteres especiales de forma segura.",
      },
    ],
    disclaimer: "Solo se pueden analizar hasta 200 caracteres a la vez.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningún servidor.",
  },
};
