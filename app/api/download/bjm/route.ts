import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DOWNLOAD_URL =
  "https://github.com/nifad2005/BOT-App-Store/releases/download/BJM-v1.0/app-debug.apk";
const FILENAME = "BJM.apk";

export async function GET(request: Request) {
  const upstreamHeaders: HeadersInit = {
    "User-Agent": "BOT-Holdings-Downloader",
  };

  const range = request.headers.get("range");
  if (range) upstreamHeaders["Range"] = range;

  const upstream = await fetch(DOWNLOAD_URL, {
    method: "GET",
    redirect: "follow",
    headers: upstreamHeaders,
  });

  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      { error: "Download unavailable" },
      { status: upstream.status || 502 },
    );
  }

  const headers = new Headers();
  headers.set("Content-Type", "application/vnd.android.package-archive");
  headers.set("Content-Disposition", `attachment; filename="${FILENAME}"`);
  headers.set("Cache-Control", "no-store");
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("X-Content-Type-Options", "nosniff");

  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers.set("Content-Length", contentLength);

  const acceptRanges = upstream.headers.get("accept-ranges");
  if (acceptRanges) headers.set("Accept-Ranges", acceptRanges);

  const contentRange = upstream.headers.get("content-range");
  if (contentRange) headers.set("Content-Range", contentRange);

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers,
  });
}
