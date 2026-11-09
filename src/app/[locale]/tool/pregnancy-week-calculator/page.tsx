import { SITE_URL, pageAlternates } from "@/lib/seo";
import PregnancyWeekCalculator from "./PregnancyWeekCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/pregnancy-week-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pregnancy-week-calculator`,
    },
  };
}

export default async function PregnancyWeekCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PregnancyWeekCalculator initialLocale={locale as Locale} />;
}
