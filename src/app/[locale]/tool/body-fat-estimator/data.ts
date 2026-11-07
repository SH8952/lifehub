export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  genderLabel: string;
  genderMale: string;
  genderFemale: string;
  heightLabel: string;
  neckLabel: string;
  waistLabel: string;
  hipLabel: string;
  calculateBtn: string;
  resultLabel: string;
  categoryLabel: string;
  categoryEssential: string;
  categoryAthletic: string;
  categoryFit: string;
  categoryAverage: string;
  categoryHigh: string;
  invalidInputMsg: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "체지방률 추정 계산기 (둘레 기반)",
    subtitle: "목, 허리(여성은 엉덩이 포함) 둘레와 키를 입력해 미 해군 공식 기반 체지방률을 추정합니다.",
    genderLabel: "성별",
    genderMale: "남성",
    genderFemale: "여성",
    heightLabel: "키 (cm)",
    neckLabel: "목 둘레 (cm)",
    waistLabel: "허리 둘레 (cm)",
    hipLabel: "엉덩이 둘레 (cm, 여성만)",
    calculateBtn: "계산하기",
    resultLabel: "추정 체지방률",
    categoryLabel: "체형 구분",
    categoryEssential: "필수 지방",
    categoryAthletic: "운동선수형",
    categoryFit: "표준(건강)",
    categoryAverage: "평균",
    categoryHigh: "높음",
    invalidInputMsg: "⚠️ 허리 둘레가 목 둘레보다 커야 정확히 계산됩니다. 입력값을 확인해주세요.",
    disclaimer: "⚠️ 본 계산 결과는 미 해군 둘레 측정 공식에 기반한 참고용 추정치이며, 체성분 분석기나 의료 검사보다 정확도가 낮을 수 있습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "성별을 선택합니다.",
      "키, 목 둘레, 허리 둘레(여성은 엉덩이 둘레도)를 입력합니다.",
      "'계산하기'를 눌러 추정 체지방률과 체형 구분을 확인하세요.",
    ],
    faq: [
      { q: "미 해군 공식이란 무엇인가요?", a: "허리·목 둘레와 키(여성은 엉덩이 둘레 포함)만으로 체지방률을 추정하는 공식으로, 미 해군에서 신체 검사에 사용한 방법입니다. 특수 장비 없이 줄자만으로 측정할 수 있는 장점이 있습니다." },
      { q: "체성분 분석기 결과와 차이가 있나요?", a: "네, 둘레 기반 추정은 체성분 분석기(인바디 등)나 DEXA 스캔보다 정확도가 낮을 수 있습니다. 대략적인 참고용으로 활용하세요." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Body Fat Estimator (Circumference-Based)",
    subtitle: "Enter neck, waist (and hip for women) circumference and height to estimate body fat percentage using the U.S. Navy method.",
    genderLabel: "Gender",
    genderMale: "Male",
    genderFemale: "Female",
    heightLabel: "Height (cm)",
    neckLabel: "Neck Circumference (cm)",
    waistLabel: "Waist Circumference (cm)",
    hipLabel: "Hip Circumference (cm, women only)",
    calculateBtn: "Calculate",
    resultLabel: "Estimated Body Fat Percentage",
    categoryLabel: "Category",
    categoryEssential: "Essential Fat",
    categoryAthletic: "Athletic",
    categoryFit: "Fit",
    categoryAverage: "Average",
    categoryHigh: "High",
    invalidInputMsg: "⚠️ Waist circumference must be larger than neck circumference for an accurate result. Please check your inputs.",
    disclaimer: "⚠️ This result is a reference estimate based on the U.S. Navy circumference method and may be less accurate than a body composition scanner or medical test.",
    howTitle: "How to Use",
    howSteps: [
      "Select your gender.",
      "Enter height, neck circumference, and waist circumference (plus hip for women).",
      "Click 'Calculate' to see your estimated body fat percentage and category.",
    ],
    faq: [
      { q: "What is the U.S. Navy method?", a: "It estimates body fat percentage using only waist, neck, and height (plus hip for women) circumferences — a method used by the U.S. Navy that requires only a tape measure." },
      { q: "Does it differ from body composition scanner results?", a: "Yes, circumference-based estimates are typically less accurate than scanners (like InBody) or DEXA scans. Use this as a rough reference." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "体脂肪率推定計算機（周囲ベース）",
    subtitle: "首、腰（女性はヒップを含む）の周囲と身長を入力して米海軍式に基づく体脂肪率を推定します。",
    genderLabel: "性別",
    genderMale: "男性",
    genderFemale: "女性",
    heightLabel: "身長 (cm)",
    neckLabel: "首周り (cm)",
    waistLabel: "腰周り (cm)",
    hipLabel: "ヒップ周り (cm、女性のみ)",
    calculateBtn: "計算する",
    resultLabel: "推定体脂肪率",
    categoryLabel: "体型区分",
    categoryEssential: "必須脂肪",
    categoryAthletic: "アスリート型",
    categoryFit: "標準（健康）",
    categoryAverage: "平均",
    categoryHigh: "高い",
    invalidInputMsg: "⚠️ 腰周りが首周りより大きくないと正確に計算できません。入力値を確認してください。",
    disclaimer: "⚠️ この結果は米海軍の周囲測定式に基づく参考用の推定値であり、体組成分析機や医療検査より精度が低い場合があります。",
    howTitle: "使用方法",
    howSteps: [
      "性別を選択します。",
      "身長、首周り、腰周り（女性はヒップ周りも）を入力します。",
      "「計算する」を押して推定体脂肪率と体型区分を確認しましょう。",
    ],
    faq: [
      { q: "米海軍式とは何ですか？", a: "腰、首、身長（女性はヒップも）の周囲のみで体脂肪率を推定する式で、米海軍が身体検査に使用した方法です。特殊な機器なしでメジャーだけで測定できる利点があります。" },
      { q: "体組成分析機の結果と差がありますか？", a: "はい、周囲ベースの推定は体組成分析機（InBodyなど）やDEXAスキャンより精度が低い場合があります。おおよその参考用として活用してください。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Estimador de Grasa Corporal (Basado en Circunferencia)",
    subtitle: "Introduce las circunferencias de cuello, cintura (y cadera para mujeres) y altura para estimar el % de grasa corporal con el método de la Marina de EE.UU.",
    genderLabel: "Sexo",
    genderMale: "Hombre",
    genderFemale: "Mujer",
    heightLabel: "Altura (cm)",
    neckLabel: "Circunferencia del Cuello (cm)",
    waistLabel: "Circunferencia de la Cintura (cm)",
    hipLabel: "Circunferencia de la Cadera (cm, solo mujeres)",
    calculateBtn: "Calcular",
    resultLabel: "Porcentaje de Grasa Corporal Estimado",
    categoryLabel: "Categoría",
    categoryEssential: "Grasa Esencial",
    categoryAthletic: "Atlético",
    categoryFit: "En Forma",
    categoryAverage: "Promedio",
    categoryHigh: "Alto",
    invalidInputMsg: "⚠️ La circunferencia de la cintura debe ser mayor que la del cuello. Verifica tus valores.",
    disclaimer: "⚠️ Este resultado es una estimación de referencia basada en el método de circunferencia de la Marina de EE.UU. y puede ser menos preciso que un escáner de composición corporal.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona tu sexo.",
      "Introduce altura, circunferencia del cuello y cintura (más cadera para mujeres).",
      "Haz clic en 'Calcular' para ver tu % de grasa corporal estimado.",
    ],
    faq: [
      { q: "¿Qué es el método de la Marina de EE.UU.?", a: "Estima el % de grasa corporal usando solo las circunferencias de cintura, cuello y altura (más cadera para mujeres) — un método que solo requiere una cinta métrica." },
      { q: "¿Difiere de los resultados de un escáner de composición corporal?", a: "Sí, las estimaciones basadas en circunferencia suelen ser menos precisas que escáneres (como InBody) o DEXA. Úsalo como referencia aproximada." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
