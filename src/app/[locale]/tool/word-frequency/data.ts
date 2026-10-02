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
  caseSensitiveLabel: string;
  minLengthLabel: string;
  resultWordHeader: string;
  resultCountHeader: string;
  resultPercentHeader: string;
  emptyMsg: string;
  topLabel: string;
  totalWordsLabel: string;
  uniqueWordsLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "단어 빈도 분석기",
    subtitle: "텍스트에서 가장 많이 등장하는 단어를 순위별로 확인하세요 (브라우저에서 100% 처리)",
    inputLabel: "텍스트 입력",
    inputPlaceholder: "분석할 텍스트를 입력하거나 붙여넣으세요...",
    clearBtn: "지우기",
    caseSensitiveLabel: "대소문자 구분",
    minLengthLabel: "최소 글자 수",
    resultWordHeader: "단어",
    resultCountHeader: "등장 횟수",
    resultPercentHeader: "비율",
    emptyMsg: "왼쪽에 텍스트를 입력하면 단어 빈도가 표시됩니다",
    topLabel: "상위 50개 표시",
    totalWordsLabel: "총 단어 수",
    uniqueWordsLabel: "고유 단어 수",
    howTitle: "사용 방법",
    howSteps: [
      "왼쪽 입력창에 분석할 텍스트를 붙여넣습니다.",
      "필요하면 대소문자 구분 여부와 최소 글자 수를 조정합니다.",
      "오른쪽에 등장 빈도가 높은 순서대로 단어와 횟수, 비율이 표시됩니다.",
      "블로그 글의 키워드 반복 빈도 확인, 발표 원고 점검 등에 활용하세요.",
    ],
    faq: [
      {
        q: "입력한 텍스트가 서버로 전송되나요?",
        a: "아니요. 모든 분석은 사용자의 브라우저 안에서만 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "한글/영문이 섞인 텍스트도 분석되나요?",
        a: "네. 유니코드 문자·숫자를 기준으로 단어를 구분하므로 한글, 영문, 일본어, 숫자가 섞인 텍스트도 분석할 수 있습니다.",
      },
      {
        q: "최소 글자 수는 왜 필요한가요?",
        a: "'이', '그', 'a', 'the' 같은 짧은 조사·관사가 상위를 차지해 분석이 어려워지는 것을 막기 위해, 일정 글자 수 미만 단어를 제외할 수 있습니다.",
      },
    ],
    disclaimer: "⚠️ 단어 구분은 공백과 문장부호 기준의 단순 처리이므로, 형태소 분석(조사/어미 제거) 수준의 정밀도는 제공하지 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Word Frequency Analyzer",
    subtitle: "See which words appear most often in your text, ranked by frequency (100% processed in your browser)",
    inputLabel: "Text Input",
    inputPlaceholder: "Type or paste the text you want to analyze...",
    clearBtn: "Clear",
    caseSensitiveLabel: "Case sensitive",
    minLengthLabel: "Minimum word length",
    resultWordHeader: "Word",
    resultCountHeader: "Count",
    resultPercentHeader: "Percent",
    emptyMsg: "Enter text on the left to see word frequency",
    topLabel: "Showing top 50",
    totalWordsLabel: "Total words",
    uniqueWordsLabel: "Unique words",
    howTitle: "How to Use",
    howSteps: [
      "Paste the text you want to analyze into the input box on the left.",
      "Adjust case sensitivity and minimum word length if needed.",
      "Words are ranked by frequency on the right, along with their count and percentage.",
      "Useful for checking keyword repetition in blog posts or reviewing a speech script.",
    ],
    faq: [
      {
        q: "Is my text sent to a server?",
        a: "No. All analysis happens entirely inside your browser. Nothing is ever uploaded.",
      },
      {
        q: "Does it work with mixed-language text?",
        a: "Yes. Words are split based on Unicode letters and digits, so text mixing Korean, English, Japanese, and numbers can all be analyzed.",
      },
      {
        q: "Why is there a minimum word length option?",
        a: "Short words like articles and particles ('a', 'the', 'is') can dominate the top results, so you can exclude words below a certain length.",
      },
    ],
    disclaimer: "Word splitting is a simple rule based on spaces and punctuation, not full linguistic (morpheme) analysis.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "単語頻度分析ツール",
    subtitle: "テキスト内でよく使われている単語をランキング形式で確認できます（ブラウザで100%処理）",
    inputLabel: "テキスト入力",
    inputPlaceholder: "分析したいテキストを入力または貼り付けてください...",
    clearBtn: "クリア",
    caseSensitiveLabel: "大文字・小文字を区別",
    minLengthLabel: "最小文字数",
    resultWordHeader: "単語",
    resultCountHeader: "出現回数",
    resultPercentHeader: "割合",
    emptyMsg: "左側にテキストを入力すると単語の頻度が表示されます",
    topLabel: "上位50件を表示",
    totalWordsLabel: "総単語数",
    uniqueWordsLabel: "ユニーク単語数",
    howTitle: "使い方",
    howSteps: [
      "左の入力欄に分析したいテキストを貼り付けます。",
      "必要に応じて大文字・小文字の区別や最小文字数を調整します。",
      "右側に出現頻度の高い順に単語・回数・割合が表示されます。",
      "ブログ記事のキーワード反復チェックや発表原稿の確認などにご活用ください。",
    ],
    faq: [
      {
        q: "入力したテキストはサーバーに送信されますか？",
        a: "いいえ。すべての分析はブラウザ内だけで処理され、データはサーバーに送信されません。",
      },
      {
        q: "複数の言語が混ざったテキストでも分析できますか？",
        a: "はい。Unicodeの文字・数字を基準に単語を区切るため、日本語・英語・韓国語・数字が混在するテキストも分析できます。",
      },
      {
        q: "最小文字数はなぜ必要ですか？",
        a: "「は」「の」「a」「the」のような短い助詞・冠詞が上位を占めて分析しづらくなるのを防ぐため、一定の文字数未満の単語を除外できます。",
      },
    ],
    disclaimer: "単語の区切りはスペースと句読点に基づく単純な処理であり、形態素解析のような精密さはありません。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Analizador de Frecuencia de Palabras",
    subtitle: "Descubre que palabras aparecen con mas frecuencia en tu texto, ordenadas por frecuencia (100% procesado en tu navegador)",
    inputLabel: "Entrada de Texto",
    inputPlaceholder: "Escribe o pega el texto que deseas analizar...",
    clearBtn: "Borrar",
    caseSensitiveLabel: "Distinguir mayusculas/minusculas",
    minLengthLabel: "Longitud minima de palabra",
    resultWordHeader: "Palabra",
    resultCountHeader: "Veces",
    resultPercentHeader: "Porcentaje",
    emptyMsg: "Ingresa texto a la izquierda para ver la frecuencia de palabras",
    topLabel: "Mostrando las 50 principales",
    totalWordsLabel: "Palabras totales",
    uniqueWordsLabel: "Palabras unicas",
    howTitle: "Como Usar",
    howSteps: [
      "Pega el texto que deseas analizar en el cuadro de entrada de la izquierda.",
      "Ajusta la distincion de mayusculas/minusculas y la longitud minima si es necesario.",
      "Las palabras se ordenan por frecuencia a la derecha, junto con su conteo y porcentaje.",
      "Util para revisar la repeticion de palabras clave en publicaciones de blog o guiones.",
    ],
    faq: [
      {
        q: "Se envia mi texto a un servidor?",
        a: "No. Todo el analisis ocurre completamente dentro de tu navegador. Nada se sube jamas.",
      },
      {
        q: "Funciona con texto en varios idiomas mezclados?",
        a: "Si. Las palabras se separan segun letras y numeros Unicode, por lo que se puede analizar texto que mezcle coreano, ingles, japones y numeros.",
      },
      {
        q: "Para que sirve la longitud minima de palabra?",
        a: "Palabras cortas como articulos ('a', 'the', 'el') pueden dominar los resultados, asi que puedes excluir palabras por debajo de cierta longitud.",
      },
    ],
    disclaimer: "La separacion de palabras es una regla simple basada en espacios y puntuacion, no un analisis linguistico completo.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
