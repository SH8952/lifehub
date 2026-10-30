export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface TraitCard {
  emoji: string;
  text: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  tabTrait: string;
  tabMindset: string;
  randomBtn: string;
  nameLabel: string;
  namePlaceholder: string;
  colorLabel: string;
  downloadBtn: string;
  cardListLabel: string;
  howTitle: string;
  disclaimer: string;
  footer: string;
  howSteps: string[];
  faq: FaqItem[];
  traits: TraitCard[];
  mindsets: string[];
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "나는 OO형 카드 메이커",
    subtitle: "내 성향 트레잇 카드 또는 긍정 마인드 문장 카드를 만들어 이미지로 저장해보세요.",
    tabTrait: "트레잇 카드",
    tabMindset: "긍정 마인드 카드",
    randomBtn: "랜덤으로 뽑기",
    nameLabel: "이름/닉네임 (선택)",
    namePlaceholder: "예: 홍길동",
    colorLabel: "카드 색상",
    downloadBtn: "이미지로 저장",
    cardListLabel: "직접 선택하기",
    howTitle: "사용 방법",
    disclaimer: "이 도구는 재미를 위한 콘텐츠로, 특정 심리 검사나 캐릭터 라이선스와 관련이 없는 자체 제작 오리지널 콘텐츠입니다.",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
    howSteps: ["'트레잇 카드' 또는 '긍정 마인드 카드' 탭을 선택합니다.", "목록에서 문구를 직접 고르거나 '랜덤으로 뽑기'를 눌러 선택합니다.", "원하면 이름/닉네임을 입력하고 카드 색상을 선택합니다.", "'이미지로 저장' 버튼을 눌러 PNG 파일로 다운로드합니다."],
    faq: [{ q: "생성한 카드가 서버에 저장되나요?", a: "아니요. 모든 카드 생성과 이미지 저장은 브라우저 안에서만 처리되며 서버로 전송되거나 저장되지 않습니다." }, { q: "문구를 직접 입력할 수 있나요?", a: "현재는 준비된 문구 목록에서 선택하는 방식입니다. 목록의 문구들은 모두 자체 제작한 오리지널 콘텐츠입니다." }],
    traits: [{ emoji: "🌤️", text: "분위기 메이커형" }, { emoji: "🎯", text: "계획보다 즉흥형" }, { emoji: "🍜", text: "밥맛 지키기형" }, { emoji: "🛋️", text: "집순이집돌이형" }, { emoji: "📱", text: "알림 다 꺼놓는형" }, { emoji: "🎧", text: "혼자가 제일 편한형" }, { emoji: "🗣️", text: "할 말은 하는형" }, { emoji: "😴", text: "어디서든 잘 자는형" }, { emoji: "🧃", text: "소소한 행복 수집형" }, { emoji: "🔥", text: "텐션 급상승형" }, { emoji: "🫠", text: "갑자기 무기력형" }, { emoji: "🧩", text: "디테일 챙기는형" }, { emoji: "🚪", text: "집에 가고 싶은형" }, { emoji: "💬", text: "오지랖 넓은형" }, { emoji: "🌱", text: "느긋하게 가는형" }, { emoji: "⚡", text: "순간 몰입형" }, { emoji: "🎨", text: "취향 확고한형" }, { emoji: "🫶", text: "다정함 뿜뿜형" }, { emoji: "🧊", text: "쿨내 진동형" }, { emoji: "🍀", text: "은근 럭키형" }],
    mindsets: ["오늘도 나는 어제보다 한 걸음 더 나아간다", "완벽하지 않아도 지금의 나를 사랑한다", "작은 성공도 축하할 자격이 있다", "불안해도 결국 잘 해낼 거라고 믿는다", "남과 비교하지 않고 내 속도로 간다", "실수는 성장의 재료일 뿐이다", "쉬어가는 것도 나를 위한 선택이다", "오늘 하루도 내가 버텨낸 것만으로 충분하다", "나는 생각보다 훨씬 단단한 사람이다", "지금 이 순간에 집중하면 길이 보인다", "실패해도 다시 시작할 힘이 내게 있다", "나를 가장 아껴줄 사람은 바로 나다", "힘든 날도 결국 지나간다는 걸 안다", "오늘의 작은 노력이 내일의 나를 만든다", "조급해하지 않아도 충분히 잘 가고 있다", "내 감정을 인정하는 것부터가 성장이다", "모든 걸 다 잘할 필요는 없다", "나는 나답게 사는 것이 가장 멋지다", "오늘의 나에게 고맙다고 말해준다", "어떤 하루든 나는 나만의 의미를 찾는다"],
  },
  en: {
    title: "I-Am-This-Type Card Maker",
    subtitle: "Create a trait card or a positive-mindset quote card and save it as an image.",
    tabTrait: "Trait Card",
    tabMindset: "Mindset Card",
    randomBtn: "Pick Randomly",
    nameLabel: "Name / Nickname (optional)",
    namePlaceholder: "e.g. Alex",
    colorLabel: "Card Color",
    downloadBtn: "Save as Image",
    cardListLabel: "Pick Manually",
    howTitle: "How to Use",
    disclaimer: "This tool is purely for entertainment and uses original, self-authored content — it is not affiliated with any specific psychological test or licensed character.",
    footer: "100% processed in your browser. No data is sent to a server.",
    howSteps: ["Choose the 'Trait Card' or 'Mindset Card' tab.", "Pick a phrase from the list, or click 'Pick Randomly'.", "Optionally enter a name/nickname and choose a card color.", "Click 'Save as Image' to download it as a PNG file."],
    faq: [{ q: "Is my created card saved on a server?", a: "No. All card creation and image saving happens entirely in your browser — nothing is sent to or stored on a server." }, { q: "Can I type in my own phrase?", a: "Currently you choose from the prepared phrase list. Every phrase in the list is original content made specifically for this tool." }],
    traits: [{ emoji: "🌤️", text: "Mood Maker" }, { emoji: "🎯", text: "Spontaneous Over Planned" }, { emoji: "🍜", text: "Mealtime Guardian" }, { emoji: "🛋️", text: "Total Homebody" }, { emoji: "📱", text: "Notifications-All-Off" }, { emoji: "🎧", text: "Solo Time Enjoyer" }, { emoji: "🗣️", text: "Says What Needs Saying" }, { emoji: "😴", text: "Can Sleep Anywhere" }, { emoji: "🧃", text: "Small Joy Collector" }, { emoji: "🔥", text: "Instant Hype Mode" }, { emoji: "🫠", text: "Randomly Drained" }, { emoji: "🧩", text: "Detail-Obsessed" }, { emoji: "🚪", text: "Always Wants to Go Home" }, { emoji: "💬", text: "Everyone's Business, My Business" }, { emoji: "🌱", text: "Takes It Slow" }, { emoji: "⚡", text: "Sudden Deep Focus" }, { emoji: "🎨", text: "Strong Personal Taste" }, { emoji: "🫶", text: "Overflowing Kindness" }, { emoji: "🧊", text: "Effortlessly Cool" }, { emoji: "🍀", text: "Quietly Lucky" }],
    mindsets: ["Today I move one step further than yesterday", "I love myself as I am, even imperfect", "Even small wins deserve celebration", "Even anxious, I trust I'll figure it out", "I go at my own pace, not someone else's", "Mistakes are just material for growth", "Resting is also a choice I make for myself", "Simply getting through today is enough", "I am far sturdier than I think", "Focusing on this moment reveals the path", "Even after failing, I have the strength to start again", "The one who should cherish me most is me", "I know even hard days eventually pass", "Today's small effort builds tomorrow's me", "I'm doing just fine without rushing", "Acknowledging my feelings is already growth", "I don't need to be good at everything", "Living as myself is the coolest thing I can do", "I thank today's version of myself", "Whatever kind of day it is, I find my own meaning in it"],
  },
  ja: {
    title: "私はOO型カードメーカー",
    subtitle: "自分の性格トレイトカードやポジティブマインド文句カードを作ってイメージとして保存しましょう。",
    tabTrait: "トレイトカード",
    tabMindset: "ポジティブマインドカード",
    randomBtn: "ランダムで選ぶ",
    nameLabel: "名前・ニックネーム（任意）",
    namePlaceholder: "例: たなか",
    colorLabel: "カードの色",
    downloadBtn: "画像として保存",
    cardListLabel: "自分で選ぶ",
    howTitle: "使用方法",
    disclaimer: "このツールは楽しむためのコンテンツで、特定の心理テストやキャラクターライセンスとは無関係の自社制作オリジナルコンテンツです。",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
    howSteps: ["「トレイトカード」または「ポジティブマインドカード」タブを選びます。", "リストから文句を直接選ぶか、「ランダムで選ぶ」を押します。", "必要なら名前・ニックネームを入力し、カードの色を選びます。", "「画像として保存」ボタンを押してPNGファイルとしてダウンロードします。"],
    faq: [{ q: "作成したカードはサーバーに保存されますか？", a: "いいえ。カードの作成と画像保存はすべてブラウザ内で処理され、サーバーに送信・保存されることはありません。" }, { q: "文句を直接入力できますか？", a: "現在は用意された文句リストから選ぶ方式です。リストの文句はすべて独自に制作したオリジナルコンテンツです。" }],
    traits: [{ emoji: "🌤️", text: "ムードメーカー型" }, { emoji: "🎯", text: "計画より即興型" }, { emoji: "🍜", text: "食事タイム守護型" }, { emoji: "🛋️", text: "完全家大好き型" }, { emoji: "📱", text: "通知全部オフ型" }, { emoji: "🎧", text: "ひとり時間最高型" }, { emoji: "🗣️", text: "言うべきことは言う型" }, { emoji: "😴", text: "どこでも眠れる型" }, { emoji: "🧃", text: "小さな幸せ収集型" }, { emoji: "🔥", text: "急テンション上昇型" }, { emoji: "🫠", text: "突然無気力型" }, { emoji: "🧩", text: "ディテール重視型" }, { emoji: "🚪", text: "家に帰りたい型" }, { emoji: "💬", text: "何にでも口出し型" }, { emoji: "🌱", text: "のんびり進む型" }, { emoji: "⚡", text: "瞬間集中型" }, { emoji: "🎨", text: "好み確固型" }, { emoji: "🫶", text: "優しさ満ち満ち型" }, { emoji: "🧊", text: "クール感漂う型" }, { emoji: "🍀", text: "地味に運がいい型" }],
    mindsets: ["今日も私は昨日より一歩前に進む", "完璧でなくても今の自分を愛する", "小さな成功にも祝う価値がある", "不安でも結局うまくいくと信じる", "他人と比べず自分のペースで進む", "失敗は成長の材料にすぎない", "休むことも自分のための選択だ", "今日一日耐え抜いただけで十分だ", "私は思っているよりずっと強い人間だ", "今この瞬間に集中すれば道が見える", "失敗してもまた始める力が私にはある", "私を一番大事にできる人は私自身だ", "辛い日もいつか過ぎ去ることを知っている", "今日の小さな努力が明日の私をつくる", "焦らなくても十分うまく進んでいる", "自分の感情を認めることが成長の第一歩だ", "すべてを完璧にこなす必要はない", "自分らしく生きることが一番素敵だ", "今日の自分にありがとうと言う", "どんな一日でも私だけの意味を見つける"],
  },
  es: {
    title: "Creador de Tarjetas 'Soy Tipo OO'",
    subtitle: "Crea una tarjeta de rasgo o una tarjeta de frase de mentalidad positiva y guárdala como imagen.",
    tabTrait: "Tarjeta de Rasgo",
    tabMindset: "Tarjeta de Mentalidad",
    randomBtn: "Elegir al Azar",
    nameLabel: "Nombre / Apodo (opcional)",
    namePlaceholder: "ej. Alex",
    colorLabel: "Color de la Tarjeta",
    downloadBtn: "Guardar como Imagen",
    cardListLabel: "Elegir Manualmente",
    howTitle: "Cómo Usar",
    disclaimer: "Esta herramienta es puramente de entretenimiento y usa contenido original de autoría propia — no está afiliada con ningún test psicológico específico ni personaje con licencia.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
    howSteps: ["Elige la pestaña 'Tarjeta de Rasgo' o 'Tarjeta de Mentalidad'.", "Elige una frase de la lista, o haz clic en 'Elegir al Azar'.", "Opcionalmente ingresa un nombre/apodo y elige un color de tarjeta.", "Haz clic en 'Guardar como Imagen' para descargarla como archivo PNG."],
    faq: [{ q: "¿Mi tarjeta creada se guarda en un servidor?", a: "No. Toda la creación de tarjetas y el guardado de imágenes ocurre completamente en tu navegador — nada se envía ni se almacena en un servidor." }, { q: "¿Puedo escribir mi propia frase?", a: "Actualmente eliges de la lista de frases preparada. Cada frase de la lista es contenido original hecho específicamente para esta herramienta." }],
    traits: [{ emoji: "🌤️", text: "El Animador del Grupo" }, { emoji: "🎯", text: "Espontáneo Antes que Planificado" }, { emoji: "🍜", text: "Guardián de la Hora de Comer" }, { emoji: "🛋️", text: "Hogareño Total" }, { emoji: "📱", text: "Notificaciones Todas Apagadas" }, { emoji: "🎧", text: "Disfruta el Tiempo Solo" }, { emoji: "🗣️", text: "Dice lo que Hay que Decir" }, { emoji: "😴", text: "Puede Dormir en Cualquier Lado" }, { emoji: "🧃", text: "Coleccionista de Pequeñas Alegrías" }, { emoji: "🔥", text: "Modo Hype Instantáneo" }, { emoji: "🫠", text: "Agotado Sin Razón" }, { emoji: "🧩", text: "Obsesionado con los Detalles" }, { emoji: "🚪", text: "Siempre Quiere Irse a Casa" }, { emoji: "💬", text: "Opina de Todo" }, { emoji: "🌱", text: "Se lo Toma con Calma" }, { emoji: "⚡", text: "Concentración Profunda Repentina" }, { emoji: "🎨", text: "Gustos Muy Definidos" }, { emoji: "🫶", text: "Rebosante de Amabilidad" }, { emoji: "🧊", text: "Genial sin Esfuerzo" }, { emoji: "🍀", text: "Discretamente Afortunado" }],
    mindsets: ["Hoy avanzo un paso más que ayer", "Me amo como soy, incluso imperfecto", "Hasta las pequeñas victorias merecen celebrarse", "Aunque esté ansioso, confío en que lo lograré", "Voy a mi propio ritmo, no al de otros", "Los errores son solo material para crecer", "Descansar también es una elección por mí mismo", "Simplemente sobrevivir hoy ya es suficiente", "Soy mucho más fuerte de lo que creo", "Enfocarme en este momento revela el camino", "Incluso después de fallar, tengo fuerzas para empezar de nuevo", "Quien más debe valorarme soy yo mismo", "Sé que hasta los días difíciles eventualmente pasan", "El pequeño esfuerzo de hoy construye al yo de mañana", "Me va bien sin necesidad de apurarme", "Reconocer mis emociones ya es crecimiento", "No necesito ser bueno en todo", "Vivir siendo yo mismo es lo más genial que puedo hacer", "Agradezco a la versión de hoy de mí mismo", "Sea como sea el día, encuentro mi propio significado en él"],
  },
};
