import React from "react";
import { getSortedPosts } from "@/utils/blog";
import BlogCard from "@/components/Blog/BlogCard";
import Link from "next/link";

const Blog = () => {
  const blogs = getSortedPosts();

  return (
    <div className="pt-20 min-h-[88vh]">
      <div className="flex flex-col items-center justify-center gap-1 w-full blogImgHide:gap-2 laptop:gap-3">
        {blogs.map((blog, index) => (
          <Link href={`/blog/${blog.id}`}>
            <BlogCard
              key={index}
              index={index}
              image={blog.image}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
