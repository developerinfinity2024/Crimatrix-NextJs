import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/police/settings",
  "/police/hotels",
  "/police/logs",
  "/police",
];
export default function middleware(req: NextRequest) {
  const cookies = req.cookies;
  const token = req.cookies.get("accessToken");
  // Access the 'accessToken' property
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
