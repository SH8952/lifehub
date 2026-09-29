export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  modeLabel: string;
  modeMerge: string;
  modeSplit: string;
  mergeUploadLabel: string;
  mergeUploadHint: string;
  addMore: string;
  fileListLabel: string;
  remove: string;
  mergeButton: string;
  splitUploadLabel: string;
  splitUploadHint: string;
  changeFile: string;
  pageCountLabel: string;
  rangeLabel: string;
  rangePlaceholder: string;
  rangeHint: string;
  splitButton: string;
  processing: string;
  download: string;
  howTitle: string;
  howStepsMerge: string[];
  howStepsSplit: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 분할 / 병합",
    subtitle: "여러 PDF를 하나로 합치거나, 원하는 페이지만 추출하세요 (브라우저에서 100% 처리)",
    modeLabel: "작업 종류",
    modeMerge: "병합 (여러 개 → 1개)",
    modeSplit: "분할/추출 (원하는 페이지만)",
    mergeUploadLabel: "합칠 PDF 파일들을 드래그하거나 클릭해서 업로드하세요",
    mergeUploadHint: "여러 개의 PDF 파일을 한 번에 선택할 수 있습니다",
    addMore: "파일 추가",
    fileListLabel: "병합 순서 (위에서부터)",
    remove: "제거",
    mergeButton: "병합하기",
    splitUploadLabel: "PDF 파일을 드래그하거나 클릭해서 업로드하세요",
    splitUploadHint: "PDF 파일만 지원",
    changeFile: "다른 파일 선택",
    pageCountLabel: "전체 페이지 수",
    rangeLabel: "추출할 페이지",
    rangePlaceholder: "예: 1-3,5,7-9",
    rangeHint: "쉼표로 여러 범위를 지정할 수 있습니다 (예: 1-3,5,7-9)",
    splitButton: "추출하기",
    processing: "처리 중...",
    download: "결과 PDF 다운로드",
    howTitle: "사용 방법",
    howStepsMerge: [
      "합칠 PDF 파일들을 순서대로 업로드합니다.",
      "위/아래 화살표로 병합 순서를 조정합니다.",
      "'병합하기' 버튼을 눌러 하나의 PDF로 합칩니다.",
      "완료되면 결과 PDF를 다운로드합니다.",
    ],
    howStepsSplit: [
      "분할할 PDF 파일을 업로드합니다.",
      "추출할 페이지 번호를 입력합니다 (예: 1-3,5,7-9).",
      "'추출하기' 버튼을 눌러 처리합니다.",
      "완료되면 추출된 페이지만 담긴 새 PDF를 다운로드합니다.",
    ],
    faq: [
      {
        q: "몇 개까지 PDF를 병합할 수 있나요?",
        a: "개수 제한은 없지만, 파일이 많거나 용량이 클수록 브라우저 메모리를 더 많이 사용하므로 처리 시간이 길어질 수 있습니다.",
      },
      {
        q: "추출한 페이지 순서를 바꿀 수 있나요?",
        a: "현재는 입력한 페이지 범위를 오름차순으로 정렬해 추출합니다. 순서를 바꾸고 싶다면 추출 후 병합 기능으로 원하는 순서로 재조합할 수 있습니다.",
      },
      {
        q: "업로드한 PDF가 서버로 전송되나요?",
        a: "아니요. 모든 처리는 브라우저 안에서만 이루어지며 PDF 내용이 서버로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 비밀번호로 암호화된 PDF는 처리할 수 없습니다. 먼저 잠금을 해제한 뒤 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "PDF Merge / Split",
    subtitle: "Combine multiple PDFs into one, or extract just the pages you need (100% processed in your browser)",
    modeLabel: "Task Type",
    modeMerge: "Merge (multiple → one)",
    modeSplit: "Split/Extract (specific pages)",
    mergeUploadLabel: "Drag & drop the PDFs to merge, or click to upload",
    mergeUploadHint: "You can select multiple PDF files at once",
    addMore: "Add More Files",
    fileListLabel: "Merge order (top to bottom)",
    remove: "Remove",
    mergeButton: "Merge",
    splitUploadLabel: "Drag & drop a PDF, or click to upload",
    splitUploadHint: "PDF files only",
    changeFile: "Choose a different file",
    pageCountLabel: "Total pages",
    rangeLabel: "Pages to Extract",
    rangePlaceholder: "e.g. 1-3,5,7-9",
    rangeHint: "Separate multiple ranges with commas (e.g. 1-3,5,7-9)",
    splitButton: "Extract",
    processing: "Processing...",
    download: "Download Result PDF",
    howTitle: "How to Use",
    howStepsMerge: [
      "Upload the PDF files you want to merge, in order.",
      "Use the up/down arrows to adjust the merge order.",
      "Click 'Merge' to combine them into a single PDF.",
      "Download the resulting PDF once it's done.",
    ],
    howStepsSplit: [
      "Upload the PDF file you want to split.",
      "Enter the page numbers to extract (e.g. 1-3,5,7-9).",
      "Click 'Extract' to process it.",
      "Download the new PDF containing only the extracted pages.",
    ],
    faq: [
      {
        q: "Is there a limit on how many PDFs I can merge?",
        a: "There's no hard limit, but more or larger files use more browser memory and may take longer to process.",
      },
      {
        q: "Can I reorder the extracted pages?",
        a: "Currently the entered page range is sorted in ascending order for extraction. To change the order, extract first, then use the Merge feature to reassemble pages in the order you want.",
      },
      {
        q: "Is my uploaded PDF sent to a server?",
        a: "No. All processing happens entirely in your browser; the PDF content is never uploaded.",
      },
    ],
    disclaimer: "Password-encrypted PDFs cannot be processed. Unlock them first before using this tool.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "PDF分割・結合",
    subtitle: "複数のPDFを1つに結合したり、必要なページだけを抽出できます（ブラウザで100%処理）",
    modeLabel: "作業の種類",
    modeMerge: "結合（複数→1つ）",
    modeSplit: "分割・抽出（特定のページ）",
    mergeUploadLabel: "結合するPDFファイルをドラッグ＆ドロップ、またはクリックしてアップロード",
    mergeUploadHint: "複数のPDFファイルを一度に選択できます",
    addMore: "ファイルを追加",
    fileListLabel: "結合順序（上から下へ）",
    remove: "削除",
    mergeButton: "結合する",
    splitUploadLabel: "PDFファイルをドラッグ＆ドロップ、またはクリックしてアップロード",
    splitUploadHint: "PDFファイルのみ対応",
    changeFile: "別のファイルを選択",
    pageCountLabel: "総ページ数",
    rangeLabel: "抽出するページ",
    rangePlaceholder: "例：1-3,5,7-9",
    rangeHint: "カンマで複数の範囲を指定できます（例：1-3,5,7-9）",
    splitButton: "抽出する",
    processing: "処理中...",
    download: "結果PDFをダウンロード",
    howTitle: "使い方",
    howStepsMerge: [
      "結合したいPDFファイルを順番にアップロードします。",
      "上下の矢印で結合順序を調整します。",
      "「結合する」ボタンを押して1つのPDFにまとめます。",
      "完了したら結果のPDFをダウンロードします。",
    ],
    howStepsSplit: [
      "分割したいPDFファイルをアップロードします。",
      "抽出したいページ番号を入力します（例：1-3,5,7-9）。",
      "「抽出する」ボタンを押して処理します。",
      "完了したら抽出したページだけの新しいPDFをダウンロードします。",
    ],
    faq: [
      {
        q: "PDFはいくつまで結合できますか？",
        a: "個数に制限はありませんが、ファイルが多い・大きいほどブラウザのメモリを多く使用し、処理時間が長くなる場合があります。",
      },
      {
        q: "抽出したページの順序を変更できますか？",
        a: "現在は入力したページ範囲を昇順に並べて抽出します。順序を変更したい場合は、抽出後に結合機能を使って好きな順序に再構成できます。",
      },
      {
        q: "アップロードしたPDFはサーバーに送信されますか？",
        a: "いいえ。すべての処理はブラウザ内だけで行われ、PDFの内容がサーバーに送信されることはありません。",
      },
    ],
    disclaimer: "⚠️ パスワードで暗号化されたPDFは処理できません。先にロックを解除してから使用してください。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Combinar / Dividir PDF",
    subtitle: "Combina varios PDF en uno solo, o extrae solo las paginas que necesitas (100% procesado en tu navegador)",
    modeLabel: "Tipo de Tarea",
    modeMerge: "Combinar (varios → uno)",
    modeSplit: "Dividir/Extraer (paginas especificas)",
    mergeUploadLabel: "Arrastra y suelta los PDF a combinar, o haz clic para subirlos",
    mergeUploadHint: "Puedes seleccionar varios archivos PDF a la vez",
    addMore: "Agregar mas archivos",
    fileListLabel: "Orden de combinacion (de arriba a abajo)",
    remove: "Quitar",
    mergeButton: "Combinar",
    splitUploadLabel: "Arrastra y suelta un PDF, o haz clic para subirlo",
    splitUploadHint: "Solo archivos PDF",
    changeFile: "Elegir otro archivo",
    pageCountLabel: "Total de paginas",
    rangeLabel: "Paginas a Extraer",
    rangePlaceholder: "ej: 1-3,5,7-9",
    rangeHint: "Separa varios rangos con comas (ej: 1-3,5,7-9)",
    splitButton: "Extraer",
    processing: "Procesando...",
    download: "Descargar PDF Resultante",
    howTitle: "Como Usar",
    howStepsMerge: [
      "Sube los archivos PDF que deseas combinar, en orden.",
      "Usa las flechas arriba/abajo para ajustar el orden de combinacion.",
      "Haz clic en 'Combinar' para unirlos en un solo PDF.",
      "Descarga el PDF resultante cuando termine.",
    ],
    howStepsSplit: [
      "Sube el archivo PDF que deseas dividir.",
      "Ingresa los numeros de pagina a extraer (ej: 1-3,5,7-9).",
      "Haz clic en 'Extraer' para procesarlo.",
      "Descarga el nuevo PDF que contiene solo las paginas extraidas.",
    ],
    faq: [
      {
        q: "Hay un limite de cuantos PDF puedo combinar?",
        a: "No hay un limite estricto, pero mas archivos o archivos mas grandes usan mas memoria del navegador y pueden tardar mas en procesarse.",
      },
      {
        q: "Puedo reordenar las paginas extraidas?",
        a: "Actualmente el rango de paginas ingresado se ordena de forma ascendente para la extraccion. Para cambiar el orden, extrae primero y luego usa la funcion Combinar para reensamblar las paginas en el orden que desees.",
      },
      {
        q: "Se envia mi PDF subido a un servidor?",
        a: "No. Todo el procesamiento ocurre completamente en tu navegador; el contenido del PDF nunca se sube.",
      },
    ],
    disclaimer: "Los PDF cifrados con contrasena no se pueden procesar. Desbloquealos primero antes de usar esta herramienta.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
