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
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 메타데이터(EXIF) 제거기",
    subtitle: "사진에 포함된 EXIF 메타데이터(촬영 위치, 기기 정보 등)를 제거하세요 (브라우저에서 100% 처리)",
    uploadLabel: "이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    resultLabel: "메타데이터 제거 결과",
    download: "메타데이터 제거된 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "메타데이터를 제거할 이미지 파일을 업로드합니다.",
      "이미지가 다시 인코딩되며 EXIF 등 메타데이터가 자동으로 제거됩니다.",
      "결과 이미지를 다운로드합니다.",
    ],
    faq: [
      { q: "EXIF 메타데이터에는 어떤 정보가 담기나요?", a: "촬영 날짜, 카메라·스마트폰 기종, 카메라 설정값, 그리고 경우에 따라 GPS 위치 정보까지 포함될 수 있습니다." },
      { q: "왜 메타데이터를 제거해야 하나요?", a: "사진을 온라인에 공개적으로 올릴 때 GPS 위치 등 민감한 정보가 의도치 않게 노출되는 것을 막기 위해 제거하는 경우가 많습니다." },
      { q: "이 도구는 실제로 메타데이터를 제거하나요?", a: "네. 이미지를 캔버스에 다시 그려서 새 파일로 인코딩하는 과정에서 원본의 EXIF 등 메타데이터는 포함되지 않습니다." },
    ],
    disclaimer: "이 도구는 일반적인 EXIF 메타데이터 제거에 도움을 주지만, 모든 포맷·메타데이터 종류에 대해 완전한 제거를 보장하지는 않습니다. 매우 민감한 정보가 포함된 경우 별도로 확인하세요.",
    footer: "LifeHub 도구 모음",
  },
  en: {
    title: "Image Metadata (EXIF) Remover",
    subtitle: "Remove EXIF metadata (location, device info, etc.) embedded in your photos — 100% processed in your browser",
    uploadLabel: "Drag and drop an image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose another image",
    resultLabel: "Metadata-stripped result",
    download: "Download metadata-stripped image",
    howTitle: "How to use",
    howSteps: [
      "Upload the image you want to strip metadata from.",
      "The image is re-encoded, automatically discarding EXIF and other metadata.",
      "Download the result image.",
    ],
    faq: [
      { q: "What kind of information does EXIF metadata contain?", a: "It can include the capture date, camera or phone model, camera settings, and in some cases even GPS location." },
      { q: "Why should I remove metadata?", a: "It's often removed before posting photos publicly online, to avoid unintentionally exposing sensitive information like GPS location." },
      { q: "Does this tool actually remove the metadata?", a: "Yes. Re-drawing the image onto a canvas and re-encoding it as a new file does not carry over the original EXIF or other metadata." },
    ],
    disclaimer: "This tool helps with common EXIF metadata removal, but does not guarantee complete removal for every format or metadata type. Double-check separately if highly sensitive information is involved.",
    footer: "LifeHub Tools",
  },
  ja: {
    title: "画像メタデータ(EXIF)削除機",
    subtitle: "写真に含まれるEXIFメタデータ(撮影位置、機器情報など)を削除します(ブラウザで100%処理)",
    uploadLabel: "画像をドラッグまたはクリックしてアップロードしてください",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    resultLabel: "メタデータ削除結果",
    download: "メタデータ削除済み画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "メタデータを削除したい画像ファイルをアップロードします。",
      "画像が再エンコードされ、EXIFなどのメタデータが自動的に削除されます。",
      "結果画像をダウンロードします。",
    ],
    faq: [
      { q: "EXIFメタデータにはどんな情報が含まれますか?", a: "撮影日時、カメラ・スマートフォンの機種、カメラの設定値、場合によってはGPS位置情報まで含まれることがあります。" },
      { q: "なぜメタデータを削除する必要がありますか?", a: "写真をオンラインに公開する際、GPS位置情報などの機密情報が意図せず露出するのを防ぐために削除することが多いです。" },
      { q: "このツールは実際にメタデータを削除しますか?", a: "はい。画像をキャンバスに再描画して新しいファイルとしてエンコードする過程で、元のEXIFなどのメタデータは含まれません。" },
    ],
    disclaimer: "このツールは一般的なEXIFメタデータの削除に役立ちますが、すべての形式・メタデータ種類について完全な削除を保証するものではありません。非常に機密性の高い情報が含まれる場合は別途確認してください。",
    footer: "LifeHub ツール集",
  },
  es: {
    title: "Eliminador de Metadatos (EXIF) de Imagen",
    subtitle: "Elimina los metadatos EXIF (ubicación, información del dispositivo, etc.) incluidos en tus fotos — procesado 100% en tu navegador",
    uploadLabel: "Arrastra una imagen o haz clic para subirla",
    uploadHint: "Admite JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    resultLabel: "Resultado sin metadatos",
    download: "Descargar imagen sin metadatos",
    howTitle: "Cómo usarlo",
    howSteps: [
      "Sube la imagen de la que quieres eliminar los metadatos.",
      "La imagen se vuelve a codificar, descartando automáticamente el EXIF y otros metadatos.",
      "Descarga la imagen resultante.",
    ],
    faq: [
      { q: "¿Qué tipo de información contienen los metadatos EXIF?", a: "Pueden incluir la fecha de captura, el modelo de cámara o teléfono, los ajustes de la cámara y, en algunos casos, incluso la ubicación GPS." },
      { q: "¿Por qué debería eliminar los metadatos?", a: "A menudo se eliminan antes de publicar fotos en línea, para evitar exponer involuntariamente información sensible como la ubicación GPS." },
      { q: "¿Esta herramienta elimina realmente los metadatos?", a: "Sí. Al volver a dibujar la imagen en un lienzo y codificarla como un nuevo archivo, no se conservan el EXIF ni otros metadatos originales." },
    ],
    disclaimer: "Esta herramienta ayuda a eliminar los metadatos EXIF comunes, pero no garantiza la eliminación completa para todos los formatos o tipos de metadatos. Verifica por separado si hay información muy sensible.",
    footer: "Herramientas LifeHub",
  },

};
