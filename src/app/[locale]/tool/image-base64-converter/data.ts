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
  encodeTab: string;
  decodeTab: string;
  copyButton: string;
  copiedLabel: string;
  pasteLabel: string;
  invalidLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 ↔ Base64 변환기",
    subtitle: "이미지를 Base64 텍스트로 변환하거나, Base64 텍스트를 다시 이미지로 변환하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "Base64 결과",
    download: "이미지 다운로드",
    encodeTab: "이미지 → Base64",
    decodeTab: "Base64 → 이미지",
    copyButton: "클립보드에 복사",
    copiedLabel: "복사됨!",
    pasteLabel: "Base64 텍스트를 붙여넣으세요 (data:image/... 형식 포함 가능)",
    invalidLabel: "올바른 Base64 이미지 데이터가 아닙니다.",
    howTitle: "사용 방법",
    howSteps: [
      "'이미지 → Base64' 탭에서 이미지를 업로드하면 텍스트가 즉시 생성됩니다.",
      "'Base64 → 이미지' 탭에서는 Base64 텍스트를 붙여넣으면 이미지로 미리보기됩니다.",
      "결과를 복사하거나 다운로드합니다.",
    ],
    faq: [
      { q: "Base64 인코딩은 어디에 사용되나요?", a: "이미지를 텍스트 형태로 HTML, CSS, JSON 등에 직접 삽입해야 할 때 주로 사용됩니다." },
      { q: "파일 크기가 커지지 않나요?", a: "네, Base64로 인코딩하면 원본보다 약 33% 정도 크기가 커집니다. 작은 아이콘이나 소규모 이미지에 적합합니다." },
      { q: "data: 접두사가 없어도 디코딩되나요?", a: "순수한 Base64 문자열만 입력해도 자동으로 이미지로 인식해 미리보기를 제공합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Image ↔ Base64 Converter",
    subtitle: "Convert an image to Base64 text, or convert Base64 text back into an image. All processing happens in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Base64 Result",
    download: "Download Image",
    encodeTab: "Image → Base64",
    decodeTab: "Base64 → Image",
    copyButton: "Copy to Clipboard",
    copiedLabel: "Copied!",
    pasteLabel: "Paste Base64 text here (a data:image/... prefix is fine)",
    invalidLabel: "This doesn't look like valid Base64 image data.",
    howTitle: "How to Use",
    howSteps: [
      "In 'Image → Base64', upload an image and the text is generated instantly.",
      "In 'Base64 → Image', paste Base64 text to preview it as an image.",
      "Copy or download the result.",
    ],
    faq: [
      { q: "What is Base64 encoding used for?", a: "It's mainly used to embed an image directly as text inside HTML, CSS, JSON, and similar formats." },
      { q: "Does this make the file bigger?", a: "Yes, Base64 encoding increases size by about 33%. It's best suited for small icons or small images." },
      { q: "Does decoding work without the data: prefix?", a: "Yes, pasting a plain Base64 string alone is automatically recognized and previewed as an image." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "画像 ↔ Base64 変換ツール",
    subtitle: "画像をBase64テキストに変換したり、Base64テキストを画像に戻したりできます。すべての処理はブラウザで行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "Base64結果",
    download: "画像をダウンロード",
    encodeTab: "画像 → Base64",
    decodeTab: "Base64 → 画像",
    copyButton: "クリップボードにコピー",
    copiedLabel: "コピーしました！",
    pasteLabel: "Base64テキストを貼り付けてください（data:image/...形式でも可）",
    invalidLabel: "有効なBase64画像データではありません。",
    howTitle: "使用方法",
    howSteps: [
      "「画像 → Base64」タブで画像をアップロードするとテキストが即座に生成されます。",
      "「Base64 → 画像」タブではBase64テキストを貼り付けると画像として表示されます。",
      "結果をコピーまたはダウンロードします。",
    ],
    faq: [
      { q: "Base64エンコーディングはどこで使われますか？", a: "主に画像をテキストとしてHTML、CSS、JSONなどに直接埋め込む必要がある場合に使われます。" },
      { q: "ファイルサイズは大きくなりませんか？", a: "はい、Base64エンコードすると元のサイズより約33%大きくなります。小さいアイコンや小規模な画像に適しています。" },
      { q: "data:接頭辞がなくてもデコードできますか？", a: "純粋なBase64文字列だけを入力しても自動的に画像として認識し、プレビューを表示します。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Imagen ↔ Base64",
    subtitle: "Convierte una imagen a texto Base64, o convierte texto Base64 de nuevo en una imagen. Todo se procesa en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado Base64",
    download: "Descargar Imagen",
    encodeTab: "Imagen → Base64",
    decodeTab: "Base64 → Imagen",
    copyButton: "Copiar al Portapapeles",
    copiedLabel: "¡Copiado!",
    pasteLabel: "Pega el texto Base64 aquí (un prefijo data:image/... está bien)",
    invalidLabel: "Esto no parece datos de imagen Base64 válidos.",
    howTitle: "Cómo Usar",
    howSteps: [
      "En 'Imagen → Base64', sube una imagen y el texto se genera al instante.",
      "En 'Base64 → Imagen', pega texto Base64 para previsualizarlo como imagen.",
      "Copia o descarga el resultado.",
    ],
    faq: [
      { q: "¿Para qué se usa la codificación Base64?", a: "Se usa principalmente para incrustar una imagen directamente como texto dentro de HTML, CSS, JSON y formatos similares." },
      { q: "¿Esto hace que el archivo sea más grande?", a: "Sí, la codificación Base64 aumenta el tamaño alrededor de un 33%. Es ideal para iconos pequeños o imágenes pequeñas." },
      { q: "¿La decodificación funciona sin el prefijo data:?", a: "Sí, pegar solo una cadena Base64 simple se reconoce automáticamente y se previsualiza como imagen." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
