import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import Logo from "../../public/W.png";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "WebHjerte",
              url: "https://webhjerte.dk",
              logo: "https://webhjerte.dk/W.png",
              image: "https://webhjerte.dk/W.png",
              description:
                "WebHjerte er et lokalt webbureau i Horsens, Jylland. Vi tilbyder moderne webdesign, hjemmesider og SEO tjek til små virksomheder i Danmark.",
              telephone: "+45 42 76 05 77",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Horsens",
                postalCode: "8700",
                addressCountry: "DK",
              },
              areaServed: ["Horsens", "Jylland", "Danmark", "Midtjylland","Europe"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "17",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61575549052729",
                "https://www.instagram.com/webhjerte",
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
      strategy="afterInteractive"
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

         <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

         <Script
          id="conditional-ga-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const urlParams = new URLSearchParams(window.location.search);
                const noTrack = urlParams.get("no_track") === "true" || document.cookie.includes("no_track=true");

                if (!noTrack) {
                  const gtagScript = document.createElement("script");
                  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-QFGJWT1F24";
                  gtagScript.async = true;
                  document.head.appendChild(gtagScript);

                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag("js", new Date());
                  gtag("config", "G-QFGJWT1F24");
                } else {
                  console.log("🛑 Google Analytics не активовано — no_track=true");
                }
              })();
            `,
          }}
        />

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

       <Header />

<main id="main-content">
  {children}
</main>

<Footer />

      </body>
    </html>
  );
}
