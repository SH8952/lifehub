export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  payloadLabel: string;
  secretLabel: string;
  generateBtn: string;
  resultLabel: string;
  copyBtn: string;
  copied: string;
  errorInvalidJson: string;
  warningLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "JWT 생성기",
    subtitle: "헤더와 페이로드를 입력해 HS256 서명 JWT 토큰을 직접 생성합니다.",
    payloadLabel: "페이로드 (JSON)",
    secretLabel: "비밀 키 (Secret)",
    generateBtn: "토큰 생성",
    resultLabel: "생성된 JWT",
    copyBtn: "복사",
    copied: "복사됨!",
    errorInvalidJson: "페이로드가 올바른 JSON 형식이 아닙니다.",
    warningLabel: "⚠️ 이 도구는 테스트·학습용입니다. 실제 서비스의 비밀 키를 입력하지 마세요.",
    howTitle: "사용 방법",
    howSteps: [
      "페이로드에 담을 JSON 데이터를 입력합니다.",
      "서명에 사용할 비밀 키(Secret)를 입력합니다.",
      "'토큰 생성'을 눌러 HS256 서명 JWT를 확인하고 복사하세요.",
    ],
    faq: [
      { q: "생성된 토큰이 안전한가요?", a: "이 도구는 브라우저 내에서만 동작하며 비밀 키나 토큰을 서버로 전송하지 않습니다. 다만 실제 운영 환경의 비밀 키는 절대 사용하지 마세요." },
      { q: "다른 서명 알고리즘(RS256 등)도 지원하나요?", a: "현재는 가장 널리 쓰이는 HS256 대칭키 서명만 지원합니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "JWT Generator",
    subtitle: "Enter a header and payload to generate an HS256-signed JWT token.",
    payloadLabel: "Payload (JSON)",
    secretLabel: "Secret Key",
    generateBtn: "Generate Token",
    resultLabel: "Generated JWT",
    copyBtn: "Copy",
    copied: "Copied!",
    errorInvalidJson: "Payload is not valid JSON.",
    warningLabel: "⚠️ This tool is for testing and learning. Do not enter a real production secret key.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the JSON data for the payload.",
      "Enter the secret key used for signing.",
      "Click 'Generate Token' to view and copy the HS256-signed JWT.",
    ],
    faq: [
      { q: "Is the generated token safe?", a: "This tool runs entirely in your browser and never sends the secret key or token to a server. Still, never use a real production secret key here." },
      { q: "Does it support other algorithms like RS256?", a: "Currently only the most common HS256 symmetric signing is supported." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "JWT生成ツール",
    subtitle: "ヘッダーとペイロードを入力してHS256署名のJWTトークンを生成します。",
    payloadLabel: "ペイロード（JSON）",
    secretLabel: "シークレットキー",
    generateBtn: "トークン生成",
    resultLabel: "生成されたJWT",
    copyBtn: "コピー",
    copied: "コピーしました！",
    errorInvalidJson: "ペイロードが正しいJSON形式ではありません。",
    warningLabel: "⚠️ このツールはテスト・学習用です。実際のサービスのシークレットキーは入力しないでください。",
    howTitle: "使用方法",
    howSteps: [
      "ペイロードに含めるJSONデータを入力します。",
      "署名に使用するシークレットキーを入力します。",
      "「トークン生成」を押してHS256署名JWTを確認しコピーしましょう。",
    ],
    faq: [
      { q: "生成されたトークンは安全ですか？", a: "このツールはブラウザ内でのみ動作し、シークレットキーやトークンをサーバーに送信しません。ただし実際の運用環境のシークレットキーは絶対に使用しないでください。" },
      { q: "他の署名アルゴリズム（RS256など）もサポートしますか？", a: "現在は最も広く使われているHS256対称鍵署名のみをサポートしています。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de JWT",
    subtitle: "Introduce un encabezado y payload para generar un token JWT firmado con HS256.",
    payloadLabel: "Payload (JSON)",
    secretLabel: "Clave Secreta",
    generateBtn: "Generar Token",
    resultLabel: "JWT Generado",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    errorInvalidJson: "El payload no es un JSON válido.",
    warningLabel: "⚠️ Esta herramienta es para pruebas y aprendizaje. No introduzcas una clave secreta real de producción.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce los datos JSON para el payload.",
      "Introduce la clave secreta usada para firmar.",
      "Haz clic en 'Generar Token' para ver y copiar el JWT firmado con HS256.",
    ],
    faq: [
      { q: "¿Es seguro el token generado?", a: "Esta herramienta funciona completamente en tu navegador y nunca envía la clave secreta ni el token a un servidor. Aun así, nunca uses una clave secreta real de producción aquí." },
      { q: "¿Soporta otros algoritmos como RS256?", a: "Actualmente solo se soporta la firma simétrica HS256, la más común." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
