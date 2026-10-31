"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

function base64UrlEncode(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmacSha256(secret: string, message: string): Promise<string> {
  const keyData = new TextEncoder().encode(secret);
  const key = await crypto.subtle.importKey("raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  const bytes = new Uint8Array(signature);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export default function JwtGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [payload, setPayload] = useState('{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1700000000\n}');
  const [secret, setSecret] = useState("your-256-bit-secret");
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    setError(false);
    setToken("");
    try {
      const parsed = JSON.parse(payload);
      const header = { alg: "HS256", typ: "JWT" };
      const encodedHeader = base64UrlEncode(JSON.stringify(header));
      const encodedPayload = base64UrlEncode(JSON.stringify(parsed));
      const signature = await hmacSha256(secret, `${encodedHeader}.${encodedPayload}`);
      setToken(`${encodedHeader}.${encodedPayload}.${signature}`);
    } catch {
      setError(true);
    }
  };

  const copyToken = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <p className="mb-4 rounded-md bg-amber-50 p-3 text-sm text-amber-800">{d.warningLabel}</p>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.payloadLabel}</label>
            <textarea value={payload} onChange={(e) => setPayload(e.target.value)} className="h-32 w-full resize-none rounded-md border p-3 font-mono text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">{d.secretLabel}</label>
            <input type="text" value={secret} onChange={(e) => setSecret(e.target.value)} className="w-full rounded-md border px-2 py-1.5 text-sm font-mono" />
          </div>

          <button onClick={generate} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.generateBtn}
          </button>

          {error && <p className="text-sm text-red-600">{d.errorInvalidJson}</p>}

          {token && (
            <div>
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-medium">{d.resultLabel}</p>
                <button onClick={copyToken} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                  {copied ? d.copied : d.copyBtn}
                </button>
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-md bg-muted/30 p-3 font-mono text-xs">{token}</pre>
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
