export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  offsetXLabel: string;
  offsetYLabel: string;
  blurLabel: string;
  spreadLabel: string;
  colorLabel: string;
  opacityLabel: string;
  insetLabel: string;
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
    title: "CSS Box Shadow 생성기",
    subtitle: "슬라이더로 그림자를 조절해 CSS box-shadow 코드를 만들고 바로 복사하세요.",
    offsetXLabel: "가로 거리 (X)",
    offsetYLabel: "세로 거리 (Y)",
    blurLabel: "흐림 정도 (Blur)",
    spreadLabel: "퍼짐 정도 (Spread)",
    colorLabel: "색상",
    opacityLabel: "투명도",
    insetLabel: "안쪽 그림자 (inset)",
    previewLabel: "미리보기",
    codeLabel: "CSS 코드",
    copyBtn: "코드 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "슬라이더를 움직여 거리, 흐림, 퍼짐 정도를 조절합니다.",
      "색상과 투명도를 선택하고 필요하면 안쪽 그림자 옵션을 켭니다.",
      "미리보기를 확인하고 생성된 CSS 코드를 복사하세요.",
    ],
    faq: [
      { q: "여러 개의 그림자를 중첩할 수 있나요?", a: "현재 버전은 하나의 그림자만 생성합니다. 여러 그림자가 필요하면 생성된 코드를 복사한 뒤 쉼표로 추가 그림자를 직접 이어붙이면 됩니다." },
      { q: "투명도는 어떻게 적용되나요?", a: "선택한 색상의 HEX 값을 RGBA로 변환해 투명도 슬라이더 값을 alpha 채널에 반영합니다." },
    ],
    disclaimer: "생성된 코드는 자유롭게 사용할 수 있으며 별도의 저작권 제한이 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "CSS Box Shadow Generator",
    subtitle: "Adjust shadow settings with sliders to build CSS box-shadow code and copy it instantly.",
    offsetXLabel: "Horizontal Offset (X)",
    offsetYLabel: "Vertical Offset (Y)",
    blurLabel: "Blur Radius",
    spreadLabel: "Spread Radius",
    colorLabel: "Color",
    opacityLabel: "Opacity",
    insetLabel: "Inset Shadow",
    previewLabel: "Preview",
    codeLabel: "CSS Code",
    copyBtn: "Copy Code",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Move the sliders to adjust offset, blur, and spread.",
      "Pick a color and opacity, and toggle inset shadow if needed.",
      "Check the preview and copy the generated CSS code.",
    ],
    faq: [
      { q: "Can I stack multiple shadows?", a: "This version generates a single shadow. For multiple shadows, copy the generated code and append more, comma-separated, yourself." },
      { q: "How is opacity applied?", a: "The chosen HEX color is converted to RGBA, and the opacity slider value is applied to the alpha channel." },
    ],
    disclaimer: "The generated code is free to use with no copyright restrictions.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "CSS Box Shadow生成ツール",
    subtitle: "スライダーで影を調整してCSS box-shadowコードを作成し、すぐにコピーしましょう。",
    offsetXLabel: "横のずれ（X）",
    offsetYLabel: "縦のずれ（Y）",
    blurLabel: "ぼかし（Blur）",
    spreadLabel: "広がり（Spread）",
    colorLabel: "色",
    opacityLabel: "透明度",
    insetLabel: "内側の影（inset）",
    previewLabel: "プレビュー",
    codeLabel: "CSSコード",
    copyBtn: "コードをコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "スライダーを動かして距離、ぼかし、広がりを調整します。",
      "色と透明度を選択し、必要なら内側の影オプションをオンにします。",
      "プレビューを確認し、生成されたCSSコードをコピーしましょう。",
    ],
    faq: [
      { q: "複数の影を重ねることはできますか？", a: "現在のバージョンは1つの影のみ生成します。複数の影が必要な場合は生成されたコードをコピーした後、カンマで追加の影を直接つなげてください。" },
      { q: "透明度はどのように適用されますか？", a: "選択した色のHEX値をRGBAに変換し、透明度スライダーの値をアルファチャンネルに反映します。" },
    ],
    disclaimer: "生成されたコードは自由に使用でき、別途著作権の制限はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Box Shadow CSS",
    subtitle: "Ajusta la sombra con controles deslizantes para crear código CSS box-shadow y copiarlo al instante.",
    offsetXLabel: "Desplazamiento Horizontal (X)",
    offsetYLabel: "Desplazamiento Vertical (Y)",
    blurLabel: "Radio de Difuminado",
    spreadLabel: "Radio de Extensión",
    colorLabel: "Color",
    opacityLabel: "Opacidad",
    insetLabel: "Sombra Interior (inset)",
    previewLabel: "Vista Previa",
    codeLabel: "Código CSS",
    copyBtn: "Copiar Código",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Mueve los controles para ajustar desplazamiento, difuminado y extensión.",
      "Elige un color y opacidad, y activa la sombra interior si es necesario.",
      "Revisa la vista previa y copia el código CSS generado.",
    ],
    faq: [
      { q: "¿Puedo apilar varias sombras?", a: "Esta versión genera una sola sombra. Para varias sombras, copia el código generado y añade más, separadas por comas, tú mismo." },
      { q: "¿Cómo se aplica la opacidad?", a: "El color HEX elegido se convierte a RGBA, y el valor del control de opacidad se aplica al canal alfa." },
    ],
    disclaimer: "El código generado es de uso libre y no tiene restricciones de derechos de autor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
