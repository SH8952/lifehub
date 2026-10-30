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
  noFieldsFound: string;
  fieldsLabel: string;
  flattenLabel: string;
  generateButton: string;
  processing: string;
  download: string;
  selectOption: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 양식 채우기",
    subtitle: "입력 가능한 PDF 양식(AcroForm)의 필드를 감지해 값을 채운 뒤 저장하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "양식이 포함된 PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    noFieldsFound: "이 PDF에는 입력 가능한 양식 필드가 없습니다.",
    fieldsLabel: "감지된 필드",
    flattenLabel: "제출 후 편집 불가능하게 고정(플래튼)",
    generateButton: "채우기 적용하고 저장",
    processing: "처리 중...",
    download: "PDF 다운로드",
    selectOption: "선택하세요",
    howTitle: "사용 방법",
    howSteps: [
      "양식(AcroForm)이 포함된 PDF 파일을 업로드합니다.",
      "감지된 각 필드에 값을 입력하거나 선택합니다.",
      "채우기를 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "모든 PDF에서 작동하나요?", a: "아니요, PDF 내부에 실제 입력 가능한 양식 필드(AcroForm)가 있어야 합니다. 스캔 이미지나 일반 문서에는 필드가 없습니다." },
      { q: "체크박스와 라디오 버튼도 지원하나요?", a: "네, 텍스트 필드, 체크박스, 라디오 그룹, 드롭다운을 모두 지원합니다." },
      { q: "'플래튼'은 무엇인가요?", a: "채운 값을 고정된 텍스트로 변환해 더 이상 수정할 수 없게 만드는 기능입니다. 최종본을 공유할 때 유용합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Form Filler",
    subtitle: "Detect fillable fields in a PDF form (AcroForm), fill in values, and save. All processing happens in your browser.",
    uploadLabel: "Upload a PDF with form fields",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    noFieldsFound: "This PDF has no fillable form fields.",
    fieldsLabel: "Detected Fields",
    flattenLabel: "Flatten form after filling (make read-only)",
    generateButton: "Apply & Save",
    processing: "Processing...",
    download: "Download PDF",
    selectOption: "Select an option",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file with an AcroForm.",
      "Enter or select values for each detected field.",
      "Apply the fill and download the resulting PDF.",
    ],
    faq: [
      { q: "Does this work with any PDF?", a: "No, the PDF must have actual fillable form fields (AcroForm). Scanned images or plain documents have none." },
      { q: "Are checkboxes and radio buttons supported?", a: "Yes, text fields, checkboxes, radio groups, and dropdowns are all supported." },
      { q: "What does 'flatten' mean?", a: "It converts the filled-in values into fixed text so they can no longer be edited — useful when sharing a final version." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFフォーム入力ツール",
    subtitle: "入力可能なPDFフォーム（AcroForm）のフィールドを検出して値を入力し、保存します。すべての処理はブラウザで行われます。",
    uploadLabel: "フォーム付きのPDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    noFieldsFound: "このPDFには入力可能なフォームフィールドがありません。",
    fieldsLabel: "検出されたフィールド",
    flattenLabel: "入力後に編集不可にする（フラット化）",
    generateButton: "入力を適用して保存",
    processing: "処理中...",
    download: "PDFをダウンロード",
    selectOption: "選択してください",
    howTitle: "使用方法",
    howSteps: [
      "フォーム（AcroForm）が含まれるPDFファイルをアップロードします。",
      "検出された各フィールドに値を入力または選択します。",
      "入力を適用して結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "どんなPDFでも使えますか？", a: "いいえ、PDF内部に実際の入力可能なフォームフィールド（AcroForm）がある必要があります。スキャン画像や通常の文書にはフィールドがありません。" },
      { q: "チェックボックスやラジオボタンにも対応していますか？", a: "はい、テキストフィールド、チェックボックス、ラジオグループ、ドロップダウンすべてに対応しています。" },
      { q: "「フラット化」とは何ですか？", a: "入力した値を固定テキストに変換し、これ以上編集できなくする機能です。最終版を共有する際に便利です。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Rellenar Formulario PDF",
    subtitle: "Detecta campos rellenables en un formulario PDF (AcroForm), completa los valores y guarda. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un PDF con campos de formulario",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    noFieldsFound: "Este PDF no tiene campos de formulario rellenables.",
    fieldsLabel: "Campos Detectados",
    flattenLabel: "Aplanar el formulario tras rellenar (solo lectura)",
    generateButton: "Aplicar y Guardar",
    processing: "Procesando...",
    download: "Descargar PDF",
    selectOption: "Selecciona una opción",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF con un AcroForm.",
      "Introduce o selecciona valores para cada campo detectado.",
      "Aplica el relleno y descarga el PDF resultante.",
    ],
    faq: [
      { q: "¿Funciona con cualquier PDF?", a: "No, el PDF debe tener campos de formulario rellenables reales (AcroForm). Las imágenes escaneadas o documentos simples no los tienen." },
      { q: "¿Se admiten casillas y botones de opción?", a: "Sí, se admiten campos de texto, casillas, grupos de opción y listas desplegables." },
      { q: "¿Qué significa 'aplanar'?", a: "Convierte los valores rellenados en texto fijo para que ya no se puedan editar; útil al compartir una versión final." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
