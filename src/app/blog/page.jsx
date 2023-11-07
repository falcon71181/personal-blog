import React from "react";
import "./blog.css";
import blogs from "./blogs";

const Blog = () => {
  return (
    <div className="grid_container">
      <div className="blog">
        <div className="blog_post_container">
          {blogs.map((blog) => (
            <div className="blog_post" key={blog.id}>
              <div>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div>
                <div className="blog_post_heading">{blog.title}</div>
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