export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  typeLabel: string;
  typeBounce: string;
  typeFade: string;
  typeSpin: string;
  typePulse: string;
  typeShake: string;
  durationLabel: string;
  infiniteLabel: string;
  previewLabel: string;
  codeLabel: string;
  copyBtn: string;
  copied: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "CSS 애니메이션 생성기",
    subtitle: "애니메이션 종류와 속도를 선택해 실시간으로 미리보고 CSS 코드를 복사하세요.",
    typeLabel: "애니메이션 종류",
    typeBounce: "바운스 (Bounce)",
    typeFade: "페이드 (Fade)",
    typeSpin: "회전 (Spin)",
    typePulse: "펄스 (Pulse)",
    typeShake: "흔들림 (Shake)",
    durationLabel: "지속 시간 (초)",
    infiniteLabel: "무한 반복",
    previewLabel: "미리보기",
    codeLabel: "CSS 코드",
    copyBtn: "코드 복사",
    copied: "복사됨!",
    howTitle: "사용 방법",
    howSteps: [
      "애니메이션 종류를 선택합니다.",
      "지속 시간과 무한 반복 여부를 설정합니다.",
      "미리보기를 확인하고 생성된 @keyframes CSS 코드를 복사하세요.",
    ],
    faq: [
      { q: "생성된 코드를 어떻게 사용하나요?", a: "복사한 @keyframes 코드를 CSS 파일에 추가하고, 애니메이션을 적용할 요소에 animation-name으로 지정하면 바로 사용할 수 있습니다." },
      { q: "성능에 영향을 주나요?", a: "transform과 opacity 속성 위주로 구성되어 있어 대부분의 브라우저에서 GPU 가속을 받아 부드럽게 동작합니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "CSS Animation Generator",
    subtitle: "Pick an animation type and speed to preview it live and copy the CSS code.",
    typeLabel: "Animation Type",
    typeBounce: "Bounce",
    typeFade: "Fade",
    typeSpin: "Spin",
    typePulse: "Pulse",
    typeShake: "Shake",
    durationLabel: "Duration (seconds)",
    infiniteLabel: "Infinite Loop",
    previewLabel: "Preview",
    codeLabel: "CSS Code",
    copyBtn: "Copy Code",
    copied: "Copied!",
    howTitle: "How to Use",
    howSteps: [
      "Choose an animation type.",
      "Set the duration and whether it loops infinitely.",
      "Check the preview and copy the generated @keyframes CSS code.",
    ],
    faq: [
      { q: "How do I use the generated code?", a: "Add the copied @keyframes code to your CSS file and reference it with animation-name on the element you want to animate." },
      { q: "Does it affect performance?", a: "It's built mostly with transform and opacity, which are GPU-accelerated in most browsers and run smoothly." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "CSSアニメーション生成ツール",
    subtitle: "アニメーションの種類と速度を選んでリアルタイムでプレビューし、CSSコードをコピーしましょう。",
    typeLabel: "アニメーションの種類",
    typeBounce: "バウンス（Bounce）",
    typeFade: "フェード（Fade）",
    typeSpin: "回転（Spin）",
    typePulse: "パルス（Pulse）",
    typeShake: "シェイク（Shake）",
    durationLabel: "持続時間（秒）",
    infiniteLabel: "無限ループ",
    previewLabel: "プレビュー",
    codeLabel: "CSSコード",
    copyBtn: "コードをコピー",
    copied: "コピーしました！",
    howTitle: "使用方法",
    howSteps: [
      "アニメーションの種類を選択します。",
      "持続時間と無限ループの有無を設定します。",
      "プレビューを確認し、生成された@keyframes CSSコードをコピーしましょう。",
    ],
    faq: [
      { q: "生成されたコードはどう使いますか？", a: "コピーした@keyframesコードをCSSファイルに追加し、アニメーションを適用する要素にanimation-nameで指定すればすぐに使用できます。" },
      { q: "パフォーマンスに影響しますか？", a: "transformとopacityプロパティを中心に構成されているため、ほとんどのブラウザでGPUアクセラレーションを受けて滑らかに動作します。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Generador de Animaciones CSS",
    subtitle: "Elige un tipo de animación y velocidad para previsualizarla en vivo y copiar el código CSS.",
    typeLabel: "Tipo de Animación",
    typeBounce: "Rebote (Bounce)",
    typeFade: "Desvanecer (Fade)",
    typeSpin: "Girar (Spin)",
    typePulse: "Pulso (Pulse)",
    typeShake: "Sacudir (Shake)",
    durationLabel: "Duración (segundos)",
    infiniteLabel: "Bucle Infinito",
    previewLabel: "Vista Previa",
    codeLabel: "Código CSS",
    copyBtn: "Copiar Código",
    copied: "¡Copiado!",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige un tipo de animación.",
      "Define la duración y si se repite infinitamente.",
      "Revisa la vista previa y copia el código CSS @keyframes generado.",
    ],
    faq: [
      { q: "¿Cómo uso el código generado?", a: "Añade el código @keyframes copiado a tu archivo CSS y refierelo con animation-name en el elemento que deseas animar." },
      { q: "¿Afecta el rendimiento?", a: "Está construido principalmente con transform y opacity, que se aceleran por GPU en la mayoría de navegadores y funcionan de forma fluida." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
