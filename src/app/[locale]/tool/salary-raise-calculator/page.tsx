import { SITE_URL, pageAlternates } from "@/lib/seo";
import SalaryRaiseCalculator from "./SalaryRaiseCalculatorClient";
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
    alternates: pageAlternates(locale, "/tool/salary-raise-calculator"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/salary-raise-calculator`,
    },
  };
}

export default async function SalaryRaiseCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SalaryRaiseCalculator initialLocale={locale as Locale} />;
}
