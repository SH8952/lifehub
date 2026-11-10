import { SITE_URL, pageAlternates } from "@/lib/seo";
import YearEndTaxRefundEstimator from "./YearEndTaxRefundEstimatorClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

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
    alternates: pageAlternates(locale, "/tool/year-end-tax-refund-estimator"),
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
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="year-end-tax-refund-estimator" />
      <YearEndTaxRefundEstimator initialLocale={locale as Locale} />
    </>
  );
}
