"use client";
import { useEffect, useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Loader from "../components/Loader";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogPosts");
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  function formatDate(isoDate) {
    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Місяці з 0
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
  return (
    <>
      <section>
        <h2 className="maintitle text-center mt-[75px]">
          Tips og nyheder om webdesign
        </h2>
        <p className="text-center">
          Få indsigt i de seneste trends og bedste praksis inden for webdesign.
        </p>
      </section>
      <section className="bg-[#F7F6F6]">
        <h3 className="title mb-5">Nyheder</h3>
        <div className="flex gap-5  flex-wrap justify-center  ">
          {loading && <Loader></Loader>}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#E9E9E9] p-4 rounded-3xl gap-3 flex flex-col md:w-[380px] sm:w-[300px] min-[800]:[280px] xl:w-[350px] box-border"
            >
              <Image
                src={post.cover_image || "/default-image.jpg"}
                width={500}
                height={500}
                alt={post.title || "Blog image"}
                unoptimized
                className="rounded-2xl"
              />
              <div className="gap-4 flex flex-col">
                <h4 className="font-bold text-[14px] text-[#1C1E1E] sm:text-[16px] md:text-[18px] xl:text-[20px]">
                  {post.title}
                </h4>
                <p className="text-[#1C1E1E] font-light text-[12px] sm:text-[13px] md:text-[14px] xl:text-[14px]">
                  {post.description}
                </p>
                <div className="flex justify-between">
                  <Link href={`/blog/${post.id}`}>
                    <button className="buy !text-[16px]">Læse mere</button>
                  </Link>
                  <div className="flex items-center gap-2">
                    <IoCalendarNumber className="text-[#5E5F5F] text-[18px]" />
                    <p className="text-[#5E5F5F] text-[12px]">
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
};

export default Blog;
