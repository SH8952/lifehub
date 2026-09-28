import { NextResponse, type NextRequest } from "next/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let locale: string | null = null;

  for (const prefix of routing.locales) {
    if (pathname.startsWith(`/${prefix}/`) || pathname === `/${prefix}`) {
      locale = prefix;
      break;
    }
  }

  if (!locale) {
    locale = routing.defaultLocale;
  }

  const response = NextResponse.next();
  response.headers.set("x-next-intl-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
