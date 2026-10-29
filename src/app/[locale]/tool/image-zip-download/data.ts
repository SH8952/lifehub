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
  download: string;
  preparingLabel: string;
  grayscaleName: string;
  sepiaName: string;
  negativeName: string;
  blurName: string;
  brightName: string;
  originalName: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "여러 변환 결과 ZIP 다운로드기",
    subtitle: "하나의 이미지에 여러 필터를 동시에 적용해 결과물을 ZIP 파일 하나로 한꺼번에 다운로드하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "포함할 변환 선택",
    download: "ZIP 파일 다운로드",
    preparingLabel: "ZIP 준비 중...",
    grayscaleName: "흑백",
    sepiaName: "세피아",
    negativeName: "네거티브",
    blurName: "블러",
    brightName: "밝게",
    originalName: "원본",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "ZIP에 포함할 변환 종류를 체크박스로 선택합니다.",
      "ZIP 파일을 다운로드합니다.",
    ],
    faq: [
      { q: "ZIP 파일에는 무엇이 들어있나요?", a: "선택한 각 필터가 적용된 이미지 파일들이 개별 JPG 파일로 압축되어 들어있습니다." },
      { q: "한 번에 몇 가지 변환을 포함할 수 있나요?", a: "원본을 포함해 최대 6가지 변환을 동시에 선택할 수 있습니다." },
      { q: "ZIP 압축은 어떻게 이루어지나요?", a: "브라우저에서 동작하는 JavaScript 압축 라이브러리를 사용해 서버 업로드 없이 즉시 압축됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Multiple Variants ZIP Downloader",
    subtitle: "Apply several filters to one image at once and download all the results together as a single ZIP file. All processing happens in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Select Variants to Include",
    download: "Download ZIP File",
    preparingLabel: "Preparing ZIP...",
    grayscaleName: "Grayscale",
    sepiaName: "Sepia",
    negativeName: "Negative",
    blurName: "Blur",
    brightName: "Brighter",
    originalName: "Original",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Check the boxes for the variants to include in the ZIP.",
      "Download the ZIP file.",
    ],
    faq: [
      { q: "What's inside the ZIP file?", a: "It contains a separate JPG file for each filter variant you selected." },
      { q: "How many variants can I include at once?", a: "You can select up to 6 variants at once, including the original." },
      { q: "How does the ZIP compression work?", a: "It uses a JavaScript compression library that runs in your browser, so the ZIP is created instantly with no server upload." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "複数変換結果ZIPダウンロードツール",
    subtitle: "1枚の画像に複数のフィルターを同時に適用し、結果を1つのZIPファイルとしてまとめてダウンロードします。すべての処理はブラウザで行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "含める変換を選択",
    download: "ZIPファイルをダウンロード",
    preparingLabel: "ZIP準備中...",
    grayscaleName: "グレースケール",
    sepiaName: "セピア",
    negativeName: "ネガティブ",
    blurName: "ブラー",
    brightName: "明るく",
    originalName: "オリジナル",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "ZIPに含める変換の種類をチェックボックスで選択します。",
      "ZIPファイルをダウンロードします。",
    ],
    faq: [
      { q: "ZIPファイルには何が入っていますか？", a: "選択した各フィルターが適用された画像が、それぞれ個別のJPGファイルとして圧縮されて入っています。" },
      { q: "一度にいくつの変換を含めることができますか？", a: "オリジナルを含めて最大6種類の変換を同時に選択できます。" },
      { q: "ZIP圧縮はどのように行われますか？", a: "ブラウザで動作するJavaScript圧縮ライブラリを使用し、サーバーへのアップロードなしで即座に圧縮されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Descargador ZIP de Múltiples Variantes",
    subtitle: "Aplica varios filtros a una imagen a la vez y descarga todos los resultados juntos en un único archivo ZIP. Todo se procesa en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Selecciona las Variantes a Incluir",
    download: "Descargar Archivo ZIP",
    preparingLabel: "Preparando ZIP...",
    grayscaleName: "Blanco y Negro",
    sepiaName: "Sepia",
    negativeName: "Negativo",
    blurName: "Difuminado",
    brightName: "Más Brillante",
    originalName: "Original",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Marca las casillas de las variantes a incluir en el ZIP.",
      "Descarga el archivo ZIP.",
    ],
    faq: [
      { q: "¿Qué contiene el archivo ZIP?", a: "Contiene un archivo JPG separado para cada variante de filtro que seleccionaste." },
      { q: "¿Cuántas variantes puedo incluir a la vez?", a: "Puedes seleccionar hasta 6 variantes a la vez, incluyendo el original." },
      { q: "¿Cómo funciona la compresión ZIP?", a: "Usa una librería de compresión JavaScript que se ejecuta en tu navegador, así que el ZIP se crea al instante sin subir nada a un servidor." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
