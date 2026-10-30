"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const EMOJI_DATA: [string, string][] = [
  ["😀", "smile happy 웃음 행복"],
  ["😂", "laugh lol 웃음 폭소"],
  ["🥰", "love hearts 사랑 애정"],
  ["😍", "love eyes heart 사랑 반함"],
  ["😎", "cool sunglasses 쿨 선글라스"],
  ["😭", "cry sad tears 울음 슬픔"],
  ["😡", "angry mad 화남 분노"],
  ["😱", "shock scared omg 놀람 충격"],
  ["🥳", "party celebrate 파티 축하"],
  ["😴", "sleep tired 잠 피곤"],
  ["🤔", "think hmm 생각 고민"],
  ["😅", "sweat relief 땀 안도"],
  ["🙄", "eyeroll annoyed 짜증 한심"],
  ["😇", "angel innocent 천사 순수"],
  ["🤯", "mindblown shocked 놀람 폭발"],
  ["🥺", "pleading cute puppy eyes 애원 귀여움"],
  ["😊", "blush happy 미소 수줍음"],
  ["😢", "sad cry 슬픔 눈물"],
  ["❤️", "heart love red 하트 사랑"],
  ["💔", "broken heart sad 이별 상심"],
  ["💕", "hearts love 하트 사랑"],
  ["✨", "sparkle shiny magic 반짝임 빛"],
  ["🔥", "fire hot lit 불 핫 대박"],
  ["⭐", "star 별"],
  ["🎉", "party confetti celebrate 파티 축하"],
  ["🎊", "confetti celebrate 축하 폭죽"],
  ["👍", "thumbsup good yes 좋아요 동의"],
  ["👎", "thumbsdown bad no 싫어요 반대"],
  ["👏", "clap applause 박수 칭찬"],
  ["🙏", "pray thanks please 기도 감사 부탁"],
  ["💪", "muscle strong 근육 힘"],
  ["👋", "wave hello bye 손흔들기 인사"],
  ["✌️", "peace victory 평화 브이"],
  ["👌", "ok okay perfect 오케이 완벽"],
  ["🤝", "handshake deal agree 악수 거래"],
  ["🙌", "raise hands celebrate 만세 환호"],
  ["💯", "hundred perfect score 백점 완벽"],
  ["🎯", "target goal bullseye 목표 과녁"],
  ["💡", "idea lightbulb 아이디어 전구"],
  ["⚡", "lightning fast bolt 번개 빠름"],
  ["💰", "money cash rich 돈 부자"],
  ["💎", "diamond gem valuable 다이아몬드 보석"],
  ["🎁", "gift present 선물"],
  ["📌", "pin important note 압핀 중요"],
  ["✅", "check done complete 체크 완료"],
  ["❌", "cross no wrong 엑스 거절"],
  ["❓", "question mark 물음표 궁금"],
  ["❗", "exclamation warning 느낌표 경고"],
  ["🚀", "rocket launch fast 로켓 발사"],
  ["🌈", "rainbow 무지개"],
  ["☀️", "sun sunny weather 해 날씨"],
  ["🌙", "moon night 달 밤"],
  ["☁️", "cloud weather 구름 날씨"],
  ["🌧️", "rain weather 비 날씨"],
  ["❄️", "snow cold winter 눈 겨울"],
  ["🌸", "flower cherry blossom spring 꽃 봄"],
  ["🍀", "clover luck 클로버 행운"],
  ["🌳", "tree nature 나무 자연"],
  ["🐶", "dog puppy 강아지 개"],
  ["🐱", "cat kitty 고양이"],
  ["🐭", "mouse 쥐"],
  ["🐰", "rabbit bunny 토끼"],
  ["🦊", "fox 여우"],
  ["🐻", "bear 곰"],
  ["🐼", "panda 판다"],
  ["🐨", "koala 코알라"],
  ["🦁", "lion 사자"],
  ["🐸", "frog 개구리"],
  ["🐔", "chicken 닭"],
  ["🐧", "penguin 펭귄"],
  ["🐢", "turtle 거북이"],
  ["🐬", "dolphin 돌고래"],
  ["🦄", "unicorn 유니콘"],
  ["🐝", "bee 벌"],
  ["🦋", "butterfly 나비"],
  ["🍎", "apple fruit 사과"],
  ["🍌", "banana fruit 바나나"],
  ["🍇", "grapes fruit 포도"],
  ["🍓", "strawberry fruit 딸기"],
  ["🍉", "watermelon fruit 수박"],
  ["🍕", "pizza food 피자"],
  ["🍔", "burger food 햄버거"],
  ["🍟", "fries food 감자튀김"],
  ["🍗", "chicken food 치킨"],
  ["🍜", "noodles ramen food 라면 국수"],
  ["🍣", "sushi food 초밥"],
  ["🍰", "cake dessert 케이크"],
  ["🍪", "cookie dessert 쿠키"],
  ["☕", "coffee drink 커피"],
  ["🍺", "beer drink 맥주"],
  ["🍷", "wine drink 와인"],
  ["⚽", "soccer football sport 축구"],
  ["🏀", "basketball sport 농구"],
  ["⚾", "baseball sport 야구"],
  ["🎾", "tennis sport 테니스"],
  ["🏃", "run running exercise 달리기 운동"],
  ["💪", "gym workout exercise 운동 헬스"],
  ["🎮", "game gaming 게임"],
  ["🎸", "guitar music 기타 음악"],
  ["🎵", "music note 음악"],
  ["🎨", "art paint palette 그림 예술"],
  ["📷", "camera photo 카메라 사진"],
  ["🎬", "movie film clapper 영화 촬영"],
  ["📚", "book study read 책 독서 공부"],
  ["✈️", "airplane travel flight 비행기 여행"],
  ["🚗", "car drive 자동차"],
  ["🚲", "bicycle bike 자전거"],
  ["🚄", "train 기차"],
  ["🏠", "house home 집"],
  ["🏢", "building office 빌딩 회사"],
  ["🏖️", "beach vacation 해변 휴가"],
  ["🗻", "mountain fuji 산"],
  ["🌍", "earth world globe 지구 세계"],
  ["💻", "laptop computer 노트북 컴퓨터"],
  ["📱", "phone mobile 폰 휴대폰"],
  ["⌚", "watch time clock 시계"],
  ["💡", "idea bulb 전구 아이디어"],
  ["🔑", "key unlock 열쇠"],
  ["🔒", "lock secure 자물쇠 보안"],
  ["📧", "email mail 이메일"],
  ["📅", "calendar date schedule 달력 일정"],
  ["⏰", "alarm clock time 알람 시계"],
  ["💬", "chat speech bubble 채팅 말풍선"],
  ["🎂", "birthday cake 생일 케이크"],
  ["🎄", "christmas tree 크리스마스"],
  ["🎃", "halloween pumpkin 할로윈 호박"],
  ["🥇", "gold medal first winner 금메달 1등"],
  ["🏆", "trophy win champion 트로피 우승"],
  ["👑", "crown king queen 왕관"],
];

