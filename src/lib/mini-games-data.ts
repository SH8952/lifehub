// 미니 게임 5종의 페이지 문구(4개 언어).
// 게임 본체는 public/games/<slug>.html (자체 완결형 캔버스 게임)이며, 이 파일은 게임 아래쪽 설명·FAQ·메타데이터에만 쓰입니다.
// 이름·카테고리 목록용 한 줄 설명은 tools-data.ts 의 "mini-games" 카테고리에 있습니다.

export type MiniGameSlug =
  | "poop-dodge"
  | "open-run"
  | "cannon-hill"
  | "tile-connect"
  | "water-balloon-battle";

export const MINI_GAME_SLUGS: MiniGameSlug[] = [
  "poop-dodge",
  "open-run",
  "cannon-hill",
  "tile-connect",
  "water-balloon-battle",
];

export type MiniGameLocale = "ko" | "en" | "ja" | "es";

export function toMiniGameLocale(locale: string): MiniGameLocale {
  return (["ko", "en", "ja", "es"].includes(locale) ? locale : "ko") as MiniGameLocale;
}

export interface MiniGameText {
  /** 페이지 제목(<title>/h1). 사이트 템플릿이 뒤에 " | LifeHub"를 붙인다. */
  title: string;
  /** h1 아래 한 줄 소개이자 meta description */
  subtitle: string;
  /** "이 게임은" 설명 문단 */
  about: string;
  howTo: string[];
  tips: string[];
  faq: { q: string; a: string }[];
}

export interface MiniGameCommon {
  aboutTitle: string;
  howTitle: string;
  tipsTitle: string;
  faqTitle: string;
  moreTitle: string;
  moreLink: string;
  footer: string;
  frameLabel: string;
}

export const MINI_GAME_COMMON: Record<MiniGameLocale, MiniGameCommon> = {
  ko: {
    aboutTitle: "게임 소개",
    howTitle: "조작 방법",
    tipsTitle: "잘하는 요령",
    faqTitle: "자주 묻는 질문",
    moreTitle: "다른 미니 게임",
    moreLink: "미니 게임 전체 보기",
    footer:
      "설치나 회원가입 없이 브라우저에서 바로 즐기는 무료 미니 게임입니다. 최고 기록과 소리 설정은 이 기기의 브라우저에만 저장되며 서버로 전송되지 않습니다.",
    frameLabel: "게임 화면",
  },
  en: {
    aboutTitle: "About this game",
    howTitle: "How to play",
    tipsTitle: "Tips",
    faqTitle: "FAQ",
    moreTitle: "More mini games",
    moreLink: "See all mini games",
    footer:
      "A free mini game you can play right in your browser — no install or sign-up. Your best score and sound setting stay in this browser only and are never sent to a server.",
    frameLabel: "Game screen",
  },
  ja: {
    aboutTitle: "ゲーム紹介",
    howTitle: "遊び方",
    tipsTitle: "上達のコツ",
    faqTitle: "よくある質問",
    moreTitle: "ほかのミニゲーム",
    moreLink: "ミニゲームをすべて見る",
    footer:
      "インストールや会員登録なしで、ブラウザですぐ遊べる無料のミニゲームです。ハイスコアと音の設定はこの端末のブラウザにだけ保存され、サーバーには送信されません。",
    frameLabel: "ゲーム画面",
  },
  es: {
    aboutTitle: "Sobre este juego",
    howTitle: "Cómo jugar",
    tipsTitle: "Consejos",
    faqTitle: "Preguntas frecuentes",
    moreTitle: "Más minijuegos",
    moreLink: "Ver todos los minijuegos",
    footer:
      "Un minijuego gratuito que se juega directamente en el navegador, sin instalar nada ni registrarte. Tu mejor puntuación y el ajuste de sonido se guardan solo en este navegador y nunca se envían a un servidor.",
    frameLabel: "Pantalla del juego",
  },
};

