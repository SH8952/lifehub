"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarHeart } from "lucide-react";
import { data, type Locale } from "./data";

const TIERS: Record<Locale, [number, string][]> = {
  ko: [[90, "하늘이 정해준 듯한 특별한 인연입니다!"], [70, "서로 잘 맞는 편안한 궁합입니다."], [50, "다른 점을 이해하려는 노력이 관계를 더 좋게 만들 것입니다."], [0, "서로 다른 리듬을 가진 만큼 배려가 필요한 궁합입니다."]],
  en: [[90, "A special bond that feels like destiny!"], [70, "A comfortable, well-matched pairing."], [50, "Making an effort to understand your differences will strengthen the bond."], [0, "A pairing with different rhythms that calls for extra care."]],
  ja: [[90, "天が決めたような特別な縁です！"], [70, "お互いよく合う心地よい相性です。"], [50, "違いを理解しようとする努力が関係をより良くするでしょう。"], [0, "互いに違うリズムを持つだけに配慮が必要な相性です。"]],
  es: [[90, "¡Un vínculo especial que se siente como el destino!"], [70, "Una pareja cómoda y bien emparejada."], [50, "Hacer el esfuerzo de entender las diferencias fortalecerá el vínculo."], [0, "Una pareja con ritmos distintos que requiere más cuidado."]],
};

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

export default function BirthdayCompatibility({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [birth1, setBirth1] = useState("");
  const [birth2, setBirth2] = useState("");
  const [result, setResult] = useState<{ score: number; message: string } | null>(null);

  const check = () => {
    if (!birth1 || !birth2) return;
    const combined = [birth1, birth2].sort().join("|");
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
              <label className="mb-1 block text-sm font-medium">{d.birth1Label}</label>
              <input type="date" value={birth1} onChange={(e) => setBirth1(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.birth2Label}</label>
              <input type="date" value={birth2} onChange={(e) => setBirth2(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
          </div>

          <button onClick={check} className="flex w-full items-center justify-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700">
            <CalendarHeart className="h-4 w-4" />
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
