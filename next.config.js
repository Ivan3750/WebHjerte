/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      // Én kanonisk host: apex -> www (matcher canonical-tags og Search Console)
      {
        source: "/:path*",
        has: [{ type: "host", value: "webhjerte.dk" }],
        destination: "https://www.webhjerte.dk/:path*",
        permanent: true,
      },
      {
        source: "/track",
        destination: "/",
        permanent: true,
      },
      {
        source: "/om-os",
        destination: "/om-mig",
        permanent: true,
      },
      // Fjernede referencesider (skrevet til AI frem for kunder)
      { source: "/om-webhjerte", destination: "/om-mig", permanent: true },
      { source: "/ordliste", destination: "/", permanent: true },
      // FAQ-siden er fjernet
      { source: "/ofte-stillede-spoergsmaal", destination: "/", permanent: true },
      // Siden "Freelancer eller webbureau?" er fjernet – sammenligningen ligger nu på Om mig
      { source: "/freelancer-vs-bureau", destination: "/om-mig", permanent: true },
      // Sider der konkurrerede med stærkere sider er slået sammen (301 bevarer evt. placeringer)
      { source: "/webbureau-jylland", destination: "/webbureau-midtjylland", permanent: true },
      { source: "/wordpress-horsens", destination: "/wordpress-hjemmeside", permanent: true },
      { source: "/digitalt-bureau-horsens", destination: "/", permanent: true },
      { source: "/geo-ai-synlighed", destination: "/ai-seo", permanent: true },
      { source: "/ai-loesninger", destination: "/ai-seo", permanent: true },
      // Guides ligger under /blog/
      { source: "/webstrategi", destination: "/blog/webstrategi", permanent: true },
      { source: "/baeredygtigt-webdesign", destination: "/blog/baeredygtigt-webdesign", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/:file(.*\\.(?:png|jpg|jpeg|svg|ico|webp|avif|woff2))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
