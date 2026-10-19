"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  inputs: string;
  gender: string;
  male: string;
  female: string;
  height: string;
  weight: string;
  calculate: string;
  result: string;
  normal: string;
  limitations: string;
  title: string;
  subtitle: string;
  whyBMI: string;
  bmiExplanation: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export default function BMICalculator({
  d,
  lang,
}: {
  d: Data;
  lang: Locale;
}) {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const b = weight / Math.pow(height / 100, 2);
    setBmi(Math.round(b * 100) / 100);
  }

  const bmiLabels: Record<Locale, Record<string, string>> = {
    ko: { underweight: "저체중", normal: "정상 체중", overweight: "과체중", obese: "비만" },
    en: { underweight: "Underweight", normal: "Normal", overweight: "Overweight", obese: "Obese" },
    ja: { underweight: "低体重", normal: "正常", overweight: "過体重", obese: "肥満" },
    es: { underweight: "Bajo peso", normal: "Normal", overweight: "Sobrepeso", obese: "Obesidad" },
  };

  function getBMIResult() {
    if (bmi === null) return null;
    if (bmi < 18.5) return { label: "underweight", ko: "underweight", color: "text-blue-600" };
    if (bmi < 23) return { label: "normal", ko: "normal", color: "text-green-600" };
    if (bmi < 25) return { label: "overweight", ko: "overweight", color: "text-yellow-600" };
    return { label: "obese", ko: "obese", color: "text-red-600" };
  }

  const result = getBMIResult();

  return (
    <div className="mt-8">
      <Card className="border shadow-md">
        <CardContent className="space-y-6 p-6">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.inputs}</p>
            <form onSubmit={handleSubmit} className="mt-3 space-y-4">
              <p className="text-sm font-medium">{d.gender}</p>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                    className="h-4 w-4"
                  />
                  <span>{d.male}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                    className="h-4 w-4"
                  />
                  <span>{d.female}</span>
                </label>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <label>
                  <p className="text-sm font-medium">{d.height}</p>
                  <input
                    type="number"
                    step="0.1"
                    min="150"
                    max="250"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="mt-1 w-full rounded-md border px-3 py-2"
                  />
                </label>
                <label>
                  <p className="text-sm font-medium">{d.weight}</p>
                  <input
                    type="number"
                    step="0.1"
                    min="30"
                    max="300"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="mt-1 w-full rounded-md border px-3 py-2"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white"
              >
                {d.calculate}
              </button>
            </form>
           </div>

           {bmi !== null && result && (
             <div className="rounded-lg bg-indigo-50 p-4">
               <p className="text-sm font-medium">{d.result}</p>
               <div className="mt-2 text-center">
                 <span className="text-4xl font-bold text-indigo-600">{bmi}</span>
                 <p className="mt-1 text-muted-foreground">kg/m²</p>
                 <p className={`mt-2 font-medium ${result.color}`}>{result.label}</p>
               </div>
             </div>
           )}
         </CardContent>
      </Card>
      <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
    </div>
  );
}
