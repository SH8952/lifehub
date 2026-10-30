export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  uploadLabel: string;
  pageLabel: string;
  prevPageBtn: string;
  nextPageBtn: string;
  dragHintLabel: string;
  boxesLabel: string;
  boxItemLabel: string;
  removeBtn: string;
  downloadBtn: string;
  processingLabel: string;
  noBoxesMsg: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 민감정보 가리기",
    subtitle: "PDF 페이지에서 가리고 싶은 영역을 드래그로 선택해 검은색 박스로 덮은 뒤 새 PDF로 다운로드합니다.",
    uploadLabel: "PDF 파일을 드래그하거나 클릭하여 업로드",
    pageLabel: "페이지",
    prevPageBtn: "이전",
    nextPageBtn: "다음",
    dragHintLabel: "가리고 싶은 영역을 마우스로 드래그해 선택하세요.",
    boxesLabel: "선택된 영역",
    boxItemLabel: "페이지",
    removeBtn: "삭제",
    downloadBtn: "가리기 적용 후 다운로드",
    processingLabel: "처리 중...",
    noBoxesMsg: "아직 선택된 영역이 없습니다.",
    disclaimer: "⚠️ 중요: 이 도구는 선택한 영역 위에 검은색 박스를 그려 시각적으로만 가립니다. PDF 내부의 원본 텍스트 데이터는 삭제되지 않으므로, 텍스트 복사나 추출 프로그램으로는 가려진 내용이 노출될 수 있습니다. 법적으로 완전한 비공개가 필요한 민감 문서는 전문 PDF 편집 소프트웨어의 '진짜 redaction' 기능을 사용하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "가리고 싶은 페이지로 이동한 뒤, 마우스로 드래그해 가릴 영역을 선택합니다.",
      "필요한 모든 영역을 선택한 뒤 '가리기 적용 후 다운로드'를 눌러 새 PDF를 받으세요.",
    ],
    faq: [
      { q: "가려진 텍스트가 정말 안전하게 삭제되나요?", a: "아니요. 이 도구는 시각적으로 검은 박스를 덮는 것이며, PDF 파일 내부의 원본 텍스트 데이터 자체를 삭제하지는 않습니다. 완전한 보안이 필요하다면 전문 redaction 도구를 사용하세요." },
      { q: "여러 페이지에 걸쳐 영역을 선택할 수 있나요?", a: "네, 페이지를 이동하면서 각 페이지마다 원하는 만큼 영역을 선택할 수 있고, 다운로드 시 모든 선택 영역이 한 번에 적용됩니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "PDF Sensitive Info Redactor",
    subtitle: "Drag to select areas on a PDF page to cover with black boxes, then download the result as a new PDF.",
    uploadLabel: "Drag a PDF here or click to upload",
    pageLabel: "Page",
    prevPageBtn: "Previous",
    nextPageBtn: "Next",
    dragHintLabel: "Drag your mouse over the area you want to redact.",
    boxesLabel: "Selected Areas",
    boxItemLabel: "page",
    removeBtn: "Remove",
    downloadBtn: "Apply & Download",
    processingLabel: "Processing...",
    noBoxesMsg: "No areas selected yet.",
    disclaimer: "⚠️ Important: This tool only visually covers the selected area with a black box. The original text data inside the PDF is NOT deleted, so copying text or using extraction tools may still reveal the covered content. For legally sensitive documents requiring true redaction, use dedicated PDF editing software's actual redaction feature.",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Navigate to the page you want to redact, then drag to select the area to cover.",
      "After selecting all needed areas, click 'Apply & Download' to get the new PDF.",
    ],
    faq: [
      { q: "Is the covered text really deleted?", a: "No. This tool only visually covers the area with a black box; it does not delete the original text data inside the PDF. For true security, use a dedicated redaction tool." },
      { q: "Can I select areas across multiple pages?", a: "Yes, you can navigate between pages and select as many areas as needed on each; all selections are applied at once when you download." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "PDF機密情報隠し",
    subtitle: "PDFページで隠したい領域をドラッグで選択して黒い箱で覆い、新しいPDFとしてダウンロードします。",
    uploadLabel: "PDFファイルをドラッグまたはクリックしてアップロード",
    pageLabel: "ページ",
    prevPageBtn: "前へ",
    nextPageBtn: "次へ",
    dragHintLabel: "隠したい領域をマウスでドラッグして選択してください。",
    boxesLabel: "選択された領域",
    boxItemLabel: "ページ",
    removeBtn: "削除",
    downloadBtn: "適用してダウンロード",
    processingLabel: "処理中...",
    noBoxesMsg: "まだ選択された領域がありません。",
    disclaimer: "⚠️ 重要：このツールは選択した領域に黒い箱を描いて視覚的に隠すだけです。PDF内部の元のテキストデータは削除されないため、テキストコピーや抽出プログラムで隠した内容が露出する可能性があります。法的に完全な非公開が必要な機密文書は、専門のPDF編集ソフトウェアの「本物のredaction」機能を使用してください。",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "隠したいページに移動し、マウスでドラッグして隠す領域を選択します。",
      "必要なすべての領域を選択した後、「適用してダウンロード」を押して新しいPDFを受け取りましょう。",
    ],
    faq: [
      { q: "隠したテキストは本当に削除されますか？", a: "いいえ。このツールは視覚的に黒い箱で覆うだけで、PDFファイル内部の元のテキストデータ自体は削除しません。完全なセキュリティが必要な場合は専門のredactionツールを使用してください。" },
      { q: "複数ページにわたって領域を選択できますか？", a: "はい、ページを移動しながら各ページで必要な数の領域を選択でき、ダウンロード時にすべての選択領域が一度に適用されます。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Ocultador de Información Sensible en PDF",
    subtitle: "Arrastra para seleccionar áreas en una página PDF para cubrir con cajas negras, luego descarga el resultado.",
    uploadLabel: "Arrastra un PDF o haz clic para subir",
    pageLabel: "Página",
    prevPageBtn: "Anterior",
    nextPageBtn: "Siguiente",
    dragHintLabel: "Arrastra el mouse sobre el área que quieres ocultar.",
    boxesLabel: "Áreas Seleccionadas",
    boxItemLabel: "página",
    removeBtn: "Eliminar",
    downloadBtn: "Aplicar y Descargar",
    processingLabel: "Procesando...",
    noBoxesMsg: "Aún no hay áreas seleccionadas.",
    disclaimer: "⚠️ Importante: Esta herramienta solo cubre visualmente el área seleccionada con una caja negra. Los datos de texto originales dentro del PDF NO se eliminan, por lo que copiar texto o usar herramientas de extracción puede revelar el contenido cubierto. Para documentos legalmente sensibles que requieran redacción real, usa la función de redacción verdadera de software de edición PDF dedicado.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Ve a la página que quieres redactar, luego arrastra para seleccionar el área a cubrir.",
      "Después de seleccionar todas las áreas necesarias, haz clic en 'Aplicar y Descargar'.",
    ],
    faq: [
      { q: "¿El texto cubierto se elimina realmente?", a: "No. Esta herramienta solo cubre visualmente el área con una caja negra; no elimina los datos de texto originales dentro del PDF." },
      { q: "¿Puedo seleccionar áreas en varias páginas?", a: "Sí, puedes navegar entre páginas y seleccionar tantas áreas como necesites en cada una; todas las selecciones se aplican a la vez al descargar." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
