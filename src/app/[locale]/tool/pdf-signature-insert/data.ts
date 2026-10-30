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
  pageLabel: string;
  signaturePadLabel: string;
  clearSignature: string;
  positionLabel: string;
  xLabel: string;
  yLabel: string;
  widthLabel: string;
  previewLabel: string;
  generateButton: string;
  processing: string;
  download: string;
  signatureRequired: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 서명 이미지 삽입기",
    subtitle: "손으로 그린 서명을 PDF의 원하는 페이지와 위치에 삽입하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    pageLabel: "삽입할 페이지",
    signaturePadLabel: "여기에 서명을 그려주세요",
    clearSignature: "서명 지우기",
    positionLabel: "위치 조정",
    xLabel: "가로 위치",
    yLabel: "세로 위치",
    widthLabel: "크기",
    previewLabel: "페이지 미리보기",
    generateButton: "서명 삽입하고 저장",
    processing: "처리 중...",
    download: "PDF 다운로드",
    signatureRequired: "먼저 서명을 그려주세요.",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드하고 삽입할 페이지를 선택합니다.",
      "서명 패드에 마우스나 손가락으로 서명을 그립니다.",
      "위치와 크기를 조정한 뒤 PDF에 삽입하고 다운로드합니다.",
    ],
    faq: [
      { q: "법적으로 유효한 전자서명인가요?", a: "이 도구는 손으로 그린 서명 이미지를 PDF에 삽입하는 간단한 도구입니다. 법적 효력이 필요한 전자서명은 공인 전자서명 서비스를 이용해 주세요." },
      { q: "여러 페이지에 서명을 추가할 수 있나요?", a: "현재 버전은 한 번에 한 페이지에만 서명을 삽입합니다. 여러 페이지가 필요하면 각 페이지마다 다시 진행해 주세요." },
      { q: "서명을 다시 그릴 수 있나요?", a: "네, '서명 지우기' 버튼으로 패드를 초기화하고 다시 그릴 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Signature Inserter",
    subtitle: "Draw a signature and insert it at a chosen position on any page of your PDF. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    pageLabel: "Target Page",
    signaturePadLabel: "Draw your signature here",
    clearSignature: "Clear Signature",
    positionLabel: "Position",
    xLabel: "Horizontal",
    yLabel: "Vertical",
    widthLabel: "Size",
    previewLabel: "Page Preview",
    generateButton: "Insert Signature & Save",
    processing: "Processing...",
    download: "Download PDF",
    signatureRequired: "Please draw your signature first.",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF and choose the target page.",
      "Draw your signature on the pad with your mouse or finger.",
      "Adjust the position and size, then insert and download.",
    ],
    faq: [
      { q: "Is this a legally valid electronic signature?", a: "This tool simply inserts a hand-drawn signature image into a PDF. For legally binding e-signatures, please use a certified e-signature service." },
      { q: "Can I add signatures to multiple pages?", a: "The current version inserts a signature on one page at a time. Repeat the process for additional pages." },
      { q: "Can I redraw the signature?", a: "Yes, use the 'Clear Signature' button to reset the pad and draw again." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDF署名画像挿入ツール",
    subtitle: "手描きの署名をPDFの任意のページと位置に挿入します。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    pageLabel: "挿入するページ",
    signaturePadLabel: "ここに署名を描いてください",
    clearSignature: "署名を消去",
    positionLabel: "位置調整",
    xLabel: "横位置",
    yLabel: "縦位置",
    widthLabel: "サイズ",
    previewLabel: "ページプレビュー",
    generateButton: "署名を挿入して保存",
    processing: "処理中...",
    download: "PDFをダウンロード",
    signatureRequired: "まず署名を描いてください。",
    howTitle: "使用方法",
    howSteps: [
      "PDFをアップロードして挿入するページを選択します。",
      "署名パッドにマウスや指で署名を描きます。",
      "位置とサイズを調整してPDFに挿入し、ダウンロードします。",
    ],
    faq: [
      { q: "法的に有効な電子署名ですか？", a: "このツールは手描きの署名画像をPDFに挿入する簡単なツールです。法的効力が必要な電子署名は公認の電子署名サービスをご利用ください。" },
      { q: "複数のページに署名を追加できますか？", a: "現在のバージョンは一度に1ページのみ署名を挿入します。複数ページが必要な場合は各ページごとに再度実行してください。" },
      { q: "署名を描き直せますか？", a: "はい、「署名を消去」ボタンでパッドをリセットして再度描くことができます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Insertar Firma en PDF",
    subtitle: "Dibuja una firma e insértala en la posición que elijas de cualquier página de tu PDF. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    pageLabel: "Página de Destino",
    signaturePadLabel: "Dibuja tu firma aquí",
    clearSignature: "Borrar Firma",
    positionLabel: "Posición",
    xLabel: "Horizontal",
    yLabel: "Vertical",
    widthLabel: "Tamaño",
    previewLabel: "Vista Previa de Página",
    generateButton: "Insertar Firma y Guardar",
    processing: "Procesando...",
    download: "Descargar PDF",
    signatureRequired: "Primero dibuja tu firma.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un PDF y elige la página de destino.",
      "Dibuja tu firma en el panel con el ratón o el dedo.",
      "Ajusta la posición y el tamaño, luego inserta y descarga.",
    ],
    faq: [
      { q: "¿Es una firma electrónica legalmente válida?", a: "Esta herramienta simplemente inserta una imagen de firma dibujada a mano en un PDF. Para firmas electrónicas legalmente vinculantes, usa un servicio certificado." },
      { q: "¿Puedo añadir firmas a varias páginas?", a: "La versión actual inserta una firma en una página a la vez. Repite el proceso para otras páginas." },
      { q: "¿Puedo volver a dibujar la firma?", a: "Sí, usa el botón 'Borrar Firma' para reiniciar el panel y dibujar de nuevo." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
