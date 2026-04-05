"use client";

import { useState, useCallback, useMemo } from "react";
import axios from "axios";
import Link from "next/link";

const API_KEY = "AIzaSyC5P33iO7gB-4Dt5eKfUsOSxG1j8k6hCZE";

const scoreColor = (score) => {
  if (score >= 90) return { ring: "#22c55e", text: "#22c55e", bg: "#0d2010" };
  if (score >= 50) return { ring: "#eab308", text: "#eab308", bg: "#1e1800" };
  return { ring: "#ef4444", text: "#ef4444", bg: "#1e0808" };
};

const metrics_config = [
  { key: "performance", label: "Ydeevne" },
  { key: "accessibility", label: "Tilgængelighed" },
  { key: "bestPractices", label: "Bedste praksis" },
  { key: "seo", label: "SEO" },
];

const CircleScore = ({ value, label }) => {
  const { ring, text } = scoreColor(value);
  const r = 44;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-[108px] h-[108px]">
        <svg width="108" height="108" viewBox="0 0 108 108" fill="none">
          <circle cx="54" cy="54" r={r} stroke="#2a2d2d" strokeWidth="8" />
          <circle
            cx="54"
            cy="54"
            r={r}
            stroke={ring}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
            transform="rotate(-90 54 54)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[22px] font-medium" style={{ color: text }}>
            {value}
          </span>
        </div>
      </div>
      <span className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a]">
        {label}
      </span>
    </div>
  );
};

const MetricPill = ({ label, value }) => (
  <div className="flex items-center justify-between py-3 border-b border-[#2a2d2d] last:border-0">
    <span className="text-[13px] text-[#5a5a5a]">{label}</span>
    <span className="text-[13px] font-medium text-[#e0e0e0]">{value ?? "-"}</span>
  </div>
);

export default function SEO() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState("");

  const checkSEO = useCallback(async () => {
    const trimmed = url.trim();
    if (!trimmed) return setError("Indtast en URL");

    const formattedUrl = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : "https://" + trimmed;

    setLoading(true);
    setError("");
    setMetrics(null);

    try {
      const res = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          formattedUrl
        )}&key=${API_KEY}&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO`
      );

      const lh = res.data.lighthouseResult;
      const score = (key) => Math.round((lh.categories[key]?.score ?? 0) * 100);

      setMetrics({
        performance: score("performance"),
        accessibility: score("accessibility"),
        bestPractices: score("best-practices"),
        seo: score("seo"),
        lcp: lh.audits["largest-contentful-paint"]?.displayValue ?? null,
        inp: lh.audits["interaction-to-next-paint"]?.displayValue ?? null,
        fcp: lh.audits["first-contentful-paint"]?.displayValue ?? null,
        tbt: lh.audits["total-blocking-time"]?.displayValue ?? null,
      });
    } catch {
      setError("Noget gik galt - kontroller URL'en og prøv igen");
    } finally {
      setLoading(false);
    }
  }, [url]);

  const avgScore = useMemo(() => {
    if (!metrics) return 0;
    const { performance, accessibility, bestPractices, seo } = metrics;
    return Math.round((performance + accessibility + bestPractices + seo) / 4);
  }, [metrics]);

  const isGood = avgScore >= 90;

  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Gratis værktøj
        </p>
        <h1 className="title text-white !leading-tight mb-2">
          Tjek din hjemmesides SEO-score
        </h1>
        <p className="text-[14px] text-[#5a5a5a] mb-10 max-w-lg">
          Indtast din URL og få en analyse af ydeevne, tilgængelighed og SEO -
          på under 30 sekunder.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mb-4">
          <input
            className="flex-1 bg-[#1c1e1e] border border-[#2a2d2d] focus:border-[#00a8e8] rounded-xl px-4 py-3 text-[13px] text-[#e0e0e0] placeholder-[#444] outline-none transition-colors"
            placeholder="webhjerte.dk"
            value={url}
            disabled={loading}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkSEO()}
          />
          <button
            onClick={checkSEO}
            disabled={loading}
            className="bg-[#00a8e8] hover:opacity-85 disabled:opacity-50 transition-opacity text-white text-[13px] font-medium px-6 py-3 rounded-xl whitespace-nowrap"
          >
            {loading ? "Analyserer..." : "Start tjek →"}
          </button>
        </div>

        {error && (
          <p className="text-[13px] text-red-400 mb-6">{error}</p>
        )}

        {loading && (
          <div className="flex items-center gap-3 text-[13px] text-[#5a5a5a] mt-10">
            <span className="w-4 h-4 rounded-full border-2 border-[#00a8e8] border-t-transparent animate-spin" />
            Henter data fra Google PageSpeed...
          </div>
        )}

        {!metrics && !loading && !error && (
          <p className="text-[13px] text-[#3a3d3d] mt-10">
            Ingen data endnu - dit gratis SEO-tjek starter her.
          </p>
        )}

        {metrics && (
          <div className="mt-12 flex flex-col gap-6">
            <div className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-8">
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-8">
                Scores
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {metrics_config.map(({ key, label }) => (
                  <CircleScore key={key} value={metrics[key]} label={label} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-6">
                <p className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-2">
                  Tekniske målinger
                </p>
                <MetricPill label="LCP - Largest Contentful Paint" value={metrics.lcp} />
                <MetricPill label="INP - Interaction to Next Paint" value={metrics.inp} />
                <MetricPill label="FCP - First Contentful Paint" value={metrics.fcp} />
                <MetricPill label="TBT - Total Blocking Time" value={metrics.tbt} />
              </div>

              <div
                className="rounded-2xl p-6 flex flex-col justify-between border"
                style={{
                  background: scoreColor(avgScore).bg,
                  borderColor: scoreColor(avgScore).ring + "33",
                }}
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.08em] mb-3" style={{ color: scoreColor(avgScore).text }}>
                    {isGood ? "Flot resultat" : "Forbedringspotentiale"}
                  </p>
                  <p className="text-[32px] font-medium text-white leading-none mb-1">
                    {avgScore}
                    <span className="text-[16px] text-[#5a5a5a]"> / 100</span>
                  </p>
                  <p className="text-[13px] text-[#5a5a5a] mt-3">
                    {isGood
                      ? "Din hjemmeside performer godt på tværs af alle kategorier."
                      : "Din hjemmeside har områder der kan forbedres - det påvirker din placering i Google."}
                  </p>
                </div>

                {!isGood && (
                  <Link
                    href="/kontakt"
                    className="mt-6 bg-[#00a8e8] hover:opacity-85 transition-opacity text-white text-[13px] font-medium px-5 py-2.5 rounded-xl text-center"
                  >
                    Book gratis gennemgang →
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}