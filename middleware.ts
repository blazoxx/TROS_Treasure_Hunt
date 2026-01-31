import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isMaintenanceMode = () =>
  process.env.MAINTENANCE_MODE === "1" ||
  process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1";

export function middleware(request: NextRequest) {
  if (!isMaintenanceMode()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
