import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import FixedDepositInterest from "@/components/fixed-deposit-interest";
import { SITE_URL, languageAlternates } from "@/lib/seo";

type Locale = "ko" | "en" | "ja" | "es";

interface FAQ {
  q: string;
  a: string;
}

const data: Record<Locale, {
  title: string;
  subtitle: string;
  principal: string;
  principalHint: string;
  rate: string;
  rateHint: string;
  period: string;
  periodHint: string;
  compound: string;
  compoundOptions: Record<string, string>;
  calculate: string;
  results: string;
  maturityInterest: string;
  maturityPrincipalInterest: string;
  afterTaxInterest: string;
  taxRate: string;
  preset: string;
  whyCalculator: string;
  interestExplanation: string;
  limitations: string;
  footer: string;
  faq: FAQ[];
}> = {
  ko: {
    title: "만기 예금 이자 계산기",
    subtitle: "원금, 금리, 기간을 입력하면 만기 이자와 세후 수익을 계산합니다",
    principal: "원금",
    principalHint: "예치할 금액을 입력하세요 (단위: 원)",
    rate: "연 이자율",
    rateHint: "연 기본 금리를 입력하세요 (%)",
    period: "기간 (년)",
    periodHint: "예치 기간을 입력하세요 (년)",
    compound: "복리 여부",
    compoundOptions: {
      "simple": "단리",
      "compound": "복리",
    },
    calculate: "계산하기",
    results: "계산 결과",
    maturityInterest: "만기 이자",
    maturityPrincipalInterest: "만기 원리합계",
    afterTaxInterest: "세후 이자 (22% 원천징수)",
    taxRate: "세율 22%",
    preset: "프리셋",
    whyCalculator: "왜 예금 이자 계산기가 필요한가요?",
    interestExplanation:
      "은행 예금 상품을 비교할 때, 예상 이자 수익을 미리 계산하면 훨씬 합리적인 선택이 가능합니다. 이 계산기는 원금, 연 이자율, 예치 기간을 기반으로 만기 시 받을 수 있는 이자 수익을 빠르게 계산해 드립니다.\n\n복리 상품을 선택할 경우 단리 대비 추가 수익을 확인할 수 있으며, 원천징수세(22%)를 반영한 세후 수익도 함께 계산됩니다. 실제 은행 상품을 선택하기 전에 예상 수익을 미리 확인하고 비교해 보세요.\n\n단, 실제 금리는 은행별·상품별로 상이할 수 있으므로, 정확한 금액은 가입 시 은행에서 다시 확인하시기 바랍니다.",
    limitations: "이 계산기는 참고용이며, 실제 이자 금액을 보장하지 않습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "단리와 복리 중 어떤 것이 더 유리한가요?",
        a: "복리가 더 유리합니다. 단리는 원금에만 이자가 붙지만, 복리는 원금에 accrued 이자가 추가로 이자가 되어 복리로 불어납니다. 예를 들어 원금 1억 원, 연 3%, 10년 조건에서 단리는 총 3천만 원의 이자가 붙지만, 복리는 약 3,439만 원의 이자(원리합계 약 1.344억 원)가 됩니다. 단기가 아닌 장기 예금일수록 복리 효과가 큽니다.",
      },
      {
        q: "예금 이자에 붙는 세금은 얼마인가요?",
        a: "예금 이자에는 22%의 원천징수세(본인세 6.3% + 지방소득세 0.63% + 종합소득세 15.4%)가 부과됩니다. 즉, 100만 원의 이자가 생기면 세후 78만 원을 받게 됩니다. 2022년 1월 1일 이후 신규 가입부터 종합소득 6천만 원 이상자는 종합과세 선택도 가능합니다.",
      },
      {
        q: "만기 전에 인출하면 어떻게 되나요?",
        a: "만기 전에 예금을 인출하면 보통 약정 이자보다 낮은 이자가 적용되거나 이자가 전혀 붙지 않을 수 있습니다. 또한 조기 인출 시 패널티가 부과되는 상품도 있습니다. 따라서 여유 자금으로만 예금 가입하시고, 필요 시 긴급 자금은 별도 준비하는 것이 좋습니다.",
      },
    ],
  },
  en: {
    title: "Fixed Deposit Interest Calculator",
    subtitle: "Calculate maturity interest and after-tax returns",
    principal: "Principal",
    principalHint: "Enter the amount to deposit (KRW)",
    rate: "Annual Interest Rate",
    rateHint: "Enter the annual base rate (%)",
    period: "Term (years)",
    periodHint: "Enter the deposit term (years)",
    compound: "Compound Interest",
    compoundOptions: {
      "simple": "Simple Interest",
      "compound": "Compound Interest",
    },
    calculate: "Calculate",
    results: "Results",
    maturityInterest: "Maturity Interest",
    maturityPrincipalInterest: "Total at Maturity",
    afterTaxInterest: "After-Tax Interest (22% withholding)",
    taxRate: "Tax rate 22%",
    preset: "Preset",
    whyCalculator: "Why do you need a deposit interest calculator?",
    interestExplanation:
      "When comparing bank deposit products, calculating expected interest income in advance helps you make more informed decisions. This calculator quickly computes the interest you can earn at maturity based on principal, annual interest rate, and term.\n\nIf you choose a compound interest product, you can see additional earnings compared to simple interest. The after-tax return is also calculated with 22% withholding tax. Check your expected returns in advance before choosing a real bank product.\n\nHowever, actual rates may vary by bank and product, so please confirm the exact amount with the bank at the time of enrollment.",
    limitations: "This calculator is for reference only and does not guarantee actual interest amounts.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "Which is more advantageous: simple or compound interest?",
        a: "Compound interest is more advantageous. Simple interest applies only to the principal, while compound interest applies interest to both principal and accrued interest. For example, with a principal of 100 million KRW, 3% annual rate, and 10-year term, simple interest yields 30 million KRW in interest, while compound interest yields approximately 34.4 million KRW (total about 134.4 million KRW).",
      },
      {
        q: "How much tax is applied to deposit interest?",
        a: "A 22% withholding tax (national income tax 6.3% + local income tax 0.63% + comprehensive income tax 15.4%) is applied to deposit interest. That is, if you earn 1 million KRW in interest, you receive 780,000 KRW after tax. For those with comprehensive income over 60 million KRW since Jan 1, 2022, comprehensive taxation option is also available.",
      },
      {
        q: "What happens if I withdraw before maturity?",
        a: "If you withdraw before maturity, a lower interest rate than the contracted rate may apply, or no interest at all. Some products also charge early withdrawal penalties. Therefore, only deposit funds you can spare, and prepare separate emergency funds if needed.",
      },
    ],
  },
  ja: {
    title: "定期預金利息計算機",
    subtitle: "元金・金利・期間を入力して満期利息と税後収益を計算",
    principal: "元金",
    principalHint: "預ける金額を入力してください（単位：ウォン）",
    rate: "年利",
    rateHint: "年基準金利を入力してください（%）",
    period: "期間（年）",
    periodHint: "預入期間を入力してください（年）",
    compound: "複利の有無",
    compoundOptions: {
      "simple": "単利",
      "compound": "複利",
    },
    calculate: "計算",
    results: "計算結果",
    maturityInterest: "満期利息",
    maturityPrincipalInterest: "満期元利合計",
    afterTaxInterest: "税後利息（22%源泉徴収）",
    taxRate: "税率22%",
    preset: "プリセット",
    whyCalculator: "なぜ定期預金利息計算機が必要ですか？",
    interestExplanation:
      "銀行預金商品を比較する際、予想利息収益を事前に計算することで、より合理的な選択が可能になります。この計算機は、元金、年利、預入期間に基づいて、満期時に受け取れる利息収益を素早く計算します。\n\n複利商品を選択した場合、単利との追加収益を確認でき、源泉徴収税(22%)を反映した税後収益も同時に計算されます。実際の銀行商品を選ぶ前に予想収益を事前に確認して比較してみてください。\n\nただし、実際の金利は銀行・商品によって異なりますので、正確な金額は加入時に銀行で再確認してください。",
    limitations: "この計算機は参考用であり、実際の利息金額を保証するものではありません。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "単利と複利、どちらが有利ですか？",
        a: "複利の方が有利です。単利は元金にのみ利息が付きますが、複利は元金に累積した利息がさらに利息をつけるため、複利で増えていきます。例えば元金1億ウォン、年3%、10年の条件では、単利は総利息3,000万ウォンですが、複利は約3,439万ウォンの利息（元利合計約1.344億ウォン）になります。長期預金ほど複利効果が大きくなります。",
      },
      {
        q: "預金利息にかかる税金はいくらですか？",
        a: "預金利息には22%の源泉徴収税（本人税6.3% + 地方所得税0.63% + 総合所得税15.4%）が課されます。つまり、100万ウォンの利息が生じると税後78万ウォンを受け取ります。2022年1月1日以後の新規加入から総合所得6,000万ウォン以上者は総合課税選択も可能です。",
      },
      {
        q: "満期前に引き出すとどうなりますか？",
        a: "満期前に預金を引き出すと、通常約定利息より低い利息が適用されたり、利息が全くつかない場合があります。また、早期引き出しペナルティが課される商品もあります。したがって、余剰資金のみで預金加入し、必要時は別途緊急資金を準備することをお勧めします。",
      },
    ],
  },
  es: {
    title: "Calculadora de Intereses de Depósito Fijo",
    subtitle: "Calcula los intereses de vencimiento y el rendimiento después de impuestos",
    principal: "Capital",
    principalHint: "Ingrese el monto a depositar (KRW)",
    rate: "Tasa de Interés Anual",
    rateHint: "Ingrese la tasa base anual (%)",
    period: "Plazo (años)",
    periodHint: "Ingrese el plazo del depósito (años)",
    compound: "Interés Compuesto",
    compoundOptions: {
      "simple": "Interés Simple",
      "compound": "Interés Compuesto",
    },
    calculate: "Calcular",
    results: "Resultados",
    maturityInterest: "Intereses al Vencimiento",
    maturityPrincipalInterest: "Total al Vencimiento",
    afterTaxInterest: "Intereses Después de Impuestos (retención 22%)",
    taxRate: "Tasa impositiva 22%",
    preset: "Preestablecido",
    whyCalculator: "¿Por qué necesitas una calculadora de intereses de depósito?",
    interestExplanation:
      "Al comparar productos bancarios de depósito, calcular los ingresos por intereses esperados con anticipación te ayuda a tomar decisiones más informadas. Esta calculadora computa rápidamente los intereses que puedes ganar al vencimiento basándose en el capital, la tasa de interés anual y el plazo.\n\nSi eliges un producto de interés compuesto, puedes ver ganancias adicionales comparado con interés simple. El rendimiento después de impuestos también se calcula con un 22% de retención en la fuente. Revisa tus ingresos esperados antes de elegir un producto bancario real.\n\nSin embargo, las tasas reales pueden variar por banco y producto, así que confirma el monto exacto con el banco al momento de la inscripción.",
    limitations: "Esta calculadora es solo de referencia y no garantiza montos de interés reales.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    faq: [
      {
        q: "¿Cuál es más ventajoso: interés simple o compuesto?",
        a: "El interés compuesto es más ventajoso. El interés simple se aplica solo al capital, mientras que el interés compuesto aplica intereses tanto al capital como a los intereses acumulados. Por ejemplo, con un capital de 100 millones KRW, tasa anual 3% y plazo de 10 años, el interés simple genera 30 millones KRW de intereses, mientras que el compuesto genera aproximadamente 34.4 millones KRW (total aproximadamente 134.4 millones KRW).",
      },
      {
        q: "¿Cuánto impuesto se aplica a los intereses de depósito?",
        a: "Se aplica un 22% de retención en la fuente (impuesto nacional 6.3% + impuesto local 0.63% + impuesto integral 15.4%). Es decir, si ganas 1 millón KRW de intereses, recibes 780,000 KRW después de impuestos. Para quienes tienen ingresos integrales sobre 60 millones KRW desde el 1 de enero de 2022, también está disponible la opción de tributación integral.",
      },
      {
        q: "¿Qué pasa si retiro antes del vencimiento?",
        a: "Si retiras antes del vencimiento, puede aplicarse una tasa de interés más baja que la contratada, o incluso sin intereses. Algunos productos también cobran penalizaciones por retiro anticipado. Por lo tanto, deposita solo fondos que puedas dejar quietos y prepara fondos de emergencia separados si es necesario.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/fixed-deposit-interest"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/fixed-deposit-interest`,
    },
  };
}

export default async function FixedDepositPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Tools");
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;

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
            description: d.interestExplanation.split("\n\n")[0],
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <FixedDepositInterest d={d} lang={lang} />

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyCalculator}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.interestExplanation}</p>
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
