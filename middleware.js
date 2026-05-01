import { NextResponse } from "next/server";

export function middleware(req) {
  const isLoggedIn = false; 

  if (req.nextUrl.pathname.startsWith("/products/")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}