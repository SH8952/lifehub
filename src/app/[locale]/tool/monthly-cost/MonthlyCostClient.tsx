"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Home, Utensils, Train, Phone } from "lucide-react";
import { i18nData, type Locale, type CityCost, type Data } from "./data";






const toWon = (amount: number) => `${amount.toLocaleString()} USD`;



function CostBar({ value, max, color }: { value: number; max: number; color: string }) {
  const percent = (value / max) * 100;
  return (
    <div className="h-2 w-full rounded-full bg-gray-200">
      <div className={`h-2 rounded-full ${color}`} style={{ width: `${Math.min(percent, 100)}%` }} />
    </div>
  );
}

function LevelBadge({ level, d }: { level: string; d: Data }) {
  if (level === "low") return <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">{d.low}</span>;
  if (level === "medium") return <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700">{d.medium}</span>;
  return <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-700">{d.high}</span>;
}

export default function MonthlyCost({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"total" | "rent" | "food">("total");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const d = i18nData[locale];
  const maxTotal = Math.max(...d.cities.map((c) => c.total));

  const filtered = d.cities
    .filter((c) => {
      const q = search.toLowerCase();
      return c.city.toLowerCase().includes(q) || c.country.toLowerCase().includes(q) || c.cityEn.toLowerCase().includes(q);
    })
    .sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      return sortDir === "asc" ? aVal - bVal : bVal - aVal;
    });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: "Monthly living cost comparison by city",
            applicationCategory: "TravelApplication",
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

      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{d.whyExplanation}</p>

      {/* Search + Sort */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder={d.filterPlaceholder}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "total" | "rent" | "food")}
            className="h-10 rounded-md border bg-background px-3 text-sm"
          >
            <option value="total">{d.total}</option>
            <option value="rent">{d.rent}</option>
            <option value="food">{d.food}</option>
          </select>
          <button
            onClick={() => setSortDir((prev) => (prev === "asc" ? "desc" : "asc"))}
            className="h-10 rounded-md border px-3 text-sm hover:bg-muted"
          >
            {sortDir === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>

      {/* Cost Table */}
      <div className="mt-6 space-y-4">
        {filtered.length === 0 ? (
          <div className="py-12 text-center text-lg text-muted-foreground">{d.filterNone}</div>
        ) : (
          filtered.map((city) => (
            <Card key={city.cityEn} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3 sm:w-64">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                    <div>
                      <p className="font-semibold">{city.city}</p>
                      <p className="text-sm text-muted-foreground">{city.country}</p>
                    </div>
                  </div>
                  <LevelBadge level={city.costLevel} d={d} />
                  <div className="grid flex-1 grid-cols-2 gap-2 text-sm sm:grid-cols-4">
                    <div>
                      <p className="text-muted-foreground">{d.rent}</p>
                      <p className="font-semibold">{toWon(city.rent)}</p>
                      <CostBar value={city.rent} max={maxTotal} color="bg-indigo-500" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">{d.food}</p>
                      <p className="font-semibold">{toWon(city.food)}</p>
                      <CostBar value={city.food} max={maxTotal} color="bg-green-500" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">{d.transport}</p>
                      <p className="font-semibold">{toWon(city.transport)}</p>
                      <CostBar value={city.transport} max={maxTotal} color="bg-yellow-500" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">{d.utilities}+{d.internet}</p>
                      <p className="font-semibold">{toWon(city.utilities + city.internet)}</p>
                      <CostBar value={city.utilities + city.internet} max={maxTotal} color="bg-gray-500" />
                    </div>
                  </div>
                  <div className="sm:w-32">
                    <p className="text-sm text-muted-foreground">{d.monthlyTotal}</p>
                    <p className="text-2xl font-bold text-indigo-600">{toWon(city.total)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Tips */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.tips}</h2>
        <ul className="space-y-2">
          {d.tipsList.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1 text-indigo-600">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
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
