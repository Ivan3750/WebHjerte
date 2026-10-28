import Link from "next/link";

export const metadata = {
  title: "Blog – guides om hjemmesider | WebHjerte",
  description:
    "Guides om hjemmesider, priser og lokal synlighed på Google, skrevet af WebHjerte i Horsens.",
  alternates: { canonical: "https://www.webhjerte.dk/blog" },
};

const posts = [
  {
    href: "/blog/hvad-koster-en-hjemmeside-2026",
    title: "Hvad koster en hjemmeside i 2026?",
    desc: "Faste pakkepriser, hvad der er inkluderet, og hvad der kan ændre prisen.",
  },
  {
    href: "/freelancer-vs-bureau",
    title: "Freelancer eller webbureau?",
    desc: "Forskellene på ansvar, pris og kommunikation, og hvad du bør spørge om.",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pt-20 pb-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-5">Blog</p>
        <h1 className="maintitle text-white !leading-tight mb-4 max-w-[22ch]">
          Guides om hjemmesider og lokal synlighed
        </h1>
        <p className="text-[14px] text-[#a0a0a0] leading-[1.85] max-w-[56ch] mb-12">
          Praktiske guides til dig, der skal have en hjemmeside til din virksomhed i Horsens eller
          Midtjylland.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-2xl p-6 flex flex-col gap-3 bg-[#1c1e1e] border border-[#2a2d2d] hover:border-[#00a8e8]/40 transition-colors"
            >
              <p className="text-[15px] font-medium text-[#e0e0e0] group-hover:text-[#00a8e8] transition-colors">
                {post.title}
              </p>
              <p className="text-[13px] text-[#7a7a7a] leading-relaxed">{post.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
