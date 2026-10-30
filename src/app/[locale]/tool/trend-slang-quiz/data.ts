export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface QuizQuestion {
  term: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface I18nData {
  title: string;
  subtitle: string;
  startBtn: string;
  questionProgress: string;
  timeLeftLabel: string;
  secondsUnit: string;
  correctMsg: string;
  wrongMsg: string;
  timeUpMsg: string;
  resultTitle: string;
  scoreLabel: string;
  restartBtn: string;
  level0: string;
  level0Desc: string;
  level1: string;
  level1Desc: string;
  level2: string;
  level2Desc: string;
  level3: string;
  level3Desc: string;
  howTitle: string;
  footer: string;
  howSteps: string[];
  faq: FaqItem[];
  questions: QuizQuestion[];
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "요즘 인터넷 용어 센스 테스트",
    subtitle: "16개 문항 중 무작위 10개가 출제됩니다. 문항마다 10초 안에 답을 골라보세요!",
    startBtn: "테스트 시작하기",
    questionProgress: "질문",
    timeLeftLabel: "남은 시간",
    secondsUnit: "초",
    correctMsg: "정답입니다!",
    wrongMsg: "틀렸어요. 정답은",
    timeUpMsg: "시간 초과!",
    resultTitle: "테스트 완료!",
    scoreLabel: "점수",
    restartBtn: "다시 테스트하기",
    level0: "트렌드 새내기",
    level0Desc: "아직은 낯선 용어가 많네요. 인터넷 세상에 조금 더 적응해봐요!",
    level1: "눈치 빠른 유형",
    level1Desc: "기본적인 용어는 꽤 아시는군요!",
    level2: "센스 만렙 유형",
    level2Desc: "인터넷 용어를 정말 잘 알고 계세요!",
    level3: "트렌드 마스터",
    level3Desc: "모든 용어를 완벽하게 알고 있는 진정한 인터넷 고수!",
    howTitle: "사용 방법",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
    howSteps: ["'테스트 시작하기'를 누르면 16개 문항 중 무작위로 10개가 출제됩니다.", "문항마다 10초의 제한 시간 안에 정답을 고릅니다. 시간이 지나면 자동으로 다음 문항으로 넘어가요.", "10문항을 모두 마치면 점수에 따른 레벨 결과를 확인할 수 있어요."],
    faq: [{ q: "매번 같은 문제가 나오나요?", a: "아니요, 16개의 문항 풀 중 매번 무작위로 10개가 선택되고 순서도 섞여서 다시 할 때마다 다른 구성으로 즐길 수 있습니다." }, { q: "시간 안에 못 고르면 어떻게 되나요?", a: "10초가 지나면 자동으로 오답 처리되고 다음 문항으로 넘어갑니다." }],
    questions: [{ term: "TMI", question: "'TMI'는 무슨 뜻일까요?", options: ["너무 과한 정보 (Too Much Information)", "지금 당장 (As Soon As Possible)", "직접 메시지 (Direct Message)", "놓칠까 봐 불안함 (Fear Of Missing Out)"], correctIndex: 0 }, { term: "LOL", question: "'LOL'은 무슨 뜻일까요?", options: ["큰 소리로 웃음 (Laugh Out Loud)", "곧 돌아올게 (Be Right Back)", "내 생각엔 (In My Opinion)", "역대 최고 (Greatest Of All Time)"], correctIndex: 0 }, { term: "DM", question: "'DM'은 무슨 뜻일까요?", options: ["다이렉트 메시지 (Direct Message)", "오늘의 옷차림 (Outfit Of The Day)", "예상 도착 시간 (Estimated Time of Arrival)", "너무 길어서 안 읽음 (TL;DR)"], correctIndex: 0 }, { term: "FOMO", question: "'FOMO'는 무슨 뜻일까요?", options: ["나만 놓칠까 봐 느끼는 불안 (Fear Of Missing Out)", "또 다른 이름으로 (Also Known As)", "곧 돌아올게 (Be Right Back)", "너무 과한 정보 (Too Much Information)"], correctIndex: 0 }, { term: "OOTD", question: "'OOTD'는 무슨 뜻일까요?", options: ["오늘의 옷차림 (Outfit Of The Day)", "역대 최고 (Greatest Of All Time)", "내 생각엔 (In My Opinion)", "직접 메시지 (Direct Message)"], correctIndex: 0 }, { term: "BRB", question: "'BRB'는 무슨 뜻일까요?", options: ["곧 돌아올게 (Be Right Back)", "또 다른 이름으로 (Also Known As)", "예상 도착 시간 (ETA)", "역대 최고 (GOAT)"], correctIndex: 0 }, { term: "IMO", question: "'IMO'는 무슨 뜻일까요?", options: ["내 생각엔 (In My Opinion)", "너무 과한 정보 (TMI)", "지금 당장 (ASAP)", "나만 놓칠까 봐 불안 (FOMO)"], correctIndex: 0 }, { term: "ASAP", question: "'ASAP'는 무슨 뜻일까요?", options: ["가능한 한 빨리 (As Soon As Possible)", "오늘의 옷차림 (OOTD)", "또 다른 이름으로 (AKA)", "직접 메시지 (DM)"], correctIndex: 0 }, { term: "AKA", question: "'AKA'는 무슨 뜻일까요?", options: ["또 다른 이름으로 (Also Known As)", "곧 돌아올게 (BRB)", "너무 길어서 안 읽음 (TL;DR)", "역대 최고 (GOAT)"], correctIndex: 0 }, { term: "ETA", question: "'ETA'는 무슨 뜻일까요?", options: ["예상 도착 시간 (Estimated Time of Arrival)", "나만 놓칠까 봐 불안 (FOMO)", "내 생각엔 (IMO)", "오늘의 옷차림 (OOTD)"], correctIndex: 0 }, { term: "GOAT", question: "'GOAT'는 무슨 뜻일까요?", options: ["역대 최고 (Greatest Of All Time)", "너무 과한 정보 (TMI)", "직접 메시지 (DM)", "곧 돌아올게 (BRB)"], correctIndex: 0 }, { term: "TL;DR", question: "'TL;DR'는 무슨 뜻일까요?", options: ["너무 길어서 안 읽음 (Too Long; Didn't Read)", "가능한 한 빨리 (ASAP)", "또 다른 이름으로 (AKA)", "예상 도착 시간 (ETA)"], correctIndex: 0 }, { term: "😂", question: "이모지 '😂'의 공식 명칭/의미는?", options: ["기쁨의 눈물을 흘리며 웃는 얼굴 (Face with Tears of Joy)", "화가 난 얼굴", "깜짝 놀란 얼굴", "슬퍼서 우는 얼굴"], correctIndex: 0 }, { term: "🔥", question: "인터넷에서 이모지 '🔥'가 흔히 쓰이는 의미는?", options: ["정말 멋지다/대박이다라는 칭찬", "실제로 불이 났다는 경고", "화가 많이 났다는 뜻", "날씨가 덥다는 뜻"], correctIndex: 0 }, { term: "👀", question: "인터넷에서 이모지 '👀'가 흔히 쓰이는 의미는?", options: ["흥미롭게 지켜보고 있다는 뜻", "눈이 아프다는 뜻", "졸리다는 뜻", "시력이 좋다는 자랑"], correctIndex: 0 }, { term: "💀", question: "인터넷에서 이모지 '💀'가 농담으로 흔히 쓰이는 의미는?", options: ["너무 웃겨서 죽을 것 같다는 뜻", "실제로 위험하다는 경고", "무섭다는 뜻", "할로윈 분위기라는 뜻"], correctIndex: 0 }],
  },
  en: {
    title: "Internet Slang Sense Test",
    subtitle: "10 random questions are drawn from a pool of 16. You get 10 seconds per question!",
    startBtn: "Start Test",
    questionProgress: "Question",
    timeLeftLabel: "Time Left",
    secondsUnit: "s",
    correctMsg: "Correct!",
    wrongMsg: "Wrong. The answer was",
    timeUpMsg: "Time's up!",
    resultTitle: "Test Complete!",
    scoreLabel: "Score",
    restartBtn: "Retake Test",
    level0: "Trend Newbie",
    level0Desc: "Still a lot of unfamiliar terms. Keep exploring the internet world!",
    level1: "Pretty Sharp",
    level1Desc: "You know the basic terms quite well!",
    level2: "Max Sense Level",
    level2Desc: "You really know your internet slang!",
    level3: "Trend Master",
    level3Desc: "A true internet pro who knows every term perfectly!",
    howTitle: "How to Use",
    footer: "100% processed in your browser. No data is sent to a server.",
    howSteps: ["Click 'Start Test' and 10 random questions are drawn from a pool of 16.", "You have a 10-second time limit per question. If time runs out, it auto-advances.", "After all 10 questions, see your level result based on your score."],
    faq: [{ q: "Do I get the same questions every time?", a: "No, 10 questions are randomly selected from a pool of 16 each time, and their order is shuffled, so each attempt feels different." }, { q: "What happens if I don't answer in time?", a: "After 10 seconds it's automatically marked wrong and you move to the next question." }],
    questions: [{ term: "TMI", question: "What does 'TMI' mean?", options: ["Too Much Information", "As Soon As Possible", "Direct Message", "Fear Of Missing Out"], correctIndex: 0 }, { term: "LOL", question: "What does 'LOL' mean?", options: ["Laugh Out Loud", "Be Right Back", "In My Opinion", "Greatest Of All Time"], correctIndex: 0 }, { term: "DM", question: "What does 'DM' mean?", options: ["Direct Message", "Outfit Of The Day", "Estimated Time of Arrival", "Too Long; Didn't Read"], correctIndex: 0 }, { term: "FOMO", question: "What does 'FOMO' mean?", options: ["Fear Of Missing Out", "Also Known As", "Be Right Back", "Too Much Information"], correctIndex: 0 }, { term: "OOTD", question: "What does 'OOTD' mean?", options: ["Outfit Of The Day", "Greatest Of All Time", "In My Opinion", "Direct Message"], correctIndex: 0 }, { term: "BRB", question: "What does 'BRB' mean?", options: ["Be Right Back", "Also Known As", "Estimated Time of Arrival", "Greatest Of All Time"], correctIndex: 0 }, { term: "IMO", question: "What does 'IMO' mean?", options: ["In My Opinion", "Too Much Information", "As Soon As Possible", "Fear Of Missing Out"], correctIndex: 0 }, { term: "ASAP", question: "What does 'ASAP' mean?", options: ["As Soon As Possible", "Outfit Of The Day", "Also Known As", "Direct Message"], correctIndex: 0 }, { term: "AKA", question: "What does 'AKA' mean?", options: ["Also Known As", "Be Right Back", "Too Long; Didn't Read", "Greatest Of All Time"], correctIndex: 0 }, { term: "ETA", question: "What does 'ETA' mean?", options: ["Estimated Time of Arrival", "Fear Of Missing Out", "In My Opinion", "Outfit Of The Day"], correctIndex: 0 }, { term: "GOAT", question: "What does 'GOAT' mean?", options: ["Greatest Of All Time", "Too Much Information", "Direct Message", "Be Right Back"], correctIndex: 0 }, { term: "TL;DR", question: "What does 'TL;DR' mean?", options: ["Too Long; Didn't Read", "As Soon As Possible", "Also Known As", "Estimated Time of Arrival"], correctIndex: 0 }, { term: "😂", question: "What does the '😂' emoji officially represent?", options: ["Face with Tears of Joy", "An angry face", "A shocked/surprised face", "A sad crying face"], correctIndex: 0 }, { term: "🔥", question: "What does the '🔥' emoji commonly mean online?", options: ["This is amazing/awesome (a compliment)", "A literal fire warning", "Being very angry", "Hot weather"], correctIndex: 0 }, { term: "👀", question: "What does the '👀' emoji commonly mean online?", options: ["Watching something with interest", "Having sore eyes", "Feeling sleepy", "Bragging about good eyesight"], correctIndex: 0 }, { term: "💀", question: "What does the '💀' emoji commonly mean as a joke online?", options: ["I'm dying laughing / this is hilarious", "A literal danger warning", "Feeling scared", "Setting a Halloween mood"], correctIndex: 0 }],
  },
  ja: {
    title: "最近のネット用語センステスト",
    subtitle: "16問のうちランダムに10問が出題されます。1問あたり10秒以内に答えましょう！",
    startBtn: "テストを始める",
    questionProgress: "質問",
    timeLeftLabel: "残り時間",
    secondsUnit: "秒",
    correctMsg: "正解です！",
    wrongMsg: "不正解です。正解は",
    timeUpMsg: "時間切れ！",
    resultTitle: "テスト完了！",
    scoreLabel: "点数",
    restartBtn: "もう一度テストする",
    level0: "トレンド新人",
    level0Desc: "まだ馴染みのない用語が多いですね。ネットの世界にもう少し慣れていきましょう！",
    level1: "気が利くタイプ",
    level1Desc: "基本的な用語はかなり知っていますね！",
    level2: "センス満タンタイプ",
    level2Desc: "ネット用語を本当によく知っていますね！",
    level3: "トレンドマスター",
    level3Desc: "すべての用語を完璧に知っている真のネット達人！",
    howTitle: "使用方法",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
    howSteps: ["「テストを始める」を押すと16問のうちランダムに10問が出題されます。", "1問ごとに10秒の制限時間内に正解を選びます。時間が過ぎると自動で次の問題に進みます。", "10問すべて終えると、点数に応じたレベル結果が確認できます。"],
    faq: [{ q: "毎回同じ問題が出ますか？", a: "いいえ、16問の問題プールから毎回ランダムに10問が選ばれ、順番も混ざるので、やるたびに違う構成で楽しめます。" }, { q: "時間内に選べないとどうなりますか？", a: "10秒を過ぎると自動的に不正解として処理され、次の問題に進みます。" }],
    questions: [{ term: "TMI", question: "「TMI」の意味は？", options: ["過剰な情報（Too Much Information）", "できるだけ早く（As Soon As Possible）", "ダイレクトメッセージ（Direct Message）", "取り残される不安（Fear Of Missing Out）"], correctIndex: 0 }, { term: "LOL", question: "「LOL」の意味は？", options: ["大声で笑う（Laugh Out Loud）", "すぐ戻る（Be Right Back）", "私の意見では（In My Opinion）", "史上最高（Greatest Of All Time）"], correctIndex: 0 }, { term: "DM", question: "「DM」の意味は？", options: ["ダイレクトメッセージ（Direct Message）", "今日のコーデ（Outfit Of The Day）", "到着予定時刻（Estimated Time of Arrival）", "長すぎて読んでない（TL;DR）"], correctIndex: 0 }, { term: "FOMO", question: "「FOMO」の意味は？", options: ["取り残される不安（Fear Of Missing Out）", "別名（Also Known As）", "すぐ戻る（Be Right Back）", "過剰な情報（Too Much Information）"], correctIndex: 0 }, { term: "OOTD", question: "「OOTD」の意味は？", options: ["今日のコーデ（Outfit Of The Day）", "史上最高（Greatest Of All Time）", "私の意見では（In My Opinion）", "ダイレクトメッセージ（Direct Message）"], correctIndex: 0 }, { term: "BRB", question: "「BRB」の意味は？", options: ["すぐ戻る（Be Right Back）", "別名（Also Known As）", "到着予定時刻（ETA）", "史上最高（GOAT）"], correctIndex: 0 }, { term: "IMO", question: "「IMO」の意味は？", options: ["私の意見では（In My Opinion）", "過剰な情報（TMI）", "できるだけ早く（ASAP）", "取り残される不安（FOMO）"], correctIndex: 0 }, { term: "ASAP", question: "「ASAP」の意味は？", options: ["できるだけ早く（As Soon As Possible）", "今日のコーデ（OOTD）", "別名（AKA）", "ダイレクトメッセージ（DM）"], correctIndex: 0 }, { term: "AKA", question: "「AKA」の意味は？", options: ["別名（Also Known As）", "すぐ戻る（BRB）", "長すぎて読んでない（TL;DR）", "史上最高（GOAT）"], correctIndex: 0 }, { term: "ETA", question: "「ETA」の意味は？", options: ["到着予定時刻（Estimated Time of Arrival）", "取り残される不安（FOMO）", "私の意見では（IMO）", "今日のコーデ（OOTD）"], correctIndex: 0 }, { term: "GOAT", question: "「GOAT」の意味は？", options: ["史上最高（Greatest Of All Time）", "過剰な情報（TMI）", "ダイレクトメッセージ（DM）", "すぐ戻る（BRB）"], correctIndex: 0 }, { term: "TL;DR", question: "「TL;DR」の意味は？", options: ["長すぎて読んでない（Too Long; Didn't Read）", "できるだけ早く（ASAP）", "別名（AKA）", "到着予定時刻（ETA）"], correctIndex: 0 }, { term: "😂", question: "絵文字「😂」の正式な意味は？", options: ["喜びの涙を流しながら笑う顔（Face with Tears of Joy）", "怒った顔", "驚いた顔", "悲しくて泣く顔"], correctIndex: 0 }, { term: "🔥", question: "インターネットで絵文字「🔥」がよく使われる意味は？", options: ["本当にすごい/最高だという褒め言葉", "実際に火事が起きたという警告", "とても怒っているという意味", "天気が暑いという意味"], correctIndex: 0 }, { term: "👀", question: "インターネットで絵文字「👀」がよく使われる意味は？", options: ["興味を持って見守っているという意味", "目が痛いという意味", "眠いという意味", "視力が良いという自慢"], correctIndex: 0 }, { term: "💀", question: "インターネットで絵文字「💀」がジョークでよく使われる意味は？", options: ["笑いすぎて死にそうだという意味", "実際に危険だという警告", "怖いという意味", "ハロウィンの雰囲気という意味"], correctIndex: 0 }],
  },
  es: {
    title: "Test de Sentido del Argot de Internet",
    subtitle: "Se eligen 10 preguntas al azar de un total de 16. ¡Tienes 10 segundos por pregunta!",
    startBtn: "Iniciar Test",
    questionProgress: "Pregunta",
    timeLeftLabel: "Tiempo Restante",
    secondsUnit: "s",
    correctMsg: "¡Correcto!",
    wrongMsg: "Incorrecto. La respuesta era",
    timeUpMsg: "¡Se acabó el tiempo!",
    resultTitle: "¡Test Completado!",
    scoreLabel: "Puntaje",
    restartBtn: "Repetir Test",
    level0: "Novato de Tendencias",
    level0Desc: "Todavía hay muchos términos desconocidos. ¡Sigue explorando el mundo de internet!",
    level1: "Bastante Agudo",
    level1Desc: "¡Conoces bastante bien los términos básicos!",
    level2: "Nivel Máximo de Sentido",
    level2Desc: "¡Realmente conoces el argot de internet!",
    level3: "Maestro de Tendencias",
    level3Desc: "¡Un verdadero experto de internet que conoce cada término perfectamente!",
    howTitle: "Cómo Usar",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
    howSteps: ["Haz clic en 'Iniciar Test' y se elegirán 10 preguntas al azar de un total de 16.", "Tienes un límite de 10 segundos por pregunta. Si se acaba el tiempo, avanza automáticamente.", "Después de las 10 preguntas, verás tu resultado de nivel según tu puntaje."],
    faq: [{ q: "¿Obtengo las mismas preguntas cada vez?", a: "No, cada vez se seleccionan 10 preguntas al azar de un total de 16, y su orden se mezcla, así que cada intento es diferente." }, { q: "¿Qué pasa si no respondo a tiempo?", a: "Después de 10 segundos se marca automáticamente como incorrecta y avanzas a la siguiente pregunta." }],
    questions: [{ term: "TMI", question: "¿Qué significa 'TMI'?", options: ["Demasiada Información (Too Much Information)", "Lo Antes Posible (As Soon As Possible)", "Mensaje Directo (Direct Message)", "Miedo a Perderse Algo (Fear Of Missing Out)"], correctIndex: 0 }, { term: "LOL", question: "¿Qué significa 'LOL'?", options: ["Reír a Carcajadas (Laugh Out Loud)", "Vuelvo Enseguida (Be Right Back)", "En Mi Opinión (In My Opinion)", "El Mejor de Todos (Greatest Of All Time)"], correctIndex: 0 }, { term: "DM", question: "¿Qué significa 'DM'?", options: ["Mensaje Directo (Direct Message)", "Atuendo del Día (Outfit Of The Day)", "Hora Estimada de Llegada (ETA)", "Muy Largo; No Lo Leí (TL;DR)"], correctIndex: 0 }, { term: "FOMO", question: "¿Qué significa 'FOMO'?", options: ["Miedo a Perderse Algo (Fear Of Missing Out)", "También Conocido Como (AKA)", "Vuelvo Enseguida (Be Right Back)", "Demasiada Información (TMI)"], correctIndex: 0 }, { term: "OOTD", question: "¿Qué significa 'OOTD'?", options: ["Atuendo del Día (Outfit Of The Day)", "El Mejor de Todos (GOAT)", "En Mi Opinión (IMO)", "Mensaje Directo (DM)"], correctIndex: 0 }, { term: "BRB", question: "¿Qué significa 'BRB'?", options: ["Vuelvo Enseguida (Be Right Back)", "También Conocido Como (AKA)", "Hora Estimada de Llegada (ETA)", "El Mejor de Todos (GOAT)"], correctIndex: 0 }, { term: "IMO", question: "¿Qué significa 'IMO'?", options: ["En Mi Opinión (In My Opinion)", "Demasiada Información (TMI)", "Lo Antes Posible (ASAP)", "Miedo a Perderse Algo (FOMO)"], correctIndex: 0 }, { term: "ASAP", question: "¿Qué significa 'ASAP'?", options: ["Lo Antes Posible (As Soon As Possible)", "Atuendo del Día (OOTD)", "También Conocido Como (AKA)", "Mensaje Directo (DM)"], correctIndex: 0 }, { term: "AKA", question: "¿Qué significa 'AKA'?", options: ["También Conocido Como (Also Known As)", "Vuelvo Enseguida (BRB)", "Muy Largo; No Lo Leí (TL;DR)", "El Mejor de Todos (GOAT)"], correctIndex: 0 }, { term: "ETA", question: "¿Qué significa 'ETA'?", options: ["Hora Estimada de Llegada (Estimated Time of Arrival)", "Miedo a Perderse Algo (FOMO)", "En Mi Opinión (IMO)", "Atuendo del Día (OOTD)"], correctIndex: 0 }, { term: "GOAT", question: "¿Qué significa 'GOAT'?", options: ["El Mejor de Todos (Greatest Of All Time)", "Demasiada Información (TMI)", "Mensaje Directo (DM)", "Vuelvo Enseguida (BRB)"], correctIndex: 0 }, { term: "TL;DR", question: "¿Qué significa 'TL;DR'?", options: ["Muy Largo; No Lo Leí (Too Long; Didn't Read)", "Lo Antes Posible (ASAP)", "También Conocido Como (AKA)", "Hora Estimada de Llegada (ETA)"], correctIndex: 0 }, { term: "😂", question: "¿Qué representa oficialmente el emoji '😂'?", options: ["Cara con Lágrimas de Alegría (Face with Tears of Joy)", "Una cara enojada", "Una cara de sorpresa/shock", "Una cara triste llorando"], correctIndex: 0 }, { term: "🔥", question: "¿Qué significa comúnmente el emoji '🔥' en internet?", options: ["Esto es increíble/genial (un cumplido)", "Una advertencia literal de incendio", "Estar muy enojado", "Clima caluroso"], correctIndex: 0 }, { term: "👀", question: "¿Qué significa comúnmente el emoji '👀' en internet?", options: ["Observando algo con interés", "Tener los ojos doloridos", "Sentirse somnoliento", "Presumir de buena vista"], correctIndex: 0 }, { term: "💀", question: "¿Qué significa comúnmente el emoji '💀' como broma en internet?", options: ["Me muero de risa / esto es muy gracioso", "Una advertencia literal de peligro", "Sentir miedo", "Ambiente de Halloween"], correctIndex: 0 }],
  },
};
