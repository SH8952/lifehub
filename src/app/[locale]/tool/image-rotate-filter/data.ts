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
  rotateCw: string;
  rotateCcw: string;
  flipH: string;
  flipV: string;
  brightnessLabel: string;
  contrastLabel: string;
  grayscaleLabel: string;
  sepiaLabel: string;
  reset: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "이미지 회전 · 필터",
    subtitle: "이미지를 회전·반전시키고 밝기/대비/흑백/세피아 필터를 적용해보세요 (브라우저에서 100% 처리)",
    uploadLabel: "이미지를 드래그하거나 클릭해서 업로드하세요",
    uploadHint: "JPG, PNG, WebP 지원",
    changeImage: "다른 이미지 선택",
    rotateCw: "시계방향 90°",
    rotateCcw: "반시계방향 90°",
    flipH: "좌우 반전",
    flipV: "상하 반전",
    brightnessLabel: "밝기",
    contrastLabel: "대비",
    grayscaleLabel: "흑백",
    sepiaLabel: "세피아",
    reset: "초기화",
    download: "결과 이미지 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "회전·필터를 적용할 이미지를 업로드합니다.",
      "회전/반전 버튼으로 방향을 조절합니다.",
      "밝기·대비 슬라이더와 흑백/세피아 스위치로 색감을 조절합니다.",
      "미리보기를 확인하고 다운로드합니다.",
    ],
    faq: [
      {
        q: "회전과 반전을 동시에 적용할 수 있나요?",
        a: "네, 회전 각도와 좌우/상하 반전을 자유롭게 조합할 수 있습니다.",
      },
      {
        q: "필터 효과는 어떤 방식으로 적용되나요?",
        a: "브라우저의 Canvas 필터(밝기, 대비, 흑백, 세피아)를 사용하여 실시간으로 렌더링합니다. 별도 서버 처리 없이 즉시 결과를 확인할 수 있습니다.",
      },
      {
        q: "업로드한 이미지가 서버로 전송되나요?",
        a: "아니요. 모든 처리는 브라우저 안에서만 이루어지며 이미지가 외부로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 필터 렌더링 결과는 브라우저와 기기에 따라 약간 다르게 보일 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Image Rotate & Filter",
    subtitle: "Rotate, flip, and apply brightness/contrast/grayscale/sepia filters (100% processed in your browser)",
    uploadLabel: "Drag & drop an image, or click to upload",
    uploadHint: "Supports JPG, PNG, WebP",
    changeImage: "Choose a different image",
    rotateCw: "Rotate 90° CW",
    rotateCcw: "Rotate 90° CCW",
    flipH: "Flip Horizontal",
    flipV: "Flip Vertical",
    brightnessLabel: "Brightness",
    contrastLabel: "Contrast",
    grayscaleLabel: "Grayscale",
    sepiaLabel: "Sepia",
    reset: "Reset",
    download: "Download Result",
    howTitle: "How to Use",
    howSteps: [
      "Upload the image you want to rotate or filter.",
      "Use the rotate/flip buttons to adjust orientation.",
      "Use the brightness/contrast sliders and grayscale/sepia toggles to adjust tone.",
      "Check the preview and download the result.",
    ],
    faq: [
      {
        q: "Can I combine rotation with flipping?",
        a: "Yes, you can freely combine rotation angle with horizontal and vertical flip.",
      },
      {
        q: "How are the filter effects applied?",
        a: "They use the browser's Canvas filter functions (brightness, contrast, grayscale, sepia) rendered in real time - no server processing needed.",
      },
      {
        q: "Is my uploaded image sent to a server?",
        a: "No. All processing happens entirely inside your browser; the image is never uploaded.",
      },
    ],
    disclaimer: "Filter rendering may look slightly different depending on your browser and device.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "画像回転・フィルター",
    subtitle: "画像を回転・反転させ、明るさ/コントラスト/白黒/セピアフィルターを適用します（ブラウザで100%処理）",
    uploadLabel: "画像をドラッグ＆ドロップ、またはクリックしてアップロード",
    uploadHint: "JPG、PNG、WebP対応",
    changeImage: "別の画像を選択",
    rotateCw: "時計回り90°",
    rotateCcw: "反時計回り90°",
    flipH: "左右反転",
    flipV: "上下反転",
    brightnessLabel: "明るさ",
    contrastLabel: "コントラスト",
    grayscaleLabel: "白黒",
    sepiaLabel: "セピア",
    reset: "リセット",
    download: "結果画像をダウンロード",
    howTitle: "使い方",
    howSteps: [
      "回転・フィルターを適用する画像をアップロードします。",
      "回転/反転ボタンで向きを調整します。",
      "明るさ・コントラストのスライダーと白黒/セピアのスイッチで色味を調整します。",
      "プレビューを確認してダウンロードします。",
    ],
    faq: [
      {
        q: "回転と反転を同時に適用できますか？",
        a: "はい、回転角度と左右・上下反転を自由に組み合わせられます。",
      },
      {
        q: "フィルター効果はどのように適用されますか？",
        a: "ブラウザのCanvasフィルター（明るさ、コントラスト、白黒、セピア）を使用してリアルタイムに描画します。サーバー処理は不要です。",
      },
      {
        q: "アップロードした画像はサーバーに送信されますか？",
        a: "いいえ。すべての処理はブラウザ内だけで行われ、画像が外部に送信されることはありません。",
      },
    ],
    disclaimer: "⚠️ フィルターの表示結果はブラウザや端末によって多少異なる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Rotar y Filtrar Imagen",
    subtitle: "Rota, voltea y aplica filtros de brillo/contraste/blanco y negro/sepia (100% procesado en tu navegador)",
    uploadLabel: "Arrastra y suelta una imagen, o haz clic para subirla",
    uploadHint: "Compatible con JPG, PNG, WebP",
    changeImage: "Elegir otra imagen",
    rotateCw: "Rotar 90° horario",
    rotateCcw: "Rotar 90° antihorario",
    flipH: "Voltear horizontal",
    flipV: "Voltear vertical",
    brightnessLabel: "Brillo",
    contrastLabel: "Contraste",
    grayscaleLabel: "Blanco y negro",
    sepiaLabel: "Sepia",
    reset: "Restablecer",
    download: "Descargar Resultado",
    howTitle: "Como Usar",
    howSteps: [
      "Sube la imagen que deseas rotar o filtrar.",
      "Usa los botones de rotar/voltear para ajustar la orientacion.",
      "Usa los controles de brillo/contraste y los interruptores de blanco y negro/sepia para ajustar el tono.",
      "Revisa la vista previa y descarga el resultado.",
    ],
    faq: [
      {
        q: "Puedo combinar rotacion con volteo?",
        a: "Si, puedes combinar libremente el angulo de rotacion con el volteo horizontal y vertical.",
      },
      {
        q: "Como se aplican los efectos de filtro?",
        a: "Se usan las funciones de filtro de Canvas del navegador (brillo, contraste, blanco y negro, sepia) renderizadas en tiempo real, sin procesamiento en servidor.",
      },
      {
        q: "Se envia mi imagen subida a un servidor?",
        a: "No. Todo el procesamiento ocurre completamente dentro de tu navegador; la imagen nunca se sube.",
      },
    ],
    disclaimer: "El renderizado de filtros puede verse ligeramente distinto segun tu navegador y dispositivo.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
