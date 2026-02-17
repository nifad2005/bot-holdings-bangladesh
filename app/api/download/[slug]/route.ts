import { NextResponse } from "next/server";
import { fetchAppBySlug } from "../../../apps-data";

export const runtime = "nodejs";

function isAllowedUpstream(url: URL) {
  const allowedHosts = new Set([
    "github.com",
    "raw.githubusercontent.com",
    "objects.githubusercontent.com",
  ]);
  return url.protocol === "https:" && allowedHosts.has(url.hostname);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const app = await fetchAppBySlug(slug);
  if (!app) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const upstreamUrlString = app.github_release_url;
  if (!upstreamUrlString) {
    return NextResponse.json(
      { error: "No download configured" },
      { status: 400 },
    );
  }

  let upstreamUrl: URL;
  try {
    upstreamUrl = new URL(upstreamUrlString);
  } catch {
    return NextResponse.json({ error: "Invalid download URL" }, { status: 400 });
  }

  if (!isAllowedUpstream(upstreamUrl)) {
    return NextResponse.json({ error: "Blocked upstream host" }, { status: 400 });
  }

  const upstreamHeaders: HeadersInit = { "User-Agent": "BOT-Holdings-Downloader" };
  const range = request.headers.get("range");
  if (range) upstreamHeaders["Range"] = range;

  const upstream = await fetch(upstreamUrl.toString(), {
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
  headers.set(
    "Content-Disposition",
    `attachment; filename="${app.slug}.apk"`,
  );
  headers.set("Cache-Control", "no-store");
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("X-Content-Type-Options", "nosniff");

  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers.set("Content-Length", contentLength);

  const acceptRanges = upstream.headers.get("accept-ranges");
  if (acceptRanges) headers.set("Accept-Ranges", acceptRanges);

  const contentRange = upstream.headers.get("content-range");
  if (contentRange) headers.set("Content-Range", contentRange);

  return new NextResponse(upstream.body, { status: upstream.status, headers });
}

