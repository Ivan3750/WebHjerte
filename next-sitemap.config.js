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

import { HIDDEN_PATHS } from './src/app/data/hidden.js';

export default {
  // Samme host som canonical-tags (www)
  siteUrl: 'https://www.webhjerte.dk',
  generateRobotsTxt: true,
  // Ingen automatisk lastmod: en dato, der altid er "i dag", lærer Google at ignorere feltet
  autoLastmod: false,

  sitemapSize: 5000,

  changefreq: 'monthly',
  priority: 0.6,

  exclude: [
    ...HIDDEN_PATHS,
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
      '/seo-horsens': 0.9,
      '/webdesign-horsens': 0.9,
      '/blog/hvad-koster-en-hjemmeside-2026': 0.9,
      '/blog/hvad-koster-en-hjemmeside-om-aaret': 0.7,
      '/blog/hvor-lang-tid-tager-det-at-lave-en-hjemmeside': 0.7,
      '/blog/wordpress-eller-skraeddersyet': 0.7,
      '/webbureau-midtjylland': 0.9,
      '/webbureau-aarhus': 0.8,
      '/webbureau-vejle': 0.8,
      '/services': 0.9,
      '/ai-seo': 0.9,
      '/alle-typer-hjemmesider': 0.8,
      '/shopify-hjemmeside': 0.8,
      '/ai-chatbot-til-hjemmeside': 0.8,
      '/webshop-hjemmeside': 0.8,
      '/wordpress-hjemmeside': 0.8,
      '/om-mig': 0.8,
      '/portefolje': 0.8,
      '/kontakt': 0.8,
      '/blog': 0.7,
      '/black-friday-hjemmeside': 0.8,
      '/partner': 0.6,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: priorities[path] ?? 0.6,
    };
  },
};
