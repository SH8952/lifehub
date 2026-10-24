"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale, type Data } from "./data";






const activityMultipliers: Record<string, { key: string; value: number; descKey: string }> = {
  "1.2": { key: "sedentary", value: 1.2, descKey: "sedentaryDesc" },
  "1.375": { key: "light", value: 1.375, descKey: "lightDesc" },
  "1.55": { key: "moderate", value: 1.55, descKey: "moderateDesc" },
  "1.725": { key: "active", value: 1.725, descKey: "activeDesc" },
  "1.9": { key: "veryActive", value: 1.9, descKey: "veryActiveDesc" },
};

export default function TdeeCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [bmrInput, setBmrInput] = useState("");
  const [activityLevel, setActivityLevel] = useState<number>(1.55);
  const [tdee, setTdee] = useState<number | null>(null);
  const [weightLoss, setWeightLoss] = useState<number | null>(null);
  const [weightGain, setWeightGain] = useState<number | null>(null);
  const [maintenance, setMaintenance] = useState<number | null>(null);

  // BMR calculation fields
  const [useBmrCalc, setUseBmrCalc] = useState(false);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const d = i18nData[locale];

  function handleCalculate() {
    let bmrValue: number = 0;

    if (bmrInput && !useBmrCalc) {
      const bmrNum = parseFloat(bmrInput);
      if (isNaN(bmrNum) || bmrNum < 500 || bmrNum > 6000) return;
      bmrValue = bmrNum;
    } else if (useBmrCalc) {
      const ageNum = parseInt(age);
      const heightNum = parseFloat(height);
      const weightNum = parseFloat(weight);

      if (isNaN(ageNum) || isNaN(heightNum) || isNaN(weightNum)) return;

      if (ageNum < 10 || ageNum > 120 || heightNum < 50 || heightNum > 300 || weightNum < 10 || weightNum > 500) {
        return;
      }

      if (gender === "male") {
        bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
      } else {
        bmrValue = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
      }
    }

    setMaintenance(Math.round(bmrValue * activityLevel));
    setTdee(Math.round(bmrValue * activityLevel));
    setWeightLoss(Math.round(bmrValue * activityLevel - 500));
    setWeightGain(Math.round(bmrValue * activityLevel + 500));
  }

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
            name: "TDEE Calculator",
            description: "Calculate Total Daily Energy Expenditure from BMR and activity level",
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
              {/* BMR Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">{d.bmrInput}</label>
                <input
                  type="number"
                  min="500"
                  max="6000"
                  placeholder={d.bmrPlaceholder}
                  value={bmrInput}
                  onChange={(e) => {
                    setBmrInput(e.target.value);
                    setUseBmrCalc(true);
                  }}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>

              {/* Toggle BMR calculator */}
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useBmrCalc}
                    onChange={(e) => setUseBmrCalc(e.target.checked)}
                    className="accent-indigo-600"
                  />
                  <span className="text-sm text-muted-foreground">
                    {d.bmrLabel}
                  </span>
                </label>
              </div>

              {useBmrCalc && (
                <div className="grid gap-4 sm:grid-cols-2 border-t pt-4">
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
                        {Object.keys(activityMultipliers).map((k) => {
                          const m = activityMultipliers[k];
                          return (
                            <option key={k} value={k}>
                              {(d as any)[m.key]}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2 text-xs text-muted-foreground">
                    {d.bmrHelp}
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={handleCalculate}
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                {d.calculate}
              </button>
            </div>

            {tdee !== null && (
              <div className="rounded-lg bg-indigo-50 p-6 space-y-4">
                <p className="text-sm font-medium">{d.result}</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="text-center">
                    <p className="text-sm font-medium text-indigo-600">{d.tdee}</p>
                    <p className="mt-2 text-5xl font-bold text-indigo-700">{tdee.toLocaleString()}</p>
                    <p className="mt-1 text-sm text-muted-foreground">kcal/일</p>
                    <p className="mt-2 text-xs text-muted-foreground">{d.tdeeDescription}</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border space-y-3">
                    <div>
                      <p className="text-sm font-medium text-green-700">{d.maintenance}</p>
                      <p className="text-3xl font-bold text-green-800">{maintenance?.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">kcal</span></p>
                      <p className="text-xs text-muted-foreground">{d.maintenanceDesc}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-700">{d.weightLoss}</p>
                      <p className="text-3xl font-bold text-blue-800">{weightLoss?.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">kcal</span></p>
                      <p className="text-xs text-muted-foreground">{d.weightLossDesc}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700">{d.weightGain}</p>
                      <p className="text-3xl font-bold text-orange-800">{weightGain?.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">kcal</span></p>
                      <p className="text-xs text-muted-foreground">{d.weightGainDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyTdee}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.tdeeExplanation}</p>
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
