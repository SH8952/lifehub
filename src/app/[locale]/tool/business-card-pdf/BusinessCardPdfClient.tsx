"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, FileDown } from "lucide-react";
import { data, type Locale } from "./data";

export default function BusinessCardPdf({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [color, setColor] = useState("#4f46e5");
  const [isProcessing, setIsProcessing] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const generatePdf = async () => {
    if (!cardRef.current) return;
    setIsProcessing(true);
    try {
      const canvas = await html2canvas(cardRef.current, { scale: 4, useCORS: true, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF({ unit: "mm", format: [90, 50] });
      doc.addImage(imgData, "PNG", 0, 0, 90, 50);
      doc.save((name ? name.replace(/\s+/g, "_") : "business_card") + ".pdf");
    } finally {
      setIsProcessing(false);
    }
  };

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

      <div className="h-6" aria-hidden="true" />

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="flex flex-col gap-3 p-5">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.nameLabel}</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.titleLabel}</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.companyLabel}</label>
              <input value={company} onChange={(e) => setCompany(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.phoneLabel}</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.emailLabel}</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.websiteLabel}</label>
              <input value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.colorLabel}</label>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-10 w-16 rounded-md border" />
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium">{d.previewLabel}</label>
          <div
            ref={cardRef}
            style={{ width: "340px", height: "189px" }}
            className="relative flex flex-col justify-center overflow-hidden rounded-md border bg-white p-6 shadow-sm"
          >
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "8px", backgroundColor: color }} />
            <p className="text-lg font-bold">{name || d.nameLabel}</p>
            <p className="text-sm" style={{ color }}>
              {title}
            </p>
            <p className="mt-1 text-sm font-medium">{company}</p>
            <div className="mt-3 flex flex-col gap-0.5 text-xs text-gray-600">
              {phone && <p>{phone}</p>}
              {email && <p>{email}</p>}
              {website && <p>{website}</p>}
            </div>
          </div>

          <button
            onClick={generatePdf}
            disabled={isProcessing}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
            {isProcessing ? d.processing : d.generateButton}
          </button>
        </div>
      </div>

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
