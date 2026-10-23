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
  targetFormatLabel: string;
  qualityLabel: string;
  originalFormat: string;
  transparencyWarning: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 포맷 변환",
    subtitle: "JPG, PNG, WebP 간에 이미지 포맷을 자유롭게 변환하세요 (브라우저에서 100% 처리)",
    uploadLabel: "이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    targetFormatLabel: "변환할 포맷",
    qualityLabel: "품질",
    originalFormat: "원본 포맷",
    transparencyWarning: "⚠️ JPEG는 투명 배경을 지원하지 않아 투명 영역이 흰색으로 채워집니다.",
    download: "변환된 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "변환할 이미지 파일을 업로드합니다.",
      "원하는 출력 포맷(JPEG, PNG, WebP)을 선택합니다.",
      "JPEG/WebP를 선택한 경우 품질을 조절합니다.",
      "미리보기를 확인하고 변환된 이미지를 다운로드합니다.",
    ],
    faq: [
      {
        q: "WebP는 어떤 브라우저에서 지원되나요?",
        a: "Chrome, Edge, Firefox, Safari 등 대부분의 최신 브라우저에서 WebP를 지원합니다. 다만 오래된 소프트웨어에서 열어야 한다면 JPEG나 PNG가 더 호환성이 좋습니다.",
      },
      {
        q: "PNG를 JPEG로 변환하면 투명 배경은 어떻게 되나요?",
        a: "JPEG는 투명도를 지원하지 않기 때문에 투명했던 부분이 흰색 배경으로 채워집니다. 투명도를 유지하려면 PNG 또는 WebP를 선택하세요.",
      },
      {
        q: "업로드한 이미지가 서버로 전송되나요?",
        a: "아니요. 모든 변환은 브라우저 안에서 Canvas API로 처리되며 서버로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 변환 결과는 원본 이미지와 선택한 포맷에 따라 달라질 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Image Format Converter",
    subtitle: "Freely convert images between JPG, PNG, and WebP (100% processed in your browser)",
    uploadLabel: "Drag & drop an image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose a different image",
    targetFormatLabel: "Target Format",
    qualityLabel: "Quality",
    originalFormat: "Original format",
    transparencyWarning: "JPEG does not support transparency, so transparent areas will be filled with white.",
    download: "Download Converted Image",
    howTitle: "How to Use",
    howSteps: [
      "Upload the image file you want to convert.",
      "Select the desired output format (JPEG, PNG, WebP).",
      "If JPEG/WebP is selected, adjust the quality.",
      "Check the preview and download the converted image.",
    ],
    faq: [
      {
        q: "Which browsers support WebP?",
        a: "Most modern browsers - Chrome, Edge, Firefox, Safari - support WebP. If you need to open the file in older software, JPEG or PNG may be more compatible.",
      },
      {
        q: "What happens to transparency when converting PNG to JPEG?",
        a: "Since JPEG doesn't support transparency, transparent areas will be filled with white. Keep PNG or WebP to preserve transparency.",
      },
      {
        q: "Is my uploaded image sent to a server?",
        a: "No. All conversion happens locally in your browser using the Canvas API; nothing is uploaded.",
      },
    ],
    disclaimer: "Conversion results may vary depending on the original image and the format you choose.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "画像フォーマット変換",
    subtitle: "JPG、PNG、WebP間で画像フォーマットを自由に変換します（ブラウザで100%処理）",
    uploadLabel: "画像をドラッグ＆ドロップ、またはクリックしてアップロード",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    targetFormatLabel: "変換先フォーマット",
    qualityLabel: "品質",
    originalFormat: "元のフォーマット",
    transparencyWarning: "⚠️ JPEGは透明背景に対応していないため、透明部分は白で塗りつぶされます。",
    download: "変換した画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "変換したい画像ファイルをアップロードします。",
      "希望する出力フォーマット（JPEG、PNG、WebP）を選択します。",
      "JPEG/WebPを選択した場合は品質を調整します。",
      "プレビューを確認して変換後の画像をダウンロードします。",
    ],
    faq: [
      {
        q: "WebPはどのブラウザで対応していますか？",
        a: "Chrome、Edge、Firefox、Safariなどほとんどの最新ブラウザがWebPに対応しています。古いソフトで開く必要がある場合はJPEGやPNGの方が互換性が高いです。",
      },
      {
        q: "PNGをJPEGに変換すると透明背景はどうなりますか？",
        a: "JPEGは透明度に対応していないため、透明だった部分は白い背景で塗りつぶされます。透明度を維持したい場合はPNGまたはWebPを選んでください。",
      },
      {
        q: "アップロードした画像はサーバーに送信されますか？",
        a: "いいえ。すべての変換処理はブラウザ内でCanvas APIを使って行われ、サーバーには送信されません。",
      },
    ],
    disclaimer: "⚠️ 変換結果は元画像と選択したフォーマットによって異なる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Convertidor de Formato de Imagen",
    subtitle: "Convierte libremente imágenes entre JPG, PNG y WebP (100% procesado en tu navegador)",
    uploadLabel: "Arrastra y suelta una imagen, o haz clic para subirla",
    uploadHint: "Compatible con JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    targetFormatLabel: "Formato de Destino",
    qualityLabel: "Calidad",
    originalFormat: "Formato original",
    transparencyWarning: "JPEG no admite transparencia, por lo que las áreas transparentes se rellenarán de blanco.",
    download: "Descargar Imagen Convertida",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube el archivo de imagen que deseas convertir.",
      "Selecciona el formato de salida deseado (JPEG, PNG, WebP).",
      "Si eliges JPEG/WebP, ajusta la calidad.",
      "Revisa la vista previa y descarga la imagen convertida.",
    ],
    faq: [
      {
        q: "¿Qué navegadores admiten WebP?",
        a: "La mayoría de navegadores modernos (Chrome, Edge, Firefox, Safari) admiten WebP. Si necesitas abrir el archivo en software antiguo, JPEG o PNG pueden ser más compatibles.",
      },
      {
        q: "¿Qué pasa con la transparencia al convertir PNG a JPEG?",
        a: "Como JPEG no admite transparencia, las áreas transparentes se rellenarán de blanco. Mantén PNG o WebP para preservar la transparencia.",
      },
      {
        q: "¿Se envía mi imagen subida a un servidor?",
        a: "No. Toda la conversión ocurre localmente en tu navegador usando la API de Canvas; no se sube nada.",
      },
    ],
    disclaimer: "Los resultados de conversión pueden variar según la imagen original y el formato elegido.",
    footer: "Procesado 100% en tu navegador. No se envían datos a ningún servidor.",
  },
};
