export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  wakeTimeLabel: string;
  calculateBtn: string;
  resultLabel: string;
  cyclesLabel: string;
  hoursLabel: string;
  recommendedBadge: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "수면 시간 계산기 (90분 사이클)",
    subtitle: "기상 시각을 입력하면 90분 수면 사이클에 맞춰 가장 개운하게 일어날 수 있는 취침 시각을 추천합니다.",
    wakeTimeLabel: "기상 희망 시각",
    calculateBtn: "계산하기",
    resultLabel: "추천 취침 시각 (잠들기까지 15분 포함)",
    cyclesLabel: "사이클",
    hoursLabel: "수면시간",
    recommendedBadge: "권장",
    howTitle: "사용 방법",
    howSteps: [
      "내일 일어나고 싶은 시각을 입력합니다.",
      "'계산하기'를 눌러 수면 사이클에 맞는 여러 취침 시각 옵션을 확인합니다.",
      "4~6사이클(6~9시간) 중 본인에게 맞는 시간을 선택해 그 시각에 잠들도록 합니다.",
    ],
    faq: [
      { q: "왜 90분 사이클 단위로 계산하나요?", a: "수면은 얕은 잠-깊은 잠-REM 수면을 거치는 약 90분 주기로 반복됩니다. 사이클이 완전히 끝나는 시점에 일어나면 깊은 잠 중간에 깨는 것보다 훨씬 개운합니다." },
      { q: "왜 15분을 추가하나요?", a: "침대에 누운 뒤 실제로 잠드는 데 평균적으로 약 15분이 걸리기 때문에, 취침 시각 계산 시 이를 더해줍니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Sleep Cycle Calculator (90-Minute Cycles)",
    subtitle: "Enter your wake-up time to get recommended bedtimes aligned with 90-minute sleep cycles for the most refreshing wake-up.",
    wakeTimeLabel: "Desired Wake-Up Time",
    calculateBtn: "Calculate",
    resultLabel: "Recommended Bedtimes (includes 15 min to fall asleep)",
    cyclesLabel: "cycles",
    hoursLabel: "sleep",
    recommendedBadge: "Recommended",
    howTitle: "How to Use",
    howSteps: [
      "Enter the time you want to wake up tomorrow.",
      "Click 'Calculate' to see several bedtime options aligned with sleep cycles.",
      "Pick the option with 4-6 cycles (6-9 hours) that suits you and aim to fall asleep at that time.",
    ],
    faq: [
      { q: "Why calculate in 90-minute cycles?", a: "Sleep repeats in roughly 90-minute cycles through light sleep, deep sleep, and REM. Waking at the end of a full cycle feels far more refreshing than waking mid-deep-sleep." },
      { q: "Why add 15 minutes?", a: "It typically takes about 15 minutes to actually fall asleep after getting into bed, so this is added when calculating bedtime." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "睡眠時間計算機（90分サイクル）",
    subtitle: "起床時刻を入力すると、90分の睡眠サイクルに合わせて最も気持ちよく起きられる就寝時刻を推薦します。",
    wakeTimeLabel: "希望起床時刻",
    calculateBtn: "計算する",
    resultLabel: "推薦就寝時刻（入眠までの15分を含む）",
    cyclesLabel: "サイクル",
    hoursLabel: "睡眠",
    recommendedBadge: "推奨",
    howTitle: "使用方法",
    howSteps: [
      "明日起きたい時刻を入力します。",
      "「計算する」を押して睡眠サイクルに合った複数の就寝時刻オプションを確認します。",
      "4〜6サイクル（6〜9時間）の中から自分に合った時間を選び、その時刻に眠るようにします。",
    ],
    faq: [
      { q: "なぜ90分サイクル単位で計算するのですか？", a: "睡眠は浅い眠り・深い眠り・REM睡眠を経る約90分周期で繰り返されます。サイクルが完全に終わる時点で起きると、深い眠りの最中に起きるよりずっと気持ちよく感じます。" },
      { q: "なぜ15分を追加するのですか？", a: "ベッドに入った後、実際に眠りに落ちるまで平均約15分かかるため、就寝時刻の計算時にこれを加えます。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Ciclos de Sueño (90 Minutos)",
    subtitle: "Introduce tu hora de despertar para obtener horas de acostarse recomendadas alineadas con ciclos de sueño de 90 minutos.",
    wakeTimeLabel: "Hora de Despertar Deseada",
    calculateBtn: "Calcular",
    resultLabel: "Horas de Acostarse Recomendadas (incluye 15 min para dormir)",
    cyclesLabel: "ciclos",
    hoursLabel: "sueño",
    recommendedBadge: "Recomendado",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce la hora a la que quieres despertar mañana.",
      "Haz clic en 'Calcular' para ver varias opciones de hora de acostarse.",
      "Elige la opción de 4-6 ciclos (6-9 horas) que te convenga.",
    ],
    faq: [
      { q: "¿Por qué calcular en ciclos de 90 minutos?", a: "El sueño se repite en ciclos de aproximadamente 90 minutos a través del sueño ligero, profundo y REM. Despertar al final de un ciclo completo se siente mucho más reparador." },
      { q: "¿Por qué agregar 15 minutos?", a: "Normalmente se tarda unos 15 minutos en dormirse después de acostarse, por lo que esto se suma al calcular la hora de acostarse." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
