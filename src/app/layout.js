import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.webhjerte.dk";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  applicationName: "WebHjerte",
  authors: [{ name: "Ivan Kohan", url: `${SITE_URL}/om-mig` }],
  creator: "Ivan Kohan",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/W.png", type: "image/png" }],
    apple: [{ url: "/W.png" }],
  },
  openGraph: {
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
    images: [{ url: "/W.png", width: 512, height: 512, alt: "WebHjerte" }],
  },
  twitter: { card: "summary", images: ["/W.png"] },
  formatDetection: { telephone: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c1e1e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: `${SITE_URL}/`,
                  name: "WebHjerte",
                  inLanguage: "da-DK",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
                {
                  "@type": ["ProfessionalService", "LocalBusiness"],
                  "@id": `${SITE_URL}/#organization`,
                  name: "WebHjerte",
                  url: `${SITE_URL}/`,
                  logo: `${SITE_URL}/W.png`,
                  image: `${SITE_URL}/W.png`,
                  description:
                    "WebHjerte er et lokalt webbureau i Horsens. Webdesign, hjemmesider og SEO til små og mellemstore virksomheder i Horsens, Midtjylland og resten af Danmark.",
                  telephone: "+45 42 76 05 77",
                  email: "hej@webhjerte.dk",
                  priceRange: "2.500 - 14.000 DKK",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Horsens",
                    postalCode: "8700",
                    addressCountry: "DK",
                  },
                  areaServed: [
                    { "@type": "City", name: "Horsens" },
                    { "@type": "AdministrativeArea", name: "Midtjylland" },
                    { "@type": "Country", name: "Danmark" },
                  ],
                  sameAs: [
                    "https://www.facebook.com/profile.php?id=61575549052729",
                    "https://www.instagram.com/webhjerte",
                    "https://www.linkedin.com/company/webhjerte",
                  ],
                },
              ],
            }),
          }}
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="dQ/aslmLQa//XoyDENgNAQ"
          async
        ></script>
        <Script
          id="plerdy-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          var _protocol="https:"==location.protocol?"https://":"http://";
          _site_hash_code="e54642b7017f6579741beb660c932b9d";
          _suid=72309;
          var plerdyScript=document.createElement("script");
          plerdyScript.defer=true;
          plerdyScript.dataset.plerdymainscript="plerdymainscript";
          plerdyScript.src="https://a.plerdy.com/public/js/click/main.js?v="+Math.random();
          document.head.appendChild(plerdyScript);
        `,
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TJH4S29Q');
            `,
          }}
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QFGJWT1F24"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QFGJWT1F24');
        `}
        </Script>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="ddb514ae-c2c6-4fdb-9105-c3b1cb6bc9ec"
          type="text/javascript"
          async
        />
      </head>
      <body
        className={`${unbounded.variable} antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJH4S29Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          Spring til indhold
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
