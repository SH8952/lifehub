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
  qualityLabel: string;
  originalLabel: string;
  compressedLabel: string;
  savedLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "압축 전후 파일 크기 비교기",
    subtitle: "품질 슬라이더를 조절하면서 압축 전후 파일 크기와 절감률을 실시간으로 비교하세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "이미지를 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요 (JPG, PNG, WebP 등)",
    changeImage: "다른 이미지 선택",
    resultLabel: "크기 비교",
    download: "압축된 이미지 다운로드",
    qualityLabel: "압축 품질",
    originalLabel: "원본",
    compressedLabel: "압축 후",
    savedLabel: "절감률",
    howTitle: "사용 방법",
    howSteps: [
      "이미지를 업로드합니다.",
      "압축 품질 슬라이더를 조절하며 크기 변화를 확인합니다.",
      "원하는 수준에서 압축된 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "두 파일 크기는 어떻게 비교되나요?", a: "원본 파일의 바이트 크기와, 선택한 품질로 다시 인코딩한 결과물의 바이트 크기를 막대그래프로 비교해 보여드립니다." },
      { q: "품질을 낮추면 화질도 나빠지나요?", a: "네, 품질을 낮출수록 파일 크기는 줄어들지만 세부 디테일과 선명도가 함께 줄어듭니다." },
      { q: "PNG도 압축할 수 있나요?", a: "PNG 이미지는 JPEG로 다시 인코딩되어 압축되며, 투명 배경이 있는 경우 흰색 배경으로 대체됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 이미지를 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Before/After Compression Size Comparator",
    subtitle: "Adjust the quality slider and compare the original vs. compressed file size and savings in real time. All processing happens in your browser.",
    uploadLabel: "Upload an image",
    uploadHint: "Click or drag and drop a file (JPG, PNG, WebP, etc.)",
    changeImage: "Choose another image",
    resultLabel: "Size Comparison",
    download: "Download Compressed Image",
    qualityLabel: "Compression Quality",
    originalLabel: "Original",
    compressedLabel: "Compressed",
    savedLabel: "Size Reduction",
    howTitle: "How to Use",
    howSteps: [
      "Upload an image.",
      "Adjust the quality slider and watch the size change.",
      "Download the compressed image at the level you like.",
    ],
    faq: [
      { q: "How are the two file sizes compared?", a: "It shows a bar-graph comparison between the original file's byte size and the byte size after re-encoding at your chosen quality." },
      { q: "Does lowering quality hurt image quality?", a: "Yes, lower quality reduces file size but also reduces fine detail and sharpness." },
      { q: "Can PNG files be compressed too?", a: "PNG images are re-encoded as JPEG for compression, and any transparency is replaced with a white background." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your image on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "圧縮前後ファイルサイズ比較ツール",
    subtitle: "品質スライダーを調整しながら、圧縮前後のファイルサイズと削減率をリアルタイムで比較します。すべての処理はブラウザで行われます。",
    uploadLabel: "画像をアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください（JPG、PNG、WebPなど）",
    changeImage: "別の画像を選択",
    resultLabel: "サイズ比較",
    download: "圧縮画像をダウンロード",
    qualityLabel: "圧縮品質",
    originalLabel: "元の画像",
    compressedLabel: "圧縮後",
    savedLabel: "削減率",
    howTitle: "使用方法",
    howSteps: [
      "画像をアップロードします。",
      "圧縮品質スライダーを調整してサイズの変化を確認します。",
      "好みのレベルで圧縮された画像をダウンロードします。",
    ],
    faq: [
      { q: "2つのファイルサイズはどのように比較されますか？", a: "元のファイルのバイトサイズと、選択した品質で再エンコードした結果のバイトサイズを棒グラフで比較して表示します。" },
      { q: "品質を下げると画質も悪くなりますか？", a: "はい、品質を下げるとファイルサイズは小さくなりますが、細部のディテールと鮮明さも低下します。" },
      { q: "PNGも圧縮できますか？", a: "PNG画像はJPEGとして再エンコードされて圧縮され、透明背景がある場合は白背景に置き換えられます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、画像をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Comparador de Tamaño Antes/Después de Compresión",
    subtitle: "Ajusta el control de calidad y compara en tiempo real el tamaño del archivo original frente al comprimido y el ahorro. Todo se procesa en tu navegador.",
    uploadLabel: "Sube una imagen",
    uploadHint: "Haz clic o arrastra y suelta un archivo (JPG, PNG, WebP, etc.)",
    changeImage: "Elegir otra imagen",
    resultLabel: "Comparación de Tamaño",
    download: "Descargar Imagen Comprimida",
    qualityLabel: "Calidad de Compresión",
    originalLabel: "Original",
    compressedLabel: "Comprimido",
    savedLabel: "Reducción de Tamaño",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube una imagen.",
      "Ajusta el control de calidad y observa el cambio de tamaño.",
      "Descarga la imagen comprimida al nivel que prefieras.",
    ],
    faq: [
      { q: "¿Cómo se comparan los dos tamaños de archivo?", a: "Muestra una comparación de barras entre el tamaño en bytes del archivo original y el tamaño después de recodificar con la calidad elegida." },
      { q: "¿Bajar la calidad perjudica la imagen?", a: "Sí, una calidad más baja reduce el tamaño del archivo pero también reduce el detalle fino y la nitidez." },
      { q: "¿También se pueden comprimir archivos PNG?", a: "Las imágenes PNG se recodifican como JPEG para comprimirlas, y cualquier transparencia se sustituye por un fondo blanco." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu imagen en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
