/** @type {import('next-sitemap').IConfig} */
export default {
  // Samme host som canonical-tags (www)
  siteUrl: 'https://www.webhjerte.dk',
  generateRobotsTxt: true,

  sitemapSize: 5000,

  changefreq: 'monthly',
  priority: 0.6,

  exclude: [
    '/404',
    '/500',
    '/api/*',
    '/ny-professionel-hjemmeside',
    '/gratis-analyse',
    '/privacy',
    '/terms',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ må IKKE blokeres: Google skal kunne hente CSS/JS for at rendere siden
        disallow: ['/api/'],
      },
    ],
  },

  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/webdesign-horsens': 0.9,
      '/seo-horsens': 0.9,
      '/webbureau-midtjylland': 0.9,
      '/services': 0.9,
      '/hjemmeside-pris': 0.8,
      '/om-mig': 0.8,
      '/portefolje': 0.8,
      '/kontakt': 0.8,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
