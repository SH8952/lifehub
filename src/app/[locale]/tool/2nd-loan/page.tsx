import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import SecondLoanCalculator from "@/components/second-loan-calculator";

type Locale = "ko" | "en" | "ja" | "es";

interface FAQ {
  q: string;
  a: string;
}

const data: Record<Locale, {
  title: string;
  subtitle: string;
  loanAmount: string;
  loanAmountHint: string;
  rate: string;
  rateHint: string;
  term: string;
  termHint: string;
  repaymentMethod: string;
  equalPrincipal: string;
  equalPrincipalInterest: string;
  calculate: string;
  results: string;
  monthlyPayment: string;
  totalInterest: string;
  totalRepayment: string;
  monthlyPaymentNote: string;
  preset: string;
  whyCalculator: string;
  explanation: string;
  limitations: string;
  footer: string;
  faq: FAQ[];
}> = {
  ko: {
    title: "2번 대출 상환액 계산기",
    subtitle: "대출 금액, 금리, 상환 방식을 입력하면 월 상환액과 총 이자를 계산합니다",
    loanAmount: "대출 금액",
    loanAmountHint: "대출할 금액을 입력하세요 (단위: 원)",
    rate: "연 이자율",
    rateHint: "연 기본 금리를 입력하세요 (%)",
    term: "대출 기간 (년)",
    termHint: "대출 기간을 입력하세요 (년)",
    repaymentMethod: "상환 방식",
    equalPrincipal: "원금 균등 상환",
    equalPrincipalInterest: "원리금 균등 상환",
    calculate: "계산하기",
    results: "계산 결과",
    monthlyPayment: "월 상환액",
    totalInterest: "총 지급 이자",
    totalRepayment: "총 지급 원리합계",
    monthlyPaymentNote: "원금 균등 상환은 매달 원금은 동일하고 이자가 감소하여 월 상환액이 줄어듭니다.",
    preset: "프리셋",
    whyCalculator: "왜 2번 대출 상환액 계산기가 필요한가요?",
    explanation:
      "1번 집담보대출(주택담보대출)을 이미 보유 중인 상태에서 추가 자금이 필요할 때 이용하는 것이 2번 대출(2차 담보 대출)입니다. 교육비, 사업자금, 리모델링 등 용도는 다양하지만, 1번 대출과 별도로 매달 상환해야 하는 금액이 얼마나 되는지 미리 알아두면 자금 계획에 큰 도움이 됩니다.\n\n이 계산기는 대출 금액, 연 이자율, 대출 기간, 상환 방식(원금 균등 상환 또는 원리금 균등 상환)을 기반으로 월 상환액과 총 지급 이자를 계산합니다. 두 상환 방식을 비교하면 어떤 방식이 자신의 자금 사정에 더 적합한지 빠르게 파악할 수 있습니다.\n\n실제 적용 금리는 금융기관, 신용등급, 담보 평가액 등에 따라 상이할 수 있으므로, 정확한 금액은 가입 시 금융사에서 다시 확인하시기 바랍니다.",
    limitations: "이 계산기는 참고용이며, 실제 상환액을 보장하지 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "원금 균등 상환과 원리금 균등 상환 중 어떤 것이 더 유리한가요?",
        a: "총 이자 비용만 보면 원금 균등 상환이 일반적으로 더 저렴합니다. 원금 균등 상환은 매달 원금을 균등하게 상환하므로 남은 원금이 빠르게 줄어들어 이자도 감소합니다. 반면 원리금 균등 상환은 매달 동일한 금액을 상환하여 자금 계획이 쉽고, 초기 월 상환액이 원금 균등 상환보다 낮은 편입니다. 초기 부담을 줄이고 싶다면 원리금 균등 상환, 총 이자를 절약하고 싶다면 원금 균등 상환이 적합합니다.",
      },
      {
        q: "2번 대출의 금리는 1번 대출보다 높은가요?",
        a: "일반적으로 2번 대출의 금리가 1번 집담보대출보다 약간 높습니다. 1번 대출은 주택담보저금 등 우대 금리 대상이 되는 경우가 많지만, 2번 대출은 담보 순위가 아래여서 금융사에서 더 높은 리스크 프리미엄을 적용하기 때문입니다. 다만 신용등급과 소득 증빙 상황에 따라 차이가 크므로 여러 금융사의 상품을 비교해 보는 것이 좋습니다.",
      },
      {
        q: "2번 대출 한도는 얼마나 되나요?",
        a: "2번 대출 한도는 담보로 설정할 부동산의 평가액에서 1번 대출 잔액을 뺀 나머지(남은 담보력)를 기준으로 결정됩니다. 또한 금융기관별 LTV(Loan-to-Value) 규제를 받으며, 일반적으로 남은 담보력의 60~80% 범위에서 대출이 가능합니다. 정확한 한도는 금융사에서 부동산 감정평가 후 결정됩니다.",
      },
    ],
  },
  en: {
    title: "Second Loan Repayment Calculator",
    subtitle: "Calculate monthly payments and total interest based on loan amount, rate, and repayment method",
    loanAmount: "Loan Amount",
    loanAmountHint: "Enter the loan amount (KRW)",
    rate: "Annual Interest Rate",
    rateHint: "Enter the annual base rate (%)",
    term: "Loan Term (years)",
    termHint: "Enter the loan term (years)",
    repaymentMethod: "Repayment Method",
    equalPrincipal: "Equal Principal",
    equalPrincipalInterest: "Equal Principal + Interest",
    calculate: "Calculate",
    results: "Results",
    monthlyPayment: "Monthly Payment",
    totalInterest: "Total Interest Paid",
    totalRepayment: "Total Principal + Interest Paid",
    monthlyPaymentNote: "With equal principal repayment, the monthly payment decreases over time as the principal portion stays constant and interest declines.",
    preset: "Preset",
    whyCalculator: "Why do you need a second loan repayment calculator?",
    explanation:
      "A second loan (secondary mortgage) is used when you need additional funds while already having a first mortgage on your home. It can be used for education, business capital, home renovation, and more. Knowing how much you will need to pay each month helps with financial planning.\n\nThis calculator computes the monthly payment and total interest based on the loan amount, annual interest rate, loan term, and repayment method (equal principal or equal principal + interest). Comparing both methods helps you quickly determine which suits your financial situation.\n\nActual rates may vary by financial institution, credit score, and property valuation. Please confirm the exact amount with the lender at the time of enrollment.",
    limitations: "This calculator is for reference only and does not guarantee actual repayment amounts.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "Which is better: equal principal or equal principal + interest repayment?",
        a: "In terms of total interest cost, equal principal repayment is generally cheaper. With equal principal repayment, the principal is paid down evenly each month, so the remaining balance decreases faster and interest declines. Equal principal + interest repayment keeps the same monthly payment, making financial planning easier, and the initial monthly payment is typically lower. Choose equal principal + interest if you want lower initial burden, or equal principal if you want to save on total interest.",
      },
      {
        q: "Is the interest rate for a second loan higher than a first mortgage?",
        a: "Generally, the interest rate for a second loan is slightly higher than a first mortgage. The first mortgage often qualifies for preferential rates through housing loan funds, while the second loan has a lower collateral priority, so financial institutions apply a higher risk premium. However, the difference varies widely by credit score and income verification, so comparing products from multiple institutions is recommended.",
      },
      {
        q: "How much is the second loan limit?",
        a: "The second loan limit is based on the remaining collateral value — the property's appraised value minus the outstanding first mortgage balance. It is also subject to LTV (Loan-to-Value) regulations by institution, and generally the loan can be up to 60-80% of the remaining collateral value. The exact limit is determined by the financial institution after property appraisal.",
      },
    ],
  },
  ja: {
    title: "第2ローン返済額計算機",
    subtitle: "借金額・金利・返済方法を入力して月々返済額と総利息を計算",
    loanAmount: "借金額",
    loanAmountHint: "借りる金額を入力してください（単位：ウォン）",
    rate: "年利",
    rateHint: "年基準金利を入力してください（%）",
    term: "ローン期間（年）",
    termHint: "ローン期間を入力してください（年）",
    repaymentMethod: "返済方法",
    equalPrincipal: "元金均等返済",
    equalPrincipalInterest: "元利金均等返済",
    calculate: "計算",
    results: "計算結果",
    monthlyPayment: "月々返済額",
    totalInterest: "総支払利息",
    totalRepayment: "総支払元利合計",
    monthlyPaymentNote: "元金均等返済では、毎月元金が同一で利息が減少するため、月々返済額が減っていきます。",
    preset: "プリセット",
    whyCalculator: "なぜ第2ローン返済額計算機が必要ですか？",
    explanation:
      "第2ローン（二次担保ローン）は、すでに第1住宅担保ローン（ 주택담보대출 ）を保有している状態で追加資金が必要になった場合に利用します。教育費、事業資金、リフォームなどの用途がありますが、毎月どれだけの返済額になるかを事前に把握しておくと、資金計画に役立ちます。\n\nこの計算機は、借金額、年利、ローン期間、返済方法（元金均等返済または元利金均等返済）に基づいて、月々返済額と総支払利息を計算します。2つの返済方法を比較することで、自分の資金状況にどちらが適しているかを素早く把握できます。\n\n実際の適用金利は金融機関、信用格付け、担保評価額などによって異なりますので、正確な金額は加入時に金融機関で再確認してください。",
    limitations: "この計算機は参考用であり、実際の返済額を保証するものではありません。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "元金均等返済と元利金均等返済、どちらが有利ですか？",
        a: "総利息コストだけで見ると、元金均等返済が一般的により安価です。元金均等返済では毎月元金を均等に出すため、残元金が早く減り利息も減少します。一方、元利金均等返済は毎月同額を返済して資金計画がしやすく、初期の月々返済額は元金均等返済より低い傾向があります。初期負担を減らしたいなら元利金均等返済、総利息を節約したいなら元金均等返済が適しています。",
      },
      {
        q: "第2ローンの金利は第1住宅ローンより高いですか？",
        a: "一般的に第2ローンの金利は第1住宅担保ローンより少し高くなります。第1ローンは住宅担保預金などの優遇金利対象になることが多いですが、第2ローンは担保優先順位が下がるため、金融機関がより高いリスクプレミアムを適用するからです。ただし信用格付けや所得証明によって差が大きいため、複数の金融機関の商品を比較することをお勧めします。",
      },
      {
        q: "第2ローンの限度額はいくらですか？",
        a: "第2ローンの限度額は、担保不動産の評価額から第1ローン残額を引いた残り（残担保力）を基準に決定されます。また金融機関ごとのLTV（Loan-to-Value）規制を受け、一般的に残担保力の60〜80%の範囲で融資が可能です。正確な限度額は金融機関による不動産鑑定評価後に決定されます。",
      },
    ],
  },
  es: {
    title: "Calculadora de Pago de Segundo Préstamo",
    subtitle: "Calcula el pago mensual y el interés total según el monto, tasa y método de pago",
    loanAmount: "Monto del Préstamo",
    loanAmountHint: "Ingrese el monto a prestar (KRW)",
    rate: "Tasa de Interés Anual",
    rateHint: "Ingrese la tasa base anual (%)",
    term: "Plazo del Préstamo (años)",
    termHint: "Ingrese el plazo del préstamo (años)",
    repaymentMethod: "Método de Pago",
    equalPrincipal: "Capital Constante",
    equalPrincipalInterest: "Cuota Fija (Capital + Interés)",
    calculate: "Calcular",
    results: "Resultados",
    monthlyPayment: "Pago Mensual",
    totalInterest: "Total de Intereses Pagados",
    totalRepayment: "Total Capital + Intereses Pagados",
    monthlyPaymentNote: "Con pago de capital constante, el pago mensual disminuye con el tiempo porque el capital es fijo y los intereses bajan.",
    preset: "Preestablecido",
    whyCalculator: "¿Por qué necesitas una calculadora de pago de segundo préstamo?",
    explanation:
      "Un segundo préstamo (segunda hipoteca) se usa cuando necesitas fondos adicionales mientras ya tienes una primera hipoteca en tu casa. Puede usarse para educación, capital de negocio, remodelación del hogar y más. Saber cuánto pagarás cada mes te ayuda con la planificación financiera.\n\nEsta calculadora computa el pago mensual y el interés total basado en el monto del préstamo, la tasa de interés anual, el plazo y el método de pago (capital constante o cuota fija). Comparar ambos métodos te ayuda a determinar rápidamente cuál se adapta mejor a tu situación financiera.\n\nLas tasas reales pueden variar por institución financiera, puntaje de crédito y valuación de propiedad. Confirma el monto exacto con el prestamista al momento de la inscripción.",
    limitations: "Esta calculadora es solo de referencia y no garantiza los montos de pago reales.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    faq: [
      {
        q: "¿Cuál es mejor: capital constante o cuota fija?",
        a: "En términos de costo total de intereses, el capital constante generalmente es más barato. Con pago de capital constante, el capital se paga uniformemente cada mes, por lo que el saldo restante disminuye más rápido y los intereses bajan. La cuota fija mantiene el mismo pago mensual, facilitando la planificación financiera, y el pago inicial suele ser más bajo. Elige capital constante si quieres ahorrar en intereses, o cuota fija si quieres menor carga inicial.",
      },
      {
        q: "¿La tasa de interés del segundo préstamo es más alta que la primera hipoteca?",
        a: "Generalmente, la tasa de interés del segundo préstamo es ligeramente más alta que la primera hipoteca. La primera hipoteca a menudo califica para tasas preferenciales, mientras que el segundo préstamo tiene menor prioridad de garantía, por lo que las instituciones financieras aplican un premio de riesgo más alto. Sin embargo, la diferencia varía ampliamente por puntaje de crédito y comprobación de ingresos, por lo que se recomienda comparar productos de múltiples instituciones.",
      },
      {
        q: "¿Cuánto es el límite del segundo préstamo?",
        a: "El límite del segundo préstamo se basa en el valor de garantía restante: el valor tasado de la propiedad menos el saldo pendiente de la primera hipoteca. También está sujeto a regulaciones LTV (Loan-to-Value) por institución, y generalmente el préstamo puede ser hasta el 60-80% del valor de garantía restante. El límite exacto lo determina la institución financiera después de la valuación de la propiedad.",
      },
    ],
  },
};

export default async function SecondLoanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Tools");
  const lang = locale as Locale;
  const d = data[lang];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.explanation.split("\n\n")[0],
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <SecondLoanCalculator d={d} lang={lang} />

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyCalculator}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.explanation}</p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {faq.q}
                </p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
