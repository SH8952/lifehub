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
      "원본(A)과 수정본(B)에 비교할 코드나 텍스트를 각각 입력합니다. 전체 파일을 붙여넣어도 되고, 비교하고 싶은 일부 블록만 넣어도 됩니다.",
      "'비교하기'를 눌러 줄 단위 차이를 확인합니다. 두 텍스트의 줄 수가 다르더라도 자동으로 줄을 맞춰 비교해 줍니다.",
      "초록색은 추가된 줄, 빨간색은 삭제된 줄을 의미합니다. 색이 없는 줄은 두 버전에서 동일하게 유지된 부분입니다.",
      "결과를 확인한 뒤 원본이나 수정본 내용을 고쳐서 다시 '비교하기'를 누르면, 바로 업데이트된 차이를 다시 볼 수 있습니다.",
    ],
    faq: [
      { q: "단어 단위 비교도 가능한가요?", a: "현재 버전은 줄(line) 단위 비교만 지원합니다. 한 줄 안의 세부 단어 차이(예: 변수명 하나만 바뀐 경우)는 그 줄 전체가 변경된 것으로 표시되며, 단어별 강조는 지원하지 않습니다." },
      { q: "비교한 내용이 저장되나요?", a: "아니요. 모든 비교는 브라우저 내에서 즉시 처리되며 서버에 저장되거나 전송되지 않습니다. 코드 리뷰 중인 민감한 내부 코드를 비교해도 외부로 나가지 않습니다." },
      { q: "git diff 명령어와 결과가 똑같나요?", a: "기본 원리(줄 단위 비교)는 비슷하지만, git diff는 커밋 간의 변경 이력을 추적하는 반면 이 도구는 지금 붙여넣은 두 텍스트만 즉석에서 비교합니다. 커밋 없이 빠르게 두 코드 조각을 대조해볼 때 유용합니다." },
      { q: "공백이나 들여쓰기 차이도 감지하나요?", a: "네, 줄 단위 비교이므로 들여쓰기(탭/스페이스)나 줄 끝 공백이 다르면 해당 줄이 변경된 것으로 표시될 수 있습니다. 코드 포맷터를 돌린 전후를 비교할 때 이 점을 참고하세요." },
      { q: "코드 외에 일반 문서나 설정 파일도 비교할 수 있나요?", a: "네. 이 도구는 텍스트를 줄 단위로 비교하는 범용 방식이라 JSON, YAML, 설정 파일, 심지어 일반 문서 초안 두 버전을 비교하는 데도 똑같이 사용할 수 있습니다." },
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
      "Paste the original (A) and modified (B) code or text. You can paste a whole file or just the specific block you want to compare.",
      "Click 'Compare' to see the line-by-line differences. The tool automatically aligns the two versions even if they have a different number of lines.",
      "Green lines are additions, red lines are removals. Lines with no highlight stayed identical between the two versions.",
      "After reviewing the result, edit either side and click 'Compare' again to instantly see the updated diff — no need to reload the page.",
    ],
    faq: [
      { q: "Can it compare word by word?", a: "This version only supports line-by-line comparison. If only one word changes within a line (like a renamed variable), the whole line is flagged as changed rather than highlighting the specific word." },
      { q: "Is the compared content saved anywhere?", a: "No. All comparison happens instantly in your browser and nothing is saved or sent to a server — even sensitive internal code you're reviewing never leaves your machine." },
      { q: "Does it give the same result as `git diff`?", a: "The underlying idea (line-by-line comparison) is similar, but `git diff` tracks changes between commits in a repository, while this tool compares whatever two pieces of text you paste in right now — handy for quick, commit-free comparisons." },
      { q: "Does it detect whitespace or indentation differences?", a: "Yes. Since it's a line-level comparison, a changed indentation (tabs vs. spaces) or trailing whitespace can cause a line to be flagged as different — worth keeping in mind when comparing before/after a code formatter run." },
      { q: "Can I compare documents or config files, not just code?", a: "Yes. Since this is a general-purpose line-by-line text comparison, it works just as well for JSON, YAML, config files, or even two drafts of a plain document." },
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
      "元のコード（A）と変更後（B）にそれぞれ比較するコードやテキストを入力します。ファイル全体を貼り付けても、比較したい一部のブロックだけでも構いません。",
      "「比較する」を押して行単位の差異を確認します。両方の行数が異なっていても自動的に行を揃えて比較します。",
      "緑色は追加された行、赤色は削除された行を意味します。色のついていない行は両方のバージョンで同じ内容です。",
      "結果を確認した後、どちらかの内容を修正して再度「比較する」を押すと、ページを再読み込みせずに最新の差異をすぐに確認できます。",
    ],
    faq: [
      { q: "単語単位の比較も可能ですか？", a: "現在のバージョンは行単位の比較のみサポートしています。1行内の一部の単語だけが変わった場合（変数名の変更など）、その行全体が変更として表示され、単語ごとの強調表示はされません。" },
      { q: "比較した内容は保存されますか？", a: "いいえ。すべての比較はブラウザ内で即座に処理され、サーバーに保存または送信されません。レビュー中の社内の機密コードを比較しても外部に漏れることはありません。" },
      { q: "git diffコマンドと結果は同じですか？", a: "基本的な考え方（行単位の比較）は似ていますが、git diffはリポジトリ内のコミット間の変更を追跡するのに対し、このツールは今貼り付けた2つのテキストをその場で比較します。コミットせずに素早く2つのコードを対比したいときに便利です。" },
      { q: "空白やインデントの違いも検出しますか？", a: "はい、行単位の比較のため、インデント（タブ/スペース）や行末の空白が異なると、その行が変更されたと表示される場合があります。コードフォーマッターの実行前後を比較する際はこの点に注意してください。" },
      { q: "コード以外に一般的な文書や設定ファイルも比較できますか？", a: "はい。このツールはテキストを行単位で比較する汎用的な方式なので、JSON、YAML、設定ファイル、さらには一般的な文書の2つの草案を比較する場合にも同様に使用できます。" },
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
      "Pega el código u texto original (A) y modificado (B). Puedes pegar un archivo completo o solo el bloque específico que quieras comparar.",
      "Haz clic en 'Comparar' para ver las diferencias línea por línea. La herramienta alinea automáticamente ambas versiones aunque tengan un número distinto de líneas.",
      "Las líneas verdes son adiciones, las rojas son eliminaciones. Las líneas sin resaltar permanecieron idénticas entre ambas versiones.",
      "Después de revisar el resultado, edita cualquiera de los dos lados y haz clic en 'Comparar' de nuevo para ver al instante la diferencia actualizada, sin recargar la página.",
    ],
    faq: [
      { q: "¿Puede comparar palabra por palabra?", a: "Esta versión solo soporta comparación línea por línea. Si solo cambia una palabra dentro de una línea (como una variable renombrada), toda la línea se marca como cambiada en lugar de resaltar la palabra específica." },
      { q: "¿Se guarda el contenido comparado?", a: "No. Toda la comparación ocurre instantáneamente en tu navegador y nada se guarda ni se envía a un servidor, ni siquiera el código interno sensible que estés revisando." },
      { q: "¿Da el mismo resultado que el comando `git diff`?", a: "La idea básica (comparación línea por línea) es similar, pero `git diff` rastrea cambios entre commits de un repositorio, mientras que esta herramienta compara al instante cualquier par de textos que pegues — útil para comparaciones rápidas sin necesidad de un commit." },
      { q: "¿Detecta diferencias de espacios o sangría?", a: "Sí. Como es una comparación a nivel de línea, un cambio en la sangría (tabulaciones vs. espacios) o un espacio al final de línea puede marcar esa línea como diferente — tenlo en cuenta al comparar antes y después de aplicar un formateador de código." },
      { q: "¿Puedo comparar documentos o archivos de configuración, no solo código?", a: "Sí. Como es una comparación de texto línea por línea de uso general, funciona igual de bien con JSON, YAML, archivos de configuración, o incluso dos borradores de un documento normal." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
