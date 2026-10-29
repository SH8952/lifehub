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
  delayLabel: string;
  generatingLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "여러 이미지 → GIF 생성기",
    subtitle: "여러 장의 이미지를 업로드해 움직이는 GIF 애니메이션을 만드세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 2장 이상 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (여러 장 선택 가능, 최대 10장)",
    changeImage: "이미지 다시 선택",
    resultLabel: "GIF 결과",
    download: "GIF 다운로드",
    delayLabel: "프레임 간격",
    generatingLabel: "GIF 생성 중...",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 2장 이상 업로드합니다(업로드 순서대로 재생됩니다).",
      "프레임 간격을 조절합니다.",
      "완성된 GIF를 다운로드합니다.",
    ],
    faq: [
      { q: "이미지 크기가 다르면 어떻게 되나요?", a: "첫 번째 이미지의 크기를 기준으로 나머지 이미지들이 가운데 맞춤으로 채워집니다." },
      { q: "몇 장까지 업로드할 수 있나요?", a: "최대 10장까지 지원하며, 장수가 많을수록 GIF 파일 크기가 커집니다." },
      { q: "GIF 색상이 원본과 조금 다르게 보이나요?", a: "GIF 형식은 최대 256색만 지원하므로, 색상 양자화 과정에서 미세한 색 차이가 발생할 수 있습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Multiple Images to GIF Generator",
    subtitle: "Upload multiple images and turn them into an animated GIF. All processing happens in your browser.",
    uploadLabel: "Upload 2 or more images",
    uploadHint: "Click or drag and drop files (multiple selection, up to 10 images)",
    changeImage: "Choose images again",
    resultLabel: "GIF Result",
    download: "Download GIF",
    delayLabel: "Frame Delay",
    generatingLabel: "Generating GIF...",
    howTitle: "How to Use",
    howSteps: [
      "Upload 2 or more images (they play in upload order).",
      "Adjust the frame delay.",
      "Download the finished GIF.",
    ],
    faq: [
      { q: "What happens if the images have different sizes?", a: "The first image's size is used as the canvas, and the rest are centered within it." },
      { q: "How many images can I upload?", a: "Up to 10 images are supported; more images produce a larger GIF file." },
      { q: "Why do GIF colors look slightly different from the originals?", a: "GIF format supports only up to 256 colors, so color quantization can introduce small differences." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "複数画像 → GIF生成ツール",
    subtitle: "複数の画像をアップロードして、動くGIFアニメーションを作成します。すべての処理はブラウザで行われます。",
    uploadLabel: "画像を2枚以上アップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（複数選択可能、最大10枚）",
    changeImage: "画像を再選択",
    resultLabel: "GIF結果",
    download: "GIFをダウンロード",
    delayLabel: "フレーム間隔",
    generatingLabel: "GIF生成中...",
    howTitle: "使用方法",
    howSteps: [
      "画像を2枚以上アップロードします（アップロード順に再生されます）。",
      "フレーム間隔を調整します。",
      "完成したGIFをダウンロードします。",
    ],
    faq: [
      { q: "画像のサイズが異なる場合はどうなりますか？", a: "最初の画像のサイズを基準に、残りの画像は中央揃えで配置されます。" },
      { q: "何枚までアップロードできますか？", a: "最大10枚まで対応しており、枚数が多いほどGIFファイルサイズが大きくなります。" },
      { q: "GIFの色が元の画像と少し違って見えますか？", a: "GIF形式は最大256色までしか対応していないため、色の量子化過程でわずかな色の違いが生じることがあります。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de GIF a partir de Varias Imágenes",
    subtitle: "Sube varias imágenes y conviértelas en un GIF animado. Todo se procesa en tu navegador.",
    uploadLabel: "Sube 2 o más imágenes",
    uploadHint: "Haz clic o arrastra y suelta archivos (selección múltiple, hasta 10 imágenes)",
    changeImage: "Elegir imágenes de nuevo",
    resultLabel: "Resultado GIF",
    download: "Descargar GIF",
    delayLabel: "Retardo de Fotograma",
    generatingLabel: "Generando GIF...",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube 2 o más imágenes (se reproducen en el orden de subida).",
      "Ajusta el retardo de fotograma.",
      "Descarga el GIF terminado.",
    ],
    faq: [
      { q: "¿Qué pasa si las imágenes tienen tamaños distintos?", a: "Se usa el tamaño de la primera imagen como lienzo, y el resto se centran dentro de él." },
      { q: "¿Cuántas imágenes puedo subir?", a: "Se admiten hasta 10 imágenes; más imágenes producen un archivo GIF más grande." },
      { q: "¿Por qué los colores del GIF se ven un poco distintos a los originales?", a: "El formato GIF solo admite hasta 256 colores, por lo que la cuantización de color puede causar pequeñas diferencias." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
