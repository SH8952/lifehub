"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const FLAG_OPTIONS = ["g", "i", "m", "s", "u"];

export default function RegexTester({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [pattern, setPattern] = useState("(\\w+)@(\\w+\\.\\w+)");
  const [flags, setFlags] = useState<string[]>(["g"]);
  const [text, setText] = useState("Contact us at hello@example.com or support@test.org");

  const toggleFlag = (f: string) => {
    setFlags((cur) => (cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f]));
  };

  const { matches, error, highlighted } = useMemo(() => {
    if (!pattern) return { matches: [] as RegExpMatchArray[], error: "", highlighted: text };
    try {
      const re = new RegExp(pattern, flags.join(""));
      const allMatches: RegExpMatchArray[] = [];
      if (flags.includes("g")) {
        let m: RegExpExecArray | null;
        const reGlobal = new RegExp(pattern, flags.join(""));
        while ((m = reGlobal.exec(text)) !== null) {
          allMatches.push(m);
          if (m[0] === "") reGlobal.lastIndex++;
        }
      } else {
        const m = re.exec(text);
        if (m) allMatches.push(m);
      }

      let html = "";
      let lastIndex = 0;
      for (const m of allMatches) {
        const idx = m.index ?? 0;
        html += escapeHtml(text.slice(lastIndex, idx));
        html += `<mark class="bg-yellow-200 rounded px-0.5">${escapeHtml(m[0])}</mark>`;
        lastIndex = idx + m[0].length;
      }
      html += escapeHtml(text.slice(lastIndex));

      return { matches: allMatches, error: "", highlighted: html };
    } catch {
      return { matches: [] as RegExpMatchArray[], error: d.errorInvalid, highlighted: escapeHtml(text) };
    }
  }, [pattern, flags, text, d.errorInvalid]);

  function escapeHtml(s: string): string {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

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
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.patternLabel}</label>
              <div className="flex items-center rounded-md border px-3 py-2 font-mono text-sm">
                <span className="text-muted-foreground">/</span>
                <input value={pattern} onChange={(e) => setPattern(e.target.value)} className="flex-1 outline-none" />
                <span className="text-muted-foreground">/{flags.join("")}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">{d.flagsLabel}</p>
            <div className="flex gap-2">
              {FLAG_OPTIONS.map((f) => (
                <button
                  key={f}
                  onClick={() => toggleFlag(f)}
                  className={`rounded-md border px-3 py-1 text-sm font-mono ${flags.includes(f) ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.testTextLabel}</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} className="w-full rounded-md border px-3 py-2 font-mono text-sm" />
          </div>

          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : (
            <>
              <div>
                <p className="mb-1 text-sm font-medium">{d.matchesLabel.replace("{count}", String(matches.length))}</p>
                <div className="whitespace-pre-wrap rounded-md border bg-muted/30 p-3 font-mono text-sm" dangerouslySetInnerHTML={{ __html: highlighted || d.noMatches }} />
              </div>

              {matches.length > 0 && matches.some((m) => m.length > 1) && (
                <div>
                  <p className="mb-1 text-sm font-medium">{d.groupsLabel}</p>
                  <ul className="space-y-1 text-sm">
                    {matches.map((m, i) =>
                      m.slice(1).map((g, j) => (
                        <li key={`${i}-${j}`} className="rounded-md border px-2 py-1 font-mono">
                          [{i}][{j + 1}]: {g ?? "undefined"}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              )}
            </>
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
