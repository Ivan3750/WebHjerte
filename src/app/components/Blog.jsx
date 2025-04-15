"use client";
import { useEffect, useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Loader from "./Loader";
import { useRouter } from "next/navigation"; // Додано для перенаправлення

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPost, setLoadingPost] = useState(null); // Стан для завантаження окремих постів
  const router = useRouter(); // Ініціалізація useRouter

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("https://web-cbe1.onrender.com/blog");
        const data = await response.json();
        setPosts(data);
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
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Місяці з 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleReadClick = async (postId) => {
    setLoadingPost(postId);
    router.push(`/blog/${postId}`);
  };

  return (
    <>
      <section>
        <h1 className="maintitle text-center mt-[75px]">
          Tips og nyheder om web
        </h1>
        <p className="text-center">
          Få indsigt i de seneste trends og bedste praksis inden for web.
        </p>
      </section>

      <section className="bg-[#F7F6F6] py-10">
        <h3 className="title mb-5">Nyheder</h3>
        <div className="flex flex-wrap justify-center gap-5">
          {loading && <Loader />}
          {!loading && posts.length === 0 && (
            <p className="text-center font-bold text-[#1C1E1E] text-[16px] sm:text-[18px] xl:text-[20px]">
              Ingen blogindlæg fundet.
            </p>
          )}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#E9E9E9] p-4 rounded-3xl flex flex-col gap-3 md:w-[380px] sm:w-[300px] xl:w-[350px] box-border"
            >
              <Image
                src={
                  `https://web-cbe1.onrender.com${post.cover_image}` ||
                  "/default-image.jpg"
                }
                width={500}
                height={300}
                alt={post.title || "Blog image"}
                unoptimized
                className="rounded-2xl object-cover"
              />
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-[#1C1E1E] text-[12px] sm:text-[14px] xl:text-[16px] h-[40px] md:h-[60px]">
                  {post.title}
                </h4>
                <p className="text-[#1C1E1E] font-light text-[12px] sm:text-[12px] xl:text-[14px] h-[80px] md:h-[100px]">
                  {post.description}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    className="buy !p-2 md:!p-1 !text-[12px] sm:!text-[14px] xl:!text-[16px] flex juctify-between items-center"
                    onClick={() => handleReadClick(post.id)} 
                    disabled={loadingPost === post.id}
                  >
                    {loadingPost === post.id ? <Loader /> : "Læse"}
                  </button>
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
