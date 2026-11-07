export type Locale = "ko" | "en" | "ja" | "es";

export interface Zodiac {
  sign: string;
  emoji: string;
  fortune: string;
  luckyColor: string;
  luckyItem: string;
  caution: string;
}

// 12 zodiac signs in order: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces
export const zodiacData: Record<Locale, Zodiac[]> = {
  ko: [
    { sign: "양자리", emoji: "♈", fortune: "오늘은 새로운 도전에 적합한 날입니다. 직감을 믿고 한 걸음 내딛어 보세요.", luckyColor: "빨강", luckyItem: "손거울", caution: "무리한 계획은 피하세요." },
    { sign: "황소자리", emoji: "♉", fortune: "안정과 축적의 날입니다. 오래된 계획을 점검하며 에너지를 모으세요.", luckyColor: "초록", luckyItem: "자연석", caution: "고집스러운 태도는 유연하게." },
    { sign: "쌍둥이자리", emoji: "♊", fortune: "대인관계가 활발해지는 날입니다. 대화에서 좋은 기회가 찾아올 수 있습니다.", luckyColor: "노랑", luckyItem: "펜", caution: "산만해지지 않도록 집중하세요." },
    { sign: "게자리", emoji: "♋", fortune: "감정이 깊어지는 날입니다. 가족이나 가까운 사람과의 시간이 행복을 줍니다.", luckyColor: "백색", luckyItem: "가족사진", caution: "감정 기복에 주의하세요." },
    { sign: "사자자리", emoji: "♌", fortune: "창조력과 리더십이 강한 날입니다. 당신의 열정이 주변을 밝힐 것입니다.", luckyColor: "금색", luckyItem: "주얼리", caution: "자존심보다 겸손을 선택하세요." },
    { sign: "처녀자리", emoji: "♍", fortune: "세부 사항이 빛을 발하는 날입니다. 꼼꼼함이 좋은 결과를 만듭니다.", luckyColor: "회색", luckyItem: "노트", caution: "완벽주의에 빠지지 마세요." },
    { sign: "천칭자리", emoji: "♎", fortune: "조화와 균형이 중요한 날입니다. 선택의 순간에는 타협점이 열쇠입니다.", luckyColor: "분홍", luckyItem: "화분", caution: "결정을 미루지 마세요." },
    { sign: "전갈자리", emoji: "♏", fortune: "통찰력이 날카로워지는 날입니다. 숨겨진 것을 발견하는 행운이 있습니다.", luckyColor: "검정", luckyItem: "크리스탈", caution: "의심보다 신뢰를 먼저 보세요." },
    { sign: "궁수자리", emoji: "♐", fortune: "자유와 확장이 가득한 날입니다. 새로운 지식이나 경험이 즐거움을 줍니다.", luckyColor: "남색", luckyItem: "책", caution: "약속은 지키되 부담은 줄이세요." },
    { sign: "염소자리", emoji: "♑", fortune: "인내와 노력이 결실을 맺는 날입니다. 작은 성취도 큰 보람입니다.", luckyColor: "갈색", luckyItem: "시계", caution: "무리한 업무는 휴식으로." },
    { sign: "물병자리", emoji: "♒", fortune: "독창성과 혁신이 돋보이는 날입니다. 남다른 아이디어가 빛을 발합니다.", luckyColor: "하늘색", luckyItem: "테크기기", caution: "고독이 고립으로 흐르지 않게." },
    { sign: "물고기자리", emoji: "♓", fortune: "직감과 감수성이 풍부한 날입니다. 예술이나 명상에서 영감을 얻으세요.", luckyColor: "보라", luckyItem: "향초", caution: "현실과 환상의 경계를 지키세요." },
  ],
  en: [
    { sign: "Aries", emoji: "♈", fortune: "Today is a great day for new challenges. Trust your intuition and take that first step forward.", luckyColor: "Red", luckyItem: "Hand mirror", caution: "Avoid overcommitting to one plan." },
    { sign: "Taurus", emoji: "♉", fortune: "A day of stability and accumulation. Review old plans and gather your energy.", luckyColor: "Green", luckyItem: "Natural stone", caution: "Stay flexible instead of stubborn." },
    { sign: "Gemini", emoji: "♊", fortune: "Social connections become active today. A good opportunity may come through conversation.", luckyColor: "Yellow", luckyItem: "Pen", caution: "Stay focused and avoid distractions." },
    { sign: "Cancer", emoji: "♋", fortune: "Emotions run deep today. Time with family or loved ones brings happiness.", luckyColor: "White", luckyItem: "Family photo", caution: "Watch for emotional ups and downs." },
    { sign: "Leo", emoji: "♌", fortune: "Creativity and leadership are strong today. Your passion will light up those around you.", luckyColor: "Gold", luckyItem: "Jewelry", caution: "Choose humility over pride." },
    { sign: "Virgo", emoji: "♍", fortune: "Details shine today. Your thoroughness will lead to great results.", luckyColor: "Gray", luckyItem: "Notebook", caution: "Don't fall into perfectionism." },
    { sign: "Libra", emoji: "♎", fortune: "Harmony and balance are key today. Compromise in choices is the secret.", luckyColor: "Pink", luckyItem: "Potted plant", caution: "Don't delay important decisions." },
    { sign: "Scorpio", emoji: "♏", fortune: "Your insight is sharp today. You may discover something hidden and find luck.", luckyColor: "Black", luckyItem: "Crystal", caution: "Trust before you doubt." },
    { sign: "Sagittarius", emoji: "♐", fortune: "Full of freedom and expansion today. New knowledge or experiences bring joy.", luckyColor: "Navy", luckyItem: "Book", caution: "Keep promises but reduce your burden." },
    { sign: "Capricorn", emoji: "♑", fortune: "Patience and effort lead to rewards today. Even small achievements are meaningful.", luckyColor: "Brown", luckyItem: "Watch", caution: "Rest to avoid overwork." },
    { sign: "Aquarius", emoji: "♒", fortune: "Originality and innovation stand out today. Your unique ideas will shine.", luckyColor: "Sky blue", luckyItem: "Tech gadget", caution: "Make sure solitude doesn't become isolation." },
    { sign: "Pisces", emoji: "♓", fortune: "Intuition and sensitivity are rich today. Find inspiration in art or meditation.", luckyColor: "Purple", luckyItem: "Candle", caution: "Keep the boundary between reality and fantasy." },
  ],
  ja: [
    { sign: "牡羊座", emoji: "♈", fortune: "新しい挑戦に適した日です。直感を信じて一歩踏み出してください。", luckyColor: "赤", luckyItem: "ハンドミラー", caution: "無理な計画は避けましょう。" },
    { sign: "牡牛座", emoji: "♉", fortune: "安定と蓄積の日です。古い計画を見直し、エネルギーを溜めましょう。", luckyColor: "緑", luckyItem: "天然石", caution: "頑固な態度は柔らかく。" },
    { sign: "双子座", emoji: "♊", fortune: "人間関係が活発になる日です。会話から良い機会が訪れるかもしれません。", luckyColor: "黄", luckyItem: "ペン", caution: "散漫にならないよう集中してください。" },
    { sign: "蟹座", emoji: "♋", fortune: "感情が激しくなる日です。家族や近い人との時間が幸せをもたらします。", luckyColor: "白", luckyItem: "家族写真", caution: "感情の浮沈に注意しましょう。" },
    { sign: "獅子座", emoji: "♌", fortune: "創造力とリーダーシップが強まる日です。あなたの情熱が周囲を照らします。", luckyColor: "金色", luckyItem: "ジュエリー", caution: "誇りより謙虚さを選びましょう。" },
    { sign: "処女座", emoji: "♍", fortune: "細部が輝く日です。丁寧さが良い結果を作ります。", luckyColor: "灰", luckyItem: "ノート", caution: "完璧主義に陥らないように。" },
    { sign: "天秤座", emoji: "♎", fortune: "調和と均衡が重要な日です。選択では妥協点が鍵です。", luckyColor: "桃", luckyItem: "観葉植物", caution: "決定を遅らせないで。" },
    { sign: "蠍座", emoji: "♏", fortune: "洞察力が鋭くなる日です。隠れたものを見つける幸運があります。", luckyColor: "黒", luckyItem: "クリスタル", caution: "疑う前に信頼を優先して。" },
    { sign: "射手座", emoji: "♐", fortune: "自由と拡張に満ちた日です。新しい知識や経験が楽しみをもたらします。", luckyColor: "紺", luckyItem: "本", caution: "約束は守るけど負担は減らして。" },
    { sign: "山羊座", emoji: "♑", fortune: "忍耐と努力が実りへと続く日です。小さな達成も大きなやりがいがあります。", luckyColor: "茶", luckyItem: "時計", caution: "無理な仕事は休息で。" },
    { sign: "水瓶座", emoji: "♒", fortune: "独創性と革新が目立つ日です。独自のアイデアが輝きます。", luckyColor: "空色", luckyItem: "ガジェット", caution: "孤独が孤立に流れないように。" },
    { sign: "魚座", emoji: "♓", fortune: "直感と感性が豊かな日です。芸術や瞑想からインスピレーションを得ましょう。", luckyColor: "紫", luckyItem: "キャンドル", caution: "現実と幻想の境界を守ってください。" },
  ],
  es: [
    { sign: "Aries", emoji: "♈", fortune: "Hoy es un gran día para nuevos desafíos. Confía en tu intuición y da ese primer paso.", luckyColor: "Rojo", luckyItem: "Espejo de mano", caution: "Evita comprometer-te demasiado con un solo plan." },
    { sign: "Tauro", emoji: "♉", fortune: "Un día de estabilidad y acumulación. Revisa planes antiguos y reúne tu energía.", luckyColor: "Verde", luckyItem: "Piedra natural", caution: "Mantente flexible en vez de terco." },
    { sign: "Géminis", emoji: "♊", fortune: "Las conexiones sociales se activan hoy. Una buena oportunidad puede venir a través de la conversación.", luckyColor: "Amarillo", luckyItem: "Bolígrafo", caution: "Mantén el enfoque y evita distracciones." },
    { sign: "Cáncer", emoji: "♋", fortune: "Las emociones corren profundo hoy. El tiempo con familia o seres queridos trae felicidad.", luckyColor: "Blanco", luckyItem: "Foto familiar", caution: "Vigila los altibajos emocionales." },
    { sign: "Leo", emoji: "♌", fortune: "La creatividad y el liderazgo están fuertes hoy. Tu pasión iluminará a quienes te rodean.", luckyColor: "Dorado", luckyItem: "Joyería", caution: "Elige la humildad sobre el orgullo." },
    { sign: "Virgo", emoji: "♍", fortune: "Los detalles brillan hoy. Tu minuciosidad llevará a grandes resultados.", luckyColor: "Gris", luckyItem: "Cuaderno", caution: "No caigas en el perfeccionismo." },
    { sign: "Libra", emoji: "♎", fortune: "La armonía y el equilibrio son clave hoy. El compromiso en las elecciones es el secreto.", luckyColor: "Rosa", luckyItem: "Planta maceta", caution: "No retrases decisiones importantes." },
    { sign: "Escorpio", emoji: "♏", fortune: "Tu perspicacia está afilada hoy. Puedes descubrir algo oculto y encontrar suerte.", luckyColor: "Negro", luckyItem: "Cristal", caution: "Confía antes de dudar." },
    { sign: "Sagitario", emoji: "♐", fortune: "Lleno de libertad y expansión hoy. Nuevos conocimientos o experiencias traen alegría.", luckyColor: "Azul marino", luckyItem: "Libro", caution: "Mantén las promesas pero reduce tu carga." },
    { sign: "Capricornio", emoji: "♑", fortune: "La paciencia y el esfuerzo llevan a recompensas hoy. Incluso los pequeños logros son significativos.", luckyColor: "Marrón", luckyItem: "Reloj", caution: "Descansa para evitar el agotamiento." },
    { sign: "Acuario", emoji: "♒", fortune: "La originalidad e innovación se destacan hoy. Tus ideas únicas brillarán.", luckyColor: "Azul cielo", luckyItem: "Dispositivo tecnológico", caution: "Asegúrate de que la soledad no se convierta en aislamiento." },
    { sign: "Piscis", emoji: "♓", fortune: "La intuición y la sensibilidad son ricas hoy. Encuentra inspiración en el arte o la meditación.", luckyColor: "Púrpura", luckyItem: "Vela", caution: "Mantén el límite entre realidad y fantasía." },
  ],
};
