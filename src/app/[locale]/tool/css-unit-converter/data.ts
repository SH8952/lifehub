export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  valueLabel: string;
  fromUnitLabel: string;
  baseFontLabel: string;
  resultLabel: string;
  copyBtn: string;
  copied: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "CSS 단위 변환기",
    subtitle: "px, rem, em, pt, % 등 CSS 단위를 기준 글꼴 크기에 맞춰 상호 변환합니다.",
    valueLabel: "값",
    fromUnitLabel: "변환 전 단위",
    baseFontLabel: "기준 글꼴 크기 (px)",
    resultLabel: "변환 결과",
    copyBtn: "복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "변환할 값과 원래 단위(px/rem/em/pt/%)를 입력합니다.",
      "기준 글꼴 크기를 설정합니다 (기본값 16px).",
      "px, rem, em, pt, % 로 변환된 결과를 한눈에 확인하세요.",
      "vh, vw 같은 뷰포트 단위는 지원하지 않으므로 반응형 레이아웃 계산에는 별도 도구가 필요합니다.",
    ],
    faq: [
      { q: "rem과 em의 차이는 무엇인가요?", a: "rem은 항상 문서 루트(html)의 글꼴 크기를 기준으로 계산되고, em은 해당 요소의 부모(또는 자신) 글꼴 크기를 기준으로 계산됩니다. 이 도구는 단순화를 위해 입력한 기준 글꼴 크기를 두 단위 모두에 동일하게 적용합니다." },
      { q: "%는 어떤 기준으로 변환되나요?", a: "글꼴 크기 기준 %는 기준 글꼴 크기를 100%로 보고 비율을 계산합니다." },
      { q: "접근성 측면에서 px보다 rem을 쓰는 게 좋다는데 왜 그런가요?", a: "px는 사용자가 브라우저에서 글꼴 크기를 확대해도 고정된 크기를 유지하지만, rem은 사용자의 브라우저 설정에 따라 함께 확대되어 저시력 사용자 등의 접근성에 더 유리합니다." },
      { q: "pt 단위는 웹에서도 쓸 수 있나요?", a: "pt(포인트)는 주로 인쇄물에서 쓰이는 단위이며, 웹에서는 브라우저·운영체제마다 1pt의 실제 픽셀 환산이 달라질 수 있어 화면용으로는 px나 rem 사용이 더 권장됩니다." },
      { q: "브라우저의 기본 글꼴 크기는 항상 16px인가요?", a: "대부분의 브라우저는 기본값으로 16px을 사용하지만, 사용자가 브라우저 설정에서 이를 변경할 수 있어 실제 환경에서는 다를 수 있습니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "CSS Unit Converter",
    subtitle: "Convert between CSS units like px, rem, em, pt, and % based on a base font size.",
    valueLabel: "Value",
    fromUnitLabel: "From Unit",
    baseFontLabel: "Base Font Size (px)",
    resultLabel: "Conversion Result",
    copyBtn: "Copy",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Enter the value and its original unit (px/rem/em/pt/%).",
      "Set the base font size (default 16px).",
      "View the converted results in px, rem, em, pt, and % at a glance.",
      "Viewport units like vh and vw aren't supported, so responsive layout calculations need a separate tool.",
    ],
    faq: [
      { q: "What's the difference between rem and em?", a: "rem is always calculated relative to the document root (html) font size, while em is relative to the element's parent (or itself). For simplicity, this tool applies the same base font size to both." },
      { q: "What is % based on?", a: "For font-size %, the base font size is treated as 100% and the ratio is calculated from there." },
      { q: "Why is rem often recommended over px for accessibility?", a: "A px value stays fixed even if the user increases their browser's font size, while rem scales along with the user's settings — which is more accessible for users with low vision." },
      { q: "Can I use pt units on the web too?", a: "pt (point) is mainly a print unit. On the web, the actual pixel equivalent of 1pt can vary by browser and OS, so px or rem is generally recommended for screen design." },
      { q: "Is the browser's default font size always 16px?", a: "Most browsers default to 16px, but users can change this in their browser settings, so the actual value can differ in real-world environments." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "CSS単位変換ツール",
    subtitle: "px、rem、em、pt、%などのCSS単位を基準フォントサイズに合わせて相互変換します。",
    valueLabel: "値",
    fromUnitLabel: "変換前の単位",
    baseFontLabel: "基準フォントサイズ（px）",
    resultLabel: "変換結果",
    copyBtn: "コピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "変換したい値と元の単位（px/rem/em/pt/%）を入力します。",
      "基準フォントサイズを設定します（デフォルト16px）。",
      "px、rem、em、pt、%に変換された結果を一目で確認しましょう。",
      "vh、vwなどのビューポート単位はサポートしていないため、レスポンシブレイアウトの計算には別のツールが必要です。",
    ],
    faq: [
      { q: "remとemの違いは何ですか？", a: "remは常にドキュメントルート（html）のフォントサイズを基準に計算され、emは該当要素の親（または自身）のフォントサイズを基準に計算されます。このツールは簡略化のため、入力した基準フォントサイズを両方の単位に同じように適用します。" },
      { q: "%はどのような基準で変換されますか？", a: "フォントサイズ基準の%は、基準フォントサイズを100%として比率を計算します。" },
      { q: "アクセシビリティの観点からpxよりremを使う方が良いと言われるのはなぜですか？", a: "pxはユーザーがブラウザでフォントサイズを拡大しても固定サイズを維持しますが、remはユーザーのブラウザ設定に応じて一緒に拡大されるため、弱視のユーザーなどのアクセシビリティにより有利です。" },
      { q: "pt単位はWebでも使えますか？", a: "pt（ポイント）は主に印刷物で使われる単位で、Webではブラウザ・OSによって1ptの実際のピクセル換算が変わる場合があるため、画面用にはpxやremの使用が推奨されます。" },
      { q: "ブラウザのデフォルトフォントサイズは常に16pxですか？", a: "ほとんどのブラウザはデフォルトで16pxを使用しますが、ユーザーがブラウザ設定で変更できるため、実際の環境では異なる場合があります。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Convertidor de Unidades CSS",
    subtitle: "Convierte entre unidades CSS como px, rem, em, pt y % según un tamaño de fuente base.",
    valueLabel: "Valor",
    fromUnitLabel: "Unidad de Origen",
    baseFontLabel: "Tamaño de Fuente Base (px)",
    resultLabel: "Resultado de Conversión",
    copyBtn: "Copiar",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el valor y su unidad original (px/rem/em/pt/%).",
      "Define el tamaño de fuente base (16px por defecto).",
      "Ve los resultados convertidos en px, rem, em, pt y % de un vistazo.",
      "No se admiten unidades de viewport como vh y vw, así que los cálculos de diseño responsivo requieren otra herramienta.",
    ],
    faq: [
      { q: "¿Cuál es la diferencia entre rem y em?", a: "rem siempre se calcula según el tamaño de fuente de la raíz del documento (html), mientras que em es relativo al elemento padre (o a sí mismo). Para simplificar, esta herramienta aplica el mismo tamaño base a ambos." },
      { q: "¿En qué se basa el %?", a: "Para el % de tamaño de fuente, el tamaño base se trata como 100% y la proporción se calcula a partir de ahí." },
      { q: "¿Por qué se suele recomendar rem en lugar de px por accesibilidad?", a: "Un valor en px permanece fijo aunque el usuario aumente el tamaño de fuente del navegador, mientras que rem escala junto con la configuración del usuario, lo cual es más accesible para personas con baja visión." },
      { q: "¿Puedo usar unidades pt también en la web?", a: "pt (punto) es principalmente una unidad de impresión. En la web, el equivalente real en píxeles de 1pt puede variar según el navegador y el sistema operativo, por lo que se recomienda px o rem para diseño en pantalla." },
      { q: "¿El tamaño de fuente predeterminado del navegador siempre es 16px?", a: "La mayoría de los navegadores usan 16px por defecto, pero los usuarios pueden cambiarlo en la configuración del navegador, así que el valor real puede diferir en entornos reales." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
