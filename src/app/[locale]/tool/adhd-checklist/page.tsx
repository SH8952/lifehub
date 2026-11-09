import { SITE_URL, pageAlternates } from "@/lib/seo";
import ADHDChecklist from "./ADHDChecklistClient";
import { i18nData, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = i18nData[lang] ?? i18nData.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/adhd-checklist"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/adhd-checklist`,
    },
  };
}

export default async function ADHDChecklistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ADHDChecklist initialLocale={locale as Locale} />;
}
