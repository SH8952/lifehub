"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  title: string;
  subtitle: string;
  intro: string;
  presets: Array<{ name: string; baseFreq: number; desc: string }>;
  play: string;
  stop: string;
  volume: string;
  frequency: string;
  currentFreq: string;
  why: string;
  whyExplanation: string;
  disclaimer: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "모기 퇴치 소리 (모기 기피 주파수)",
    subtitle: "Web Audio API로 모기를 쫓는 고주파 소리 생성",
    intro:
      "모기는 약 25kHz 이상의 높은 주파수를 싫어합니다. 아래에서 주파수를 조절하고, 내 근처에 모기가 있다면 귀에 너무 가까이 하지 말고 재생하세요.\n\n소리는 브라우저(Web Audio API)에서 직접 생성됩니다. 외부 오디오 파일을 로드하지 않습니다.",
    presets: [
      { name: "25kHz", baseFreq: 25, desc: "가장 일반적으로 사용되는 기본 주파수" },
      { name: "27kHz", baseFreq: 27, desc: "더 높은 주파수로 모기를 더 효과적으로 쫓음" },
      { name: "23kHz", baseFreq: 23, desc: "덜 강렬한 주파수" },
      { name: "30kHz", baseFreq: 30, desc: "매우 높은 주파수" },
    ],
    play: "재생",
    stop: "중지",
    volume: "볼륨",
    frequency: "주파수 (kHz)",
    currentFreq: "현재 주파수",
    why: "왜 모기 퇴치 소리가 효과적인가요?",
    whyExplanation:
      "모기는 약 25kHz 이상의 높은 주파수를 싫어합니다. 이 주파수의 소리는 인간의 귀에는 잘 들리지 않지만, 모기에게는 불쾌한 소리입니다.\n\n하지만 모기 퇴치 소리의 효과는 개인차가 있으며, 주변 환경에 따라 효율이 달라질 수 있습니다.\n\n모기 퇴치 스프레이, 모장, 모기장 등 다른 방법과 함께 사용하면 더 좋은 결과를 얻을 수 있습니다.",
    disclaimer: "모기 퇴치 소리의 효과는 개개인마다 다를 수 있습니다. 소음에 민감한 사람은 사용 시 주의하세요.",
    footer: "브라우저(Web Audio API)에서 100% 생성. 외부 데이터 전송 없음.",
    faq: [
      { q: "모기 퇴치 소리가 정말 효과가 있나요?", a: "일부에 따르면 모기가 불쾌해하여 피하는 효과가 있지만, 모든 모기에 효과가 있는 것은 아닙니다. 주변 환경에 따라 효율이 다를 수 있습니다." },
      { q: "청력에 해롭나요?", a: "25kHz 이상의 주파수는 인간의 귀에는 잘 들리지 않습니다. 볼륨을 너무 높게 하면 주변 주파수(인간에 들리는 범위)도 발생할 수 있으므로 주의하세요." },
      { q: "스마트폰에서도 재생이 가능한가요?", a: "기기 스피커의 성능에 따라 다릅니다. 일부 스마트폰은 20kHz 이상의 주파수를 생성하지 못합니다." },
    ],
  },
  en: {
    title: "Mosquito Repellent Sound",
    subtitle: "Generate ultrasonic frequencies to deter mosquitoes using Web Audio API",
    intro:
      "Mosquitoes dislike high-frequency sounds above 25kHz. Adjust the frequency below and play. Do not place the device too close to your ear.\n\nSound is generated directly in the browser (Web Audio API). No external audio files are loaded.",
    presets: [
      { name: "25kHz", baseFreq: 25, desc: "Most commonly used basic frequency" },
      { name: "27kHz", baseFreq: 27, desc: "Higher frequency for more effective repellent" },
      { name: "23kHz", baseFreq: 23, desc: "Less intense frequency" },
      { name: "30kHz", baseFreq: 30, desc: "Very high frequency" },
    ],
    play: "Play",
    stop: "Stop",
    volume: "Volume",
    frequency: "Frequency (kHz)",
    currentFreq: "Current Frequency",
    why: "Why is mosquito repellent sound effective?",
    whyExplanation:
      "Mosquitoes dislike high-frequency sounds above 25kHz. Sounds at this frequency are barely audible to human ears but unpleasant to mosquitoes.\n\nHowever, the effectiveness varies and may depend on the surrounding environment.\n\nFor best results, use alongside other methods like mosquito repellent spray, mosquito nets, and coils.",
    disclaimer: "Effectiveness of mosquito deterrent sounds varies. If you are sensitive to noise, use caution.",
    footer: "100% generated in browser (Web Audio API). No external data transmitted.",
    faq: [
      { q: "Is mosquito repellent sound actually effective?", a: "Some people report mosquitoes becoming uncomfortable, but it is not effective for all mosquitoes. Efficiency may vary by environment." },
      { q: "Is it harmful to hearing?", a: "Frequencies above 25kHz are barely audible to humans. However, if volume is too high, frequencies in the audible range may also be produced." },
      { q: "Can it be played on smartphones?", a: "It depends on the device speaker's performance. Some smartphones cannot generate frequencies above 20kHz." },
    ],
  },
  ja: {
    title: "蚊除け音（蚊忌避周波数）",
    subtitle: "Web Audio APIで蚊を追い払う高周波を生成",
    intro:
      "蚊は約25kHz以上の高い周波数を嫌います。以下の周波数を調整し、再生してください。耳に近づけすぎないようにしてください。\n\n音はブラウザ(Web Audio API)で直接生成されます。外部オーディオファイルは読み込みません。",
    presets: [
      { name: "25kHz", baseFreq: 25, desc: "最も一般的に使用される基本周波数" },
      { name: "27kHz", baseFreq: 27, desc: "より高い周波数でより効果的に蚊を追い払う" },
      { name: "23kHz", baseFreq: 23, desc: "それほど強力ではない周波数" },
      { name: "30kHz", baseFreq: 30, desc: "非常に高い周波数" },
    ],
    play: "再生",
    stop: "停止",
    volume: "音量",
    frequency: "周波数 (kHz)",
    currentFreq: "現在の周波数",
    why: "なぜ蚊除け音が効果的ですか？",
    whyExplanation:
      "蚊は約25kHz以上の高い周波数を嫌います。この周波数の音は人間の耳には聞こえませんが、蚊には不愉快な音です。\n\n蚊除け効果には個人差があり、環境によって効率が異なります。蚊除けスプレー、蚊帳などと併用するとより良い結果があります。",
    disclaimer: "蚊除け音の効果には個人差があります。騒音に敏感な人はご注意ください。",
    footer: "ブラウザ(Web Audio API)で100%生成。外部データ送信なし。",
    faq: [
      { q: "蚊除け音は本当に効果がありますか？", a: "一部の人は蚊が不愉快になると報告していますが、すべての蚊に効果があるわけではありません。" },
      { q: "聴力に害がありますか？", a: "25kHz以上の周波数は人間にほとんど聞こえません。ただし、音量をしすぎると audible rangeの周波数を発生することがあります。" },
      { q: "スマートフォンで再生できますか？", a: "デバイスのスピーカー性能によります。一部のスマートフォンは20kHz以上の周波数を生成できません。" },
    ],
  },
  es: {
    title: "Sonido Repelente de Mosquitos",
    subtitle: "Genera ultrasonidos para repeler mosquitos con Web Audio API",
    intro:
      "A los mosquitos no les gustan los sonidos por encima de 25kHz. Ajusta la frecuencia y reproduce. No coloques el dispositivo cerca de tu oído.\n\nEl sonido se genera directamente en el navegador (Web Audio API). No se cargan archivos externos.",
    presets: [
      { name: "25kHz", baseFreq: 25, desc: "Frecuencia base más común" },
      { name: "27kHz", baseFreq: 27, desc: "Frecuencia más alta para mayor efectividad" },
      { name: "23kHz", baseFreq: 23, desc: "Frecuencia menos intensa" },
      { name: "30kHz", baseFreq: 30, desc: "Frecuencia muy alta" },
    ],
    play: "Reproducir",
    stop: "Detener",
    volume: "Volumen",
    frequency: "Frecuencia (kHz)",
    currentFreq: "Frecuencia Actual",
    why: "¿Por qué el sonido repelente de mosquitos es efectivo?",
    whyExplanation:
      "A los mosquitos no les gustan los sonidos por encima de 25kHz. Son apenas audibles para humanos pero desagradables para mosquitos.\n\nLa efectividad varía. Para mejores resultados, úsalo junto con repelentes, mosquiteros y espirales.",
    disclaimer: "La efectividad varía. Si eres sensible al ruido, usa con precaución.",
    footer: "100% generado en el navegador (Web Audio API). Sin datos externos.",
    faq: [
      { q: "¿Es realmente efectivo?", a: "Algunas personas reportan que los mosquitos se alejan, pero no para todos los mosquitos." },
      { q: "¿Es nocivo para la audición?", a: "Por encima de 25kHz apenas es audible. Pero si el volumen es muy alto, pueden generarse frecuencias audibles." },
      { q: "¿Se puede reproducir en smartphones?", a: "Depende del altavoz. Algunos smartphones no generan frecuencias sobre 20kHz." },
    ],
  },
};

