import { NextResponse } from "next/server";

const DRIVE_FILE_ID = "1kE3sr8SNy8o71uqIXm7H0SNlOwuAFWrA";

export function GET() {
  const url = new URL("https://drive.google.com/uc");
  url.searchParams.set("export", "download");
  url.searchParams.set("id", DRIVE_FILE_ID);

  return NextResponse.redirect(url.toString(), 302);
}

