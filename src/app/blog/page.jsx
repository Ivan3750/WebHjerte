// ❌ НЕ додавай "use client" сюди!

export const metadata = {
  title: "WebHjerte Blog – Tips til Hjemmesider og SEO i Danmark",
  description: "Læs om moderne webdesign, SEO, og hvordan små virksomheder i Danmark kan få mere ud af deres hjemmeside.",
  keywords: "blog, SEO tips, webdesign, hjemmesider, markedsføring, små virksomheder, Danmark",
  openGraph: {
    title: "WebHjerte Blog – Tips og Tricks til Webudvikling",
    description: "Følg med i vores blog og lær hvordan du forbedrer din online tilstedeværelse.",
    url: "https://webhjerte.dk/blog",
    image: "/og-blog.jpg",
  },
};

import Blog from "../components/Blog"; // Імпортуємо клієнтський компонент

export default function Page() {
  return <Blog />;
}
