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
  rendering: string;
  pageLabel: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF → 이미지 변환",
    subtitle: "PDF의 각 페이지를 PNG 이미지로 변환해 개별 다운로드하세요 (브라우저에서 100% 처리)",
    uploadLabel: "PDF 파일을 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "PDF 파일만 지원",
    changeFile: "다른 파일 선택",
    rendering: "페이지 렌더링 중...",
    pageLabel: "페이지",
    download: "PNG 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "변환할 PDF 파일을 업로드합니다.",
      "모든 페이지가 이미지로 렌더링될 때까지 기다립니다.",
      "원하는 페이지의 'PNG 다운로드' 버튼을 눌러 개별로 저장합니다.",
    ],
    faq: [
      {
        q: "모든 페이지를 한 번에 ZIP으로 받을 수 있나요?",
        a: "현재는 페이지별로 하나씩 다운로드하는 방식만 지원합니다. 페이지 수가 많다면 각 썸네일 아래 버튼을 순서대로 눌러 저장하세요.",
      },
      {
        q: "이미지 해상도는 어느 정도인가요?",
        a: "원본 PDF 페이지 크기의 약 2배 해상도로 렌더링되어, 인쇄나 확대해서 봐도 선명한 편입니다.",
      },
      {
        q: "업로드한 PDF가 서버로 전송되나요?",
        a: "아니요. 모든 렌더링은 브라우저 안에서만 이루어지며 PDF 내용이 서버로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 페이지 수가 많거나 고해상도인 PDF는 렌더링에 시간이 다소 걸릴 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "PDF to Image",
    subtitle: "Convert each PDF page into a PNG image and download them individually (100% processed in your browser)",
    uploadLabel: "Drag & drop a PDF, or click to upload",
    uploadHint: "PDF files only",
    changeFile: "Choose a different file",
    rendering: "Rendering pages...",
    pageLabel: "Page",
    download: "Download PNG",
    howTitle: "How to Use",
    howSteps: [
      "Upload the PDF file you want to convert.",
      "Wait for all pages to finish rendering as images.",
      "Click the 'Download PNG' button under any page to save it individually.",
    ],
    faq: [
      {
        q: "Can I download all pages at once as a ZIP?",
        a: "Currently only individual per-page downloads are supported. If there are many pages, click the button under each thumbnail in order to save them.",
      },
      {
        q: "What resolution are the images?",
        a: "Pages are rendered at roughly 2x the original PDF page size, so they stay reasonably sharp when printed or zoomed in.",
      },
      {
        q: "Is my uploaded PDF sent to a server?",
        a: "No. All rendering happens entirely in your browser; the PDF content is never uploaded.",
      },
    ],
    disclaimer: "PDFs with many pages or high resolution may take a little longer to render.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "PDF → 画像変換",
    subtitle: "PDFの各ページをPNG画像に変換して個別にダウンロードできます（ブラウザで100%処理）",
    uploadLabel: "PDFファイルをドラッグ＆ドロップ、またはクリックしてアップロード",
    uploadHint: "PDFファイルのみ対応",
    changeFile: "別のファイルを選択",
    rendering: "ページをレンダリング中...",
    pageLabel: "ページ",
    download: "PNGをダウンロード",
    howTitle: "使い方",
    howSteps: [
      "変換したいPDFファイルをアップロードします。",
      "すべてのページが画像としてレンダリングされるまで待ちます。",
      "好きなページの「PNGをダウンロード」ボタンを押して個別に保存します。",
    ],
    faq: [
      {
        q: "すべてのページを一度にZIPでダウンロードできますか？",
        a: "現在はページごとに個別ダウンロードする方式のみ対応しています。ページ数が多い場合は、各サムネイルの下のボタンを順番に押して保存してください。",
      },
      {
        q: "画像の解像度はどれくらいですか？",
        a: "元のPDFページサイズの約2倍の解像度でレンダリングされるため、印刷や拡大表示でも比較的鮮明です。",
      },
      {
        q: "アップロードしたPDFはサーバーに送信されますか？",
        a: "いいえ。すべてのレンダリングはブラウザ内だけで行われ、PDFの内容がサーバーに送信されることはありません。",
      },
    ],
    disclaimer: "⚠️ ページ数が多い、または高解像度のPDFはレンダリングに多少時間がかかる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "PDF a Imagen",
    subtitle: "Convierte cada pagina del PDF en una imagen PNG y descargalas individualmente (100% procesado en tu navegador)",
    uploadLabel: "Arrastra y suelta un PDF, o haz clic para subirlo",
    uploadHint: "Solo archivos PDF",
    changeFile: "Elegir otro archivo",
    rendering: "Renderizando paginas...",
    pageLabel: "Pagina",
    download: "Descargar PNG",
    howTitle: "Como Usar",
    howSteps: [
      "Sube el archivo PDF que deseas convertir.",
      "Espera a que todas las paginas terminen de renderizarse como imagenes.",
      "Haz clic en el boton 'Descargar PNG' debajo de cualquier pagina para guardarla individualmente.",
    ],
    faq: [
      {
        q: "Puedo descargar todas las paginas a la vez como ZIP?",
        a: "Actualmente solo se admiten descargas individuales por pagina. Si hay muchas paginas, haz clic en el boton debajo de cada miniatura en orden para guardarlas.",
      },
      {
        q: "Que resolucion tienen las imagenes?",
        a: "Las paginas se renderizan a aproximadamente el doble del tamano original de la pagina del PDF, por lo que se mantienen razonablemente nitidas al imprimir o hacer zoom.",
      },
      {
        q: "Se envia mi PDF subido a un servidor?",
        a: "No. Todo el renderizado ocurre completamente en tu navegador; el contenido del PDF nunca se sube.",
      },
    ],
    disclaimer: "Los PDF con muchas paginas o alta resolucion pueden tardar un poco mas en renderizarse.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
