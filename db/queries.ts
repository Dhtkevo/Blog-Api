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
  const createdPost = await prisma.post.create({
    data: {
      title: title,
      content: content,
      userId: userid,
    },
  });

  return createdPost;
};

export const updatePost = async (
  postid: number,
  title: string,
  content: string
) => {
  const updatedPost = await prisma.post.update({
    where: {
      id: postid,
    },
    data: {
      title: title,
      content: content,
    },
  });

  return updatedPost;
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
  const createdComment = await prisma.comment.create({
    data: {
      content: content,
      postId: postid,
    },
  });

  return createdComment;
};

export const updateComment = async (
  commentid: number,
  content: string,
  postid: number
) => {
  const updatedComment = await prisma.comment.update({
    where: {
      id: commentid,
    },
    data: {
      content: content,
      postId: postid,
    },
  });

  return updatedComment;
};

export const deleteComment = async (commentid: number) => {
  await prisma.comment.delete({ where: { id: commentid } });
};

// User Queries
export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

export const getSpecificUser = async (userid: number) => {
  const user = await prisma.user.findUnique({ where: { id: userid } });
  return user;
};

export const createUser = async (
  username: string,
  password: string,
  isadmin: boolean = false
) => {
  const createdUser = await prisma.user.create({
    data: {
      username: username,
      password: password,
      isAdmin: isadmin,
    },
  });

  return createdUser;
};

export const updateUser = async (
  username: string,
  password: string,
  isadmin: boolean = false
) => {
  const updatedUser = await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      username: username,
      password: password,
      isAdmin: isadmin,
    },
  });

  return updatedUser;
};

export const deleteUser = async (userid: number) => {
  await prisma.user.delete({ where: { id: userid } });
};
