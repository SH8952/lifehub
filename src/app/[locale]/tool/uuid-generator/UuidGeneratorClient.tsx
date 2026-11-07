"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { data, type Locale } from "./data";

export default function UuidGenerator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [quantity, setQuantity] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const formatUuid = (raw: string) => {
    let out = hyphens ? raw : raw.replace(/-/g, "");
    if (uppercase) out = out.toUpperCase();
    return out;
  };

  const handleGenerate = () => {
    const n = Math.min(100, Math.max(1, quantity));
    const list = Array.from({ length: n }, () => formatUuid(crypto.randomUUID()));
    setUuids(list);
  };

  const handleCopyAll = async () => {
    if (uuids.length === 0) return;
    await navigator.clipboard.writeText(uuids.join("\n"));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1500);
  };

  const handleCopyOne = async (i: number) => {
    await navigator.clipboard.writeText(uuids[i]);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1200);
  };

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
        <CardContent className="flex flex-wrap items-end gap-4 p-5">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.quantityLabel}</label>
            <input
              type="number"
              min={1}
              max={100}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 rounded-md border px-3 py-1.5 text-sm"
            />
          </div>
          <label className="flex items-center gap-2 pb-2 text-sm">
            <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
            {d.uppercaseLabel}
          </label>
          <label className="flex items-center gap-2 pb-2 text-sm">
            <input type="checkbox" checked={hyphens} onChange={(e) => setHyphens(e.target.checked)} />
            {d.hyphensLabel}
          </label>
          <button onClick={handleGenerate} className="rounded-md bg-indigo-600 px-5 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">
            {d.generateBtn}
          </button>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardContent className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-muted-foreground">
              {uuids.length > 0 ? `${uuids.length}` : ""}
            </p>
            {uuids.length > 0 && (
              <button onClick={handleCopyAll} className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-muted">
                {copiedAll ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copiedAll ? d.copiedMsg : d.copyAllBtn}
              </button>
            )}
          </div>
          {uuids.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">{d.emptyMsg}</p>
          ) : (
            <ul className="space-y-1 font-mono text-sm">
              {uuids.map((u, i) => (
                <li
                  key={i}
                  onClick={() => handleCopyOne(i)}
                  className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-muted"
                >
                  <span>{u}</span>
                  {copiedIndex === i ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3 text-muted-foreground" />}
                </li>
              ))}
            </ul>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
