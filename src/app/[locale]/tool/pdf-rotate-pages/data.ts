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
  changeFile: string;
  pageCountLabel: string;
  angleLabel: string;
  targetLabel: string;
  targetAll: string;
  targetRange: string;
  rangePlaceholder: string;
  generateButton: string;
  processing: string;
  download: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "PDF 페이지 회전기",
    subtitle: "PDF의 모든 페이지 또는 특정 페이지만 선택해 90도 단위로 회전시키세요. 모든 처리는 브라우저에서 이루어집니다.",
    uploadLabel: "PDF 파일을 업로드하세요",
    uploadHint: "클릭하거나 파일을 끌어다 놓으세요",
    changeFile: "다른 파일 선택",
    pageCountLabel: "전체 페이지 수",
    angleLabel: "회전 각도",
    targetLabel: "적용 대상",
    targetAll: "모든 페이지",
    targetRange: "특정 페이지",
    rangePlaceholder: "예: 2, 4-6",
    generateButton: "회전 적용하기",
    processing: "처리 중...",
    download: "PDF 다운로드",
    howTitle: "사용 방법",
    howSteps: [
      "PDF 파일을 업로드합니다.",
      "회전 각도와 적용 대상(전체/특정 페이지)을 선택합니다.",
      "회전을 적용하고 결과 PDF를 다운로드합니다.",
    ],
    faq: [
      { q: "90도씩만 회전되나요?", a: "네, 90/180/270도 중에서 선택할 수 있으며 자유 각도 회전은 지원하지 않습니다." },
      { q: "일부 페이지만 회전할 수 있나요?", a: "네, '특정 페이지'를 선택하고 페이지 번호를 입력하면 해당 페이지만 회전됩니다." },
      { q: "이미 회전되어 있던 페이지는 어떻게 되나요?", a: "기존 회전 값에 선택한 각도가 추가로 적용됩니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 파일을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "PDF Page Rotator",
    subtitle: "Rotate all pages or just specific ones in a PDF by 90-degree increments. All processing happens in your browser.",
    uploadLabel: "Upload a PDF file",
    uploadHint: "Click or drag and drop a file",
    changeFile: "Choose another file",
    pageCountLabel: "Total Pages",
    angleLabel: "Rotation Angle",
    targetLabel: "Apply To",
    targetAll: "All Pages",
    targetRange: "Specific Pages",
    rangePlaceholder: "e.g. 2, 4-6",
    generateButton: "Apply Rotation",
    processing: "Processing...",
    download: "Download PDF",
    howTitle: "How to Use",
    howSteps: [
      "Upload a PDF file.",
      "Choose the rotation angle and target (all/specific pages).",
      "Apply the rotation and download the result.",
    ],
    faq: [
      { q: "Can I only rotate by 90-degree steps?", a: "Yes, you can choose 90/180/270 degrees; arbitrary-angle rotation isn't supported." },
      { q: "Can I rotate only some pages?", a: "Yes, choose 'Specific Pages' and enter the page numbers to rotate only those." },
      { q: "What happens to pages that already have a rotation?", a: "The selected angle is added on top of the page's existing rotation." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your file on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "PDFページ回転ツール",
    subtitle: "PDFのすべてのページ、または特定のページだけを90度単位で回転させます。すべての処理はブラウザで行われます。",
    uploadLabel: "PDFファイルをアップロードしてください",
    uploadHint: "クリックまたはファイルをドラッグ＆ドロップしてください",
    changeFile: "別のファイルを選択",
    pageCountLabel: "総ページ数",
    angleLabel: "回転角度",
    targetLabel: "適用対象",
    targetAll: "すべてのページ",
    targetRange: "特定のページ",
    rangePlaceholder: "例: 2, 4-6",
    generateButton: "回転を適用",
    processing: "処理中...",
    download: "PDFをダウンロード",
    howTitle: "使用方法",
    howSteps: [
      "PDFファイルをアップロードします。",
      "回転角度と適用対象（全体／特定ページ）を選択します。",
      "回転を適用し、結果のPDFをダウンロードします。",
    ],
    faq: [
      { q: "90度単位でしか回転できませんか？", a: "はい、90/180/270度から選択でき、任意角度の回転には対応していません。" },
      { q: "一部のページだけ回転できますか？", a: "はい、「特定のページ」を選択してページ番号を入力すると、そのページだけ回転します。" },
      { q: "すでに回転していたページはどうなりますか？", a: "既存の回転値に選択した角度がさらに適用されます。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、ファイルをサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Rotador de Páginas PDF",
    subtitle: "Rota todas las páginas o solo algunas de un PDF en incrementos de 90 grados. Todo se procesa en tu navegador.",
    uploadLabel: "Sube un archivo PDF",
    uploadHint: "Haz clic o arrastra y suelta un archivo",
    changeFile: "Elegir otro archivo",
    pageCountLabel: "Total de Páginas",
    angleLabel: "Ángulo de Rotación",
    targetLabel: "Aplicar a",
    targetAll: "Todas las Páginas",
    targetRange: "Páginas Específicas",
    rangePlaceholder: "ej. 2, 4-6",
    generateButton: "Aplicar Rotación",
    processing: "Procesando...",
    download: "Descargar PDF",
    howTitle: "Cómo Usar",
    howSteps: [
      "Sube un archivo PDF.",
      "Elige el ángulo de rotación y el objetivo (todas/específicas).",
      "Aplica la rotación y descarga el resultado.",
    ],
    faq: [
      { q: "¿Solo puedo rotar en pasos de 90 grados?", a: "Sí, puedes elegir 90/180/270 grados; no se admite rotación en ángulo arbitrario." },
      { q: "¿Puedo rotar solo algunas páginas?", a: "Sí, elige 'Páginas Específicas' e introduce los números para rotar solo esas." },
      { q: "¿Qué pasa con las páginas que ya tenían rotación?", a: "El ángulo elegido se suma a la rotación existente de la página." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tu archivo en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