export default function MosquitoSound({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentFreq, setCurrentFreq] = useState(25);
  const audioRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const d = i18nData[locale];

  function togglePlay() {
    if (!audioRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioRef.current = new AudioCtx();
    }
    const ctx = audioRef.current;

    if (isPlaying) {
      if (gainRef.current) {
        gainRef.current.gain.setTargetAtTime(0.00001, ctx!.currentTime, 0.05);
      }
      setTimeout(() => {
        if (oscRef.current) {
          oscRef.current.stop();
          oscRef.current.disconnect();
          oscRef.current = null;
        }
        setIsPlaying(false);
      }, 200);
    } else {
      gainRef.current = ctx!.createGain();
      gainRef.current.gain.value = volume / 100;
      gainRef.current.connect(ctx!.destination);

      oscRef.current = ctx!.createOscillator();
      oscRef.current.type = "sine";
      oscRef.current.frequency.value = currentFreq * 1000;
      oscRef.current.connect(gainRef.current);
      oscRef.current.start();

      setIsPlaying(true);
    }
  }

  function handleFreqChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseInt(e.target.value);
    setCurrentFreq(val);
    if (oscRef.current && audioRef.current && isPlaying) {
      oscRef.current.frequency.setValueAtTime(val * 1000, audioRef.current.currentTime);
    }
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseInt(e.target.value);
    setVolume(val);
    if (gainRef.current && audioRef.current && isPlaying) {
      gainRef.current.gain.value = val / 100;
    }
  }

  function applyPreset(freqKhz: number) {
    setCurrentFreq(freqKhz);
    if (oscRef.current && audioRef.current && isPlaying) {
      oscRef.current.frequency.setValueAtTime(freqKhz * 1000, audioRef.current.currentTime);
    }
  }

  useEffect(() => {
    return () => {
      if (oscRef.current) { try { oscRef.current.stop(); } catch {} }
      if (audioRef.current) { try { audioRef.current.close(); } catch {} }
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>
      {d.intro.split("\n\n").map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">{p}</p>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: "Generate mosquito repellent ultrasonic frequencies with Web Audio API",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        <Card className="border shadow-md">
          <CardContent className="space-y-6 p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{d.presets.map((_, i) => d.presets[i].name).join(" | ")}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {d.presets.map((p, i) => (
                  <button key={i} type="button" onClick={() => applyPreset(p.baseFreq)}
                    className={`rounded-md border px-3 py-1 text-sm ${currentFreq === p.baseFreq ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "hover:bg-muted"}`}>
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{d.frequency}</label>
              <input type="range" min="20" max="30" value={currentFreq} onChange={handleFreqChange}
                className="w-full" />
              <p className="text-center text-2xl font-bold text-indigo-600">{currentFreq}kHz</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{d.volume}: {volume}%</label>
              <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange}
                className="w-full" />
            </div>

            <button type="button" onClick={togglePlay}
              className={`w-full rounded-md px-4 py-3 text-lg font-medium text-white ${isPlaying ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700"}`}>
              {isPlaying ? d.stop : d.play}
            </button>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.why}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.whyExplanation}</p>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
