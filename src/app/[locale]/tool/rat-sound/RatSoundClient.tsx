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
  why: string;
  whyExplanation: string;
  disclaimer: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "쥐 퇴치 소리 (서브우퍼 주파수)",
    subtitle: "쥐를 쫓는 고주파 및 초저주파 소리 생성",
    intro:
      "쥐는 일련의 주파수 대역을 불쾌하게 여깁니다. 아래에서 주파수를 선택하고 재생하세요.\n\n소리는 브라우저(Web Audio API)에서 직접 생성됩니다. 외부 오디오 파일을 로드하지 않습니다.",
    presets: [
      { name: "20kHz (고주파)", baseFreq: 20, desc: "가장 일반적으로 사용되는 고주파" },
      { name: "15kHz (중간 주파수)", baseFreq: 15, desc: "중간 주파수로 더 넓은 범위 커버" },
      { name: "10kHz (저주파)", baseFreq: 10, desc: "쥐가 불쾌하게 여기는 낮은 주파수" },
      { name: "5kHz (초저주파)", baseFreq: 5, desc: "가장 낮은 주파수" },
    ],
    play: "재생",
    stop: "중지",
    volume: "볼륨",
    frequency: "주파수 (kHz)",
    why: "왜 쥐 퇴치 소리가 효과적인가요?",
    whyExplanation:
      "쥐는 일정한 주파수 대역에서 불쾌감을 느낍니다. 이를 이용하여 물리적으로 쥐를 쫓는 것이 이 도구입니다.\n\n쥐 퇴치 소리의 효과는 환경과 쥐의 종류에 따라 다를 수 있습니다. 쥐가 완전히 사라지는 것은 아니며, 일종의 경고 신호로 작용합니다.\n\n쥐 퇴치 스프레이, 함정, 환경 개선(청결) 등 다른 방법과 함께 사용하면 더 좋은 결과를 얻을 수 있습니다.",
    disclaimer: "쥐 퇴치 소리의 효과는 개개인 및 환경에 따라 다를 수 있습니다. 소음에 민감한 사람은 주의하세요.",
    footer: "브라우저(Web Audio API)에서 100% 생성. 외부 데이터 전송 없음.",
    faq: [
      { q: "쥐 퇴치 소리로 쥐가 완전히 사라지나요?", a: "쥐 퇴치 소리는 일시적으로 쥐를 쫓는 효과가 있지만, 영원히 제거되는 것은 아닙니다. 환경 개선 등 다른 방법과 함께 사용해야 합니다." },
      { q: "애완동물에게 해롭나요?", a: "일부 동물은 쥐보다 더 높은 주파수를 민감하게 감지합니다. 개, 고양이 등 애완동물이 있다면 볼륨을 낮추고 관찰하세요." },
      { q: "스마트폰에서도 작동하나요?", a: "기기 스피커 성능에 따라 다릅니다. 일부 스마트폰은 낮은 주파수도 충분히 재생하지 못할 있습니다." },
    ],
  },
  en: {
    title: "Rat Repellent Sound",
    subtitle: "Generate ultrasonic and infrasonic sounds to deter rats using Web Audio API",
    intro:
      "Rats find certain frequency ranges unpleasant. Select a frequency below and play.\n\nSound is generated directly in the browser (Web Audio API). No external audio files are loaded.",
    presets: [
      { name: "20kHz (ultrasonic)", baseFreq: 20, desc: "Commonly used high frequency" },
      { name: "15kHz (medium)", baseFreq: 15, desc: "Medium frequency covering a wider range" },
      { name: "10kHz (low)", baseFreq: 10, desc: "Lower frequency rats find unpleasant" },
      { name: "5kHz (infrasonic)", baseFreq: 5, desc: "Lowest frequency" },
    ],
    play: "Play",
    stop: "Stop",
    volume: "Volume",
    frequency: "Frequency (kHz)",
    why: "Why is rat repellent sound effective?",
    whyExplanation:
      "Rats feel discomfort in certain frequency ranges. This tool uses that to deter rats.\n\nEffectiveness may vary depending on the environment and rat species. The sound doesn't permanently eliminate rats but serves as a warning signal.\n\nCombined with rat repellent sprays, traps, and environmental improvements (cleaning), it yields better results.",
    disclaimer: "Effectiveness varies by environment. Use caution if sensitive to noise.",
    footer: "100% generated in browser (Web Audio API). No external data transmitted.",
    faq: [
      { q: "Will rat repellent sound eliminate all rats?", a: "It temporarily deters rats but doesn't permanently eliminate them. Use alongside environmental improvements." },
      { q: "Is it harmful to pets?", a: "Some animals are more sensitive to high frequencies than rats. If you have pets, lower the volume and observe." },
      { q: "Does it work on smartphones?", a: "Depends on device speaker performance. Some smartphones cannot reproduce low frequencies sufficiently." },
    ],
  },
  ja: {
    title: "鼠除け音（周波数）",
    subtitle: "Web Audio APIで鼠を追い払う高周波を生成",
    intro:
      "鼠はある周波数帯で不快を感じます。以下の周波数を選択し、再生してください。\n\n音はブラウザ(Web Audio API)で直接生成されます。外部オーディオファイルは読み込みません。",
    presets: [
      { name: "20kHz（超音波）", baseFreq: 20, desc: "最も一般的に使用される高周波" },
      { name: "15kHz（中周波）", baseFreq: 15, desc: "より広い範囲をカバーする中周波" },
      { name: "10kHz（低周波）", baseFreq: 10, desc: "鼠が不快に思う低周波" },
      { name: "5kHz（超低周波）", baseFreq: 5, desc: "最も低い周波数" },
    ],
    play: "再生",
    stop: "停止",
    volume: "音量",
    frequency: "周波数 (kHz)",
    why: "なぜ鼠除け音が効果的ですか？",
    whyExplanation:
      "鼠はある周波数帯で不快を感じます。これを利用して鼠を追い払うツールです。\n\n効果は環境や鼠の種類によって異なる可能性があります。音声は永久的に鼠を除去するものではなく、警告信号として機能します。\n\n鼠除けスプレー、罠、環境改善（清掃）と併用すると、より良い結果があります。",
    disclaimer: "効果は環境によって異なります。騒音に敏感な人はご注意ください。",
    footer: "ブラウザ(Web Audio API)で100%生成。外部データ送信なし。",
    faq: [
      { q: "鼠除け音で鼠が完全にいなくなりますか？", a: "一時的に鼠を追いますが、永久的に除去されるものではありません。環境改善と同時に使用してください。" },
      { q: "ペットに害がありますか？", a: "一部の動物は鼠よりも高い周波数に敏感です。ペットがいる場合は音量を下げて観察してください。" },
      { q: "スマートフォンでも機能しますか？", a: "デバイスのスピーカー性能によります。一部のスマートフォンは低周波を十分に再生できません。" },
    ],
  },
  es: {
    title: "Sonido Repelente de Ratas",
    subtitle: "Genera ultrasonidos e infrasonidos para repeler ratas con Web Audio API",
    intro:
      "A las ratas les desagran ciertas frecuencias. Selecciona una frecuencia y reproduce.\n\nEl sonido se genera directamente en el navegador (Web Audio API). No se cargan archivos externos.",
    presets: [
      { name: "20kHz (ultrasonico)", baseFreq: 20, desc: "Frecuencia alta mas comun" },
      { name: "15kHz (media)", baseFreq: 15, desc: "Frecuencia media que cubre un rango mas amplio" },
      { name: "10kHz (baja)", baseFreq: 10, desc: "Frecuencia baja que las ratas encuentran desagradable" },
      { name: "5kHz (infrasonico)", baseFreq: 5, desc: "Frecuencia mas baja" },
    ],
    play: "Reproducir",
    stop: "Detener",
    volume: "Volumen",
    frequency: "Frecuencia (kHz)",
    why: "¿Por que el sonido repelente de ratas es efectivo?",
    whyExplanation:
      "Las ratas sienten incomodidad en ciertas frecuencias. Esta herramienta usa eso para disuadir ratas.\n\nLa efectividad puede variar segun el entorno y la especie de rata. El sonido no elimina permanentemente las ratas, sino que actua como senal de advertencia.\n\nCombinado con repelentes, trampas y mejoras ambientales, da mejores resultados.",
    disclaimer: "La efectividad varia por entorno. Usa con precaucion si eres sensible al ruido.",
    footer: "100% generado en el navegador (Web Audio API). Sin datos externos.",
    faq: [
      { q: "¿El sonido repelente eliminara todas las ratas?", a: "Temporalemnte las aleja pero no las elimina permanentemente. Usa con mejoras ambientales." },
      { q: "¿Es nocivo para las mascotas?", a: "Algunos animales son mas sensibles a frecuencias altas que las ratas. Si tienes mascotas, baja el volumen y observa." },
      { q: "¿Funciona en smartphones?", a: "Depende del altavoz. Algunos smartphones no pueden reproducir frecuencias bajas suficientemente." },
    ],
  },
};

export default function RatSound({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentFreq, setCurrentFreq] = useState(20);
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
            description: "Generate rat repellent ultrasonic frequencies with Web Audio API",
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
              <p className="text-sm font-medium text-muted-foreground">프리셋:</p>
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
              <input type="range" min="3" max="25" value={currentFreq} onChange={handleFreqChange}
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
