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
  indentLabel: string;
  indent2: string;
  indent4: string;
  indentTab: string;
  formatBtn: string;
  minifyBtn: string;
  clearBtn: string;
  outputLabel: string;
  copyBtn: string;
  copiedMsg: string;
  validMsg: string;
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
    title: "JSON 포맷터 · 검증기",
    subtitle: "JSON 데이터를 보기 좋게 정렬하거나 압축하고, 문법 오류를 즉시 확인하세요 (브라우저에서 100% 처리)",
    inputLabel: "JSON 입력",
    inputPlaceholder: '{"name": "LifeHub", "tools": 39}',
    indentLabel: "들여쓰기",
    indent2: "공백 2칸",
    indent4: "공백 4칸",
    indentTab: "탭",
    formatBtn: "예쁘게 정렬",
    minifyBtn: "압축(Minify)",
    clearBtn: "지우기",
    outputLabel: "결과",
    copyBtn: "복사",
    copiedMsg: "복사되었습니다",
    validMsg: "✅ 올바른 JSON입니다",
    invalidMsg: "❌ JSON 문법 오류",
    emptyMsg: "왼쪽에 JSON을 입력하세요",
    howTitle: "사용 방법",
    howSteps: [
      "왼쪽 입력창에 JSON 데이터를 붙여넣습니다.",
      "들여쓰기 방식을 선택한 뒤 '예쁘게 정렬' 또는 '압축(Minify)' 버튼을 누릅니다.",
      "문법 오류가 있으면 오류 위치와 함께 즉시 표시됩니다.",
      "결과를 복사 버튼으로 바로 복사해 사용합니다.",
    ],
    faq: [
      {
        q: "입력한 JSON 데이터가 서버로 전송되나요?",
        a: "아니요. 모든 파싱·정렬·압축 작업은 사용자의 브라우저 안에서만 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "오류가 나는데 어디가 문제인지 모르겠어요.",
        a: "오류 메시지에 문제가 발생한 대략적인 위치(줄/문자 위치)가 함께 표시됩니다. 따옴표 누락, 마지막 쉼표(trailing comma), 작은따옴표 사용이 가장 흔한 원인입니다.",
      },
      {
        q: "압축(Minify)은 왜 필요한가요?",
        a: "공백과 줄바꿈을 모두 제거해 파일 용량을 줄이므로, API 응답이나 설정 파일을 전송·저장할 때 용량을 절약할 수 있습니다.",
      },
    ],
    disclaimer: "⚠️ 매우 큰 JSON 파일(수십 MB 이상)은 브라우저 성능에 따라 처리 속도가 느려질 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "JSON Formatter & Validator",
    subtitle: "Pretty-print or minify JSON and catch syntax errors instantly (100% processed in your browser)",
    inputLabel: "JSON Input",
    inputPlaceholder: '{"name": "LifeHub", "tools": 39}',
    indentLabel: "Indentation",
    indent2: "2 spaces",
    indent4: "4 spaces",
    indentTab: "Tab",
    formatBtn: "Pretty Print",
    minifyBtn: "Minify",
    clearBtn: "Clear",
    outputLabel: "Result",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    validMsg: "✅ Valid JSON",
    invalidMsg: "❌ JSON Syntax Error",
    emptyMsg: "Enter JSON on the left",
    howTitle: "How to Use",
    howSteps: [
      "Paste your JSON data into the input box on the left.",
      "Choose an indentation style, then click 'Pretty Print' or 'Minify'.",
      "Any syntax error is shown immediately along with its approximate location.",
      "Copy the result with the copy button and use it right away.",
    ],
    faq: [
      {
        q: "Is my JSON data sent to a server?",
        a: "No. All parsing, formatting, and minifying happens entirely inside your browser. Nothing is ever uploaded.",
      },
      {
        q: "I got an error but don't know what's wrong.",
        a: "The error message includes the approximate line/character position of the problem. Missing quotes, trailing commas, and single quotes are the most common causes.",
      },
      {
        q: "Why would I need to minify JSON?",
        a: "Minifying removes all whitespace and line breaks, shrinking the file size — useful when storing or transmitting API responses or config files.",
      },
    ],
    disclaimer: "Very large JSON files (tens of MB or more) may process slowly depending on your browser's performance.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "JSONフォーマッター・検証ツール",
    subtitle: "JSONデータを整形・圧縮し、構文エラーをすぐに確認できます（ブラウザで100%処理）",
    inputLabel: "JSON入力",
    inputPlaceholder: '{"name": "LifeHub", "tools": 39}',
    indentLabel: "インデント",
    indent2: "スペース2個",
    indent4: "スペース4個",
    indentTab: "タブ",
    formatBtn: "整形する",
    minifyBtn: "圧縮(Minify)",
    clearBtn: "クリア",
    outputLabel: "結果",
    copyBtn: "コピー",
    copiedMsg: "コピーしました",
    validMsg: "✅ 正しいJSONです",
    invalidMsg: "❌ JSON構文エラー",
    emptyMsg: "左側にJSONを入力してください",
    howTitle: "使い方",
    howSteps: [
      "左の入力欄にJSONデータを貼り付けます。",
      "インデント方式を選び、「整形する」または「圧縮(Minify)」ボタンを押します。",
      "構文エラーがある場合はおおよその位置とともにすぐに表示されます。",
      "結果はコピーボタンでそのままコピーして使用できます。",
    ],
    faq: [
      {
        q: "入力したJSONデータはサーバーに送信されますか？",
        a: "いいえ。解析・整形・圧縮はすべてブラウザ内だけで処理され、データはサーバーに送信されません。",
      },
      {
        q: "エラーが出ますが、どこが問題か分かりません。",
        a: "エラーメッセージにはおおよその発生位置（行・文字位置）が表示されます。引用符の欠落、末尾のカンマ、シングルクォートの使用が最も多い原因です。",
      },
      {
        q: "圧縮(Minify)は何のために必要ですか？",
        a: "空白と改行をすべて削除してファイルサイズを減らせるため、API応答や設定ファイルの送信・保存時に容量を節約できます。",
      },
    ],
    disclaimer: "⚠️ 非常に大きなJSONファイル（数十MB以上）はブラウザの性能によって処理が遅くなる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Formateador y Validador de JSON",
    subtitle: "Formatea o minifica JSON y detecta errores de sintaxis al instante (100% procesado en tu navegador)",
    inputLabel: "Entrada JSON",
    inputPlaceholder: '{"name": "LifeHub", "tools": 39}',
    indentLabel: "Sangria",
    indent2: "2 espacios",
    indent4: "4 espacios",
    indentTab: "Tabulación",
    formatBtn: "Formatear",
    minifyBtn: "Minificar",
    clearBtn: "Borrar",
    outputLabel: "Resultado",
    copyBtn: "Copiar",
    copiedMsg: "Copiado!",
    validMsg: "✅ JSON valido",
    invalidMsg: "❌ Error de sintaxis JSON",
    emptyMsg: "Ingresa JSON a la izquierda",
    howTitle: "Como Usar",
    howSteps: [
      "Pega tus datos JSON en el cuadro de entrada de la izquierda.",
      "Elige un estilo de sangria y luego haz clic en 'Formatear' o 'Minificar'.",
      "Cualquier error de sintaxis se muestra al instante junto con su ubicación aproximada.",
      "Copia el resultado con el boton de copiar y usalo de inmediato.",
    ],
    faq: [
      {
        q: "Se envian mis datos JSON a un servidor?",
        a: "No. Todo el análisis, formateo y minificación ocurre completamente dentro de tu navegador. Nada se sube jamás.",
      },
      {
        q: "Tengo un error pero no se cual es el problema.",
        a: "El mensaje de error incluye la posición aproximada (línea/caracter) del problema. Las comillas faltantes, comas finales y comillas simples son las causas más comunes.",
      },
      {
        q: "Para que necesitaria minificar JSON?",
        a: "Minificar elimina todos los espacios y saltos de línea, reduciendo el tamaño del archivo, útil para almacenar o transmitir respuestas de API o archivos de configuración.",
      },
    ],
    disclaimer: "Los archivos JSON muy grandes (decenas de MB o más) pueden procesarse lentamente según el rendimiento de tu navegador.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningún servidor.",
  },
};
