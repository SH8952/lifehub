export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  vehicleValueLabel: string;
  ageLabel: string;
  experienceLabel: string;
  accidentHistoryLabel: string;
  accidentNone: string;
  accidentOne: string;
  accidentMulti: string;
  calculateBtn: string;
  resultLabel: string;
  annualPremiumRangeLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "자동차 보험료 추정기",
    subtitle: "차량 정보와 운전자 조건을 입력해 자동차 보험료 대략적인 범위를 추정합니다.",
    vehicleValueLabel: "차량 가액",
    ageLabel: "운전자 나이",
    experienceLabel: "운전 경력 (년)",
    accidentHistoryLabel: "최근 3년 내 사고 경력",
    accidentNone: "무사고",
    accidentOne: "1회",
    accidentMulti: "2회 이상",
    calculateBtn: "추정하기",
    resultLabel: "추정 결과",
    annualPremiumRangeLabel: "예상 연간 보험료 범위",
    disclaimer: "본 추정치는 일반적인 요율 요인(나이, 경력, 사고 경력)만 반영한 매우 단순화된 참고용 범위이며, 실제 보험료는 보험사, 차종, 할인·할증 등급, 특약 구성에 따라 크게 달라집니다. 정확한 보험료는 각 보험사에서 직접 견적을 받아보세요.",
    howTitle: "사용 방법",
    howSteps: [
      "차량 가액과 운전자 나이, 운전 경력을 입력합니다.",
      "최근 3년 내 사고 경력을 선택합니다.",
      "'추정하기'를 눌러 예상 연간 보험료 범위를 확인하세요.",
    ],
    faq: [
      { q: "왜 보험사마다 견적이 다른가요?", a: "각 보험사는 자체 통계 데이터와 손해율을 바탕으로 독자적인 요율을 산정하므로, 동일한 조건이라도 보험사별 견적 차이가 발생합니다. 여러 곳에서 견적을 비교하는 것이 좋습니다." },
      { q: "운전 경력이 길면 항상 보험료가 낮아지나요?", a: "일반적으로 무사고 운전 경력이 길수록 할인이 적용되지만, 사고 경력이나 차량 종류, 가입 특약에 따라 결과가 달라질 수 있습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Car Insurance Premium Estimator",
    subtitle: "Enter your vehicle and driver details to estimate an approximate car insurance premium range.",
    vehicleValueLabel: "Vehicle Value",
    ageLabel: "Driver Age",
    experienceLabel: "Driving Experience (Years)",
    accidentHistoryLabel: "Accident History (Last 3 Years)",
    accidentNone: "No Accidents",
    accidentOne: "1 Accident",
    accidentMulti: "2+ Accidents",
    calculateBtn: "Estimate",
    resultLabel: "Result",
    annualPremiumRangeLabel: "Estimated Annual Premium Range",
    disclaimer: "This is a very simplified reference range based only on common rating factors. Actual premiums vary significantly by insurer, vehicle type, and discount/surcharge grade. Get a direct quote from an insurer for an exact figure.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the vehicle value, driver age, and driving experience.",
      "Select your accident history for the last 3 years.",
      "Click 'Estimate' to see the expected annual premium range.",
    ],
    faq: [
      { q: "Why do quotes differ between insurers?", a: "Each insurer calculates its own rates based on its own statistical data and loss ratios, so quotes vary even under identical conditions. Comparing multiple quotes is recommended." },
      { q: "Does longer driving experience always lower the premium?", a: "Generally, a longer accident-free history leads to discounts, but results vary based on accident history, vehicle type, and add-on coverage." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "自動車保険料推定機",
    subtitle: "車両情報と運転者条件を入力して自動車保険料の大まかな範囲を推定します。",
    vehicleValueLabel: "車両価額",
    ageLabel: "運転者年齢",
    experienceLabel: "運転経歴（年）",
    accidentHistoryLabel: "直近3年以内の事故歴",
    accidentNone: "無事故",
    accidentOne: "1回",
    accidentMulti: "2回以上",
    calculateBtn: "推定する",
    resultLabel: "推定結果",
    annualPremiumRangeLabel: "予想年間保険料範囲",
    disclaimer: "この推定値は年齢、経歴、事故歴などの一般的な要率要因のみを反映した非常に単純化された参考範囲であり、実際の保険料は保険会社、車種、割引・割増等級によって大きく異なります。正確な保険料は各保険会社に直接見積もりを依頼してください。",
    howTitle: "使用方法",
    howSteps: [
      "車両価額、運転者年齢、運転経歴を入力します。",
      "直近3年以内の事故歴を選択します。",
      "「推定する」を押して予想年間保険料範囲を確認しましょう。",
    ],
    faq: [
      { q: "なぜ保険会社ごとに見積もりが違うのですか？", a: "各保険会社は独自の統計データと損害率に基づいて独自の料率を算定するため、同じ条件でも見積もりに差が生じます。複数社で見積もりを比較することをお勧めします。" },
      { q: "運転経歴が長いと常に保険料が低くなりますか？", a: "一般的に無事故運転経歴が長いほど割引が適用されますが、事故歴や車種、加入特約によって結果が異なる場合があります。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Estimador de Prima de Seguro de Auto",
    subtitle: "Introduce los datos de tu vehículo y conductor para estimar un rango aproximado de prima.",
    vehicleValueLabel: "Valor del Vehículo",
    ageLabel: "Edad del Conductor",
    experienceLabel: "Experiencia de Conducción (Años)",
    accidentHistoryLabel: "Historial de Accidentes (Últimos 3 Años)",
    accidentNone: "Sin Accidentes",
    accidentOne: "1 Accidente",
    accidentMulti: "2+ Accidentes",
    calculateBtn: "Estimar",
    resultLabel: "Resultado",
    annualPremiumRangeLabel: "Rango de Prima Anual Estimado",
    disclaimer: "Este es un rango de referencia muy simplificado. Las primas reales varían según la aseguradora y otros factores. Obtén una cotización directa para una cifra exacta.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el valor del vehículo, edad y experiencia del conductor.",
      "Selecciona tu historial de accidentes de los últimos 3 años.",
      "Haz clic en 'Estimar' para ver el rango de prima anual.",
    ],
    faq: [
      { q: "¿Por qué las cotizaciones difieren entre aseguradoras?", a: "Cada aseguradora calcula sus propias tasas según sus datos estadísticos, por lo que las cotizaciones varían. Se recomienda comparar varias." },
      { q: "¿Más experiencia siempre reduce la prima?", a: "Generalmente un historial más largo sin accidentes genera descuentos, pero los resultados varían según otros factores." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
