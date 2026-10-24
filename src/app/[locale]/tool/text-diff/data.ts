export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputALabel: string;
  inputBLabel: string;
  placeholderA: string;
  placeholderB: string;
  clearBtn: string;
  resultLabel: string;
  addedLabel: string;
  removedLabel: string;
  noChangesMsg: string;
  tooLargeMsg: string;
  emptyMsg: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "텍스트 비교기",
    subtitle: "두 텍스트를 줄 단위로 비교해 추가·삭제된 부분을 바로 확인하세요 (브라우저에서 100% 처리)",
    inputALabel: "원본 텍스트 (A)",
    inputBLabel: "비교할 텍스트 (B)",
    placeholderA: "원본 텍스트를 입력하세요...",
    placeholderB: "비교할 텍스트를 입력하세요...",
    clearBtn: "모두 지우기",
    resultLabel: "비교 결과",
    addedLabel: "추가됨",
    removedLabel: "삭제됨",
    noChangesMsg: "두 텍스트가 동일합니다",
    tooLargeMsg: "텍스트가 너무 길어서 비교할 수 없습니다",
    emptyMsg: "두 텍스트를 입력하면 비교 결과가 표시됩니다",
    howTitle: "사용 방법",
    howSteps: [
      "왼쪽(A)에 원본 텍스트를, 오른쪽(B)에 비교할 텍스트를 입력합니다.",
      "아래에 줄 단위로 비교한 결과가 자동으로 표시됩니다.",
      "초록색은 추가된 줄, 빨간색은 삭제된 줄을 의미합니다.",
      "계약서 수정본 비교, 코드 변경 전후 비교, 문서 교정 확인 등에 활용하세요.",
    ],
    faq: [
      {
        q: "입력한 텍스트가 서버로 전송되나요?",
        a: "아니요. 모든 비교 작업은 사용자의 브라우저 안에서만 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "단어 단위로도 비교되나요?",
        a: "현재는 줄(line) 단위 비교만 지원합니다. 한 줄 안에서 일부 단어만 바뀐 경우에도 그 줄 전체가 변경된 것으로 표시됩니다.",
      },
      {
        q: "아주 긴 텍스트도 비교할 수 있나요?",
        a: "비교 알고리즘 특성상 줄 수가 매우 많으면(수천 줄 이상) 브라우저에서 처리 속도가 느려질 수 있습니다. 일반적인 문서·코드 조각 비교에는 충분합니다.",
      },
    ],
    disclaimer: "⚠️ 공백·줄바꿈 방식의 미세한 차이(예: 탭 vs 스페이스)도 다른 줄로 인식될 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Text Diff Checker",
    subtitle: "Compare two texts line by line and instantly spot what's added or removed (100% processed in your browser)",
    inputALabel: "Original Text (A)",
    inputBLabel: "Text to Compare (B)",
    placeholderA: "Enter the original text...",
    placeholderB: "Enter the text to compare...",
    clearBtn: "Clear All",
    resultLabel: "Comparison Result",
    addedLabel: "Added",
    removedLabel: "Removed",
    noChangesMsg: "The two texts are identical",
    tooLargeMsg: "Text is too long to compare",
    emptyMsg: "Enter both texts to see the comparison result",
    howTitle: "How to Use",
    howSteps: [
      "Enter the original text on the left (A) and the text to compare on the right (B).",
      "A line-by-line comparison result appears automatically below.",
      "Green lines were added, red lines were removed.",
      "Useful for comparing contract revisions, before/after code changes, or document proofreading.",
    ],
    faq: [
      {
        q: "Is my text sent to a server?",
        a: "No. All comparison happens entirely inside your browser. Nothing is ever uploaded.",
      },
      {
        q: "Does it compare word by word too?",
        a: "Currently only line-by-line comparison is supported. If only part of a line changed, the whole line is shown as changed.",
      },
      {
        q: "Can it handle very long texts?",
        a: "Because of how the comparison algorithm works, extremely long texts (thousands of lines) may process slowly in the browser. It's more than enough for typical documents or code snippets.",
      },
    ],
    disclaimer: "Subtle whitespace differences (e.g. tabs vs. spaces) can also be detected as different lines.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "テキスト比較ツール",
    subtitle: "2つのテキストを行単位で比較し、追加・削除された部分をすぐに確認できます（ブラウザで100%処理）",
    inputALabel: "元のテキスト (A)",
    inputBLabel: "比較するテキスト (B)",
    placeholderA: "元のテキストを入力してください...",
    placeholderB: "比較するテキストを入力してください...",
    clearBtn: "すべてクリア",
    resultLabel: "比較結果",
    addedLabel: "追加",
    removedLabel: "削除",
    noChangesMsg: "2つのテキストは同一です",
    tooLargeMsg: "テキストが長すぎて比較できません",
    emptyMsg: "両方のテキストを入力すると比較結果が表示されます",
    howTitle: "使い方",
    howSteps: [
      "左側（A）に元のテキスト、右側（B）に比較したいテキストを入力します。",
      "下に行単位の比較結果が自動的に表示されます。",
      "緑色は追加された行、赤色は削除された行を意味します。",
      "契約書の改訂版比較、コードの変更前後の確認、文書校正などにご活用ください。",
    ],
    faq: [
      {
        q: "入力したテキストはサーバーに送信されますか？",
        a: "いいえ。すべての比較処理はブラウザ内だけで行われ、データはサーバーに送信されません。",
      },
      {
        q: "単語単位でも比較できますか？",
        a: "現在は行単位の比較のみ対応しています。1行の中で一部の単語だけが変わった場合でも、その行全体が変更として表示されます。",
      },
      {
        q: "非常に長いテキストも比較できますか？",
        a: "比較アルゴリズムの特性上、行数が非常に多い場合（数千行以上）はブラウザでの処理が遅くなることがあります。通常の文書やコード断片の比較には十分です。",
      },
    ],
    disclaimer: "スペースや改行方式のわずかな違い（タブとスペースなど）も別の行として認識される場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Comparador de Textos",
    subtitle: "Compara dos textos línea por línea y detecta al instante lo que se agrego o elimino (100% procesado en tu navegador)",
    inputALabel: "Texto Original (A)",
    inputBLabel: "Texto a Comparar (B)",
    placeholderA: "Ingresa el texto original...",
    placeholderB: "Ingresa el texto a comparar...",
    clearBtn: "Borrar Todo",
    resultLabel: "Resultado de la Comparación",
    addedLabel: "Agregado",
    removedLabel: "Eliminado",
    noChangesMsg: "Los dos textos son identicos",
    tooLargeMsg: "El texto es demasiado largo para compararlo",
    emptyMsg: "Ingresa ambos textos para ver el resultado de la comparación",
    howTitle: "Como Usar",
    howSteps: [
      "Ingresa el texto original a la izquierda (A) y el texto a comparar a la derecha (B).",
      "El resultado de la comparación línea por línea aparece automáticamente abajo.",
      "Las líneas verdes fueron agregadas, las rojas fueron eliminadas.",
      "Útil para comparar revisiones de contratos, cambios de código antes/después, o revisar documentos.",
    ],
    faq: [
      {
        q: "Se envia mi texto a un servidor?",
        a: "No. Toda la comparación ocurre completamente dentro de tu navegador. Nada se sube jamás.",
      },
      {
        q: "También compara palabra por palabra?",
        a: "Actualmente solo se admite la comparación línea por línea. Si solo cambio parte de una línea, se mostrara toda la línea como modificada.",
      },
      {
        q: "Puede manejar textos muy largos?",
        a: "Debido al algoritmo de comparación, textos extremadamente largos (miles de líneas) pueden procesarse lentamente en el navegador. Es más que suficiente para documentos o fragmentos de código tipicos.",
      },
    ],
    disclaimer: "Diferencias sutiles de espacio en blanco (como tabulaciones frente a espacios) también pueden detectarse como líneas diferentes.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningún servidor.",
  },
};
