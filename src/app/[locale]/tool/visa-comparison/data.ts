export type Locale = "ko" | "en" | "ja" | "es";

export interface CountryVisa {
  country: string;
  countryEn: string;
  category: "visa-free" | "visa-on-arrival" | "evisa" | "visa-required";
  visaFreeDays?: number;
  note: string;
}

export interface Data {
  title: string;
  subtitle: string;
  intro: string;
  showAll: string;
  visaFree: string;
  visaOnArrival: string;
  eVisa: string;
  visaRequired: string;
  filterPlaceholder: string;
  filterNone: string;
  visaFreeDaysLabel: string;
  noteLabel: string;
  why: string;
  whyExplanation: string;
  tips: string;
  tipsList: string[];
  faq: Array<{ q: string; a: string }>;
  disclaimer: string;
  footer: string;
  countries: CountryVisa[];
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "전세계 비자 비교",
    subtitle: "한국 여권으로 갈 수 있는 국가의 비자 정보를 한눈에 비교하세요",
    intro:
      "한국 여권은 세계에서 강력한 여권 중 하나로, 비자 없는 입국이 가능한 국가가 많습니다.\n\n그러나 비자 정책은 수시로 변경되므로, 여행 전에 반드시 공식 출입국 관리처 또는 대사관의 최신 정보를 확인하세요.\n\n이 도구는 참고용이며, 실제 비자 발급 및 입국은 해당 국가의 공식 기관에서 최종 결정합니다.",
    showAll: "전체",
    visaFree: "비자 면제",
    visaOnArrival: "비자 도착",
    eVisa: "전자 비자",
    visaRequired: "비자 필요",
    filterPlaceholder: "국가 검색...",
    filterNone: "해당 국가가 없습니다",
    visaFreeDaysLabel: "체류 가능",
    noteLabel: "비고",
    why: "왜 비자 정보를 확인해야 하나요?",
    whyExplanation:
      "비자 없이 입국할 수 있는 국가라도 조건이 다를 수 있습니다.\n\n일부 국가는 무비자 입국이 가능하지만 30일, 90일 등 체류 기간이 제한되어 있으며, 다른 국가는 사전에 전자 비자(eVisa)를 신청해야 합니다.\n\n비자 조건을 미리 확인하지 못하면 입국이 거절되거나 추가 비용이 발생할 수 있습니다.",
    tips: "비자 준비 체크리스트",
    tipsList: [
      "출국 전 해당 국가 대사관 또는 출입국 공식 사이트 확인",
      "여권 유효기간 — 출국일로부터 최소 6개월 이상여야 하는 국가가 많음",
      "비자 면제 국가도 왕복 항공권 또는 숙박증명서를 요구할 수 있음",
      "전자 비자(eVisa)는 최소 1~2주 전에 신청",
      "체류 기간을 초과하면 과태료 또는 향후 입국 제한이 있음",
      "비자 정책은 수시로 변경되므로 여행 직전에 다시 확인",
      " Transit(경유) 국가도 비자가 필요한 경우가 많음",
    ],
    faq: [
      {
        q: "한국 여권으로 무비자 입국 가능한 국가는 몇 개 있나요?",
        a: "2026년 기준 약 190개국이상이 한국 여권 소지자에게 무비자 또는 도착비자로 입국을 허용하고 있습니다. 구체적인 숫자는 여권 파워 인덱스(Henley Passport Index)에서 확인할 수 있습니다.",
      },
      {
        q: "무비자 입국과 도착비자의 차이가 뭔가요?",
        a: "무비자(Visa-free)는 비자 없이 입국하여 체류할 수 있는 것이며, 도착비자(Visa-on-arrival)는 도착지에서 비자를 발급받는 것입니다. 일부 국가는 도착비자를 위해 미리 승인을 받아야 합니다.",
      },
      {
        q: "비자 면제 체류 기간은 모두 같은가요?",
        a: "아닙니다. 미국은 90일(ESTA 필요), 일본은 90일, EU 국가 대부분은 90일, 호주는 무제한, 중국은 15일 등 국가별로 차이가 큽니다.",
      },
      {
        q: "비자가 필요한 국가는 어떻게 신청하나요?",
        a: "해당 국가 대사관 또는 영사관에서 신청해야 합니다. 일부 국가는 온라인 eVisa를 지원하며, 신청 기간은 보통 1~4주입니다.",
      },
    ],
    disclaimer: "⚠️ 이 정보는 2026년 기준 참고용이며, 실제 비자 발급 및 입국은 각국 공식 기관에서 최종 결정합니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    countries: [
      { country: "일본", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90일 무비자 — 가장 인기 여행지" },
      { country: "미국", countryEn: "United States", category: "visa-required", note: "ESTA(전자여행허가) 필요. 90일까지 체류" },
      { country: "캐나다", countryEn: "Canada", category: "evisa", note: "eTA(전자여행허가) 필요. 6개월 체류 가능" },
      { country: "호주", countryEn: "Australia", category: "evisa", note: "eVisa(100호) 필요. 3개월 체류" },
      { country: "뉴질랜드", countryEn: "New Zealand", category: "visa-free", visaFreeDays: 90, note: "90일 무비자" },
      { country: "영국", countryEn: "United Kingdom", category: "evisa", note: "전자 출입증(ECR) 필요. 6개월 체류" },
      { country: "프랑스", countryEn: "France", category: "visa-free", visaFreeDays: 90, note: "90일(90/180일 EU 규정)" },
      { country: "독일", countryEn: "Germany", category: "visa-free", visaFreeDays: 90, note: "90일(90/180일 EU 규정)" },
      { country: "이탈리아", countryEn: "Italy", category: "visa-free", visaFreeDays: 90, note: "90일(90/180일 EU 규정)" },
      { country: "스페인", countryEn: "Spain", category: "visa-free", visaFreeDays: 90, note: "90일(90/180일 EU 규정)" },
      { country: "네덜란드", countryEn: "Netherlands", category: "visa-free", visaFreeDays: 90, note: "90일(90/180일 EU 규정)" },
      { country: "스위스", countryEn: "Switzerland", category: "visa-free", visaFreeDays: 90, note: "90일(Schengen)" },
      { country: "스웨덴", countryEn: "Sweden", category: "visa-free", visaFreeDays: 90, note: "90일(Schengen)" },
      { country: "포르투갈", countryEn: "Portugal", category: "visa-free", visaFreeDays: 90, note: "90일(Schengen)" },
      { country: "그리스", countryEn: "Greece", category: "visa-free", visaFreeDays: 90, note: "90일(Schengen)" },
      { country: "아일랜드", countryEn: "Ireland", category: "visa-free", visaFreeDays: 90, note: "90일 — 비Schengen EU" },
      { country: "태국", countryEn: "Thailand", category: "visa-free", visaFreeDays: 30, note: "30일 무비자" },
      { country: "베트남", countryEn: "Vietnam", category: "evisa", note: "전자비자 필요. 90일 체류 가능" },
      { country: "싱가포르", countryEn: "Singapore", category: "visa-free", visaFreeDays: 90, note: "90일 무비자" },
      { country: "말레이시아", countryEn: "Malaysia", category: "visa-free", visaFreeDays: 90, note: "90일 무비자" },
      { country: "필리핀", countryEn: "Philippines", category: "visa-free", visaFreeDays: 30, note: "30일 무비자" },
      { country: "인도네시아", countryEn: "Indonesia", category: "visa-free", visaFreeDays: 30, note: "30일 무비자" },
      { country: "인도", countryEn: "India", category: "visa-on-arrival", note: "도착비자 또는 eVisa 필요. 60일 체류" },
      { country: "중국", countryEn: "China", category: "visa-required", note: "비자 필요. 15일 무비자(일부 조건)" },
      { country: "아랍에미리트", countryEn: "UAE", category: "visa-free", visaFreeDays: 90, note: "90일 무비자" },
      { country: "터키", countryEn: "Turkey", category: "evisa", note: "eVisa 필요. 90일 체류 가능" },
      { country: "이집트", countryEn: "Egypt", category: "visa-on-arrival", note: "도착비자 필요. 30일 체류" },
      { country: "남아프리카공화국", countryEn: "South Africa", category: "visa-free", visaFreeDays: 90, note: "90일 무비자" },
      { country: "브라질", countryEn: "Brazil", category: "visa-free", visaFreeDays: 90, note: "90일 무비자" },
      { country: "아르헨티나", countryEn: "Argentina", category: "visa-free", visaFreeDays: 90, note: "90일 무비자" },
      { country: "카타르", countryEn: "Qatar", category: "visa-free", visaFreeDays: 30, note: "30일 무비자" },
      { country: "쿠웨이트", countryEn: "Kuwait", category: "evisa", note: "eVisa 필요" },
      { country: "사우디아라비아", countryEn: "Saudi Arabia", category: "evisa", note: "eVisa 필요" },
      { country: "일본", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90일 무비자" },
    ],
  },
  en: {
    title: "Worldwide Visa Comparison",
    subtitle: "Compare visa information for countries you can visit with a Korean passport at a glance",
    intro:
      "The Korean passport is one of the most powerful in the world, allowing visa-free entry to many countries.\n\nHowever, visa policies change frequently, so always verify the latest information with the official immigration office or embassy before traveling.\n\nThis tool is for reference only — actual visa issuance and entry approval are determined by the official authorities of each country.",
    showAll: "All",
    visaFree: "Visa-free",
    visaOnArrival: "Visa on arrival",
    eVisa: "eVisa",
    visaRequired: "Visa required",
    filterPlaceholder: "Search by country...",
    filterNone: "No countries match",
    visaFreeDaysLabel: "Stay",
    noteLabel: "Note",
    why: "Why check visa information?",
    whyExplanation:
      "Even for visa-free countries, conditions may differ.\n\nSome countries allow visa-free entry but with a limited stay of 30 days, 90 days, etc., while others require you to apply for an eVisa in advance.\n\nFailing to check visa requirements in advance may result in denied entry or additional costs.",
    tips: "Visa preparation checklist",
    tipsList: [
      "Check the embassy or official immigration website of the destination country before departure",
      "Passport validity — many countries require at least 6 months validity from your departure date",
      "Even visa-free countries may require a return ticket or proof of accommodation",
      "Apply for eVisa at least 1–2 weeks in advance",
      "Overstaying your allowed period may result in fines or future entry bans",
      "Visa policies change frequently — verify again just before travel",
      "Transit countries may also require a visa",
    ],
    faq: [
      {
        q: "How many countries can I enter visa-free with a Korean passport?",
        a: "As of 2026, Korea passport holders can enter approximately 190+ countries visa-free or with visa on arrival. You can check the Henley Passport Index for the exact number.",
      },
      {
        q: "What is the difference between visa-free and visa on arrival?",
        a: "Visa-free means you can enter and stay without obtaining a visa in advance. Visa on arrival means you obtain the visa at the port of entry. Some countries require pre-approval.",
      },
      {
        q: "Is the visa-free stay period the same for all countries?",
        a: "No. The US requires 90 days (with ESTA), Japan allows 90 days, most EU countries allow 90 days under the Schengen rules, Australia allows up to 3 months, and China allows 15 days visa-free under certain conditions.",
      },
      {
        q: "How do I apply for a visa for countries that require one?",
        a: "You must apply at the embassy or consulate of the destination country. Some countries support online eVisa, with processing times of 1–4 weeks.",
      },
    ],
    disclaimer: "⚠️ This information is for reference based on 2026 data. Actual visa and entry approval is determined by official authorities of each country.",
    footer: "100% processed in browser. No data sent to the server.",
    countries: [
      { country: "Japan", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free — most popular destination" },
      { country: "United States", countryEn: "United States", category: "visa-required", note: "ESTA (eTravel Authorization) required. Stay up to 90 days" },
      { country: "Canada", countryEn: "Canada", category: "evisa", note: "eTA (electronic travel authorization) required. Stay up to 6 months" },
      { country: "Australia", countryEn: "Australia", category: "evisa", note: "eVisa (subclass 100) required. Stay up to 3 months" },
      { country: "New Zealand", countryEn: "New Zealand", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
      { country: "United Kingdom", countryEn: "United Kingdom", category: "evisa", note: "Electronic Border Registration required. Stay up to 6 months" },
      { country: "France", countryEn: "France", category: "visa-free", visaFreeDays: 90, note: "90 days (90/180 Schengen rule)" },
      { country: "Germany", countryEn: "Germany", category: "visa-free", visaFreeDays: 90, note: "90 days (90/180 Schengen rule)" },
      { country: "Italy", countryEn: "Italy", category: "visa-free", visaFreeDays: 90, note: "90 days (90/180 Schengen rule)" },
      { country: "Spain", countryEn: "Spain", category: "visa-free", visaFreeDays: 90, note: "90 days (90/180 Schengen rule)" },
      { country: "Netherlands", countryEn: "Netherlands", category: "visa-free", visaFreeDays: 90, note: "90 days (90/180 Schengen rule)" },
      { country: "Switzerland", countryEn: "Switzerland", category: "visa-free", visaFreeDays: 90, note: "90 days (Schengen)" },
      { country: "Sweden", countryEn: "Sweden", category: "visa-free", visaFreeDays: 90, note: "90 days (Schengen)" },
      { country: "Portugal", countryEn: "Portugal", category: "visa-free", visaFreeDays: 90, note: "90 days (Schengen)" },
      { country: "Greece", countryEn: "Greece", category: "visa-free", visaFreeDays: 90, note: "90 days (Schengen)" },
      { country: "Ireland", countryEn: "Ireland", category: "visa-free", visaFreeDays: 90, note: "90 days — EU non-Schengen" },
      { country: "Thailand", countryEn: "Thailand", category: "visa-free", visaFreeDays: 30, note: "30 days visa-free" },
      { country: "Vietnam", countryEn: "Vietnam", category: "evisa", note: "eVisa required. Stay up to 90 days" },
      { country: "Singapore", countryEn: "Singapore", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
      { country: "Malaysia", countryEn: "Malaysia", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
      { country: "Philippines", countryEn: "Philippines", category: "visa-free", visaFreeDays: 30, note: "30 days visa-free" },
      { country: "Indonesia", countryEn: "Indonesia", category: "visa-free", visaFreeDays: 30, note: "30 days visa-free" },
      { country: "India", countryEn: "India", category: "visa-on-arrival", note: "Visa on arrival or eVisa required. Stay up to 60 days" },
      { country: "China", countryEn: "China", category: "visa-required", note: "Visa required. 15 days visa-free (some conditions)" },
      { country: "United Arab Emirates", countryEn: "UAE", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
      { country: "Turkey", countryEn: "Turkey", category: "evisa", note: "eVisa required. Stay up to 90 days" },
      { country: "Egypt", countryEn: "Egypt", category: "visa-on-arrival", note: "Visa on arrival required. Stay up to 30 days" },
      { country: "South Africa", countryEn: "South Africa", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
      { country: "Brazil", countryEn: "Brazil", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
      { country: "Argentina", countryEn: "Argentina", category: "visa-free", visaFreeDays: 90, note: "90 days visa-free" },
      { country: "Qatar", countryEn: "Qatar", category: "visa-free", visaFreeDays: 30, note: "30 days visa-free" },
      { country: "Kuwait", countryEn: "Kuwait", category: "evisa", note: "eVisa required" },
      { country: "Saudi Arabia", countryEn: "Saudi Arabia", category: "evisa", note: "eVisa required" },
    ],
  },
  ja: {
    title: "世界のビザ比較",
    subtitle: "韓国パスポートで行ける国のビザ情報を一目で比較",
    intro:
      "韓国パスポートは世界で強力なパスポートの一つで、ビザなしで入国可能な国が多いです。\n\nしかしビザ政策は頻繁に変更されるため、旅行前に必ず出入国管理所または大使館の最新の情報を確認してください。\n\nこのツールは参考用であり、実際のビザ発給・入国は該当国の公式機関で最終決定されます。",
    showAll: "すべて",
    visaFree: "ビザ免除",
    visaOnArrival: "到着時ビザ",
    eVisa: "電子ビザ",
    visaRequired: "ビザ必要",
    filterPlaceholder: "国で検索...",
    filterNone: "該当する国はありません",
    visaFreeDaysLabel: "滞在可能",
    noteLabel: "備考",
    why: "なぜビザ情報を確認するのか？",
    whyExplanation:
      "ビザなし入国可能な国でも条件が異なる場合がある。\n\n一部国は無ビザ入国可能だが30日、90日など滞在期間が制限されており、他の国は事前に電子ビザ(eVisa)を申請する必要がある。\n\nビザ条件を事前に確認しないと入国拒否または追加費用が発生する可能性がある。",
    tips: "ビザ準備チェックリスト",
    tipsList: [
      "出国前に該当国の大使館または出入国公式サイトを確認",
      "パスポート有効期限 — 出国日から少なくとも6ヶ月以上必要な国が多い",
      "ビザ免除国でも往復切符または宿泊証明書を要求する場合がある",
      "電子ビザ(eVisa)は少なくとも1～2週間前に申請",
      "滞在期間を超則と過料または将来的な入国制限がある",
      "ビザ政策は頻繁に変更されるため旅行前に再確認",
      "通過(トランジット)国でもビザが必要な場合が多い",
    ],
    faq: [
      {
        q: "韓国パスポートで無ビザ入国可能な国はいくつありますか？",
        a: "2026年基準約190ヶ国以上が韓国パスポート所持者に無ビザまたは到着時ビザで入国を許可しています。具体的な数字はパスポートパワーインデックス(Henley Passport Index)で確認できます。",
      },
      {
        q: "無ビザ入国と到着時ビザの違いは何ですか？",
        a: "無ビザ(Visa-free)はビザなしで入国して滞在できるもの、到着時ビザ(Visa-on-arrival)は到着地でビザを取得するものです。一部の国は事前承認が必要です。",
      },
      {
        q: "ビザ免除の滞在期間はすべて同じですか？",
        a: "いいえ。米国は90日(ESTA必要)、日本は90日、EU諸国は90日、豪州は無制限、中国は15日など国によって差が大。",
      },
      {
        q: "ビザが必要な国はどうやって申請しますか？",
        a: "該当国の大使館または領事館で申請する必要があります。一部国はオンラインeVisaを支援し、申請期間は通常1～4週間です。",
      },
    ],
    disclaimer: "⚠️ この情報は2026年基準の参考用であり、実際のビザ発給・入国は各国公式機関で最終決定されます。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    countries: [
      { country: "日本", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除 — 最も人気旅行先" },
      { country: "米国", countryEn: "United States", category: "visa-required", note: "ESTA(電子渡航認証)必要。90日まで滞在" },
      { country: "カナダ", countryEn: "Canada", category: "evisa", note: "eTA(電子渡航認証)必要。6か月滞在可能" },
      { country: "豪州", countryEn: "Australia", category: "evisa", note: "eVisa(100号)必要。3か月滞在" },
      { country: "ニュージーランド", countryEn: "New Zealand", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除" },
      { country: "英国", countryEn: "United Kingdom", category: "evisa", note: "電子国境登録(ECR)必要。6か月滞在" },
      { country: "フランス", countryEn: "France", category: "visa-free", visaFreeDays: 90, note: "90日(90/180日 EU規定)" },
      { country: "ドイツ", countryEn: "Germany", category: "visa-free", visaFreeDays: 90, note: "90日(90/180日 EU規定)" },
      { country: "イタリア", countryEn: "Italy", category: "visa-free", visaFreeDays: 90, note: "90日(90/180日 EU規定)" },
      { country: "スペイン", countryEn: "Spain", category: "visa-free", visaFreeDays: 90, note: "90日(90/180日 EU規定)" },
      { country: "オランダ", countryEn: "Netherlands", category: "visa-free", visaFreeDays: 90, note: "90日(90/180日 EU規定)" },
      { country: "スイス", countryEn: "Switzerland", category: "visa-free", visaFreeDays: 90, note: "90日(Schengen)" },
      { country: "スウェーデン", countryEn: "Sweden", category: "visa-free", visaFreeDays: 90, note: "90日(Schengen)" },
      { country: "ポルトガル", countryEn: "Portugal", category: "visa-free", visaFreeDays: 90, note: "90日(Schengen)" },
      { country: "ギリシャ", countryEn: "Greece", category: "visa-free", visaFreeDays: 90, note: "90日(Schengen)" },
      { country: "アイルランド", countryEn: "Ireland", category: "visa-free", visaFreeDays: 90, note: "90日 — EU非Schengen" },
      { country: "タイ", countryEn: "Thailand", category: "visa-free", visaFreeDays: 30, note: "30日ビザ免除" },
      { country: "ベトナム", countryEn: "Vietnam", category: "evisa", note: "電子ビザ必要。90日滞在可能" },
      { country: "シンガポール", countryEn: "Singapore", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除" },
      { country: "マレーシア", countryEn: "Malaysia", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除" },
      { country: "フィリピン", countryEn: "Philippines", category: "visa-free", visaFreeDays: 30, note: "30日ビザ免除" },
      { country: "インドネシア", countryEn: "Indonesia", category: "visa-free", visaFreeDays: 30, note: "30日ビザ免除" },
      { country: "インド", countryEn: "India", category: "visa-on-arrival", note: "到着時ビザまたはeVisa必要。60日滞在" },
      { country: "中国", countryEn: "China", category: "visa-required", note: "ビザ必要。15日ビザ免除(条件有)" },
      { country: "アラブ首長国連邦", countryEn: "UAE", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除" },
      { country: "トルコ", countryEn: "Turkey", category: "evisa", note: "eVisa必要。90日滞在可能" },
      { country: "エジプト", countryEn: "Egypt", category: "visa-on-arrival", note: "到着時ビザ必要。30日滞在" },
      { country: "南アフリカ", countryEn: "South Africa", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除" },
      { country: "ブラジル", countryEn: "Brazil", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除" },
      { country: "アルゼンチン", countryEn: "Argentina", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除" },
      { country: "カタール", countryEn: "Qatar", category: "visa-free", visaFreeDays: 30, note: "30日ビザ免除" },
      { country: "クウェート", countryEn: "Kuwait", category: "evisa", note: "eVisa必要" },
      { country: "サウジアラビア", countryEn: "Saudi Arabia", category: "evisa", note: "eVisa必要" },
      { country: "日本", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90日ビザ免除" },
    ],
  },
  es: {
    title: "Comparación de Visas Mundial",
    subtitle: "Compara la información de visas de los países a los que puedes viajar con un pasaporte coreano",
    intro:
      "El pasaporte coreano es uno de los más poderosos del mundo, permitiendo la entrada sin visa a muchos países.\n\nSin embargo, las políticas de visa cambian frecuentemente, así que siempre verifica la información más reciente con la oficina oficial de inmigración o la embajada antes de viajar.\n\nEsta herramienta es solo de referencia — la emisión real de visas y la aprobación de entrada son determinadas por las autoridades oficiales de cada país.",
    showAll: "Todo",
    visaFree: "Sin visa",
    visaOnArrival: "Visa al llegar",
    eVisa: "eVisa",
    visaRequired: "Visa requerida",
    filterPlaceholder: "Buscar por país...",
    filterNone: "No hay países coincidentes",
    visaFreeDaysLabel: "Estadía",
    noteLabel: "Nota",
    why: "¿Por qué verificar la información de visas?",
    whyExplanation:
      "Aunque para países sin visa las condiciones pueden diferir.\n\nAlgunos países permiten entrada sin visa pero con una estadía limitada de 30 días, 90 días, etc., mientras que otros requieren aplicar para una eVisa con anticipación.\n\nNo verificar los requisitos de visa con anticipación puede resultar en denegación de entrada o costos adicionales.",
    tips: "Lista de verificación de preparación de visa",
    tipsList: [
      "Verifica la embajada o el sitio oficial de inmigración del país de destino antes de salir",
      "Validez del pasaporte — muchos países requieren al menos 6 meses de validez desde tu fecha de salida",
      "Aún países sin visa pueden requerir boleto de regreso o prova de alojamiento",
      "Aplica para eVisa al menos 1–2 semanas antes",
      "Exceder tu período permitido puede resultar en multas o prohibiciones futuras de entrada",
      "Las políticas de visa cambian frecuentemente — verifica de nuevo justo antes de viajar",
      "Países de tránsito también pueden requerir visa",
    ],
    faq: [
      {
        q: "¿Cuántos países puedo entrar sin visa con un pasaporte coreano?",
        a: "A partir de 2026, los titulares de pasaporte coreano pueden entrar aproximadamente 190+ países sin visa o con visa al llegar. Puedes verificar el Henley Passport Index para el número exacto.",
      },
      {
        q: "¿Cuál es la diferencia entre sin visa y visa al llegar?",
        a: "Sin visa significa que puedes entrar y quedarte sin obtener una visa con anticipación. Visa al llegar significa que obtienes la visa en el puerto de entrada. Algunos países requieren aprobación previa.",
      },
      {
        q: "¿Es el período de estadía sin visa el mismo para todos los países?",
        a: "No. EE.UU. permite 90 días (con ESTA), Japón permite 90 días, la mayoría de países de la UE permiten 90 días bajo las reglas de Schengen, Australia permite hasta 3 meses, y China permite 15 días sin visa bajo ciertas condiciones.",
      },
      {
        q: "¿Cómo aplico para una visa de los países que la requieren?",
        a: "Debes aplicar en la embajada o consulado del país de destino. Algunos países soportan eVisa en línea, con tiempos de procesamiento de 1–4 semanas.",
      },
    ],
    disclaimer: "⚠️ Esta información es de referencia basada en datos de 2026. La visa real y la aprobación de entrada son determinadas por las autoridades oficiales de cada país.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    countries: [
      { country: "Japón", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa — destino más popular" },
      { country: "Estados Unidos", countryEn: "United States", category: "visa-required", note: "ESTA requerido. Estadía hasta 90 días" },
      { country: "Canadá", countryEn: "Canada", category: "evisa", note: "eTA (autorización de viaje electrónica) requerido. Estadía hasta 6 meses" },
      { country: "Australia", countryEn: "Australia", category: "evisa", note: "eVisa (subclase 100) requerido. Estadía hasta 3 meses" },
      { country: "Nueva Zelanda", countryEn: "New Zealand", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa" },
      { country: "Reino Unido", countryEn: "United Kingdom", category: "evisa", note: "Registro de Frontera Electrónica requerido. Estadía hasta 6 meses" },
      { country: "Francia", countryEn: "France", category: "visa-free", visaFreeDays: 90, note: "90 días (90/180 regla Schengen)" },
      { country: "Alemania", countryEn: "Germany", category: "visa-free", visaFreeDays: 90, note: "90 días (90/180 regla Schengen)" },
      { country: "Italia", countryEn: "Italy", category: "visa-free", visaFreeDays: 90, note: "90 días (90/180 regla Schengen)" },
      { country: "España", countryEn: "Spain", category: "visa-free", visaFreeDays: 90, note: "90 días (90/180 regla Schengen)" },
      { country: "Países Bajos", countryEn: "Netherlands", category: "visa-free", visaFreeDays: 90, note: "90 días (90/180 regla Schengen)" },
      { country: "Suiza", countryEn: "Switzerland", category: "visa-free", visaFreeDays: 90, note: "90 días (Schengen)" },
      { country: "Suecia", countryEn: "Sweden", category: "visa-free", visaFreeDays: 90, note: "90 días (Schengen)" },
      { country: "Portugal", countryEn: "Portugal", category: "visa-free", visaFreeDays: 90, note: "90 días (Schengen)" },
      { country: "Grecia", countryEn: "Greece", category: "visa-free", visaFreeDays: 90, note: "90 días (Schengen)" },
      { country: "Irlanda", countryEn: "Ireland", category: "visa-free", visaFreeDays: 90, note: "90 días — UE no-Schengen" },
      { country: "Tailandia", countryEn: "Thailand", category: "visa-free", visaFreeDays: 30, note: "30 días sin visa" },
      { country: "Vietnam", countryEn: "Vietnam", category: "evisa", note: "eVisa requerido. Estadía hasta 90 días" },
      { country: "Singapur", countryEn: "Singapore", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa" },
      { country: "Malasia", countryEn: "Malaysia", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa" },
      { country: "Filipinas", countryEn: "Philippines", category: "visa-free", visaFreeDays: 30, note: "30 días sin visa" },
      { country: "Indonesia", countryEn: "Indonesia", category: "visa-free", visaFreeDays: 30, note: "30 días sin visa" },
      { country: "India", countryEn: "India", category: "visa-on-arrival", note: "Visa al llegar o eVisa requerido. Estadía hasta 60 días" },
      { country: "China", countryEn: "China", category: "visa-required", note: "Visa requerido. 15 días sin visa (algunas condiciones)" },
      { country: "Emiratos Árabes", countryEn: "UAE", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa" },
      { country: "Turquía", countryEn: "Turkey", category: "evisa", note: "eVisa requerido. Estadía hasta 90 días" },
      { country: "Egipto", countryEn: "Egypt", category: "visa-on-arrival", note: "Visa al llegar requerido. Estadía hasta 30 días" },
      { country: "Sudáfrica", countryEn: "South Africa", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa" },
      { country: "Brasil", countryEn: "Brazil", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa" },
      { country: "Argentina", countryEn: "Argentina", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa" },
      { country: "Catar", countryEn: "Qatar", category: "visa-free", visaFreeDays: 30, note: "30 días sin visa" },
      { country: "Kuwait", countryEn: "Kuwait", category: "evisa", note: "eVisa requerido" },
      { country: "Arabia Saudita", countryEn: "Saudi Arabia", category: "evisa", note: "eVisa requerido" },
      { country: "Japón", countryEn: "Japan", category: "visa-free", visaFreeDays: 90, note: "90 días sin visa" },
    ],
  },
};
