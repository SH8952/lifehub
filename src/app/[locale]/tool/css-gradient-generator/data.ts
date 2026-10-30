export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  typeLabel: string;
  typeLinear: string;
  typeRadial: string;
  angleLabel: string;
  color1Label: string;
  color2Label: string;
  previewLabel: string;
  codeLabel: string;
  copyBtn: string;
  copied: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "CSS 그라디언트 생성기",
    subtitle: "색상과 각도를 조절해 CSS 그라디언트를 만들고 코드를 바로 복사하세요.",
    typeLabel: "유형",
    typeLinear: "선형(Linear)",
    typeRadial: "원형(Radial)",
    angleLabel: "각도",
    color1Label: "색상 1",
    color2Label: "색상 2",
    previewLabel: "미리보기",
    codeLabel: "CSS 코드",
    copyBtn: "코드 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "그라디언트 유형(선형/원형)을 선택합니다.",
      "두 가지 색상과 각도를 조절합니다.",
      "미리보기를 확인하고 CSS 코드를 복사해 바로 사용하세요.",
    ],
    faq: [
      { q: "3가지 이상의 색상도 가능한가요?", a: "현재 버전은 2가지 색상 그라디언트만 지원합니다. 더 복잡한 그라디언트는 생성된 코드를 직접 수정해 색상 중지점을 추가할 수 있습니다." },
      { q: "생성된 코드는 모든 브라우저에서 동작하나요?", a: "표준 CSS linear-gradient/radial-gradient 문법을 사용하므로 대부분의 최신 브라우저에서 정상 동작합니다." },
    ],
    disclaimer: "생성된 코드는 자유롭게 사용할 수 있으며 별도의 저작권 제한이 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "CSS Gradient Generator",
    subtitle: "Adjust colors and angle to build a CSS gradient and copy the code instantly.",
    typeLabel: "Type",
    typeLinear: "Linear",
    typeRadial: "Radial",
    angleLabel: "Angle",
    color1Label: "Color 1",
    color2Label: "Color 2",
    previewLabel: "Preview",
    codeLabel: "CSS Code",
    copyBtn: "Copy Code",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Choose the gradient type (linear or radial).",
      "Adjust the two colors and the angle.",
      "Check the preview and copy the CSS code to use right away.",
    ],
    faq: [
      { q: "Can I use more than 2 colors?", a: "This version supports a 2-color gradient only. For more complex gradients, you can manually add more color stops to the generated code." },
      { q: "Will the generated code work in all browsers?", a: "It uses standard CSS linear-gradient/radial-gradient syntax, so it works in virtually all modern browsers." },
    ],
    disclaimer: "The generated code is free to use with no copyright restrictions.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "CSSグラデーション生成ツール",
    subtitle: "色と角度を調整してCSSグラデーションを作成し、コードをすぐにコピーしましょう。",
    typeLabel: "タイプ",
    typeLinear: "線形（Linear）",
    typeRadial: "円形（Radial）",
    angleLabel: "角度",
    color1Label: "色1",
    color2Label: "色2",
    previewLabel: "プレビュー",
    codeLabel: "CSSコード",
    copyBtn: "コードをコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "グラデーションタイプ（線形/円形）を選択します。",
      "2つの色と角度を調整します。",
      "プレビューを確認し、CSSコードをコピーしてすぐに使用しましょう。",
    ],
    faq: [
      { q: "3色以上のグラデーションも可能ですか？", a: "現在のバージョンは2色のグラデーションのみサポートしています。より複雑なグラデーションは生成されたコードを直接編集してカラーストップを追加できます。" },
      { q: "生成されたコードは全てのブラウザで動作しますか？", a: "標準のCSS linear-gradient/radial-gradient文法を使用するため、ほとんどの最新ブラウザで正常に動作します。" },
    ],
    disclaimer: "生成されたコードは自由に使用でき、別途著作権の制限はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Gradientes CSS",
    subtitle: "Ajusta colores y ángulo para crear un gradiente CSS y copia el código al instante.",
    typeLabel: "Tipo",
    typeLinear: "Lineal",
    typeRadial: "Radial",
    angleLabel: "Ángulo",
    color1Label: "Color 1",
    color2Label: "Color 2",
    previewLabel: "Vista Previa",
    codeLabel: "Código CSS",
    copyBtn: "Copiar Código",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige el tipo de gradiente (lineal o radial).",
      "Ajusta los dos colores y el ángulo.",
      "Revisa la vista previa y copia el código CSS para usarlo de inmediato.",
    ],
    faq: [
      { q: "¿Puedo usar más de 2 colores?", a: "Esta versión solo admite un gradiente de 2 colores. Para gradientes más complejos, puedes añadir manualmente más paradas de color al código generado." },
      { q: "¿El código generado funciona en todos los navegadores?", a: "Usa sintaxis estándar CSS linear-gradient/radial-gradient, por lo que funciona en prácticamente todos los navegadores modernos." },
    ],
    disclaimer: "El código generado es de uso libre y no tiene restricciones de derechos de autor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
