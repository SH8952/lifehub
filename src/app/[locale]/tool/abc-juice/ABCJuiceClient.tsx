"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






type RecipeTab = number | null;

export default function ABCJuice({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const [activeTab, setActiveTab] = useState<RecipeTab>(0);

  const d = i18nData[locale];

  const activeRecipe = activeTab !== null ? d.recipes[activeTab] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: "ABC fruit juice diet recipes",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faq.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      {/* Intro */}
      <div className="mt-4 text-base leading-relaxed text-muted-foreground">{d.intro}</div>

      {/* Recipe tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {d.recipes.map((recipe, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === i
                ? "bg-indigo-600 text-white"
                : "hover:bg-muted"
            }`}
          >
            {recipe.name}
          </button>
        ))}
      </div>

      {/* Active recipe */}
      {activeRecipe && (
        <div className="mt-6">
          <Card className="border shadow-md">
            <CardContent className="space-y-6 p-6">
              <div>
                <h2 className={`text-2xl font-bold text-${activeRecipe.color}-600`}>{activeRecipe.name}</h2>
                <p className="mt-1 font-medium text-muted-foreground">{activeRecipe.effect}</p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">재료 (Ingredients)</h3>
                <ul className="space-y-1 pl-5">
                  {activeRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="list-disc text-base">
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">만드는 방법 (Method)</h3>
                <ol className="space-y-2 pl-5">
                  {activeRecipe.method.map((step, i) => (
                    <li key={i} className="list-decimal text-base">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tips */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.tips}</h2>
        <div className="space-y-2">
          {d.tipsList.map((tip, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-3">
                <p className="text-base">
                  <span className="mr-2 text-indigo-600">•</span>
                  {tip}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why section */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.why}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.whyExplanation}</p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">{i + 1}. {faq.q}</p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
