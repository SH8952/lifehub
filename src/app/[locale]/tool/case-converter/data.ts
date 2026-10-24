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
  copyBtn: string;
  copiedMsg: string;
  emptyMsg: string;
  modeUpper: string;
  modeLower: string;
  modeTitle: string;
  modeSentence: string;
  modeCamel: string;
  modePascal: string;
  modeSnake: string;
  modeKebab: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "대소문자 변환기",
    subtitle: "텍스트를 대문자, 소문자, 카멜케이스 등 8가지 형식으로 한 번에 변환하세요 (브라우저에서 100% 처리)",
    inputLabel: "텍스트 입력",
    inputPlaceholder: "변환할 텍스트를 입력하세요 (예: Hello World)",
    clearBtn: "지우기",
    copyBtn: "복사",
    copiedMsg: "복사되었습니다",
    emptyMsg: "위에 텍스트를 입력하면 변환 결과가 표시됩니다",
    modeUpper: "대문자 (UPPERCASE)",
    modeLower: "소문자 (lowercase)",
    modeTitle: "제목 형식 (Title Case)",
    modeSentence: "문장 형식 (Sentence case)",
    modeCamel: "카멜 케이스 (camelCase)",
    modePascal: "파스칼 케이스 (PascalCase)",
    modeSnake: "스네이크 케이스 (snake_case)",
    modeKebab: "케밥 케이스 (kebab-case)",
    howTitle: "사용 방법",
    howSteps: [
      "입력창에 변환할 텍스트를 입력합니다.",
      "아래에 8가지 변환 결과가 동시에 표시됩니다.",
      "필요한 형식 옆의 복사 버튼을 눌러 바로 사용합니다.",
      "프로그래밍 변수명(camelCase, snake_case)이나 제목 서식을 맞출 때 유용합니다.",
    ],
    faq: [
      {
        q: "입력한 텍스트가 서버로 전송되나요?",
        a: "아니요. 모든 변환은 사용자의 브라우저 안에서만 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "한글도 변환되나요?",
        a: "대문자/소문자 변환은 영문에만 의미가 있습니다. 한글은 대소문자 구분이 없어 그대로 유지되며, camelCase·snake_case 등은 단어 구분자(공백, 특수문자)를 기준으로 영문과 동일하게 처리됩니다.",
      },
      {
        q: "Title Case와 Sentence case의 차이는 무엇인가요?",
        a: "Title Case는 모든 단어의 첫 글자를 대문자로, Sentence case는 문장 전체에서 첫 글자만 대문자로 바꿉니다.",
      },
    ],
    disclaimer: "⚠️ camelCase·snake_case 등의 변환은 공백과 특수문자를 단어 구분자로 사용하는 단순 규칙 기반이며, 복잡한 약어 처리까지 완벽하게 지원하지는 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Case Converter",
    subtitle: "Convert text into 8 different cases at once — UPPERCASE, camelCase, and more (100% processed in your browser)",
    inputLabel: "Text Input",
    inputPlaceholder: "Enter text to convert (e.g. Hello World)",
    clearBtn: "Clear",
    copyBtn: "Copy",
    copiedMsg: "Copied!",
    emptyMsg: "Enter text above to see the conversion results",
    modeUpper: "UPPERCASE",
    modeLower: "lowercase",
    modeTitle: "Title Case",
    modeSentence: "Sentence case",
    modeCamel: "camelCase",
    modePascal: "PascalCase",
    modeSnake: "snake_case",
    modeKebab: "kebab-case",
    howTitle: "How to Use",
    howSteps: [
      "Type the text you want to convert into the input box.",
      "All 8 conversion results appear at once below.",
      "Click the copy button next to the format you need and use it right away.",
      "Handy for programming variable names (camelCase, snake_case) or formatting titles.",
    ],
    faq: [
      {
        q: "Is my text sent to a server?",
        a: "No. All conversion happens entirely inside your browser. Nothing is ever uploaded.",
      },
      {
        q: "Does this work on non-Latin text?",
        a: "Uppercase/lowercase conversion only applies meaningfully to Latin letters. Text without case distinction stays unchanged, while camelCase/snake_case etc. split words using spaces and punctuation the same way they do for English.",
      },
      {
        q: "What's the difference between Title Case and Sentence case?",
        a: "Title Case capitalizes the first letter of every word, while Sentence case only capitalizes the first letter of the whole sentence.",
      },
    ],
    disclaimer: "Conversions like camelCase and snake_case use a simple rule based on spaces and punctuation as word boundaries, and may not perfectly handle complex abbreviations.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "大文字・小文字変換ツール",
    subtitle: "テキストをUPPERCASE、camelCaseなど8種類の形式に一度に変換できます（ブラウザで100%処理）",
    inputLabel: "テキスト入力",
    inputPlaceholder: "変換したいテキストを入力してください（例: Hello World）",
    clearBtn: "クリア",
    copyBtn: "コピー",
    copiedMsg: "コピーしました",
    emptyMsg: "上にテキストを入力すると変換結果が表示されます",
    modeUpper: "大文字 (UPPERCASE)",
    modeLower: "小文字 (lowercase)",
    modeTitle: "タイトル形式 (Title Case)",
    modeSentence: "文形式 (Sentence case)",
    modeCamel: "キャメルケース (camelCase)",
    modePascal: "パスカルケース (PascalCase)",
    modeSnake: "スネークケース (snake_case)",
    modeKebab: "ケバブケース (kebab-case)",
    howTitle: "使い方",
    howSteps: [
      "入力欄に変換したいテキストを入力します。",
      "下に8種類の変換結果が同時に表示されます。",
      "必要な形式の横にあるコピーボタンを押してそのまま使用します。",
      "プログラミングの変数名（camelCase、snake_case）やタイトルの書式を整える際に便利です。",
    ],
    faq: [
      {
        q: "入力したテキストはサーバーに送信されますか？",
        a: "いいえ。すべての変換はブラウザ内だけで処理され、データはサーバーに送信されません。",
      },
      {
        q: "日本語も変換されますか？",
        a: "大文字・小文字の変換は英字にのみ意味があります。日本語には大文字・小文字の区別がないためそのまま維持され、camelCase・snake_caseなどはスペースや記号を単語の区切りとして英語と同様に処理されます。",
      },
      {
        q: "Title CaseとSentence caseの違いは何ですか？",
        a: "Title Caseはすべての単語の先頭文字を大文字に、Sentence caseは文全体で先頭の1文字だけを大文字にします。",
      },
    ],
    disclaimer: "camelCase・snake_caseなどの変換はスペースや記号を単語の区切りとする単純なルールに基づいており、複雑な略語の処理までは完全には対応していません。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Convertidor de MAYÚSCULAS y Minúsculas",
    subtitle: "Convierte texto a 8 formatos a la vez: MAYÚSCULAS, camelCase y más (100% procesado en tu navegador)",
    inputLabel: "Entrada de Texto",
    inputPlaceholder: "Ingresa el texto a convertir (ej. Hello World)",
    clearBtn: "Borrar",
    copyBtn: "Copiar",
    copiedMsg: "Copiado!",
    emptyMsg: "Ingresa texto arriba para ver los resultados de conversión",
    modeUpper: "MAYÚSCULAS",
    modeLower: "minúsculas",
    modeTitle: "Formato de Titulo (Title Case)",
    modeSentence: "Formato de Oración (Sentence case)",
    modeCamel: "camelCase",
    modePascal: "PascalCase",
    modeSnake: "snake_case",
    modeKebab: "kebab-case",
    howTitle: "Como Usar",
    howSteps: [
      "Escribe el texto que deseas convertir en el cuadro de entrada.",
      "Los 8 resultados de conversión aparecen todos a la vez abajo.",
      "Haz clic en el boton de copiar junto al formato que necesites y usalo de inmediato.",
      "Útil para nombres de variables en programación (camelCase, snake_case) o para formatear títulos.",
    ],
    faq: [
      {
        q: "Se envia mi texto a un servidor?",
        a: "No. Toda la conversión ocurre completamente dentro de tu navegador. Nada se sube jamás.",
      },
      {
        q: "Funciona con texto que no es latino?",
        a: "La conversión de MAYÚSCULAS/minúsculas solo tiene sentido en letras latinas. El texto sin distinción de MAYÚSCULAS se mantiene igual, mientras que camelCase/snake_case separan palabras usando espacios y puntuación igual que en ingles.",
      },
      {
        q: "Cual es la diferencia entre Title Case y Sentence case?",
        a: "Title Case pone en mayúscula la primera letra de cada palabra, mientras que Sentence case solo pone en mayúscula la primera letra de toda la oración.",
      },
    ],
    disclaimer: "Conversiones como camelCase y snake_case usan una regla simple basada en espacios y puntuación como límites de palabra, y pueden no manejar perfectamente abreviaturas complejas.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningún servidor.",
  },
};
