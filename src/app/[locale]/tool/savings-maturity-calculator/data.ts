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
      "매월 납입액과 연이율, 납입 기간을 입력합니다. 매월 같은 금액을 꾸준히 넣는 정액적립식 적금 상품을 기준으로 계산됩니다.",
      "가입하려는(또는 이미 가입한) 상품의 과세 유형을 선택합니다 — 일반과세(15.4%), 세금우대(9.5%), 비과세(0%) 중에서 고릅니다. 잘 모르겠다면 은행 앱의 상품 설명서나 가입 화면에서 과세 구분을 확인할 수 있습니다.",
      "'계산하기'를 누르면 총 납입금, 세전 이자, 세금, 세후 만기 수령액이 한 번에 표시됩니다.",
      "이율이나 납입 기간을 바꿔가며 여러 번 계산해 보면, 가입을 고민 중인 여러 적금 상품의 실수령액을 미리 비교하는 데 도움이 됩니다.",
    ],
    faq: [
      { q: "적금 이자는 왜 예금보다 적게 느껴지나요?", a: "적금은 매월 납입하는 금액마다 남은 기간에 대해서만 이자가 붙기 때문에, 동일한 연이율이라도 목돈을 한 번에 넣는 예금보다 실질 이자가 적게 느껴집니다. 예를 들어 12개월 만기 적금에서 첫 달 납입금은 12개월치 이자를 받지만, 마지막 달 납입금은 1개월치 이자만 받습니다." },
      { q: "이 계산기는 단리와 복리 중 어떤 방식인가요?", a: "일반적인 적금 상품의 방식인 단리(선납식) 계산을 기준으로 합니다. 실제 상품이 복리 방식이거나 다른 계산법(월복리, 일할계산 등)을 쓰는 경우 결과가 다를 수 있으므로, 정확한 금액은 가입할 금융기관에 직접 문의하는 것이 좋습니다." },
      { q: "세금우대와 비과세는 아무나 가입할 수 있나요?", a: "아니요. 세금우대저축은 만 65세 이상 고령자, 장애인, 기초생활수급자 등 가입 대상과 1인당 한도가 법으로 정해져 있습니다. 비과세종합저축도 마찬가지로 대상자 요건이 있으므로, 본인이 해당되는지 가입 전 은행 창구나 앱에서 꼭 확인해야 합니다." },
      { q: "중도에 해지하면 어떻게 되나요?", a: "적금을 만기 전에 해지하면 약정된 정상 이율이 아니라 훨씬 낮은 중도해지 이율이 적용됩니다. 보통 가입 기간이 짧을수록 중도해지 이율도 낮아지므로, 특별한 사정이 없다면 만기까지 유지하는 편이 유리합니다." },
      { q: "자유적립식 적금과는 어떻게 다른가요?", a: "이 계산기는 매월 정해진 금액을 같은 날짜에 납입하는 정액적립식을 기준으로 합니다. 매월 납입 금액이 다른 자유적립식이나, 선납·이연이 섞인 상품은 실제 이자가 이 계산 결과와 차이가 날 수 있습니다." },
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
      "Enter your monthly deposit, annual rate, and term. The calculation assumes a fixed installment plan where you deposit the same amount every month.",
      "Select the tax type for the product you're opening (or already hold) — general (15.4%), preferred (9.5%), or tax-free (0%). If you're unsure, check the product brochure or your banking app for the tax classification.",
      "Click 'Calculate' to see your total principal, pre-tax interest, tax, and after-tax maturity payout all at once.",
      "Try adjusting the rate or term a few times — it's a quick way to compare the real take-home amount across several installment savings products you're considering.",
    ],
    faq: [
      { q: "Why does installment savings interest feel lower than a lump-sum deposit?", a: "Since each monthly deposit only earns interest for its remaining term, the effective interest is lower than a lump-sum deposit at the same annual rate. For a 12-month plan, your first deposit earns a full 12 months of interest, but your last deposit only earns 1 month's worth." },
      { q: "Does this use simple or compound interest?", a: "This uses simple interest, the standard method for installment savings products. Actual results may differ if your product uses compound interest or another method (monthly compounding, daily proration, etc.), so confirm the exact figure with your bank." },
      { q: "Can anyone open a preferred-tax or tax-free account?", a: "No. Preferred-tax savings accounts have legally defined eligibility (seniors 65+, people with disabilities, basic livelihood recipients, etc.) and a per-person limit. Tax-free comprehensive savings also has eligibility requirements, so check with your bank before opening one." },
      { q: "What happens if I cancel early?", a: "Closing an installment savings account before maturity applies a much lower early-termination rate instead of the agreed rate. Generally, the shorter you've held the account, the lower that rate is — so unless you have a pressing need, it's usually better to hold until maturity." },
      { q: "How is this different from a flexible (free) installment plan?", a: "This calculator assumes a fixed plan where you deposit the same amount on the same date each month. Flexible plans (where the monthly amount varies) or products with prepayment/deferral options may produce different actual interest than this result." },
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
      "毎月の積立額、年利率、積立期間を入力します。毎月同じ金額を積み立てる定額積立方式を基準に計算されます。",
      "加入する（またはすでに加入している）商品の課税タイプを選択します — 一般課税（15.4%）、税金優待（9.5%）、非課税（0%）のいずれかです。わからない場合は銀行アプリの商品説明や加入画面で確認できます。",
      "「計算する」を押すと、総積立金・税引前利息・税金・税引後の満期受取額が一度に表示されます。",
      "利率や積立期間を変えながら何度か計算してみると、検討中の複数の積立商品の実際の受取額を比較するのに役立ちます。",
    ],
    faq: [
      { q: "積立預金の利息が預金より少なく感じるのはなぜですか？", a: "積立預金は毎月の積立額ごとに残り期間分のみ利息が付くため、同じ年利率でも一括預金より実質利息が少なく感じられます。例えば12か月満期の場合、最初の積立金は12か月分の利息が付きますが、最後の積立金は1か月分の利息しか付きません。" },
      { q: "このツールは単利と複利のどちらですか？", a: "一般的な積立預金商品の方式である単利（先納式）計算を基準としています。実際の商品が複利方式や別の計算法（月複利、日割計算など）を使う場合、結果が異なることがあるため、正確な金額は加入先の金融機関に確認してください。" },
      { q: "税金優待・非課税は誰でも加入できますか？", a: "いいえ。税金優待貯蓄は満65歳以上の高齢者、障害者、基礎生活受給者など加入対象と1人当たりの限度額が法律で定められています。非課税総合貯蓄も同様に対象者要件があるため、加入前に銀行窓口やアプリで必ず確認してください。" },
      { q: "途中で解約するとどうなりますか？", a: "満期前に積立預金を解約すると、約定された正常利率ではなく、はるかに低い中途解約利率が適用されます。一般的に加入期間が短いほど中途解約利率も低くなるため、特別な事情がなければ満期まで維持する方が有利です。" },
      { q: "自由積立式とはどう違いますか？", a: "この計算機は毎月決まった金額を同じ日に積み立てる定額積立方式を基準としています。毎月の積立額が異なる自由積立式や、先払い・繰延が混ざった商品は、実際の利息がこの計算結果と異なる場合があります。" },
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
      "Introduce tu depósito mensual, tasa anual y plazo. El cálculo asume un plan de ahorro fijo en el que depositas la misma cantidad cada mes.",
      "Selecciona el tipo de impuesto del producto que vas a abrir (o que ya tienes) — general (15.4%), preferente (9.5%) o libre de impuestos (0%). Si no estás seguro, revisa el folleto del producto o tu app bancaria.",
      "Haz clic en 'Calcular' para ver el principal total, el interés antes de impuestos, el impuesto y el pago neto al vencimiento, todo junto.",
      "Prueba a cambiar la tasa o el plazo varias veces: es una forma rápida de comparar el monto real que recibirías entre varios productos de ahorro programado que estés considerando.",
    ],
    faq: [
      { q: "¿Por qué el interés del ahorro programado se siente menor que un depósito único?", a: "Como cada depósito mensual solo genera interés por su plazo restante, el interés efectivo es menor que un depósito único a la misma tasa anual. En un plan a 12 meses, tu primer depósito gana 12 meses de interés, pero el último solo gana 1 mes." },
      { q: "¿Usa interés simple o compuesto?", a: "Usa interés simple, el método estándar para ahorro programado. Los resultados reales pueden variar si tu producto usa interés compuesto u otro método (capitalización mensual, prorrateo diario, etc.), así que confirma la cifra exacta con tu banco." },
      { q: "¿Cualquiera puede abrir una cuenta con impuesto preferente o libre de impuestos?", a: "No. Las cuentas de ahorro con impuesto preferente tienen requisitos de elegibilidad definidos por ley (personas mayores de 65 años, personas con discapacidad, beneficiarios de ayudas básicas, etc.) y un límite por persona. El ahorro libre de impuestos también tiene requisitos, así que consulta con tu banco antes de abrir una." },
      { q: "¿Qué pasa si cancelo antes de tiempo?", a: "Cancelar un ahorro programado antes del vencimiento aplica una tasa de cancelación anticipada mucho menor que la acordada. Generalmente, cuanto más corto haya sido el tiempo, menor es esa tasa, así que conviene mantenerlo hasta el vencimiento salvo necesidad urgente." },
      { q: "¿En qué se diferencia de un plan de ahorro libre?", a: "Esta calculadora asume un plan fijo en el que depositas la misma cantidad en la misma fecha cada mes. Los planes libres (con montos mensuales variables) o productos con prepago/aplazamiento pueden generar un interés real distinto a este resultado." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
