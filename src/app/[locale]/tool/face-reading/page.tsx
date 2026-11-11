import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SITE_URL, pageAlternates } from "@/lib/seo";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";
import FaceReadingClient from "./FaceReadingClient";
import { i18n, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const d = i18n(locale);
  return {
    title: d.title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/face-reading"),
    openGraph: {
      title: d.title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/face-reading`,
    },
  };
}

export default async function FaceReadingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = (["ko", "en", "ja", "es"].includes(locale) ? locale : "ko") as Locale;
  const d = i18n(lang);

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: d.title,
    description: d.subtitle,
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="face-reading" />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }} />

        <h1 className="mb-2 text-2xl font-bold">{d.title}</h1>
        <p className="mb-6 text-muted-foreground">{d.subtitle}</p>

        <FaceReadingClient initialLocale={lang} />

        <section className="mt-10">
          <h2 className="mb-2 text-lg font-semibold">{d.whatIsTitle}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{d.whatIs}</p>
        </section>

        <section className="mt-8">
          <h2 className="mb-2 text-lg font-semibold">{d.howTitle}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{d.how}</p>
        </section>

        <section className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">FAQ</h2>
          <div className="space-y-4">
            {d.faq.map((f, i) => (
              <div key={i}>
                <p className="font-medium">{f.q}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-8 text-xs text-muted-foreground">{d.disclaimer}</p>

        <footer className="mt-6 border-t pt-4 text-xs text-muted-foreground">{d.footer}</footer>
      </div>
    </>
  );
}
