/** @type {import('next-sitemap').IConfig} */

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "DuckAssistBot",
  "MistralAI-User",
];

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
    '/opengraph-image',
    '/ny-professionel-hjemmeside',
    '/gratis-analyse',
    '/privacy',
    '/terms',
    // Kunde-cases: holdes ude af Google, så kundernes brandnavne ikke giver WebHjerte-hits
    '/portefolje/loenbaeks-koereskole',
    '/portefolje/hireon',
    '/portefolje/veka-center',
    '/portefolje/monolit',
    '/portefolje/renserv',
    '/portefolje/improve-physio',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ må IKKE blokeres: Google skal kunne hente CSS/JS for at rendere siden
        disallow: ['/api/'],
      },
      // AI-assistenter og AI-søgning er velkomne: indholdet er skrevet til at blive citeret
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: ['/api/'] })),
    ],
    additionalSitemaps: [],
  },

  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/webdesign-horsens': 0.9,
      '/seo-horsens': 0.9,
      '/webbureau-midtjylland': 0.9,
      '/webbureau-jylland': 0.9,
      '/services': 0.9,
      '/ai-seo': 0.9,
      '/geo-ai-synlighed': 0.9,
      '/ai-loesninger': 0.9,
      '/alle-typer-hjemmesider': 0.8,
      '/shopify-hjemmeside': 0.8,
      '/ai-chatbot-til-hjemmeside': 0.8,
      '/hjemmeside-pris': 0.8,
      '/om-mig': 0.8,
      '/portefolje': 0.8,
      '/kontakt': 0.8,
      '/ofte-stillede-spoergsmaal': 0.8,
      '/blog': 0.7,
      '/partner': 0.6,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
