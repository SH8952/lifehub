export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  annualSalaryLabel: string;
  withheldTaxLabel: string;
  dependentsLabel: string;
  otherDeductionsLabel: string;
  calculateBtn: string;
  resultLabel: string;
  taxableLabel: string;
  calculatedTaxLabel: string;
  refundLabel: string;
  additionalPaymentLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "연말정산 환급액 간이 계산기",
    subtitle: "연간 총급여, 기납부세액, 공제 항목을 입력해 연말정산 환급(또는 추가납부) 예상액을 계산합니다.",
    annualSalaryLabel: "연간 총급여",
    withheldTaxLabel: "기납부 소득세 (연간 원천징수 누적)",
    dependentsLabel: "부양가족 수 (본인 포함)",
    otherDeductionsLabel: "기타 공제액 합계 (보험료·카드·연금저축 등)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    taxableLabel: "과세표준",
    calculatedTaxLabel: "결정세액 (추정)",
    refundLabel: "예상 환급액",
    additionalPaymentLabel: "예상 추가 납부액",
    disclaimer: "본 계산은 근로소득공제·인적공제·근로소득세액공제를 단순화하여 반영한 참고용 추정치입니다. 실제 연말정산은 의료비·교육비·월세 등 다양한 특별공제/세액공제 항목과 세부 한도가 추가로 적용되므로, 정확한 금액은 국세청 홈택스 연말정산 미리보기를 확인하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "연간 총급여와 이미 원천징수된 기납부 소득세를 입력합니다.",
      "부양가족 수와 기타 공제액(보험료·카드사용액 등) 합계를 입력합니다.",
      "'계산하기'를 눌러 예상 환급액 또는 추가 납부액을 확인하세요.",
    ],
    faq: [
      { q: "13월의 월급이라고 불리는 이유는 무엇인가요?", a: "매월 원천징수된 세금이 실제 납부해야 할 세액보다 많았던 경우, 연말정산을 통해 차액을 환급받기 때문에 이를 '13월의 월급'이라고 부릅니다. 반대로 적게 징수됐다면 추가로 납부해야 합니다." },
      { q: "공제를 많이 받으면 항상 환급액이 커지나요?", a: "일반적으로 공제가 늘어나면 과세표준이 낮아져 세액이 줄어들므로 환급액이 커지는 경향이 있지만, 이미 기납부세액이 적다면 추가 납부로 바뀔 수도 있습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Year-End Tax Settlement Simple Estimator",
    subtitle: "Enter your annual salary, taxes already withheld, and deductions to estimate your year-end tax refund (or additional payment).",
    annualSalaryLabel: "Annual Total Salary",
    withheldTaxLabel: "Tax Already Withheld (Annual Total)",
    dependentsLabel: "Number of Dependents (incl. self)",
    otherDeductionsLabel: "Other Deductions Total (insurance, cards, pension savings, etc.)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    taxableLabel: "Taxable Amount",
    calculatedTaxLabel: "Determined Tax (Estimated)",
    refundLabel: "Estimated Refund",
    additionalPaymentLabel: "Estimated Additional Payment",
    disclaimer: "This is a simplified reference estimate. Actual year-end settlement involves many additional deduction items and limits — check the official NTS Hometax preview for an exact figure.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your annual salary and tax already withheld.",
      "Enter the number of dependents and other deductions total.",
      "Click 'Calculate' to see your estimated refund or additional payment.",
    ],
    faq: [
      { q: "Why is it called the '13th month's salary'?", a: "If more tax was withheld monthly than actually owed, the difference is refunded at year-end settlement — hence the nickname. If too little was withheld, additional payment is required." },
      { q: "Does more deductions always mean a bigger refund?", a: "Generally yes, since deductions lower the taxable amount, but if too little tax was withheld to begin with, you may still owe additional payment." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "年末調整還付額簡易計算機",
    subtitle: "年間総給与、既納付税額、控除項目を入力して年末調整の還付（または追加納付）予想額を計算します。",
    annualSalaryLabel: "年間総給与",
    withheldTaxLabel: "既納付所得税（年間源泉徴収累計）",
    dependentsLabel: "扶養家族数（本人含む）",
    otherDeductionsLabel: "その他控除額合計（保険料・カード・年金貯蓄など）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    taxableLabel: "課税標準",
    calculatedTaxLabel: "決定税額（推定）",
    refundLabel: "予想還付額",
    additionalPaymentLabel: "予想追加納付額",
    disclaimer: "この計算は勤労所得控除・人的控除・勤労所得税額控除を単純化して反映した参考推定値です。実際の年末調整は医療費・教育費・月貸など様々な特別控除項目が追加適用されるため、正確な金額は国税庁ホームタックスの年末調整プレビューをご確認ください。",
    howTitle: "使用方法",
    howSteps: [
      "年間総給与と既に源泉徴収された既納付所得税を入力します。",
      "扶養家族数とその他控除額（保険料・カード使用額など）合計を入力します。",
      "「計算する」を押して予想還付額または追加納付額を確認しましょう。",
    ],
    faq: [
      { q: "「13月の給料」と呼ばれる理由は何ですか？", a: "毎月源泉徴収された税金が実際の納税額より多かった場合、年末調整で差額が還付されるため「13月の給料」と呼ばれます。" },
      { q: "控除を多く受けると常に還付額が大きくなりますか？", a: "一般的に控除が増えると課税標準が下がり税額が減るため還付額が大きくなる傾向がありますが、既納付税額が少ない場合は追加納付になることもあります。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Estimador Simple de Reembolso de Ajuste Anual",
    subtitle: "Introduce tu salario anual, impuestos ya retenidos y deducciones para estimar tu reembolso de ajuste anual.",
    annualSalaryLabel: "Salario Total Anual",
    withheldTaxLabel: "Impuesto Ya Retenido (Total Anual)",
    dependentsLabel: "Número de Dependientes (incl. uno mismo)",
    otherDeductionsLabel: "Total de Otras Deducciones (seguro, tarjetas, pensión, etc.)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    taxableLabel: "Monto Imponible",
    calculatedTaxLabel: "Impuesto Determinado (Estimado)",
    refundLabel: "Reembolso Estimado",
    additionalPaymentLabel: "Pago Adicional Estimado",
    disclaimer: "Esta es una estimación simplificada. El ajuste real incluye muchas deducciones adicionales — consulta la vista previa oficial de NTS Hometax para una cifra exacta.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu salario anual y el impuesto ya retenido.",
      "Introduce el número de dependientes y otras deducciones.",
      "Haz clic en 'Calcular' para ver tu reembolso estimado.",
    ],
    faq: [
      { q: "¿Por qué se llama 'salario del mes 13'?", a: "Si se retuvo más impuesto del debido mensualmente, la diferencia se reembolsa en el ajuste anual, de ahí el apodo." },
      { q: "¿Más deducciones siempre significan mayor reembolso?", a: "Generalmente sí, pero si se retuvo muy poco impuesto, aún podrías adeudar un pago adicional." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
