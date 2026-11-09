import { SITE_URL, pageAlternates } from "@/lib/seo";
import SeverancePayCalculator from "./SeverancePayCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/severance-pay-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/severance-pay-calculator`,
    },
  };
}

export default async function SeverancePayCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SeverancePayCalculator initialLocale={locale as Locale} />;
}
