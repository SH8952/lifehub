export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  titleFieldLabel: string;
  titleFieldPlaceholder: string;
  contentLabel: string;
  contentPlaceholder: string;
  pageFormatLabel: string;
  fontSizeLabel: string;
  download: string;
  generating: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "텍스트 → PDF 변환",
    subtitle: "입력한 텍스트를 깔끔한 PDF 문서로 변환하세요 (브라우저에서 100% 처리)",
    titleFieldLabel: "문서 제목 (선택)",
    titleFieldPlaceholder: "예: 회의록",
    contentLabel: "내용",
    contentPlaceholder: "여기에 PDF로 변환할 텍스트를 입력하세요...",
    pageFormatLabel: "용지 크기",
    fontSizeLabel: "글자 크기",
    download: "PDF 다운로드",
    generating: "PDF 생성 중...",
    howTitle: "사용 방법",
    howSteps: [
      "제목(선택)과 본문 내용을 입력합니다.",
      "용지 크기와 글자 크기를 선택합니다.",
      "'PDF 다운로드' 버튼을 눌러 변환된 파일을 받습니다.",
      "내용이 길면 자동으로 여러 페이지로 나뉩니다.",
    ],
    faq: [
      {
        q: "한국어/일본어처럼 영문이 아닌 글자도 깨지지 않고 나오나요?",
        a: "네. 브라우저가 화면에 렌더링한 실제 글자 모양을 그대로 캡처해 PDF에 넣는 방식이라 한국어, 일본어, 스페인어 등 모든 언어가 정확하게 표시됩니다.",
      },
      {
        q: "생성된 PDF의 텍스트를 드래그해서 복사할 수 있나요?",
        a: "이 도구는 텍스트를 이미지로 변환해 PDF에 삽입하는 방식이라, 생성된 PDF 안의 글자는 이미지이며 드래그로 복사할 수 없습니다. 다양한 언어를 별도 폰트 설치 없이 정확하게 표시하기 위한 방식입니다.",
      },
      {
        q: "입력한 내용이 서버로 전송되나요?",
        a: "아니요. 모든 변환 작업은 브라우저 안에서만 이루어지며 입력한 텍스트가 서버로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 매우 긴 텍스트는 변환에 시간이 다소 걸릴 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Text to PDF",
    subtitle: "Convert your text into a clean PDF document (100% processed in your browser)",
    titleFieldLabel: "Document Title (optional)",
    titleFieldPlaceholder: "e.g. Meeting Notes",
    contentLabel: "Content",
    contentPlaceholder: "Type or paste the text you want to convert to PDF...",
    pageFormatLabel: "Page Size",
    fontSizeLabel: "Font Size",
    download: "Download PDF",
    generating: "Generating PDF...",
    howTitle: "How to Use",
    howSteps: [
      "Enter an optional title and your body text.",
      "Choose the page size and font size.",
      "Click 'Download PDF' to get the converted file.",
      "Long content is automatically split across multiple pages.",
    ],
    faq: [
      {
        q: "Will non-Latin scripts like Korean or Japanese render correctly?",
        a: "Yes. The tool captures the actual text as rendered by your browser and embeds it into the PDF, so Korean, Japanese, Spanish, and other languages display accurately.",
      },
      {
        q: "Can I select and copy text from the generated PDF?",
        a: "This tool converts text into an image before embedding it in the PDF, so the text in the result is an image and cannot be selected or copied. This approach ensures accurate rendering of any language without needing extra font files.",
      },
      {
        q: "Is my entered text sent to a server?",
        a: "No. All conversion happens entirely in your browser; your text is never uploaded anywhere.",
      },
    ],
    disclaimer: "Very long text may take a little longer to convert.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "テキスト → PDF変換",
    subtitle: "入力したテキストをきれいなPDF文書に変換します（ブラウザで100%処理）",
    titleFieldLabel: "文書タイトル（任意）",
    titleFieldPlaceholder: "例：議事録",
    contentLabel: "内容",
    contentPlaceholder: "ここにPDFに変換したいテキストを入力してください...",
    pageFormatLabel: "用紙サイズ",
    fontSizeLabel: "文字サイズ",
    download: "PDFをダウンロード",
    generating: "PDF生成中...",
    howTitle: "使い方",
    howSteps: [
      "タイトル（任意）と本文を入力します。",
      "用紙サイズと文字サイズを選択します。",
      "「PDFをダウンロード」ボタンを押して変換したファイルを受け取ります。",
      "内容が長い場合は自動的に複数ページに分割されます。",
    ],
    faq: [
      {
        q: "日本語や韓国語などの文字も崩れずに表示されますか？",
        a: "はい。ブラウザが画面に描画した実際の文字の形をそのままキャプチャしてPDFに埋め込む方式のため、日本語、韓国語、スペイン語など、あらゆる言語が正確に表示されます。",
      },
      {
        q: "生成されたPDFの文字をドラッグしてコピーできますか？",
        a: "このツールはテキストを画像に変換してPDFに埋め込む方式のため、結果のPDF内の文字は画像であり、ドラッグでコピーすることはできません。追加のフォントファイルなしで、あらゆる言語を正確に表示するための方式です。",
      },
      {
        q: "入力した内容はサーバーに送信されますか？",
        a: "いいえ。すべての変換処理はブラウザ内だけで行われ、入力したテキストがサーバーに送信されることはありません。",
      },
    ],
    disclaimer: "⚠️ 非常に長いテキストは変換に多少時間がかかる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Texto a PDF",
    subtitle: "Convierte tu texto en un documento PDF limpio (100% procesado en tu navegador)",
    titleFieldLabel: "Titulo del Documento (opcional)",
    titleFieldPlaceholder: "ej: Notas de la reunion",
    contentLabel: "Contenido",
    contentPlaceholder: "Escribe o pega el texto que deseas convertir a PDF...",
    pageFormatLabel: "Tamano de Pagina",
    fontSizeLabel: "Tamano de Fuente",
    download: "Descargar PDF",
    generating: "Generando PDF...",
    howTitle: "Como Usar",
    howSteps: [
      "Ingresa un titulo opcional y el texto principal.",
      "Elige el tamano de pagina y el tamano de fuente.",
      "Haz clic en 'Descargar PDF' para obtener el archivo convertido.",
      "El contenido largo se divide automaticamente en varias paginas.",
    ],
    faq: [
      {
        q: "Se veran bien los caracteres no latinos como coreano o japones?",
        a: "Si. La herramienta captura el texto tal como lo renderiza tu navegador y lo incrusta en el PDF, por lo que coreano, japones, espanol y otros idiomas se muestran con precision.",
      },
      {
        q: "Puedo seleccionar y copiar texto del PDF generado?",
        a: "Esta herramienta convierte el texto en una imagen antes de incrustarlo en el PDF, por lo que el texto del resultado es una imagen y no se puede seleccionar ni copiar. Este enfoque garantiza una renderizacion precisa de cualquier idioma sin necesitar archivos de fuente adicionales.",
      },
      {
        q: "Se envia mi texto a un servidor?",
        a: "No. Toda la conversion ocurre completamente en tu navegador; tu texto nunca se sube a ningun lado.",
      },
    ],
    disclaimer: "El texto muy largo puede tardar un poco mas en convertirse.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
