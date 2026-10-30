export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  depositLabel: string;
  housingTypeLabel: string;
  typeApartment: string;
  typeOther: string;
  periodLabel: string;
  calculateBtn: string;
  resultLabel: string;
  premiumLabel: string;
  monthlyAvgLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "전세 보증보험료 계산기",
    subtitle: "보증금, 주택 유형, 보증 기간을 입력해 전세보증금 반환보증 보험료를 추정합니다.",
    depositLabel: "전세 보증금",
    housingTypeLabel: "주택 유형",
    typeApartment: "아파트",
    typeOther: "그 외 주택 (오피스텔·빌라 등)",
    periodLabel: "보증 기간 (개월)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    premiumLabel: "예상 보험료",
    monthlyAvgLabel: "월평균 환산액",
    disclaimer: "본 계산은 HUG 등 보증기관의 일반적인 요율 구조를 참고한 단순 추정치이며, 실제 보험료는 보증기관(HUG/HF/SGI)과 임차인 조건(부분보증, 할인 혜택 등)에 따라 달라질 수 있습니다. 정확한 금액은 해당 보증기관에 문의하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "전세 보증금과 주택 유형(아파트/기타)을 선택합니다.",
      "보증 기간(개월)을 입력합니다.",
      "'계산하기'를 눌러 예상 보험료와 월평균 환산액을 확인하세요.",
    ],
    faq: [
      { q: "전세보증금 반환보증 보험이 왜 필요한가요?", a: "임대인이 전세 계약 종료 시 보증금을 반환하지 못하는 경우, 보증기관이 대신 보증금을 지급해주는 제도로, 전세 사고를 예방하는 안전장치입니다." },
      { q: "아파트와 기타 주택의 보험료율이 다른 이유는?", a: "통계적으로 아파트의 전세 사고 위험이 오피스텔·빌라 등 비아파트보다 낮게 평가되어 보험료율이 더 낮게 책정되는 경우가 많습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Lease Deposit Insurance Premium Calculator",
    subtitle: "Enter your deposit, housing type, and guarantee period to estimate the lease deposit return guarantee insurance premium.",
    depositLabel: "Lease Deposit",
    housingTypeLabel: "Housing Type",
    typeApartment: "Apartment",
    typeOther: "Other Housing (Officetel, Villa, etc.)",
    periodLabel: "Guarantee Period (Months)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    premiumLabel: "Estimated Premium",
    monthlyAvgLabel: "Monthly Average Equivalent",
    disclaimer: "This is a simplified estimate based on typical guarantee agency rate structures. Actual premiums vary by agency (HUG/HF/SGI) and tenant conditions. Confirm the exact amount with the relevant agency.",
    howTitle: "How to Use",
    howSteps: [
      "Select your deposit amount and housing type.",
      "Enter the guarantee period in months.",
      "Click 'Calculate' to see the estimated premium and monthly average.",
    ],
    faq: [
      { q: "Why is lease deposit return guarantee insurance needed?", a: "If the landlord fails to return the deposit at the end of the lease, the guarantee agency pays it instead — a safety net against lease deposit fraud." },
      { q: "Why do apartments have a different premium rate?", a: "Apartments are statistically assessed as lower risk for lease deposit incidents compared to officetels or villas, resulting in lower rates." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "賃貸保証保険料計算機",
    subtitle: "保証金、住宅タイプ、保証期間を入力して賃貸保証金返還保証保険料を推定します。",
    depositLabel: "賃貸保証金",
    housingTypeLabel: "住宅タイプ",
    typeApartment: "アパート",
    typeOther: "その他住宅（オフィステル・ヴィラなど）",
    periodLabel: "保証期間（か月）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    premiumLabel: "予想保険料",
    monthlyAvgLabel: "月平均換算額",
    disclaimer: "この計算はHUGなどの保証機関の一般的な料率構造を参考にした単純推定値であり、実際の保険料は保証機関や賃借人の条件によって異なる場合があります。正確な金額は該当保証機関にお問い合わせください。",
    howTitle: "使用方法",
    howSteps: [
      "賃貸保証金と住宅タイプ（アパート/その他）を選択します。",
      "保証期間（か月）を入力します。",
      "「計算する」を押して予想保険料と月平均換算額を確認しましょう。",
    ],
    faq: [
      { q: "賃貸保証金返還保証保険はなぜ必要ですか？", a: "賃貸人が契約終了時に保証金を返還できない場合、保証機関が代わりに保証金を支払う制度で、賃貸事故を防ぐ安全装置です。" },
      { q: "アパートとその他住宅の保険料率が違う理由は？", a: "統計的にアパートの賃貸事故リスクがオフィステル・ヴィラなどより低く評価され、保険料率が低く設定される場合が多いです。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Prima de Seguro de Depósito de Alquiler",
    subtitle: "Introduce tu depósito, tipo de vivienda y período de garantía para estimar la prima del seguro.",
    depositLabel: "Depósito de Alquiler",
    housingTypeLabel: "Tipo de Vivienda",
    typeApartment: "Apartamento",
    typeOther: "Otra Vivienda (Officetel, Villa, etc.)",
    periodLabel: "Período de Garantía (Meses)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    premiumLabel: "Prima Estimada",
    monthlyAvgLabel: "Promedio Mensual Equivalente",
    disclaimer: "Esta es una estimación simplificada basada en estructuras de tarifas típicas. Las primas reales varían según la agencia y las condiciones. Confirma el monto exacto con la agencia correspondiente.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona tu depósito y tipo de vivienda.",
      "Introduce el período de garantía en meses.",
      "Haz clic en 'Calcular' para ver la prima estimada.",
    ],
    faq: [
      { q: "¿Por qué se necesita el seguro de garantía de devolución de depósito?", a: "Si el arrendador no devuelve el depósito al finalizar el contrato, la agencia de garantía lo paga en su lugar." },
      { q: "¿Por qué los apartamentos tienen una tasa diferente?", a: "Los apartamentos se evalúan estadísticamente con menor riesgo que los officetels o villas, resultando en tasas más bajas." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
