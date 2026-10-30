import { SITE_URL, languageAlternates } from "@/lib/seo";
import YearEndTaxRefundEstimator from "./YearEndTaxRefundEstimatorClient";
import { data, type Locale } from "./data";

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
      languages: languageAlternates("/tool/year-end-tax-refund-estimator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/year-end-tax-refund-estimator`,
    },
  };
}

export default async function YearEndTaxRefundEstimatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <YearEndTaxRefundEstimator initialLocale={locale as Locale} />;
}
