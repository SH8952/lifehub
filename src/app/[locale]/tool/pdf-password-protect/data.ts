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
  userPasswordLabel: string;
  ownerPasswordLabel: string;
  permissionsLabel: string;
  permPrinting: string;
  permCopying: string;
  permModifying: string;
  generateButton: string;
  processing: string;
  download: string;
  passwordRequired: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 암호 설정",
    subtitle: "PDF 파일에 열기 암호를 설정해 보호하세요. 모든 처리는 브라우저에서 이루어지며 파일은 서버에 업로드되지 않습니다.",
    uploadLabel: "암호를 설정할 PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    userPasswordLabel: "열기 암호 (필수)",
    ownerPasswordLabel: "소유자 암호 (선택, 권한 제어용)",
    permissionsLabel: "권한 설정 (소유자 암호 설정 시 적용)",
    permPrinting: "인쇄 허용",
    permCopying: "내용 복사 허용",
    permModifying: "편집 허용",
    generateButton: "암호 설정하고 저장",
    processing: "처리 중...",
    download: "암호화된 PDF 다운로드",
    passwordRequired: "열기 암호를 입력해주세요.",
    howTitle: "사용 방법",
    howSteps: [
      "암호를 설정할 PDF 파일을 업로드합니다.",
      "열기 암호(필수)와 필요하다면 소유자 암호 및 권한을 설정합니다.",
      "암호화를 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "암호를 잊어버리면 어떻게 되나요?", a: "암호를 잊으면 파일을 열 수 없습니다. 이 도구는 암호를 저장하지 않으므로 반드시 안전한 곳에 기록해두세요." },
      { q: "파일이 서버에 업로드되나요?", a: "아니요, 모든 암호화 과정은 브라우저 내에서만 이루어지며 파일이나 암호는 외부로 전송되지 않습니다." },
      { q: "소유자 암호는 왜 필요한가요?", a: "소유자 암호는 인쇄, 복사, 편집 등의 권한을 제어할 때 사용됩니다. 설정하지 않으면 열기 암호가 두 역할을 모두 수행합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일이나 암호를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Password Protect",
    subtitle: "Protect a PDF with a password required to open it. All processing happens in your browser — the file is never uploaded.",
    uploadLabel: "Upload the PDF you want to password-protect",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    userPasswordLabel: "Open Password (required)",
    ownerPasswordLabel: "Owner Password (optional, for permissions)",
    permissionsLabel: "Permissions (applied when an owner password is set)",
    permPrinting: "Allow Printing",
    permCopying: "Allow Copying",
    permModifying: "Allow Modifying",
    generateButton: "Encrypt & Save",
    processing: "Processing...",
    download: "Download Encrypted PDF",
    passwordRequired: "Please enter an open password.",
    howTitle: "How to Use",
    howSteps: [
      "Upload the PDF file you want to protect.",
      "Set an open password (required), and optionally an owner password with permissions.",
      "Apply encryption and download the resulting PDF.",
    ],
    faq: [
      { q: "What happens if I forget the password?", a: "The file cannot be opened without it. This tool never stores your password, so be sure to save it somewhere safe." },
      { q: "Is my file uploaded to a server?", a: "No, all encryption happens entirely in your browser — your file and password are never sent anywhere." },
      { q: "Why would I need an owner password?", a: "An owner password lets you control permissions like printing, copying, and editing. Without one, the open password covers both roles." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file or password on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFパスワード保護",
    subtitle: "PDFファイルに開くためのパスワードを設定して保護します。すべての処理はブラウザ内で行われ、ファイルはアップロードされません。",
    uploadLabel: "パスワードを設定するPDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    userPasswordLabel: "開くためのパスワード（必須）",
    ownerPasswordLabel: "所有者パスワード（任意、権限管理用）",
    permissionsLabel: "権限設定（所有者パスワード設定時に適用）",
    permPrinting: "印刷を許可",
    permCopying: "コピーを許可",
    permModifying: "編集を許可",
    generateButton: "暗号化して保存",
    processing: "処理中...",
    download: "暗号化されたPDFをダウンロード",
    passwordRequired: "開くためのパスワードを入力してください。",
    howTitle: "使用方法",
    howSteps: [
      "保護するPDFファイルをアップロードします。",
      "開くためのパスワード（必須）と、必要に応じて所有者パスワードと権限を設定します。",
      "暗号化を適用し、結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "パスワードを忘れたらどうなりますか？", a: "パスワードがないとファイルを開けません。このツールはパスワードを保存しないため、必ず安全な場所に記録してください。" },
      { q: "ファイルはサーバーにアップロードされますか？", a: "いいえ、暗号化はすべてブラウザ内で行われ、ファイルやパスワードは外部に送信されません。" },
      { q: "所有者パスワードはなぜ必要ですか？", a: "所有者パスワードは印刷・コピー・編集などの権限を制御するために使用します。設定しない場合、開くためのパスワードが両方の役割を果たします。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルやパスワードをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Proteger PDF con Contraseña",
    subtitle: "Protege un PDF con una contraseña necesaria para abrirlo. Todo se procesa en tu navegador; el archivo nunca se sube.",
    uploadLabel: "Sube el PDF que quieres proteger con contraseña",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    userPasswordLabel: "Contraseña para abrir (obligatoria)",
    ownerPasswordLabel: "Contraseña de propietario (opcional, para permisos)",
    permissionsLabel: "Permisos (se aplican con contraseña de propietario)",
    permPrinting: "Permitir impresión",
    permCopying: "Permitir copia",
    permModifying: "Permitir modificación",
    generateButton: "Cifrar y Guardar",
    processing: "Procesando...",
    download: "Descargar PDF Cifrado",
    passwordRequired: "Introduce una contraseña para abrir.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube el archivo PDF que quieres proteger.",
      "Establece una contraseña de apertura (obligatoria) y, opcionalmente, una contraseña de propietario con permisos.",
      "Aplica el cifrado y descarga el PDF resultante.",
    ],
    faq: [
      { q: "¿Qué pasa si olvido la contraseña?", a: "El archivo no se podrá abrir sin ella. Esta herramienta nunca almacena tu contraseña, guárdala en un lugar seguro." },
      { q: "¿Se sube mi archivo a un servidor?", a: "No, todo el cifrado ocurre completamente en tu navegador; tu archivo y contraseña nunca se envían a ningún lugar." },
      { q: "¿Por qué necesitaría una contraseña de propietario?", a: "Una contraseña de propietario te permite controlar permisos como impresión, copia y edición. Sin ella, la contraseña de apertura cumple ambos roles." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo o contraseña en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
