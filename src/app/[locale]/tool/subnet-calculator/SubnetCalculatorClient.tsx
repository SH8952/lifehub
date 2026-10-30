"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

function ipToInt(ip: string): number | null {
  const parts = ip.split(".");
  if (parts.length !== 4) return null;
  let result = 0;
  for (const part of parts) {
    const n = Number(part);
    if (!Number.isInteger(n) || n < 0 || n > 255) return null;
    result = (result << 8) | n;
  }
  return result >>> 0;
}

function intToIp(n: number): string {
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
}

export default function SubnetCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [ip, setIp] = useState("192.168.1.0");
  const [cidr, setCidr] = useState(24);

  const ipInt = ipToInt(ip);
  const mask = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
  const valid = ipInt !== null;

  let networkInt = 0;
  let broadcastInt = 0;
  if (valid) {
    networkInt = (ipInt! & mask) >>> 0;
    broadcastInt = (networkInt | (~mask >>> 0)) >>> 0;
  }

  const totalHosts = Math.pow(2, 32 - cidr);
  const usableHosts = cidr >= 31 ? 0 : totalHosts - 2;
  const firstHost = cidr >= 31 ? networkInt : networkInt + 1;
  const lastHost = cidr >= 31 ? broadcastInt : broadcastInt - 1;

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

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.ipLabel}</label>
              <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} className="w-full rounded-md border px-2 py-1.5 text-sm font-mono" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                {d.cidrLabel}: /{cidr}
              </label>
              <input type="range" min={0} max={32} value={cidr} onChange={(e) => setCidr(Number(e.target.value))} className="w-full" />
            </div>
          </div>

          {!valid ? (
            <p className="text-sm text-red-600">{d.errorInvalidIp}</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground">{d.networkLabel}</p>
                <p className="font-mono font-medium">{intToIp(networkInt)}</p>
              </div>
              <div className="rounded-md bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground">{d.broadcastLabel}</p>
                <p className="font-mono font-medium">{intToIp(broadcastInt)}</p>
              </div>
              <div className="rounded-md bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground">{d.netmaskLabel}</p>
                <p className="font-mono font-medium">{intToIp(mask)}</p>
              </div>
              <div className="rounded-md bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground">{d.totalHostsLabel}</p>
                <p className="font-mono font-medium">{totalHosts.toLocaleString()}</p>
              </div>
              <div className="rounded-md bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground">{d.firstHostLabel}</p>
                <p className="font-mono font-medium">{intToIp(firstHost)}</p>
              </div>
              <div className="rounded-md bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground">{d.lastHostLabel}</p>
                <p className="font-mono font-medium">{intToIp(lastHost)}</p>
              </div>
              <div className="col-span-2 rounded-md bg-indigo-50 p-3">
                <p className="text-xs text-muted-foreground">{d.usableHostsLabel}</p>
                <p className="font-mono text-lg font-semibold text-indigo-700">{usableHosts.toLocaleString()}</p>
              </div>
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
