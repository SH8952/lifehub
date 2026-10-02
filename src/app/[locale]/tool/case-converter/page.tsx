import { SITE_URL, languageAlternates } from "@/lib/seo";
import CaseConverter from "./CaseConverterClient";
import { data, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/case-converter"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/case-converter`,
    },
  };
}

export default async function CaseConverterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CaseConverter initialLocale={locale as Locale} />;
}
