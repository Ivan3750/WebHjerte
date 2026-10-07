import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL mangler" }, { status: 400 });
  }

  // Kun almindelige http(s)-adresser — API-nøglen må ikke kunne misbruges til andet
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return NextResponse.json({ error: "Ugyldig URL" }, { status: 400 });
  }
  if (!["http:", "https:"].includes(parsed.protocol)) {
    return NextResponse.json({ error: "Ugyldig URL" }, { status: 400 });
  }

  if (!process.env.GOOGLE_PAGESPEED_KEY) {
    return NextResponse.json({ error: "PageSpeed er ikke konfigureret" }, { status: 503 });
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        parsed.toString(),
      )}&key=${process.env.GOOGLE_PAGESPEED_KEY}&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO`,
      { signal: AbortSignal.timeout(60000) },
    );
    const data = await res.json();
    return NextResponse.json(data, { status: res.ok ? 200 : res.status });
  } catch (error) {
    console.error("PageSpeed error:", error);
    return NextResponse.json({ error: "PageSpeed-tjek fejlede" }, { status: 502 });
  }
}
