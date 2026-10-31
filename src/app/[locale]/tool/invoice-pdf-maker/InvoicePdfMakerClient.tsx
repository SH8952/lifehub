"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, FileDown, Plus, Trash2 } from "lucide-react";
import { exportElementToPdf } from "@/lib/pdfExport";
import { data, type Locale } from "./data";

interface LineItem {
  description: string;
  qty: number;
  price: number;
}

export default function InvoicePdfMaker({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [docNumber, setDocNumber] = useState("INV-0001");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [items, setItems] = useState<LineItem[]>([{ description: "", qty: 1, price: 0 }]);
  const [notes, setNotes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);

  const updateItem = (idx: number, field: keyof LineItem, value: string) => {
    setItems((prev) =>
      prev.map((it, i) =>
        i === idx
          ? {
              ...it,
              [field]: field === "description" ? value : Number(value) || 0,
            }
          : it
      )
    );
  };

  const addItem = () => setItems((prev) => [...prev, { description: "", qty: 1, price: 0 }]);
  const removeItem = (idx: number) => setItems((prev) => prev.filter((_, i) => i !== idx));

  const total = items.reduce((sum, it) => sum + it.qty * it.price, 0);

  const generatePdf = async () => {
    if (!previewRef.current) return;
    setIsProcessing(true);
    try {
      await exportElementToPdf(previewRef.current, `${docNumber || "invoice"}.pdf`, {
        pageFormat: "a4",
        marginMm: 15,
      });
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

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="flex flex-col gap-2 p-4">
              <p className="text-sm font-semibold">{d.companyLabel}</p>
              <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder={d.nameField} className="rounded-md border px-3 py-2 text-sm" />
              <input value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} placeholder={d.addressField} className="rounded-md border px-3 py-2 text-sm" />
              <input value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} placeholder={d.emailField} className="rounded-md border px-3 py-2 text-sm" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-2 p-4">
              <p className="text-sm font-semibold">{d.clientLabel}</p>
              <input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder={d.nameField} className="rounded-md border px-3 py-2 text-sm" />
              <input value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} placeholder={d.addressField} className="rounded-md border px-3 py-2 text-sm" />
              <input value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder={d.emailField} className="rounded-md border px-3 py-2 text-sm" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.docNumberLabel}</label>
            <input value={docNumber} onChange={(e) => setDocNumber(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">{d.dateLabel}</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
          </div>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-3 p-4">
            <p className="text-sm font-semibold">{d.itemsLabel}</p>
            {items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2">
                <input
                  value={item.description}
                  onChange={(e) => updateItem(idx, "description", e.target.value)}
                  placeholder={d.descriptionHeader}
                  className="col-span-6 rounded-md border px-2 py-1 text-sm"
                />
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => updateItem(idx, "qty", e.target.value)}
                  placeholder={d.qtyHeader}
                  className="col-span-2 rounded-md border px-2 py-1 text-sm"
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => updateItem(idx, "price", e.target.value)}
                  placeholder={d.priceHeader}
                  className="col-span-3 rounded-md border px-2 py-1 text-sm"
                />
                <button onClick={() => removeItem(idx)} className="col-span-1 flex items-center justify-center rounded-md border hover:bg-muted">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button onClick={addItem} className="inline-flex w-fit items-center gap-1 rounded-md border px-3 py-1 text-sm hover:bg-muted">
              <Plus className="h-3 w-3" />
              {d.addItem}
            </button>
          </CardContent>
        </Card>

        <div>
          <label className="mb-1 block text-sm font-medium">{d.notesLabel}</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="h-20 w-full resize-y rounded-md border p-2 text-sm" />
        </div>

        <Card>
          <CardContent className="p-5">
            <label className="mb-2 block text-sm font-medium">{d.previewLabel}</label>
            <div ref={previewRef} className="bg-white p-8 text-sm">
              <h2 className="mb-6 text-2xl font-bold">{d.invoiceWord}</h2>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">{companyName || d.companyLabel}</p>
                  <p>{companyAddress}</p>
                  <p>{companyEmail}</p>
                </div>
                <div className="text-right">
                  <p>
                    {d.docNumberLabel}: {docNumber}
                  </p>
                  <p>
                    {d.dateLabel}: {date}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <p className="font-semibold">{d.clientLabel}</p>
                <p>{clientName}</p>
                <p>{clientAddress}</p>
                <p>{clientEmail}</p>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 py-2 text-left">{d.descriptionHeader}</th>
                    <th className="border-b-2 py-2 text-right">{d.qtyHeader}</th>
                    <th className="border-b-2 py-2 text-right">{d.priceHeader}</th>
                    <th className="border-b-2 py-2 text-right">{d.amountHeader}</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="border-b py-2">{item.description}</td>
                      <td className="border-b py-2 text-right">{item.qty}</td>
                      <td className="border-b py-2 text-right">{item.price.toLocaleString()}</td>
                      <td className="border-b py-2 text-right">{(item.qty * item.price).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex justify-end">
                <p className="text-lg font-bold">
                  {d.totalLabel}: {total.toLocaleString()}
                </p>
              </div>
              {notes && (
                <div className="mt-6 border-t pt-4 text-xs text-gray-600">
                  <p className="whitespace-pre-wrap">{notes}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <button
          onClick={generatePdf}
          disabled={isProcessing}
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
          {isProcessing ? d.processing : d.generateButton}
        </button>
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
