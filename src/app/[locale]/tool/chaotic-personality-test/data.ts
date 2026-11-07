export type Locale = "ko" | "en" | "ja" | "es";
export type TypeKey = "selfLove" | "planner" | "homebody" | "respect" | "moodBreaker" | "hotspotHunter" | "bravado" | "socialCosplay";

export interface FaqItem {
  q: string;
  a: string;
}

export interface QuizOption {
  text: string;
  typeKey: TypeKey;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface TypeInfo {
  icon: string;
  name: string;
  tagline: string;
  description: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  startBtn: string;
  questionProgress: string;
  resultTitle: string;
  restartBtn: string;
  howTitle: string;
  disclaimer: string;
  footer: string;
  howSteps: string[];
  faq: FaqItem[];
  types: Record<TypeKey, TypeInfo>;
  questions: QuizQuestion[];
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "병맛 성격유형 테스트",
    subtitle: "진지한 분석 말고 그냥 웃자고 만든 12문항 캐주얼 성격테스트! 당신의 숨겨진(?) 유형을 확인해보세요.",
    startBtn: "테스트 시작하기",
    questionProgress: "질문",
    resultTitle: "당신의 유형은",
    restartBtn: "다시 테스트하기",
    howTitle: "사용 방법",
    disclaimer: "이 테스트는 재미를 위한 콘텐츠로, 심리 분석이나 성격 진단과는 관련이 없습니다. 결과를 심각하게 받아들이지 마세요.",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
    howSteps: ["'테스트 시작하기'를 눌러 12개 질문에 순서대로 답합니다.", "각 질문마다 가장 나와 비슷한 선택지를 고릅니다.", "마지막 질문을 마치면 가장 많이 선택된 성향에 따라 8가지 유형 중 하나가 나옵니다."],
    faq: [{ q: "이 테스트는 정식 심리 검사인가요?", a: "아니요, 순수하게 재미를 위해 만든 캐주얼 테스트입니다. 과학적인 성격 분석이나 심리 진단이 아니니 가볍게 즐겨주세요." }, { q: "결과가 매번 같게 나오나요?", a: "같은 질문에 같은 답을 고르면 항상 같은 유형이 나옵니다. 결과는 선택한 답변들의 조합으로 결정됩니다." }],
    types: {
    selfLove: { icon: "Sparkles", name: "자뻑형", tagline: "나를 가장 사랑하는 당신, 그 자신감이 진짜 매력이에요.", description: "거울 볼 때마다 '오늘도 괜찮네' 하는 타입. 자존감이 바닥을 치는 세상에서 자기 자신을 이렇게 아껴주는 당신, 솔직히 멋집니다." },
    planner: { icon: "CalendarCheck", name: "계획충형", tagline: "모든 걸 미리 정해둬야 마음이 편한 당신.", description: "즉흥은 체질에 안 맞아요. 엑셀로 시간표를 짜고, 여행 가기 전 블로그 15개는 정독해야 안심이 되는 타입이죠." },
    homebody: { icon: "Home", name: "집돌이집순이형", tagline: "밖보다 집이 백배 편한 당신.", description: "핫플보다 내 방 침대가 최고. 어디 가자는 말보다 '그냥 우리 집에서 볼까?'가 더 반가운 타입입니다." },
    respect: { icon: "Handshake", name: "리스펙형", tagline: "다른 사람 의견을 늘 존중하는 당신.", description: "갈등은 딱 싫어요. 상대 입장을 먼저 생각하고 둥글게 둥글게 넘어가는, 모임에서 분위기 메이커보다는 분위기 지킴이 역할." },
    moodBreaker: { icon: "CloudDrizzle", name: "갑분싸형", tagline: "타이밍이 애매할 때가 유독 많은 당신.", description: "나쁜 뜻은 없는데 묘하게 분위기가 싸해지는 순간을 자주 만드는 타입. 그래도 그게 또 당신만의 매력 포인트입니다." },
    hotspotHunter: { icon: "MapPin", name: "핫플헌터형", tagline: "새로운 곳이라면 무조건 가봐야 하는 당신.", description: "SNS에서 뜨는 곳은 이미 저장 완료. 웨이팅 2시간이어도 '한 번은 가봐야지' 하는 탐험가 타입입니다." },
    bravado: { icon: "Crown", name: "허세대장형", tagline: "일단 센 척부터 하고 보는 당신.", description: "속으로는 흔들려도 겉으로는 쿨해야 하는 타입. 허세 반, 자신감 반으로 하루하루를 채워가고 있어요." },
    socialCosplay: { icon: "PartyPopper", name: "인싸코스프레형", tagline: "인싸처럼 보이고 싶지만 사실 집이 제일 편한 당신.", description: "사진은 화려하게, 실제 생활은 소박하게. SNS 속 나와 현실의 나 사이에 적당한 간극이 있는 타입입니다." },
  },
    questions: [
    { question: "주말 아침, 당신의 모습은?", options: [{ text: "거울 보면서 '나 오늘도 완전 괜찮네'", typeKey: "selfLove" }, { text: "이미 오늘 할 일 리스트 다 써놓음", typeKey: "planner" }, { text: "그냥 침대에서 안 일어남, 집이 최고", typeKey: "homebody" }] },
    { question: "단체 카톡방에서 내가 보낸 메시지에 아무도 답이 없을 때?", options: [{ text: "'다들 바쁜가 보네' 하고 넘어간다", typeKey: "respect" }, { text: "괜히 분위기 싸해진 것 같아 딴 얘기로 급하게 돌린다", typeKey: "moodBreaker" }, { text: "그래도 내 메시지가 제일 웃겼다고 생각한다", typeKey: "selfLove" }] },
    { question: "친구가 새로 생긴 핫플레이스 가자고 할 때?", options: [{ text: "'콜! 당장 가자'", typeKey: "hotspotHunter" }, { text: "'거기 웨이팅 몇 시간인지부터 알아보고'", typeKey: "planner" }, { text: "'그냥 우리 집에서 보는 게 낫지 않아?'", typeKey: "homebody" }] },
    { question: "처음 만난 사람과 대화할 때 나는?", options: [{ text: "일단 있어 보이는 척부터 한다", typeKey: "bravado" }, { text: "상대 얘기를 더 많이 들어주는 편이다", typeKey: "respect" }, { text: "SNS 보여주면서 내 일상을 자랑한다", typeKey: "socialCosplay" }] },
    { question: "갑자기 생긴 하루 휴가, 당신의 선택은?", options: [{ text: "집에서 아무것도 안 하고 뒹굴기", typeKey: "homebody" }, { text: "미리 세워둔 '휴가 계획표'대로 움직이기", typeKey: "planner" }, { text: "인스타에 올릴 만한 장소를 급하게 찾아본다", typeKey: "socialCosplay" }] },
    { question: "거울 셀카를 찍었을 때 내 반응은?", options: [{ text: "'역시 나 오늘 비주얼 미쳤다'", typeKey: "selfLove" }, { text: "100장 찍고 그중 하나도 안 올림, 애매해서", typeKey: "moodBreaker" }, { text: "바로 여기저기 자랑하러 다닌다", typeKey: "bravado" }] },
    { question: "다른 사람이 내 의견에 반대할 때?", options: [{ text: "'오 그럴 수도 있겠다' 하고 받아들인다", typeKey: "respect" }, { text: "겉으론 쿨한 척하지만 속으론 흔들린다", typeKey: "bravado" }, { text: "괜히 분위기가 어색해져서 화제를 돌린다", typeKey: "moodBreaker" }] },
    { question: "여행 계획을 짤 때 나는?", options: [{ text: "엑셀로 시간표까지 완벽하게 정리한다", typeKey: "planner" }, { text: "가보고 싶던 핫플 리스트부터 채운다", typeKey: "hotspotHunter" }, { text: "그냥 집에서 유튜브로 여행 영상 보는 걸로 만족한다", typeKey: "homebody" }] },
    { question: "단체 사진을 찍을 때 당신은?", options: [{ text: "제일 잘 나오는 각도를 이미 알고 있다", typeKey: "selfLove" }, { text: "포즈는 따라 하지만 내가 제일 돋보이려 한다", typeKey: "bravado" }, { text: "다들 좋다는 포즈로 맞춰준다", typeKey: "respect" }] },
    { question: "새로운 모임에 초대받았을 때?", options: [{ text: "'오 재밌겠다, 어디야?'부터 물어본다", typeKey: "hotspotHunter" }, { text: "고민하다 결국 집이 편해서 안 간다", typeKey: "homebody" }, { text: "참석은 하지만 사진을 엄청 많이 찍어서 올린다", typeKey: "socialCosplay" }] },
    { question: "실수로 어색한 상황을 만들었을 때?", options: [{ text: "괜히 자리를 피하거나 화제를 급히 바꾼다", typeKey: "moodBreaker" }, { text: "'원래 내가 이런 캐릭터야' 하고 넘긴다", typeKey: "bravado" }, { text: "상황을 정리하려고 다른 사람 입장을 먼저 생각한다", typeKey: "respect" }] },
    { question: "가장 듣기 좋은 칭찬은?", options: [{ text: "'너 진짜 자신감 있어 보여'", typeKey: "selfLove" }, { text: "'너랑 있으면 편해, 날 존중해주는 느낌'", typeKey: "respect" }, { text: "'너 되게 계획적이다'", typeKey: "planner" }] },
  ],
  },
  en: {
    title: "Chaotic Casual Personality Test",
    subtitle: "Not a serious analysis — just a fun 12-question casual personality test! Discover your (not so) hidden type.",
    startBtn: "Start Test",
    questionProgress: "Question",
    resultTitle: "Your type is",
    restartBtn: "Retake Test",
    howTitle: "How to Use",
    disclaimer: "This test is purely for entertainment and is not related to psychological analysis or personality diagnosis. Please don't take the result too seriously.",
    footer: "100% processed in your browser. No data is sent to a server.",
    howSteps: ["Click 'Start Test' and answer 12 questions in order.", "For each question, pick the option closest to you.", "After the last question, you'll get one of 8 types based on your most frequent tendency."],
    faq: [{ q: "Is this an official psychological test?", a: "No, it's a purely casual test made just for fun. It's not scientific personality analysis or psychological diagnosis, so please enjoy it lightly." }, { q: "Do I get the same result every time?", a: "Picking the same answers to the same questions always gives the same type. Your result is determined by the combination of answers you choose." }],
    types: {
    selfLove: { icon: "Sparkles", name: "Self-Love Champion", tagline: "You love yourself the most, and that confidence is genuinely your charm.", description: "Every time you check the mirror, you think 'looking good today too.' In a world where self-esteem runs low, cherishing yourself like this is honestly impressive." },
    planner: { icon: "CalendarCheck", name: "The Planner", tagline: "You feel at ease only when everything is decided in advance.", description: "Spontaneity just isn't your style. You build spreadsheets for your schedule and need to read 15 blog posts before a trip to feel safe." },
    homebody: { icon: "Home", name: "The Homebody", tagline: "Home is a hundred times more comfortable than going out.", description: "Your own bed beats any hotspot. Hearing 'let's just hang out at my place' makes you happier than any invitation to go somewhere." },
    respect: { icon: "Handshake", name: "The Respecter", tagline: "You always respect other people's opinions.", description: "You hate conflict. You think of the other person's position first and smooth things over — more of a peacekeeper than a hype-person in any group." },
    moodBreaker: { icon: "CloudDrizzle", name: "The Mood Breaker", tagline: "You have an unusual knack for awkward timing.", description: "You never mean any harm, but you somehow create those weirdly awkward silences. Still, that's part of your unique charm." },
    hotspotHunter: { icon: "MapPin", name: "The Hotspot Hunter", tagline: "If it's a new place, you absolutely have to check it out.", description: "Trending spots on social media are already bookmarked. Even a 2-hour wait won't stop your explorer spirit of 'gotta try it at least once.'" },
    bravado: { icon: "Crown", name: "The Bravado King/Queen", tagline: "You act tough first and figure out the rest later.", description: "Shaky on the inside, cool on the outside — that's the rule. Your days are half bravado, half genuine confidence." },
    socialCosplay: { icon: "PartyPopper", name: "The Social Cosplayer", tagline: "You want to look like a social butterfly, but staying home is actually your favorite.", description: "Glamorous on camera, humble in real life. There's a comfortable gap between your social media self and your everyday self." },
  },
    questions: [
    { question: "What are you like on a weekend morning?", options: [{ text: "Looking in the mirror: 'I look great today too'", typeKey: "selfLove" }, { text: "Already wrote out today's full to-do list", typeKey: "planner" }, { text: "Just won't get out of bed — home is the best", typeKey: "homebody" }] },
    { question: "When no one replies to your message in a group chat?", options: [{ text: "Think 'everyone must be busy' and move on", typeKey: "respect" }, { text: "Feel like the mood got awkward and quickly change the subject", typeKey: "moodBreaker" }, { text: "Still think your message was the funniest anyway", typeKey: "selfLove" }] },
    { question: "When a friend suggests going to a new trending spot?", options: [{ text: "'I'm in! Let's go right now'", typeKey: "hotspotHunter" }, { text: "'Let me check the wait time there first'", typeKey: "planner" }, { text: "'Wouldn't it be better to just hang out at my place?'", typeKey: "homebody" }] },
    { question: "When talking to someone for the first time, you...", options: [{ text: "Act impressive right off the bat", typeKey: "bravado" }, { text: "Tend to listen more than you talk", typeKey: "respect" }, { text: "Show off your life through your social media", typeKey: "socialCosplay" }] },
    { question: "A surprise day off appears — what do you do?", options: [{ text: "Do absolutely nothing at home", typeKey: "homebody" }, { text: "Follow the 'vacation schedule' you already made", typeKey: "planner" }, { text: "Scramble to find a photogenic spot for your feed", typeKey: "socialCosplay" }] },
    { question: "Your reaction after taking a mirror selfie?", options: [{ text: "'Yep, I look amazing today'", typeKey: "selfLove" }, { text: "Take 100 shots and post none of them — they're all 'off' somehow", typeKey: "moodBreaker" }, { text: "Immediately go show it off to everyone", typeKey: "bravado" }] },
    { question: "When someone disagrees with your opinion?", options: [{ text: "Think 'oh, that could be true too' and accept it", typeKey: "respect" }, { text: "Act cool on the outside, but shaken on the inside", typeKey: "bravado" }, { text: "Feel the mood turn awkward and change the subject", typeKey: "moodBreaker" }] },
    { question: "When planning a trip, you...", options: [{ text: "Build a perfect spreadsheet schedule", typeKey: "planner" }, { text: "Fill your list with trending spots first", typeKey: "hotspotHunter" }, { text: "Just watch travel videos on YouTube at home and call it good", typeKey: "homebody" }] },
    { question: "During a group photo, you...", options: [{ text: "Already know your best angle", typeKey: "selfLove" }, { text: "Copy the pose but try to stand out the most", typeKey: "bravado" }, { text: "Go along with whatever pose everyone else likes", typeKey: "respect" }] },
    { question: "When invited to a new gathering?", options: [{ text: "Ask 'ooh sounds fun, where is it?' right away", typeKey: "hotspotHunter" }, { text: "Think about it, then skip it because home is comfier", typeKey: "homebody" }, { text: "Go, but take and post a ton of photos", typeKey: "socialCosplay" }] },
    { question: "After accidentally creating an awkward situation?", options: [{ text: "Dodge away or quickly change the subject", typeKey: "moodBreaker" }, { text: "Shrug it off with 'that's just how I am'", typeKey: "bravado" }, { text: "Try to smooth it over by thinking of others first", typeKey: "respect" }] },
    { question: "What's the compliment you most like to hear?", options: [{ text: "'You seem so confident'", typeKey: "selfLove" }, { text: "'I feel comfortable around you, like you really respect me'", typeKey: "respect" }, { text: "'You're so organized and well-planned'", typeKey: "planner" }] },
  ],
  },
  ja: {
    title: "病み付き性格タイプテスト",
    subtitle: "真剣な分析ではなく、ただ楽しむための12問のカジュアル性格テスト！あなたの（隠れていない？）タイプを確認してみましょう。",
    startBtn: "テストを始める",
    questionProgress: "質問",
    resultTitle: "あなたのタイプは",
    restartBtn: "もう一度テストする",
    howTitle: "使用方法",
    disclaimer: "このテストは楽しむためのコンテンツであり、心理分析や性格診断とは関係ありません。結果を深く受け止めないでください。",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
    howSteps: ["「テストを始める」を押して12個の質問に順番に答えます。", "各質問ごとに自分に最も近い選択肢を選びます。", "最後の質問を終えると、最も多く選ばれた傾向に基づいて8つのタイプのうち1つが表示されます。"],
    faq: [{ q: "これは正式な心理検査ですか？", a: "いいえ、純粋に楽しむために作られたカジュアルテストです。科学的な性格分析や心理診断ではないので、気軽に楽しんでください。" }, { q: "結果は毎回同じですか？", a: "同じ質問に同じ答えを選べば常に同じタイプが出ます。結果は選んだ回答の組み合わせによって決まります。" }],
    types: {
    selfLove: { icon: "Sparkles", name: "自分大好き型", tagline: "自分を一番愛しているあなた、その自信が本当の魅力です。", description: "鏡を見るたびに「今日も悪くない」と思うタイプ。自己肯定感が低い世の中で自分をこれだけ大切にできるあなたは、正直すごいです。" },
    planner: { icon: "CalendarCheck", name: "計画魔型", tagline: "すべて事前に決めておかないと落ち着かないあなた。", description: "即興は体質に合いません。エクセルでスケジュールを組み、旅行前にブログを15個読まないと安心できないタイプです。" },
    homebody: { icon: "Home", name: "家大好き型", tagline: "外より家が百倍楽なあなた。", description: "ホットプレイスより自分のベッドが最高。「どこか行こう」より「うちで見よっか」のほうが嬉しいタイプです。" },
    respect: { icon: "Handshake", name: "リスペクト型", tagline: "いつも他人の意見を尊重するあなた。", description: "対立は本当に嫌い。相手の立場をまず考えて丸く収める、ムードメーカーよりムードキーパー役です。" },
    moodBreaker: { icon: "CloudDrizzle", name: "空気凍結型", tagline: "やたらタイミングが微妙なことが多いあなた。", description: "悪気はないのに妙に空気が凍る瞬間を作ってしまうタイプ。でもそれもあなただけの魅力ポイントです。" },
    hotspotHunter: { icon: "MapPin", name: "ホットプレイスハンター型", tagline: "新しい場所なら絶対に行かなきゃいけないあなた。", description: "SNSで話題の場所はすでに保存済み。2時間待ちでも「一度は行かなきゃ」という探検家タイプです。" },
    bravado: { icon: "Crown", name: "見栄っ張り大将型", tagline: "とりあえず強そうに見せるあなた。", description: "内心揺れていても外では涼しい顔をしなきゃいけないタイプ。見栄半分、自信半分で毎日を過ごしています。" },
    socialCosplay: { icon: "PartyPopper", name: "インサイコスプレ型", tagline: "リア充っぽく見せたいけど実は家が一番楽なあなた。", description: "写真は華やかに、実生活は地味に。SNSの中の自分と現実の自分に、ちょうどいいギャップがあるタイプです。" },
  },
    questions: [
    { question: "週末の朝、あなたの様子は？", options: [{ text: "鏡を見て「今日もかなりいい感じ」", typeKey: "selfLove" }, { text: "もう今日のやることリストを全部書いてある", typeKey: "planner" }, { text: "とりあえずベッドから出ない、家が一番", typeKey: "homebody" }] },
    { question: "グループチャットで送ったメッセージに誰も返事をしない時？", options: [{ text: "「みんな忙しいのかな」とスルーする", typeKey: "respect" }, { text: "なんとなく空気が凍った気がして急いで話題を変える", typeKey: "moodBreaker" }, { text: "それでも自分のメッセージが一番面白かったと思う", typeKey: "selfLove" }] },
    { question: "友達が新しいホットプレイスに行こうと誘ってきた時？", options: [{ text: "「OK！今すぐ行こう」", typeKey: "hotspotHunter" }, { text: "「そこの待ち時間をまず調べて」", typeKey: "planner" }, { text: "「うちで見た方がよくない？」", typeKey: "homebody" }] },
    { question: "初めて会った人と話す時、あなたは？", options: [{ text: "まずは凄そうに見せようとする", typeKey: "bravado" }, { text: "相手の話をより多く聞く方だ", typeKey: "respect" }, { text: "SNSを見せながら自分の日常を自慢する", typeKey: "socialCosplay" }] },
    { question: "突然できた休暇の一日、あなたの選択は？", options: [{ text: "家でなにもせずゴロゴロする", typeKey: "homebody" }, { text: "事前に立てた「休暇計画表」通りに動く", typeKey: "planner" }, { text: "インスタに載せられる場所を急いで探す", typeKey: "socialCosplay" }] },
    { question: "鏡でセルフィーを撮った時の反応は？", options: [{ text: "「やっぱり今日の自分、イケてる」", typeKey: "selfLove" }, { text: "100枚撮ってもどれもアップしない、微妙だから", typeKey: "moodBreaker" }, { text: "すぐにあちこち自慢しに行く", typeKey: "bravado" }] },
    { question: "他の人が自分の意見に反対した時？", options: [{ text: "「あ、それもあり得るな」と受け入れる", typeKey: "respect" }, { text: "表面上は涼しい顔だが内心は揺れている", typeKey: "bravado" }, { text: "なんとなく空気が気まずくなって話題を変える", typeKey: "moodBreaker" }] },
    { question: "旅行の計画を立てる時、あなたは？", options: [{ text: "エクセルで時間表まで完璧に整理する", typeKey: "planner" }, { text: "行きたかったホットプレイスのリストから埋める", typeKey: "hotspotHunter" }, { text: "家でYouTubeの旅行動画を見るだけで満足する", typeKey: "homebody" }] },
    { question: "グループ写真を撮る時、あなたは？", options: [{ text: "一番写りの良い角度をすでに知っている", typeKey: "selfLove" }, { text: "ポーズは真似するが自分が一番目立とうとする", typeKey: "bravado" }, { text: "みんなが良いと言うポーズに合わせる", typeKey: "respect" }] },
    { question: "新しい集まりに誘われた時？", options: [{ text: "「おお楽しそう、どこ？」とすぐ聞く", typeKey: "hotspotHunter" }, { text: "悩んだ結果、家が楽なので行かない", typeKey: "homebody" }, { text: "参加はするが写真をものすごく沢山撮ってアップする", typeKey: "socialCosplay" }] },
    { question: "うっかり気まずい状況を作ってしまった時？", options: [{ text: "とりあえずその場を避けたり急いで話題を変える", typeKey: "moodBreaker" }, { text: "「元々こういうキャラなんだ」と流す", typeKey: "bravado" }, { text: "状況を収めようと相手の立場をまず考える", typeKey: "respect" }] },
    { question: "一番聞きたい褒め言葉は？", options: [{ text: "「あなた本当に自信があるように見える」", typeKey: "selfLove" }, { text: "「あなたといると楽、尊重してもらってる感じがする」", typeKey: "respect" }, { text: "「あなたって本当に計画的だね」", typeKey: "planner" }] },
  ],
  },
  es: {
    title: "Test de Personalidad Casual Caótico",
    subtitle: "No es un análisis serio — ¡solo un divertido test de personalidad casual de 12 preguntas! Descubre tu tipo (no tan) oculto.",
    startBtn: "Iniciar Test",
    questionProgress: "Pregunta",
    resultTitle: "Tu tipo es",
    restartBtn: "Repetir Test",
    howTitle: "Cómo Usar",
    disclaimer: "Este test es puramente para entretenimiento y no está relacionado con análisis psicológico ni diagnóstico de personalidad. Por favor no te tomes el resultado demasiado en serio.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
    howSteps: ["Haz clic en 'Iniciar Test' y responde 12 preguntas en orden.", "En cada pregunta, elige la opción más parecida a ti.", "Después de la última pregunta, obtendrás uno de 8 tipos según tu tendencia más frecuente."],
    faq: [{ q: "¿Es este un test psicológico oficial?", a: "No, es un test puramente casual hecho solo por diversión. No es un análisis de personalidad científico ni un diagnóstico psicológico, así que disfrútalo con ligereza." }, { q: "¿Obtengo el mismo resultado cada vez?", a: "Elegir las mismas respuestas a las mismas preguntas siempre da el mismo tipo. Tu resultado se determina por la combinación de respuestas que elijas." }],
    types: {
    selfLove: { icon: "Sparkles", name: "Campeón del Amor Propio", tagline: "Te amas más que a nadie, y esa confianza es genuinamente tu encanto.", description: "Cada vez que te miras al espejo, piensas 'hoy también me veo bien.' En un mundo de baja autoestima, valorarte así es realmente admirable." },
    planner: { icon: "CalendarCheck", name: "El Planificador", tagline: "Solo te sientes tranquilo cuando todo está decidido de antemano.", description: "La espontaneidad simplemente no es lo tuyo. Haces hojas de cálculo para tu horario y necesitas leer 15 blogs antes de un viaje para sentirte seguro." },
    homebody: { icon: "Home", name: "El Hogareño", tagline: "Tu casa es cien veces más cómoda que salir.", description: "Tu propia cama supera cualquier lugar de moda. Escuchar 'mejor quedémonos en mi casa' te hace más feliz que cualquier invitación a salir." },
    respect: { icon: "Handshake", name: "El Respetuoso", tagline: "Siempre respetas las opiniones de los demás.", description: "Odias el conflicto. Piensas primero en la posición del otro y suavizas las cosas — más un pacificador que el alma de la fiesta en cualquier grupo." },
    moodBreaker: { icon: "CloudDrizzle", name: "El Rompe-Ambiente", tagline: "Tienes un talento inusual para el momento incómodo.", description: "Nunca tienes mala intención, pero de alguna manera creas esos silencios extrañamente incómodos. Aun así, eso es parte de tu encanto único." },
    hotspotHunter: { icon: "MapPin", name: "El Cazador de Lugares de Moda", tagline: "Si es un lugar nuevo, absolutamente tienes que ir a verlo.", description: "Los lugares de moda en redes sociales ya están guardados. Ni siquiera una espera de 2 horas detiene tu espíritu explorador de 'al menos hay que intentarlo.'" },
    bravado: { icon: "Crown", name: "El Rey/Reina de la Bravuconería", tagline: "Actúas duro primero y resuelves el resto después.", description: "Inestable por dentro, genial por fuera — esa es la regla. Tus días son mitad bravuconería, mitad confianza genuina." },
    socialCosplay: { icon: "PartyPopper", name: "El Cosplayer Social", tagline: "Quieres parecer sociable, pero quedarte en casa es realmente tu favorito.", description: "Glamoroso en cámara, humilde en la vida real. Hay una brecha cómoda entre tu yo de redes sociales y tu yo cotidiano." },
  },
    questions: [
    { question: "¿Cómo eres un sábado por la mañana?", options: [{ text: "Mirándote al espejo: 'me veo genial hoy también'", typeKey: "selfLove" }, { text: "Ya escribiste toda tu lista de tareas de hoy", typeKey: "planner" }, { text: "Simplemente no te levantas de la cama — tu casa es lo mejor", typeKey: "homebody" }] },
    { question: "¿Cuando nadie responde a tu mensaje en un chat grupal?", options: [{ text: "Piensas 'deben estar ocupados' y sigues adelante", typeKey: "respect" }, { text: "Sientes que el ambiente se puso incómodo y cambias de tema rápido", typeKey: "moodBreaker" }, { text: "Aun así crees que tu mensaje fue el más gracioso", typeKey: "selfLove" }] },
    { question: "¿Cuando un amigo sugiere ir a un nuevo lugar de moda?", options: [{ text: "'¡Vamos ya mismo!'", typeKey: "hotspotHunter" }, { text: "'Primero déjame revisar cuánto es la espera'", typeKey: "planner" }, { text: "'¿No sería mejor quedarnos en mi casa?'", typeKey: "homebody" }] },
    { question: "Al hablar con alguien por primera vez, tú...", options: [{ text: "Actúas como alguien impresionante de inmediato", typeKey: "bravado" }, { text: "Tiendes a escuchar más de lo que hablas", typeKey: "respect" }, { text: "Presumes tu vida mostrando tus redes sociales", typeKey: "socialCosplay" }] },
    { question: "Aparece un día libre inesperado, ¿qué haces?", options: [{ text: "No hacer absolutamente nada en casa", typeKey: "homebody" }, { text: "Seguir el 'horario de vacaciones' que ya tenías planeado", typeKey: "planner" }, { text: "Buscar apurado un lugar fotogénico para tus redes", typeKey: "socialCosplay" }] },
    { question: "¿Tu reacción después de tomarte una selfie frente al espejo?", options: [{ text: "'Sí, hoy me veo increíble'", typeKey: "selfLove" }, { text: "Tomas 100 fotos y no subes ninguna, todas se ven 'raras'", typeKey: "moodBreaker" }, { text: "Inmediatamente vas a mostrársela a todos", typeKey: "bravado" }] },
    { question: "¿Cuando alguien no está de acuerdo con tu opinión?", options: [{ text: "Piensas 'oh, eso también podría ser cierto' y lo aceptas", typeKey: "respect" }, { text: "Actúas tranquilo por fuera, pero inseguro por dentro", typeKey: "bravado" }, { text: "Sientes que el ambiente se pone incómodo y cambias de tema", typeKey: "moodBreaker" }] },
    { question: "Al planear un viaje, tú...", options: [{ text: "Armas un horario perfecto en una hoja de cálculo", typeKey: "planner" }, { text: "Llenas tu lista con lugares de moda primero", typeKey: "hotspotHunter" }, { text: "Solo ves videos de viajes en YouTube en casa y te conformas", typeKey: "homebody" }] },
    { question: "Durante una foto de grupo, tú...", options: [{ text: "Ya sabes cuál es tu mejor ángulo", typeKey: "selfLove" }, { text: "Copias la pose pero intentas destacar más que nadie", typeKey: "bravado" }, { text: "Te acomodas a la pose que todos prefieren", typeKey: "respect" }] },
    { question: "¿Cuando te invitan a una nueva reunión?", options: [{ text: "Preguntas de inmediato '¡suena divertido! ¿dónde es?'", typeKey: "hotspotHunter" }, { text: "Lo piensas, y al final no vas porque tu casa es más cómoda", typeKey: "homebody" }, { text: "Vas, pero tomas y subes un montón de fotos", typeKey: "socialCosplay" }] },
    { question: "¿Después de crear accidentalmente una situación incómoda?", options: [{ text: "Te alejas o cambias de tema rápidamente", typeKey: "moodBreaker" }, { text: "Lo dejas pasar con 'así soy yo'", typeKey: "bravado" }, { text: "Intentas arreglarlo pensando primero en los demás", typeKey: "respect" }] },
    { question: "¿Cuál es el cumplido que más te gusta escuchar?", options: [{ text: "'Pareces tener mucha confianza'", typeKey: "selfLove" }, { text: "'Me siento cómodo contigo, como que realmente me respetas'", typeKey: "respect" }, { text: "'Eres muy organizado y planificado'", typeKey: "planner" }] },
  ],
  },
};
