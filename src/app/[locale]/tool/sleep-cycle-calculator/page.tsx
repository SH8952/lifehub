import { SITE_URL, languageAlternates } from "@/lib/seo";
import SleepCycleCalculator from "./SleepCycleCalculatorClient";
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
      languages: languageAlternates("/tool/sleep-cycle-calculator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/sleep-cycle-calculator`,
    },
  };
}

export default async function SleepCycleCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SleepCycleCalculator initialLocale={locale as Locale} />;
}
