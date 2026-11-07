export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  exerciseLabel: string;
  weightLabel: string;
  durationLabel: string;
  calculateBtn: string;
  resultLabel: string;
  kcalUnit: string;
  metLabel: string;
  exerciseWalkSlow: string;
  exerciseWalkBrisk: string;
  exerciseRunning: string;
  exerciseCycling: string;
  exerciseSwimming: string;
  exerciseYoga: string;
  exerciseWeightTraining: string;
  exerciseHiit: string;
  exerciseJumpRope: string;
  exerciseHiking: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "운동 칼로리 소모량 계산기",
    subtitle: "운동 종류, 체중, 운동 시간을 입력해 MET 기반으로 소모되는 칼로리를 계산합니다.",
    exerciseLabel: "운동 종류",
    weightLabel: "체중 (kg)",
    durationLabel: "운동 시간 (분)",
    calculateBtn: "계산하기",
    resultLabel: "예상 소모 칼로리",
    kcalUnit: "kcal",
    metLabel: "MET 값",
    exerciseWalkSlow: "걷기 (천천히, 3km/h)",
    exerciseWalkBrisk: "걷기 (빠르게, 5.5km/h)",
    exerciseRunning: "달리기 (10km/h)",
    exerciseCycling: "자전거 타기 (보통)",
    exerciseSwimming: "수영 (자유형)",
    exerciseYoga: "요가",
    exerciseWeightTraining: "웨이트 트레이닝",
    exerciseHiit: "고강도 인터벌 (HIIT)",
    exerciseJumpRope: "줄넘기",
    exerciseHiking: "등산",
    howTitle: "사용 방법",
    howSteps: [
      "운동 종류를 선택합니다.",
      "체중과 운동 시간을 입력합니다.",
      "'계산하기'를 눌러 예상 소모 칼로리를 확인하세요.",
    ],
    faq: [
      { q: "MET이 무엇인가요?", a: "MET(Metabolic Equivalent of Task)은 운동 강도를 나타내는 단위로, 안정 시 대사량의 몇 배에 해당하는 에너지를 소모하는지를 나타냅니다. 소모 칼로리 = MET × 체중(kg) × 시간(h) 공식으로 계산합니다." },
      { q: "실제 소모 칼로리와 차이가 있을 수 있나요?", a: "네, MET 기반 계산은 평균적인 추정치이며 개인의 체력, 운동 강도, 신진대사에 따라 실제 소모량은 다를 수 있습니다." },
    ],
    disclaimer: "⚠️ 본 계산 결과는 MET 공식에 기반한 일반적인 참고용 추정치이며, 실제 소모 칼로리는 개인의 체력, 운동 강도, 신진대사에 따라 달라질 수 있습니다. 건강상의 문제가 있다면 운동 전 의사와 상담하세요.",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Exercise Calorie Calculator",
    subtitle: "Enter exercise type, weight, and duration to calculate calories burned using the MET method.",
    exerciseLabel: "Exercise Type",
    weightLabel: "Weight (kg)",
    durationLabel: "Duration (minutes)",
    calculateBtn: "Calculate",
    resultLabel: "Estimated Calories Burned",
    kcalUnit: "kcal",
    metLabel: "MET Value",
    exerciseWalkSlow: "Walking (slow, 3km/h)",
    exerciseWalkBrisk: "Walking (brisk, 5.5km/h)",
    exerciseRunning: "Running (10km/h)",
    exerciseCycling: "Cycling (moderate)",
    exerciseSwimming: "Swimming (freestyle)",
    exerciseYoga: "Yoga",
    exerciseWeightTraining: "Weight Training",
    exerciseHiit: "High-Intensity Interval Training (HIIT)",
    exerciseJumpRope: "Jump Rope",
    exerciseHiking: "Hiking",
    howTitle: "How to Use",
    howSteps: [
      "Select your exercise type.",
      "Enter your weight and exercise duration.",
      "Click 'Calculate' to see the estimated calories burned.",
    ],
    faq: [
      { q: "What is MET?", a: "MET (Metabolic Equivalent of Task) measures exercise intensity as a multiple of resting metabolic rate. Calories burned = MET × weight(kg) × time(h)." },
      { q: "Can actual calories burned differ?", a: "Yes, MET-based calculations are average estimates; actual burn varies with fitness level, intensity, and individual metabolism." },
    ],
    disclaimer: "⚠️ This result is a general reference estimate based on the MET formula. Actual calories burned can vary depending on individual fitness level, exercise intensity, and metabolism. If you have a health condition, consult a doctor before exercising.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "運動カロリー消耗量計算機",
    subtitle: "運動の種類、体重、運動時間を入力してMETベースで消耗するカロリーを計算します。",
    exerciseLabel: "運動の種類",
    weightLabel: "体重 (kg)",
    durationLabel: "運動時間 (分)",
    calculateBtn: "計算する",
    resultLabel: "予想消耗カロリー",
    kcalUnit: "kcal",
    metLabel: "MET値",
    exerciseWalkSlow: "歩行（ゆっくり、3km/h）",
    exerciseWalkBrisk: "歩行（速い、5.5km/h）",
    exerciseRunning: "ランニング（10km/h）",
    exerciseCycling: "サイクリング（普通）",
    exerciseSwimming: "水泳（自由形）",
    exerciseYoga: "ヨガ",
    exerciseWeightTraining: "ウェイトトレーニング",
    exerciseHiit: "高強度インターバル（HIIT）",
    exerciseJumpRope: "縄跳び",
    exerciseHiking: "登山",
    howTitle: "使用方法",
    howSteps: [
      "運動の種類を選択します。",
      "体重と運動時間を入力します。",
      "「計算する」を押して予想消耗カロリーを確認しましょう。",
    ],
    faq: [
      { q: "METとは何ですか？", a: "MET（Metabolic Equivalent of Task）は運動強度を示す単位で、安静時代謝量の何倍のエネルギーを消耗するかを表します。消耗カロリー＝MET×体重(kg)×時間(h)の式で計算します。" },
      { q: "実際の消耗カロリーと差が出ることがありますか？", a: "はい、METベースの計算は平均的な推定値であり、個人の体力、運動強度、代謝によって実際の消耗量は異なる場合があります。" },
    ],
    disclaimer: "⚠️ この結果はMET公式に基づく一般的な参考用の推定値であり、実際の消耗カロリーは個人の体力、運動強度、新陳代謝によって異なる場合があります。健康上の問題がある場合は運動前に医師にご相談ください。",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Calorías Quemadas en Ejercicio",
    subtitle: "Introduce el tipo de ejercicio, peso y duración para calcular las calorías quemadas usando el método MET.",
    exerciseLabel: "Tipo de Ejercicio",
    weightLabel: "Peso (kg)",
    durationLabel: "Duración (minutos)",
    calculateBtn: "Calcular",
    resultLabel: "Calorías Quemadas Estimadas",
    kcalUnit: "kcal",
    metLabel: "Valor MET",
    exerciseWalkSlow: "Caminar (lento, 3km/h)",
    exerciseWalkBrisk: "Caminar (rápido, 5.5km/h)",
    exerciseRunning: "Correr (10km/h)",
    exerciseCycling: "Ciclismo (moderado)",
    exerciseSwimming: "Natación (estilo libre)",
    exerciseYoga: "Yoga",
    exerciseWeightTraining: "Entrenamiento de Fuerza",
    exerciseHiit: "Entrenamiento de Intervalos de Alta Intensidad (HIIT)",
    exerciseJumpRope: "Saltar la Cuerda",
    exerciseHiking: "Senderismo",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona tu tipo de ejercicio.",
      "Introduce tu peso y duración del ejercicio.",
      "Haz clic en 'Calcular' para ver las calorías quemadas estimadas.",
    ],
    faq: [
      { q: "¿Qué es MET?", a: "MET (Equivalente Metabólico de Tarea) mide la intensidad del ejercicio como un múltiplo de la tasa metabólica en reposo. Calorías quemadas = MET × peso(kg) × tiempo(h)." },
      { q: "¿Puede diferir el consumo real de calorías?", a: "Sí, los cálculos basados en MET son estimaciones promedio; el consumo real varía según el nivel de condición física, intensidad y metabolismo individual." },
    ],
    disclaimer: "⚠️ Este resultado es una estimación de referencia general basada en la fórmula MET. Las calorías reales quemadas pueden variar según la condición física, intensidad del ejercicio y metabolismo. Si tienes alguna condición de salud, consulta a un médico antes de hacer ejercicio.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
