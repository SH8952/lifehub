import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { categories } from "@/app/[locale]/page";

/**
 * 사이트 전용 404 화면 — 헤더·푸터는 [locale]/layout이 그대로 감싼다.
 * notFound()와 캐치올 라우트([...rest])가 모두 이 화면을 쓴다.
 * 응답 상태 코드는 Next.js가 404로 유지한다.
 */
const NAME_KEY = {
  ko: "name",
  en: "nameEn",
  ja: "nameJa",
  es: "nameEs",
} as const;

export default async function LocaleNotFound() {
  const t = await getTranslations("NotFound");
  const locale = await getLocale();
  const key = NAME_KEY[locale as keyof typeof NAME_KEY] ?? "name";

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-4 py-20 text-center">
      <p className="text-sm font-medium tracking-widest text-muted-foreground">
        404
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t("title")}
      </h1>
      <p className="max-w-md text-muted-foreground">{t("description")}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          {t("home")}
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/category/${c.id}`}
            className={buttonVariants({ variant: "outline" })}
          >
            {c[key]}
          </Link>
        ))}
      </div>
    </div>
  );
}
