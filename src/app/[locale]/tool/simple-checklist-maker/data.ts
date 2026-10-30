export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  addButton: string;
  progressLabel: string;
  clearCompleted: string;
  clearAll: string;
  emptyState: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "체크리스트 메이커",
    subtitle: "할 일 목록을 추가하고 체크하며 완료율을 한눈에 확인하세요.",
    inputPlaceholder: "할 일을 입력하고 Enter를 누르세요",
    addButton: "추가",
    progressLabel: "완료율",
    clearCompleted: "완료 항목 지우기",
    clearAll: "전체 지우기",
    emptyState: "아직 추가된 할 일이 없습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "입력창에 할 일을 입력하고 Enter나 추가 버튼을 누릅니다.",
      "완료한 항목은 체크박스를 클릭해 표시합니다.",
      "완료율과 함께 진행 상황을 실시간으로 확인할 수 있습니다.",
    ],
    faq: [
      { q: "체크리스트가 저장되나요?", a: "아니요, 이 도구는 현재 브라우저 세션 동안만 목록을 유지합니다. 페이지를 새로고침하면 초기화됩니다." },
      { q: "항목 순서를 바꿀 수 있나요?", a: "현재는 추가한 순서대로만 표시되며, 순서 변경 기능은 제공하지 않습니다." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 입력한 내용을 서버에 저장하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Checklist Maker",
    subtitle: "Add to-do items, check them off, and track your completion rate at a glance.",
    inputPlaceholder: "Type a task and press Enter",
    addButton: "Add",
    progressLabel: "Progress",
    clearCompleted: "Clear Completed",
    clearAll: "Clear All",
    emptyState: "No tasks added yet.",
    howTitle: "How to Use",
    howSteps: [
      "Type a task in the input box and press Enter or Add.",
      "Click the checkbox to mark a task as done.",
      "Track your progress and completion rate in real time.",
    ],
    faq: [
      { q: "Is the checklist saved?", a: "No, this tool only keeps the list for the current browser session. Refreshing the page resets it." },
      { q: "Can I reorder items?", a: "Currently items are shown in the order added only; reordering isn't supported." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores your data on a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "チェックリストメーカー",
    subtitle: "やることリストを追加してチェックし、完了率を一目で確認しましょう。",
    inputPlaceholder: "やることを入力してEnterを押してください",
    addButton: "追加",
    progressLabel: "進捗",
    clearCompleted: "完了項目を削除",
    clearAll: "すべて削除",
    emptyState: "まだ追加されたタスクはありません。",
    howTitle: "使用方法",
    howSteps: [
      "入力欄にやることを入力し、Enterまたは追加ボタンを押します。",
      "完了した項目はチェックボックスをクリックして表示します。",
      "完了率とともに進捗状況をリアルタイムで確認できます。",
    ],
    faq: [
      { q: "チェックリストは保存されますか？", a: "いいえ、このツールは現在のブラウザセッション中のみリストを保持します。ページを更新するとリセットされます。" },
      { q: "項目の順序を変更できますか？", a: "現在は追加した順序でのみ表示され、順序変更機能は提供していません。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、入力内容をサーバーに保存しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Creador de Lista de Verificación",
    subtitle: "Agrega tareas, márcalas y sigue tu tasa de finalización de un vistazo.",
    inputPlaceholder: "Escribe una tarea y presiona Enter",
    addButton: "Agregar",
    progressLabel: "Progreso",
    clearCompleted: "Eliminar Completadas",
    clearAll: "Eliminar Todo",
    emptyState: "Aún no se han agregado tareas.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe una tarea en el cuadro y presiona Enter o Agregar.",
      "Haz clic en la casilla para marcar una tarea como completada.",
      "Sigue tu progreso y tasa de finalización en tiempo real.",
    ],
    faq: [
      { q: "¿Se guarda la lista de verificación?", a: "No, esta herramienta solo mantiene la lista durante la sesión actual del navegador. Al actualizar la página se reinicia." },
      { q: "¿Puedo reordenar los elementos?", a: "Actualmente los elementos se muestran solo en el orden en que se agregaron; no se admite reordenar." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena tus datos en un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
