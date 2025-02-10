import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "WebHjerte - Your Trusted Web Studio in Denmark",
  description: "We specialize in modern web development, SEO optimization, and responsive design for small businesses in Denmark.",
  keywords: "web studio, web development, responsive design, SEO, Denmark, small business websites, modern web design",
  openGraph: {
    title: "WebHjerte - Your Trusted Web Studio in Denmark",
    description: "Create a powerful online presence for your business with WebHjerte.",
    url: "https://webhjerte.dk",
    image: "/W.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className={`${unbounded.variable} antialiased`} suppressHydrationWarning> <Header/>{children}<Footer/>
      </body>
    </html>
  );
}
