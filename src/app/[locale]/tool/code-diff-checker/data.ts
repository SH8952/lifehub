export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  originalLabel: string;
  modifiedLabel: string;
  resultLabel: string;
  compareBtn: string;
  legendAdded: string;
  legendRemoved: string;
  legendUnchanged: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "코드 비교(Diff) 검사기",
    subtitle: "두 코드/텍스트를 줄 단위로 비교해 추가·삭제·변경된 부분을 한눈에 확인합니다.",
    originalLabel: "원본 (A)",
    modifiedLabel: "수정본 (B)",
    resultLabel: "비교 결과",
    compareBtn: "비교하기",
    legendAdded: "추가됨",
    legendRemoved: "삭제됨",
    legendUnchanged: "변경 없음",
    howTitle: "사용 방법",
    howSteps: [
      "원본(A)과 수정본(B)에 비교할 코드나 텍스트를 각각 입력합니다.",
      "'비교하기'를 눌러 줄 단위 차이를 확인합니다.",
      "초록색은 추가, 빨간색은 삭제된 줄을 의미합니다.",
    ],
    faq: [
      { q: "단어 단위 비교도 가능한가요?", a: "현재 버전은 줄(line) 단위 비교만 지원합니다. 한 줄 안의 세부 단어 차이는 표시되지 않습니다." },
      { q: "비교한 내용이 저장되나요?", a: "아니요. 모든 비교는 브라우저 내에서 즉시 처리되며 서버에 저장되거나 전송되지 않습니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Code Diff Checker",
    subtitle: "Compare two blocks of code or text line by line to spot additions, deletions, and changes at a glance.",
    originalLabel: "Original (A)",
    modifiedLabel: "Modified (B)",
    resultLabel: "Diff Result",
    compareBtn: "Compare",
    legendAdded: "Added",
    legendRemoved: "Removed",
    legendUnchanged: "Unchanged",
    howTitle: "How to Use",
    howSteps: [
      "Paste the original (A) and modified (B) code or text.",
      "Click 'Compare' to see the line-by-line differences.",
      "Green lines are additions, red lines are removals.",
    ],
    faq: [
      { q: "Can it compare word by word?", a: "This version only supports line-by-line comparison. Word-level differences within a line are not highlighted." },
      { q: "Is the compared content saved anywhere?", a: "No. All comparison happens instantly in your browser and nothing is saved or sent to a server." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "コード比較（Diff）検査ツール",
    subtitle: "2つのコード・テキストを行単位で比較し、追加・削除・変更された部分を一目で確認します。",
    originalLabel: "元のコード（A）",
    modifiedLabel: "変更後（B）",
    resultLabel: "比較結果",
    compareBtn: "比較する",
    legendAdded: "追加",
    legendRemoved: "削除",
    legendUnchanged: "変更なし",
    howTitle: "使用方法",
    howSteps: [
      "元のコード（A）と変更後（B）にそれぞれ比較するコードやテキストを入力します。",
      "「比較する」を押して行単位の差異を確認します。",
      "緑色は追加、赤色は削除された行を意味します。",
    ],
    faq: [
      { q: "単語単位の比較も可能ですか？", a: "現在のバージョンは行単位の比較のみサポートしています。1行内の単語レベルの差異は表示されません。" },
      { q: "比較した内容は保存されますか？", a: "いいえ。すべての比較はブラウザ内で即座に処理され、サーバーに保存または送信されません。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Verificador de Diferencias de Código",
    subtitle: "Compara dos bloques de código o texto línea por línea para ver adiciones, eliminaciones y cambios.",
    originalLabel: "Original (A)",
    modifiedLabel: "Modificado (B)",
    resultLabel: "Resultado de Comparación",
    compareBtn: "Comparar",
    legendAdded: "Añadido",
    legendRemoved: "Eliminado",
    legendUnchanged: "Sin Cambios",
    howTitle: "Cómo Usar",
    howSteps: [
      "Pega el código u texto original (A) y modificado (B).",
      "Haz clic en 'Comparar' para ver las diferencias línea por línea.",
      "Las líneas verdes son adiciones, las rojas son eliminaciones.",
    ],
    faq: [
      { q: "¿Puede comparar palabra por palabra?", a: "Esta versión solo soporta comparación línea por línea. Las diferencias a nivel de palabra dentro de una línea no se resaltan." },
      { q: "¿Se guarda el contenido comparado?", a: "No. Toda la comparación ocurre instantáneamente en tu navegador y nada se guarda ni se envía a un servidor." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
