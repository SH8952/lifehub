import { SITE_URL, pageAlternates } from "@/lib/seo";
import DateDiffCalculator from "./DateDiffCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/date-diff-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/date-diff-calculator`,
    },
  };
}

export default async function DateDiffCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <DateDiffCalculator initialLocale={locale as Locale} />;
}
