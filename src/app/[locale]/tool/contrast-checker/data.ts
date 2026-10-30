export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  foregroundLabel: string;
  backgroundLabel: string;
  ratioLabel: string;
  previewLabel: string;
  previewText: string;
  aaNormalLabel: string;
  aaLargeLabel: string;
  aaaNormalLabel: string;
  aaaLargeLabel: string;
  pass: string;
  fail: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "색상 대비 검사기 (WCAG)",
    subtitle: "전경색과 배경색의 명암 대비를 계산해 WCAG 접근성 기준 충족 여부를 확인합니다.",
    foregroundLabel: "전경색 (텍스트)",
    backgroundLabel: "배경색",
    ratioLabel: "대비율",
    previewLabel: "미리보기",
    previewText: "예시 텍스트입니다",
    aaNormalLabel: "AA (일반 텍스트, 4.5:1)",
    aaLargeLabel: "AA (큰 텍스트, 3:1)",
    aaaNormalLabel: "AAA (일반 텍스트, 7:1)",
    aaaLargeLabel: "AAA (큰 텍스트, 4.5:1)",
    pass: "통과",
    fail: "미달",
    howTitle: "사용 방법",
    howSteps: [
      "전경색(텍스트 색상)과 배경색을 선택합니다.",
      "계산된 대비율과 WCAG 기준 통과 여부를 확인합니다.",
      "미리보기에서 실제 가독성을 눈으로 확인하세요.",
    ],
    faq: [
      { q: "WCAG AA와 AAA의 차이는 무엇인가요?", a: "AA는 웹 접근성의 최소 권장 기준이며, AAA는 더 엄격한 기준으로 저시력 사용자를 포함해 더 넓은 범위의 사용자를 고려합니다." },
      { q: "큰 텍스트는 왜 기준이 더 낮은가요?", a: "글자가 클수록 작은 대비에서도 상대적으로 읽기 쉬워지기 때문에, WCAG는 18pt 이상(또는 14pt 굵은 글씨) 텍스트에 더 낮은 기준을 적용합니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Color Contrast Checker (WCAG)",
    subtitle: "Calculate the contrast ratio between foreground and background colors to check WCAG accessibility compliance.",
    foregroundLabel: "Foreground (Text)",
    backgroundLabel: "Background",
    ratioLabel: "Contrast Ratio",
    previewLabel: "Preview",
    previewText: "This is sample text",
    aaNormalLabel: "AA (Normal Text, 4.5:1)",
    aaLargeLabel: "AA (Large Text, 3:1)",
    aaaNormalLabel: "AAA (Normal Text, 7:1)",
    aaaLargeLabel: "AAA (Large Text, 4.5:1)",
    pass: "Pass",
    fail: "Fail",
    howTitle: "How to Use",
    howSteps: [
      "Pick a foreground (text) color and a background color.",
      "Check the calculated contrast ratio and WCAG pass/fail results.",
      "Use the preview to visually confirm readability.",
    ],
    faq: [
      { q: "What's the difference between WCAG AA and AAA?", a: "AA is the minimum recommended level for web accessibility, while AAA is a stricter standard that accounts for a wider range of users, including those with low vision." },
      { q: "Why is the threshold lower for large text?", a: "Larger text remains readable at lower contrast, so WCAG applies a lower threshold to text 18pt or larger (or 14pt bold)." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "色コントラスト検査ツール（WCAG）",
    subtitle: "前景色と背景色のコントラスト比を計算してWCAGアクセシビリティ基準の適合を確認します。",
    foregroundLabel: "前景色（テキスト）",
    backgroundLabel: "背景色",
    ratioLabel: "コントラスト比",
    previewLabel: "プレビュー",
    previewText: "これはサンプルテキストです",
    aaNormalLabel: "AA（通常テキスト、4.5:1）",
    aaLargeLabel: "AA（大きいテキスト、3:1）",
    aaaNormalLabel: "AAA（通常テキスト、7:1）",
    aaaLargeLabel: "AAA（大きいテキスト、4.5:1）",
    pass: "合格",
    fail: "不合格",
    howTitle: "使用方法",
    howSteps: [
      "前景色（テキストの色）と背景色を選択します。",
      "計算されたコントラスト比とWCAG基準の合否を確認します。",
      "プレビューで実際の読みやすさを目で確認しましょう。",
    ],
    faq: [
      { q: "WCAG AAとAAAの違いは何ですか？", a: "AAはWebアクセシビリティの最低推奨基準であり、AAAはより厳格な基準で、弱視ユーザーを含むより広い範囲のユーザーを考慮します。" },
      { q: "大きいテキストの基準が低いのはなぜですか？", a: "文字が大きいほど低いコントラストでも比較的読みやすくなるため、WCAGは18pt以上（または14pt太字）のテキストに低い基準を適用します。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Verificador de Contraste de Color (WCAG)",
    subtitle: "Calcula la relación de contraste entre el color de primer plano y de fondo para verificar el cumplimiento de WCAG.",
    foregroundLabel: "Primer Plano (Texto)",
    backgroundLabel: "Fondo",
    ratioLabel: "Relación de Contraste",
    previewLabel: "Vista Previa",
    previewText: "Este es un texto de ejemplo",
    aaNormalLabel: "AA (Texto Normal, 4.5:1)",
    aaLargeLabel: "AA (Texto Grande, 3:1)",
    aaaNormalLabel: "AAA (Texto Normal, 7:1)",
    aaaLargeLabel: "AAA (Texto Grande, 4.5:1)",
    pass: "Aprobado",
    fail: "No Aprobado",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige un color de primer plano (texto) y un color de fondo.",
      "Revisa la relación de contraste calculada y los resultados de WCAG.",
      "Usa la vista previa para confirmar visualmente la legibilidad.",
    ],
    faq: [
      { q: "¿Cuál es la diferencia entre WCAG AA y AAA?", a: "AA es el nivel mínimo recomendado para accesibilidad web, mientras que AAA es un estándar más estricto que considera una gama más amplia de usuarios, incluidos los de baja visión." },
      { q: "¿Por qué el umbral es menor para texto grande?", a: "El texto grande sigue siendo legible con menor contraste, por lo que WCAG aplica un umbral más bajo a texto de 18pt o más (o 14pt en negrita)." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
