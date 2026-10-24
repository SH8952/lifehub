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
  inputLabel: string;
  outputLabel: string;
  swapBtn: string;
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
    title: "Base64 인코더 · 디코더",
    subtitle: "텍스트를 Base64로 인코딩하거나, Base64 문자열을 다시 텍스트로 디코딩하세요 (브라우저에서 100% 처리)",
    encodeMode: "인코딩 (텍스트 → Base64)",
    decodeMode: "디코딩 (Base64 → 텍스트)",
    inputLabel: "입력",
    outputLabel: "결과",
    swapBtn: "입력·결과 바꾸기",
    clearBtn: "지우기",
    copyBtn: "복사",
    copiedMsg: "복사되었습니다",
    invalidMsg: "❌ 올바른 Base64 문자열이 아닙니다",
    emptyMsg: "위에 텍스트를 입력하세요",
    howTitle: "사용 방법",
    howSteps: [
      "인코딩 또는 디코딩 모드를 선택합니다.",
      "입력창에 변환할 텍스트(또는 Base64 문자열)를 붙여넣습니다.",
      "결과가 실시간으로 아래에 표시됩니다.",
      "복사 버튼으로 결과를 바로 복사해 사용합니다.",
    ],
    faq: [
      {
        q: "입력한 텍스트가 서버로 전송되나요?",
        a: "아니요. 인코딩·디코딩 모두 브라우저 내장 함수(btoa/atob)로 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "한글이나 이모지도 정상적으로 인코딩되나요?",
        a: "네. 이 도구는 UTF-8 인코딩을 거쳐 처리하므로 한글, 일본어, 이모지 등 모든 유니코드 문자를 정상적으로 인코딩·디코딩할 수 있습니다.",
      },
      {
        q: "Base64는 암호화인가요?",
        a: "아니요. Base64는 데이터를 텍스트 형태로 표현하는 인코딩 방식일 뿐 암호화가 아닙니다. 누구나 쉽게 원본으로 되돌릴 수 있으므로 비밀번호나 민감한 정보를 숨기는 용도로 사용해서는 안 됩니다.",
      },
    ],
    disclaimer: "⚠️ Base64는 암호화가 아닙니다. 민감한 정보 보호 목적으로 사용하지 마세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Base64 Encoder & Decoder",
    subtitle: "Encode text to Base64, or decode a Base64 string back to text (100% processed in your browser)",
    encodeMode: "Encode (Text → Base64)",
    decodeMode: "Decode (Base64 → Text)",
    inputLabel: "Input",
    outputLabel: "Result",
    swapBtn: "Swap Input/Output",
    clearBtn: "Clear",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    invalidMsg: "❌ Not a valid Base64 string",
    emptyMsg: "Enter text above",
    howTitle: "How to Use",
    howSteps: [
      "Choose Encode or Decode mode.",
      "Paste the text (or Base64 string) you want to convert into the input box.",
      "The result appears live below.",
      "Copy the result with the copy button and use it right away.",
    ],
    faq: [
      {
        q: "Is my text sent to a server?",
        a: "No. Both encoding and decoding use your browser's built-in functions (btoa/atob), and no data is ever sent to a server.",
      },
      {
        q: "Does it handle non-English characters and emoji correctly?",
        a: "Yes. This tool encodes through UTF-8, so Korean, Japanese, emoji, and any other Unicode characters encode and decode correctly.",
      },
      {
        q: "Is Base64 a form of encryption?",
        a: "No. Base64 is just a way to represent data as text, not encryption. Anyone can easily reverse it, so never use it to hide passwords or sensitive information.",
      },
    ],
    disclaimer: "Base64 is not encryption. Do not use it to protect sensitive information.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "Base64エンコーダー・デコーダー",
    subtitle: "テキストをBase64にエンコード、またはBase64文字列をテキストにデコードします（ブラウザで100%処理）",
    encodeMode: "エンコード（テキスト → Base64）",
    decodeMode: "デコード（Base64 → テキスト）",
    inputLabel: "入力",
    outputLabel: "結果",
    swapBtn: "入力・結果を入れ替え",
    clearBtn: "クリア",
    copyBtn: "コピー",
    copiedMsg: "コピーしました",
    invalidMsg: "❌ 正しいBase64文字列ではありません",
    emptyMsg: "上にテキストを入力してください",
    howTitle: "使い方",
    howSteps: [
      "エンコードまたはデコードモードを選びます。",
      "入力欄に変換したいテキスト（またはBase64文字列）を貼り付けます。",
      "結果がリアルタイムで下に表示されます。",
      "コピーボタンで結果をそのままコピーして使用します。",
    ],
    faq: [
      {
        q: "入力したテキストはサーバーに送信されますか？",
        a: "いいえ。エンコード・デコードともにブラウザ内蔵の関数（btoa/atob）で処理され、データはサーバーに送信されません。",
      },
      {
        q: "日本語や絵文字も正しくエンコードされますか？",
        a: "はい。このツールはUTF-8エンコーディングを経由して処理するため、日本語、韓国語、絵文字などすべてのUnicode文字を正しくエンコード・デコードできます。",
      },
      {
        q: "Base64は暗号化ですか？",
        a: "いいえ。Base64はデータをテキスト形式で表現するエンコード方式であり、暗号化ではありません。誰でも簡単に元に戻せるため、パスワードや機密情報を隠す目的で使用してはいけません。",
      },
    ],
    disclaimer: "⚠️ Base64は暗号化ではありません。機密情報の保護目的で使用しないでください。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Codificador y Decodificador Base64",
    subtitle: "Codifica texto a Base64, o decodifica una cadena Base64 de vuelta a texto (100% procesado en tu navegador)",
    encodeMode: "Codificar (Texto → Base64)",
    decodeMode: "Decodificar (Base64 → Texto)",
    inputLabel: "Entrada",
    outputLabel: "Resultado",
    swapBtn: "Intercambiar Entrada/Salida",
    clearBtn: "Borrar",
    copyBtn: "Copiar",
    copiedMsg: "Copiado!",
    invalidMsg: "❌ No es una cadena Base64 valida",
    emptyMsg: "Ingresa texto arriba",
    howTitle: "Como Usar",
    howSteps: [
      "Elige el modo Codificar o Decodificar.",
      "Pega el texto (o cadena Base64) que deseas convertir en el cuadro de entrada.",
      "El resultado aparece en tiempo real abajo.",
      "Copia el resultado con el boton de copiar y usalo de inmediato.",
    ],
    faq: [
      {
        q: "Se envia mi texto a un servidor?",
        a: "No. Tanto la codificación como la decodificación usan las funciones integradas de tu navegador (btoa/atob), y no se envian datos a ningún servidor.",
      },
      {
        q: "Maneja correctamente caracteres no ingleses y emojis?",
        a: "Si. Esta herramienta codifica mediante UTF-8, por lo que el coreano, japones, emojis y cualquier otro caracter Unicode se codifican y decodifican correctamente.",
      },
      {
        q: "Es Base64 una forma de encriptación?",
        a: "No. Base64 es solo una forma de representar datos como texto, no es encriptación. Cualquiera puede revertirlo fácilmente, así que nunca lo uses para ocultar contrasenas o información sensible.",
      },
    ],
    disclaimer: "Base64 no es encriptación. No lo uses para proteger información sensible.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningún servidor.",
  },
};
