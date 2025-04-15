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

export const metadata = {
  title: "WebHjerte - Din Pålidelige Webstudio i Danmark",
  description:
    "Vi specialiserer os i moderne webudvikling, SEO-optimering og responsivt design til små virksomheder i Danmark.",
  keywords:
    "webstudio, webudvikling, responsivt design, SEO, Danmark, hjemmesider til små virksomheder, moderne webdesign, Horsens,bestil hjemmeside, gratis hjemmeside, SEO check",
  openGraph: {
    title: "WebHjerte - Din Pålidelige Webstudio i Danmark",
    description:
      "Skab en stærk online tilstedeværelse for din virksomhed med WebHjerte.",
    url: "https://webhjerte.dk",
    image: Logo,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QFGJWT1F24"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QFGJWT1F24');
            `,
          }}
        />

        {/* Cookiebot */}
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
