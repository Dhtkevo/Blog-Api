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
export const getAllComments = async () => {
  const allComments = await prisma.comment.findMany();
  return allComments;
};

export const getSpecificComment = async (commentid: number) => {
  const comment = await prisma.comment.findUnique({ where: { id: commentid } });
  return comment;
};

export const createComment = async (content: string, postid: number) => {
  await prisma.comment.create({
    data: {
      content: content,
      postId: postid,
    },
  });
};

export const updateComment = async (
  commentid: number,
  content: string,
  postid: number
) => {
  await prisma.comment.update({
    where: {
      id: commentid,
    },
    data: {
      content: content,
      postId: postid,
    },
  });
};

export const deleteComment = async (commentid: number) => {
  await prisma.comment.delete({ where: { id: commentid } });
};

// User Queries
