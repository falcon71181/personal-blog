import { React } from "react";
import Post_Date from "@/utils/date";
import {
  getSortedPosts,
  getAllPostIds,
  getPostMetadata,
  getPostContent,
} from "@/utils/blog";

const BlogPost = async ({ params }) => {
  const postMetaData = getPostMetadata(params.id);
  const postMarkDown = await getPostContent(params.id);

  return (
    <div className="pt-20 w-full min-h-[88vh] flex justify-center">
      <div className="mt-5 flex flex-col gap-3 items-center h-full w-[90vw] navHide:w-[80vw] laptop:w-[60vw]">
        <img src={postMetaData.image} alt={postMetaData.title} />
        <h1 className="text-[2rem] navHide:text-[2rem] blogImgHide:text-[2.3rem] laptop:text-[2.5rem] font-extrabold text-[#ededef]">
          {postMetaData.title}
        </h1>
        <div className="ml-5 w-full text-stone-300">
          <Post_Date date={postMetaData.date}></Post_Date>
        </div>
        <div className="w-full flex flex-col">
          <div
            className="custom-markdown text-stone-300 leading-9 mt-5 text-sm navHide:text-base laptop:text-lg font-heading"
            dangerouslySetInnerHTML={{ __html: postMarkDown.htmlContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
