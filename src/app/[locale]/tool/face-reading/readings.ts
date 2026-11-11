// 관상 도구 — 부위별 해석 문구(4개 언어). 이 도구 전용 파일이며 공용 번역 파일(src/locales)은 사용하지 않는다.
// 모든 문구는 전통 관상 풀이를 바탕으로 한 오락용 해석이며, 외모를 평가하거나 깎아내리지 않는 긍정적인 표현을 원칙으로 한다.
import type { Brow, Corner, EyeSize, EyeTilt, FaceShape, MouthWidth, NoseWidth, Spacing, Zone } from "./analysis";

export type Locale = "ko" | "en" | "ja" | "es";
export type L4 = Record<Locale, string>;

const L = (ko: string, en: string, ja: string, es: string): L4 => ({ ko, en, ja, es });

export const shapeText: Record<FaceShape, { title: L4; tagline: L4; text: L4 }> = {
  oval: {
    title: L("균형 잡힌 계란형 얼굴", "Balanced Oval Face", "調和のとれた卵型の顔", "Rostro ovalado equilibrado"),
    tagline: L("조화와 안정", "Harmony & stability", "調和と安定", "Armonía y estabilidad"),
    text: L(
      "전통 관상에서 조화와 안정을 상징하는 얼굴형입니다. 어떤 환경에도 잘 적응하고 사람들과 원만하게 지내는 편이며, 균형 감각이 좋아 꾸준히 신뢰를 쌓아 갑니다.",
      "In traditional face reading, this shape stands for harmony and stability. You adapt well to different settings, get along smoothly with people, and build trust steadily over time.",
      "伝統的な観相で調和と安定を表す輪郭です。どんな環境にもなじみやすく、人と円満に付き合い、バランス感覚で着実に信頼を積み上げていきます。",
      "En la fisonomía tradicional simboliza armonía y estabilidad. Te adaptas bien a distintos entornos, te llevas bien con la gente y construyes confianza poco a poco.",
    ),
  },
  round: {
    title: L("복스러운 둥근형 얼굴", "Warm Round Face", "福相の丸顔", "Rostro redondo afortunado"),
    tagline: L("복과 친화력", "Good fortune & warmth", "福と親しみやすさ", "Fortuna y cercanía"),
    text: L(
      "따뜻하고 친근한 인상으로 첫 만남에서 호감을 얻기 쉬운 얼굴형입니다. 사람 사이에서 분위기를 부드럽게 만드는 힘이 있고, 먹고 즐기는 복이 따른다고 풀이합니다.",
      "A friendly, warm impression that wins people over at first meeting. You soften the mood wherever you are, and tradition links this shape with good fortune in food and enjoyment.",
      "温かく親しみやすい印象で、初対面でも好感を持たれやすい輪郭です。場の空気を和らげる力があり、食や楽しみに恵まれると読み解きます。",
      "Transmite calidez y cercanía, y suele caer bien desde el primer encuentro. Suavizas el ambiente allí donde estás y la tradición lo asocia con buena fortuna para disfrutar de la vida.",
    ),
  },
  square: {
    title: L("단단한 사각형 얼굴", "Firm Square Face", "しっかり者の四角顔", "Rostro cuadrado firme"),
    tagline: L("의지와 책임감", "Willpower & responsibility", "意志と責任感", "Voluntad y responsabilidad"),
    text: L(
      "의지가 굳고 책임감이 강한 인상으로 풀이합니다. 한번 맡은 일은 끝까지 해내는 추진력이 있어 리더나 실무 책임자 역할에서 빛을 발합니다.",
      "Read as a sign of strong will and a deep sense of responsibility. You see what you take on through to the end, which shines in leadership and hands-on roles.",
      "意志が強く責任感の厚い印象と読み解きます。引き受けたことを最後までやり遂げる推進力があり、リーダーや実務の責任者として力を発揮します。",
      "Se interpreta como señal de voluntad firme y fuerte sentido de la responsabilidad. Llevas hasta el final lo que asumes, algo que brilla en roles de liderazgo o de gestión práctica.",
    ),
  },
  long: {
    title: L("이지적인 긴 얼굴", "Thoughtful Long Face", "知的な面長", "Rostro alargado reflexivo"),
    tagline: L("지성과 대기만성", "Intellect & late blooming", "知性と大器晩成", "Intelecto y madurez tardía"),
    text: L(
      "차분하고 사려 깊으며 생각이 깊은 인상으로 풀이합니다. 계획을 세우고 전문성을 쌓는 데 강하고, 시간이 갈수록 인정받는 대기만성형의 흐름이 있습니다.",
      "Read as a calm, deep-thinking impression. You are strong at planning and building expertise, and your recognition tends to grow over time, a late bloomer's path.",
      "落ち着いて思慮深い印象と読み解きます。計画を立てて専門性を磨くことに強く、時間とともに評価が高まる大器晩成の流れがあります。",
      "Se interpreta como una impresión serena y pensativa. Destacas planificando y desarrollando experiencia, y tu reconocimiento suele crecer con el tiempo, como un talento de maduración tardía.",
    ),
  },
  heart: {
    title: L("섬세한 역삼각형 얼굴", "Delicate V-Shaped Face", "繊細な逆三角形の顔", "Rostro en V delicado"),
    tagline: L("감각과 창의성", "Sensitivity & creativity", "感性と創造力", "Sensibilidad y creatividad"),
    text: L(
      "감각이 예민하고 아이디어가 풍부한 인상으로 풀이합니다. 창의적이고 표현력이 좋아 기획·예술·콘텐츠 분야에서 개성을 살리기 좋습니다.",
      "Read as a keen, idea-rich impression. You are creative and expressive, and your individuality comes through in planning, the arts, and content work.",
      "感性が鋭くアイデアが豊かな印象と読み解きます。創造力と表現力に優れ、企画・アート・コンテンツの分野で個性を活かしやすい輪郭です。",
      "Se interpreta como una impresión sensible y llena de ideas. Eres creativo y expresivo, y tu personalidad se luce en planificación, arte y contenidos.",
    ),
  },
};

