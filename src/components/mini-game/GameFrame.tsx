// 미니 게임 본체를 보여주는 iframe.
// 게임은 public/games/<slug>.html 의 자체 완결형 정적 페이지이고, ?lang= 으로 표시 언어를 받는다.
// 같은 출처(same-origin)라 X-Frame-Options: SAMEORIGIN 헤더와 충돌하지 않는다.
// 높이는 화면(dvh)에 맞추되 위아래에 사이트 머리글·뒤로가기가 보이도록 여유를 둔다.
export default function GameFrame({
  slug,
  locale,
  title,
}: {
  slug: string;
  locale: string;
  title: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[440px]">
      <iframe
        src={`/games/${slug}.html?lang=${locale}`}
        title={title}
        className="block w-full rounded-xl border bg-card"
        style={{ height: "min(calc(100dvh - 150px), 760px)", minHeight: 520 }}
        allow="autoplay; clipboard-write; web-share"
        scrolling="no"
      />
    </div>
  );
}
