import { SITE_URL, pageAlternates } from "@/lib/seo";
import TraitMindsetCardMaker from "./TraitMindsetCardMakerClient";
import { data, type Locale } from "./data";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/trait-mindset-card-maker"),
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/trait-mindset-card-maker` },
  };
}

export default async function TraitMindsetCardMakerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="trait-mindset-card-maker" />
      <TraitMindsetCardMaker initialLocale={locale as Locale} />
    </>
  );
}
