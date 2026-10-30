export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  amountLabel: string;
  relationLabel: string;
  relationSpouse: string;
  relationChildAdult: string;
  relationChildMinor: string;
  relationParent: string;
  relationOther: string;
  relationStranger: string;
  calculateBtn: string;
  resultLabel: string;
  deductionLabel: string;
  taxableLabel: string;
  taxLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "증여세 간이 계산기",
    subtitle: "증여금액과 관계를 입력해 증여공제를 반영한 예상 증여세를 간단히 계산합니다.",
    amountLabel: "증여 금액",
    relationLabel: "증여자와의 관계",
    relationSpouse: "배우자",
    relationChildAdult: "자녀 (성인)",
    relationChildMinor: "자녀 (미성년자)",
    relationParent: "직계존속 (부모 등)",
    relationOther: "기타 친족",
    relationStranger: "그 외 (제3자)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    deductionLabel: "증여공제액",
    taxableLabel: "과세표준",
    taxLabel: "예상 증여세",
    disclaimer: "본 계산은 10년간 동일인 증여 누적 등 세부 규정을 반영하지 않은 단순 참고용 추정치입니다. 실제 증여세는 과거 증여 이력, 신고기한 내 자진신고 공제 등 다양한 요소에 따라 달라지므로, 정확한 세액은 세무사와 상담하시기 바랍니다.",
    howTitle: "사용 방법",
    howSteps: [
      "증여받을 금액을 입력합니다.",
      "증여자와의 관계를 선택합니다 (공제액이 자동 반영됩니다).",
      "'계산하기'를 눌러 과세표준과 예상 증여세를 확인하세요.",
    ],
    faq: [
      { q: "증여공제는 몇 년마다 적용되나요?", a: "증여공제는 동일인으로부터 10년 이내에 받은 증여 금액을 합산하여 공제 한도를 적용합니다. 즉, 10년 동안 같은 사람에게 받은 공제 한도는 한 번만 적용됩니다." },
      { q: "배우자 증여공제는 얼마인가요?", a: "배우자로부터 증여받는 경우 10년간 6억원까지 공제되어 그 이하 금액은 증여세가 발생하지 않습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Gift Tax Simple Estimator",
    subtitle: "Enter the gift amount and relationship to estimate gift tax after applicable deductions.",
    amountLabel: "Gift Amount",
    relationLabel: "Relationship to Donor",
    relationSpouse: "Spouse",
    relationChildAdult: "Child (Adult)",
    relationChildMinor: "Child (Minor)",
    relationParent: "Lineal Ascendant (Parent, etc.)",
    relationOther: "Other Relative",
    relationStranger: "Non-Relative (Third Party)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    deductionLabel: "Deduction",
    taxableLabel: "Taxable Amount",
    taxLabel: "Estimated Gift Tax",
    disclaimer: "This is a simplified estimate that does not account for 10-year cumulative gift rules or other details. Actual gift tax depends on prior gift history and other factors — consult a tax professional for an exact figure.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the gift amount.",
      "Select your relationship to the donor (deduction applied automatically).",
      "Click 'Calculate' to see the taxable amount and estimated tax.",
    ],
    faq: [
      { q: "How often does the gift deduction apply?", a: "The deduction applies to the cumulative total of gifts received from the same person within a 10-year period — the limit is used only once per 10 years." },
      { q: "How much is the spousal gift deduction?", a: "Gifts from a spouse are deductible up to 600 million KRW over 10 years, so amounts below that incur no gift tax." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "贈与税簡易計算機",
    subtitle: "贈与金額と関係を入力して贈与控除を反映した予想贈与税を簡単に計算します。",
    amountLabel: "贈与金額",
    relationLabel: "贈与者との関係",
    relationSpouse: "配偶者",
    relationChildAdult: "子（成人）",
    relationChildMinor: "子（未成年）",
    relationParent: "直系尊属（親など）",
    relationOther: "その他親族",
    relationStranger: "その他（第三者）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    deductionLabel: "贈与控除額",
    taxableLabel: "課税標準",
    taxLabel: "予想贈与税",
    disclaimer: "この計算は10年間の同一人贈与累積など詳細規定を反映していない単純な参考推定値です。実際の贈与税は過去の贈与履歴など様々な要素によって異なるため、正確な税額は税務士にご相談ください。",
    howTitle: "使用方法",
    howSteps: [
      "贈与される金額を入力します。",
      "贈与者との関係を選択します（控除額が自動反映されます）。",
      "「計算する」を押して課税標準と予想贈与税を確認しましょう。",
    ],
    faq: [
      { q: "贈与控除は何年ごとに適用されますか？", a: "贈与控除は同一人から10年以内に受けた贈与金額を合算して控除限度を適用します。" },
      { q: "配偶者贈与控除はいくらですか？", a: "配偶者からの贈与は10年間6億ウォンまで控除されます。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Estimador Simple de Impuesto de Donación",
    subtitle: "Introduce el monto de la donación y la relación para estimar el impuesto tras deducciones.",
    amountLabel: "Monto de la Donación",
    relationLabel: "Relación con el Donante",
    relationSpouse: "Cónyuge",
    relationChildAdult: "Hijo/a (Adulto)",
    relationChildMinor: "Hijo/a (Menor)",
    relationParent: "Ascendiente Directo (Padre, etc.)",
    relationOther: "Otro Pariente",
    relationStranger: "No Pariente (Tercero)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    deductionLabel: "Deducción",
    taxableLabel: "Monto Imponible",
    taxLabel: "Impuesto de Donación Estimado",
    disclaimer: "Esta es una estimación simplificada que no considera reglas acumulativas de 10 años. Consulta a un profesional fiscal para una cifra exacta.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el monto de la donación.",
      "Selecciona tu relación con el donante.",
      "Haz clic en 'Calcular' para ver el monto imponible y el impuesto estimado.",
    ],
    faq: [
      { q: "¿Con qué frecuencia se aplica la deducción?", a: "La deducción se aplica al total acumulado de donaciones de la misma persona en un período de 10 años." },
      { q: "¿Cuánto es la deducción de cónyuge?", a: "Las donaciones de un cónyuge son deducibles hasta 600 millones de KRW en 10 años." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
