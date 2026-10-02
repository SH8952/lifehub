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
  statsCharsLabel: string;
  statsCharsNoSpaceLabel: string;
  statsWordsLabel: string;
  statsLinesLabel: string;
  statsSentencesLabel: string;
  statsBytesLabel: string;
  statsReadingTimeLabel: string;
  readingTimeUnit: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "텍스트 통계",
    subtitle: "글자 수, 단어 수, 줄 수, 용량을 실시간으로 확인하세요 (브라우저에서 100% 처리)",
    inputLabel: "텍스트 입력",
    inputPlaceholder: "여기에 텍스트를 입력하거나 붙여넣으세요...",
    clearBtn: "지우기",
    statsCharsLabel: "글자 수 (공백 포함)",
    statsCharsNoSpaceLabel: "글자 수 (공백 제외)",
    statsWordsLabel: "단어 수",
    statsLinesLabel: "줄 수",
    statsSentencesLabel: "문장 수",
    statsBytesLabel: "용량 (UTF-8 바이트)",
    statsReadingTimeLabel: "예상 읽기 시간",
    readingTimeUnit: "분",
    howTitle: "사용 방법",
    howSteps: [
      "입력창에 텍스트를 직접 입력하거나 붙여넣습니다.",
      "글자 수, 단어 수, 줄 수, 문장 수, 용량, 예상 읽기 시간이 실시간으로 자동 계산됩니다.",
      "자기소개서, 블로그 글, SNS 게시글 등의 글자 수 제한을 맞출 때 활용하세요.",
    ],
    faq: [
      {
        q: "입력한 텍스트가 서버로 전송되나요?",
        a: "아니요. 모든 통계 계산은 사용자의 브라우저 안에서만 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "글자 수 계산 방식이 자기소개서 글자 수 세기와 같나요?",
        a: "'공백 포함'/'공백 제외' 두 가지를 모두 보여드리므로, 제출처에서 요구하는 방식에 맞춰 확인하실 수 있습니다.",
      },
      {
        q: "예상 읽기 시간은 어떻게 계산되나요?",
        a: "일반적인 성인의 평균 읽기 속도(분당 약 200단어)를 기준으로 추정한 값으로, 실제 읽기 시간과 다를 수 있습니다.",
      },
    ],
    disclaimer: "⚠️ 문장 수는 마침표·물음표·느낌표를 기준으로 한 추정치이며, 글의 형식에 따라 실제와 다를 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Text Statistics",
    subtitle: "Check character, word, and line counts along with file size in real time (100% processed in your browser)",
    inputLabel: "Text Input",
    inputPlaceholder: "Type or paste your text here...",
    clearBtn: "Clear",
    statsCharsLabel: "Characters (with spaces)",
    statsCharsNoSpaceLabel: "Characters (no spaces)",
    statsWordsLabel: "Words",
    statsLinesLabel: "Lines",
    statsSentencesLabel: "Sentences",
    statsBytesLabel: "Size (UTF-8 bytes)",
    statsReadingTimeLabel: "Estimated Reading Time",
    readingTimeUnit: "min",
    howTitle: "How to Use",
    howSteps: [
      "Type or paste your text into the input box.",
      "Character, word, line, and sentence counts, file size, and estimated reading time are calculated automatically in real time.",
      "Useful for meeting character limits on cover letters, blog posts, or social media captions.",
    ],
    faq: [
      {
        q: "Is my text sent to a server?",
        a: "No. All statistics are calculated entirely inside your browser. Nothing is ever uploaded.",
      },
      {
        q: "Does the character count match what my submission form counts?",
        a: "Both 'with spaces' and 'no spaces' counts are shown, so you can match whichever method your form requires.",
      },
      {
        q: "How is the estimated reading time calculated?",
        a: "It's estimated using an average adult reading speed of about 200 words per minute, so actual reading time may vary.",
      },
    ],
    disclaimer: "Sentence count is an estimate based on periods, question marks, and exclamation points, and may differ from the actual count depending on formatting.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "テキスト統計",
    subtitle: "文字数・単語数・行数・容量をリアルタイムで確認できます（ブラウザで100%処理）",
    inputLabel: "テキスト入力",
    inputPlaceholder: "ここにテキストを入力または貼り付けてください...",
    clearBtn: "クリア",
    statsCharsLabel: "文字数（スペース含む）",
    statsCharsNoSpaceLabel: "文字数（スペース除く）",
    statsWordsLabel: "単語数",
    statsLinesLabel: "行数",
    statsSentencesLabel: "文の数",
    statsBytesLabel: "容量（UTF-8バイト）",
    statsReadingTimeLabel: "推定読了時間",
    readingTimeUnit: "分",
    howTitle: "使い方",
    howSteps: [
      "入力欄にテキストを直接入力または貼り付けます。",
      "文字数・単語数・行数・文の数・容量・推定読了時間がリアルタイムで自動計算されます。",
      "自己紹介文やブログ記事、SNS投稿などの文字数制限を確認する際にご活用ください。",
    ],
    faq: [
      {
        q: "入力したテキストはサーバーに送信されますか？",
        a: "いいえ。すべての統計計算はブラウザ内だけで処理され、データはサーバーに送信されません。",
      },
      {
        q: "文字数のカウント方法は提出先の文字数カウントと同じですか？",
        a: "「スペース含む」「スペース除く」の両方を表示するため、提出先の基準に合わせて確認できます。",
      },
      {
        q: "推定読了時間はどのように計算されますか？",
        a: "一般的な成人の平均読書速度（1分あたり約200単語）を基準に推定した値のため、実際の読了時間とは異なる場合があります。",
      },
    ],
    disclaimer: "文の数は句点・疑問符・感嘆符を基準にした推定値であり、文章の形式によって実際と異なる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Estadisticas de Texto",
    subtitle: "Consulta el numero de caracteres, palabras, lineas y el tamano del texto en tiempo real (100% procesado en tu navegador)",
    inputLabel: "Entrada de Texto",
    inputPlaceholder: "Escribe o pega tu texto aqui...",
    clearBtn: "Borrar",
    statsCharsLabel: "Caracteres (con espacios)",
    statsCharsNoSpaceLabel: "Caracteres (sin espacios)",
    statsWordsLabel: "Palabras",
    statsLinesLabel: "Lineas",
    statsSentencesLabel: "Oraciones",
    statsBytesLabel: "Tamano (bytes UTF-8)",
    statsReadingTimeLabel: "Tiempo de Lectura Estimado",
    readingTimeUnit: "min",
    howTitle: "Como Usar",
    howSteps: [
      "Escribe o pega tu texto en el cuadro de entrada.",
      "El numero de caracteres, palabras, lineas y oraciones, el tamano del archivo y el tiempo de lectura estimado se calculan automaticamente en tiempo real.",
      "Util para cumplir limites de caracteres en cartas de presentacion, publicaciones de blog o redes sociales.",
    ],
    faq: [
      {
        q: "Se envia mi texto a un servidor?",
        a: "No. Todas las estadisticas se calculan completamente dentro de tu navegador. Nada se sube jamas.",
      },
      {
        q: "El conteo de caracteres coincide con el de mi formulario de envio?",
        a: "Se muestran ambos conteos, 'con espacios' y 'sin espacios', para que puedas usar el que requiera tu formulario.",
      },
      {
        q: "Como se calcula el tiempo de lectura estimado?",
        a: "Se estima usando una velocidad de lectura promedio de un adulto de unas 200 palabras por minuto, por lo que el tiempo real puede variar.",
      },
    ],
    disclaimer: "El numero de oraciones es una estimacion basada en puntos, signos de interrogacion y exclamacion, y puede diferir del conteo real segun el formato.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
