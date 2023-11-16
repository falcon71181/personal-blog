import React from "react";
import { getSortedPosts } from "@/utils/blog";
import Post_Date from "@/utils/date";
import "./blog.css";

const Blog = () => {
  const blogs = getSortedPosts();
  return (
    <div className="grid_container">
      <div className="blog">
        <div className="blog_post_container">
          {blogs.map((blog, index) => (
            <div className="blog_post" key={index}>
              <div>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div>
                <div className="blog_post_heading">{blog.title}</div>
                <div className="px-5 text-xs mt-[0.425rem] text-[#ededed]/40">
                  <Post_Date date={blog.date}></Post_Date>
                </div>
                <div className="blog_post_des">{blog.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="side_plugin">PPP</div>
    </div>
  );
};

export default Blog;
