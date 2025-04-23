import Logo from "../../../public/W.png";




export const metadata = {
  title: "WebHjerte Blog – Tips til SEO og Webdesign for Små Virksomheder",
  description: "Få indsigt i moderne webudvikling, SEO-strategier og online markedsføring, der hjælper danske virksomheder med at vokse.",
  keywords: "blog, SEO Danmark, webdesign tips, hjemmesideoptimering, digital markedsføring, små virksomheder, webbureau blog",
  openGraph: {
    title: "WebHjerte Blog – Tips og Tricks til SEO og Webdesign",
    description: "Følg med i vores blog og bliv klogere på alt fra SEO til konverterende webdesign.",
    url: "https://webhjerte.dk/blog",
    image: Logo,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebHjerte Blog – Tips og Tricks til SEO og Webdesign",
    description: "Følg med i vores blog og bliv klogere på alt fra SEO til konverterende webdesign.",
    image: Logo,
  },
  robots: "index, follow"
};


import Blog from "../components/Blog"; // Імпортуємо клієнтський компонент

export default function Page() {
  return <Blog />;
}
