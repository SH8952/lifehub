import { SITE_URL, languageAlternates } from "@/lib/seo";
import GiftTaxEstimator from "./GiftTaxEstimatorClient";
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
      languages: languageAlternates("/tool/gift-tax-estimator"),
    },
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
  return <GiftTaxEstimator initialLocale={locale as Locale} />;
}
