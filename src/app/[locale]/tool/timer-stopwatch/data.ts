export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  tabTimer: string;
  tabStopwatch: string;
  minutes: string;
  seconds: string;
  start: string;
  pause: string;
  reset: string;
  lap: string;
  timeUp: string;
  lapsTitle: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "타이머 · 스톱워치",
    subtitle: "카운트다운 타이머와 스톱워치를 한 화면에서 사용할 수 있습니다.",
    tabTimer: "타이머",
    tabStopwatch: "스톱워치",
    minutes: "분",
    seconds: "초",
    start: "시작",
    pause: "일시정지",
    reset: "초기화",
    lap: "랩",
    timeUp: "시간이 종료되었습니다!",
    lapsTitle: "기록",
    howTitle: "사용 방법",
    howSteps: [
      "타이머 또는 스톱워치 탭을 선택합니다.",
      "타이머는 분·초를 입력 후 시작, 스톱워치는 바로 시작을 누릅니다.",
      "일시정지·초기화·랩 기록 버튼으로 세밀하게 제어합니다.",
    ],
    faq: [
      { q: "탭을 닫으면 타이머가 계속 동작하나요?", a: "아니요, 브라우저 탭이 백그라운드로 가면 OS/브라우저 정책에 따라 타이머 정확도가 떨어질 수 있습니다. 탭을 열어둔 상태로 사용하는 것을 권장합니다." },
      { q: "알림음이 울리나요?", a: "시간이 종료되면 화면에 안내 메시지가 표시됩니다. 소리 알림은 브라우저 자동재생 정책상 제공하지 않습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Timer & Stopwatch",
    subtitle: "Use a countdown timer and a stopwatch together on one screen.",
    tabTimer: "Timer",
    tabStopwatch: "Stopwatch",
    minutes: "Minutes",
    seconds: "Seconds",
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    lap: "Lap",
    timeUp: "Time's up!",
    lapsTitle: "Laps",
    howTitle: "How to Use",
    howSteps: [
      "Choose the Timer or Stopwatch tab.",
      "For the timer, enter minutes/seconds then press Start; for the stopwatch, just press Start.",
      "Use Pause, Reset, and Lap for fine control.",
    ],
    faq: [
      { q: "Does the timer keep running if I close the tab?", a: "No, if the browser tab goes to the background, OS/browser throttling may reduce timer accuracy. We recommend keeping the tab open and active." },
      { q: "Does it play a sound alert?", a: "A message is displayed on screen when time is up. A sound alert isn't provided due to browser autoplay restrictions." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "タイマー・ストップウォッチ",
    subtitle: "カウントダウンタイマーとストップウォッチを1つの画面で使用できます。",
    tabTimer: "タイマー",
    tabStopwatch: "ストップウォッチ",
    minutes: "分",
    seconds: "秒",
    start: "開始",
    pause: "一時停止",
    reset: "リセット",
    lap: "ラップ",
    timeUp: "時間になりました！",
    lapsTitle: "記録",
    howTitle: "使用方法",
    howSteps: [
      "タイマーまたはストップウォッチのタブを選択します。",
      "タイマーは分・秒を入力後開始、ストップウォッチはそのまま開始を押します。",
      "一時停止・リセット・ラップ記録ボタンで細かく制御します。",
    ],
    faq: [
      { q: "タブを閉じてもタイマーは動き続けますか？", a: "いいえ、ブラウザタブがバックグラウンドに行くとOS/ブラウザのポリシーによりタイマーの精度が落ちる場合があります。タブを開いたまま使用することをお勧めします。" },
      { q: "通知音は鳴りますか？", a: "時間が終了すると画面にメッセージが表示されます。ブラウザの自動再生ポリシーにより音による通知は提供していません。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Temporizador y Cronómetro",
    subtitle: "Usa un temporizador de cuenta regresiva y un cronómetro juntos en una sola pantalla.",
    tabTimer: "Temporizador",
    tabStopwatch: "Cronómetro",
    minutes: "Minutos",
    seconds: "Segundos",
    start: "Iniciar",
    pause: "Pausar",
    reset: "Reiniciar",
    lap: "Vuelta",
    timeUp: "¡Se acabó el tiempo!",
    lapsTitle: "Vueltas",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige la pestaña Temporizador o Cronómetro.",
      "Para el temporizador, introduce minutos/segundos y pulsa Iniciar; para el cronómetro, solo pulsa Iniciar.",
      "Usa Pausar, Reiniciar y Vuelta para un control preciso.",
    ],
    faq: [
      { q: "¿Sigue funcionando el temporizador si cierro la pestaña?", a: "No, si la pestaña del navegador pasa a segundo plano, las políticas del sistema/navegador pueden reducir la precisión. Se recomienda mantener la pestaña abierta y activa." },
      { q: "¿Reproduce una alerta sonora?", a: "Se muestra un mensaje en pantalla cuando se acaba el tiempo. No se incluye alerta sonora debido a las restricciones de reproducción automática del navegador." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
