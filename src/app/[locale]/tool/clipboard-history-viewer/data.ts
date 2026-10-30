export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  captureBtn: string;
  historyLabel: string;
  emptyState: string;
  copyBtn: string;
  deleteBtn: string;
  clearAllBtn: string;
  copied: string;
  permissionError: string;
  duplicateNotice: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "클립보드 히스토리 뷰어",
    subtitle: "버튼을 눌러 현재 클립보드 내용을 히스토리에 기록하고, 이전에 복사했던 내용들을 모아볼 수 있습니다. (이 세션 동안만 유지됩니다)",
    captureBtn: "현재 클립보드 추가",
    historyLabel: "히스토리 ({count}개)",
    emptyState: "아직 기록된 항목이 없습니다. 위 버튼을 눌러 클립보드 내용을 추가해 보세요.",
    copyBtn: "복사",
    deleteBtn: "삭제",
    clearAllBtn: "전체 삭제",
    copied: "복사됨!",
    permissionError: "클립보드 읽기 권한이 필요합니다. 브라우저 권한을 확인해주세요.",
    duplicateNotice: "직전 항목과 동일한 내용은 추가되지 않습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "다른 곳에서 텍스트를 복사(Ctrl+C / Cmd+C)합니다.",
      "이 페이지로 돌아와 \"현재 클립보드 추가\" 버튼을 누르면 히스토리에 기록됩니다.",
      "히스토리 목록에서 원하는 항목을 다시 클릭하여 복사하거나 개별 삭제할 수 있습니다.",
    ],
    faq: [
      { q: "왜 자동으로 클립보드를 감지하지 않나요?", a: "브라우저 보안 정책상 웹사이트가 사용자 동의 없이 클립보드 변화를 지속적으로 감시할 수 없습니다. 그래서 버튼을 눌러 명시적으로 추가하는 방식입니다." },
      { q: "히스토리는 어디에 저장되나요?", a: "브라우저 메모리에만 저장되며, 페이지를 새로고침하거나 닫으면 모두 사라집니다. 서버로 전송되지 않습니다." },
    ],
    disclaimer: "클립보드 내용은 브라우저 메모리에만 임시 저장되며 서버로 전송되지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Clipboard History Viewer",
    subtitle: "Click the button to capture your current clipboard into a history list you can review. (Kept only for this session.)",
    captureBtn: "Capture Current Clipboard",
    historyLabel: "History ({count} items)",
    emptyState: "No items captured yet. Click the button above to add your clipboard content.",
    copyBtn: "Copy",
    deleteBtn: "Delete",
    clearAllBtn: "Clear All",
    copied: "Copied!",
    permissionError: "Clipboard read permission is required. Please check your browser permissions.",
    duplicateNotice: "Identical to the last item — not added again.",
    howTitle: "How to Use",
    howSteps: [
      "Copy some text elsewhere (Ctrl+C / Cmd+C).",
      "Come back to this page and click \"Capture Current Clipboard\" to record it.",
      "Click any history item to copy it again, or delete items individually.",
    ],
    faq: [
      { q: "Why doesn't it detect clipboard changes automatically?", a: "Browser security policy prevents websites from continuously monitoring clipboard changes without explicit consent, so you add items with an explicit button click." },
      { q: "Where is the history stored?", a: "Only in browser memory for this session — it disappears on refresh or close, and is never sent to a server." },
    ],
    disclaimer: "Clipboard content is only held temporarily in browser memory and never sent to a server.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "クリップボード履歴ビューア",
    subtitle: "ボタンを押して現在のクリップボードの内容を履歴に記録し、以前コピーした内容をまとめて確認できます。（このセッション中のみ保持）",
    captureBtn: "現在のクリップボードを追加",
    historyLabel: "履歴（{count}件）",
    emptyState: "まだ記録された項目はありません。上のボタンを押してクリップボードの内容を追加してください。",
    copyBtn: "コピー",
    deleteBtn: "削除",
    clearAllBtn: "すべて削除",
    copied: "コピーしました！",
    permissionError: "クリップボードの読み取り権限が必要です。ブラウザの権限を確認してください。",
    duplicateNotice: "直前の項目と同じ内容は追加されません。",
    howTitle: "使用方法",
    howSteps: [
      "他の場所でテキストをコピー（Ctrl+C / Cmd+C）します。",
      "このページに戻り「現在のクリップボードを追加」ボタンを押すと履歴に記録されます。",
      "履歴リストの項目をクリックして再度コピーしたり、個別に削除したりできます。",
    ],
    faq: [
      { q: "なぜ自動的にクリップボードを検出しないのですか？", a: "ブラウザのセキュリティ方針上、ウェブサイトがユーザーの同意なしにクリップボードの変化を継続的に監視することはできません。そのためボタンを押して明示的に追加する方式です。" },
      { q: "履歴はどこに保存されますか？", a: "ブラウザのメモリにのみ保存され、ページを更新または閉じるとすべて消えます。サーバーには送信されません。" },
    ],
    disclaimer: "クリップボードの内容はブラウザのメモリにのみ一時的に保存され、サーバーには送信されません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Visor de Historial del Portapapeles",
    subtitle: "Haz clic en el botón para capturar tu portapapeles actual en una lista de historial. (Se mantiene solo durante esta sesión.)",
    captureBtn: "Capturar Portapapeles Actual",
    historyLabel: "Historial ({count} elementos)",
    emptyState: "Aún no hay elementos capturados. Haz clic en el botón para añadir el contenido de tu portapapeles.",
    copyBtn: "Copiar",
    deleteBtn: "Eliminar",
    clearAllBtn: "Borrar Todo",
    copied: "¡Copiado!",
    permissionError: "Se requiere permiso de lectura del portapapeles. Verifica los permisos de tu navegador.",
    duplicateNotice: "Idéntico al último elemento: no se añade de nuevo.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Copia texto en otro lugar (Ctrl+C / Cmd+C).",
      "Vuelve a esta página y haz clic en \"Capturar Portapapeles Actual\" para registrarlo.",
      "Haz clic en cualquier elemento del historial para copiarlo de nuevo, o elimínalo individualmente.",
    ],
    faq: [
      { q: "¿Por qué no detecta los cambios del portapapeles automáticamente?", a: "La política de seguridad del navegador impide que los sitios web monitoreen continuamente el portapapeles sin consentimiento explícito, por eso añades elementos con un clic explícito." },
      { q: "¿Dónde se almacena el historial?", a: "Solo en la memoria del navegador durante esta sesión; desaparece al actualizar o cerrar, y nunca se envía a un servidor." },
    ],
    disclaimer: "El contenido del portapapeles solo se guarda temporalmente en la memoria del navegador y nunca se envía a un servidor.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