export const MINI_GAME_TEXT: Record<MiniGameSlug, Record<MiniGameLocale, MiniGameText>> = {
  "poop-dodge": {
    ko: {
      title: "막대기 인간 똥피하기 - 무료 미니 게임",
      subtitle: "하늘에서 떨어지는 똥을 좌우로 움직여 피하는 무료 미니 게임. 오래 버틸수록 음악이 빨라집니다.",
      about:
        "막대기 인간을 좌우로 움직여 위에서 쏟아지는 똥을 피하는 아주 간단한 생존 게임입니다. 오래 버틸수록 떨어지는 속도와 개수가 늘고 배경음악도 4단계로 빨라져, 짧은 틈에도 한 판씩 즐기기 좋습니다.",
      howTo: [
        "휴대폰에서는 화면을 손가락으로 좌우로 끌어 막대기 인간을 움직입니다.",
        "PC에서는 ← → 방향키로 움직입니다.",
        "똥에 한 번 맞으면 게임이 끝나며, 버틴 시간과 피한 똥의 개수가 기록됩니다.",
        "오른쪽 위 ‘멈춤’ 버튼으로 잠시 멈췄다가 이어서 할 수 있습니다.",
      ],
      tips: [
        "화면 가운데에 머물기보다 빈 공간이 넓은 쪽으로 미리 움직이세요.",
        "‘똥 폭풍’ 구간에는 한쪽 끝으로 붙어 있다가 빈틈이 보일 때만 이동하는 편이 안전합니다.",
        "소리를 끄고 싶으면 위쪽의 소리 버튼을 누르세요. 설정은 기억됩니다.",
      ],
      faq: [
        { q: "무료인가요? 설치가 필요한가요?", a: "무료이며 설치나 회원가입이 필요 없습니다. 브라우저에서 바로 실행됩니다." },
        { q: "최고 기록은 어디에 저장되나요?", a: "이 기기의 브라우저에만 저장되고 서버로 전송되지 않습니다. 브라우저 데이터를 지우면 기록도 사라집니다." },
        { q: "소리가 나지 않아요.", a: "시작 버튼을 누른 뒤부터 소리가 납니다. 아이폰은 무음 스위치가 켜져 있으면 소리가 나지 않으니 확인해 보세요." },
      ],
    },
    en: {
      title: "Stickman Poop Dodge - Free Mini Game",
      subtitle: "A free mini game where you slide left and right to dodge falling poop. The longer you last, the faster the music gets.",
      about:
        "Move a stickman left and right to dodge the poop raining from above in this simple survival game. The longer you survive, the faster and denser it falls, and the background music speeds up in four stages — a quick round fits any spare minute.",
      howTo: [
        "On a phone, drag your finger left or right across the screen to move the stickman.",
        "On a computer, use the ← → arrow keys.",
        "One hit ends the run; your survival time and the number of dodged drops are recorded.",
        "Use the Pause button in the top right to stop and resume.",
      ],
      tips: [
        "Don't camp in the middle — move early toward the side with the most open space.",
        "During a poop storm, hug one edge and only move when a clear gap appears.",
        "Tap the sound button at the top to mute; your choice is remembered.",
      ],
      faq: [
        { q: "Is it free? Do I need to install anything?", a: "It is free, with no install or sign-up. It runs right in your browser." },
        { q: "Where is my best score saved?", a: "Only in this browser on this device; nothing is sent to a server. Clearing browser data also clears the record." },
        { q: "I can't hear any sound.", a: "Sound starts after you press Start. On iPhone, check that the silent switch is off." },
      ],
    },
    ja: {
      title: "棒人間のうんち避け - 無料ミニゲーム",
      subtitle: "空から降ってくるうんちを左右に動いて避ける無料ミニゲーム。長く耐えるほど音楽が速くなります。",
      about:
        "棒人間を左右に動かして、上から降ってくるうんちを避けるシンプルなサバイバルゲームです。長く生き残るほど落ちる速さと数が増え、BGMも4段階で速くなるので、スキマ時間の1プレイにぴったりです。",
      howTo: [
        "スマホでは、画面を指で左右にドラッグして棒人間を動かします。",
        "パソコンでは ← → キーで動かします。",
        "うんちに1回当たるとゲームオーバー。生き残った時間と避けた数が記録されます。",
        "右上の「一時停止」ボタンで止めて、続きから再開できます。",
      ],
      tips: [
        "真ん中にとどまらず、空きスペースが広い側へ早めに動きましょう。",
        "「うんち嵐」のときは端に寄って、すき間が見えたときだけ動くと安全です。",
        "音を消したいときは上の音ボタンを押してください。設定は記憶されます。",
      ],
      faq: [
        { q: "無料ですか？ インストールは必要ですか？", a: "無料で、インストールも会員登録も不要です。ブラウザでそのまま動きます。" },
        { q: "ハイスコアはどこに保存されますか？", a: "この端末のブラウザにだけ保存され、サーバーには送信されません。ブラウザのデータを消すと記録も消えます。" },
        { q: "音が出ません。", a: "音はスタートボタンを押してから鳴ります。iPhoneはマナースイッチがオンだと鳴らないので確認してください。" },
      ],
    },
    es: {
      title: "Esquiva la Caca del Monigote - Minijuego gratis",
      subtitle: "Un minijuego gratis para esquivar la caca que cae del cielo moviéndote a izquierda y derecha. Cuanto más aguantas, más rápida suena la música.",
      about:
        "Mueve a un monigote de palitos a izquierda y derecha para esquivar la caca que llueve desde arriba. Cuanto más sobrevives, más rápido y denso cae todo, y la música acelera en cuatro etapas: ideal para una partida rápida en cualquier momento.",
      howTo: [
        "En el móvil, arrastra el dedo a izquierda o derecha por la pantalla para mover al monigote.",
        "En el ordenador, usa las flechas ← →.",
        "Un solo golpe termina la partida; se registran tu tiempo y las caídas esquivadas.",
        "Usa el botón de pausa de arriba a la derecha para parar y reanudar.",
      ],
      tips: [
        "No te quedes en el centro: muévete pronto hacia el lado con más espacio libre.",
        "En una tormenta de caca, pégate a un borde y muévete solo cuando veas un hueco claro.",
        "Pulsa el botón de sonido de arriba para silenciar; se recuerda tu elección.",
      ],
      faq: [
        { q: "¿Es gratis? ¿Hay que instalar algo?", a: "Es gratis, sin instalación ni registro. Funciona directamente en el navegador." },
        { q: "¿Dónde se guarda mi mejor puntuación?", a: "Solo en este navegador de este dispositivo; no se envía a ningún servidor. Si borras los datos del navegador, también se borra el récord." },
        { q: "No oigo el sonido.", a: "El sonido empieza al pulsar Empezar. En iPhone, comprueba que el interruptor de silencio esté desactivado." },
      ],
    },
  },

  "open-run": {
    ko: {
      title: "오픈 런 - 무료 점프 러닝 미니 게임",
      subtitle: "저절로 달리는 캐릭터를 점프시켜 장애물을 넘는 무료 미니 게임. 더블 점프로 높은 발판까지 올라가세요.",
      about:
        "캐릭터는 혼자 달리고, 플레이어는 점프 타이밍만 맞추면 되는 러닝 플랫폼 게임입니다. 더블 점프로 높은 발판에 오르고, 날아다니는 몬스터를 밟아 보너스를 얻으며, 점점 빨라지는 속도에 적응해 더 멀리 달려 보세요.",
      howTo: [
        "화면을 한 번 탭하면 점프, 공중에서 한 번 더 탭하면 더블 점프입니다.",
        "PC에서는 스페이스바로 점프합니다.",
        "날아다니는 몬스터는 위에서 밟으면 보너스를 얻지만, 가시가 있는 몬스터는 밟지 말고 넘어가야 합니다.",
        "구덩이에 빠지거나 장애물에 부딪히면 하트가 줄고, 하트가 모두 사라지면 게임이 끝납니다.",
      ],
      tips: [
        "높은 발판은 첫 점프를 일찍, 두 번째 탭을 정점 근처에서 하면 안정적으로 오를 수 있습니다.",
        "놓친 몬스터는 나중에 다시 나타나니 무리하지 마세요.",
        "코인을 모으면 점수가 오르고, 하트 아이템으로 체력을 회복할 수 있습니다.",
      ],
      faq: [
        { q: "무료인가요? 설치가 필요한가요?", a: "무료이며 설치나 회원가입 없이 브라우저에서 바로 실행됩니다." },
        { q: "최고 기록은 어디에 저장되나요?", a: "이 기기의 브라우저에만 저장되며 서버로 전송되지 않습니다." },
        { q: "점프가 늦게 느껴져요.", a: "화면을 짧게 탭해 보세요. 길게 누르지 않아도 탭하는 순간 바로 점프합니다. 브라우저 탭이 많이 열려 있으면 반응이 느려질 수 있습니다." },
      ],
    },
    en: {
      title: "Open Run - Free Jump & Run Mini Game",
      subtitle: "A free mini game where you time jumps for a character that runs on its own. Double jump up to the high platforms.",
      about:
        "The character runs by itself — all you do is time your jumps. Double jump onto high platforms, stomp flying monsters for bonus points, and keep up as the pace gradually speeds up to run farther each time.",
      howTo: [
        "Tap the screen once to jump, and tap again in mid-air for a double jump.",
        "On a computer, press the Space bar to jump.",
        "Stomp flying monsters from above for a bonus, but jump over spiky ones instead of stomping them.",
        "Falling into a pit or hitting an obstacle costs a heart; when the hearts run out, the run ends.",
      ],
      tips: [
        "For high platforms, start the first jump early and tap the second one near the peak.",
        "Monsters you miss come back later, so don't take risks chasing them.",
        "Coins add to your score, and heart items restore your health.",
      ],
      faq: [
        { q: "Is it free? Do I need to install anything?", a: "It is free and runs right in your browser with no install or sign-up." },
        { q: "Where is my best score saved?", a: "Only in this browser on this device; it is never sent to a server." },
        { q: "Jumping feels late.", a: "Try short taps — the jump fires the moment you tap, no need to hold. Many open browser tabs can also slow things down." },
      ],
    },
    ja: {
      title: "オープンラン - 無料ジャンプランニングミニゲーム",
      subtitle: "自動で走るキャラクターをジャンプさせて障害物を越える無料ミニゲーム。二段ジャンプで高い足場まで登ろう。",
      about:
        "キャラクターは自動で走り、プレイヤーはジャンプのタイミングを合わせるだけのランニングアクションです。二段ジャンプで高い足場に登り、飛んでいるモンスターを踏んでボーナスを獲得し、だんだん速くなるスピードに慣れてより遠くを目指しましょう。",
      howTo: [
        "画面を1回タップでジャンプ、空中でもう1回タップで二段ジャンプです。",
        "パソコンではスペースキーでジャンプします。",
        "飛んでいるモンスターは上から踏むとボーナス。トゲのあるモンスターは踏まずに飛び越えます。",
        "穴に落ちたり障害物に当たるとハートが減り、ハートがなくなるとゲームオーバーです。",
      ],
      tips: [
        "高い足場は、1回目のジャンプを早めに、2回目のタップを頂点付近で行うと安定して登れます。",
        "逃したモンスターはあとでまた現れるので、無理は禁物です。",
        "コインでスコアが上がり、ハートのアイテムで体力が回復します。",
      ],
      faq: [
        { q: "無料ですか？ インストールは必要ですか？", a: "無料で、インストールも会員登録も不要。ブラウザですぐに動きます。" },
        { q: "ハイスコアはどこに保存されますか？", a: "この端末のブラウザにだけ保存され、サーバーには送信されません。" },
        { q: "ジャンプが遅く感じます。", a: "短くタップしてみてください。長押ししなくても、タップした瞬間にジャンプします。ブラウザのタブを多く開いていると反応が遅くなることがあります。" },
      ],
    },
    es: {
      title: "Open Run - Minijuego de correr y saltar gratis",
      subtitle: "Un minijuego gratis en el que haces saltar a un personaje que corre solo. Usa el doble salto para llegar a las plataformas altas.",
      about:
        "El personaje corre solo y tú solo ajustas el momento de cada salto. Sube a plataformas altas con el doble salto, pisa monstruos voladores para conseguir bonificaciones y adáptate a un ritmo cada vez más rápido para llegar más lejos.",
      howTo: [
        "Toca la pantalla una vez para saltar y otra vez en el aire para el doble salto.",
        "En el ordenador, pulsa la barra espaciadora para saltar.",
        "Pisa a los monstruos voladores desde arriba para ganar un bonus, pero salta por encima de los que tienen pinchos.",
        "Caer en un foso o chocar con un obstáculo te quita un corazón; sin corazones, la partida termina.",
      ],
      tips: [
        "Para las plataformas altas, empieza el primer salto pronto y toca el segundo cerca del punto más alto.",
        "Los monstruos que se escapan vuelven más tarde, así que no te arriesgues.",
        "Las monedas suman puntos y los corazones restauran tu salud.",
      ],
      faq: [
        { q: "¿Es gratis? ¿Hay que instalar algo?", a: "Es gratis y funciona en el navegador, sin instalación ni registro." },
        { q: "¿Dónde se guarda mi mejor puntuación?", a: "Solo en este navegador de este dispositivo; nunca se envía a un servidor." },
        { q: "El salto parece tardar.", a: "Prueba con toques cortos: el salto se activa en cuanto tocas, sin mantener pulsado. Tener muchas pestañas abiertas también puede ralentizarlo." },
      ],
    },
  },

  "cannon-hill": {
    ko: {
      title: "캐논 힐 - 무료 대포 대전 미니 게임",
      subtitle: "AI와 번갈아 포를 쏘는 무료 포격전 미니 게임. 바람을 읽고 언덕 너머의 적 탱크를 맞히세요.",
      about:
        "언덕을 사이에 두고 AI 탱크와 번갈아 포탄을 쏘는 턴제 포격 게임입니다. 당기는 방향과 세기로 발사각이 정해지고 바람이 포탄에 영향을 주며, 판이 올라갈수록 적이 정확해지고 배경 테마도 바뀝니다.",
      howTo: [
        "화면을 뒤로 당겼다 놓으면 당긴 방향과 세기대로 포탄이 날아갑니다.",
        "위쪽 화살표로 바람의 방향과 세기를 확인하고 조준에 반영하세요.",
        "좌우 이동 버튼으로 탱크 위치를 옮길 수 있으며, 이동에는 연료가 듭니다.",
        "대형 포탄과 3연발은 횟수가 제한되어 있으니 중요한 순간에 쓰세요.",
        "PC에서는 방향키 + 스페이스바, A/D로 이동합니다.",
      ],
      tips: [
        "첫 발은 거리 감을 잡는 데 쓰고, 두 번째 발부터 바람을 보정해 명중률을 높이세요.",
        "언덕을 맞혀 지형을 깎아내면 적 탱크로 가는 길이 열리기도 합니다.",
        "연료를 아껴 두면 위험할 때 안전한 위치로 피할 수 있습니다.",
      ],
      faq: [
        { q: "무료인가요? 설치가 필요한가요?", a: "무료이며 설치나 회원가입 없이 브라우저에서 바로 실행됩니다." },
        { q: "AI 난이도는 어떻게 되나요?", a: "판이 올라갈수록 AI의 명중률이 높아집니다. 처음에는 바람과 거리 감을 익히기 좋은 난이도로 시작합니다." },
        { q: "기록은 어디에 저장되나요?", a: "이 기기의 브라우저에만 저장되며 서버로 전송되지 않습니다." },
      ],
    },
    en: {
      title: "Cannon Hill - Free Artillery Mini Game",
      subtitle: "A free artillery mini game where you trade shots with an AI tank. Read the wind and hit the enemy beyond the hill.",
      about:
        "Take turns firing shells at an AI tank across a hill in this turn-based artillery game. How far you pull back sets the angle and power, the wind pushes the shell, and the enemy gets sharper — and the backdrop changes — as stages go up.",
      howTo: [
        "Pull back on the screen and release; the shell flies in the direction and strength you pulled.",
        "Check the arrow at the top for wind direction and strength, and factor it into your aim.",
        "Use the left/right buttons to reposition your tank; moving uses fuel.",
        "Big shells and triple shots are limited, so save them for the right moment.",
        "On a computer: arrow keys + Space, and A/D to move.",
      ],
      tips: [
        "Use your first shot to judge distance, then correct for wind on the next.",
        "Hitting the hill can carve away terrain and open a path to the enemy.",
        "Keep some fuel in reserve so you can dodge to safety when needed.",
      ],
      faq: [
        { q: "Is it free? Do I need to install anything?", a: "It is free and runs right in your browser with no install or sign-up." },
        { q: "How hard is the AI?", a: "The AI gets more accurate as stages go up. It starts at a level that lets you learn the wind and distances." },
        { q: "Where are my records saved?", a: "Only in this browser on this device; they are never sent to a server." },
      ],
    },
    ja: {
      title: "キャノンヒル - 無料の砲撃対戦ミニゲーム",
      subtitle: "AIと交互に砲撃する無料ミニゲーム。風を読んで、丘の向こうの敵戦車に当てよう。",
      about:
        "丘をはさんでAI戦車と交互に砲弾を撃ち合うターン制の砲撃ゲームです。引っ張る方向と強さで発射角が決まり、風が砲弾に影響します。ステージが上がるほど敵は正確になり、背景のテーマも変わります。",
      howTo: [
        "画面を後ろに引いて離すと、引いた方向と強さで砲弾が飛びます。",
        "上の矢印で風の向きと強さを確認し、狙いに反映させましょう。",
        "左右ボタンで戦車を移動できます。移動には燃料を使います。",
        "大型弾と3連発は回数制限があるので、ここぞという場面で使いましょう。",
        "パソコンでは方向キー + スペースキー、A/Dで移動します。",
      ],
      tips: [
        "1発目で距離感をつかみ、2発目から風を補正すると命中率が上がります。",
        "丘に当てて地形を削ると、敵戦車への道が開けることもあります。",
        "燃料を少し残しておくと、危ないときに安全な場所へ避けられます。",
      ],
      faq: [
        { q: "無料ですか？ インストールは必要ですか？", a: "無料で、インストールも会員登録も不要。ブラウザですぐに動きます。" },
        { q: "AIの強さはどのくらいですか？", a: "ステージが上がるほどAIの命中率が高くなります。最初は風や距離に慣れやすい強さから始まります。" },
        { q: "記録はどこに保存されますか？", a: "この端末のブラウザにだけ保存され、サーバーには送信されません。" },
      ],
    },
    es: {
      title: "Cannon Hill - Minijuego de artillería gratis",
      subtitle: "Un minijuego de artillería gratis en el que te turnas para disparar con un tanque controlado por IA. Lee el viento y acierta al enemigo tras la colina.",
      about:
        "Dispara por turnos contra un tanque de IA al otro lado de una colina. La distancia que tires hacia atrás define el ángulo y la potencia, el viento empuja el proyectil y, a medida que subes de fase, el enemigo es más preciso y cambia el fondo.",
      howTo: [
        "Tira hacia atrás en la pantalla y suelta: el proyectil sale en la dirección y con la fuerza con que tiraste.",
        "Mira la flecha de arriba para ver la dirección y la fuerza del viento y tenlo en cuenta al apuntar.",
        "Usa los botones izquierda/derecha para mover tu tanque; moverse consume combustible.",
        "Los proyectiles grandes y los disparos triples son limitados, así que guárdalos para el momento justo.",
        "En el ordenador: flechas + Espacio, y A/D para moverte.",
      ],
      tips: [
        "Usa el primer disparo para calcular la distancia y corrige el viento en el siguiente.",
        "Golpear la colina puede romper el terreno y abrir camino hacia el enemigo.",
        "Reserva algo de combustible para esquivar a un lugar seguro cuando haga falta.",
      ],
      faq: [
        { q: "¿Es gratis? ¿Hay que instalar algo?", a: "Es gratis y funciona en el navegador, sin instalación ni registro." },
        { q: "¿Qué tan difícil es la IA?", a: "La IA es más precisa a medida que subes de fase. Empieza en un nivel que te permite aprender el viento y las distancias." },
        { q: "¿Dónde se guardan mis récords?", a: "Solo en este navegador de este dispositivo; nunca se envían a un servidor." },
      ],
    },
  },

  "tile-connect": {
    ko: {
      title: "사천성 - 무료 타일 연결 퍼즐 게임",
      subtitle: "같은 그림 타일 두 개를 선으로 이어 없애는 무료 시간제 퍼즐. 시간이 줄면 음악이 빨라집니다.",
      about:
        "같은 그림의 타일 두 개를 선으로 이어 모두 없애는 사천성 방식의 퍼즐입니다. 제한 시간 안에 모든 쌍을 연결하면 다음 판으로 넘어가며, 연속으로 빠르게 연결하면 콤보 점수를 얻고 남은 시간이 줄수록 음악이 빨라집니다.",
      howTo: [
        "같은 그림의 타일 두 개를 차례로 누르면 길이 이어질 때 사라집니다.",
        "길은 최대 두 번까지 꺾일 수 있고 다른 타일을 가로지를 수 없으며, 바깥 테두리를 돌아가는 길도 가능합니다.",
        "연결할 쌍이 없으면 자동으로 타일을 섞습니다.",
        "‘힌트’ 버튼으로 이어지는 쌍을 알아보고 ‘섞기’ 버튼으로 배치를 바꿀 수 있습니다.",
      ],
      tips: [
        "바깥쪽 타일부터 정리하면 안쪽으로 가는 길이 열립니다.",
        "연속으로 빠르게 연결할수록 콤보 보너스가 커지니 리듬을 유지하세요.",
        "막막할 때는 힌트를 쓰되, 남은 시간을 함께 확인하세요.",
      ],
      faq: [
        { q: "무료인가요? 설치가 필요한가요?", a: "무료이며 설치나 회원가입 없이 브라우저에서 바로 실행됩니다." },
        { q: "사천성이 무슨 게임인가요?", a: "같은 그림의 패 두 개를 최대 두 번 꺾이는 선으로 이어 없애는 퍼즐 게임입니다." },
        { q: "기록은 어디에 저장되나요?", a: "이 기기의 브라우저에만 저장되며 서버로 전송되지 않습니다." },
      ],
    },
    en: {
      title: "Tile Connect - Free Tile Matching Puzzle",
      subtitle: "A free timed puzzle where you link two matching tiles with a path to clear them. The music speeds up as time runs low.",
      about:
        "Link two tiles with the same picture to clear them, Mahjong-connect style. Clear every pair before time runs out to move to the next stage; quick back-to-back links build combo points, and the music speeds up as the clock runs low.",
      howTo: [
        "Tap two tiles with the same picture; if a path connects them, they disappear.",
        "A path can bend up to two times and can't cross other tiles, but it may run around the outer edge.",
        "If no pairs can be linked, the tiles are shuffled automatically.",
        "Use Hint to reveal a linkable pair and Shuffle to rearrange the board.",
      ],
      tips: [
        "Clear the outer tiles first to open paths toward the middle.",
        "Linking quickly in a row grows the combo bonus, so keep your rhythm.",
        "Use a hint when stuck, but keep an eye on the time left.",
      ],
      faq: [
        { q: "Is it free? Do I need to install anything?", a: "It is free and runs right in your browser with no install or sign-up." },
        { q: "What kind of game is this?", a: "It's a tile-matching puzzle: link two identical tiles with a line that bends at most twice to clear them." },
        { q: "Where are my records saved?", a: "Only in this browser on this device; they are never sent to a server." },
      ],
    },
    ja: {
      title: "四川省 - 無料のタイルつなぎパズル",
      subtitle: "同じ絵柄のタイル2枚を線でつないで消す無料の時間制パズル。残り時間が減ると音楽が速くなります。",
      about:
        "同じ絵柄のタイル2枚を線でつないで消していく、四川省タイプのパズルです。制限時間内にすべてのペアをつなぐと次のステージへ。テンポよく連続でつなぐとコンボ得点が入り、残り時間が少なくなると音楽が速くなります。",
      howTo: [
        "同じ絵柄のタイルを順にタップすると、道がつながる場合に消えます。",
        "道は最大2回まで曲がれて、ほかのタイルを横切れません。外側のふちを回る道もOKです。",
        "つなげるペアがなくなると、自動でタイルをシャッフルします。",
        "「ヒント」でつなげるペアを確認し、「シャッフル」で配置を入れ替えられます。",
      ],
      tips: [
        "外側のタイルから片づけると、内側への道が開きます。",
        "連続で素早くつなぐほどコンボボーナスが大きくなるので、リズムを保ちましょう。",
        "困ったときはヒントを使いつつ、残り時間も確認しましょう。",
      ],
      faq: [
        { q: "無料ですか？ インストールは必要ですか？", a: "無料で、インストールも会員登録も不要。ブラウザですぐに動きます。" },
        { q: "四川省とはどんなゲームですか？", a: "同じ絵柄の牌2枚を、最大2回まで曲がる線でつないで消すパズルゲームです。" },
        { q: "記録はどこに保存されますか？", a: "この端末のブラウザにだけ保存され、サーバーには送信されません。" },
      ],
    },
    es: {
      title: "Conecta Fichas - Puzle de unir fichas gratis",
      subtitle: "Un puzle gratis con límite de tiempo en el que unes con un camino dos fichas iguales para eliminarlas. La música acelera cuando queda poco tiempo.",
      about:
        "Une dos fichas con la misma imagen para eliminarlas, al estilo del mahjong de conexión. Si eliminas todas las parejas antes de que acabe el tiempo, pasas a la siguiente fase; unir rápido y seguido da puntos de combo, y la música acelera cuando queda poco tiempo.",
      howTo: [
        "Toca dos fichas con la misma imagen; si un camino las une, desaparecen.",
        "El camino puede doblar como máximo dos veces y no puede cruzar otras fichas, aunque sí puede rodear el borde exterior.",
        "Si no hay parejas que unir, las fichas se mezclan automáticamente.",
        "Usa Pista para ver una pareja posible y Mezclar para reorganizar el tablero.",
      ],
      tips: [
        "Empieza por las fichas del exterior para abrir caminos hacia el centro.",
        "Cuantas más uniones rápidas seguidas, mayor el bonus de combo: mantén el ritmo.",
        "Usa una pista si te atascas, pero vigila el tiempo restante.",
      ],
      faq: [
        { q: "¿Es gratis? ¿Hay que instalar algo?", a: "Es gratis y funciona en el navegador, sin instalación ni registro." },
        { q: "¿Qué tipo de juego es?", a: "Es un puzle de unir fichas: conecta dos fichas iguales con una línea que doble como máximo dos veces para eliminarlas." },
        { q: "¿Dónde se guardan mis récords?", a: "Solo en este navegador de este dispositivo; nunca se envían a un servidor." },
      ],
    },
  },

  "water-balloon-battle": {
    ko: {
      title: "크레이지 아케이드 - 물풍선 대전 미니 게임",
      subtitle: "물풍선으로 상자를 부수고 상대를 물방울에 가두는 무료 AI 대전 미니 게임.",
      about:
        "물풍선을 놓아 상자를 부수고 아이템을 모으며, 물줄기로 상대를 물방울에 가두는 AI 대전 게임입니다. 시간이 다 되면 가장자리부터 벽이 좁혀 오는 서든데스가 시작되고, 상대를 모두 이기면 다음 판으로 넘어갑니다.",
      howTo: [
        "화면 왼쪽 조이스틱을 누른 채 밀어서 이동하고, 풍선 버튼으로 물풍선을 놓습니다.",
        "물줄기에 맞으면 물방울에 갇히며, 5초 안에 탈출하지 못하면 탈락합니다.",
        "갇힌 상대에게 닿으면 물방울을 터뜨려 탈락시킬 수 있습니다.",
        "바늘 아이템이 있으면 바늘 버튼으로 물방울에서 탈출할 수 있습니다.",
        "키보드에서는 방향키/WASD + 스페이스바를 사용합니다.",
      ],
      tips: [
        "상자를 부숴 풍선 개수·물줄기 길이·속도 아이템을 먼저 모으세요.",
        "내가 놓은 풍선의 물줄기에도 맞을 수 있으니 터지기 전에 비켜서세요.",
        "서든데스가 시작되면 벽이 좁혀 오니 가운데 쪽 안전지대를 확보하세요.",
      ],
      faq: [
        { q: "무료인가요? 설치가 필요한가요?", a: "무료이며 설치나 회원가입 없이 브라우저에서 바로 실행됩니다." },
        { q: "조이스틱이 반응이 느려요.", a: "조이스틱 영역을 누른 채로 원하는 방향으로 밀어 주세요. 방향을 바꿀 때는 손가락을 떼지 않고 그대로 밀면 바로 반영됩니다." },
        { q: "기록은 어디에 저장되나요?", a: "이 기기의 브라우저에만 저장되며 서버로 전송되지 않습니다." },
      ],
    },
    en: {
      title: "Water Balloon Battle - Free Mini Game vs AI",
      subtitle: "A free mini game against AI rivals: pop boxes with water balloons and trap opponents in bubbles.",
      about:
        "Place water balloons to break boxes and collect power-ups, then trap AI rivals in bubbles with the water burst. When time runs out, walls close in from the edge in sudden death; beat every rival to move to the next stage.",
      howTo: [
        "Press and slide the joystick on the left to move, and tap the Balloon button to place a water balloon.",
        "If water hits you, you're trapped in a bubble — and out if you can't escape within 5 seconds.",
        "Touch a trapped rival to pop their bubble and knock them out.",
        "With a needle item, use the needle button to escape from a bubble.",
        "On a keyboard, use the arrows/WASD + Space.",
      ],
      tips: [
        "Break boxes early to collect balloon-count, range and speed power-ups.",
        "Your own balloon's burst can trap you too — step away before it pops.",
        "When sudden death begins the walls close in, so secure a safe spot toward the middle.",
      ],
      faq: [
        { q: "Is it free? Do I need to install anything?", a: "It is free and runs right in your browser with no install or sign-up." },
        { q: "The joystick feels slow.", a: "Keep your finger down in the joystick area and slide toward the direction you want. To change direction, just slide without lifting and it responds right away." },
        { q: "Where are my records saved?", a: "Only in this browser on this device; they are never sent to a server." },
      ],
    },
    ja: {
      title: "水風船バトル - 無料のAI対戦ミニゲーム",
      subtitle: "水風船で箱を壊し、相手を水の泡に閉じ込める無料のAI対戦ミニゲーム。",
      about:
        "水風船を置いて箱を壊しアイテムを集め、水しぶきで相手を泡に閉じ込めるAI対戦ゲームです。時間切れになると端から壁が迫るサドンデスが始まり、相手を全員倒すと次のステージへ進みます。",
      howTo: [
        "画面左のジョイスティックを押したままスライドして移動し、風船ボタンで水風船を置きます。",
        "水しぶきに当たると泡に閉じ込められ、5秒以内に脱出できないと脱落です。",
        "閉じ込められた相手に触れると泡を割って脱落させられます。",
        "針のアイテムがあれば、針ボタンで泡から脱出できます。",
        "キーボードでは方向キー/WASD + スペースキーを使います。",
      ],
      tips: [
        "箱を早めに壊して、風船数・射程・スピードのアイテムを集めましょう。",
        "自分の風船の水しぶきにも当たるので、弾ける前に離れましょう。",
        "サドンデスでは壁が迫ってくるので、中央寄りに安全な場所を確保しましょう。",
      ],
      faq: [
        { q: "無料ですか？ インストールは必要ですか？", a: "無料で、インストールも会員登録も不要。ブラウザですぐに動きます。" },
        { q: "ジョイスティックの反応が遅く感じます。", a: "ジョイスティックの範囲を押したまま、動きたい方向へスライドしてください。向きを変えるときは指を離さずそのままスライドすればすぐ反映されます。" },
        { q: "記録はどこに保存されますか？", a: "この端末のブラウザにだけ保存され、サーバーには送信されません。" },
      ],
    },
    es: {
      title: "Batalla de Globos de Agua - Minijuego gratis contra IA",
      subtitle: "Un minijuego gratis contra rivales de IA: rompe cajas con globos de agua y atrapa a tus oponentes en burbujas.",
      about:
        "Coloca globos de agua para romper cajas y reunir mejoras, y atrapa a los rivales de IA en burbujas con el chorro de agua. Cuando se acaba el tiempo, las paredes se cierran desde el borde en muerte súbita; vence a todos los rivales para pasar a la siguiente fase.",
      howTo: [
        "Mantén pulsado y desliza el joystick de la izquierda para moverte, y toca el botón de globo para colocar un globo de agua.",
        "Si te alcanza el agua, quedas atrapado en una burbuja y quedas eliminado si no escapas en 5 segundos.",
        "Toca a un rival atrapado para reventar su burbuja y eliminarlo.",
        "Con un objeto aguja, usa el botón de aguja para escapar de una burbuja.",
        "Con teclado, usa las flechas/WASD + Espacio.",
      ],
      tips: [
        "Rompe cajas pronto para conseguir mejoras de cantidad de globos, alcance y velocidad.",
        "El chorro de tu propio globo también puede atraparte: aléjate antes de que explote.",
        "Cuando empieza la muerte súbita las paredes se cierran, así que busca un lugar seguro hacia el centro.",
      ],
      faq: [
        { q: "¿Es gratis? ¿Hay que instalar algo?", a: "Es gratis y funciona en el navegador, sin instalación ni registro." },
        { q: "El joystick responde lento.", a: "Mantén el dedo en la zona del joystick y desliza hacia donde quieras ir. Para cambiar de dirección, desliza sin levantar el dedo y responde al instante." },
        { q: "¿Dónde se guardan mis récords?", a: "Solo en este navegador de este dispositivo; nunca se envían a un servidor." },
      ],
    },
  },
};