export const zoneText: Record<Zone, L4> = {
  upper: L(
    "이마 쪽 구간이 가장 큰 편이라 초년운이 두드러지는 구성입니다. 일찍부터 배움과 주변의 도움을 얻기 쉽고, 어릴 적 쌓은 기반이 이후에도 힘이 됩니다.",
    "The forehead zone is the largest, which emphasizes early-life fortune. Learning and helpful people come to you early, and the foundation built when young keeps supporting you later.",
    "額まわりのゾーンが最も大きく、初年運が際立つ構成です。早くから学びや周囲の助けに恵まれ、若い頃に築いた土台がその後も力になります。",
    "La zona de la frente es la más amplia, lo que destaca la fortuna de la juventud. El aprendizaje y la ayuda de otros llegan pronto, y las bases de esa etapa te apoyan después.",
  ),
  middle: L(
    "눈·코가 있는 중간 구간이 가장 큰 편이라 중년운이 두드러지는 구성입니다. 30~50대에 일과 성취가 크게 자라는 흐름으로, 자신의 힘으로 기회를 만들어 갑니다.",
    "The middle zone (eyes and nose) is the largest, emphasizing midlife fortune. Work and achievement tend to grow strongly in your 30s to 50s, as you create opportunities through your own effort.",
    "目と鼻のある中間ゾーンが最も大きく、中年運が際立つ構成です。30〜50代に仕事や成果が大きく伸びる流れで、自分の力でチャンスをつくっていきます。",
    "La zona media (ojos y nariz) es la más amplia, lo que destaca la fortuna de la madurez. El trabajo y los logros crecen con fuerza entre los 30 y los 50 años, creando oportunidades con tu propio esfuerzo.",
  ),
  lower: L(
    "입·턱 쪽 구간이 가장 큰 편이라 말년운이 두드러지는 구성입니다. 나이가 들수록 안정과 여유가 더해지고, 쌓아 온 노력이 후반에 풍성한 결실로 돌아옵니다.",
    "The lower zone (mouth and chin) is the largest, emphasizing later-life fortune. Stability and ease grow with age, and the effort you have built up returns as abundant results in the later years.",
    "口とあごのゾーンが最も大きく、晩年運が際立つ構成です。年を重ねるほど安定と余裕が増し、積み重ねた努力が後半に豊かな実りとなって返ってきます。",
    "La zona inferior (boca y mentón) es la más amplia, lo que destaca la fortuna de la vejez. La estabilidad y la serenidad aumentan con los años, y el esfuerzo acumulado da abundantes frutos en la etapa final.",
  ),
  balanced: L(
    "상·중·하 세 구간이 고르게 균형을 이룬 구성입니다. 인생 전반에 걸쳐 큰 기복 없이 고르게 운이 흐르는 안정형으로 풀이합니다.",
    "The upper, middle, and lower zones are evenly balanced. Your fortune flows steadily through life without big swings, a stable pattern.",
    "上・中・下の三つのゾーンがバランスよく整っています。人生を通して大きな浮き沈みの少ない、安定した運の流れと読み解きます。",
    "Las zonas superior, media e inferior están bien equilibradas. Se interpreta como una fortuna estable que fluye a lo largo de la vida sin grandes altibajos.",
  ),
};

