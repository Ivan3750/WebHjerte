"use client";

import { useState } from "react";
import axios from "axios";

const SEO = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);

  const API_KEY = "AIzaSyC5P33iO7gB-4Dt5eKfUsOSxG1j8k6hCZE";

  const getColor = (score) => {
    if (score >= 90) return "border-green-500 text-green-500";
    if (score >= 50) return "border-yellow-500 text-yellow-500";
    return "border-red-500 text-red-500";
  };

  const checkSEO = async () => {
    if (!url) return alert("Введіть URL");

    let formattedUrl = url.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = "https://" + formattedUrl;
    }

    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          formattedUrl
        )}&key=${API_KEY}&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO`
      );

      const data = res.data.lighthouseResult;

      const getScore = (key) =>
        Math.round((data.categories[key]?.score || 0) * 100);

      setMetrics({
        performance: getScore("performance"),
        accessibility: getScore("accessibility"),
        bestPractices: getScore("best-practices"),
        seo: getScore("seo"),
        lcp: data.audits["largest-contentful-paint"]?.displayValue || "N/A",
        fid: data.audits["max-potential-fid"]?.displayValue || "N/A",
      });
    } catch (err) {
      console.error(err);
      console.log("Помилка при отриманні SEO даних.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen  px-5 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Gratis Web tjek</h2>
        <p className="text-center text-gray-600 mb-6">
          Professionelt Web-tjek gratis af din hjemmeside
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          <input
            type="text"
            className="input p-2 rounded border border-gray-300 md:w-[500px] min-w-[200px] w-full"
            placeholder="Indsæt din URL (f.eks. webhjerte.dk)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="btn p-2 px-8 rounded-2xl bg-blue-500 text-white"
            onClick={checkSEO}
            disabled={loading}
          >
            {loading ? "Analyserer..." : "Tjek"}
          </button>
        </div>

        {!metrics && (
          <div className="mt-20 text-center text-gray-500 text-lg">
            Indtast en URL for at analysere din side .
          </div>
        )}

        {metrics && (
          <div className="mt-12">
            <div className="flex flex-wrap gap-5 justify-center">
              {[
                { label: "Ydeevne", value: metrics.performance },
                { label: "Tilgængelighed", value: metrics.accessibility },
                { label: "Bedste Praksis", value: metrics.bestPractices },
                { label: "SEO", value: metrics.seo },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`w-[170px] h-[170px] rounded-full text-center text-[35px] font-bold flex items-center justify-center flex-col border-[10px] ${getColor(
                    item.value
                  )}`}
                >
                  <p>{item.value}</p>
                  <p className="text-[11px]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#252727] text-white my-10 p-6 rounded-2xl max-w-xl mx-auto">
              <p className="text-sm mb-1">
                <span className="font-bold">LCP (Largest Contentful Paint):</span>{" "}
                {metrics.lcp}
              </p>
              <p className="text-sm mb-4">
                <span className="font-bold">FID (Max Potential Delay):</span>{" "}
                {metrics.fid}
              </p>

{(() => {
  const avgScore = Math.round(
    (metrics.performance +
      metrics.accessibility +
      metrics.bestPractices +
      metrics.seo) /
      4
  );

  if (avgScore < 90) {
    return (
      <div className="bg-yellow-400 text-black px-6 py-4 rounded-xl text-center font-semibold text-lg shadow-lg">
        Vi kan forbedre din hjemmeside til <span className="font-bold">100</span> –{" "}
        <span className="underline">389 kr</span>!
        <div className="mt-2">
          <Link href="/kontakt">
          <button className="mt-2 bg-black text-yellow-400 px-4 py-2 rounded-full hover:scale-105 transition">
            Bestil nu
          </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-green-500 text-white px-6 py-4 rounded-xl text-center font-semibold text-lg shadow-lg">
        Din hjemmeside klarer sig fantastisk! 
      </div>
    );
  }
})()}

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SEO;
