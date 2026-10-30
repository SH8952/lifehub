import { SITE_URL, languageAlternates } from "@/lib/seo";
import RealtyCommissionCalculator from "./RealtyCommissionCalculatorClient";
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
      languages: languageAlternates("/tool/realty-commission-calculator"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/realty-commission-calculator`,
    },
  };
}

export default async function RealtyCommissionCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RealtyCommissionCalculator initialLocale={locale as Locale} />;
}
