import { SITE_URL, languageAlternates } from "@/lib/seo";
import BodyFatEstimator from "./BodyFatEstimatorClient";
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
      languages: languageAlternates("/tool/body-fat-estimator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/body-fat-estimator`,
    },
  };
}

export default async function BodyFatEstimatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BodyFatEstimator initialLocale={locale as Locale} />;
}
