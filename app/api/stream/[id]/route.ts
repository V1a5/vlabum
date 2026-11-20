import { NextRequest, NextResponse } from "next/server";

// Sesuaikan nama file di sebelah kanan dengan nama file yang kamu upload ke Supabase
const TRACK_FILES: Record<string, string> = {
  "indahnya-ibukota": "indahnya ibu kota.mp3",
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const fileName = TRACK_FILES[id];

  if (!fileName) {
    return new NextResponse("Track not found", { status: 404 });
  }

  // Tolak jika link dibuka langsung di tab baru / downloader
  const referer = req.headers.get("referer") || "";
  const host = req.headers.get("host") || "";
  const fetchDest = req.headers.get("sec-fetch-dest") || "";

  if (!host || !referer.includes(host) || (fetchDest !== "audio" && fetchDest !== "empty")) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return new NextResponse("Missing storage config", { status: 500 });
  }

  const storageUrl = `${supabaseUrl}/storage/v1/object/authenticated/tracks/${encodeURIComponent(fileName)}`;
  const rangeHeader = req.headers.get("range");

  const upstreamRes = await fetch(storageUrl, {
    headers: {
      Authorization: `Bearer ${serviceKey}`,
      ...(rangeHeader ? { Range: rangeHeader } : {}),
    },
    cache: "no-store",
  });

  if (!upstreamRes.ok && upstreamRes.status !== 206) {
    return new NextResponse("Error streaming audio", { status: upstreamRes.status });
  }

  const headers = new Headers();
  headers.set("Content-Type", upstreamRes.headers.get("content-type") || "audio/mpeg");
  headers.set("Content-Disposition", "inline");
  headers.set("Cache-Control", "no-store");
  headers.set("Accept-Ranges", "bytes");

  const contentLength = upstreamRes.headers.get("content-length");
  if (contentLength) headers.set("Content-Length", contentLength);

  const contentRange = upstreamRes.headers.get("content-range");
  if (contentRange) headers.set("Content-Range", contentRange);

  return new NextResponse(upstreamRes.body, {
    status: upstreamRes.status,
    headers,
  });
}