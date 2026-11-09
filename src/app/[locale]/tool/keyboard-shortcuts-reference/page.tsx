import { SITE_URL, pageAlternates } from "@/lib/seo";
import KeyboardShortcutsReference from "./KeyboardShortcutsReferenceClient";
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
    alternates: pageAlternates(locale, "/tool/keyboard-shortcuts-reference"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/keyboard-shortcuts-reference`,
    },
  };
}

export default async function KeyboardShortcutsReferencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <KeyboardShortcutsReference initialLocale={locale as Locale} />;
}
