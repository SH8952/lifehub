"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shuffle } from "lucide-react";
import { data, type Locale } from "./data";

const DEFAULT_ROLES: Record<Locale, string[]> = {
  ko: ["발표자", "자료조사", "디자인", "문서작성", "일정관리", "검토·피드백"],
  en: ["Presenter", "Researcher", "Designer", "Writer", "Scheduler", "Reviewer"],
  ja: ["発表者", "資料調査", "デザイン", "文書作成", "スケジュール管理", "レビュー・フィードバック"],
  es: ["Presentador", "Investigador", "Diseñador", "Redactor", "Planificador", "Revisor"],
};

export default function RoleAssignmentRoulette({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [namesText, setNamesText] = useState("");
  const [rolesText, setRolesText] = useState("");
  const [result, setResult] = useState<{ name: string; role: string }[] | null>(null);
  const [error, setError] = useState("");
  const [usedDefault, setUsedDefault] = useState(false);

  const assign = () => {
    const names = namesText.split("\n").map((n) => n.trim()).filter(Boolean);
    if (names.length === 0) {
      setError(d.errorEmpty);
      setResult(null);
      return;
    }
    setError("");
    let roles = rolesText.split("\n").map((r) => r.trim()).filter(Boolean);
    let defaultUsed = false;
    if (roles.length === 0) {
      roles = DEFAULT_ROLES[locale];
      defaultUsed = true;
    }
    setUsedDefault(defaultUsed);

    const shuffledNames = [...names];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }
    const assignments = shuffledNames.map((name, i) => ({ name, role: roles[i] ?? "-" }));
    setResult(assignments);
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

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.namesLabel}</label>
              <textarea
                value={namesText}
                onChange={(e) => setNamesText(e.target.value)}
                placeholder={d.namesPlaceholder}
                rows={8}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.rolesLabel}</label>
              <textarea
                value={rolesText}
                onChange={(e) => setRolesText(e.target.value)}
                placeholder={d.rolesPlaceholder}
                rows={8}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
          </div>

          <button onClick={assign} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Shuffle className="h-4 w-4" />
            {d.assignBtn}
          </button>

          {error && <p className="text-sm text-red-600">{error}</p>}

          {result && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              {usedDefault && <p className="text-xs text-indigo-600">{d.defaultRolesNotice}</p>}
              <ul className="space-y-1">
                {result.map((r, i) => (
                  <li key={i} className="flex items-center justify-between rounded-md border bg-indigo-50 px-3 py-2 text-sm">
                    <span className="font-medium">{r.name}</span>
                    <span className="text-indigo-700">{r.role}</span>
                  </li>
                ))}
              </ul>
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
