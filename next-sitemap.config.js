/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://webhjerte.dk',
  generateRobotsTxt: true,

  sitemapSize: 5000,

  changefreq: 'weekly',
  priority: 0.7,

  exclude: [
    '/404',
    '/500',
    '/api/*',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
    ],
    additionalSitemaps: [],
  },

  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/om-mig': 0.8,
      '/portefolje': 0.8,
      '/kontakt': 0.8,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: priorities[path] ?? 0.6,
    };
  },
};