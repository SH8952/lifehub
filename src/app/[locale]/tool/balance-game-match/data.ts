export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface BalanceQuestion {
  a: string;
  b: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  startBtn: string;
  progressLabel: string;
  resultTitle: string;
  resultDesc: string;
  shareBtn: string;
  shareCopiedMsg: string;
  compareModeTitle: string;
  compareModeDesc: string;
  startCompareBtn: string;
  matchResultTitle: string;
  matchPercentUnit: string;
  matchHigh: string;
  matchMid: string;
  matchLow: string;
  restartBtn: string;
  newShareBtn: string;
  optionALabel: string;
  optionBLabel: string;
  disclaimer: string;
  howTitle: string;
  footer: string;
  howSteps: string[];
  faq: FaqItem[];
  questions: BalanceQuestion[];
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "밸런스 게임 싱크로율 테스트",
    subtitle: "20가지 밸런스 게임에 답하고, 친구에게 링크를 보내 얼마나 생각이 통하는지 싱크로율을 확인해보세요.",
    startBtn: "시작하기",
    progressLabel: "질문",
    resultTitle: "모든 질문에 답했어요!",
    resultDesc: "아래 버튼으로 링크를 복사해서 친구에게 보내보세요. 친구가 같은 질문에 답하면 싱크로율이 나옵니다.",
    shareBtn: "링크 복사하기",
    shareCopiedMsg: "복사되었습니다! 친구에게 붙여넣기 해보세요.",
    compareModeTitle: "친구가 보낸 밸런스 게임이에요!",
    compareModeDesc: "같은 20가지 질문에 답하면 친구와의 싱크로율을 바로 계산해드려요.",
    startCompareBtn: "싱크로율 테스트 시작",
    matchResultTitle: "두 사람의 싱크로율은",
    matchPercentUnit: "%",
    matchHigh: "거의 똑같은 생각을 하고 있어요!",
    matchMid: "꽤 잘 통하는 편이에요.",
    matchLow: "생각이 많이 달라서 더 재밌을지도요!",
    restartBtn: "다시 하기",
    newShareBtn: "새 싱크로율 테스트 만들기",
    optionALabel: "A",
    optionBLabel: "B",
    disclaimer: "이 게임은 순수하게 재미를 위한 콘텐츠이며, 심리 분석이나 성격 진단과는 무관합니다.",
    howTitle: "사용 방법",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
    howSteps: ["20가지 밸런스 게임 질문에 하나씩 답합니다.", "모두 답하면 '링크 복사하기'로 공유 링크를 복사해 친구에게 보냅니다.", "친구가 링크를 열어 같은 질문에 답하면 두 사람의 싱크로율(%)이 바로 계산됩니다."],
    faq: [{ q: "싱크로율은 어떻게 계산되나요?", a: "20개 질문 중 두 사람이 같은 선택을 한 질문의 비율로 계산됩니다. 예를 들어 20개 중 15개가 같다면 싱크로율은 75%입니다." }, { q: "제 답변이 서버에 저장되나요?", a: "아니요. 답변은 공유 링크 안에 암호화되지 않은 형태로 담겨 전달될 뿐, 서버에 저장되거나 전송되지 않습니다. 모든 계산은 브라우저에서 즉시 이루어집니다." }],
    questions: [{ a: "평생 피자만 먹기", b: "평생 치킨만 먹기" }, { a: "투명인간이 되는 능력", b: "순간이동하는 능력" }, { a: "말하는 동물과 대화하기", b: "과거의 나와 대화하기" }, { a: "유명해지기 (단, 사생활 없음)", b: "평범하게 살기 (단, 자유로움)" }, { a: "평생 자동차 무료 이용권", b: "평생 비행기표 무료 이용권" }, { a: "1000만원 받고 한 달간 폰 없이 살기", b: "폰은 그대로 쓰고 돈은 안 받기" }, { a: "좋아하는 일을 하지만 돈은 적게 벌기", b: "재미없는 일을 하지만 돈은 많이 벌기" }, { a: "매일 일찍 일어나는 아침형 인간", b: "매일 늦게까지 안 자는 밤형 인간" }, { a: "여름만 있는 나라에서 살기", b: "겨울만 있는 나라에서 살기" }, { a: "내 흑역사를 모두가 알게 되기", b: "평생 비밀로 간직하지만 가끔 떠오르기" }, { a: "거짓말을 전혀 못 하게 되기", b: "모든 거짓말을 완벽하게 믿게 되기 (속기 쉬움)" }, { a: "하루 동안 과거로 돌아갈 수 있는 능력", b: "하루 동안 미래를 볼 수 있는 능력" }, { a: "좋아하는 연예인과 밥 한 번 먹기", b: "로또 1등 당첨되기" }, { a: "평생 집에서만 일하기 (재택)", b: "매일 다른 여행지에서 일하기 (노마드)" }, { a: "가장 싫어하는 음식만 평생 먹기", b: "가장 좋아하는 음식만 매일 평생 먹기" }, { a: "모든 SNS 완전히 끊기", b: "매일 SNS에 일상을 전부 공개하기" }, { a: "매일 똑같은 하루가 반복되기 (결말은 해피엔딩)", b: "예측불가능한 하루하루 (결말은 모름)" }, { a: "전 세계 모든 언어를 구사하는 능력", b: "전 세계 모든 악기를 연주하는 능력" }, { a: "내가 쓴 글이 모두 명언이 되는 능력", b: "내가 그린 그림이 모두 명화가 되는 능력" }, { a: "평생 알람 없이도 일찍 일어나기", b: "평생 늦잠 걱정 없이 원하는 시간에 자동으로 깨기" }],
  },
  en: {
    title: "Balance Game Sync Test",
    subtitle: "Answer 20 balance-game dilemmas, then send the link to a friend to see how in sync your thinking is.",
    startBtn: "Start",
    progressLabel: "Question",
    resultTitle: "You answered all the questions!",
    resultDesc: "Copy the link below and send it to a friend. Once they answer the same questions, you'll see your sync rate.",
    shareBtn: "Copy Link",
    shareCopiedMsg: "Copied! Paste it to your friend.",
    compareModeTitle: "A friend sent you this balance game!",
    compareModeDesc: "Answer the same 20 questions and we'll instantly calculate your sync rate with them.",
    startCompareBtn: "Start Sync Test",
    matchResultTitle: "Your sync rate is",
    matchPercentUnit: "%",
    matchHigh: "You two think almost exactly alike!",
    matchMid: "You're pretty in sync.",
    matchLow: "Your thinking differs a lot — might make for a fun conversation!",
    restartBtn: "Play Again",
    newShareBtn: "Create a New Sync Test",
    optionALabel: "A",
    optionBLabel: "B",
    disclaimer: "This game is purely for fun and is not related to psychological analysis or personality diagnosis.",
    howTitle: "How to Use",
    footer: "100% processed in your browser. No data is sent to a server.",
    howSteps: ["Answer the 20 balance-game questions one by one.", "Once done, click 'Copy Link' to share it with a friend.", "When your friend opens the link and answers, your sync rate (%) is calculated instantly."],
    faq: [{ q: "How is the sync rate calculated?", a: "It's the percentage of the 20 questions where both people picked the same option. For example, 15 matches out of 20 means a 75% sync rate." }, { q: "Are my answers stored on a server?", a: "No. Your answers are only carried inside the share link itself and are never stored or sent to a server. All calculation happens instantly in your browser." }],
    questions: [{ a: "Eat only pizza for life", b: "Eat only chicken for life" }, { a: "The ability to become invisible", b: "The ability to teleport" }, { a: "Talk to animals", b: "Talk to your past self" }, { a: "Be famous (but no privacy)", b: "Live an ordinary life (but totally free)" }, { a: "Free car rides for life", b: "Free flights for life" }, { a: "Get $10,000 but no phone for a month", b: "Keep your phone, skip the money" }, { a: "Love your job but earn little", b: "Hate your job but earn a lot" }, { a: "Become a morning person forever", b: "Become a night owl forever" }, { a: "Live in a country with only summer", b: "Live in a country with only winter" }, { a: "Everyone finds out your most embarrassing moment", b: "Keep it secret forever, but it haunts you occasionally" }, { a: "Become unable to lie, ever", b: "Believe every lie perfectly (easily fooled)" }, { a: "Travel to the past for one day", b: "See the future for one day" }, { a: "Have a meal with your favorite celebrity", b: "Win the lottery jackpot" }, { a: "Work from home forever", b: "Work from a new travel destination every day" }, { a: "Eat only your least favorite food forever", b: "Eat only your favorite food every single day forever" }, { a: "Quit all social media completely", b: "Share your entire daily life on social media" }, { a: "Repeat the same day forever (guaranteed happy ending)", b: "Live unpredictable days (unknown ending)" }, { a: "Speak every language in the world", b: "Play every instrument in the world" }, { a: "Everything you write becomes a famous quote", b: "Everything you draw becomes a masterpiece" }, { a: "Always wake up early without an alarm", b: "Never worry about oversleeping, wake up exactly when you want" }],
  },
  ja: {
    title: "バランスゲーム シンクロ率テスト",
    subtitle: "20個のバランスゲームに答えて、友達にリンクを送ってどれだけ考えが合うかシンクロ率を確認しましょう。",
    startBtn: "始める",
    progressLabel: "質問",
    resultTitle: "すべての質問に答えました！",
    resultDesc: "下のボタンでリンクをコピーして友達に送ってみましょう。友達が同じ質問に答えるとシンクロ率がわかります。",
    shareBtn: "リンクをコピー",
    shareCopiedMsg: "コピーしました！友達に貼り付けてみましょう。",
    compareModeTitle: "友達から送られたバランスゲームです！",
    compareModeDesc: "同じ20個の質問に答えると、友達とのシンクロ率がすぐに計算されます。",
    startCompareBtn: "シンクロ率テスト開始",
    matchResultTitle: "2人のシンクロ率は",
    matchPercentUnit: "%",
    matchHigh: "ほとんど同じ考えをしています！",
    matchMid: "かなり相性が良い方です。",
    matchLow: "考えがかなり違って、むしろ面白いかも！",
    restartBtn: "もう一度する",
    newShareBtn: "新しいシンクロ率テストを作る",
    optionALabel: "A",
    optionBLabel: "B",
    disclaimer: "このゲームは純粋に楽しむためのコンテンツであり、心理分析や性格診断とは関係ありません。",
    howTitle: "使用方法",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
    howSteps: ["20個のバランスゲームの質問に一つずつ答えます。", "すべて答えたら「リンクをコピー」で共有リンクをコピーして友達に送ります。", "友達がリンクを開いて同じ質問に答えると、2人のシンクロ率（%）がすぐに計算されます。"],
    faq: [{ q: "シンクロ率はどう計算されますか？", a: "20個の質問のうち、2人が同じ選択をした質問の割合で計算されます。例えば20個中15個が同じならシンクロ率は75%です。" }, { q: "私の回答はサーバーに保存されますか？", a: "いいえ。回答は共有リンクの中に含まれて伝わるだけで、サーバーに保存・送信されることはありません。すべての計算はブラウザ内で即座に行われます。" }],
    questions: [{ a: "一生ピザだけ食べる", b: "一生チキンだけ食べる" }, { a: "透明人間になれる能力", b: "瞬間移動できる能力" }, { a: "話せる動物と話す", b: "過去の自分と話す" }, { a: "有名になる（ただしプライバシーなし）", b: "普通に暮らす（ただし自由）" }, { a: "一生無料で車に乗れる", b: "一生無料で飛行機に乗れる" }, { a: "1000万ウォンもらって1ヶ月スマホなし生活", b: "スマホはそのまま使ってお金はもらわない" }, { a: "好きな仕事だがお金は少ない", b: "つまらない仕事だがお金は多い" }, { a: "一生早起きの朝型人間", b: "一生夜更かしの夜型人間" }, { a: "夏しかない国で暮らす", b: "冬しかない国で暮らす" }, { a: "自分の黒歴史が全員に知られる", b: "一生秘密だが時々思い出してしまう" }, { a: "一切嘘がつけなくなる", b: "すべての嘘を完全に信じてしまう（騙されやすい）" }, { a: "1日だけ過去に戻れる能力", b: "1日だけ未来が見える能力" }, { a: "好きな芸能人と一度ご飯を食べる", b: "ロト1等に当選する" }, { a: "一生家だけで働く（リモート）", b: "毎日違う旅行先で働く（ノマド）" }, { a: "最も嫌いな食べ物だけ一生食べる", b: "最も好きな食べ物だけ毎日一生食べる" }, { a: "SNSを完全にやめる", b: "毎日SNSに日常を全部公開する" }, { a: "同じ一日が繰り返される（結末はハッピーエンド保証）", b: "予測不能な毎日（結末は不明）" }, { a: "世界中のすべての言語を話せる能力", b: "世界中のすべての楽器を演奏できる能力" }, { a: "自分が書いた文章が全部名言になる能力", b: "自分が描いた絵が全部名画になる能力" }, { a: "一生アラームなしで早起きできる", b: "寝坊の心配なく望む時間に自動で起きられる" }],
  },
  es: {
    title: "Test de Sincronía de Juego de Equilibrio",
    subtitle: "Responde 20 dilemas de 'juego de equilibrio' y envía el enlace a un amigo para ver qué tan sincronizados están sus pensamientos.",
    startBtn: "Comenzar",
    progressLabel: "Pregunta",
    resultTitle: "¡Respondiste todas las preguntas!",
    resultDesc: "Copia el enlace de abajo y envíaselo a un amigo. Cuando responda las mismas preguntas, verás tu tasa de sincronía.",
    shareBtn: "Copiar Enlace",
    shareCopiedMsg: "¡Copiado! Pégalo para tu amigo.",
    compareModeTitle: "¡Un amigo te envió este juego de equilibrio!",
    compareModeDesc: "Responde las mismas 20 preguntas y calcularemos tu tasa de sincronía al instante.",
    startCompareBtn: "Iniciar Test de Sincronía",
    matchResultTitle: "Su tasa de sincronía es",
    matchPercentUnit: "%",
    matchHigh: "¡Piensan casi exactamente igual!",
    matchMid: "Están bastante sincronizados.",
    matchLow: "Sus pensamientos difieren bastante — ¡podría dar para una buena conversación!",
    restartBtn: "Jugar de Nuevo",
    newShareBtn: "Crear un Nuevo Test de Sincronía",
    optionALabel: "A",
    optionBLabel: "B",
    disclaimer: "Este juego es puramente para divertirse y no está relacionado con análisis psicológico ni diagnóstico de personalidad.",
    howTitle: "Cómo Usar",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
    howSteps: ["Responde las 20 preguntas del juego de equilibrio una por una.", "Al terminar, haz clic en 'Copiar Enlace' para compartirlo con un amigo.", "Cuando tu amigo abra el enlace y responda, tu tasa de sincronía (%) se calcula al instante."],
    faq: [{ q: "¿Cómo se calcula la tasa de sincronía?", a: "Es el porcentaje de las 20 preguntas donde ambas personas eligieron la misma opción. Por ejemplo, 15 coincidencias de 20 significan una tasa de sincronía del 75%." }, { q: "¿Mis respuestas se guardan en un servidor?", a: "No. Tus respuestas solo se transportan dentro del enlace compartido y nunca se almacenan ni se envían a un servidor. Todo el cálculo ocurre al instante en tu navegador." }],
    questions: [{ a: "Comer solo pizza de por vida", b: "Comer solo pollo de por vida" }, { a: "La habilidad de volverte invisible", b: "La habilidad de teletransportarte" }, { a: "Hablar con animales", b: "Hablar con tu yo del pasado" }, { a: "Ser famoso (pero sin privacidad)", b: "Vivir una vida normal (pero totalmente libre)" }, { a: "Viajes en coche gratis de por vida", b: "Vuelos gratis de por vida" }, { a: "Recibir $10,000 pero sin teléfono por un mes", b: "Quedarte con tu teléfono, sin el dinero" }, { a: "Amar tu trabajo pero ganar poco", b: "Odiar tu trabajo pero ganar mucho" }, { a: "Ser madrugador para siempre", b: "Ser nocturno para siempre" }, { a: "Vivir en un país donde solo hay verano", b: "Vivir en un país donde solo hay invierno" }, { a: "Que todos descubran tu momento más vergonzoso", b: "Guardarlo en secreto para siempre, pero te persigue de vez en cuando" }, { a: "No poder mentir nunca más", b: "Creer cada mentira perfectamente (fácil de engañar)" }, { a: "Viajar al pasado por un día", b: "Ver el futuro por un día" }, { a: "Comer con tu celebridad favorita", b: "Ganar la lotería" }, { a: "Trabajar desde casa para siempre", b: "Trabajar desde un destino de viaje diferente cada día" }, { a: "Comer solo tu comida menos favorita para siempre", b: "Comer solo tu comida favorita todos los días para siempre" }, { a: "Dejar todas las redes sociales por completo", b: "Compartir toda tu vida diaria en redes sociales" }, { a: "Repetir el mismo día para siempre (final feliz garantizado)", b: "Vivir días impredecibles (final desconocido)" }, { a: "Hablar todos los idiomas del mundo", b: "Tocar todos los instrumentos del mundo" }, { a: "Todo lo que escribes se vuelve una cita famosa", b: "Todo lo que dibujas se vuelve una obra maestra" }, { a: "Despertar siempre temprano sin alarma", b: "No preocuparte nunca por quedarte dormido, despertar justo cuando quieras" }],
  },
};
