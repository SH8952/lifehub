export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  modeEncode: string;
  modeDecode: string;
  inputLabel: string;
  outputLabel: string;
  copyBtn: string;
  copied: string;
  placeholderEncode: string;
  placeholderDecode: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "HTML 엔티티 변환기",
    subtitle: "특수문자를 HTML 엔티티로 인코딩하거나 엔티티를 다시 문자로 디코딩합니다.",
    modeEncode: "인코딩 (문자 → 엔티티)",
    modeDecode: "디코딩 (엔티티 → 문자)",
    inputLabel: "입력",
    outputLabel: "결과",
    copyBtn: "복사",
    copied: "복사됨!",
    placeholderEncode: "<div class=\"box\">Hello & \"World\"</div>",
    placeholderDecode: "&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;",
    howTitle: "사용 방법",
    howSteps: [
      "인코딩 또는 디코딩 모드를 선택합니다.",
      "입력창에 텍스트나 HTML 코드를 붙여넣습니다.",
      "결과를 확인하고 복사 버튼으로 바로 가져가세요.",
    ],
    faq: [
      { q: "왜 HTML 엔티티로 변환해야 하나요?", a: "<, >, & 같은 문자는 HTML 문법의 일부로 해석되기 때문에, 화면에 그대로 표시하려면 &lt;, &gt;, &amp; 같은 엔티티로 변환해야 합니다." },
      { q: "한글이나 이모지도 변환되나요?", a: "이 도구는 HTML에서 특별한 의미를 갖는 기본 문자(<, >, &, \", ')만 변환 대상이며, 한글/이모지는 그대로 유지됩니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "HTML Entity Converter",
    subtitle: "Encode special characters into HTML entities, or decode entities back into characters.",
    modeEncode: "Encode (Char → Entity)",
    modeDecode: "Decode (Entity → Char)",
    inputLabel: "Input",
    outputLabel: "Output",
    copyBtn: "Copy",
    copied: "Copied!",
    placeholderEncode: "<div class=\"box\">Hello & \"World\"</div>",
    placeholderDecode: "&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;",
    howTitle: "How to Use",
    howSteps: [
      "Choose encode or decode mode.",
      "Paste your text or HTML code into the input box.",
      "Check the result and use the copy button to grab it.",
    ],
    faq: [
      { q: "Why convert characters to HTML entities?", a: "Characters like <, >, and & are interpreted as part of HTML syntax, so to display them literally on a page they must be converted to entities like &lt;, &gt;, &amp;." },
      { q: "Are Korean characters or emoji converted too?", a: "This tool only converts the basic characters with special meaning in HTML (<, >, &, \", '); other characters like Korean text or emoji are left unchanged." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "HTMLエンティティ変換ツール",
    subtitle: "特殊文字をHTMLエンティティにエンコードしたり、エンティティを文字に再デコードします。",
    modeEncode: "エンコード（文字→エンティティ）",
    modeDecode: "デコード（エンティティ→文字）",
    inputLabel: "入力",
    outputLabel: "結果",
    copyBtn: "コピー",
    copied: "コピーしました！",
    placeholderEncode: "<div class=\"box\">Hello & \"World\"</div>",
    placeholderDecode: "&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;",
    howTitle: "使用方法",
    howSteps: [
      "エンコードまたはデコードモードを選択します。",
      "入力欄にテキストやHTMLコードを貼り付けます。",
      "結果を確認し、コピーボタンで取得しましょう。",
    ],
    faq: [
      { q: "なぜHTMLエンティティに変換する必要がありますか？", a: "<、>、&のような文字はHTML構文の一部として解釈されるため、画面にそのまま表示するには&lt;、&gt;、&amp;のようなエンティティに変換する必要があります。" },
      { q: "日本語や絵文字も変換されますか？", a: "このツールはHTMLで特別な意味を持つ基本文字（<、>、&、\"、'）のみを変換対象とし、日本語・絵文字はそのまま保持されます。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Entidades HTML",
    subtitle: "Codifica caracteres especiales en entidades HTML, o decodifica entidades de vuelta a caracteres.",
    modeEncode: "Codificar (Carácter → Entidad)",
    modeDecode: "Decodificar (Entidad → Carácter)",
    inputLabel: "Entrada",
    outputLabel: "Resultado",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    placeholderEncode: "<div class=\"box\">Hello & \"World\"</div>",
    placeholderDecode: "&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige el modo de codificar o decodificar.",
      "Pega tu texto o código HTML en el cuadro de entrada.",
      "Revisa el resultado y usa el botón de copiar para obtenerlo.",
    ],
    faq: [
      { q: "¿Por qué convertir caracteres a entidades HTML?", a: "Caracteres como <, > y & se interpretan como parte de la sintaxis HTML, así que para mostrarlos literalmente deben convertirse a entidades como &lt;, &gt;, &amp;." },
      { q: "¿Se convierten también caracteres en coreano o emojis?", a: "Esta herramienta solo convierte los caracteres básicos con significado especial en HTML (<, >, &, \", '); otros caracteres como texto en coreano o emojis se mantienen sin cambios." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
