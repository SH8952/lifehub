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
  topTextLabel: string;
  bottomTextLabel: string;
  sizeLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "캡션·밈 메이커",
    subtitle: "상단·하단에 굵은 캡션을 추가해 클래식한 스타일의 밈을 만들어 보세요. 모든 처리는 브라우저에서 즉시 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "결과",
    download: "이미지 다운로드",
    topTextLabel: "상단 텍스트",
    bottomTextLabel: "하단 텍스트",
    sizeLabel: "글자 크기",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "상단과 하단 캡션 텍스트를 입력합니다.",
      "완성된 밈 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "글꼴은 바꿀 수 있나요?", a: "현재 버전은 클래식 밈 스타일의 굵은 글꼴(흰 글자+검은 테두리)로 고정되어 있습니다." },
      { q: "텍스트가 이미지 밖으로 넘치면 어떻게 되나요?", a: "글자 크기를 줄이거나 텍스트를 짧게 입력하면 더 깔끔하게 표시됩니다." },
      { q: "상단이나 하단만 사용할 수 있나요?", a: "네, 한쪽 텍스트 칸을 비워두면 해당 위치에는 캡션이 추가되지 않습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Caption & Meme Maker",
    subtitle: "Add bold top and bottom captions to create a classic-style meme. All processing happens instantly in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Result",
    download: "Download Image",
    topTextLabel: "Top Text",
    bottomTextLabel: "Bottom Text",
    sizeLabel: "Font Size",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Type the top and bottom caption text.",
      "Download the finished meme image.",
    ],
    faq: [
      { q: "Can I change the font?", a: "The current version uses a fixed classic meme-style bold font (white text with black outline)." },
      { q: "What happens if the text overflows the image?", a: "Shortening the text or reducing the font size will keep it looking clean." },
      { q: "Can I use only the top or only the bottom?", a: "Yes, leaving one text field empty skips adding a caption at that position." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "キャプション・ミーム作成ツール",
    subtitle: "上下に太字のキャプションを追加して、クラシックなスタイルのミームを作成しましょう。すべての処理はブラウザで即座に行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "結果",
    download: "画像をダウンロード",
    topTextLabel: "上部テキスト",
    bottomTextLabel: "下部テキスト",
    sizeLabel: "文字サイズ",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "上部と下部のキャプションテキストを入力します。",
      "完成したミーム画像をダウンロードします。",
    ],
    faq: [
      { q: "フォントは変更できますか？", a: "現在のバージョンはクラシックなミームスタイルの太字フォント（白文字＋黒縁取り）に固定されています。" },
      { q: "テキストが画像からはみ出るとどうなりますか？", a: "文字サイズを小さくするか、テキストを短くするとより綺麗に表示されます。" },
      { q: "上部または下部だけ使うことはできますか？", a: "はい、片方のテキスト欄を空にしておくと、その位置にはキャプションが追加されません。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Creador de Captions y Memes",
    subtitle: "Añade captions en negrita arriba y abajo para crear un meme de estilo clásico. Todo se procesa al instante en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado",
    download: "Descargar Imagen",
    topTextLabel: "Texto Superior",
    bottomTextLabel: "Texto Inferior",
    sizeLabel: "Tamaño de Fuente",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Escribe el texto de caption superior e inferior.",
      "Descarga la imagen del meme terminado.",
    ],
    faq: [
      { q: "¿Puedo cambiar la fuente?", a: "La versión actual usa una fuente en negrita de estilo meme clásico fija (texto blanco con contorno negro)." },
      { q: "¿Qué pasa si el texto se desborda de la imagen?", a: "Acortar el texto o reducir el tamaño de fuente lo mantendrá más ordenado." },
      { q: "¿Puedo usar solo el superior o solo el inferior?", a: "Sí, dejar un campo de texto vacío omite añadir un caption en esa posición." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
