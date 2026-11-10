import { SITE_URL, pageAlternates } from "@/lib/seo";
import GiftTaxEstimator from "./GiftTaxEstimatorClient";
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
    alternates: pageAlternates(locale, "/tool/gift-tax-estimator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/gift-tax-estimator`,
    },
  };
}

export default async function GiftTaxEstimatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="gift-tax-estimator" />
      <GiftTaxEstimator initialLocale={locale as Locale} />
    </>
  );
}
