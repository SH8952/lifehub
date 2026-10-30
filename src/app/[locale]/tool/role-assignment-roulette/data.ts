export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  namesLabel: string;
  namesPlaceholder: string;
  rolesLabel: string;
  rolesPlaceholder: string;
  assignBtn: string;
  resultLabel: string;
  errorEmpty: string;
  defaultRolesNotice: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "역할 분담 룰렛 (팀 과제용)",
    subtitle: "팀원 이름을 입력하면 역할을 무작위로 공정하게 배정해드립니다.",
    namesLabel: "팀원 이름 (한 줄에 한 명씩)",
    namesPlaceholder: "예:\n철수\n영희\n민수",
    rolesLabel: "역할 목록 (한 줄에 하나씩, 비워두면 기본 역할 사용)",
    rolesPlaceholder: "예:\n발표자\n자료조사\n디자인\n문서작성",
    assignBtn: "역할 배정하기",
    resultLabel: "배정 결과",
    errorEmpty: "팀원 이름을 한 명 이상 입력해주세요.",
    defaultRolesNotice: "역할 목록이 비어 있어 기본 역할을 사용했습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "팀원 이름을 한 줄에 한 명씩 입력합니다.",
      "원하는 역할이 있다면 역할 목록에도 입력합니다. (비워두면 발표자/자료조사/디자인/문서작성 등 기본 역할 사용)",
      "\"역할 배정하기\" 버튼을 누르면 무작위로 공정하게 배정됩니다.",
    ],
    faq: [
      { q: "인원수와 역할 수가 다르면 어떻게 되나요?", a: "역할이 인원보다 적으면 일부 팀원은 역할 없이 표시되고, 역할이 더 많으면 남는 역할은 배정되지 않습니다. 가능하면 인원수와 역할 수를 맞춰주세요." },
      { q: "배정 결과가 마음에 들지 않으면 어떻게 하나요?", a: "\"역할 배정하기\" 버튼을 다시 누르면 새로운 무작위 조합으로 재배정됩니다." },
    ],
    disclaimer: "입력한 이름과 역할은 서버로 전송되지 않고 브라우저 내에서만 처리됩니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Role Assignment Roulette (For Team Projects)",
    subtitle: "Enter your team members' names and roles will be assigned randomly and fairly.",
    namesLabel: "Team Member Names (one per line)",
    namesPlaceholder: "e.g.\nAlex\nJordan\nSam",
    rolesLabel: "Role List (one per line, leave blank for default roles)",
    rolesPlaceholder: "e.g.\nPresenter\nResearcher\nDesigner\nWriter",
    assignBtn: "Assign Roles",
    resultLabel: "Assignment Result",
    errorEmpty: "Please enter at least one team member's name.",
    defaultRolesNotice: "Role list was empty, so default roles were used.",
    howTitle: "How to Use",
    howSteps: [
      "Enter team members, one name per line.",
      "If you have specific roles, enter them too (leave blank for default roles like Presenter, Researcher, Designer, Writer).",
      "Click \"Assign Roles\" for a random, fair assignment.",
    ],
    faq: [
      { q: "What happens if the number of people and roles differ?", a: "If there are fewer roles than people, some members show no role; if there are more roles, the extras go unassigned. Try to match the counts when possible." },
      { q: "What if I don't like the result?", a: "Click \"Assign Roles\" again for a new random combination." },
    ],
    disclaimer: "The names and roles you enter are never sent to a server — everything is processed in your browser.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "役割分担ルーレット（チーム課題用）",
    subtitle: "チームメンバーの名前を入力すると役割をランダムに公平に割り当てます。",
    namesLabel: "チームメンバーの名前（1行に1人）",
    namesPlaceholder: "例：\n太郎\n花子\n次郎",
    rolesLabel: "役割リスト（1行に1つ、空欄の場合デフォルト役割を使用）",
    rolesPlaceholder: "例：\n発表者\n資料調査\nデザイン\n文書作成",
    assignBtn: "役割を割り当てる",
    resultLabel: "割り当て結果",
    errorEmpty: "チームメンバーの名前を1人以上入力してください。",
    defaultRolesNotice: "役割リストが空のためデフォルト役割を使用しました。",
    howTitle: "使用方法",
    howSteps: [
      "チームメンバーを1行に1人ずつ入力します。",
      "希望の役割があれば役割リストにも入力します。（空欄の場合は発表者/資料調査/デザイン/文書作成などのデフォルト役割を使用）",
      "「役割を割り当てる」ボタンを押すとランダムに公平に割り当てられます。",
    ],
    faq: [
      { q: "人数と役割数が異なる場合はどうなりますか？", a: "役割が人数より少ない場合、一部のメンバーは役割なしで表示され、役割がより多い場合は余った役割は割り当てられません。可能であれば人数と役割数を一致させてください。" },
      { q: "割り当て結果が気に入らない場合はどうすればいいですか？", a: "「役割を割り当てる」ボタンを再度押すと新しいランダムな組み合わせで再割り当てされます。" },
    ],
    disclaimer: "入力した名前と役割はサーバーに送信されず、ブラウザ内でのみ処理されます。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Ruleta de Asignación de Roles (Para Proyectos de Equipo)",
    subtitle: "Introduce los nombres de tu equipo y los roles se asignarán al azar y de forma justa.",
    namesLabel: "Nombres del Equipo (uno por línea)",
    namesPlaceholder: "p. ej.\nAna\nLuis\nCarla",
    rolesLabel: "Lista de Roles (uno por línea, déjalo vacío para roles predeterminados)",
    rolesPlaceholder: "p. ej.\nPresentador\nInvestigador\nDiseñador\nRedactor",
    assignBtn: "Asignar Roles",
    resultLabel: "Resultado de la Asignación",
    errorEmpty: "Introduce al menos un nombre de miembro del equipo.",
    defaultRolesNotice: "La lista de roles estaba vacía, así que se usaron roles predeterminados.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce a los miembros del equipo, un nombre por línea.",
      "Si tienes roles específicos, introdúcelos también (déjalo vacío para roles predeterminados como Presentador, Investigador, Diseñador, Redactor).",
      "Haz clic en \"Asignar Roles\" para una asignación aleatoria y justa.",
    ],
    faq: [
      { q: "¿Qué pasa si el número de personas y roles es diferente?", a: "Si hay menos roles que personas, algunos miembros no mostrarán rol; si hay más roles, los extras quedan sin asignar. Intenta igualar los números cuando sea posible." },
      { q: "¿Qué pasa si no me gusta el resultado?", a: "Haz clic en \"Asignar Roles\" de nuevo para una nueva combinación aleatoria." },
    ],
    disclaimer: "Los nombres y roles que introduces nunca se envían a un servidor; todo se procesa en tu navegador.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
