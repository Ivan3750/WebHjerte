import { PostCard } from "../../../components/seo/RelatedCards";

/** Artikeloversigt: alle guides i ét gitter. Kortene bevarer deres udtryk (billede øverst, kort tekst). */
export default function BlogList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5">
      {posts.map((post, i) => (
        <PostCard key={post.href} {...post} tag={post.category} index={i} />
      ))}
    </div>
  );
}
