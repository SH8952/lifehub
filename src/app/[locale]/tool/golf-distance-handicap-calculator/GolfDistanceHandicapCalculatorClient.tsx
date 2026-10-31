"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flag } from "lucide-react";
import { data, type Locale } from "./data";

type Tab = "distance" | "handicap";

const BASELINE_HEAD_SPEED = 113;

export default function GolfDistanceHandicapCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [tab, setTab] = useState<Tab>("distance");
  const [headSpeed, setHeadSpeed] = useState<string>("95");

  const [score, setScore] = useState<string>("95");
  const [courseRating, setCourseRating] = useState<string>("72");
  const [slopeRating, setSlopeRating] = useState<string>("113");

  const distanceTable = useMemo(() => {
    const hs = parseFloat(headSpeed);
    if (!hs || hs <= 0) return null;
    const factor = hs / BASELINE_HEAD_SPEED;
    return d.clubs.map((c) => ({ ...c, distance: Math.round(c.baselineYards * factor) }));
  }, [headSpeed, d.clubs]);

  const handicapResult = useMemo(() => {
    const s = parseFloat(score);
    const cr = parseFloat(courseRating);
    const sr = parseFloat(slopeRating);
    if (!s || !cr || !sr || sr <= 0) return null;
    const differential = ((s - cr) * 113) / sr;
    const estimate = differential * 0.96;
    return {
      differential: Math.round(differential * 10) / 10,
      estimate: Math.round(estimate * 10) / 10,
    };
  }, [score, courseRating, slopeRating]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
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

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setTab("distance")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "distance" ? "bg-green-700 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabDistance}
        </button>
        <button
          onClick={() => setTab("handicap")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "handicap" ? "bg-green-700 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabHandicap}
        </button>
      </div>

      <Card>
        <CardContent className="space-y-5 p-6">
          {tab === "distance" && (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  {d.headSpeedLabel} ({d.headSpeedUnit})
                </label>
                <input
                  type="number"
                  min="0"
                  value={headSpeed}
                  onChange={(e) => setHeadSpeed(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>

              {distanceTable && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left text-muted-foreground">
                        <th className="py-2">{d.clubCol}</th>
                        <th className="py-2">{d.distanceCol}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {distanceTable.map((c) => (
                        <tr key={c.key} className="border-b last:border-0">
                          <td className="flex items-center gap-2 py-2">
                            <Flag className="h-4 w-4 text-green-700" />
                            {c.label}
                          </td>
                          <td className="py-2 font-medium">{c.distance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          {tab === "handicap" && (
            <>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="mb-2 block text-sm font-medium">{d.scoreLabel}</label>
                  <input
                    type="number"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="w-full rounded-md border px-2 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{d.courseRatingLabel}</label>
                  <input
                    type="number"
                    value={courseRating}
                    onChange={(e) => setCourseRating(e.target.value)}
                    className="w-full rounded-md border px-2 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{d.slopeRatingLabel}</label>
                  <input
                    type="number"
                    value={slopeRating}
                    onChange={(e) => setSlopeRating(e.target.value)}
                    className="w-full rounded-md border px-2 py-2 text-sm"
                  />
                </div>
              </div>

              {handicapResult && (
                <div className="rounded-lg bg-green-50 p-5 text-center">
                  <Flag className="mx-auto mb-2 h-6 w-6 text-green-700" />
                  <p className="text-sm text-muted-foreground">{d.handicapEstimateLabel}</p>
                  <p className="text-3xl font-bold text-green-800">{handicapResult.estimate}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {d.differentialLabel}: {handicapResult.differential}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{d.handicapNote}</p>
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
        <h2 className="mb-4 text-xl font-semibold">FAQ</h2>
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

      <p className="mt-8 text-xs text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-2 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
