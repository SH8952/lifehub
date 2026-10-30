import { SITE_URL, languageAlternates } from "@/lib/seo";
import ChaoticPersonalityTest from "./ChaoticPersonalityTestClient";
import { data, type Locale } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: { languages: languageAlternates("/tool/chaotic-personality-test") },
    openGraph: { title, description: d.subtitle, url: `${SITE_URL}/${locale}/tool/chaotic-personality-test` },
  };
}

export default async function ChaoticPersonalityTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ChaoticPersonalityTest initialLocale={locale as Locale} />;
}
