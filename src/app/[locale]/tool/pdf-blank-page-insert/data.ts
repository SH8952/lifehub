export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  uploadLabel: string;
  uploadHint: string;
  changeFile: string;
  pageCountLabel: string;
  positionLabel: string;
  positionHint: string;
  countLabel: string;
  sizeLabel: string;
  sizeMatch: string;
  generateButton: string;
  processing: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 빈 페이지 삽입기",
    subtitle: "PDF의 원하는 위치에 빈 페이지를 삽입하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    pageCountLabel: "전체 페이지 수",
    positionLabel: "삽입 위치 (이 번호 다음)",
    positionHint: "0을 입력하면 맨 앞에 삽입됩니다.",
    countLabel: "삽입할 빈 페이지 수",
    sizeLabel: "빈 페이지 용지 크기",
    sizeMatch: "기존 페이지와 동일",
    generateButton: "삽입하고 저장",
    processing: "처리 중...",
    download: "PDF 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "삽입 위치와 삽입할 빈 페이지 수, 용지 크기를 설정합니다.",
      "삽입을 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "왜 빈 페이지를 삽입하나요?", a: "인쇄물의 챕터 구분, 메모 공간 확보, 양면 인쇄 정렬 등에 유용합니다." },
      { q: "용지 크기를 다르게 지정할 수 있나요?", a: "네, A4/Letter 중 선택하거나 기존 페이지와 동일한 크기를 유지할 수 있습니다." },
      { q: "여러 위치에 한 번에 삽입할 수 있나요?", a: "현재 버전은 한 위치에만 삽입합니다. 다른 위치가 필요하면 다시 진행해 주세요." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Blank Page Inserter",
    subtitle: "Insert blank pages at any position in your PDF. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    pageCountLabel: "Total Pages",
    positionLabel: "Insert After Page",
    positionHint: "Enter 0 to insert at the very beginning.",
    countLabel: "Number of Blank Pages",
    sizeLabel: "Blank Page Size",
    sizeMatch: "Match Existing Page",
    generateButton: "Insert & Save",
    processing: "Processing...",
    download: "Download PDF",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Set the insert position, number of blank pages, and page size.",
      "Apply the insertion and download the resulting PDF.",
    ],
    faq: [
      { q: "Why insert blank pages?", a: "Useful for chapter separators in printouts, note-taking space, or aligning double-sided printing." },
      { q: "Can I choose a different page size?", a: "Yes, choose A4/Letter or keep the same size as the existing pages." },
      { q: "Can I insert at multiple positions at once?", a: "The current version inserts at one position at a time. Run it again for other positions." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDF空白ページ挿入ツール",
    subtitle: "PDFの任意の位置に空白ページを挿入します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    pageCountLabel: "総ページ数",
    positionLabel: "挿入位置（このページの後）",
    positionHint: "0を入力すると先頭に挿入されます。",
    countLabel: "挿入する空白ページ数",
    sizeLabel: "空白ページの用紙サイズ",
    sizeMatch: "既存ページと同じ",
    generateButton: "挿入して保存",
    processing: "処理中...",
    download: "PDFをダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "挿入位置、挿入する空白ページ数、用紙サイズを設定します。",
      "挿入を適用して結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "なぜ空白ページを挿入するのですか？", a: "印刷物の章の区切り、メモスペースの確保、両面印刷の調整などに役立ちます。" },
      { q: "用紙サイズを別に指定できますか？", a: "はい、A4/Letterから選択するか、既存のページと同じサイズを維持できます。" },
      { q: "複数の位置に一度に挿入できますか？", a: "現在のバージョンは1箇所のみ挿入します。他の位置が必要な場合は再度実行してください。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Insertar Página en Blanco en PDF",
    subtitle: "Inserta páginas en blanco en cualquier posición de tu PDF. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    pageCountLabel: "Total de Páginas",
    positionLabel: "Insertar Después de la Página",
    positionHint: "Introduce 0 para insertar al principio.",
    countLabel: "Número de Páginas en Blanco",
    sizeLabel: "Tamaño de Página en Blanco",
    sizeMatch: "Igual que la Existente",
    generateButton: "Insertar y Guardar",
    processing: "Procesando...",
    download: "Descargar PDF",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Configura la posición, el número de páginas en blanco y el tamaño.",
      "Aplica la inserción y descarga el PDF resultante.",
    ],
    faq: [
      { q: "¿Por qué insertar páginas en blanco?", a: "Útil para separadores de capítulos, espacio para notas o alinear la impresión a doble cara." },
      { q: "¿Puedo elegir un tamaño de página diferente?", a: "Sí, elige A4/Letter o mantén el mismo tamaño que las páginas existentes." },
      { q: "¿Puedo insertar en varias posiciones a la vez?", a: "La versión actual inserta en una posición a la vez. Repite el proceso para otras." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
