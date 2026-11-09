import { SITE_URL, pageAlternates } from "@/lib/seo";
import SimpleChecklistMaker from "./SimpleChecklistMakerClient";
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
    alternates: pageAlternates(locale, "/tool/simple-checklist-maker"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/simple-checklist-maker`,
    },
  };
}

export default async function SimpleChecklistMakerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SimpleChecklistMaker initialLocale={locale as Locale} />;
}
