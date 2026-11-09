import { SITE_URL, pageAlternates } from "@/lib/seo";
import MovingCostEstimator from "./MovingCostEstimatorClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/moving-cost-estimator"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/moving-cost-estimator` },
  };
}

export default async function MovingCostEstimatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <MovingCostEstimator initialLocale={locale as Locale} />;
}
