export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  nameLabel: string;
  titleLabel: string;
  companyLabel: string;
  phoneLabel: string;
  emailLabel: string;
  websiteLabel: string;
  colorLabel: string;
  previewLabel: string;
  generateButton: string;
  processing: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "명함 PDF 생성기",
    subtitle: "이름, 직책, 회사, 연락처를 입력해 표준 크기(90x50mm) 명함 PDF를 만드세요. 모든 처리는 브라우저에서 이루어집니다.",
    nameLabel: "이름",
    titleLabel: "직책",
    companyLabel: "회사명",
    phoneLabel: "전화번호",
    emailLabel: "이메일",
    websiteLabel: "웹사이트",
    colorLabel: "강조 색상",
    previewLabel: "미리보기 (실제 비율 90x50mm)",
    generateButton: "PDF로 다운로드",
    processing: "생성 중...",
    howTitle: "사용 방법",
    howSteps: [
      "이름, 직책, 회사, 연락처 정보를 입력합니다.",
      "강조 색상을 선택합니다.",
      "미리보기를 확인하고 PDF로 다운로드합니다.",
    ],
    faq: [
      { q: "PDF를 인쇄소에 바로 보낼 수 있나요?", a: "표준 명함 크기(90x50mm)로 제작되므로 대부분의 인쇄소에서 바로 사용할 수 있습니다. 재단 여백은 인쇄소 가이드를 확인해 주세요." },
      { q: "로고 이미지를 추가할 수 있나요?", a: "현재 버전에서는 텍스트 기반 디자인만 지원합니다." },
      { q: "여러 장을 한 페이지에 배치할 수 있나요?", a: "현재는 한 장의 명함을 PDF 한 페이지에 생성합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 입력 정보를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Business Card PDF Maker",
    subtitle: "Enter your name, title, company, and contact info to create a standard-size (90x50mm) business card PDF. All processing happens in your browser.",
    nameLabel: "Name",
    titleLabel: "Title",
    companyLabel: "Company",
    phoneLabel: "Phone",
    emailLabel: "Email",
    websiteLabel: "Website",
    colorLabel: "Accent Color",
    previewLabel: "Preview (actual 90x50mm ratio)",
    generateButton: "Download as PDF",
    processing: "Generating...",
    howTitle: "How to Use",
    howSteps: [
      "Enter your name, title, company, and contact info.",
      "Choose an accent color.",
      "Check the preview and download as PDF.",
    ],
    faq: [
      { q: "Can I send the PDF directly to a print shop?", a: "It's created at standard business card size (90x50mm), so most print shops can use it directly. Check their bleed margin guidelines." },
      { q: "Can I add a logo image?", a: "The current version only supports a text-based design." },
      { q: "Can I place multiple cards on one page?", a: "Currently it generates one card per PDF page." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your information on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "名刺PDF作成ツール",
    subtitle: "名前、役職、会社、連絡先を入力して標準サイズ（90x50mm）の名刺PDFを作成します。すべての処理はブラウザで行われます。",
    nameLabel: "名前",
    titleLabel: "役職",
    companyLabel: "会社名",
    phoneLabel: "電話番号",
    emailLabel: "メール",
    websiteLabel: "ウェブサイト",
    colorLabel: "アクセントカラー",
    previewLabel: "プレビュー（実際の90x50mm比率）",
    generateButton: "PDFとしてダウンロード",
    processing: "生成中...",
    howTitle: "使用方法",
    howSteps: [
      "名前、役職、会社、連絡先情報を入力します。",
      "アクセントカラーを選択します。",
      "プレビューを確認してPDFでダウンロードします。",
    ],
    faq: [
      { q: "PDFを印刷会社に直接送れますか？", a: "標準名刺サイズ（90x50mm）で作成されるため、ほとんどの印刷会社でそのまま使用できます。塗り足し余白は印刷会社のガイドをご確認ください。" },
      { q: "ロゴ画像を追加できますか？", a: "現在のバージョンではテキストベースのデザインのみ対応しています。" },
      { q: "複数枚を1ページに配置できますか？", a: "現在は1ページにつき1枚のカードを生成します。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、入力情報をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Tarjetas de Presentación PDF",
    subtitle: "Introduce tu nombre, cargo, empresa y contacto para crear una tarjeta de presentación PDF de tamaño estándar (90x50mm). Todo se procesa en tu navegador.",
    nameLabel: "Nombre",
    titleLabel: "Cargo",
    companyLabel: "Empresa",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    websiteLabel: "Sitio Web",
    colorLabel: "Color de Acento",
    previewLabel: "Vista Previa (proporción real 90x50mm)",
    generateButton: "Descargar como PDF",
    processing: "Generando...",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu nombre, cargo, empresa y contacto.",
      "Elige un color de acento.",
      "Revisa la vista previa y descarga como PDF.",
    ],
    faq: [
      { q: "¿Puedo enviar el PDF directamente a una imprenta?", a: "Se crea en el tamaño estándar de tarjeta de presentación (90x50mm), así que la mayoría de imprentas pueden usarlo directamente. Consulta sus márgenes de sangrado." },
      { q: "¿Puedo añadir un logo?", a: "La versión actual solo admite un diseño basado en texto." },
      { q: "¿Puedo poner varias tarjetas en una página?", a: "Actualmente se genera una tarjeta por página de PDF." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu información en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