export const noseText: Record<NoseWidth, L4> = {
  broad: L(
    "코 폭이 넉넉한 편으로, 재물을 담는 그릇이 크다고 풀이합니다. 씀씀이가 후한 대신 들어오는 길도 넓으니, 고정 저축을 정해 두면 재물운이 더 단단해집니다.",
    "A generously wide nose is read as a large vessel for wealth. You spend freely but money also comes in through many paths, so setting a fixed savings amount makes your fortune even sturdier.",
    "小鼻にゆとりがあり、財を受け止める器が大きいと読み解きます。お金の使い方も大らかですが入ってくる道も広いので、定額の貯蓄を決めておくと財運がより堅実になります。",
    "Una nariz amplia se interpreta como un gran recipiente para la riqueza. Gastas con generosidad, pero el dinero también llega por muchos caminos; fijar un ahorro regular hace tu fortuna aún más sólida.",
  ),
  medium: L(
    "코의 폭이 알맞아 재물 흐름이 안정적인 편입니다. 무리한 모험보다 꾸준한 수입과 저축으로 차곡차곡 쌓아 가는 형입니다.",
    "A well-proportioned nose suggests a steady flow of wealth. You build up gradually through steady income and savings rather than risky ventures.",
    "鼻の幅がほどよく、財の流れが安定しているタイプです。無理な冒険より、コツコツとした収入と貯蓄で着実に積み上げていきます。",
    "Una nariz bien proporcionada indica un flujo de riqueza estable. Acumulas poco a poco con ingresos y ahorro constantes, más que con aventuras arriesgadas.",
  ),
  narrow: L(
    "코가 곧고 단정해 재물을 관리하는 감각이 좋다고 풀이합니다. 아끼고 계획적으로 쓰는 힘이 있어, 작은 돈도 모아 큰 결실로 만드는 타입입니다.",
    "A straight, neat nose is read as a good sense for managing money. You are thrifty and plan your spending, turning small amounts into bigger results.",
    "鼻筋がすっきり整い、お金の管理感覚に優れると読み解きます。倹約して計画的に使う力があり、小さなお金も積み上げて大きな成果にします。",
    "Una nariz recta y estilizada se interpreta como buen sentido para administrar el dinero. Eres ahorrador y planificas tus gastos, y conviertes pequeñas cantidades en grandes resultados.",
  ),
};

