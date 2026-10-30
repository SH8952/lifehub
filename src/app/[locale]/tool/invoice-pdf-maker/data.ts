export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  companyLabel: string;
  clientLabel: string;
  nameField: string;
  addressField: string;
  emailField: string;
  docNumberLabel: string;
  dateLabel: string;
  itemsLabel: string;
  descriptionHeader: string;
  qtyHeader: string;
  priceHeader: string;
  amountHeader: string;
  addItem: string;
  removeItem: string;
  totalLabel: string;
  notesLabel: string;
  previewLabel: string;
  generateButton: string;
  processing: string;
  invoiceWord: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "견적서·인보이스 PDF 생성기",
    subtitle: "회사 정보, 고객 정보, 품목을 입력해 간단한 견적서/인보이스를 PDF로 생성하세요. 모든 처리는 브라우저에서 이루어집니다.",
    companyLabel: "보내는 쪽(회사) 정보",
    clientLabel: "받는 쪽(고객) 정보",
    nameField: "이름/회사명",
    addressField: "주소",
    emailField: "이메일",
    docNumberLabel: "문서 번호",
    dateLabel: "날짜",
    itemsLabel: "품목",
    descriptionHeader: "설명",
    qtyHeader: "수량",
    priceHeader: "단가",
    amountHeader: "금액",
    addItem: "+ 품목 추가",
    removeItem: "삭제",
    totalLabel: "합계",
    notesLabel: "메모 (선택)",
    previewLabel: "미리보기",
    generateButton: "PDF로 다운로드",
    processing: "생성 중...",
    invoiceWord: "견적서 / 인보이스",
    howTitle: "사용 방법",
    howSteps: [
      "보내는 쪽과 받는 쪽 정보를 입력합니다.",
      "품목을 추가하고 수량·단가를 입력합니다.",
      "미리보기를 확인하고 PDF로 다운로드합니다.",
    ],
    faq: [
      { q: "법적 효력이 있는 세금계산서로 사용할 수 있나요?", a: "이 도구는 간단한 견적서/인보이스 양식 생성을 위한 참고용 도구입니다. 법적 효력이 필요한 세금계산서는 관련 공식 시스템을 이용해 주세요." },
      { q: "통화 단위를 바꿀 수 있나요?", a: "금액은 숫자로만 입력되며 통화 기호는 자유롭게 설명이나 메모에 표기해 주세요." },
      { q: "로고를 추가할 수 있나요?", a: "현재 버전에서는 텍스트 기반 양식만 지원합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 입력 정보를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Invoice / Quote PDF Maker",
    subtitle: "Enter your company info, client info, and line items to generate a simple invoice/quote PDF. All processing happens in your browser.",
    companyLabel: "From (Your Company)",
    clientLabel: "To (Client)",
    nameField: "Name/Company",
    addressField: "Address",
    emailField: "Email",
    docNumberLabel: "Document #",
    dateLabel: "Date",
    itemsLabel: "Line Items",
    descriptionHeader: "Description",
    qtyHeader: "Qty",
    priceHeader: "Unit Price",
    amountHeader: "Amount",
    addItem: "+ Add Item",
    removeItem: "Remove",
    totalLabel: "Total",
    notesLabel: "Notes (optional)",
    previewLabel: "Preview",
    generateButton: "Download as PDF",
    processing: "Generating...",
    invoiceWord: "INVOICE / QUOTE",
    howTitle: "How to Use",
    howSteps: [
      "Enter the sender and recipient information.",
      "Add line items with quantity and unit price.",
      "Check the preview and download as PDF.",
    ],
    faq: [
      { q: "Can this be used as a legally valid tax invoice?", a: "This tool is for generating simple reference invoices/quotes. For legally valid tax invoices, please use an official system." },
      { q: "Can I change the currency?", a: "Amounts are entered as plain numbers — add the currency symbol in the description or notes as needed." },
      { q: "Can I add a logo?", a: "The current version only supports a text-based layout." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your information on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "見積書・インボイスPDF作成ツール",
    subtitle: "会社情報、顧客情報、項目を入力して簡単な見積書・インボイスをPDFで作成します。すべての処理はブラウザで行われます。",
    companyLabel: "差出人（会社）情報",
    clientLabel: "宛先（顧客）情報",
    nameField: "名前/会社名",
    addressField: "住所",
    emailField: "メール",
    docNumberLabel: "文書番号",
    dateLabel: "日付",
    itemsLabel: "項目",
    descriptionHeader: "説明",
    qtyHeader: "数量",
    priceHeader: "単価",
    amountHeader: "金額",
    addItem: "+ 項目を追加",
    removeItem: "削除",
    totalLabel: "合計",
    notesLabel: "メモ（任意）",
    previewLabel: "プレビュー",
    generateButton: "PDFとしてダウンロード",
    processing: "生成中...",
    invoiceWord: "見積書 / インボイス",
    howTitle: "使用方法",
    howSteps: [
      "差出人と宛先の情報を入力します。",
      "項目を追加し、数量・単価を入力します。",
      "プレビューを確認してPDFでダウンロードします。",
    ],
    faq: [
      { q: "法的効力のある税金計算書として使用できますか？", a: "このツールは簡単な見積書・インボイスのひな形を作成する参考用ツールです。法的効力が必要な税金計算書は公式システムをご利用ください。" },
      { q: "通貨単位を変更できますか？", a: "金額は数値のみで入力されます。通貨記号は説明やメモに自由に記載してください。" },
      { q: "ロゴを追加できますか？", a: "現在のバージョンではテキストベースのレイアウトのみ対応しています。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、入力情報をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Facturas/Cotizaciones PDF",
    subtitle: "Introduce los datos de tu empresa, del cliente y las líneas de pedido para generar una factura/cotización en PDF. Todo se procesa en tu navegador.",
    companyLabel: "De (Tu Empresa)",
    clientLabel: "Para (Cliente)",
    nameField: "Nombre/Empresa",
    addressField: "Dirección",
    emailField: "Correo",
    docNumberLabel: "N.º de Documento",
    dateLabel: "Fecha",
    itemsLabel: "Líneas de Pedido",
    descriptionHeader: "Descripción",
    qtyHeader: "Cant.",
    priceHeader: "Precio Unit.",
    amountHeader: "Importe",
    addItem: "+ Añadir Línea",
    removeItem: "Eliminar",
    totalLabel: "Total",
    notesLabel: "Notas (opcional)",
    previewLabel: "Vista Previa",
    generateButton: "Descargar como PDF",
    processing: "Generando...",
    invoiceWord: "FACTURA / COTIZACIÓN",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce la información del remitente y el destinatario.",
      "Añade líneas de pedido con cantidad y precio unitario.",
      "Revisa la vista previa y descarga como PDF.",
    ],
    faq: [
      { q: "¿Puede usarse como factura fiscal legalmente válida?", a: "Esta herramienta es para generar facturas/cotizaciones de referencia simples. Para facturas fiscales legalmente válidas, usa un sistema oficial." },
      { q: "¿Puedo cambiar la moneda?", a: "Los importes se introducen como números simples; añade el símbolo de moneda en la descripción o notas." },
      { q: "¿Puedo añadir un logo?", a: "La versión actual solo admite un diseño basado en texto." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu información en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
