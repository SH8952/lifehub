import { SITE_URL, pageAlternates } from "@/lib/seo";
import DuplicateLineRemover from "./DuplicateLineRemoverClient";
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
    alternates: pageAlternates(locale, "/tool/duplicate-line-remover"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/duplicate-line-remover`,
    },
  };
}

export default async function DuplicateLineRemoverPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <DuplicateLineRemover initialLocale={locale as Locale} />;
}
