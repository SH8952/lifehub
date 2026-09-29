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
  qualityLabel: string;
  qualityNotePng: string;
  formatLabel: string;
  formatKeep: string;
  originalLabel: string;
  resultLabel: string;
  reduction: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 압축기",
    subtitle: "화질 저하를 최소화하며 이미지 파일 용량을 줄여보세요 (브라우저에서 100% 처리)",
    uploadLabel: "이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    qualityLabel: "압축 품질",
    qualityNotePng: "※ PNG는 무손실 포맷이라 품질 슬라이더가 파일 크기에 영향을 주지 않을 수 있습니다. 용량을 더 줄이려면 JPEG/WebP로 변환하세요.",
    formatLabel: "출력 포맷",
    formatKeep: "원본 유지",
    originalLabel: "원본",
    resultLabel: "압축 결과",
    reduction: "용량 감소",
    download: "압축된 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "압축할 이미지 파일을 업로드합니다.",
      "품질 슬라이더를 조절하여 원하는 압축 수준을 선택합니다.",
      "필요하면 출력 포맷을 JPEG 또는 WebP로 변경합니다 (용량을 더 줄일 수 있습니다).",
      "미리보기에서 결과를 확인하고 다운로드합니다.",
    ],
    faq: [
      {
        q: "업로드한 이미지가 서버로 전송되나요?",
        a: "아니요. 모든 압축 작업은 사용자의 브라우저 안에서 Canvas API로 처리되며, 이미지 파일은 서버로 전송되지 않습니다.",
      },
      {
        q: "어떤 포맷을 선택해야 용량이 가장 작아지나요?",
        a: "사진처럼 색상이 복잡한 이미지는 JPEG나 WebP가 PNG보다 훨씬 작아집니다. 반대로 투명 배경이 필요한 로고/아이콘은 PNG(또는 투명도를 지원하는 WebP)를 유지해야 합니다.",
      },
      {
        q: "화질이 눈에 띄게 나빠지나요?",
        a: "품질을 70~85% 정도로 설정하면 대부분의 사진에서 육안으로 차이를 느끼기 어려우면서도 용량은 크게 줄일 수 있습니다.",
      },
    ],
    disclaimer: "⚠️ 압축 결과는 원본 이미지의 색상 구성과 브라우저 환경에 따라 달라질 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Image Compressor",
    subtitle: "Reduce image file size while minimizing quality loss (100% processed in your browser)",
    uploadLabel: "Drag & drop an image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose a different image",
    qualityLabel: "Compression Quality",
    qualityNotePng: "Note: PNG is lossless, so the quality slider may not affect file size. Convert to JPEG/WebP for further size reduction.",
    formatLabel: "Output Format",
    formatKeep: "Keep original",
    originalLabel: "Original",
    resultLabel: "Compressed Result",
    reduction: "Size Reduction",
    download: "Download Compressed Image",
    howTitle: "How to Use",
    howSteps: [
      "Upload the image file you want to compress.",
      "Adjust the quality slider to your desired compression level.",
      "Optionally switch the output format to JPEG or WebP for extra savings.",
      "Check the preview and download the result.",
    ],
    faq: [
      {
        q: "Is my uploaded image sent to a server?",
        a: "No. All compression happens locally in your browser using the Canvas API. Nothing is uploaded anywhere.",
      },
      {
        q: "Which format gives the smallest file size?",
        a: "For photos with complex colors, JPEG or WebP usually compress much smaller than PNG. For logos or icons needing transparency, keep PNG (or WebP, which also supports transparency).",
      },
      {
        q: "Will the quality drop be noticeable?",
        a: "Setting quality around 70-85% usually keeps visual differences minimal for most photos while significantly reducing file size.",
      },
    ],
    disclaimer: "Compression results vary depending on the original image's color composition and your browser.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "画像圧縮ツール",
    subtitle: "画質の低下を最小限に抑えながら画像ファイルの容量を減らします（ブラウザで100%処理）",
    uploadLabel: "画像をドラッグ＆ドロップ、またはクリックしてアップロード",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    qualityLabel: "圧縮品質",
    qualityNotePng: "※ PNGは可逆圧縮のため、品質スライダーがファイルサイズに影響しない場合があります。さらに容量を減らすにはJPEG/WebPに変換してください。",
    formatLabel: "出力フォーマット",
    formatKeep: "元のフォーマットを維持",
    originalLabel: "元の画像",
    resultLabel: "圧縮結果",
    reduction: "容量削減率",
    download: "圧縮した画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "圧縮したい画像ファイルをアップロードします。",
      "品質スライダーを調整して圧縮レベルを選びます。",
      "必要に応じて出力フォーマットをJPEGまたはWebPに変更します（さらに容量を削減できます）。",
      "プレビューで結果を確認してダウンロードします。",
    ],
    faq: [
      {
        q: "アップロードした画像はサーバーに送信されますか？",
        a: "いいえ。すべての圧縮処理はブラウザ内でCanvas APIを使って行われ、画像はサーバーに送信されません。",
      },
      {
        q: "どのフォーマットが最も容量が小さくなりますか？",
        a: "色数の多い写真はJPEGやWebPがPNGよりかなり小さくなります。透明背景が必要なロゴ・アイコンはPNG（または透明度に対応したWebP）を維持してください。",
      },
      {
        q: "画質の劣化は目立ちますか？",
        a: "品質を70〜85%程度に設定すると、ほとんどの写真で見た目の差はほとんど分からないまま容量を大きく減らせます。",
      },
    ],
    disclaimer: "⚠️ 圧縮結果は元画像の色構成やブラウザ環境によって異なる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Compresor de Imagenes",
    subtitle: "Reduce el tamano del archivo de imagen minimizando la perdida de calidad (100% procesado en tu navegador)",
    uploadLabel: "Arrastra y suelta una imagen, o haz clic para subirla",
    uploadHint: "Compatible con JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    qualityLabel: "Calidad de Compresion",
    qualityNotePng: "Nota: PNG es sin perdida, por lo que el control de calidad puede no afectar el tamano del archivo. Convierte a JPEG/WebP para reducir mas el tamano.",
    formatLabel: "Formato de Salida",
    formatKeep: "Mantener original",
    originalLabel: "Original",
    resultLabel: "Resultado Comprimido",
    reduction: "Reduccion de Tamano",
    download: "Descargar Imagen Comprimida",
    howTitle: "Como Usar",
    howSteps: [
      "Sube el archivo de imagen que deseas comprimir.",
      "Ajusta el control de calidad al nivel de compresion deseado.",
      "Opcionalmente cambia el formato de salida a JPEG o WebP para ahorrar mas espacio.",
      "Revisa la vista previa y descarga el resultado.",
    ],
    faq: [
      {
        q: "Se envia mi imagen a un servidor?",
        a: "No. Toda la compresion ocurre localmente en tu navegador usando la API de Canvas. No se sube nada a ningun servidor.",
      },
      {
        q: "Que formato da el archivo mas pequeno?",
        a: "Para fotos con colores complejos, JPEG o WebP suelen comprimir mucho mas que PNG. Para logos o iconos que necesitan transparencia, mantén PNG (o WebP, que tambien admite transparencia).",
      },
      {
        q: "Se notara la caida de calidad?",
        a: "Establecer la calidad alrededor de 70-85% suele mantener las diferencias visuales minimas para la mayoria de fotos mientras reduce significativamente el tamano del archivo.",
      },
    ],
    disclaimer: "Los resultados de compresion varian segun la composicion de color de la imagen original y tu navegador.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
