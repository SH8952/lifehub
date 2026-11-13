import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SITE_URL, pageAlternates } from "@/lib/seo";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";
import GameFrame from "@/components/mini-game/GameFrame";
import { categoryToolsMap, nameKeyMap } from "@/lib/tools-data";
import {
  MINI_GAME_COMMON,
  MINI_GAME_TEXT,
  toMiniGameLocale,
  type MiniGameSlug,
} from "@/lib/mini-games-data";

// 미니 게임 5종이 함께 쓰는 페이지 틀.
// 위: 뒤로가기(ToolBreadcrumbJsonLd) → 제목 → 게임 상자(폰 비율, 가운데 정렬)
// 아래: 게임 소개 · 조작 방법 · 요령 · FAQ · 다른 미니 게임 · 안내 문구

export async function miniGameMetadata(
  params: Promise<{ locale: string }>,
  slug: MiniGameSlug
): Promise<Metadata> {
  const { locale } = await params;
  const d = MINI_GAME_TEXT[slug][toMiniGameLocale(locale)];
  return {
    title: d.title,
    description: d.subtitle,
    alternates: pageAlternates(locale, `/tool/${slug}`),
    openGraph: {
      title: d.title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/${slug}`,
    },
  };
}

export default async function MiniGamePage({
  params,
  slug,
}: {
  params: Promise<{ locale: string }>;
  slug: MiniGameSlug;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = toMiniGameLocale(locale);
  const d = MINI_GAME_TEXT[slug][lang];
  const c = MINI_GAME_COMMON[lang];
  const nameKey = nameKeyMap[lang];
  const others = (categoryToolsMap["mini-games"] ?? []).filter((t) => t.id !== slug);

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
    url: `${SITE_URL}/${locale}/tool/${slug}`,
    applicationCategory: "GameApplication",
    operatingSystem: "Any (runs in the browser)",
    inLanguage: lang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId={slug} />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }} />

        <h1 className="mb-2 text-2xl font-bold">{d.title}</h1>
        <p className="mb-6 text-muted-foreground">{d.subtitle}</p>

        <GameFrame slug={slug} locale={lang} title={`${d.title} - ${c.frameLabel}`} />

        <section className="mt-10">
          <h2 className="mb-2 text-lg font-semibold">{c.aboutTitle}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{d.about}</p>
        </section>

        <section className="mt-8">
          <h2 className="mb-2 text-lg font-semibold">{c.howTitle}</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
            {d.howTo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-2 text-lg font-semibold">{c.tipsTitle}</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
            {d.tips.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">{c.faqTitle}</h2>
          <div className="space-y-4">
            {d.faq.map((f, i) => (
              <div key={i}>
                <p className="font-medium">{f.q}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {others.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-2 text-lg font-semibold">{c.moreTitle}</h2>
            <ul className="flex flex-wrap gap-2">
              {others.map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/tool/${t.id}`}
                    className="inline-block rounded-full border px-3 py-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t[nameKey]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/category/mini-games"
                  className="inline-block rounded-full border px-3 py-1 text-sm font-medium hover:bg-muted"
                >
                  {c.moreLink}
                </Link>
              </li>
            </ul>
          </section>
        )}

        <footer className="mt-8 border-t pt-4 text-xs text-muted-foreground">{c.footer}</footer>
      </div>
    </>
  );
}
