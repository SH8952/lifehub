"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { data, type Locale } from "./data";

const COMMON_PATTERNS = ["123456", "password", "qwerty", "111111", "abc123", "letmein", "admin", "welcome"];

function evaluate(pw: string) {
  let score = 0;
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasNumber = /[0-9]/.test(pw);
  const hasSymbol = /[^a-zA-Z0-9]/.test(pw);
  const isCommon = COMMON_PATTERNS.some((p) => pw.toLowerCase().includes(p));

  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (hasLower && hasUpper) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;
  if (isCommon) score = Math.max(0, score - 2);
  if (pw.length === 0) score = 0;

  const level = Math.min(4, score);
  return { level, hasLower, hasUpper, hasNumber, hasSymbol, isCommon, lengthOk: pw.length >= 12 };
}

const LEVEL_COLORS = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-lime-500", "bg-green-500"];

export default function PasswordStrengthChecker({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const result = useMemo(() => evaluate(password), [password]);

  const tips = [
    { ok: result.lengthOk, label: d.tipLength },
    { ok: result.hasUpper, label: d.tipUpper },
    { ok: result.hasLower, label: d.tipLower },
    { ok: result.hasNumber, label: d.tipNumber },
    { ok: result.hasSymbol, label: d.tipSymbol },
    { ok: !result.isCommon, label: d.tipCommon },
  ];

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
        <CardContent className="space-y-5 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={d.placeholder}
                className="w-full rounded-md border px-3 py-2 pr-10 text-sm"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                aria-label={d.showPassword}
              >
                {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium">{d.strengthLabel}</span>
              <span className="font-semibold">{d.levels[result.level]}</span>
            </div>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full ${i <= result.level && password.length > 0 ? LEVEL_COLORS[result.level] : "bg-muted"}`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold">{d.tipsTitle}</p>
            <ul className="space-y-1.5">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  {tip.ok ? (
                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                  ) : (
                    <X className="h-4 w-4 shrink-0 text-red-500" />
                  )}
                  <span className={tip.ok ? "text-muted-foreground" : ""}>{tip.label}</span>
                </li>
              ))}
            </ul>
          </div>
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
