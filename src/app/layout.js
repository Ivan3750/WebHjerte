import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "../../public/W.png"

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "WebHjerte - Din Pålidelige Webstudio i Danmark",
  description: "Vi specialiserer os i moderne webudvikling, SEO-optimering og responsivt design til små virksomheder i Danmark.",
  keywords: "webstudio, webudvikling, responsivt design, SEO, Danmark, hjemmesider til små virksomheder, moderne webdesign, Horsens,bestil hjemmeside, gratis hjemmeside, SEO check",
  openGraph: {
    title: "WebHjerte - Din Pålidelige Webstudio i Danmark",
    description: "Skab en stærk online tilstedeværelse for din virksomhed med WebHjerte.",
    url: "https://webhjerte.dk",
    image: Logo,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <link rel="icon" href="/W.png" sizes="any" />
      </head>
      <body className={`${unbounded.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
