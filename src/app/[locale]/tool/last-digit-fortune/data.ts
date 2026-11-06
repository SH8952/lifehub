export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  numberLabel: string;
  checkBtn: string;
  fortuneLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "끝자리 숫자로 보는 오늘의 운세",
    subtitle: "좋아하는 숫자나 전화번호 끝자리를 입력하면 오늘의 운세를 재미로 알려드립니다.",
    numberLabel: "숫자 입력 (0~9)",
    checkBtn: "운세 확인하기",
    fortuneLabel: "오늘의 운세",
    howTitle: "사용 방법",
    howSteps: [
      "0부터 9까지 중 원하는 숫자 하나를 선택합니다.",
      "\"운세 확인하기\" 버튼을 누릅니다.",
      "선택한 숫자와 오늘 날짜를 반영한 운세 메시지가 표시됩니다.",
      "결과가 마음에 들지 않으면 다른 숫자를 입력해 다시 확인해볼 수 있으며, 횟수 제한은 없습니다.",
    ],
    faq: [
      { q: "어떤 숫자를 입력해야 하나요?", a: "전화번호 끝자리, 좋아하는 숫자, 생일의 일(day) 등 어떤 숫자든 자유롭게 입력할 수 있습니다." },
      { q: "매일 다른 결과가 나오나요?", a: "네, 오늘 날짜가 함께 반영되므로 같은 숫자라도 날마다 다른 운세 메시지를 볼 수 있습니다." },
      { q: "같은 숫자를 매일 넣으면 매번 다른 결과가 나오나요?", a: "네, 오늘 날짜를 함께 계산에 반영하기 때문에 어제와 오늘 같은 숫자를 입력해도 다른 운세 메시지가 나올 수 있습니다." },
      { q: "친구들과 다른 숫자로 비교해보는 용도로도 쓸 수 있나요?", a: "네, 가족이나 친구들과 각자 좋아하는 숫자를 넣고 결과를 비교하며 가볍게 즐기는 용도로 적합합니다." },
      { q: "입력한 숫자가 저장되거나 어딘가로 전송되나요?", a: "아니요, 입력한 숫자는 브라우저 안에서만 사용되며 서버로 전송되거나 저장되지 않습니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 과학적·점술적 근거가 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Last Digit Daily Fortune",
    subtitle: "Enter a favorite number or your phone's last digit to get a fun fortune for today.",
    numberLabel: "Enter a Digit (0-9)",
    checkBtn: "Check My Fortune",
    fortuneLabel: "Today's Fortune",
    howTitle: "How to Use",
    howSteps: [
      "Choose any digit from 0 to 9.",
      "Click \"Check My Fortune.\"",
      "A fortune message reflecting your digit and today's date appears.",
      "If you don't like the result, try a different digit — there's no limit on how many times you can check.",
    ],
    faq: [
      { q: "What number should I enter?", a: "Any number you like — the last digit of your phone number, a favorite number, your birth day, etc." },
      { q: "Does the result change daily?", a: "Yes, today's date is factored in, so the same digit can give a different message on different days." },
      { q: "If I enter the same digit every day, will I get a different result each time?", a: "Yes, today's date is factored into the calculation, so the same digit can produce a different fortune message on different days." },
      { q: "Can I use this to compare results with friends?", a: "Yes, it's a fun way to have friends or family each enter their favorite digit and compare the messages they get." },
      { q: "Is the digit I enter saved or sent anywhere?", a: "No, the digit you enter is only used inside your browser and is never sent to or stored on a server." },
    ],
    disclaimer: "This content is for entertainment purposes only and has no scientific or divinatory basis.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "末尾の数字で見る今日の運勢",
    subtitle: "好きな数字や電話番号の末尾を入力すると今日の運勢を楽しくお届けします。",
    numberLabel: "数字を入力（0〜9）",
    checkBtn: "運勢を確認する",
    fortuneLabel: "今日の運勢",
    howTitle: "使用方法",
    howSteps: [
      "0から9の中から好きな数字を1つ選択します。",
      "「運勢を確認する」ボタンを押します。",
      "選んだ数字と今日の日付を反映した運勢メッセージが表示されます。",
      "結果が気に入らなければ別の数字を入力して再確認でき、回数に制限はありません。",
    ],
    faq: [
      { q: "どの数字を入力すればいいですか？", a: "電話番号の末尾、好きな数字、誕生日の日など、どんな数字でも自由に入力できます。" },
      { q: "毎日違う結果が出ますか？", a: "はい、今日の日付も反映されるため、同じ数字でも日によって異なる運勢メッセージが表示されます。" },
      { q: "同じ数字を毎日入力すると毎回違う結果が出ますか？", a: "はい、今日の日付も計算に反映されるため、昨日と今日で同じ数字を入力しても異なる運勢メッセージが出ることがあります。" },
      { q: "友達と違う数字で比較して楽しむこともできますか？", a: "はい、家族や友達それぞれが好きな数字を入力して結果を比較しながら気軽に楽しむのに向いています。" },
      { q: "入力した数字は保存されたりどこかに送信されたりしますか？", a: "いいえ、入力した数字はブラウザ内でのみ使用され、サーバーに送信・保存されることはありません。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、科学的・占術的根拠はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Fortuna Diaria por el Último Dígito",
    subtitle: "Introduce un número favorito o el último dígito de tu teléfono para una fortuna divertida.",
    numberLabel: "Introduce un Dígito (0-9)",
    checkBtn: "Ver mi Fortuna",
    fortuneLabel: "Fortuna de Hoy",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige cualquier dígito del 0 al 9.",
      "Haz clic en \"Ver mi Fortuna.\"",
      "Aparece un mensaje de fortuna que refleja tu dígito y la fecha de hoy.",
      "Si no te gusta el resultado, prueba con otro dígito — no hay límite de veces que puedes comprobarlo.",
    ],
    faq: [
      { q: "¿Qué número debo introducir?", a: "Cualquiera que quieras: el último dígito de tu teléfono, un número favorito, el día de tu cumpleaños, etc." },
      { q: "¿El resultado cambia a diario?", a: "Sí, se tiene en cuenta la fecha de hoy, así que el mismo dígito puede dar un mensaje distinto en días diferentes." },
      { q: "Si introduzco el mismo dígito cada día, ¿obtendré un resultado diferente cada vez?", a: "Sí, la fecha de hoy se incluye en el cálculo, así que el mismo dígito puede dar un mensaje de fortuna distinto en días diferentes." },
      { q: "¿Puedo usarlo para comparar resultados con amigos?", a: "Sí, es una forma divertida de que amigos o familiares introduzcan su número favorito y comparen los mensajes que reciben." },
      { q: "¿El dígito que introduzco se guarda o se envía a algún lugar?", a: "No, el dígito que introduces solo se usa dentro de tu navegador y nunca se envía ni se guarda en un servidor." },
    ],
    disclaimer: "Este contenido es solo para entretenimiento y no tiene base científica ni adivinatoria.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
