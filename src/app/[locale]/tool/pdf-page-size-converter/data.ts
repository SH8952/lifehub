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
  targetLabel: string;
  generateButton: string;
  processing: string;
  download: string;
  warningText: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 용지 크기 변환기",
    subtitle: "PDF의 모든 페이지를 A4 또는 Letter 크기로 맞춰 다시 생성하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    targetLabel: "목표 용지 크기",
    generateButton: "변환 시작",
    processing: "변환 중...",
    download: "변환된 PDF 다운로드",
    warningText: "⚠️ 이 도구는 각 페이지를 이미지로 변환해 새 용지 크기에 맞추는 방식입니다. 변환 후에는 텍스트 선택/검색이 불가능해집니다.",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "목표 용지 크기(A4 또는 Letter)를 선택합니다.",
      "변환을 실행하고 결과 파일을 다운로드합니다.",
    ],
    faq: [
      { q: "내용이 잘리지 않나요?", a: "원본 페이지 내용은 비율을 유지한 채 새 용지 안에 맞춰지며, 여백이 생길 수 있지만 잘리지 않습니다." },
      { q: "변환 후 텍스트를 선택할 수 있나요?", a: "아니요, 페이지를 이미지로 변환하는 방식이라 텍스트 선택과 검색이 불가능해집니다." },
      { q: "A4와 Letter의 차이는 무엇인가요?", a: "A4(210x297mm)는 대부분의 국가에서, Letter(215.9x279.4mm)는 주로 미국에서 사용되는 표준 용지 크기입니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Page Size Converter",
    subtitle: "Resize every page in your PDF to fit A4 or Letter size. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    targetLabel: "Target Page Size",
    generateButton: "Start Converting",
    processing: "Converting...",
    download: "Download Converted PDF",
    warningText: "⚠️ This tool converts each page into an image to fit the new page size. After conversion, text can no longer be selected or searched.",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Choose the target page size (A4 or Letter).",
      "Run the conversion and download the result.",
    ],
    faq: [
      { q: "Will content get cut off?", a: "The original content is scaled to fit proportionally within the new page, possibly adding margins, but nothing is cropped." },
      { q: "Can I select text after conversion?", a: "No, since pages are converted to images, text selection and search become unavailable." },
      { q: "What's the difference between A4 and Letter?", a: "A4 (210x297mm) is used in most countries, while Letter (215.9x279.4mm) is mainly used in the US." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDF用紙サイズ変換ツール",
    subtitle: "PDFのすべてのページをA4またはLetterサイズに合わせて再生成します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    targetLabel: "目標用紙サイズ",
    generateButton: "変換を開始",
    processing: "変換中...",
    download: "変換済みPDFをダウンロード",
    warningText: "⚠️ このツールは各ページを画像に変換して新しい用紙サイズに合わせます。変換後はテキストの選択・検索ができなくなります。",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "目標用紙サイズ（A4またはLetter）を選択します。",
      "変換を実行して結果ファイルをダウンロードします。",
    ],
    faq: [
      { q: "内容が切れませんか？", a: "元のページ内容は比率を保ったまま新しい用紙に収まるように調整され、余白が生じることはありますが切れることはありません。" },
      { q: "変換後にテキストを選択できますか？", a: "いいえ、ページを画像に変換する方式のため、テキストの選択や検索ができなくなります。" },
      { q: "A4とLetterの違いは何ですか？", a: "A4（210x297mm）はほとんどの国で、Letter（215.9x279.4mm）は主に米国で使用される標準用紙サイズです。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Tamaño de Página PDF",
    subtitle: "Ajusta todas las páginas de tu PDF al tamaño A4 o Letter. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    targetLabel: "Tamaño de Página de Destino",
    generateButton: "Iniciar Conversión",
    processing: "Convirtiendo...",
    download: "Descargar PDF Convertido",
    warningText: "⚠️ Esta herramienta convierte cada página en una imagen para ajustarla al nuevo tamaño. Tras la conversión, el texto ya no se puede seleccionar ni buscar.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Elige el tamaño de página de destino (A4 o Letter).",
      "Ejecuta la conversión y descarga el resultado.",
    ],
    faq: [
      { q: "¿Se recortará el contenido?", a: "El contenido original se escala proporcionalmente para ajustarse a la nueva página, pudiendo añadir márgenes, pero sin recortarse." },
      { q: "¿Puedo seleccionar texto después de la conversión?", a: "No, ya que las páginas se convierten en imágenes, la selección y búsqueda de texto no estarán disponibles." },
      { q: "¿Cuál es la diferencia entre A4 y Letter?", a: "A4 (210x297mm) se usa en la mayoría de países, mientras que Letter (215.9x279.4mm) se usa principalmente en EE. UU." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
