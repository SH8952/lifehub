export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  monthlyLabel: string;
  rateLabel: string;
  monthsLabel: string;
  taxTypeLabel: string;
  taxGeneral: string;
  taxPreferred: string;
  taxFree: string;
  calculateBtn: string;
  resultLabel: string;
  totalPrincipalLabel: string;
  grossInterestLabel: string;
  taxLabel: string;
  maturityAmountLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "적금 만기 수령액 계산기",
    subtitle: "매월 납입액, 이자율, 기간을 입력해 적금 만기 시 받는 금액을 계산합니다 (단리 기준).",
    monthlyLabel: "매월 납입액",
    rateLabel: "연이율 (%)",
    monthsLabel: "납입 기간 (개월)",
    taxTypeLabel: "과세 유형",
    taxGeneral: "일반과세 (15.4%)",
    taxPreferred: "세금우대 (9.5%)",
    taxFree: "비과세 (0%)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    totalPrincipalLabel: "총 납입금",
    grossInterestLabel: "세전 이자",
    taxLabel: "세금",
    maturityAmountLabel: "만기 수령액",
    disclaimer: "본 계산 결과는 일반적인 단리 적금 방식을 기준으로 한 참고용 추정치이며, 실제 금융상품의 이자 계산 방식, 세율, 우대조건은 금융기관마다 다를 수 있습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "매월 납입액과 연이율, 납입 기간을 입력합니다.",
      "과세 유형을 선택합니다 (일반/세금우대/비과세).",
      "'계산하기'를 눌러 세후 만기 수령액을 확인하세요.",
    ],
    faq: [
      { q: "적금 이자는 왜 예금보다 적게 느껴지나요?", a: "적금은 매월 납입하는 금액마다 남은 기간에 대해서만 이자가 붙기 때문에, 동일한 연이율이라도 목돈을 한 번에 넣는 예금보다 실질 이자가 적게 느껴집니다." },
      { q: "이 계산기는 단리와 복리 중 어떤 방식인가요?", a: "일반적인 적금 상품의 방식인 단리(선납식) 계산을 기준으로 합니다. 실제 상품이 복리 방식이거나 다른 계산법을 쓰는 경우 결과가 다를 수 있습니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Installment Savings Maturity Calculator",
    subtitle: "Enter your monthly deposit, interest rate, and term to calculate your installment savings payout at maturity (simple interest).",
    monthlyLabel: "Monthly Deposit",
    rateLabel: "Annual Rate (%)",
    monthsLabel: "Term (Months)",
    taxTypeLabel: "Tax Type",
    taxGeneral: "General Tax (15.4%)",
    taxPreferred: "Preferred Tax (9.5%)",
    taxFree: "Tax-Free (0%)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    totalPrincipalLabel: "Total Principal",
    grossInterestLabel: "Interest (Before Tax)",
    taxLabel: "Tax",
    maturityAmountLabel: "Maturity Payout",
    disclaimer: "This result is a reference estimate based on the standard simple-interest installment savings formula. Actual interest calculation, tax rates, and preferential terms vary by financial institution.",
    howTitle: "How to Use",
    howSteps: [
      "Enter your monthly deposit, annual rate, and term.",
      "Select the tax type (general/preferred/tax-free).",
      "Click 'Calculate' to see your after-tax maturity payout.",
    ],
    faq: [
      { q: "Why does installment savings interest feel lower than a lump-sum deposit?", a: "Since each monthly deposit only earns interest for its remaining term, the effective interest is lower than a lump-sum deposit at the same annual rate." },
      { q: "Does this use simple or compound interest?", a: "This uses simple interest, the standard method for installment savings products. Actual results may differ if your product uses compound interest or another method." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "積立預金満期受取額計算機",
    subtitle: "毎月の積立額、利率、期間を入力して積立預金の満期受取額を計算します（単利基準）。",
    monthlyLabel: "毎月の積立額",
    rateLabel: "年利率（%）",
    monthsLabel: "積立期間（か月）",
    taxTypeLabel: "課税タイプ",
    taxGeneral: "一般課税（15.4%）",
    taxPreferred: "税金優待（9.5%）",
    taxFree: "非課税（0%）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    totalPrincipalLabel: "総積立金",
    grossInterestLabel: "税引前利息",
    taxLabel: "税金",
    maturityAmountLabel: "満期受取額",
    disclaimer: "この計算結果は一般的な単利積立方式を基準にした参考推定値であり、実際の金融商品の利息計算方式、税率、優待条件は金融機関によって異なる場合があります。",
    howTitle: "使用方法",
    howSteps: [
      "毎月の積立額、年利率、積立期間を入力します。",
      "課税タイプ（一般/税金優待/非課税）を選択します。",
      "「計算する」を押して税引後の満期受取額を確認しましょう。",
    ],
    faq: [
      { q: "積立預金の利息が預金より少なく感じるのはなぜですか？", a: "積立預金は毎月の積立額ごとに残り期間分のみ利息が付くため、同じ年利率でも一括預金より実質利息が少なく感じられます。" },
      { q: "このツールは単利と複利のどちらですか？", a: "一般的な積立預金商品の方式である単利（先納式）計算を基準としています。実際の商品が複利方式や別の計算法を使う場合、結果が異なることがあります。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Vencimiento de Ahorro Programado",
    subtitle: "Introduce el depósito mensual, la tasa de interés y el plazo para calcular el pago al vencimiento (interés simple).",
    monthlyLabel: "Depósito Mensual",
    rateLabel: "Tasa Anual (%)",
    monthsLabel: "Plazo (Meses)",
    taxTypeLabel: "Tipo de Impuesto",
    taxGeneral: "Impuesto General (15.4%)",
    taxPreferred: "Impuesto Preferente (9.5%)",
    taxFree: "Libre de Impuestos (0%)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    totalPrincipalLabel: "Principal Total",
    grossInterestLabel: "Interés (Antes de Impuestos)",
    taxLabel: "Impuesto",
    maturityAmountLabel: "Pago al Vencimiento",
    disclaimer: "Este resultado es una estimación de referencia basada en la fórmula estándar de interés simple. El cálculo real, las tasas de impuestos y las condiciones preferenciales varían según la institución financiera.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu depósito mensual, tasa anual y plazo.",
      "Selecciona el tipo de impuesto (general/preferente/libre).",
      "Haz clic en 'Calcular' para ver el pago neto al vencimiento.",
    ],
    faq: [
      { q: "¿Por qué el interés del ahorro programado se siente menor que un depósito único?", a: "Como cada depósito mensual solo genera interés por su plazo restante, el interés efectivo es menor que un depósito único a la misma tasa anual." },
      { q: "¿Usa interés simple o compuesto?", a: "Usa interés simple, el método estándar para ahorro programado. Los resultados reales pueden variar si tu producto usa interés compuesto u otro método." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
