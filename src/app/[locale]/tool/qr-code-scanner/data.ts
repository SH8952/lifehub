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
  changeImage: string;
  resultLabel: string;
  copyButton: string;
  copied: string;
  openLink: string;
  notFound: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "QR코드 스캐너",
    subtitle: "QR코드가 담긴 이미지를 업로드하면 안에 담긴 내용을 바로 읽어드립니다.",
    uploadLabel: "QR코드 이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeImage: "다른 이미지 선택",
    resultLabel: "인식된 내용",
    copyButton: "복사",
    copied: "복사됨!",
    openLink: "링크 열기",
    notFound: "이미지에서 QR코드를 찾을 수 없습니다. 더 선명한 이미지로 다시 시도해주세요.",
    howTitle: "사용 방법",
    howSteps: [
      "QR코드가 포함된 이미지 파일을 업로드합니다.",
      "자동으로 인식된 내용을 확인합니다.",
      "텍스트를 복사하거나, URL인 경우 바로 열어볼 수 있습니다.",
    ],
    faq: [
      { q: "이미지가 서버에 업로드되나요?", a: "아니요, QR코드 인식은 브라우저 내에서만 이루어지며 이미지가 외부로 전송되지 않습니다." },
      { q: "어떤 이미지 형식을 지원하나요?", a: "JPG, PNG, WebP 등 일반적인 이미지 형식을 지원합니다." },
      { q: "인식이 안 될 때는 어떻게 하나요?", a: "QR코드가 선명하고 이미지 프레임 안에 전체가 포함되어 있는지 확인한 뒤 다시 시도해주세요." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "QR Code Scanner",
    subtitle: "Upload an image containing a QR code and instantly decode what's inside.",
    uploadLabel: "Upload an image with a QR code",
    uploadHint: "Click or drag and drop a file",
    changeImage: "Choose another image",
    resultLabel: "Decoded Content",
    copyButton: "Copy",
    copied: "Copied!",
    openLink: "Open Link",
    notFound: "No QR code found in the image. Try a clearer image.",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image file containing a QR code.",
      "Check the automatically decoded content.",
      "Copy the text, or open it directly if it's a URL.",
    ],
    faq: [
      { q: "Is my image uploaded to a server?", a: "No, QR code recognition happens entirely in your browser and your image is never sent anywhere." },
      { q: "What image formats are supported?", a: "Common formats like JPG, PNG, and WebP are supported." },
      { q: "What if it can't recognize the QR code?", a: "Make sure the QR code is clear and fully visible within the image frame, then try again." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "QRコードスキャナー",
    subtitle: "QRコードが含まれる画像をアップロードすると、その内容をすぐに読み取ります。",
    uploadLabel: "QRコード画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeImage: "別の画像を選択",
    resultLabel: "認識された内容",
    copyButton: "コピー",
    copied: "コピーしました！",
    openLink: "リンクを開く",
    notFound: "画像からQRコードを見つけられませんでした。より鮮明な画像で再度お試しください。",
    howTitle: "使用方法",
    howSteps: [
      "QRコードを含む画像ファイルをアップロードします。",
      "自動的に認識された内容を確認します。",
      "テキストをコピーするか、URLの場合はそのまま開くことができます。",
    ],
    faq: [
      { q: "画像はサーバーにアップロードされますか？", a: "いいえ、QRコードの認識はブラウザ内でのみ行われ、画像は外部に送信されません。" },
      { q: "どの画像形式に対応していますか？", a: "JPG、PNG、WebPなど一般的な画像形式に対応しています。" },
      { q: "認識できない場合はどうすればいいですか？", a: "QRコードが鮮明で、画像フレーム内に全体が収まっているか確認してから再度お試しください。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Escáner de Código QR",
    subtitle: "Sube una imagen que contenga un código QR y decodifica su contenido al instante.",
    uploadLabel: "Sube una imagen con un código QR",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeImage: "Elegir otra imagen",
    resultLabel: "Contenido Decodificado",
    copyButton: "Copiar",
    copied: "¡Copiado!",
    openLink: "Abrir Enlace",
    notFound: "No se encontró ningún código QR en la imagen. Intenta con una imagen más nítida.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo de imagen que contenga un código QR.",
      "Revisa el contenido decodificado automáticamente.",
      "Copia el texto o ábrelo directamente si es una URL.",
    ],
    faq: [
      { q: "¿Se sube mi imagen a un servidor?", a: "No, el reconocimiento de códigos QR ocurre completamente en tu navegador y tu imagen nunca se envía a ningún lugar." },
      { q: "¿Qué formatos de imagen se admiten?", a: "Se admiten formatos comunes como JPG, PNG y WebP." },
      { q: "¿Qué pasa si no reconoce el código QR?", a: "Asegúrate de que el código QR sea nítido y esté completamente visible dentro del marco de la imagen, luego intenta de nuevo." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