export const mouthText: Record<MouthWidth, L4> = {
  wide: L(
    "입이 시원하게 큰 편으로, 표현력과 사교성이 좋고 먹고 사는 복이 따른다고 풀이합니다. 사람을 통해 들어오는 기회와 수입이 많은 편입니다.",
    "A broad mouth is read as expressive and sociable, with good fortune in making a living. Many opportunities and income come to you through people.",
    "口が大きくのびやかで、表現力と社交性に恵まれ、暮らしの福があると読み解きます。人を通じて入ってくるチャンスや収入が多いタイプです。",
    "Una boca amplia se interpreta como expresiva y sociable, con buena fortuna para ganarse la vida. Muchas oportunidades e ingresos te llegan a través de las personas.",
  ),
  medium: L(
    "입 크기가 알맞아 말과 행동이 균형 잡혀 있고, 신뢰를 바탕으로 재물이 모이는 형입니다.",
    "A mouth of balanced size shows measured words and actions. Wealth gathers on a foundation of trust.",
    "口の大きさがほどよく、言葉と行動のバランスがよい印象です。信頼を土台に財が集まるタイプです。",
    "Una boca de tamaño equilibrado muestra palabras y acciones medidas. La riqueza se reúne sobre una base de confianza.",
  ),
  small: L(
    "입이 단정하고 작은 편으로, 말을 아끼고 신중한 인상입니다. 비밀을 잘 지키고 실속을 챙기는 성향이라 새는 돈 없이 알뜰하게 모읍니다.",
    "A neat, small mouth gives a discreet, careful impression. You keep secrets well and focus on substance, so money rarely slips away and you save thriftily.",
    "口元が小さくすっきりとし、控えめで慎重な印象です。口が堅く実利を大切にするため、無駄な出費がなく堅実に貯めていきます。",
    "Una boca pequeña y cuidada da una impresión discreta y prudente. Guardas bien los secretos y priorizas lo esencial, así que apenas se te escapa el dinero y ahorras con cuidado.",
  ),
};

export const tiltText: Record<EyeTilt, L4> = {
  up: L(
    "눈꼬리가 위로 올라가 또렷하고 매력적인 인상입니다. 마음이 끌리면 적극적으로 다가가는 주도형 사랑을 하며, 상대에게 강한 인상을 남깁니다.",
    "Upturned outer corners give a sharp, attractive impression. When drawn to someone you approach them actively, loving in a take-the-lead style and leaving a strong impression.",
    "目尻が上がり、はっきりとした魅力的な印象です。心が惹かれると積極的に近づくリード型の恋愛をし、相手に強い印象を残します。",
    "Las comisuras externas hacia arriba dan una impresión nítida y atractiva. Cuando alguien te atrae, te acercas con iniciativa, amas tomando la delantera y dejas una huella fuerte.",
  ),
  straight: L(
    "눈매가 곧고 차분해 안정적인 사랑을 하는 형입니다. 한번 마음을 주면 오래 이어 가는 신뢰형이며, 천천히 깊어지는 인연이 잘 맞습니다.",
    "Level, calm eyes suggest a steady way of loving. Once you give your heart you stay committed, and relationships that deepen slowly suit you best.",
    "目元がまっすぐで落ち着いており、安定した愛し方をするタイプです。一度心を許すと長く続く信頼型で、ゆっくり深まる縁が合います。",
    "Unos ojos rectos y serenos sugieren una forma estable de amar. Cuando entregas tu corazón te mantienes fiel, y te van mejor los vínculos que se profundizan despacio.",
  ),
  down: L(
    "눈꼬리가 부드럽게 내려가 다정하고 순한 인상입니다. 상대를 편안하게 감싸는 배려형 사랑을 하며, 사람들에게 호감을 얻기 쉬운 눈매입니다.",
    "Softly downturned outer corners give a gentle, kind impression. You love in a caring way that wraps your partner in comfort, and your eyes win people's goodwill easily.",
    "目尻がやわらかく下がり、優しく穏やかな印象です。相手を安心させて包み込む思いやり型の恋愛をし、好感を持たれやすい目元です。",
    "Las comisuras externas suavemente hacia abajo dan una impresión amable y dulce. Amas con atención, envolviendo a tu pareja en comodidad, y tu mirada gana simpatías con facilidad.",
  ),
};

