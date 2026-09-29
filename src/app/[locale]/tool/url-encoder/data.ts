export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  encodeMode: string;
  decodeMode: string;
  modeComponent: string;
  modeFull: string;
  inputLabel: string;
  outputLabel: string;
  clearBtn: string;
  copyBtn: string;
  copiedMsg: string;
  invalidMsg: string;
  emptyMsg: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "URL 인코더 · 디코더",
    subtitle: "URL 또는 쿼리 문자열을 퍼센트 인코딩(%XX)하거나 다시 디코딩하세요 (브라우저에서 100% 처리)",
    encodeMode: "인코딩",
    decodeMode: "디코딩",
    modeComponent: "구성요소 모드 (쿼리 파라미터 값 등)",
    modeFull: "전체 URL 모드 (URL 특수문자 유지)",
    inputLabel: "입력",
    outputLabel: "결과",
    clearBtn: "지우기",
    copyBtn: "복사",
    copiedMsg: "복사되었습니다",
    invalidMsg: "❌ 디코딩할 수 없는 문자열입니다",
    emptyMsg: "위에 텍스트를 입력하세요",
    howTitle: "사용 방법",
    howSteps: [
      "인코딩 또는 디코딩 모드를 선택합니다.",
      "구성요소 모드(쿼리 파라미터 값 등 URL의 일부)와 전체 URL 모드(?, &, / 등을 유지) 중 하나를 선택합니다.",
      "입력창에 텍스트나 URL을 붙여넣으면 결과가 실시간으로 표시됩니다.",
      "복사 버튼으로 결과를 바로 복사해 사용합니다.",
    ],
    faq: [
      {
        q: "구성요소 모드와 전체 URL 모드의 차이는 무엇인가요?",
        a: "구성요소 모드(encodeURIComponent)는 쿼리 파라미터 값처럼 URL의 한 조각을 인코딩할 때 사용하며 ?, &, / 같은 문자도 함께 인코딩합니다. 전체 URL 모드(encodeURI)는 완전한 URL 전체를 인코딩할 때 사용하며 URL 구조에 필요한 이 문자들은 그대로 유지합니다.",
      },
      {
        q: "왜 URL 인코딩이 필요한가요?",
        a: "URL에는 공백, 한글, 특수문자를 직접 포함할 수 없습니다. 이런 문자들을 %XX 형식의 안전한 문자로 변환해야 서버가 URL을 올바르게 해석할 수 있습니다.",
      },
      {
        q: "입력한 URL이 서버로 전송되나요?",
        a: "아니요. 모든 인코딩·디코딩은 브라우저 내장 함수(encodeURIComponent/decodeURIComponent 등)로 처리되며, 실제로 해당 URL에 접속하거나 데이터를 전송하지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 이 도구는 문자열 변환만 수행하며 실제로 URL에 접속하지 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "URL Encoder & Decoder",
    subtitle: "Percent-encode (%XX) or decode a URL or query string (100% processed in your browser)",
    encodeMode: "Encode",
    decodeMode: "Decode",
    modeComponent: "Component Mode (query parameter values, etc.)",
    modeFull: "Full URL Mode (preserves URL structure characters)",
    inputLabel: "Input",
    outputLabel: "Result",
    clearBtn: "Clear",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    invalidMsg: "❌ This string cannot be decoded",
    emptyMsg: "Enter text above",
    howTitle: "How to Use",
    howSteps: [
      "Choose Encode or Decode mode.",
      "Choose Component Mode (for a single piece of a URL like a query value) or Full URL Mode (keeps ?, &, / etc. intact).",
      "Paste text or a URL into the input box and see the result update live.",
      "Copy the result with the copy button and use it right away.",
    ],
    faq: [
      {
        q: "What's the difference between Component Mode and Full URL Mode?",
        a: "Component Mode (encodeURIComponent) is for encoding a single piece of a URL, like a query parameter value, and encodes characters like ?, &, / too. Full URL Mode (encodeURI) is for encoding an entire URL and keeps those structural characters intact.",
      },
      {
        q: "Why is URL encoding needed?",
        a: "URLs can't directly contain spaces, non-ASCII characters, or certain special characters. Converting them into safe %XX sequences lets servers interpret the URL correctly.",
      },
      {
        q: "Is my URL sent to a server?",
        a: "No. All encoding and decoding uses your browser's built-in functions (encodeURIComponent/decodeURIComponent, etc.), and no request is actually made to that URL.",
      },
    ],
    disclaimer: "This tool only converts text — it never actually visits any URL.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "URLエンコーダー・デコーダー",
    subtitle: "URLやクエリ文字列をパーセントエンコード（%XX）、またはデコードします（ブラウザで100%処理）",
    encodeMode: "エンコード",
    decodeMode: "デコード",
    modeComponent: "コンポーネントモード（クエリパラメータ値など）",
    modeFull: "全体URLモード（URL構造文字を保持）",
    inputLabel: "入力",
    outputLabel: "結果",
    clearBtn: "クリア",
    copyBtn: "コピー",
    copiedMsg: "コピーしました",
    invalidMsg: "❌ デコードできない文字列です",
    emptyMsg: "上にテキストを入力してください",
    howTitle: "使い方",
    howSteps: [
      "エンコードまたはデコードモードを選びます。",
      "コンポーネントモード（クエリ値などURLの一部）または全体URLモード（?、&、/などを維持）を選びます。",
      "入力欄にテキストやURLを貼り付けるとリアルタイムで結果が表示されます。",
      "コピーボタンで結果をそのままコピーして使用します。",
    ],
    faq: [
      {
        q: "コンポーネントモードと全体URLモードの違いは何ですか？",
        a: "コンポーネントモード（encodeURIComponent）はクエリパラメータ値などURLの一部分をエンコードする際に使用し、?、&、/なども一緒にエンコードします。全体URLモード（encodeURI）は完全なURL全体をエンコードする際に使用し、URL構造に必要なこれらの文字はそのまま維持します。",
      },
      {
        q: "なぜURLエンコードが必要なのですか？",
        a: "URLにはスペース、日本語、特殊文字を直接含めることができません。これらの文字を%XX形式の安全な文字に変換することで、サーバーがURLを正しく解釈できるようになります。",
      },
      {
        q: "入力したURLはサーバーに送信されますか？",
        a: "いいえ。すべてのエンコード・デコードはブラウザ内蔵の関数（encodeURIComponent/decodeURIComponentなど）で処理され、実際にそのURLにアクセスすることはありません。",
      },
    ],
    disclaimer: "⚠️ このツールは文字列変換のみを行い、実際にURLへアクセスすることはありません。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Codificador y Decodificador de URL",
    subtitle: "Codifica en porcentaje (%XX) o decodifica una URL o cadena de consulta (100% procesado en tu navegador)",
    encodeMode: "Codificar",
    decodeMode: "Decodificar",
    modeComponent: "Modo Componente (valores de parametros de consulta, etc.)",
    modeFull: "Modo URL Completa (conserva caracteres estructurales de la URL)",
    inputLabel: "Entrada",
    outputLabel: "Resultado",
    clearBtn: "Borrar",
    copyBtn: "Copiar",
    copiedMsg: "Copiado!",
    invalidMsg: "❌ Esta cadena no se puede decodificar",
    emptyMsg: "Ingresa texto arriba",
    howTitle: "Como Usar",
    howSteps: [
      "Elige el modo Codificar o Decodificar.",
      "Elige el Modo Componente (para una sola parte de una URL como un valor de consulta) o el Modo URL Completa (conserva ?, &, / etc.).",
      "Pega texto o una URL en el cuadro de entrada y observa el resultado actualizarse en tiempo real.",
      "Copia el resultado con el boton de copiar y usalo de inmediato.",
    ],
    faq: [
      {
        q: "Cual es la diferencia entre el Modo Componente y el Modo URL Completa?",
        a: "El Modo Componente (encodeURIComponent) sirve para codificar una sola parte de una URL, como un valor de parametro de consulta, y tambien codifica caracteres como ?, &, /. El Modo URL Completa (encodeURI) sirve para codificar una URL entera y conserva esos caracteres estructurales.",
      },
      {
        q: "Por que se necesita codificar una URL?",
        a: "Las URL no pueden contener directamente espacios, caracteres no ASCII ni ciertos caracteres especiales. Convertirlos en secuencias seguras %XX permite que los servidores interpreten la URL correctamente.",
      },
      {
        q: "Se envia mi URL a un servidor?",
        a: "No. Toda la codificacion y decodificacion usa las funciones integradas de tu navegador (encodeURIComponent/decodeURIComponent, etc.), y no se realiza ninguna solicitud real a esa URL.",
      },
    ],
    disclaimer: "Esta herramienta solo convierte texto, nunca visita ninguna URL real.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
