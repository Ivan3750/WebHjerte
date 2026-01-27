"use client";

import { useState, useCallback, useMemo } from "react";
import axios from "axios";
import Link from "next/link";
import Button from "../Button";

export default function SEO() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState("");

  const getColor = (score) =>
    score >= 90
      ? "border-green-500 text-green-500"
      : score >= 50
      ? "border-yellow-500 text-yellow-500"
      : "border-red-500 text-red-500";

  const checkSEO = useCallback(async () => {
    if (!url) return setError("Indtast en URL");

    let formattedUrl = url.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = "https://" + formattedUrl;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(`/api/pagespeed?url=${formattedUrl}`);
      const data = res.data.lighthouseResult;

      const score = (key) =>
        Math.round((data.categories[key]?.score || 0) * 100);

      setMetrics({
        performance: score("performance"),
        accessibility: score("accessibility"),
        bestPractices: score("best-practices"),
        seo: score("seo"),
        lcp: data.audits["largest-contentful-paint"]?.displayValue,
        inp: data.audits["interaction-to-next-paint"]?.displayValue,
      });
    } catch {
      setError("Noget gik galt – prøv igen");
    } finally {
      setLoading(false);
    }
  }, [url]);

  const avgScore = useMemo(() => {
    if (!metrics) return 0;
    const { performance, accessibility, bestPractices, seo } = metrics;
    return Math.round((performance + accessibility + bestPractices + seo) / 4);
  }, [metrics]);

  return (
    <section className="min-h-screen px-5 py-10">
      <div className="max-w-5xl mx-auto text-center">

        <div className="flex flex-wrap gap-2 justify-center">
          <input
            className="input w-[700px] "
            placeholder="Skriv din hjemmesides URL her (f.eks. webhjerte.dk)"
            value={url}
            disabled={loading}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkSEO()}
          />
         
          <Button onClick={checkSEO} name={loading ? "Analyserer..." : "Start tjek"}> </Button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {!metrics && !loading && (
          <p className="mt-16 text-gray-400">
            Ingen data endnu – dit gratis SEO-tjek starter her
          </p>
        )}

        {metrics && (
          <>
            <div className="flex flex-wrap gap-5 justify-center mt-12">
              {[
                ["Ydeevne", metrics.performance],
                ["Tilgængelighed", metrics.accessibility],
                ["Bedste praksis", metrics.bestPractices],
                ["SEO", metrics.seo],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className={`w-[160px] h-[160px] border-[10px] rounded-full flex flex-col items-center justify-center text-3xl font-bold ${getColor(
                    value
                  )}`}
                >
                  {value}
                  <span className="text-xs uppercase">{label}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#252727] text-white p-6 rounded-xl max-w-xl mx-auto mt-10">
              <p><b>LCP:</b> {metrics.lcp}</p>
              <p className="mb-6"><b>INP:</b> {metrics.inp}</p>

              {avgScore < 90 ? (
                <div className="bg-yellow-400 text-black p-5 rounded-xl">
                  Din hjemmeside har forbedringspotentiale
                  <Link href="/kontakt">
                    <button className="mt-4 bg-black text-yellow-400 px-6 py-2 rounded-full">
                      Book gratis gennemgang
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="bg-green-500 p-5 rounded-xl">
                  Flot resultat! 
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
