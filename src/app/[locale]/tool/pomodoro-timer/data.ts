export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  focusLabel: string;
  breakLabel: string;
  longBreakLabel: string;
  start: string;
  pause: string;
  reset: string;
  skip: string;
  sessionsLabel: string;
  customSettings: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "뽀모도로 타이머",
    subtitle: "25분 집중과 5분 휴식을 반복하는 뽀모도로 기법으로 생산성을 높여보세요.",
    focusLabel: "집중 시간",
    breakLabel: "휴식 시간",
    longBreakLabel: "긴 휴식",
    start: "시작",
    pause: "일시정지",
    reset: "초기화",
    skip: "건너뛰기",
    sessionsLabel: "완료한 집중 세션",
    customSettings: "시간 설정 (분)",
    howTitle: "사용 방법",
    howSteps: [
      "필요하면 집중·휴식 시간을 분 단위로 조정합니다.",
      "시작을 눌러 집중 세션을 시작합니다.",
      "집중 세션이 끝나면 자동으로 휴식 타이머로 전환되며, 4번째 집중 후에는 긴 휴식이 주어집니다.",
    ],
    faq: [
      { q: "뽀모도로 기법이란?", a: "25분간 집중해서 작업하고 5분간 휴식하는 것을 반복하며, 4세트마다 15~30분의 긴 휴식을 갖는 시간관리 기법입니다." },
      { q: "탭을 벗어나면 타이머가 멈추나요?", a: "브라우저가 백그라운드 탭의 타이머 정확도를 낮출 수 있으므로, 탭을 열어둔 채 사용하는 것을 권장합니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Pomodoro Timer",
    subtitle: "Boost your productivity with the Pomodoro technique — 25 minutes of focus, 5 minutes of rest, repeated.",
    focusLabel: "Focus",
    breakLabel: "Break",
    longBreakLabel: "Long Break",
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    skip: "Skip",
    sessionsLabel: "Completed Focus Sessions",
    customSettings: "Duration Settings (minutes)",
    howTitle: "How to Use",
    howSteps: [
      "Adjust focus/break durations in minutes if needed.",
      "Press Start to begin a focus session.",
      "When a focus session ends, it automatically switches to a break — every 4th focus session is followed by a long break.",
    ],
    faq: [
      { q: "What is the Pomodoro technique?", a: "A time-management method of alternating 25-minute focused work sessions with 5-minute breaks, taking a longer 15–30 minute break every 4 sessions." },
      { q: "Does the timer stop if I switch tabs?", a: "Browsers may throttle timers in background tabs, so it's best to keep this tab open and active." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "ポモドーロタイマー",
    subtitle: "25分の集中と5分の休憩を繰り返すポモドーロ・テクニックで生産性を高めましょう。",
    focusLabel: "集中",
    breakLabel: "休憩",
    longBreakLabel: "長い休憩",
    start: "開始",
    pause: "一時停止",
    reset: "リセット",
    skip: "スキップ",
    sessionsLabel: "完了した集中セッション",
    customSettings: "時間設定（分）",
    howTitle: "使用方法",
    howSteps: [
      "必要に応じて集中・休憩時間を分単位で調整します。",
      "開始を押して集中セッションを始めます。",
      "集中セッションが終わると自動的に休憩タイマーに切り替わり、4回目の集中の後には長い休憩が与えられます。",
    ],
    faq: [
      { q: "ポモドーロ・テクニックとは？", a: "25分間集中して作業し、5分間休憩することを繰り返し、4セットごとに15〜30分の長い休憩を取る時間管理法です。" },
      { q: "タブを離れるとタイマーは止まりますか？", a: "ブラウザはバックグラウンドタブのタイマー精度を下げることがあるため、タブを開いたまま使用することをお勧めします。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Temporizador Pomodoro",
    subtitle: "Aumenta tu productividad con la técnica Pomodoro: 25 minutos de concentración, 5 de descanso, repetido.",
    focusLabel: "Concentración",
    breakLabel: "Descanso",
    longBreakLabel: "Descanso Largo",
    start: "Iniciar",
    pause: "Pausar",
    reset: "Reiniciar",
    skip: "Omitir",
    sessionsLabel: "Sesiones de Concentración Completadas",
    customSettings: "Configuración de Duración (minutos)",
    howTitle: "Cómo Usar",
    howSteps: [
      "Ajusta la duración de concentración/descanso en minutos si es necesario.",
      "Pulsa Iniciar para comenzar una sesión de concentración.",
      "Al terminar, cambia automáticamente a un descanso — cada 4ª sesión va seguida de un descanso largo.",
    ],
    faq: [
      { q: "¿Qué es la técnica Pomodoro?", a: "Un método de gestión del tiempo que alterna sesiones de 25 minutos de concentración con descansos de 5 minutos, con un descanso más largo de 15 a 30 minutos cada 4 sesiones." },
      { q: "¿Se detiene el temporizador si cambio de pestaña?", a: "Los navegadores pueden ralentizar los temporizadores en pestañas en segundo plano, así que es mejor mantener esta pestaña abierta y activa." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
