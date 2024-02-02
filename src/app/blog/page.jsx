import React from "react";
import { getSortedPosts } from "@/utils/blog";
import BlogCard from "@/components/Blog/BlogCard";

const Blog = () => {
  const blogs = getSortedPosts();

  return (
    <div className="pt-20 min-h-[88vh]">
      <div className="flex flex-col items-center justify-center gap-1 w-full blogImgHide:gap-2 laptop:gap-3">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            index={index}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