export const cornerText: Record<Corner, L4> = {
  up: L(
    "입꼬리가 올라가 있어 웃는 인상이 자연스럽습니다. 주변에 따뜻한 기운을 전하며, 이 미소가 좋은 인연을 끌어당기는 힘이 됩니다.",
    "Upturned mouth corners make a smile come naturally. You spread warmth around you, and that smile draws good connections to you.",
    "口角が上がり、笑顔が自然に見える印象です。周りに温かい気を届け、その笑顔が良い縁を引き寄せます。",
    "Las comisuras de la boca hacia arriba hacen que la sonrisa surja con naturalidad. Transmites calidez a tu alrededor y esa sonrisa atrae buenas conexiones.",
  ),
  flat: L(
    "입매가 차분하고 단정해 진중한 인상을 줍니다. 말보다 행동으로 마음을 보여 주는 타입이며, 신뢰감 있는 관계를 만들어 갑니다.",
    "A calm, neat mouth line gives a serious impression. You show your feelings through actions more than words and build trustworthy relationships.",
    "口元が落ち着いて整い、誠実な印象を与えます。言葉より行動で気持ちを示すタイプで、信頼感のある関係を築きます。",
    "Una línea de la boca serena y cuidada da una impresión formal. Muestras tus sentimientos más con hechos que con palabras y construyes relaciones de confianza.",
  ),
  down: L(
    "입꼬리가 아래로 향해 신중하고 진지한 인상입니다. 겉으로는 담담하지만 속정이 깊습니다. 자주 웃는 습관을 들이면 인연운이 한층 밝아집니다.",
    "Mouth corners pointing down give a careful, serious impression. You seem composed outside but feel deeply inside. Making smiling a habit brightens your romantic luck even more.",
    "口角がやや下向きで、慎重で真面目な印象です。表面は淡々としていても情が深いタイプです。よく笑う習慣をつけると縁運がさらに明るくなります。",
    "Las comisuras hacia abajo dan una impresión prudente y seria. Pareces sereno por fuera, pero sientes con profundidad. Sonreír más a menudo ilumina aún más tu suerte en el amor.",
  ),
};

export const browText: Record<Brow, L4> = {
  arched: L(
    "눈썹이 아치형으로 곡선이 뚜렷해 자기 주관과 표현력이 좋은 인상입니다. 앞에 나서 의견을 내고 이끄는 역할에서 능력을 발휘합니다.",
    "Clearly arched brows suggest strong opinions and expressiveness. You do well stepping forward, offering ideas and leading.",
    "眉がアーチ状にくっきりとカーブし、主体性と表現力のある印象です。前に出て意見を述べ、引っ張る役割で力を発揮します。",
    "Unas cejas claramente arqueadas sugieren criterio propio y expresividad. Te desenvuelves bien dando un paso al frente, aportando ideas y liderando.",
  ),
  soft: L(
    "눈썹이 완만하고 자연스러워 협력과 조율에 강한 인상입니다. 팀 안에서 균형을 잡아 주는 역할로 신뢰를 얻고 꾸준히 성장합니다.",
    "Gently curved, natural brows suggest strength in cooperation and coordination. You earn trust as the balancing force in a team and keep growing steadily.",
    "眉がなだらかで自然で、協力と調整に強い印象です。チームのバランスをとる役割で信頼を得て、着実に成長します。",
    "Unas cejas suaves y naturales sugieren talento para cooperar y coordinar. Ganas confianza como pieza equilibradora del equipo y creces de forma constante.",
  ),
  straight: L(
    "눈썹이 일자에 가까워 목표 지향적이고 실무에 강한 인상입니다. 원칙을 지키며 맡은 일을 정확하게 해내 전문성으로 인정받습니다.",
    "Nearly straight brows suggest a goal-oriented, practical strength. You keep to principles and do your work accurately, earning recognition for expertise.",
    "眉がまっすぐに近く、目標志向で実務に強い印象です。原則を守って任された仕事を正確にこなし、専門性で認められます。",
    "Unas cejas casi rectas sugieren orientación a metas y fortaleza práctica. Sigues tus principios y haces tu trabajo con precisión, ganando reconocimiento por tu especialidad.",
  ),
};

