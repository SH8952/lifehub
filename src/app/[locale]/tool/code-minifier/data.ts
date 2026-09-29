export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  typeLabel: string;
  inputLabel: string;
  outputLabel: string;
  minifyBtn: string;
  clearBtn: string;
  copyBtn: string;
  copiedMsg: string;
  emptyMsg: string;
  originalSize: string;
  minifiedSize: string;
  reduction: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "HTML · CSS · JS 압축기",
    subtitle: "코드에서 불필요한 공백·줄바꿈·주석을 제거해 파일 용량을 줄여보세요 (브라우저에서 100% 처리)",
    typeLabel: "코드 종류",
    inputLabel: "원본 코드",
    outputLabel: "압축 결과",
    minifyBtn: "압축하기",
    clearBtn: "지우기",
    copyBtn: "복사",
    copiedMsg: "복사되었습니다",
    emptyMsg: "왼쪽에 코드를 입력하고 압축 버튼을 누르세요",
    originalSize: "원본",
    minifiedSize: "압축 후",
    reduction: "용량 감소",
    howTitle: "사용 방법",
    howSteps: [
      "코드 종류(HTML, CSS, JS)를 선택합니다.",
      "왼쪽 입력창에 압축할 코드를 붙여넣습니다.",
      "'압축하기' 버튼을 누르면 주석과 불필요한 공백이 제거된 결과가 오른쪽에 표시됩니다.",
      "결과를 복사해 그대로 사용합니다.",
    ],
    faq: [
      {
        q: "입력한 코드가 서버로 전송되나요?",
        a: "아니요. 모든 압축 처리는 사용자의 브라우저 안에서 정규식 기반으로 처리되며, 코드가 서버로 전송되지 않습니다.",
      },
      {
        q: "압축 후 코드가 정상 동작하는지 꼭 확인해야 하나요?",
        a: "네. 이 도구는 정규식 기반의 기본 압축기이므로, 문자열 안에 `//`나 `/* */`와 유사한 패턴이 포함된 복잡한 코드에서는 예상과 다르게 동작할 수 있습니다. 압축 후 반드시 실제 환경에서 동작을 확인하세요.",
      },
      {
        q: "실제 배포용 코드도 이 도구로 압축해도 되나요?",
        a: "간단한 스니펫이나 소규모 파일에는 적합하지만, 프로덕션 배포용 코드는 Terser, cssnano, html-minifier 같은 전용 빌드 도구를 사용하는 것이 더 안전합니다.",
      },
    ],
    disclaimer: "⚠️ 정규식 기반의 기본 압축기입니다. 복잡한 코드는 압축 후 반드시 동작을 확인하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "HTML/CSS/JS Minifier",
    subtitle: "Strip unnecessary whitespace, line breaks, and comments to shrink your code (100% processed in your browser)",
    typeLabel: "Code Type",
    inputLabel: "Original Code",
    outputLabel: "Minified Result",
    minifyBtn: "Minify",
    clearBtn: "Clear",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    emptyMsg: "Enter code on the left and click Minify",
    originalSize: "Original",
    minifiedSize: "Minified",
    reduction: "Size Reduction",
    howTitle: "How to Use",
    howSteps: [
      "Select the code type (HTML, CSS, or JS).",
      "Paste the code you want to minify into the left input box.",
      "Click 'Minify' — comments and unnecessary whitespace are removed and shown on the right.",
      "Copy the result and use it directly.",
    ],
    faq: [
      {
        q: "Is my code sent to a server?",
        a: "No. All minification happens using regex-based processing entirely inside your browser. Your code is never uploaded.",
      },
      {
        q: "Do I need to verify the code still works after minifying?",
        a: "Yes. This is a basic regex-based minifier, so complex code containing patterns resembling `//` or `/* */` inside strings may not behave as expected. Always test the result in your actual environment.",
      },
      {
        q: "Can I use this for production deployment code?",
        a: "It works well for small snippets or quick files, but for production code, dedicated build tools like Terser, cssnano, or html-minifier are safer choices.",
      },
    ],
    disclaimer: "This is a basic regex-based minifier. Always verify complex code still works after minifying.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "HTML・CSS・JS圧縮ツール",
    subtitle: "不要な空白・改行・コメントを削除してコードの容量を減らします（ブラウザで100%処理）",
    typeLabel: "コード種類",
    inputLabel: "元のコード",
    outputLabel: "圧縮結果",
    minifyBtn: "圧縮する",
    clearBtn: "クリア",
    copyBtn: "コピー",
    copiedMsg: "コピーしました",
    emptyMsg: "左側にコードを入力して圧縮ボタンを押してください",
    originalSize: "元のサイズ",
    minifiedSize: "圧縮後",
    reduction: "削減率",
    howTitle: "使い方",
    howSteps: [
      "コードの種類（HTML、CSS、JS）を選択します。",
      "左の入力欄に圧縮したいコードを貼り付けます。",
      "「圧縮する」ボタンを押すとコメントや不要な空白が削除された結果が右側に表示されます。",
      "結果をコピーしてそのまま使用します。",
    ],
    faq: [
      {
        q: "入力したコードはサーバーに送信されますか？",
        a: "いいえ。すべての圧縮処理は正規表現ベースでブラウザ内だけで行われ、コードはサーバーに送信されません。",
      },
      {
        q: "圧縮後にコードが正常に動作するか確認する必要がありますか？",
        a: "はい。これは正規表現ベースの基本的な圧縮ツールのため、文字列内に`//`や`/* */`に似たパターンを含む複雑なコードでは予期しない動作になる場合があります。圧縮後は必ず実際の環境で動作を確認してください。",
      },
      {
        q: "本番環境用のコードもこのツールで圧縮していいですか？",
        a: "簡単なスニペットや小規模なファイルには適していますが、本番用コードにはTerser、cssnano、html-minifierなどの専用ビルドツールを使う方が安全です。",
      },
    ],
    disclaimer: "⚠️ 正規表現ベースの基本的な圧縮ツールです。複雑なコードは圧縮後に必ず動作を確認してください。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Minificador de HTML/CSS/JS",
    subtitle: "Elimina espacios, saltos de linea y comentarios innecesarios para reducir tu codigo (100% procesado en tu navegador)",
    typeLabel: "Tipo de Codigo",
    inputLabel: "Codigo Original",
    outputLabel: "Resultado Minificado",
    minifyBtn: "Minificar",
    clearBtn: "Borrar",
    copyBtn: "Copiar",
    copiedMsg: "Copiado!",
    emptyMsg: "Ingresa codigo a la izquierda y haz clic en Minificar",
    originalSize: "Original",
    minifiedSize: "Minificado",
    reduction: "Reduccion de Tamano",
    howTitle: "Como Usar",
    howSteps: [
      "Selecciona el tipo de codigo (HTML, CSS o JS).",
      "Pega el codigo que deseas minificar en el cuadro de entrada de la izquierda.",
      "Haz clic en 'Minificar': los comentarios y espacios innecesarios se eliminan y se muestran a la derecha.",
      "Copia el resultado y usalo directamente.",
    ],
    faq: [
      {
        q: "Se envia mi codigo a un servidor?",
        a: "No. Toda la minificacion se realiza con procesamiento basado en expresiones regulares completamente dentro de tu navegador. Tu codigo nunca se sube.",
      },
      {
        q: "Necesito verificar que el codigo siga funcionando despues de minificar?",
        a: "Si. Este es un minificador basico basado en expresiones regulares, por lo que codigo complejo con patrones similares a `//` o `/* */` dentro de cadenas puede no comportarse como se espera. Siempre prueba el resultado en tu entorno real.",
      },
      {
        q: "Puedo usar esto para codigo de despliegue en produccion?",
        a: "Funciona bien para fragmentos pequenos o archivos rapidos, pero para codigo de produccion, herramientas de compilacion dedicadas como Terser, cssnano o html-minifier son opciones mas seguras.",
      },
    ],
    disclaimer: "Este es un minificador basico basado en expresiones regulares. Siempre verifica que el codigo complejo siga funcionando despues de minificar.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
