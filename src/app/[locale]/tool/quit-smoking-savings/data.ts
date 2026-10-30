export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  dailyCostLabel: string;
  quitDateLabel: string;
  calculateBtn: string;
  resultLabel: string;
  daysSinceLabel: string;
  daysUnit: string;
  savedSoFarLabel: string;
  projection1yLabel: string;
  projection5yLabel: string;
  futureDateError: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "금연·금주 절약 금액 계산기",
    subtitle: "하루 지출 비용과 금연·금주 시작일을 입력해 지금까지, 그리고 앞으로 절약될 금액을 계산합니다.",
    dailyCostLabel: "하루 지출 비용",
    quitDateLabel: "금연·금주 시작일",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    daysSinceLabel: "금연·금주 지속일",
    daysUnit: "일",
    savedSoFarLabel: "지금까지 절약한 금액",
    projection1yLabel: "1년 후 예상 절약액",
    projection5yLabel: "5년 후 예상 절약액",
    futureDateError: "⚠️ 시작일이 미래일 수 없습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "금연 또는 금주 전에 하루에 지출했던 비용을 입력합니다.",
      "금연·금주를 시작한 날짜를 입력합니다.",
      "'계산하기'를 눌러 지금까지 절약한 금액과 1년·5년 후 예상 절약액을 확인하세요.",
    ],
    faq: [
      { q: "이 계산기는 흡연이나 음주량도 알려주나요?", a: "아니요, 이 계산기는 금전적인 절약 효과만 계산합니다. 건강 효과는 개인마다 다르므로 전문적인 의학 정보를 참고하세요." },
      { q: "하루 지출 비용은 어떻게 추정하나요?", a: "담배 한 팩 가격 × 하루 소비량, 또는 평소 음주 비용을 하루 평균으로 나누어 입력하면 됩니다." },
    ],
    disclaimer: "⚠️ 본 계산 결과는 입력하신 지출 비용을 기준으로 한 단순 참고용 추정치입니다. 금연·금주는 건강에 큰 도움이 되지만, 금단 증상이나 건강 관리가 필요한 경우 의사 등 전문가와 상담하세요.",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Quit Smoking/Drinking Savings Calculator",
    subtitle: "Enter your daily spending and quit date to calculate how much you've saved so far and will save going forward.",
    dailyCostLabel: "Daily Cost",
    quitDateLabel: "Quit Date",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    daysSinceLabel: "Days Since Quitting",
    daysUnit: "days",
    savedSoFarLabel: "Saved So Far",
    projection1yLabel: "Projected Savings in 1 Year",
    projection5yLabel: "Projected Savings in 5 Years",
    futureDateError: "⚠️ The quit date cannot be in the future.",
    howTitle: "How to Use",
    howSteps: [
      "Enter how much you used to spend per day before quitting.",
      "Enter the date you quit.",
      "Click 'Calculate' to see how much you've saved so far and projected savings over 1 and 5 years.",
    ],
    faq: [
      { q: "Does this calculator also show health benefits?", a: "No, this calculator only estimates financial savings. Health effects vary by individual, so consult medical resources for that." },
      { q: "How do I estimate daily cost?", a: "Multiply the price per pack by daily cigarette consumption, or average your typical drinking costs per day." },
    ],
    disclaimer: "⚠️ This result is a simple reference estimate based on the spending you entered. Quitting smoking or drinking offers major health benefits, but if you experience withdrawal symptoms or need health guidance, consult a doctor or other professional.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "禁煙・禁酒節約金額計算機",
    subtitle: "1日の支出と禁煙・禁酒開始日を入力して、今まで、そして今後節約される金額を計算します。",
    dailyCostLabel: "1日の支出額",
    quitDateLabel: "禁煙・禁酒開始日",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    daysSinceLabel: "禁煙・禁酒継続日数",
    daysUnit: "日",
    savedSoFarLabel: "今まで節約した金額",
    projection1yLabel: "1年後の予想節約額",
    projection5yLabel: "5年後の予想節約額",
    futureDateError: "⚠️ 開始日は未来の日付にできません。",
    howTitle: "使用方法",
    howSteps: [
      "禁煙・禁酒前に1日に支出していた費用を入力します。",
      "禁煙・禁酒を始めた日付を入力します。",
      "「計算する」を押して今まで節約した金額と1年・5年後の予想節約額を確認しましょう。",
    ],
    faq: [
      { q: "このツールは喫煙や飲酒量も教えてくれますか？", a: "いいえ、このツールは金銭的な節約効果のみを計算します。健康効果は個人差があるため、専門的な医学情報を参考にしてください。" },
      { q: "1日の支出額はどう推定すればいいですか？", a: "タバコ1パックの価格×1日の消費量、または普段の飲酒費用を1日平均に換算して入力してください。" },
    ],
    disclaimer: "⚠️ この結果は入力した支出額に基づく単純な参考用の推定値です。禁煙・禁酒は健康に大きく役立ちますが、禁断症状や健康管理が必要な場合は医師などの専門家にご相談ください。",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Ahorros por Dejar de Fumar/Beber",
    subtitle: "Introduce tu gasto diario y fecha en que dejaste el hábito para calcular cuánto has ahorrado y ahorrarás.",
    dailyCostLabel: "Costo Diario",
    quitDateLabel: "Fecha en que Dejaste",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    daysSinceLabel: "Días Desde que Dejaste",
    daysUnit: "días",
    savedSoFarLabel: "Ahorrado Hasta Ahora",
    projection1yLabel: "Ahorro Proyectado en 1 Año",
    projection5yLabel: "Ahorro Proyectado en 5 Años",
    futureDateError: "⚠️ La fecha no puede estar en el futuro.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce cuánto gastabas por día antes de dejarlo.",
      "Introduce la fecha en que lo dejaste.",
      "Haz clic en 'Calcular' para ver cuánto has ahorrado y el ahorro proyectado a 1 y 5 años.",
    ],
    faq: [
      { q: "¿Esta calculadora también muestra beneficios de salud?", a: "No, esta calculadora solo estima el ahorro financiero. Los efectos de salud varían según la persona." },
      { q: "¿Cómo estimo el costo diario?", a: "Multiplica el precio por paquete por el consumo diario de cigarrillos, o promedia tus gastos típicos de bebida por día." },
    ],
    disclaimer: "⚠️ Este resultado es una estimación de referencia simple basada en el gasto que ingresaste. Dejar de fumar o beber tiene grandes beneficios para la salud, pero si experimentas síntomas de abstinencia o necesitas orientación de salud, consulta a un médico u otro profesional.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
