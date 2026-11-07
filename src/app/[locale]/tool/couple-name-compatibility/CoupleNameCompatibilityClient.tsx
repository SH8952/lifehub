"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { data, type Locale } from "./data";

const TIERS: Record<Locale, [number, string][]> = {
  ko: [[90, "운명처럼 느껴지는 특별한 궁합입니다!"], [70, "서로를 잘 이해하는 좋은 궁합입니다."], [50, "노력하면 더 좋아질 수 있는 궁합입니다."], [0, "서로 다른 점이 많아 이해의 시간이 필요한 궁합입니다."]],
  en: [[90, "A special match that feels like destiny!"], [70, "A good match who understand each other well."], [50, "A match that can grow stronger with effort."], [0, "A match with many differences that needs time to understand each other."]],
  ja: [[90, "運命のように感じられる特別な相性です！"], [70, "お互いをよく理解する良い相性です。"], [50, "努力すればもっと良くなる相性です。"], [0, "違いが多く理解する時間が必要な相性です。"]],
  es: [[90, "¡Una pareja especial que se siente como el destino!"], [70, "Una buena pareja que se entiende bien."], [50, "Una pareja que puede mejorar con esfuerzo."], [0, "Una pareja con muchas diferencias que necesita tiempo para entenderse."]],
};

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

export default function CoupleNameCompatibility({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<{ score: number; message: string } | null>(null);

  const check = () => {
    if (!name1.trim() || !name2.trim()) return;
    const combined = [name1.trim(), name2.trim()].sort().join("|");
    const hash = hashString(combined);
    const score = hash % 101;
    const tiers = TIERS[locale];
    const tier = tiers.find(([threshold]) => score >= threshold) ?? tiers[tiers.length - 1];
    setResult({ score, message: tier[1] });
  };

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
            applicationCategory: "EntertainmentApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-5 p-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.name1Label}</label>
              <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.name2Label}</label>
              <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
          </div>

          <button onClick={check} className="flex w-full items-center justify-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700">
            <Heart className="h-4 w-4" />
            {d.checkBtn}
          </button>

          {result && (
            <div className="space-y-3 rounded-lg bg-pink-50 p-5 text-center">
              <p className="text-sm text-pink-600">{d.scoreLabel}</p>
              <p className="text-4xl font-bold text-pink-700">{result.score}</p>
              <p className="text-sm text-pink-600">{d.messageLabel}</p>
              <p className="text-base text-pink-900">{result.message}</p>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
