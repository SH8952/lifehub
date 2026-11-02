import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

const DEV_EXCLUDE_COOKIE = "dev_exclude";
const DEV_EXCLUDE_TOKEN = process.env.DEV_EXCLUDE_TOKEN;

/**
 * Wraps next-intl's locale-routing middleware to also set a developer-
 * exclusion cookie: visiting the site once with "?dev=<DEV_EXCLUDE_TOKEN>"
 * sets a ~1 year cookie that the visitor counter API
 * (src/app/api/visitor-count/route.ts) checks to skip counting this visit
 * and to reveal the bot-only counts. Cookie-based (not IP-based) so it
 * works from any network, including a mobile bookmark away from home.
 */
export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  if (
    DEV_EXCLUDE_TOKEN &&
    request.nextUrl.searchParams.get("dev") === DEV_EXCLUDE_TOKEN
  ) {
    response.cookies.set(DEV_EXCLUDE_COOKIE, "1", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      httpOnly: false,
    });
  }

  return response;
}

export const config = {
  // Next-intl should only run on pages, never on API routes — it would
  // otherwise 307-redirect bare "/api/..." calls (e.g. /api/visitor-count)
  // to a locale-prefixed path like "/ko/api/visitor-count" that doesn't
  // exist, breaking the client fetch. Matches the pattern already used by
  // the sibling ExifLens/FlyDroneMap/firelic projects.
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
