export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  ageLabel: string;
  restingHrLabel: string;
  calculateBtn: string;
  resultLabel: string;
  maxHrLabel: string;
  bpmUnit: string;
  zoneVeryLight: string;
  zoneLight: string;
  zoneModerate: string;
  zoneHard: string;
  zoneMax: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "목표 심박수 구간 계산기",
    subtitle: "나이와 안정시 심박수를 입력해 운동 강도별 목표 심박수 구간을 계산합니다 (카보넨 공식).",
    ageLabel: "나이",
    restingHrLabel: "안정시 심박수 (bpm)",
    calculateBtn: "계산하기",
    resultLabel: "운동 강도별 목표 심박수 구간",
    maxHrLabel: "최대 심박수 (220 - 나이)",
    bpmUnit: "bpm",
    zoneVeryLight: "매우 가벼움 (50~60%) — 워밍업",
    zoneLight: "가벼움 (60~70%) — 지방 연소",
    zoneModerate: "중간 (70~80%) — 심폐 강화",
    zoneHard: "격렬함 (80~90%) — 고강도",
    zoneMax: "최대 (90~100%) — 최대 노력",
    disclaimer: "⚠️ 본 계산 결과는 일반 공식(카보넨 공식)에 기반한 참고용 추정치입니다. 심장 질환 등 기저질환이 있는 경우 운동 전 반드시 의사와 상담하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "나이를 입력합니다.",
      "안정시 심박수(아침에 일어나기 전 측정하는 것이 가장 정확합니다)를 입력합니다.",
      "'계산하기'를 눌러 운동 강도별 목표 심박수 구간을 확인하세요.",
    ],
    faq: [
      { q: "카보넨 공식이란 무엇인가요?", a: "카보넨 공식은 목표심박수 = (최대심박수 − 안정시심박수) × 운동강도(%) + 안정시심박수로 계산하며, 단순히 최대심박수의 %만 사용하는 방법보다 개인의 심혈관 상태를 더 잘 반영합니다." },
      { q: "어느 구간에서 운동해야 하나요?", a: "체지방 감량이 목표라면 지방 연소 구간(60~70%), 심폐 능력 향상이 목표라면 심폐 강화 구간(70~80%)이 일반적으로 권장됩니다. 목표에 맞게 선택하세요." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Heart Rate Zone Calculator",
    subtitle: "Enter your age and resting heart rate to calculate target heart rate zones by exercise intensity (Karvonen formula).",
    ageLabel: "Age",
    restingHrLabel: "Resting Heart Rate (bpm)",
    calculateBtn: "Calculate",
    resultLabel: "Target Heart Rate Zones by Intensity",
    maxHrLabel: "Max Heart Rate (220 - age)",
    bpmUnit: "bpm",
    zoneVeryLight: "Very Light (50-60%) — Warm-up",
    zoneLight: "Light (60-70%) — Fat Burn",
    zoneModerate: "Moderate (70-80%) — Cardio",
    zoneHard: "Hard (80-90%) — Hardcore",
    zoneMax: "Maximum (90-100%) — Peak Effort",
    disclaimer: "⚠️ This result is a reference estimate based on the general Karvonen formula. If you have heart conditions or other underlying health issues, consult a doctor before exercising.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your age.",
      "Enter your resting heart rate (most accurate when measured right after waking up).",
      "Click 'Calculate' to see target heart rate zones by exercise intensity.",
    ],
    faq: [
      { q: "What is the Karvonen formula?", a: "It calculates target HR = (max HR − resting HR) × intensity% + resting HR, which better reflects individual cardiovascular fitness than simply using a % of max HR alone." },
      { q: "Which zone should I exercise in?", a: "For fat loss, the fat-burn zone (60-70%) is commonly recommended; for cardio fitness, the 70-80% zone. Choose based on your goal." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "目標心拍数ゾーン計算機",
    subtitle: "年齢と安静時心拍数を入力して運動強度別の目標心拍数ゾーンを計算します（カルボーネン式）。",
    ageLabel: "年齢",
    restingHrLabel: "安静時心拍数 (bpm)",
    calculateBtn: "計算する",
    resultLabel: "運動強度別目標心拍数ゾーン",
    maxHrLabel: "最大心拍数（220 - 年齢）",
    bpmUnit: "bpm",
    zoneVeryLight: "非常に軽い（50〜60%）— ウォームアップ",
    zoneLight: "軽い（60〜70%）— 脂肪燃焼",
    zoneModerate: "中程度（70〜80%）— 心肺強化",
    zoneHard: "激しい（80〜90%）— 高強度",
    zoneMax: "最大（90〜100%）— 最大努力",
    disclaimer: "⚠️ この結果は一般的な公式（カルボーネン式）に基づく参考用の推定値です。心臓疾患など基礎疾患がある場合は運動前に必ず医師に相談してください。",
    howTitle: "使用方法",
    howSteps: [
      "年齢を入力します。",
      "安静時心拍数（起床直後に測定するのが最も正確です）を入力します。",
      "「計算する」を押して運動強度別の目標心拍数ゾーンを確認しましょう。",
    ],
    faq: [
      { q: "カルボーネン式とは何ですか？", a: "カルボーネン式は目標心拍数＝（最大心拍数−安静時心拍数）×運動強度(%)＋安静時心拍数で計算し、最大心拍数の%だけを使う方法より個人の心血管状態をよく反映します。" },
      { q: "どのゾーンで運動すべきですか？", a: "体脂肪減少が目標なら脂肪燃焼ゾーン（60〜70%）、心肺能力向上が目標なら心肺強化ゾーン（70〜80%）が一般的に推奨されます。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Zonas de Frecuencia Cardíaca",
    subtitle: "Introduce tu edad y frecuencia cardíaca en reposo para calcular zonas objetivo por intensidad (fórmula de Karvonen).",
    ageLabel: "Edad",
    restingHrLabel: "Frecuencia Cardíaca en Reposo (bpm)",
    calculateBtn: "Calcular",
    resultLabel: "Zonas Objetivo por Intensidad",
    maxHrLabel: "Frecuencia Cardíaca Máxima (220 - edad)",
    bpmUnit: "lpm",
    zoneVeryLight: "Muy Ligero (50-60%) — Calentamiento",
    zoneLight: "Ligero (60-70%) — Quema de Grasa",
    zoneModerate: "Moderado (70-80%) — Cardio",
    zoneHard: "Fuerte (80-90%) — Intenso",
    zoneMax: "Máximo (90-100%) — Esfuerzo Máximo",
    disclaimer: "⚠️ Este resultado es una estimación de referencia basada en la fórmula general de Karvonen. Consulta a un médico antes de hacer ejercicio si tienes afecciones cardíacas.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu edad.",
      "Introduce tu frecuencia cardíaca en reposo (más precisa al medirla justo al despertar).",
      "Haz clic en 'Calcular' para ver las zonas objetivo.",
    ],
    faq: [
      { q: "¿Qué es la fórmula de Karvonen?", a: "Calcula FC objetivo = (FC máx − FC reposo) × intensidad% + FC reposo, lo que refleja mejor la condición cardiovascular individual." },
      { q: "¿En qué zona debo ejercitarme?", a: "Para pérdida de grasa, se recomienda la zona de quema de grasa (60-70%); para condición cardiovascular, la zona 70-80%." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
