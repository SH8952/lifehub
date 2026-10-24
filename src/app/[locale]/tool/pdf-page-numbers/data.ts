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
  formatLabel: string;
  formatNumberOnly: string;
  formatCurrentTotal: string;
  startNumberLabel: string;
  process: string;
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
    title: "PDF 페이지 번호 매기기",
    subtitle: "PDF 파일에 원하는 위치·형식으로 페이지 번호를 추가하세요 (브라우저에서 100% 처리)",
    uploadLabel: "PDF 파일을 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "PDF 파일만 지원",
    changeFile: "다른 파일 선택",
    pageCountLabel: "전체 페이지 수",
    positionLabel: "번호 위치",
    formatLabel: "번호 형식",
    formatNumberOnly: "숫자만 (1, 2, 3...)",
    formatCurrentTotal: "현재/전체 (1 / 10)",
    startNumberLabel: "시작 번호",
    process: "페이지 번호 추가",
    processing: "처리 중...",
    download: "결과 PDF 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "번호를 매길 PDF 파일을 업로드합니다.",
      "번호 위치, 형식, 시작 번호를 선택합니다.",
      "'페이지 번호 추가' 버튼을 눌러 처리합니다.",
      "완료되면 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      {
        q: "이미 페이지 번호가 있는 PDF에 사용하면 어떻게 되나요?",
        a: "기존 내용은 그대로 두고 새 번호를 추가로 그려 넣는 방식이라, 기존에 번호가 있었다면 두 번호가 겹쳐 보일 수 있습니다. 번호가 없는 PDF에 사용하는 것을 권장합니다.",
      },
      {
        q: "비밀번호로 보호된 PDF도 처리할 수 있나요?",
        a: "아니요. 비밀번호로 암호화된 PDF는 먼저 잠금을 해제한 뒤 사용해야 합니다.",
      },
      {
        q: "업로드한 PDF가 서버로 전송되나요?",
        a: "아니요. 모든 처리는 브라우저 안에서만 이루어지며 PDF 내용이 서버로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 페이지 수가 매우 많은 PDF는 처리에 시간이 다소 걸릴 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "PDF Page Numbers",
    subtitle: "Add page numbers to your PDF at the position and format you choose (100% processed in your browser)",
    uploadLabel: "Drag & drop a PDF, or click to upload",
    uploadHint: "PDF files only",
    changeFile: "Choose a different file",
    pageCountLabel: "Total pages",
    positionLabel: "Number Position",
    formatLabel: "Number Format",
    formatNumberOnly: "Number only (1, 2, 3...)",
    formatCurrentTotal: "Current / Total (1 / 10)",
    startNumberLabel: "Start Number",
    process: "Add Page Numbers",
    processing: "Processing...",
    download: "Download Result PDF",
    howTitle: "How to Use",
    howSteps: [
      "Upload the PDF file you want to number.",
      "Choose the position, format, and starting number.",
      "Click 'Add Page Numbers' to process it.",
      "Download the resulting PDF once it's done.",
    ],
    faq: [
      {
        q: "What happens if the PDF already has page numbers?",
        a: "The original content is kept as-is and new numbers are drawn on top, so if numbers already exist they may overlap. It's best to use this on a PDF without existing numbers.",
      },
      {
        q: "Can I process a password-protected PDF?",
        a: "No. A password-encrypted PDF must be unlocked first before using this tool.",
      },
      {
        q: "Is my uploaded PDF sent to a server?",
        a: "No. All processing happens entirely in your browser; the PDF content is never uploaded.",
      },
    ],
    disclaimer: "PDFs with a very large number of pages may take a little longer to process.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "PDFページ番号追加",
    subtitle: "PDFファイルに好きな位置・形式でページ番号を追加します（ブラウザで100%処理）",
    uploadLabel: "PDFファイルをドラッグ＆ドロップ、またはクリックしてアップロード",
    uploadHint: "PDFファイルのみ対応",
    changeFile: "別のファイルを選択",
    pageCountLabel: "総ページ数",
    positionLabel: "番号の位置",
    formatLabel: "番号の形式",
    formatNumberOnly: "数字のみ (1, 2, 3...)",
    formatCurrentTotal: "現在/合計 (1 / 10)",
    startNumberLabel: "開始番号",
    process: "ページ番号を追加",
    processing: "処理中...",
    download: "結果PDFをダウンロード",
    howTitle: "使い方",
    howSteps: [
      "番号を付けたいPDFファイルをアップロードします。",
      "番号の位置、形式、開始番号を選択します。",
      "「ページ番号を追加」ボタンを押して処理します。",
      "完了したら結果のPDFをダウンロードします。",
    ],
    faq: [
      {
        q: "すでにページ番号があるPDFに使うとどうなりますか？",
        a: "既存の内容はそのままに新しい番号を上から描画する方式のため、すでに番号がある場合は重なって表示される可能性があります。番号のないPDFでの使用をおすすめします。",
      },
      {
        q: "パスワード保護されたPDFも処理できますか？",
        a: "いいえ。パスワードで暗号化されたPDFは、先にロックを解除してから使用する必要があります。",
      },
      {
        q: "アップロードしたPDFはサーバーに送信されますか？",
        a: "いいえ。すべての処理はブラウザ内だけで行われ、PDFの内容がサーバーに送信されることはありません。",
      },
    ],
    disclaimer: "⚠️ ページ数が非常に多いPDFは処理に多少時間がかかる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Numeración de Páginas PDF",
    subtitle: "Agrega números de página a tu PDF en la posición y formato que elijas (100% procesado en tu navegador)",
    uploadLabel: "Arrastra y suelta un PDF, o haz clic para subirlo",
    uploadHint: "Solo archivos PDF",
    changeFile: "Elegir otro archivo",
    pageCountLabel: "Total de páginas",
    positionLabel: "Posición del Número",
    formatLabel: "Formato del Número",
    formatNumberOnly: "Solo número (1, 2, 3...)",
    formatCurrentTotal: "Actual / Total (1 / 10)",
    startNumberLabel: "Número Inicial",
    process: "Agregar Números de Página",
    processing: "Procesando...",
    download: "Descargar PDF Resultante",
    howTitle: "Como Usar",
    howSteps: [
      "Sube el archivo PDF que deseas numerar.",
      "Elige la posición, el formato y el número inicial.",
      "Haz clic en 'Agregar Números de Página' para procesarlo.",
      "Descarga el PDF resultante cuando termine.",
    ],
    faq: [
      {
        q: "Que pasa si el PDF ya tiene números de página?",
        a: "El contenido original se mantiene igual y los nuevos números se dibujan encima, por lo que si ya existen números pueden superponerse. Es mejor usar esto en un PDF sin números existentes.",
      },
      {
        q: "Puedo procesar un PDF protegido con contrasena?",
        a: "No. Un PDF cifrado con contrasena debe desbloquearse primero antes de usar esta herramienta.",
      },
      {
        q: "Se envia mi PDF subido a un servidor?",
        a: "No. Todo el procesamiento ocurre completamente en tu navegador; el contenido del PDF nunca se sube.",
      },
    ],
    disclaimer: "Los PDF con un número muy grande de páginas pueden tardar un poco más en procesarse.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningún servidor.",
  },
};
