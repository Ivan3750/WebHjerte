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
        source: "/om-os",
        destination: "/om-mig",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
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
