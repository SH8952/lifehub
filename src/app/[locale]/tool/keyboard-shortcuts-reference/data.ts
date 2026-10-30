export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  osWindows: string;
  osMac: string;
  catGeneral: string;
  catText: string;
  catBrowser: string;
  catWindow: string;
  catCapture: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "키보드 단축키 참조표",
    subtitle: "자주 쓰는 Windows·Mac 단축키를 카테고리별로 한눈에 확인하세요.",
    osWindows: "Windows",
    osMac: "Mac",
    catGeneral: "일반",
    catText: "텍스트 편집",
    catBrowser: "브라우저",
    catWindow: "창·화면 관리",
    catCapture: "스크린샷",
    howTitle: "사용 방법",
    howSteps: [
      "운영체제(Windows/Mac) 탭을 선택합니다.",
      "원하는 카테고리에서 단축키를 찾습니다.",
      "참고용으로 북마크해두고 필요할 때마다 확인하세요.",
    ],
    faq: [
      { q: "모든 애플리케이션에서 동일하게 작동하나요?", a: "여기 나열된 단축키는 운영체제 수준의 표준 단축키이며, 일부 애플리케이션은 자체적으로 다른 단축키를 사용할 수 있습니다." },
      { q: "Linux 단축키도 제공하나요?", a: "현재는 Windows와 Mac 기준으로만 제공합니다. Linux는 배포판·데스크톱 환경에 따라 달라 별도로 제공하지 않습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 별도의 데이터를 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Keyboard Shortcuts Reference",
    subtitle: "Browse the most useful Windows & Mac keyboard shortcuts by category.",
    osWindows: "Windows",
    osMac: "Mac",
    catGeneral: "General",
    catText: "Text Editing",
    catBrowser: "Browser",
    catWindow: "Window Management",
    catCapture: "Screenshot",
    howTitle: "How to Use",
    howSteps: [
      "Select the Windows or Mac tab.",
      "Find the shortcut you need in the relevant category.",
      "Bookmark this page for quick reference anytime.",
    ],
    faq: [
      { q: "Do these work the same in every application?", a: "These are OS-level standard shortcuts; some applications may override them with their own shortcuts." },
      { q: "Are Linux shortcuts included?", a: "Currently only Windows and Mac are covered. Linux shortcuts vary significantly by distro and desktop environment." },
    ],
    disclaimer: "This tool runs entirely in your browser and doesn't store any data.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "キーボードショートカット一覧",
    subtitle: "よく使うWindows・Macのショートカットをカテゴリ別に一覧で確認できます。",
    osWindows: "Windows",
    osMac: "Mac",
    catGeneral: "一般",
    catText: "テキスト編集",
    catBrowser: "ブラウザ",
    catWindow: "ウィンドウ管理",
    catCapture: "スクリーンショット",
    howTitle: "使用方法",
    howSteps: [
      "Windows・Macのタブを選択します。",
      "該当カテゴリでショートカットを探します。",
      "参考用にブックマークして必要な時に確認してください。",
    ],
    faq: [
      { q: "すべてのアプリケーションで同じように動作しますか？", a: "ここに記載されているのはOSレベルの標準ショートカットで、一部のアプリケーションは独自のショートカットを使用する場合があります。" },
      { q: "Linuxのショートカットも提供していますか？", a: "現在はWindowsとMacのみ対応しています。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、データを保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Referencia de Atajos de Teclado",
    subtitle: "Consulta los atajos de teclado más útiles de Windows y Mac por categoría.",
    osWindows: "Windows",
    osMac: "Mac",
    catGeneral: "General",
    catText: "Edición de Texto",
    catBrowser: "Navegador",
    catWindow: "Gestión de Ventanas",
    catCapture: "Captura de Pantalla",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona la pestaña de Windows o Mac.",
      "Encuentra el atajo que necesitas en la categoría correspondiente.",
      "Guarda esta página como referencia rápida.",
    ],
    faq: [
      { q: "¿Funcionan igual en todas las aplicaciones?", a: "Estos son atajos estándar a nivel de sistema operativo; algunas aplicaciones pueden anularlos con los suyos propios." },
      { q: "¿Incluye atajos de Linux?", a: "Actualmente solo se cubren Windows y Mac. Los atajos de Linux varían mucho según la distribución y el entorno de escritorio." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
