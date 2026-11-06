import { NextResponse } from "next/server";

// Simpel in-memory rate limit, så Google API-nøglen ikke kan misbruges til masseopslag
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

export async function GET(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "For mange forespørgsler. Prøv igen senere." }, { status: 429 });
  }

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

  const host = parsed.hostname.toLowerCase();
  if (
    host === "localhost" ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    /^(127\.|10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.|0\.)/.test(host) ||
    host === "[::1]"
  ) {
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
