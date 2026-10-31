"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shuffle } from "lucide-react";
import { data, type Locale } from "./data";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RandomTeamDivider({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [namesText, setNamesText] = useState("");
  const [teamCount, setTeamCount] = useState(2);
  const [teams, setTeams] = useState<string[][] | null>(null);
  const [error, setError] = useState("");

  const divide = () => {
    const names = namesText.split("\n").map((n) => n.trim()).filter(Boolean);
    if (names.length < teamCount) {
      setError(d.needMoreNames);
      setTeams(null);
      return;
    }
    setError("");
    const shuffled = shuffle(names);
    const result: string[][] = Array.from({ length: teamCount }, () => []);
    shuffled.forEach((name, i) => {
      result[i % teamCount].push(name);
    });
    setTeams(result);
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
            applicationCategory: "UtilityApplication",
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

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.namesLabel}</label>
            <textarea
              value={namesText}
              onChange={(e) => setNamesText(e.target.value)}
              placeholder={d.placeholder}
              rows={8}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.teamCountLabel}</label>
            <input
              type="number"
              min={2}
              max={20}
              value={teamCount}
              onChange={(e) => setTeamCount(Math.max(2, parseInt(e.target.value) || 2))}
              className="w-32 rounded-md border px-3 py-2 text-sm"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button onClick={divide} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Shuffle className="h-4 w-4" />
            {d.divideButton}
          </button>
        </CardContent>
      </Card>

      {teams && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {teams.map((team, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <p className="mb-2 font-semibold text-indigo-600">
                  {d.teamLabel} {i + 1}
                </p>
                <ul className="space-y-1 text-sm">
                  {team.map((name, j) => (
                    <li key={j} className="rounded-md bg-muted px-2 py-1">
                      {name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

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
