import { SITE_URL, pageAlternates } from "@/lib/seo";
import DividendYieldCalculator from "./DividendYieldCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/dividend-yield-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/dividend-yield-calculator`,
    },
  };
}

export default async function DividendYieldCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <DividendYieldCalculator initialLocale={locale as Locale} />;
}
