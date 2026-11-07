"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const CODES: { code: number; text: string; category: "1xx" | "2xx" | "3xx" | "4xx" | "5xx" }[] = [
  { code: 100, text: "Continue", category: "1xx" },
  { code: 101, text: "Switching Protocols", category: "1xx" },
  { code: 200, text: "OK", category: "2xx" },
  { code: 201, text: "Created", category: "2xx" },
  { code: 202, text: "Accepted", category: "2xx" },
  { code: 204, text: "No Content", category: "2xx" },
  { code: 206, text: "Partial Content", category: "2xx" },
  { code: 301, text: "Moved Permanently", category: "3xx" },
  { code: 302, text: "Found", category: "3xx" },
  { code: 304, text: "Not Modified", category: "3xx" },
  { code: 307, text: "Temporary Redirect", category: "3xx" },
  { code: 308, text: "Permanent Redirect", category: "3xx" },
  { code: 400, text: "Bad Request", category: "4xx" },
  { code: 401, text: "Unauthorized", category: "4xx" },
  { code: 403, text: "Forbidden", category: "4xx" },
  { code: 404, text: "Not Found", category: "4xx" },
  { code: 405, text: "Method Not Allowed", category: "4xx" },
  { code: 408, text: "Request Timeout", category: "4xx" },
  { code: 409, text: "Conflict", category: "4xx" },
  { code: 418, text: "I'm a teapot", category: "4xx" },
  { code: 422, text: "Unprocessable Entity", category: "4xx" },
  { code: 429, text: "Too Many Requests", category: "4xx" },
  { code: 500, text: "Internal Server Error", category: "5xx" },
  { code: 501, text: "Not Implemented", category: "5xx" },
  { code: 502, text: "Bad Gateway", category: "5xx" },
  { code: 503, text: "Service Unavailable", category: "5xx" },
  { code: 504, text: "Gateway Timeout", category: "5xx" },
];

export default function HttpStatusReference({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CODES;
    return CODES.filter((c) => String(c.code).includes(q) || c.text.toLowerCase().includes(q));
  }, [query]);

  const categories: { key: "1xx" | "2xx" | "3xx" | "4xx" | "5xx"; label: string; color: string }[] = [
    { key: "1xx", label: d.cat1xx, color: "bg-blue-50 text-blue-700" },
    { key: "2xx", label: d.cat2xx, color: "bg-green-50 text-green-700" },
    { key: "3xx", label: d.cat3xx, color: "bg-amber-50 text-amber-700" },
    { key: "4xx", label: d.cat4xx, color: "bg-red-50 text-red-700" },
    { key: "5xx", label: d.cat5xx, color: "bg-purple-50 text-purple-700" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.subtitle,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.searchLabel}</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={d.searchPlaceholder}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">{d.noResults}</p>
          ) : (
            <div className="space-y-4">
              {categories.map((cat) => {
                const items = filtered.filter((c) => c.category === cat.key);
                if (items.length === 0) return null;
                return (
                  <div key={cat.key}>
                    <p className={`mb-2 inline-block rounded px-2 py-0.5 text-xs font-medium ${cat.color}`}>{cat.label}</p>
                    <div className="space-y-1">
                      {items.map((item) => (
                        <div key={item.code} className="flex items-center gap-3 rounded-md border px-3 py-2 text-sm">
                          <span className="font-mono font-semibold">{item.code}</span>
                          <span className="text-muted-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.howTitle}</h2>
        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
          {d.howSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {faq.q}
                </p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
