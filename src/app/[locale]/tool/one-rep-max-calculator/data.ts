export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  weightLabel: string;
  repsLabel: string;
  unitLabel: string;
  unitKg: string;
  unitLb: string;
  resultLabel: string;
  tableTitle: string;
  percentCol: string;
  weightCol: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "1RM(최대 중량) 계산기",
    subtitle: "들어올린 무게와 반복 횟수로 1회만 들 수 있는 최대 중량(1RM)을 추정하세요.",
    weightLabel: "들어올린 무게",
    repsLabel: "반복 횟수 (reps)",
    unitLabel: "단위",
    unitKg: "kg",
    unitLb: "lb",
    resultLabel: "추정 1RM",
    tableTitle: "퍼센트별 목표 중량",
    percentCol: "%1RM",
    weightCol: "중량",
    howTitle: "사용 방법",
    howSteps: [
      "최근에 들어올린 무게를 입력합니다.",
      "그 무게로 수행한 반복 횟수(1~12회 권장)를 입력합니다.",
      "단위(kg/lb)를 선택합니다.",
      "추정된 1RM과 퍼센트별 목표 중량표를 확인합니다.",
    ],
    faq: [
      { q: "1RM 추정 공식은 무엇인가요?", a: "Epley 공식(1RM = 무게 × (1 + 반복수 ÷ 30))을 사용합니다. 반복 횟수가 많을수록(10회 이상) 추정 오차가 커질 수 있어 1~10회 사이의 데이터로 계산하는 것이 더 정확합니다." },
      { q: "실제로 1RM을 테스트해봐야 하나요?", a: "이 계산기는 추정치이며, 실제 1RM 테스트는 부상 위험이 있어 충분한 준비운동과 숙련자의 보조 없이 진행하는 것은 권장되지 않습니다. 훈련 계획에는 추정치를 활용하는 것이 더 안전합니다." },
    ],
    disclaimer: "이 계산기는 Epley 공식을 적용한 추정치이며, 실제 최대 중량과 차이가 있을 수 있습니다. 중량 운동 시 안전에 유의하세요.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "One-Rep Max (1RM) Calculator",
    subtitle: "Estimate your one-rep max from the weight you lifted and how many reps you completed.",
    weightLabel: "Weight Lifted",
    repsLabel: "Reps Completed",
    unitLabel: "Unit",
    unitKg: "kg",
    unitLb: "lb",
    resultLabel: "Estimated 1RM",
    tableTitle: "Target Weight by Percentage",
    percentCol: "%1RM",
    weightCol: "Weight",
    howTitle: "How to Use",
    howSteps: [
      "Enter the weight you recently lifted.",
      "Enter the number of reps you completed with that weight (1–12 recommended).",
      "Select the unit (kg/lb).",
      "Check your estimated 1RM and the percentage-based target weight table.",
    ],
    faq: [
      { q: "What formula estimates 1RM?", a: "This uses the Epley formula (1RM = weight × (1 + reps ÷ 30)). Estimation error tends to grow with higher rep counts (10+), so using data from 1–10 reps gives more accurate results." },
      { q: "Should I actually test my true 1RM?", a: "This calculator gives an estimate. Testing an actual 1RM carries injury risk and isn't recommended without proper warm-up and an experienced spotter. Using the estimate for training planning is safer." },
    ],
    disclaimer: "This calculator uses the Epley formula as an estimate; actual max may differ. Always prioritize safety when lifting heavy weights.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "1RM（最大挙上重量）計算機",
    subtitle: "挙げた重量と反復回数から1回の最大挙上重量（1RM）を推定します。",
    weightLabel: "挙げた重量",
    repsLabel: "反復回数 (reps)",
    unitLabel: "単位",
    unitKg: "kg",
    unitLb: "lb",
    resultLabel: "推定1RM",
    tableTitle: "パーセント別目標重量",
    percentCol: "%1RM",
    weightCol: "重量",
    howTitle: "使用方法",
    howSteps: [
      "最近挙げた重量を入力します。",
      "その重量で行った反復回数（1〜12回推奨）を入力します。",
      "単位（kg/lb）を選びます。",
      "推定された1RMとパーセント別目標重量表を確認します。",
    ],
    faq: [
      { q: "1RM推定公式は何ですか？", a: "Epley公式（1RM = 重量 × (1 + 反復数 ÷ 30)）を使用します。反復回数が多いほど（10回以上）推定誤差が大きくなる可能性があり、1〜10回のデータで計算するほうがより正確です。" },
      { q: "実際に1RMをテストするべきですか？", a: "この計算機は推定値であり、実際の1RMテストは怪我のリスクがあるため、十分なウォームアップと熟練者の補助なしでは推奨されません。トレーニング計画には推定値を活用する方が安全です。" },
    ],
    disclaimer: "この計算機はEpley公式を適用した推定値であり、実際の最大重量と異なる場合があります。重量トレーニング時は安全に注意してください。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Calculadora de Repetición Máxima (1RM)",
    subtitle: "Estima tu repetición máxima a partir del peso que levantaste y cuántas repeticiones completaste.",
    weightLabel: "Peso Levantado",
    repsLabel: "Repeticiones Completadas",
    unitLabel: "Unidad",
    unitKg: "kg",
    unitLb: "lb",
    resultLabel: "1RM Estimado",
    tableTitle: "Peso Objetivo por Porcentaje",
    percentCol: "%1RM",
    weightCol: "Peso",
    howTitle: "Cómo Usar",
    howSteps: [
      "Ingresa el peso que levantaste recientemente.",
      "Ingresa el número de repeticiones completadas con ese peso (1–12 recomendado).",
      "Selecciona la unidad (kg/lb).",
      "Revisa tu 1RM estimado y la tabla de peso objetivo por porcentaje.",
    ],
    faq: [
      { q: "¿Qué fórmula estima el 1RM?", a: "Esto usa la fórmula de Epley (1RM = peso × (1 + repeticiones ÷ 30)). El error de estimación tiende a crecer con más repeticiones (10+), así que usar datos de 1–10 repeticiones da resultados más precisos." },
      { q: "¿Debería probar mi 1RM real?", a: "Esta calculadora da una estimación. Probar un 1RM real conlleva riesgo de lesión y no se recomienda sin calentamiento adecuado y un compañero experimentado. Usar la estimación para planificar el entrenamiento es más seguro." },
    ],
    disclaimer: "Esta calculadora usa la fórmula de Epley como estimación; el máximo real puede diferir. Siempre prioriza la seguridad al levantar pesos pesados.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
