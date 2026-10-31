"use client";

import { useRef, useState } from "react";
import QRCode from "qrcode";
import { i18n, type Locale } from "./data";

type ContentType = "url" | "text" | "wifi" | "vcard" | "phone" | "sms";
type Encryption = "WPA" | "WEP" | "nopass";
type ErrorLevel = "L" | "M" | "Q" | "H";

export default function QrCodeGeneratorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [contentType, setContentType] = useState<ContentType>("url");
  const [urlValue, setUrlValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiEncryption, setWifiEncryption] = useState<Encryption>("WPA");
  const [vcardName, setVcardName] = useState("");
  const [vcardPhone, setVcardPhone] = useState("");
  const [vcardEmail, setVcardEmail] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [smsPhone, setSmsPhone] = useState("");
  const [smsMessage, setSmsMessage] = useState("");

  const [size, setSize] = useState(256);
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [errorLevel, setErrorLevel] = useState<ErrorLevel>("M");

  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function buildContent(): string {
    switch (contentType) {
      case "url":
        return urlValue;
      case "text":
        return textValue;
      case "wifi":
        return `WIFI:T:${wifiEncryption};S:${wifiSsid};P:${wifiEncryption === "nopass" ? "" : wifiPassword};;`;
      case "vcard":
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${vcardName}\nTEL:${vcardPhone}\nEMAIL:${vcardEmail}\nEND:VCARD`;
      case "phone":
        return `tel:${phoneValue}`;
      case "sms":
        return `SMSTO:${smsPhone}:${smsMessage}`;
      default:
        return "";
    }
  }

  async function handleGenerate() {
    const content = buildContent();
    if (!content.trim()) {
      setDataUrl(null);
      return;
    }
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      await QRCode.toCanvas(canvas, content, {
        width: size,
        color: { dark: foregroundColor, light: backgroundColor },
        errorCorrectionLevel: errorLevel,
      });
      setDataUrl(canvas.toDataURL("image/png"));
    } catch {
      setDataUrl(null);
    }
  }

  function handleDownload() {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "qrcode.png";
    a.click();
  }

  const sizeOptions = [128, 192, 256, 320, 384, 512];
  const locales: Locale[] = ["ko", "en", "ja", "es"];
  const localeLabels: Record<Locale, string> = { ko: "한국어", en: "English", ja: "日本語", es: "Español" };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded px-3 py-1 text-sm ${
              locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"
            }`}
          >
            {localeLabels[l]}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.contentType}</label>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value as ContentType)}
            className="w-full rounded border border-gray-300 px-3 py-2"
          >
            <option value="url">{d.typeUrl}</option>
            <option value="text">{d.typeText}</option>
            <option value="wifi">{d.typeWifi}</option>
            <option value="vcard">{d.typeVcard}</option>
            <option value="phone">{d.typePhone}</option>
            <option value="sms">{d.typeSms}</option>
          </select>
        </div>

        {contentType === "url" && (
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-600">{d.urlLabel}</label>
            <input
              type="text"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="https://"
            />
          </div>
        )}

        {contentType === "text" && (
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-600">{d.textLabel}</label>
            <textarea
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              rows={3}
            />
          </div>
        )}

        {contentType === "wifi" && (
          <div className="mb-4 space-y-3">
            <div>
              <label className="mb-1 block text-sm text-gray-600">{d.wifiSsid}</label>
              <input
                type="text"
                value={wifiSsid}
                onChange={(e) => setWifiSsid(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm text-gray-600">{d.wifiPassword}</label>
                <input
                  type="text"
                  value={wifiPassword}
                  onChange={(e) => setWifiPassword(e.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2"
                  disabled={wifiEncryption === "nopass"}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-600">{d.wifiEncryption}</label>
                <select
                  value={wifiEncryption}
                  onChange={(e) => setWifiEncryption(e.target.value as Encryption)}
                  className="w-full rounded border border-gray-300 px-3 py-2"
                >
                  <option value="WPA">{d.encWpa}</option>
                  <option value="WEP">{d.encWep}</option>
                  <option value="nopass">{d.encNone}</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {contentType === "vcard" && (
          <div className="mb-4 space-y-3">
            <div>
              <label className="mb-1 block text-sm text-gray-600">{d.vcardName}</label>
              <input
                type="text"
                value={vcardName}
                onChange={(e) => setVcardName(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm text-gray-600">{d.vcardPhone}</label>
                <input
                  type="text"
                  value={vcardPhone}
                  onChange={(e) => setVcardPhone(e.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-600">{d.vcardEmail}</label>
                <input
                  type="text"
                  value={vcardEmail}
                  onChange={(e) => setVcardEmail(e.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
          </div>
        )}

        {contentType === "phone" && (
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-600">{d.phoneLabel}</label>
            <input
              type="text"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>
        )}

        {contentType === "sms" && (
          <div className="mb-4 space-y-3">
            <div>
              <label className="mb-1 block text-sm text-gray-600">{d.smsPhone}</label>
              <input
                type="text"
                value={smsPhone}
                onChange={(e) => setSmsPhone(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600">{d.smsMessage}</label>
              <textarea
                value={smsMessage}
                onChange={(e) => setSmsMessage(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2"
                rows={2}
              />
            </div>
          </div>
        )}

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.size}</label>
            <select
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value, 10))}
              className="w-full rounded border border-gray-300 px-3 py-2"
            >
              {sizeOptions.map((s) => (
                <option key={s} value={s}>
                  {s}px
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.errorCorrection}</label>
            <select
              value={errorLevel}
              onChange={(e) => setErrorLevel(e.target.value as ErrorLevel)}
              className="w-full rounded border border-gray-300 px-3 py-2"
            >
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="Q">Q</option>
              <option value="H">H</option>
            </select>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.foregroundColor}</label>
            <input
              type="color"
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
              className="h-10 w-full rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.backgroundColor}</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="h-10 w-full rounded border border-gray-300"
            />
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {d.generate}
        </button>

        <div className="mt-6">
          <h3 className="mb-2 text-sm font-semibold text-gray-700">{d.result}</h3>
          <div className="flex flex-col items-center gap-3 rounded-lg bg-gray-50 p-4">
            <canvas ref={canvasRef} className={dataUrl ? "" : "hidden"} />
            {dataUrl && (
              <button
                onClick={handleDownload}
                className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                {d.download}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
