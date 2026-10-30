import { SITE_URL, languageAlternates } from "@/lib/seo";
import LeaseInsuranceCalculator from "./LeaseInsuranceCalculatorClient";
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
      languages: languageAlternates("/tool/lease-insurance-calculator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/lease-insurance-calculator`,
    },
  };
}

export default async function LeaseInsuranceCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LeaseInsuranceCalculator initialLocale={locale as Locale} />;
}
