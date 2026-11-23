import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

  // Tetap cegah akses langsung dari tab baru atau domain luar
  const referer = req.headers.get("referer");
  const host = req.headers.get("host") || "";
  const fetchDest = req.headers.get("sec-fetch-dest");

  if (fetchDest === "document") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (referer && host && !referer.includes(host)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return new NextResponse("Missing storage config", { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  // Buat link sementara yang hanya berlaku 15 menit (900 detik)
  const { data, error } = await supabase.storage
    .from("tracks")
    .createSignedUrl(fileName, 900);

  if (error || !data?.signedUrl) {
    return new NextResponse("Error generating stream URL", { status: 500 });
  }

  // Arahkan pemutar audio langsung ke CDN Supabase (0 MB bandwidth Vercel)
  return NextResponse.redirect(data.signedUrl, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}