export const eyeSizeText: Record<EyeSize, L4> = {
  large: L(
    "눈이 큰 편으로 관찰력과 감수성이 풍부하고 표현이 솔직합니다. 사람을 상대하거나 아이디어를 보여 주는 일에서 매력이 잘 드러납니다.",
    "Large eyes suggest rich observation, sensitivity, and honest expression. Your charm shows in work with people or in presenting ideas.",
    "目が大きく、観察力と感受性が豊かで表現が素直です。人と接する仕事やアイデアを見せる場面で魅力が際立ちます。",
    "Unos ojos grandes sugieren gran observación, sensibilidad y expresión sincera. Tu encanto se nota en el trato con la gente o al presentar ideas.",
  ),
  medium: L(
    "눈 크기가 알맞아 균형 잡힌 판단력을 가진 인상입니다. 감정과 이성을 고르게 쓰며 다양한 환경에서 무난하게 적응합니다.",
    "Eyes of balanced size suggest even-handed judgment. You use both emotion and reason and adapt smoothly to many environments.",
    "目の大きさがほどよく、バランスのとれた判断力の印象です。感情と理性を等しく使い、さまざまな環境に無理なくなじみます。",
    "Unos ojos de tamaño equilibrado sugieren un juicio ecuánime. Usas por igual emoción y razón y te adaptas sin esfuerzo a muchos entornos.",
  ),
  small: L(
    "눈이 가늘고 길어 집중력과 인내심이 깊은 인상입니다. 한 분야를 깊이 파고들어 전문가로 성장하는 힘이 있습니다.",
    "Slim, long eyes suggest deep concentration and patience. You have the strength to dig deep into one field and grow into an expert.",
    "目が細く長く、集中力と忍耐力が深い印象です。一つの分野を深く掘り下げ、専門家へと成長する力があります。",
    "Unos ojos finos y alargados sugieren concentración y paciencia profundas. Tienes fuerza para profundizar en un campo y convertirte en especialista.",
  ),
};

export const spacingText: Record<Spacing, L4> = {
  wide: L(
    "두 눈 사이가 여유로워 마음이 넓고 느긋한 인상입니다. 사람을 편견 없이 받아들이는 포용력이 있어 폭넓은 인맥을 쌓습니다.",
    "Eyes set generously apart suggest a broad, easygoing heart. You accept people without prejudice and build a wide network.",
    "両目の間にゆとりがあり、心が広くおおらかな印象です。人を偏見なく受け入れる包容力があり、幅広い人脈を築きます。",
    "Unos ojos bien separados sugieren un corazón amplio y relajado. Aceptas a las personas sin prejuicios y construyes una red de contactos amplia.",
  ),
  balanced: L(
    "눈 사이 간격이 알맞아 사람을 대하는 균형 감각이 좋습니다. 가깝고 먼 사이를 조화롭게 유지해 오래가는 관계를 만듭니다.",
    "Eyes with balanced spacing suggest a good sense of balance with people. You keep near and distant relationships in harmony and build lasting ones.",
    "目の間隔がほどよく、人との距離感のバランスがよいタイプです。近しい人も遠い人も調和よく保ち、長続きする関係をつくります。",
    "Una separación equilibrada de los ojos sugiere buen tino al tratar con la gente. Mantienes en armonía las relaciones cercanas y lejanas y construyes vínculos duraderos.",
  ),
  close: L(
    "두 눈이 모여 있어 집중력과 결단력이 있는 인상입니다. 소수의 사람과 깊게 사귀는 편이며, 믿는 사람에게 의리를 다합니다.",
    "Closely set eyes suggest focus and decisiveness. You tend to befriend a few people deeply and stay loyal to those you trust.",
    "両目がやや寄り、集中力と決断力のある印象です。少数の人と深く付き合う傾向があり、信頼する人には義理堅く尽くします。",
    "Unos ojos más juntos sugieren concentración y decisión. Tiendes a cultivar pocas amistades en profundidad y eres leal con quienes confías.",
  ),
};
