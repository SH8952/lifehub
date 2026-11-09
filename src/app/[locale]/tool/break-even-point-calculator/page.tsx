import { SITE_URL, pageAlternates } from "@/lib/seo";
import BreakEvenPointCalculator from "./BreakEvenPointCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/break-even-point-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/break-even-point-calculator`,
    },
  };
}

export default async function BreakEvenPointCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BreakEvenPointCalculator initialLocale={locale as Locale} />;
}
