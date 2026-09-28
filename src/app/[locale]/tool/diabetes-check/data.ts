export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  intro: string;
  questions: Array<{ q: string; options: Array<{ label: string; score: number }> }>;
  riskFactors: Array<{ label: string; q: string }>;
  calculate: string;
  result: string;
  levels: Array<{ min: number; max: number; label: string; desc: string; color: string }>;
  why: string;
  whyExplanation: string;
  disclaimer: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "당뇨 자가진단 체크리스트",
    subtitle: "당뇨병 위험도 자가검사 (참용용입니다)",
    intro: "아래 문항에 대해 자신의 경험과 건강 상태에 맞게 답변하세요. 총 10개 문항입니다.",
    questions: [
      { q: "가족력 (부모, 형제가 당뇨가 있다)", options: [
        { label: "없음", score: 0 },
        { label: "1명", score: 1 },
        { label: "2명 이상", score: 2 },
      ]},
      { q: "당뇨 증세 (잦은 배고픔, 갈증, 빈뇨 등)", options: [
        { label: "없음", score: 0 },
        { label: "가끔", score: 1 },
        { label: "자주", score: 2 },
      ]},
      { q: "시력 감소 (시가 자주 mờ해지는가)", options: [
        { label: "아니오", score: 0 },
        { label: "가끔", score: 1 },
        { label: "자주", score: 2 },
      ]},
      { q: "발의 저림 또는 감각 이상", options: [
        { label: "아니오", score: 0 },
        { label: "가끔", score: 1 },
        { label: "자주", score: 2 },
      ]},
      { q: "피로감 (상시에 피곤한가)", options: [
        { label: "아니오", score: 0 },
        { label: "가끔", score: 1 },
        { label: "자주", score: 2 },
      ]},
      { q: "체중 변화 (의도하지 않은 체중 감소 또는 증가)", options: [
        { label: "없음", score: 0 },
        { label: "가끔", score: 1 },
        { label: "자주", score: 2 },
      ]},
      { q: "천천히 쾌유 (상처가 잘 안 낫는가)", options: [
        { label: "아니오", score: 0 },
        { label: "가끔", score: 1 },
        { label: "자주", score: 2 },
      ]},
      { q: "고혈압 또는 고지혈증 진단을 받은 바 있다", options: [
        { label: "아니오", score: 0 },
        { label: "예", score: 2 },
      ]},
      { q: "스트레스가 많다", options: [
        { label: "아니오", score: 0 },
        { label: "가끔", score: 1 },
        { label: "자주", score: 2 },
      ]},
      { q: "운동 빈도가 부족하다 (주 3회 이상 하지 않음)", options: [
        { label: "아니오", score: 0 },
        { label: "예", score: 1 },
      ]},
    ],
    riskFactors: [
      { label: "비만 (BMI 25 이상)", q: "체중 관리가 필요하다" },
      { label: "고령 (40세 이상)", q: "연령이 40세 이상이다" },
      { label: "흡연", q: "흡연 경험이 있다" },
      { label: "불규칙한 식사", q: "식사가 불규칙하다" },
      { label: "좌식 생활", q: "앉아 있는 시간이 길다" },
    ],
    calculate: "위험도 계산하기",
    result: "검사 결과",
    levels: [
      { min: 0, max: 5, label: "저위험", desc: "당뇨 위험이 낮은 편입니다. 건강한 생활습관을 꾸준히 유지하세요.", color: "green" },
      { min: 6, max: 9, label: "중간위험", desc: "당뇨 위험이 중간 정도일 수 있습니다. 생활습관 교정이 필요합니다. 정기적인 혈당 검사를 권장합니다.", color: "yellow" },
      { min: 10, max: 15, label: "고위험", desc: "당뇨 위험이 높습니다. 가능한 한 빨리 병원 내과 또는 내분비내과에서 혈당을 확인하세요.", color: "red" },
    ],
    why: "왜 당뇨 자가진단이 필요한가요?",
    whyExplanation:
      "당뇨병은 방치하면 눈, 신장, 신경 등 다양한 합병증을 유발할 수 있는 중대한 질환입니다.\n\n초기에는 증상이 없을 수 있으나, 혈당이 높아지면 갈증, 빈뇨, 피로, 시력 감소 등의 증상이 나타납니다.\n\n당뇨는 조기 발견과 예방이 매우 중요하며, 자기 관리도 중요합니다.\n\n이 체크리스트는 당뇨 위험도를 자가진단하는 참고용이며, 의학적 진단을 대체할 수 없습니다. 위험도가 높다면 반드시 전문가의 진료를 받으세요.",
    disclaimer: "⚠️ 이 자가검사는 의학적 진단이 아니며 참고용입니다. 정확한 진단은 내분비내과에서 받으세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      { q: "당뇨 자가진단과 혈액검사의 차이점은 무엇인가요?", a: "자가진단은 참고용이며, 실제 혈당 수치(공복 혈당, 식후 혈당, HbA1c)는 의료기관에서 측정해야 합니다." },
      { q: "검사 결과가 높게 나왔습니다. 어떤 병을 가요?", a: "내과 또는 내분비내과에서 혈당 검사를 받으세요. 당뇨 검사에는 공복 혈당, 경구당내성검사(OGTT), 당화혈색소(HbA1c) 등이 있습니다." },
      { q: "당뇨 예방을 위해 어떤 생활습관이 좋나요?", a: "균형 잡힌 식사, 규칙적인 운동(주 150분 이상), 체중 관리, 충분한 수면, 스트레스 관리가 도움이 됩니다." },
    ],
  },
  en: {
    title: "Diabetes Self-Check",
    subtitle: "Diabetes risk assessment (for reference only)",
    intro: "Please answer each item based on your experience and health status. There are 10 items in total.",
    questions: [
      { q: "Family history (parent or sibling with diabetes)", options: [
        { label: "None", score: 0 },
        { label: "1 person", score: 1 },
        { label: "2 or more", score: 2 },
      ]},
      { q: "Diabetes symptoms (frequent hunger, thirst, frequent urination, etc.)", options: [
        { label: "None", score: 0 },
        { label: "Occasionally", score: 1 },
        { label: "Often", score: 2 },
      ]},
      { q: "Vision decline (fuzzy vision)", options: [
        { label: "No", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
      ]},
      { q: "Numbness or tingling in the feet", options: [
        { label: "No", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
      ]},
      { q: "Fatigue (constant fatigue)", options: [
        { label: "No", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
      ]},
      { q: "Weight changes (unintended weight loss or gain)", options: [
        { label: "None", score: 0 },
        { label: "Occasionally", score: 1 },
        { label: "Often", score: 2 },
      ]},
      { q: "Slow wound healing", options: [
        { label: "No", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
      ]},
      { q: "Diagnosed with hypertension or hyperlipidemia", options: [
        { label: "No", score: 0 },
        { label: "Yes", score: 2 },
      ]},
      { q: "High stress levels", options: [
        { label: "No", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
      ]},
      { q: "Insufficient exercise (less than 3 times per week)", options: [
        { label: "No", score: 0 },
        { label: "Yes", score: 1 },
      ]},
    ],
    riskFactors: [
      { label: "Obesity (BMI 25 or higher)", q: "Need to manage weight" },
      { label: "Age 40+", q: "Age 40 or older" },
      { label: "Smoking", q: "Have smoking experience" },
      { label: "Irregular meals", q: "Meals are irregular" },
      { label: "Sedentary lifestyle", q: "Long sitting time" },
    ],
    calculate: "Calculate Risk",
    result: "Result",
    levels: [
      { min: 0, max: 5, label: "Low Risk", desc: "Diabetes risk is on the lower side. Maintain healthy lifestyle habits.", color: "green" },
      { min: 6, max: 9, label: "Moderate Risk", desc: "Diabetes risk may be moderate. Lifestyle changes are needed. Regular blood sugar checks are recommended.", color: "yellow" },
      { min: 10, max: 15, label: "High Risk", desc: "Diabetes risk is high. Please check your blood sugar at a hospital as soon as possible.", color: "red" },
    ],
    why: "Why take a diabetes self-assessment?",
    whyExplanation:
      "Diabetes can cause various complications including eye, kidney, and nerve damage if left untreated.\n\nIt may have no symptoms in early stages, but as blood sugar rises, symptoms like thirst, frequent urination, fatigue, and vision decline appear.\n\nEarly detection and prevention of diabetes is critical, and self-management is also important.\n\nThis checklist is for self-assessing diabetes risk only and cannot replace a medical diagnosis. If your risk is high, please see a doctor.",
    disclaimer: "⚠️ This self-assessment is not a medical diagnosis and is for reference only. Please see an endocrinologist for accurate diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      { q: "What's the difference between self-assessment and blood tests?", a: "Self-assessment is for reference only. Actual blood sugar levels (fasting blood sugar, post-meal blood sugar, HbA1c) must be measured at a healthcare facility." },
      { q: "My result came out high. Which department should I visit?", a: "Visit the Internal Medicine or Endocrinology department for a blood sugar test. Tests include fasting blood glucose, oral glucose tolerance test (OGTT), and HbA1c." },
      { q: "What lifestyle habits are good for diabetes prevention?", a: "Balanced diet, regular exercise (150+ minutes/week), weight management, adequate sleep, and stress management help." },
    ],
  },
  ja: {
    title: "糖尿病セルフチェック",
    subtitle: "糖尿病リスク自己検査（参考用です）",
    intro: "各項目について、ご自身の経験と健康状態に合わせて回答してください。全10項目です。",
    questions: [
      { q: "家族歴（親や兄弟に糖尿病がいる）", options: [
        { label: "ない", score: 0 },
        { label: "1人", score: 1 },
        { label: "2人以上", score: 2 },
      ]},
      { q: "糖尿病の症状（頻繁な空腹、喉の渇き、多尿など）", options: [
        { label: "ない", score: 0 },
        { label: "ときどき", score: 1 },
        { label: "よくある", score: 2 },
      ]},
      { q: "視力低下（目がよくかすむか）", options: [
        { label: "いいえ", score: 0 },
        { label: "ときどき", score: 1 },
        { label: "よくある", score: 2 },
      ]},
      { q: "足のしびれまたは感覚異常", options: [
        { label: "いいえ", score: 0 },
        { label: "ときどき", score: 1 },
        { label: "よくある", score: 2 },
      ]},
      { q: "疲労感（ずっと疲れている）", options: [
        { label: "いいえ", score: 0 },
        { label: "ときどき", score: 1 },
        { label: "よくある", score: 2 },
      ]},
      { q: "体重変化（意図しない体重減少または増加）", options: [
        { label: "ない", score: 0 },
        { label: "ときどき", score: 1 },
        { label: "よくある", score: 2 },
      ]},
      { q: "傷口の治りが遅い", options: [
        { label: "いいえ", score: 0 },
        { label: "ときどき", score: 1 },
        { label: "よくある", score: 2 },
      ]},
      { q: "高血圧または高脂血症と診断されたことがある", options: [
        { label: "いいえ", score: 0 },
        { label: "はい", score: 2 },
      ]},
      { q: "ストレスが多い", options: [
        { label: "いいえ", score: 0 },
        { label: "ときどき", score: 1 },
        { label: "よくある", score: 2 },
      ]},
      { q: "運動不足（週3回以上していない）", options: [
        { label: "いいえ", score: 0 },
        { label: "はい", score: 1 },
      ]},
    ],
    riskFactors: [
      { label: "肥満（BMI 25以上）", q: "体重管理が必要だ" },
      { label: "高齢（40歳以上）", q: "40歳以上だ" },
      { label: "喫煙", q: "喫煙経験がある" },
      { label: "不規則な食事", q: "食事が不規則だ" },
      { label: "座位生活", q: "座っている時間が長い" },
    ],
    calculate: "リスクを計算",
    result: "検査結果",
    levels: [
      { min: 0, max: 5, label: "低リスク", desc: "糖尿病のリスクは低い傾向です。健康的な生活習慣を継続してください。", color: "green" },
      { min: 6, max: 9, label: "中リスク", desc: "糖尿病のリスクが中程度かもしれません。生活習慣の改善が必要です。定期的な血糖検査を推奨します。", color: "yellow" },
      { min: 10, max: 15, label: "高リスク", desc: "糖尿病のリスクが高いです。できるだけ早く病院の内科または内分泌科で血糖を確認しましょう。", color: "red" },
    ],
    why: "なぜ糖尿病セルフチェックが必要ですか？",
    whyExplanation:
      "糖尿病は放置すると目、腎臓、神経など様々な合併症を引き起こす可能性があります。\n\n初期には症状がないこともありますが、血糖が高くなると喉の渇き、多尿、疲労、視力低下などの症状が現れます。\n\n糖尿病は早期発見と予防が非常に重要で、自己管理も大切です。\n\nこのチェックリストは糖尿病リスクを自己検査するための参考用であり、医療診断を代替できるものではありません。リスクが高い場合は必ず専門医の診察を受けてください。",
    disclaimer: "⚠️ このセルフチェックは医療診断ではなく、参考用です。正確な診断は内分泌科で受けてください。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      { q: "糖尿病セルフチェックと血液検査の違いは何ですか？", a: "セルフチェックは参考用です。実際の血糖値（空腹時血糖、食後血糖、HbA1c）は医療機関で測定する必要があります。" },
      { q: "結果が高くなりました。どの科に行けば良いですか？", a: "内科または内分泌科で血糖検査を受けてください。糖尿病検査には空腹時血糖、ブドウ糖負荷検査（OGTT）、糖化血色素（HbA1c）などがあります。" },
      { q: "糖尿病予防に適した生活習慣は何ですか？", a: "バランスの取れた食事、適度な運動（週150分以上）、体重管理、十分な睡眠、ストレス管理が役立ちます。" },
    ],
  },
  es: {
    title: "Autoevaluación de Diabetes",
    subtitle: "Evaluación de riesgo de diabetes (solo de referencia)",
    intro: "Responda cada ítem según su experiencia y estado de salud. Son 10 ítems en total.",
    questions: [
      { q: "Antecedentes familiares (padre o hermano con diabetes)", options: [
        { label: "Ninguno", score: 0 },
        { label: "1 persona", score: 1 },
        { label: "2 o más", score: 2 },
      ]},
      { q: "Síntomas de diabetes (hambre frecuente, sed, micción frecuente)", options: [
        { label: "Ninguno", score: 0 },
        { label: "Ocasionalmente", score: 1 },
        { label: "Frecuentemente", score: 2 },
      ]},
      { q: "Disminución de la visión (visión borrosa frecuente)", options: [
        { label: "No", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
      ]},
      { q: "Entumecimiento u hormigueo en los pies", options: [
        { label: "No", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
      ]},
      { q: "Fatiga (cansancio constante)", options: [
        { label: "No", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
      ]},
      { q: "Cambios de peso (pérdida o ganancia no intencional)", options: [
        { label: "Ninguno", score: 0 },
        { label: "Ocasionalmente", score: 1 },
        { label: "Frecuentemente", score: 2 },
      ]},
      { q: "Cicatrización lenta de heridas", options: [
        { label: "No", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
      ]},
      { q: "Diagnóstico de hipertensión o hiperlipidemia", options: [
        { label: "No", score: 0 },
        { label: "Sí", score: 2 },
      ]},
      { q: "Niveles altos de estrés", options: [
        { label: "No", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
      ]},
      { q: "Sedentarismo (menos de 3 veces por semana)", options: [
        { label: "No", score: 0 },
        { label: "Sí", score: 1 },
      ]},
    ],
    riskFactors: [
      { label: "Obesidad (IMC 25 o superior)", q: "Necesito manejar mi peso" },
      { label: "Edad 40+", q: "Edad 40 o más" },
      { label: "Tabaquismo", q: "Tengo experiencia de fumar" },
      { label: "Comidas irregulares", q: "Las comidas son irregulares" },
      { label: "Sedentarismo", q: "Mucho tiempo sentado" },
    ],
    calculate: "Calcular Riesgo",
    result: "Resultado",
    levels: [
      { min: 0, max: 5, label: "Rajo Bajo", desc: "El riesgo de diabetes es bajo. Mantenga hábitos de vida saludables.", color: "green" },
      { min: 6, max: 9, label: "Rajo Moderado", desc: "El riesgo de diabetes puede ser moderado. Se necesitan cambios en el estilo de vida. Se recomiendan pruebas regulares de azúcar en sangre.", color: "yellow" },
      { min: 10, max: 15, label: "Alto Riesgo", desc: "El riesgo de diabetes es alto. Vaya al hospital a revisar su azúcar en sangre lo antes posible.", color: "red" },
    ],
    why: "¿Por qué hacer una autoevaluación de diabetes?",
    whyExplanation:
      "La diabetes puede causar diversas complicaciones en ojos, riñones, nervios, etc. si no se trata.\n\nPuede no tener síntomas en etapas tempranas, pero cuando el azúcar en sangre sube, aparecen síntomas como sed, micción frecuente, fatiga y disminución de la visión.\n\nLa detección temprana y prevención de la diabetes es crucial, y la autogestión también es importante.\n\nEsta lista de verificación es solo para autoevaluar el riesgo de diabetes y no puede reemplazar el diagnóstico médico. Si su riesgo es alto, consulte a un médico.",
    disclaimer: "⚠️ Esta autoevaluación no es un diagnóstico médico y es solo de referencia. Por favor, consulte a un endocrinólogo para un diagnóstico preciso.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    faq: [
      { q: "¿Cuál es la diferencia entre la autoevaluación y las pruebas de sangre?", a: "La autoevaluación es solo de referencia. Los niveles reales de azúcar en sangre (glucosa en ayunas, glucosa postprandial, HbA1c) deben medirse en un centro de salud." },
      { q: "Mi resultado fue alto. ¿Qué departamento debo visistar?", a: "Visite Medicina Interna o Endocrinología para una prueba de azúcar en sangre. Las pruebas incluyen glucosa en ayunas, prueba de tolerancia a la glucosa oral (PGTO) y HbA1c." },
      { q: "¿Qué hábitos de vida son buenos para la prevención de la diabetes?", a: "Dieta balanceada, ejercicio regular (150+ min/semana), manejo de peso, sueño adecuado y manejo del estrés ayudan." },
    ],
  },
};