export default function EmojiFinder({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [query, setQuery] = useState("");
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return EMOJI_DATA;
    return EMOJI_DATA.filter(([, keywords]) => keywords.toLowerCase().includes(q));
  }, [query]);

  const copyEmoji = (emoji: string) => {
    navigator.clipboard.writeText(emoji);
    setCopiedEmoji(emoji);
    setTimeout(() => setCopiedEmoji(null), 1200);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.subtitle,
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={d.searchPlaceholder}
            className="w-full rounded-md border px-4 py-3 text-base"
          />

          <p className="text-sm text-muted-foreground">
            {filtered.length} {d.resultCount}
          </p>

          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">{d.noResults}</p>
          ) : (
            <div className="grid grid-cols-6 gap-2 sm:grid-cols-8">
              {filtered.map(([emoji]) => (
                <button
                  key={emoji}
                  onClick={() => copyEmoji(emoji)}
                  className="relative flex aspect-square items-center justify-center rounded-lg border text-3xl hover:bg-muted"
                  title={emoji}
                >
                  {emoji}
                  {copiedEmoji === emoji && (
                    <span className="absolute -top-6 rounded bg-indigo-600 px-2 py-0.5 text-xs text-white">
                      {d.copied}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.howTitle}</h2>
        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
          {d.howSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {faq.q}
                </p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
