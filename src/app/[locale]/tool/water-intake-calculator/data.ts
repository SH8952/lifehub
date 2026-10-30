export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  weightLabel: string;
  activityLabel: string;
  activityLow: string;
  activityMedium: string;
  activityHigh: string;
  calculateBtn: string;
  resultLabel: string;
  mlUnit: string;
  cupsLabel: string;
  cupsUnit: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "물 섭취량 계산기",
    subtitle: "체중과 활동량을 입력해 하루에 마시면 좋은 적정 물 섭취량을 계산합니다.",
    weightLabel: "체중 (kg)",
    activityLabel: "활동 수준",
    activityLow: "낮음 (주로 앉아서 생활)",
    activityMedium: "보통 (가벼운 운동 주 1~3회)",
    activityHigh: "높음 (격렬한 운동 또는 육체노동)",
    calculateBtn: "계산하기",
    resultLabel: "권장 하루 물 섭취량",
    mlUnit: "ml",
    cupsLabel: "약 500ml 컵 기준",
    cupsUnit: "잔",
    disclaimer: "⚠️ 본 계산 결과는 일반적인 공식(체중 1kg당 30~35ml)에 기반한 참고용 추정치입니다. 신장 질환 등 수분 제한이 필요한 경우 반드시 의사와 상담하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "체중을 입력합니다.",
      "평소 활동 수준을 선택합니다.",
      "'계산하기'를 눌러 하루 권장 물 섭취량을 확인하세요.",
    ],
    faq: [
      { q: "물을 너무 많이 마시면 안 좋나요?", a: "과도한 수분 섭취는 저나트륨혈증을 유발할 수 있습니다. 일반적인 권장량 범위 내에서 마시고, 목이 마를 때 마시는 것이 가장 자연스러운 방법입니다." },
      { q: "커피나 차도 수분 섭취에 포함되나요?", a: "카페인 음료도 수분 공급에 일부 기여하지만, 이용원 효과가 있어 순수한 물로 섭취하는 것이 더 효과적입니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Water Intake Calculator",
    subtitle: "Enter your weight and activity level to calculate your recommended daily water intake.",
    weightLabel: "Weight (kg)",
    activityLabel: "Activity Level",
    activityLow: "Low (mostly sedentary)",
    activityMedium: "Moderate (light exercise 1-3x/week)",
    activityHigh: "High (intense exercise or physical labor)",
    calculateBtn: "Calculate",
    resultLabel: "Recommended Daily Water Intake",
    mlUnit: "ml",
    cupsLabel: "In ~500ml cups",
    cupsUnit: "cups",
    disclaimer: "⚠️ This result is a reference estimate based on the general formula (30-35ml per kg of body weight). If you have kidney disease or need fluid restriction, consult a doctor.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your weight.",
      "Select your usual activity level.",
      "Click 'Calculate' to see your recommended daily water intake.",
    ],
    faq: [
      { q: "Is drinking too much water bad?", a: "Excessive water intake can cause hyponatremia (low sodium). Stick within general recommended ranges and drink when thirsty." },
      { q: "Do coffee and tea count toward water intake?", a: "Caffeinated drinks do contribute some hydration, but their mild diuretic effect makes plain water more effective overall." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "水分摂取量計算機",
    subtitle: "体重と活動量を入力して1日に飲むとよい適正な水分摂取量を計算します。",
    weightLabel: "体重 (kg)",
    activityLabel: "活動レベル",
    activityLow: "低い（主に座って生活）",
    activityMedium: "普通（軽い運動週1〜3回）",
    activityHigh: "高い（激しい運動または肉体労働）",
    calculateBtn: "計算する",
    resultLabel: "推奨1日水分摂取量",
    mlUnit: "ml",
    cupsLabel: "約500mlカップ基準",
    cupsUnit: "杯",
    disclaimer: "⚠️ この結果は一般的な公式（体重1kgあたり30〜35ml）に基づく参考用の推定値です。腎臓疾患など水分制限が必要な場合は必ず医師に相談してください。",
    howTitle: "使用方法",
    howSteps: [
      "体重を入力します。",
      "普段の活動レベルを選択します。",
      "「計算する」を押して1日の推奨水分摂取量を確認しましょう。",
    ],
    faq: [
      { q: "水を飲み過ぎるのは良くないですか？", a: "過度の水分摂取は低ナトリウム血症を引き起こす可能性があります。一般的な推奨範囲内で飲み、喉が渇いたときに飲むのが最も自然な方法です。" },
      { q: "コーヒーやお茶も水分摂取に含まれますか？", a: "カフェイン飲料も水分補給に一部貢献しますが、利尿効果があるため純粋な水で摂取する方が効果的です。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Ingesta de Agua",
    subtitle: "Introduce tu peso y nivel de actividad para calcular tu ingesta diaria de agua recomendada.",
    weightLabel: "Peso (kg)",
    activityLabel: "Nivel de Actividad",
    activityLow: "Bajo (mayormente sedentario)",
    activityMedium: "Moderado (ejercicio ligero 1-3x/semana)",
    activityHigh: "Alto (ejercicio intenso o trabajo físico)",
    calculateBtn: "Calcular",
    resultLabel: "Ingesta Diaria de Agua Recomendada",
    mlUnit: "ml",
    cupsLabel: "En vasos de ~500ml",
    cupsUnit: "vasos",
    disclaimer: "⚠️ Este resultado es una estimación de referencia basada en la fórmula general (30-35ml por kg de peso corporal). Consulta a un médico si tienes restricción de líquidos.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu peso.",
      "Selecciona tu nivel de actividad habitual.",
      "Haz clic en 'Calcular' para ver tu ingesta diaria de agua recomendada.",
    ],
    faq: [
      { q: "¿Es malo beber demasiada agua?", a: "Una ingesta excesiva de agua puede causar hiponatremia. Mantente dentro de los rangos recomendados generales y bebe cuando tengas sed." },
      { q: "¿El café y el té cuentan para la ingesta de agua?", a: "Las bebidas con cafeína contribuyen algo a la hidratación, pero su efecto diurético leve hace que el agua pura sea más efectiva." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
