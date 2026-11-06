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
      "이 페이지는 단축키를 보여주기만 하며, 실제로 단축키를 바꾸거나 커스터마이징하는 기능은 제공하지 않습니다.",
    ],
    faq: [
      { q: "모든 애플리케이션에서 동일하게 작동하나요?", a: "여기 나열된 단축키는 운영체제 수준의 표준 단축키이며, 일부 애플리케이션은 자체적으로 다른 단축키를 사용할 수 있습니다." },
      { q: "Linux 단축키도 제공하나요?", a: "현재는 Windows와 Mac 기준으로만 제공합니다. Linux는 배포판·데스크톱 환경에 따라 달라 별도로 제공하지 않습니다." },
      { q: "목록은 최신 OS 버전을 반영하나요?", a: "자주 사용되는 핵심 단축키 위주로 구성되어 있으며, OS 업데이트로 일부 단축키가 변경될 수 있어 특수한 기능은 공식 문서를 함께 참고하시는 것이 좋습니다." },
      { q: "원하는 단축키를 검색할 수 있나요?", a: "현재 버전은 카테고리별 탐색만 지원하며, 별도의 검색창 기능은 포함되어 있지 않습니다." },
      { q: "키보드 배열(QWERTY 외)에 따라 단축키가 달라지나요?", a: "일부 단축키는 키보드 배열에 따라 물리적 키 위치가 달라질 수 있지만, 여기 소개된 단축키는 대부분의 표준 QWERTY 배열을 기준으로 합니다." },
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
      "This page only displays shortcuts for reference — it doesn't let you remap or customize them.",
    ],
    faq: [
      { q: "Do these work the same in every application?", a: "These are OS-level standard shortcuts; some applications may override them with their own shortcuts." },
      { q: "Are Linux shortcuts included?", a: "Currently only Windows and Mac are covered. Linux shortcuts vary significantly by distro and desktop environment." },
      { q: "Does the list reflect the latest OS versions?", a: "It focuses on the most commonly used core shortcuts. Some shortcuts can change with OS updates, so it's good to cross-check official documentation for less common features." },
      { q: "Can I search for a specific shortcut?", a: "The current version only supports browsing by category; a dedicated search box isn't included." },
      { q: "Do shortcuts differ by keyboard layout (non-QWERTY)?", a: "Some shortcuts can land on a different physical key depending on your layout, but the shortcuts listed here are based on the standard QWERTY layout." },
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
      "このページはショートカットを表示するだけで、実際にショートカットを変更・カスタマイズする機能は提供していません。",
    ],
    faq: [
      { q: "すべてのアプリケーションで同じように動作しますか？", a: "ここに記載されているのはOSレベルの標準ショートカットで、一部のアプリケーションは独自のショートカットを使用する場合があります。" },
      { q: "Linuxのショートカットも提供していますか？", a: "現在はWindowsとMacのみ対応しています。" },
      { q: "リストは最新のOSバージョンを反映していますか？", a: "よく使われる主要なショートカットを中心に構成されており、OSアップデートにより一部のショートカットが変更される場合があるため、特殊な機能は公式ドキュメントも併せて参照することをおすすめします。" },
      { q: "希望のショートカットを検索できますか？", a: "現在のバージョンはカテゴリ別の閲覧のみをサポートしており、別途の検索ボックス機能は含まれていません。" },
      { q: "キーボード配列（QWERTY以外）によってショートカットは変わりますか？", a: "一部のショートカットはキーボード配列によって物理的なキー位置が変わる場合がありますが、ここで紹介しているショートカットは標準的なQWERTY配列を基準としています。" },
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
      "Esta página solo muestra los atajos como referencia; no permite reasignarlos ni personalizarlos.",
    ],
    faq: [
      { q: "¿Funcionan igual en todas las aplicaciones?", a: "Estos son atajos estándar a nivel de sistema operativo; algunas aplicaciones pueden anularlos con los suyos propios." },
      { q: "¿Incluye atajos de Linux?", a: "Actualmente solo se cubren Windows y Mac. Los atajos de Linux varían mucho según la distribución y el entorno de escritorio." },
      { q: "¿La lista refleja las últimas versiones del sistema operativo?", a: "Se centra en los atajos principales más usados. Algunos atajos pueden cambiar con las actualizaciones del sistema operativo, así que conviene consultar también la documentación oficial para funciones menos comunes." },
      { q: "¿Puedo buscar un atajo específico?", a: "La versión actual solo admite navegación por categoría; no incluye un cuadro de búsqueda específico." },
      { q: "¿Los atajos varían según la distribución del teclado (no QWERTY)?", a: "Algunos atajos pueden caer en una tecla física diferente según la distribución, pero los atajos listados aquí se basan en la distribución QWERTY estándar." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y no almacena ningún dato.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
