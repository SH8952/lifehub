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
  pasteLabel: string;
  pastePlaceholder: string;
  titleFieldLabel: string;
  formatLabel: string;
  previewLabel: string;
  generateButton: string;
  processing: string;
  noDataYet: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "CSV → PDF 표 변환기",
    subtitle: "CSV 파일을 업로드하거나 붙여넣으면 깔끔한 표 형태의 PDF로 변환해 드립니다. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "CSV 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요, 또는 아래에 직접 붙여넣으세요",
    changeFile: "다른 파일 선택",
    pasteLabel: "또는 CSV 텍스트를 직접 붙여넣으세요",
    pastePlaceholder: "이름,나이,도시\\n홍길동,30,서울\\n김영희,25,부산",
    titleFieldLabel: "표 제목 (선택)",
    formatLabel: "용지 크기",
    previewLabel: "미리보기",
    generateButton: "PDF로 변환",
    processing: "변환 중...",
    noDataYet: "CSV 파일을 업로드하거나 텍스트를 붙여넣으면 여기에 표가 표시됩니다.",
    howTitle: "사용 방법",
    howSteps: [
      "CSV 파일을 업로드하거나 텍스트 영역에 CSV 내용을 붙여넣습니다.",
      "미리보기에서 표를 확인합니다.",
      "용지 크기를 선택하고 PDF로 변환합니다.",
    ],
    faq: [
      { q: "쉼표 외에 다른 구분자도 지원하나요?", a: "현재는 쉼표(,)로 구분된 CSV만 지원합니다. 탭으로 구분된 파일은 쉼표로 변환 후 사용해 주세요." },
      { q: "큰 표도 여러 페이지로 나눠지나요?", a: "네, 표가 한 페이지보다 길면 자동으로 다음 페이지로 이어집니다." },
      { q: "큰따옴표로 감싼 필드도 처리되나요?", a: "네, 쉼표가 포함된 값을 큰따옴표로 감싼 일반적인 CSV 형식을 지원합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "CSV to PDF Table Converter",
    subtitle: "Upload or paste a CSV file and convert it into a clean table-style PDF. All processing happens in your browser.",
    uploadLabel: "Upload a CSV file",
    uploadHint: "Click or drag and drop, or paste directly below",
    changeFile: "Choose another file",
    pasteLabel: "Or paste CSV text directly",
    pastePlaceholder: "name,age,city\\nJohn,30,NYC\\nJane,25,LA",
    titleFieldLabel: "Table Title (optional)",
    formatLabel: "Page Format",
    previewLabel: "Preview",
    generateButton: "Convert to PDF",
    processing: "Converting...",
    noDataYet: "The table will appear here once you upload a CSV file or paste text.",
    howTitle: "How to Use",
    howSteps: [
      "Upload a CSV file or paste CSV content into the text area.",
      "Check the table in the preview.",
      "Choose a page format and convert to PDF.",
    ],
    faq: [
      { q: "Does it support delimiters other than commas?", a: "Currently only comma-separated CSV is supported. Convert tab-separated files to commas first." },
      { q: "Do large tables split across multiple pages?", a: "Yes, if the table is longer than one page it automatically continues onto the next page." },
      { q: "Are quoted fields with embedded commas handled?", a: "Yes, standard CSV formatting with double-quoted fields containing commas is supported." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "CSV → PDF表変換ツール",
    subtitle: "CSVファイルをアップロードまたは貼り付けると、きれいな表形式のPDFに変換します。すべての処理はブラウザで行われます。",
    uploadLabel: "CSVファイルをアップロードしてください",
    uploadHint: "クリックまたはドラッグ＆ドロップ、または下に直接貼り付けてください",
    changeFile: "別のファイルを選択",
    pasteLabel: "またはCSVテキストを直接貼り付けてください",
    pastePlaceholder: "名前,年齢,都市\\n山田,30,東京\\n佐藤,25,大阪",
    titleFieldLabel: "表のタイトル（任意）",
    formatLabel: "用紙サイズ",
    previewLabel: "プレビュー",
    generateButton: "PDFに変換",
    processing: "変換中...",
    noDataYet: "CSVファイルをアップロードするかテキストを貼り付けると、表がここに表示されます。",
    howTitle: "使用方法",
    howSteps: [
      "CSVファイルをアップロードするか、テキスト領域にCSV内容を貼り付けます。",
      "プレビューで表を確認します。",
      "用紙サイズを選択してPDFに変換します。",
    ],
    faq: [
      { q: "カンマ以外の区切り文字にも対応していますか？", a: "現在はカンマ（,）区切りのCSVのみ対応しています。タブ区切りファイルはカンマに変換してからご利用ください。" },
      { q: "大きな表は複数ページに分割されますか？", a: "はい、表が1ページより長い場合は自動的に次のページへ続きます。" },
      { q: "カンマを含む値を二重引用符で囲んだフィールドも処理されますか？", a: "はい、カンマを含む値を二重引用符で囲んだ標準的なCSV形式に対応しています。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de CSV a Tabla PDF",
    subtitle: "Sube o pega un archivo CSV y convviértelo en un PDF con formato de tabla. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo CSV",
    uploadHint: "Haz clic o arrastra y suelta, o pega directamente abajo",
    changeFile: "Elegir otro archivo",
    pasteLabel: "O pega el texto CSV directamente",
    pastePlaceholder: "nombre,edad,ciudad\\nJuan,30,Madrid\\nAna,25,Lima",
    titleFieldLabel: "Título de la Tabla (opcional)",
    formatLabel: "Tamaño de Página",
    previewLabel: "Vista Previa",
    generateButton: "Convertir a PDF",
    processing: "Convirtiendo...",
    noDataYet: "La tabla aparecerá aquí cuando subas un archivo CSV o pegues texto.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo CSV o pega el contenido CSV en el área de texto.",
      "Revisa la tabla en la vista previa.",
      "Elige un tamaño de página y convierte a PDF.",
    ],
    faq: [
      { q: "¿Admite delimitadores distintos de la coma?", a: "Actualmente solo se admite CSV separado por comas. Convierte los archivos separados por tabulaciones a comas primero." },
      { q: "¿Las tablas grandes se dividen en varias páginas?", a: "Sí, si la tabla es más larga que una página, continúa automáticamente en la siguiente." },
      { q: "¿Se manejan campos entre comillas con comas incluidas?", a: "Sí, se admite el formato CSV estándar con campos entre comillas dobles que contienen comas." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
