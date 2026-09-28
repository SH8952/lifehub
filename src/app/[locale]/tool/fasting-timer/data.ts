export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  currentPhase: string;
  fasting: string;
  eating: string;
  fastingLabel: string;
  eatingLabel: string;
  remainingEating: string;
  remainingFasting: string;
  presets: string;
  preset168: string;
  preset186: string;
  preset204: string;
  preset231: string;
  startFasting: string;
  reset: string;
  whyFasting: string;
  explanation: string;
  limitations: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "간헐적 단식 타이머 (16:8)",
    subtitle: "단식 시작 시간을 기록하면 먹기/단식 시간이 자동으로 계산됩니다.",
    currentPhase: "현재 단계",
    fasting: "단식 중",
    eating: "먹기 가능",
    fastingLabel: "단식창",
    eatingLabel: "먹기창",
    remainingFasting: "남은 단식 시간",
    remainingEating: "남은 먹기 시간",
    presets: "프리셋 (단식 시간)",
    preset168: "16:8",
    preset186: "18:6",
    preset204: "20:4",
    preset231: "23:1",
    startFasting: "단식 시작",
    reset: "초기화",
    whyFasting: "왜 간헐적 단식인가요?",
    explanation:
      "간헐적 단식은 식사 시간과 단식 시간을 교대로 하는 식사 패턴입니다.\n\n16:8 방식은 가장 대중적으로, 16시간 단식하고 8시간 식사합니다. 체중 감량, 혈당 조절, 자동포아지스(autophagy) 활성화 등에 도움이 됩니다.\n\n이 타이머는 브라우저를 닫아도 단식 상황을 유지합니다.",
    limitations: "의학적 조언을 대체하지 않습니다. 임산부, 당뇨병 환자는 전문가와 상담하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      { q: "단식 중 커피 마셔도 되나요?", a: "블랙커피, 차(당/우유 없음)는 단식을 유지합니다. 칼로리 있는 음료는 피하세요." },
      { q: "초보자는 어디서부터 시작하나요?", a: "16:8이 가장 쉽습니다. 식사 8시간 동안 균형 잡힌 식사, 남은 16시간 단식하세요." },
      { q: "어떤 증상이 나오면 중단해야 하나요?", a: "어지러움, 구토, 현기증이 나타나면 단식을 중단하세요. 임산부, 당뇨병, 식사 장애 역사가 있으면 전문가 상담 필수입니다." },
    ],
  },
  en: {
    title: "Intermittent Fasting Timer (16:8)",
    subtitle: "Record your fasting start time and eating/fasting windows are calculated automatically.",
    currentPhase: "Current Phase",
    fasting: "Fasting",
    eating: "Eating",
    fastingLabel: "Fasting Window",
    eatingLabel: "Eating Window",
    remainingFasting: "Time left fasting",
    remainingEating: "Time left eating",
    presets: "Presets (fasting hours)",
    preset168: "16:8",
    preset186: "18:6",
    preset204: "20:4",
    preset231: "23:1",
    startFasting: "Start Fasting",
    reset: "Reset",
    whyFasting: "Why intermittent fasting?",
    explanation:
      "Intermittent fasting alternates periods of eating and fasting.\n\nThe 16:8 method is the most popular - fast 16 hours, eat during 8 hours. Helps with weight loss, blood sugar control, and autophagy.\n\nTimer keeps your fasting state even when the browser is closed.",
    limitations: "Does not replace medical advice. Pregnant women and diabetics should consult a doctor.",
    footer: "100% processed in browser. No data sent to the server.",
    faq: [
      { q: "Can I drink coffee while fasting?", a: "Black coffee and tea (no sugar, no milk) are fine. Avoid beverages with calories." },
      { q: "Where should beginners start?", a: "Start with 16:8. Eat a balanced diet during the 8-hour window and fast the remaining 16 hours." },
      { q: "What symptoms mean I should stop?", a: "Stop fasting if you experience dizziness, nausea, or weakness. Pregnant women and diabetics should consult a doctor." },
    ],
  },
  ja: {
    title: "間欠的断食タイマー（16:8）",
    subtitle: "断食開始時間を記録すると、食時間と断食時間が自動的に計算されます。",
    currentPhase: "現在の状態",
    fasting: "断食中",
    eating: "食可能",
    fastingLabel: "断食時間",
    eatingLabel: "食時間",
    remainingFasting: "残りの断食時間",
    remainingEating: "残りの食時間",
    presets: "プリセット（断食時間）",
    preset168: "16:8",
    preset186: "18:6",
    preset204: "20:4",
    preset231: "23:1",
    startFasting: "断食開始",
    reset: "リセット",
    whyFasting: "なぜ間欠的断食？",
    explanation:
      "間欠的断食は、食事と断食を交互に行うパターンです。\n\n16:8方式が最も一般的 - 16時間断食、8時間の間に食ます。体重減少、血糖値調整、オートファジーに役立ちます。\n\nブラウザを閉めても断食状態を維持します。",
    limitations: "医療アドバイスの代わりにはなりません。妊婦、糖尿病患者は医師に相談してください。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      { q: "断食中にコーヒーを飲んでもいいですか？", a: "ブラックコーヒー、お茶（砂糖・奶なし）は大丈夫です。カロリーがある飲み物は避けましょう。" },
      { q: "初心者はどこから始めれば良いですか？", a: "16:8から始めましょう。8時間窓でバランスの取れた食事をして、残り16時間は断食してください。" },
      { q: "どんな症状が出たら中断すべきですか？", a: "めまい、吐き気、動悸が現れたら断食を終了しましょう。妊婦、糖尿病患者は医師に相談してください。" },
    ],
  },
  es: {
    title: "Temporizador de Ayuno Intermitente (16:8)",
    subtitle: "Registra tu hora de inicio de ayuno y se calculan ventanas de alimentacion/ayuno.",
    currentPhase: "Fase Actual",
    fasting: "Ayuno",
    eating: "Alimentacion",
    fastingLabel: "Ventana de Ayuno",
    eatingLabel: "Ventana de Alimentacion",
    remainingFasting: "Tiempo restante de ayuno",
    remainingEating: "Tiempo restante de alimentacion",
    presets: "Preajustes (horas de ayuno)",
    preset168: "16:8",
    preset186: "18:6",
    preset204: "20:4",
    preset231: "23:1",
    startFasting: "Iniciar Ayuno",
    reset: "Reset",
    whyFasting: "¿Por que ayuno intermitente?",
    explanation:
      "El ayuno intermitente alterna periodos de comer y ayunar.\n\nEl metodo 16:8 es el mas popular: ayuna 16 horas, come en 8 horas. Ayuda con perdida de peso, control glucosa, y autofagia.\n\nEl timer mantiene tu estado de ayuno aun con el navegador cerrado.",
    limitations: "No reemplaza el consejo medico. Mujeres embarazadas y diabeticos deben consultar un medico.",
    footer: "Procesado 100% en navegador. Sin datos enviados al servidor.",
    faq: [
      { q: "¿Puedo tomar cafe en ayuno?", a: "Cafe negro y te (sin azucar, sin leche) estan bien. Evita bebidas con calorias." },
      { q: "¿Por donde empiezan los principiantes?", a: "Empieza con 16:8. Come durante la ventana de 8 horas y ayuna las 16 horas restantes." },
      { q: "¿Cuales sintomas indican que debo parar?", a: "Para si tienes mareos, nauseas o debilidad. Mujeres embarazadas y diabeticos deben consultar un medico." },
    ],
  },
};
