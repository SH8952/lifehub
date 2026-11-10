import { SITE_URL, pageAlternates } from "@/lib/seo";
import WeightLossGoalCalculator from "./WeightLossGoalCalculatorClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

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
    alternates: pageAlternates(locale, "/tool/weight-loss-goal-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/weight-loss-goal-calculator`,
    },
  };
}

export default async function WeightLossGoalCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="weight-loss-goal-calculator" />
      <WeightLossGoalCalculator initialLocale={locale as Locale} />
    </>
  );
}
