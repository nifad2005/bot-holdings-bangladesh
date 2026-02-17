import { NextResponse } from "next/server";

const DOWNLOAD_URL =
  "https://github.com/nifad2005/BOT-App-Store/releases/download/BJM-v1.0/app-debug.apk";

export function GET() {
  return NextResponse.redirect(DOWNLOAD_URL, 302);
}
