import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata = {
  title: "WebStudio",
  description: "WebStudio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} antialiased`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
