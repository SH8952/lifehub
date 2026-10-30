export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  distanceLabel: string;
  distanceUnitKm: string;
  distanceUnitMi: string;
  hoursLabel: string;
  minutesLabel: string;
  secondsLabel: string;
  paceResultLabel: string;
  paceUnitKm: string;
  paceUnitMi: string;
  predictTitle: string;
  predictDistanceCol: string;
  predictTimeCol: string;
  race5k: string;
  race10k: string;
  raceHalf: string;
  raceFull: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "러닝 페이스·완주시간 예측 계산기",
    subtitle: "거리와 시간을 입력하면 페이스를 계산하고, 다른 거리의 예상 완주시간도 확인할 수 있습니다.",
    distanceLabel: "거리",
    distanceUnitKm: "km",
    distanceUnitMi: "mi",
    hoursLabel: "시간",
    minutesLabel: "분",
    secondsLabel: "초",
    paceResultLabel: "페이스",
    paceUnitKm: "분/km",
    paceUnitMi: "분/mi",
    predictTitle: "다른 거리 예상 완주시간",
    predictDistanceCol: "거리",
    predictTimeCol: "예상 시간",
    race5k: "5km",
    race10k: "10km",
    raceHalf: "하프마라톤 (21.1km)",
    raceFull: "풀마라톤 (42.2km)",
    howTitle: "사용 방법",
    howSteps: [
      "달린 거리를 입력합니다.",
      "걸린 시간(시/분/초)을 입력합니다.",
      "계산된 페이스(분/km)를 확인합니다.",
      "같은 페이스를 기준으로 한 다른 거리의 예상 완주시간을 확인합니다.",
    ],
    faq: [
      { q: "예상 완주시간은 어떻게 계산되나요?", a: "Riegel 공식(예상시간 = 기존시간 × (목표거리÷기존거리)^1.06)을 사용합니다. 거리가 길어질수록 페이스가 자연스럽게 느려지는 일반적인 경향을 반영한 공식입니다." },
      { q: "이 예측이 항상 정확한가요?", a: "이 공식은 평균적인 체력 저하 패턴을 반영한 통계적 추정이며, 개인의 훈련 상태·컨디션·날씨 등에 따라 실제 완주시간과 차이가 있을 수 있습니다." },
    ],
    disclaimer: "이 계산기는 Riegel 공식을 적용한 참고용 예측이며, 실제 완주시간과 차이가 있을 수 있습니다.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Running Pace & Race Time Predictor",
    subtitle: "Enter distance and time to calculate your pace, and predict your finish time for other race distances.",
    distanceLabel: "Distance",
    distanceUnitKm: "km",
    distanceUnitMi: "mi",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
    paceResultLabel: "Pace",
    paceUnitKm: "min/km",
    paceUnitMi: "min/mi",
    predictTitle: "Predicted Finish Time for Other Distances",
    predictDistanceCol: "Distance",
    predictTimeCol: "Predicted Time",
    race5k: "5K",
    race10k: "10K",
    raceHalf: "Half Marathon (21.1km)",
    raceFull: "Full Marathon (42.2km)",
    howTitle: "How to Use",
    howSteps: [
      "Enter the distance you ran.",
      "Enter the time it took (hours/minutes/seconds).",
      "Check the calculated pace (min/km).",
      "Check predicted finish times for other distances based on the same effort level.",
    ],
    faq: [
      { q: "How is the predicted finish time calculated?", a: "This uses the Riegel formula (predicted time = known time × (target distance ÷ known distance)^1.06), which reflects the typical natural pace slowdown as distance increases." },
      { q: "Is this prediction always accurate?", a: "This formula is a statistical estimate based on average endurance decline patterns; actual finish time may vary based on individual training, condition, and weather." },
    ],
    disclaimer: "This calculator applies the Riegel formula as a reference prediction; actual finish times may differ.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "ランニングペース・完走時間予測計算機",
    subtitle: "距離と時間を入力してペースを計算し、他の距離の予想完走時間も確認できます。",
    distanceLabel: "距離",
    distanceUnitKm: "km",
    distanceUnitMi: "mi",
    hoursLabel: "時間",
    minutesLabel: "分",
    secondsLabel: "秒",
    paceResultLabel: "ペース",
    paceUnitKm: "分/km",
    paceUnitMi: "分/mi",
    predictTitle: "他の距離の予想完走時間",
    predictDistanceCol: "距離",
    predictTimeCol: "予想時間",
    race5k: "5km",
    race10k: "10km",
    raceHalf: "ハーフマラソン (21.1km)",
    raceFull: "フルマラソン (42.2km)",
    howTitle: "使用方法",
    howSteps: [
      "走った距離を入力します。",
      "かかった時間（時/分/秒）を入力します。",
      "計算されたペース（分/km）を確認します。",
      "同じ努力レベルを基準にした他の距離の予想完走時間を確認します。",
    ],
    faq: [
      { q: "予想完走時間はどのように計算されますか？", a: "Riegel公式（予想時間 = 既知の時間 × (目標距離÷既知の距離)^1.06）を使用します。距離が長くなるほどペースが自然に落ちる一般的な傾向を反映した公式です。" },
      { q: "この予測は常に正確ですか？", a: "この公式は平均的な体力低下パターンを反映した統計的推定であり、個人のトレーニング状態・コンディション・天候などによって実際の完走時間と差が出る場合があります。" },
    ],
    disclaimer: "この計算機はRiegel公式を適用した参考用の予測であり、実際の完走時間と異なる場合があります。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Predictor de Ritmo y Tiempo de Carrera",
    subtitle: "Ingresa distancia y tiempo para calcular tu ritmo y predecir tu tiempo de llegada para otras distancias.",
    distanceLabel: "Distancia",
    distanceUnitKm: "km",
    distanceUnitMi: "mi",
    hoursLabel: "Horas",
    minutesLabel: "Minutos",
    secondsLabel: "Segundos",
    paceResultLabel: "Ritmo",
    paceUnitKm: "min/km",
    paceUnitMi: "min/mi",
    predictTitle: "Tiempo de Llegada Predicho para Otras Distancias",
    predictDistanceCol: "Distancia",
    predictTimeCol: "Tiempo Predicho",
    race5k: "5K",
    race10k: "10K",
    raceHalf: "Media Maratón (21.1km)",
    raceFull: "Maratón Completo (42.2km)",
    howTitle: "Cómo Usar",
    howSteps: [
      "Ingresa la distancia que corriste.",
      "Ingresa el tiempo que tomó (horas/minutos/segundos).",
      "Revisa el ritmo calculado (min/km).",
      "Revisa los tiempos de llegada predichos para otras distancias según el mismo nivel de esfuerzo.",
    ],
    faq: [
      { q: "¿Cómo se calcula el tiempo de llegada predicho?", a: "Esto usa la fórmula de Riegel (tiempo predicho = tiempo conocido × (distancia objetivo ÷ distancia conocida)^1.06), que refleja la desaceleración natural típica del ritmo a medida que aumenta la distancia." },
      { q: "¿Es esta predicción siempre precisa?", a: "Esta fórmula es una estimación estadística basada en patrones promedio de disminución de resistencia; el tiempo real de llegada puede variar según el entrenamiento individual, condición y clima." },
    ],
    disclaimer: "Esta calculadora aplica la fórmula de Riegel como predicción de referencia; los tiempos reales pueden diferir.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
