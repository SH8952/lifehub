"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale, type Data } from "./data";






export default function BmrCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState<number>(1.55);
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);

  const d = i18nData[locale];

  function handleCalculate() {
    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (isNaN(ageNum) || isNaN(heightNum) || isNaN(weightNum)) return;
    if (ageNum < 10 || ageNum > 120 || heightNum < 50 || heightNum > 300 || weightNum < 10 || weightNum > 500) {
      return;
    }

    // Mifflin-St Jeor equation
    let bmrValue: number;
    if (gender === "male") {
      bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    setBmr(Math.round(bmrValue));
    setTdee(Math.round(bmrValue * activityLevel));
  }

  const presets = [
    { label: "20대", age: 28 },
    { label: "30대", age: 35 },
    { label: "40대", age: 45 },
    { label: "50대", age: 55 },
    { label: "60대", age: 65 },
  ];

  function setPresetAge(ageVal: number) {
    setAge(String(ageVal));
  }

  function getActivityOption(level: number) {
    const key = Object.keys({
      1.2: "sedentary",
      1.375: "light",
      1.55: "moderate",
      1.725: "active",
      1.9: "veryActive",
    })[Object.values({ 1.2: "sedentary", 1.375: "light", 1.55: "moderate", 1.725: "active", 1.9: "veryActive" }).indexOf(level as never)];
    const key2 = Object.entries({
      1.2: "sedentary" as const,
      1.375: "light" as const,
      1.55: "moderate" as const,
      1.725: "active" as const,
      1.9: "veryActive" as const,
    }).find(([k]) => parseFloat(k) === level);
    return key2 ? key2[1] : "moderate";
  }

  const activityMap: Record<string, { desc: (d: Data) => string; label: (d: Data) => string; value: number }> = {
    "1.2": {
      label: (d) => d.sedentary,
      desc: (d) => d.sedentaryDesc,
      value: 1.2,
    },
    "1.375": {
      label: (d) => d.light,
      desc: (d) => d.lightDesc,
      value: 1.375,
    },
    "1.55": {
      label: (d) => d.moderate,
      desc: (d) => d.moderateDesc,
      value: 1.55,
    },
    "1.725": {
      label: (d) => d.active,
      desc: (d) => d.activeDesc,
      value: 1.725,
    },
    "1.9": {
      label: (d) => d.veryActive,
      desc: (d) => d.veryActiveDesc,
      value: 1.9,
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld-json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "BMR & TDEE Calculator",
            description: "Calculate Basal Metabolic Rate and Total Daily Energy Expenditure using Mifflin-St Jeor equation",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <Card className="border shadow-md">
          <CardContent className="space-y-6 p-6">
            <div className="rounded-lg bg-muted p-4 space-y-4">
              <p className="text-sm font-medium">{d.title.split(" ")[0]}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">{d.gender}</p>
                  <div className="mt-1 flex gap-4">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        checked={gender === "male"}
                        onChange={() => setGender("male")}
                        className="accent-indigo-600"
                      />
                      <span>{d.male}</span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        checked={gender === "female"}
                        onChange={() => setGender("female")}
                        className="accent-indigo-600"
                      />
                      <span>{d.female}</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-medium">{d.age}</p>
                    <input
                      type="number"
                      min="10"
                      max="120"
                      placeholder={d.agePlaceholder}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-1 w-full rounded-md border px-3 py-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{d.height}</p>
                    <input
                      type="number"
                      min="50"
                      max="300"
                      placeholder={d.heightPlaceholder}
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="mt-1 w-full rounded-md border px-3 py-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">{d.heightUnit}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-medium">{d.weight}</p>
                    <input
                      type="number"
                      min="10"
                      max="500"
                      placeholder={d.weightPlaceholder}
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="mt-1 w-full rounded-md border px-3 py-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">{d.weightUnit}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{d.activityLevel}</p>
                    <select
                      value={activityLevel}
                      onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
                      className="mt-1 w-full rounded-md border px-3 py-2"
                    >
                      {Object.keys(activityMap).map((k) => (
                        <option key={k} value={activityMap[k].value}>
                          {activityMap[k].label(d)}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">{activityMap[String(activityLevel)].desc(d)}</p>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm text-muted-foreground">{d.presets}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {presets.map((p) => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => setPresetAge(p.age)}
                        className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    onClick={handleCalculate}
                    className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                  >
                    {d.calculate}
                  </button>
                </div>
              </div>
            </div>

            {bmr !== null && tdee !== null && (
              <div className="rounded-lg bg-indigo-50 p-6 space-y-4">
                <p className="text-sm font-medium">{d.result}</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="text-center">
                    <p className="text-sm font-medium text-indigo-600">{d.bmr}</p>
                    <p className="mt-2 text-5xl font-bold text-indigo-700">{bmr.toLocaleString()}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d.kcalPerDay}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{d.bmrDescription}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-indigo-600">{d.tdee}</p>
                    <p className="mt-2 text-5xl font-bold text-indigo-700">{tdee.toLocaleString()}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d.kcalPerDay}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{activityMap[String(activityLevel)].desc(d)}</p>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-indigo-700">{d.weightLossLabel}</span> 하루{" "}
                    <strong>{(tdee - 500).toLocaleString()} kcal</strong> 섭취 권장
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="font-semibold text-indigo-700">{d.weightGainLabel}</span> 하루{" "}
                    <strong>{(tdee + 500).toLocaleString()} kcal</strong> 섭취 권장
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyBmr}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.bmrExplanation}</p>
      </section>

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

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
