export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  tabBuild: string;
  tabCheck: string;
  inputs: string;
  minute: string;
  hour: string;
  dayOfMonth: string;
  month: string;
  dayOfWeek: string;
  everyLabel: string;
  specificLabel: string;
  cronInput: string;
  cronInputPlaceholder: string;
  generatedExpression: string;
  copy: string;
  copied: string;
  nextRuns: string;
  invalidExpression: string;
  whyCron: string;
  cronExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "Cron 표현식 생성·검증기",
    subtitle: "분/시/일/월/요일 필드로 cron 표현식을 만들고, 기존 표현식을 검증합니다",
    tabBuild: "작성",
    tabCheck: "확인",
    inputs: "필드 설정",
    minute: "분 (0-59)",
    hour: "시 (0-23)",
    dayOfMonth: "일 (1-31)",
    month: "월 (1-12)",
    dayOfWeek: "요일 (0-6, 0=일요일)",
    everyLabel: "매(전체, *)",
    specificLabel: "지정",
    cronInput: "Cron 표현식 입력",
    cronInputPlaceholder: "예: 0 9 * * *",
    generatedExpression: "생성된 Cron 표현식",
    copy: "복사",
    copied: "복사됨!",
    nextRuns: "다음 실행 예정 시각 (5회)",
    invalidExpression: "올바른 cron 표현식이 아닙니다. 형식을 확인해 주세요.",
    whyCron: "Cron 표현식은 어떻게 구성되나요?",
    cronExplanation: "표준 5필드 cron 표현식은 '분 시 일 월 요일' 순서로 구성됩니다. 각 필드에 *(매)를 넣으면 해당 단위의 모든 값을, 특정 숫자를 넣으면 그 시점만을 의미합니다.\n\n예를 들어 '0 9 * * *'는 매일 오전 9시 0분을 의미하며, '0 9 * * 1-5'는 평일(월~금) 오전 9시를 의미합니다.\n\n다음 실행 시각 계산은 cron-parser 라이브러리를 이용해 현재 시각 기준으로 계산합니다.",
    disclaimer: "표준 5필드 cron 문법을 기준으로 하며, 사용하는 스케줄러(예: Quartz)에 따라 초 필드 추가, L/W/# 등 특수 기호 지원 여부가 다를 수 있습니다. 실제 운영 환경에 적용하기 전에 해당 스케줄러의 문서를 확인하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "Cron 표현식 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "분과 시 필드에 쉼표(,)나 범위(-)를 쓸 수 있나요?", a: "네. 표준 cron 문법에서는 '1,15,30'처럼 쉼표로 여러 값을, '9-17'처럼 하이픈으로 범위를 지정할 수 있습니다. 이 도구의 '작성' 탭은 간단한 단일 값/매(*) 선택만 지원하므로, 더 복잡한 조합은 '확인' 탭에 직접 입력해 검증하세요." },
      { q: "요일 필드에서 0은 무슨 요일인가요?", a: "표준 cron 문법에서 요일 필드는 0(일요일)부터 6(토요일)까지입니다. 일부 시스템은 7도 일요일로 허용하기도 합니다." },
      { q: "매분 실행되는 작업도 만들 수 있나요?", a: "네, 모든 필드를 *(매)로 설정하면 '* * * * *'와 같이 매분 실행되는 표현식이 됩니다. 다만 실제로는 서버 부하를 고려해 너무 짧은 주기는 피하는 것이 좋습니다." },
    ],
  },
  en: {
    title: "Cron Expression Builder & Validator",
    subtitle: "Build a cron expression from minute/hour/day/month/weekday fields, or validate an existing one",
    tabBuild: "Build",
    tabCheck: "Check",
    inputs: "Field Settings",
    minute: "Minute (0-59)",
    hour: "Hour (0-23)",
    dayOfMonth: "Day of Month (1-31)",
    month: "Month (1-12)",
    dayOfWeek: "Day of Week (0-6, 0=Sunday)",
    everyLabel: "Every (*)",
    specificLabel: "Specific",
    cronInput: "Enter Cron Expression",
    cronInputPlaceholder: "e.g. 0 9 * * *",
    generatedExpression: "Generated Cron Expression",
    copy: "Copy",
    copied: "Copied!",
    nextRuns: "Next 5 Scheduled Runs",
    invalidExpression: "This is not a valid cron expression. Please check the format.",
    whyCron: "How is a cron expression structured?",
    cronExplanation: "A standard 5-field cron expression is ordered 'minute hour day month weekday'. Putting * (every) in a field matches all values for that unit, while a specific number matches only that value.\n\nFor example, '0 9 * * *' means every day at 9:00 AM, and '0 9 * * 1-5' means weekdays (Mon-Fri) at 9:00 AM.\n\nNext run times are calculated from the current time using the cron-parser library.",
    disclaimer: "This is based on standard 5-field cron syntax. Support for a seconds field or special characters (L/W/#, as in Quartz) may vary by scheduler. Check your scheduler's documentation before applying this in production.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Cron expression calculation is processed in your browser.",
    faq: [
      { q: "Can I use commas or ranges in the minute/hour fields?", a: "Yes. Standard cron syntax allows comma-separated values like '1,15,30' and ranges with a hyphen like '9-17'. The Build tab here only supports a simple single value or every (*), so for more complex combinations, enter them directly in the Check tab to validate." },
      { q: "What day does 0 represent in the day-of-week field?", a: "In standard cron syntax, the day-of-week field ranges from 0 (Sunday) to 6 (Saturday). Some systems also accept 7 as Sunday." },
      { q: "Can I create a job that runs every minute?", a: "Yes, setting all fields to * (every) creates an expression like '* * * * *' that runs every minute. In practice, though, it's best to avoid overly frequent schedules considering server load." },
    ],
  },
  ja: {
    title: "Cron式ビルダー・検証機",
    subtitle: "分・時・日・月・曜日フィールドからcron式を作成し、既存の式を検証します",
    tabBuild: "作成",
    tabCheck: "確認",
    inputs: "フィールド設定",
    minute: "分（0-59）",
    hour: "時（0-23）",
    dayOfMonth: "日（1-31）",
    month: "月（1-12）",
    dayOfWeek: "曜日（0-6、0=日曜日）",
    everyLabel: "毎（全体、*）",
    specificLabel: "指定",
    cronInput: "Cron式を入力",
    cronInputPlaceholder: "例: 0 9 * * *",
    generatedExpression: "生成されたCron式",
    copy: "コピー",
    copied: "コピーしました！",
    nextRuns: "次回実行予定時刻（5回）",
    invalidExpression: "正しいcron式ではありません。形式を確認してください。",
    whyCron: "Cron式はどのように構成されますか？",
    cronExplanation: "標準5フィールドのcron式は「分 時 日 月 曜日」の順で構成されます。各フィールドに*（毎）を入れるとその単位のすべての値を、特定の数字を入れるとその時点のみを意味します。\n\n例えば「0 9 * * *」は毎日午前9時0分を意味し、「0 9 * * 1-5」は平日（月〜金）の午前9時を意味します。\n\n次回実行時刻の計算はcron-parserライブラリを使用して現在時刻を基準に計算します。",
    disclaimer: "標準5フィールドのcron文法を基準としており、使用するスケジューラー（例: Quartz）によって秒フィールドの追加、L/W/#などの特殊記号のサポートが異なる場合があります。実際の運用環境に適用する前に該当スケジューラーの文書を確認してください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "Cron式の計算はブラウザで処理されます。",
    faq: [
      { q: "分と時のフィールドにカンマ(,)や範囲(-)を使えますか？", a: "はい。標準cron文法では「1,15,30」のようにカンマで複数の値を、「9-17」のようにハイフンで範囲を指定できます。このツールの「作成」タブは単純な単一値/毎（*）選択のみサポートするため、より複雑な組み合わせは「確認」タブに直接入力して検証してください。" },
      { q: "曜日フィールドの0は何曜日ですか？", a: "標準cron文法では曜日フィールドは0（日曜日）から6（土曜日）までです。一部のシステムでは7も日曜日として許容します。" },
      { q: "毎分実行されるジョブも作成できますか？", a: "はい、すべてのフィールドを*（毎）に設定すると「* * * * *」のような毎分実行される式になります。ただし実際にはサーバー負荷を考慮して、あまり短い周期は避けることをお勧めします。" },
    ],
  },
  es: {
    title: "Constructor y Validador de Expresiones Cron",
    subtitle: "Construye una expresión cron desde campos de minuto/hora/día/mes/día de semana, o valida una existente",
    tabBuild: "Construir",
    tabCheck: "Verificar",
    inputs: "Configuración de Campos",
    minute: "Minuto (0-59)",
    hour: "Hora (0-23)",
    dayOfMonth: "Día del Mes (1-31)",
    month: "Mes (1-12)",
    dayOfWeek: "Día de la Semana (0-6, 0=Domingo)",
    everyLabel: "Cada (*)",
    specificLabel: "Específico",
    cronInput: "Ingresa Expresión Cron",
    cronInputPlaceholder: "p. ej. 0 9 * * *",
    generatedExpression: "Expresión Cron Generada",
    copy: "Copiar",
    copied: "¡Copiado!",
    nextRuns: "Próximas 5 Ejecuciones Programadas",
    invalidExpression: "Esta no es una expresión cron válida. Por favor verifica el formato.",
    whyCron: "¿Cómo se estructura una expresión cron?",
    cronExplanation: "Una expresión cron estándar de 5 campos se ordena como 'minuto hora día mes día-de-semana'. Poner * (cada) en un campo coincide con todos los valores de esa unidad, mientras que un número específico coincide solo con ese valor.\n\nPor ejemplo, '0 9 * * *' significa todos los días a las 9:00 AM, y '0 9 * * 1-5' significa días de semana (lun-vie) a las 9:00 AM.\n\nLos próximos horarios de ejecución se calculan desde la hora actual usando la librería cron-parser.",
    disclaimer: "Esto se basa en la sintaxis cron estándar de 5 campos. El soporte para un campo de segundos o caracteres especiales (L/W/#, como en Quartz) puede variar según el programador. Verifica la documentación de tu programador antes de aplicar esto en producción.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de la expresión cron se procesa en tu navegador.",
    faq: [
      { q: "¿Puedo usar comas o rangos en los campos de minuto/hora?", a: "Sí. La sintaxis cron estándar permite valores separados por comas como '1,15,30' y rangos con guion como '9-17'. La pestaña Construir aquí solo soporta un valor único simple o cada (*), así que para combinaciones más complejas, ingrésalas directamente en la pestaña Verificar para validarlas." },
      { q: "¿Qué día representa el 0 en el campo de día de la semana?", a: "En la sintaxis cron estándar, el campo de día de la semana va de 0 (domingo) a 6 (sábado). Algunos sistemas también aceptan 7 como domingo." },
      { q: "¿Puedo crear una tarea que se ejecute cada minuto?", a: "Sí, configurar todos los campos en * (cada) crea una expresión como '* * * * *' que se ejecuta cada minuto. En la práctica, es mejor evitar programaciones demasiado frecuentes considerando la carga del servidor." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
