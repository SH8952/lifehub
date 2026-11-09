import { SITE_URL, pageAlternates } from "@/lib/seo";
import CarInsuranceEstimator from "./CarInsuranceEstimatorClient";
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
    alternates: pageAlternates(locale, "/tool/car-insurance-estimator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/car-insurance-estimator`,
    },
  };
}

export default async function CarInsuranceEstimatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CarInsuranceEstimator initialLocale={locale as Locale} />;
}
