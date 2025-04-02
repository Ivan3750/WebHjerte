/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webhjerte.dk", // ваш домен для зображень
      },
    ],
  },
  reactStrictMode: true,
  crossOrigin: "anonymous",

  // Переписування URL
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.adzuna.com/v1/api/jobs/us/search/1/:path*",
      },
    ];
  },

  // Налаштування заголовків безпеки та CORS
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'nonce-randomValue' 'strict-dynamic' https://www.webhjerte.dk;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self' data:;
              connect-src 'self' https:;
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
            `.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "Access-Control-Allow-Origin", 
            value: "*" // Або визначте конкретні домени
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization"
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true"
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
