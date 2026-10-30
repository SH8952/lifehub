import { SITE_URL, languageAlternates } from "@/lib/seo";
import TraitMindsetCardMaker from "./TraitMindsetCardMakerClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: { languages: languageAlternates("/tool/trait-mindset-card-maker") },
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/trait-mindset-card-maker` },
  };
}

export default async function TraitMindsetCardMakerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TraitMindsetCardMaker initialLocale={locale as Locale} />;
}
