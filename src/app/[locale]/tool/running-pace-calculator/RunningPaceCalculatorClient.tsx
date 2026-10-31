"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Footprints } from "lucide-react";
import { data, type Locale } from "./data";

type DistUnit = "km" | "mi";

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  const parts = [];
  if (h > 0) parts.push(`${h}:${String(m).padStart(2, "0")}`);
  else parts.push(`${m}`);
  parts.push(String(s).padStart(2, "0"));
  return h > 0 ? `${parts[0]}:${parts[1]}` : `${m}:${String(s).padStart(2, "0")}`;
}

export default function RunningPaceCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [distance, setDistance] = useState<string>("5");
  const [distUnit, setDistUnit] = useState<DistUnit>("km");
  const [hours, setHours] = useState<string>("0");
  const [minutes, setMinutes] = useState<string>("25");
  const [seconds, setSeconds] = useState<string>("0");

  const totalSeconds = useMemo(() => {
    const h = parseFloat(hours) || 0;
    const m = parseFloat(minutes) || 0;
    const s = parseFloat(seconds) || 0;
    return h * 3600 + m * 60 + s;
  }, [hours, minutes, seconds]);

  const distanceKm = useMemo(() => {
    const dist = parseFloat(distance);
    if (!dist || dist <= 0) return null;
    return distUnit === "mi" ? dist * 1.60934 : dist;
  }, [distance, distUnit]);

  const paceSecPerKm = useMemo(() => {
    if (!distanceKm || totalSeconds <= 0) return null;
    return totalSeconds / distanceKm;
  }, [distanceKm, totalSeconds]);

  const predictions = useMemo(() => {
    if (!distanceKm || !totalSeconds) return null;
    const targets: [string, number][] = [
      [d.race5k, 5],
      [d.race10k, 10],
      [d.raceHalf, 21.1],
      [d.raceFull, 42.2],
    ];
    return targets.map(([label, km]) => {
      const predictedSec = totalSeconds * Math.pow(km / distanceKm, 1.06);
      return { label, time: formatTime(predictedSec) };
    });
  }, [distanceKm, totalSeconds, d]);

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

      <Card>
        <CardContent className="space-y-5 p-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-sm font-medium">{d.distanceLabel}</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="flex items-end gap-2">
              {([
                ["km", d.distanceUnitKm],
                ["mi", d.distanceUnitMi],
              ] as [DistUnit, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setDistUnit(val)}
                  className={`flex-1 rounded-md border px-3 py-2 text-xs ${distUnit === val ? "border-rose-700 bg-rose-50" : "hover:bg-muted"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="mb-2 block text-sm font-medium">{d.hoursLabel}</label>
              <input
                type="number"
                min="0"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full rounded-md border px-2 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">{d.minutesLabel}</label>
              <input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="w-full rounded-md border px-2 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">{d.secondsLabel}</label>
              <input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                className="w-full rounded-md border px-2 py-2 text-sm"
              />
            </div>
          </div>

          {paceSecPerKm !== null && (
            <div className="rounded-lg bg-rose-50 p-5 text-center">
              <Footprints className="mx-auto mb-2 h-6 w-6 text-rose-700" />
              <p className="text-sm text-muted-foreground">{d.paceResultLabel}</p>
              <p className="text-3xl font-bold text-rose-800">
                {formatTime(paceSecPerKm)} <span className="text-base">{d.paceUnitKm}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatTime(paceSecPerKm * 1.60934)} {d.paceUnitMi}
              </p>
            </div>
          )}

          {predictions && (
            <div>
              <p className="mb-2 text-sm font-medium">{d.predictTitle}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-muted-foreground">
                      <th className="py-2">{d.predictDistanceCol}</th>
                      <th className="py-2">{d.predictTimeCol}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictions.map((p, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-2">{p.label}</td>
                        <td className="py-2 font-medium">{p.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
