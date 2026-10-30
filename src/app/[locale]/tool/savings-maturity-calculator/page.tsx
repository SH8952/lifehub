import { SITE_URL, languageAlternates } from "@/lib/seo";
import SavingsMaturityCalculator from "./SavingsMaturityCalculatorClient";
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
      languages: languageAlternates("/tool/savings-maturity-calculator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/savings-maturity-calculator`,
    },
  };
}

export default async function SavingsMaturityCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SavingsMaturityCalculator initialLocale={locale as Locale} />;
}
