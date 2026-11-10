import { SITE_URL, pageAlternates } from "@/lib/seo";
import ExerciseCalorieCalculator from "./ExerciseCalorieCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/exercise-calorie-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/exercise-calorie-calculator`,
    },
  };
}

export default async function ExerciseCalorieCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="exercise-calorie-calculator" />
      <ExerciseCalorieCalculator initialLocale={locale as Locale} />
    </>
  );
}
