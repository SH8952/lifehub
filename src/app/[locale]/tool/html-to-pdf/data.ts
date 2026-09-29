export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  htmlLabel: string;
  htmlPlaceholder: string;
  previewLabel: string;
  pageFormatLabel: string;
  download: string;
  generating: string;
  trustWarning: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "HTML → PDF 변환",
    subtitle: "HTML 코드를 실제 렌더링한 모습 그대로 PDF로 변환하세요 (브라우저에서 100% 처리)",
    htmlLabel: "HTML 소스",
    htmlPlaceholder: "<h1>제목</h1>\n<p>본문 내용을 입력하세요.</p>",
    previewLabel: "미리보기 (이 화면 그대로 PDF에 저장됩니다)",
    pageFormatLabel: "용지 크기",
    download: "PDF 다운로드",
    generating: "PDF 생성 중...",
    trustWarning: "⚠️ 본인이 작성했거나 신뢰할 수 있는 HTML만 붙여넣으세요. 이 도구는 기본적인 스크립트 제거만 수행하며, 완전한 보안 검증 도구가 아닙니다.",
    howTitle: "사용 방법",
    howSteps: [
      "HTML 소스 코드를 입력합니다 (제목, 문단, 목록, 표 등 기본 태그 지원).",
      "아래 미리보기에서 실제로 어떻게 보일지 확인합니다.",
      "용지 크기를 선택합니다.",
      "'PDF 다운로드' 버튼을 눌러 변환된 파일을 받습니다.",
    ],
    faq: [
      {
        q: "CSS 스타일도 적용되나요?",
        a: "네. `<style>` 태그나 인라인 style 속성으로 지정한 스타일이 미리보기와 PDF에 그대로 반영됩니다. 단, 외부 CSS 파일 링크(`<link>`)는 브라우저 보안 정책상 적용되지 않을 수 있습니다.",
      },
      {
        q: "이미지도 포함할 수 있나요?",
        a: "네, `<img>` 태그로 이미지 URL을 넣으면 미리보기와 PDF에 포함됩니다. 다만 외부 이미지는 해당 서버의 CORS 설정에 따라 표시가 안 될 수 있습니다.",
      },
      {
        q: "입력한 HTML이 서버로 전송되나요?",
        a: "아니요. 모든 렌더링과 변환은 브라우저 안에서만 이루어지며 입력한 내용이 서버로 전송되지 않습니다.",
      },
    ],
    disclaimer: "⚠️ 매우 복잡하거나 긴 HTML은 변환에 시간이 다소 걸릴 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "HTML to PDF",
    subtitle: "Convert HTML exactly as it renders into a PDF (100% processed in your browser)",
    htmlLabel: "HTML Source",
    htmlPlaceholder: "<h1>Title</h1>\n<p>Type your content here.</p>",
    previewLabel: "Preview (this is exactly what gets saved to the PDF)",
    pageFormatLabel: "Page Size",
    download: "Download PDF",
    generating: "Generating PDF...",
    trustWarning: "Only paste HTML you wrote yourself or trust. This tool only performs basic script removal and is not a full security scanner.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your HTML source (headings, paragraphs, lists, tables, and other basic tags are supported).",
      "Check the preview below to see exactly how it will look.",
      "Choose the page size.",
      "Click 'Download PDF' to get the converted file.",
    ],
    faq: [
      {
        q: "Does CSS styling get applied?",
        a: "Yes. Styles set via a `<style>` tag or inline `style` attributes are reflected in both the preview and the PDF. External stylesheet links (`<link>`) may not apply due to browser security restrictions.",
      },
      {
        q: "Can I include images?",
        a: "Yes, `<img>` tags with an image URL will appear in the preview and PDF. External images may fail to display depending on that server's CORS settings.",
      },
      {
        q: "Is my HTML sent to a server?",
        a: "No. All rendering and conversion happens entirely in your browser; nothing you enter is uploaded anywhere.",
      },
    ],
    disclaimer: "Very complex or long HTML may take a little longer to convert.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "HTML → PDF変換",
    subtitle: "HTMLを実際に表示された見た目のままPDFに変換します（ブラウザで100%処理）",
    htmlLabel: "HTMLソース",
    htmlPlaceholder: "<h1>タイトル</h1>\n<p>ここに内容を入力してください。</p>",
    previewLabel: "プレビュー（この画面のままPDFとして保存されます）",
    pageFormatLabel: "用紙サイズ",
    download: "PDFをダウンロード",
    generating: "PDF生成中...",
    trustWarning: "⚠️ 自分で作成したか、信頼できるHTMLのみ貼り付けてください。このツールは基本的なスクリプト除去のみを行い、完全なセキュリティ検証ツールではありません。",
    howTitle: "使い方",
    howSteps: [
      "HTMLソースコードを入力します（見出し、段落、リスト、表などの基本タグに対応）。",
      "下のプレビューで実際の見た目を確認します。",
      "用紙サイズを選択します。",
      "「PDFをダウンロード」ボタンを押して変換したファイルを受け取ります。",
    ],
    faq: [
      {
        q: "CSSスタイルも適用されますか？",
        a: "はい。`<style>`タグやインラインstyle属性で指定したスタイルはプレビューとPDFにそのまま反映されます。ただし外部CSSファイルへのリンク（`<link>`）はブラウザのセキュリティ制限で適用されない場合があります。",
      },
      {
        q: "画像も含めることができますか？",
        a: "はい、`<img>`タグで画像URLを指定するとプレビューとPDFに含まれます。ただし外部画像はそのサーバーのCORS設定によっては表示されない場合があります。",
      },
      {
        q: "入力したHTMLはサーバーに送信されますか？",
        a: "いいえ。すべての描画・変換処理はブラウザ内だけで行われ、入力した内容がサーバーに送信されることはありません。",
      },
    ],
    disclaimer: "⚠️ 非常に複雑または長いHTMLは変換に多少時間がかかる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "HTML a PDF",
    subtitle: "Convierte HTML exactamente como se renderiza en un PDF (100% procesado en tu navegador)",
    htmlLabel: "Codigo HTML",
    htmlPlaceholder: "<h1>Titulo</h1>\n<p>Escribe tu contenido aqui.</p>",
    previewLabel: "Vista previa (esto es exactamente lo que se guardara en el PDF)",
    pageFormatLabel: "Tamano de Pagina",
    download: "Descargar PDF",
    generating: "Generando PDF...",
    trustWarning: "Pega solo HTML que hayas escrito tu mismo o en el que confies. Esta herramienta solo realiza una eliminacion basica de scripts y no es un escaner de seguridad completo.",
    howTitle: "Como Usar",
    howSteps: [
      "Ingresa tu codigo HTML (se admiten encabezados, parrafos, listas, tablas y otras etiquetas basicas).",
      "Revisa la vista previa de abajo para ver exactamente como se vera.",
      "Elige el tamano de pagina.",
      "Haz clic en 'Descargar PDF' para obtener el archivo convertido.",
    ],
    faq: [
      {
        q: "Se aplican los estilos CSS?",
        a: "Si. Los estilos definidos con una etiqueta `<style>` o atributos `style` en linea se reflejan tanto en la vista previa como en el PDF. Los enlaces a hojas de estilo externas (`<link>`) pueden no aplicarse por restricciones de seguridad del navegador.",
      },
      {
        q: "Puedo incluir imagenes?",
        a: "Si, las etiquetas `<img>` con una URL de imagen apareceran en la vista previa y el PDF. Las imagenes externas pueden no mostrarse segun la configuracion CORS de ese servidor.",
      },
      {
        q: "Se envia mi HTML a un servidor?",
        a: "No. Todo el renderizado y la conversion ocurren completamente en tu navegador; nada de lo que ingreses se sube a ningun lado.",
      },
    ],
    disclaimer: "El HTML muy complejo o largo puede tardar un poco mas en convertirse.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
