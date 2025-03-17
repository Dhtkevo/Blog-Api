import { prisma } from "./prisma.js";

// Post Queries
export const getAllPosts = async () => {
  const allPosts = await prisma.post.findMany();
  return allPosts;
};

export const getSpecificPost = async (postid: number) => {
  const foundPost = await prisma.post.findUnique({ where: { id: postid } });
  return foundPost;
};

export const createPost = async (
  title: string,
  content: string,
  userid: number
) => {
  await prisma.post.create({
    data: {
      title: title,
      content: content,
      userId: userid,
    },
  });
};

export const updatePost = async (
  postid: number,
  title: string,
  content: string
) => {
  await prisma.post.update({
    where: {
      id: postid,
    },
    data: {
      title: title,
      content: content,
    },
  });
};

export const deletePost = async (postid: number) => {
  await prisma.post.delete({
    where: { id: postid },
  });
};
// Comment Queries
// User Queries
