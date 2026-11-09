import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import Link from "next/link";
import BalanceGameClient from "./BalanceGameClient";
import { i18n, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale as Locale) || "ko";
  const d = i18n(lang);
  return {
    title: d.title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/balance-game"),
  };
}

export default async function BalanceGamePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale as Locale) || "ko";
  const d = i18n(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
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
    <div className="mx-auto max-w-3xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />

      <h1 className="mb-2 text-2xl font-bold text-gray-900">{d.title}</h1>
      <p className="mb-6 text-gray-600">{d.subtitle}</p>

      <BalanceGameClient initialLocale={lang} />

      <section className="mt-10">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">{d.whyBalance}</h2>
        <p className="text-sm leading-relaxed text-gray-700">{d.balanceExplanation}</p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">FAQ</h2>
        <div className="space-y-4">
          {d.faq.map((f, i) => (
            <div key={i}>
              <p className="font-medium text-gray-900">{f.q}</p>
              <p className="mt-1 text-sm text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-8 text-xs text-gray-500">{d.disclaimer}</p>

      <footer className="mt-6 border-t pt-4 text-xs text-gray-400">{d.footer}</footer>

      <div className="mt-6">
        <Link href={`/${lang}`} className="text-sm text-blue-600 hover:underline">
          ← {lang === "ko" ? "홈으로" : lang === "ja" ? "ホームへ" : lang === "es" ? "Inicio" : "Back to home"}
        </Link>
      </div>
    </div>
  );
}
