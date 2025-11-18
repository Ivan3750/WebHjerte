"use client";
import { useEffect, useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import Button from "./Button";
import AnimatedInView from "./AnimatedInView";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPost, setLoadingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const router = useRouter();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        console.log(data)
        setPosts(data);

         const uniqueCategories = Array.from(
          new Set(data.map((post) => post.category))
        ).filter(Boolean);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleReadClick = async (postId) => {
    setLoadingPost(postId);
    router.push(`/blog/${postId}`);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section>
        <AnimatedInView as="h1" className="maintitle text-center mt-[75px]">
        Tips og nyheder om web
        </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-lg">
        Få indsigt i de seneste trends og bedste praksis inden for web.
        </AnimatedInView>
      </section>

      <section className="bg-[#F7F6F6] py-10">
        <h2 className="title mb-5">Nyheder</h2>
        <div className="p-4 md:p-6 flex flex-col md:flex-row items-center gap-4  rounded-2xl ">
          <input
            type="text"
            placeholder="Søg efter titel"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border text border-gray-300 rounded-lg shadow-sm focus:outline-none   transition-all duration-300 text-sm"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text w-full md:w-52 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none   transition-all duration-300 text-sm bg-white"
          >
            <option value="">Alle kategorier</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {loading && <Loader />}
          {!loading && filteredPosts.length === 0 && (
            <p className="text-center  text text-[16px] sm:text-[18px] xl:text-[20px]">
              Ingen blogindlæg fundet.
            </p>
          )}
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#E9E9E9] p-4 rounded-3xl flex flex-col gap-3 md:w-[380px] sm:w-[300px] xl:w-[350px] box-border hover:scale-[0.95] transition-transform cursor-pointer"
              onClick={() => handleReadClick(post.id)}
            >
              <Image
                src={
                  `${post.cover_image}` ||
                  "https://sjqyignjqcvlifrnsaoi.supabase.co/storage/v1/object/public/blog-images/default-image.jpg"
                }
                width={500}
                height={300}
                alt={post.title || "Blog image"}
                unoptimized
                className="rounded-2xl object-cover"
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-[#1C1E1E] text-[12px] sm:text-[14px] xl:text-[16px] h-[40px] md:h-[60px]">
                  {post.title}
                </h3>
                <p className="text-[#1C1E1E] font-light text-[12px] sm:text-[12px] xl:text-[14px] h-[80px] md:h-[100px]">
                  {post.description}
                </p>
                <p className="text-[#00aaff]">#{post.category}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <IoCalendarNumber className="text-[#5E5F5F] text-[14px] sm:text-[16px] xl:text-[18px]" />
                    <p className="text-[#5E5F5F] text-[12px] sm:text-[14px] xl:text-[16px]">
                      {formatDate(post.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
