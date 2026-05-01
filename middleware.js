import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // protect product details page
  if (pathname.startsWith("/products/")) {
    //cookie check (better-auth session)
    const session =
      req.cookies.get("better-auth.session_token")?.value;

    // not logged in
    if (!session) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  return NextResponse.next();
}

// 🔥 apply only to product routes
export const config = {
  matcher: ["/products/:path*"],
};