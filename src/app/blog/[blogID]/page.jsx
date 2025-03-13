"use client"

import { useEffect, useState } from "react";


const Blog = () => {

     const [post, setPost] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchBlogPost = async () => {
          try {
            const response = await fetch("/api/blogPosts/1");
            const data = await response.json();
            setPost(data);
          } catch (error) {
            console.error("Error fetching blog posts:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchBlogPost();
      }, []);
    return ( <>
    <section className="bg-white text-[#000]">
        <h2 className="text-[#5e5f5f] text-[30px] mb-[20px]">{post.title}</h2>
        <div className="text" dangerouslySetInnerHTML={{ __html: post.content }} />


        <div></div>
    </section>
    </> );
}
 
export default Blog;