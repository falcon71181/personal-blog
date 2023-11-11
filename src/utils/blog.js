import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/post");

const getPostMetadata = (id) => {
  const postFilePath = path.join(postsDirectory, `${id}.md`);
  const postFileContent = fs.readFileSync(postFilePath, "utf8");

  const frontMatter = matter(postFileContent).data;
  const postMetadata = { id, ...frontMatter };

  return postMetadata;
};

const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const postIds = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return { id };
  });

  return postIds;
};

const getSortedPosts = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const postsMetadata = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const postMetadata = getPostMetadata(id);

    return postMetadata;
  });

  return postsMetadata.sort((firstPost, secondPost) => {
    if (firstPost.date < secondPost.date) return 1;
    return -1;
  });
};

const getPostContent = async (id) => {
  const postFilePath = path.join(postsDirectory, `${id}.md`);
  const postFileContent = fs.readFileSync(postFilePath, "utf8");

  const postContent = matter(postFileContent).content;

  const rawContent = await remark().use(html).process(postContent);

  const htmlContent = rawContent.toString();

  return { htmlContent };
};

export { getSortedPosts, getAllPostIds, getPostMetadata, getPostContent };
