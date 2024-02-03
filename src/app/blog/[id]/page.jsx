import React from "react";
import {
  getSortedPosts,
  getAllPostIds,
  getPostMetadata,
  getPostContent,
} from "@/utils/blog";

const BlogPost = ({ params }) => {
  const postMetaData = getPostMetadata(params.id);
  return (
    <div className="pt-20 w-full min-h-[88vh] flex justify-center">
      <div className="mt-5 flex flex-col gap-3 items-center h-full w-[60vw] border-2 border-blue-500">
        <h1 className="text-[2.5rem] font-extrabold text-[#ededef]">
          {postMetaData.title}
        </h1>
        <div className="ml-5 w-full text-stone-300">
          <Date>{postMetaData.date}</Date>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
