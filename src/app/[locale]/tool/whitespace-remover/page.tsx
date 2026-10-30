import { SITE_URL, languageAlternates } from "@/lib/seo";
import WhitespaceRemover from "./WhitespaceRemoverClient";
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
      languages: languageAlternates("/tool/whitespace-remover"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/whitespace-remover`,
    },
  };
}

export default async function WhitespaceRemoverPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <WhitespaceRemover initialLocale={locale as Locale} />;
}
