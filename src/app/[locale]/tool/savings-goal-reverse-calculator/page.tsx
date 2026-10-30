import { SITE_URL, languageAlternates } from "@/lib/seo";
import SavingsGoalReverseCalculator from "./SavingsGoalReverseCalculatorClient";
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
      languages: languageAlternates("/tool/savings-goal-reverse-calculator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/savings-goal-reverse-calculator`,
    },
  };
}

export default async function SavingsGoalReverseCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SavingsGoalReverseCalculator initialLocale={locale as Locale} />;
}
