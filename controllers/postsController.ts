import {
  createPost,
  deletePost,
  getAllPosts,
  getSpecificPost,
  updatePost,
} from "../db/queries.js";

import { Response, Request } from "express";

export const getPosts = async (req: Request, res: Response) => {
  const posts = await getAllPosts();
  res.json(posts);
};

export const getPostsId = async (req: Request, res: Response) => {
  const { postid } = req.params;

  const post = await getSpecificPost(Number(postid));
  res.json(post);
};

export const newPost = async (req: Request, res: Response) => {
  const title = req.body.title;
  const content = req.body.content;
  const userid = 6;

  const createdPost = await createPost(title, content, userid);

  res.json({ message: "Post Created Sucessfully", post: createdPost });
};

export const updatePostPut = async (req: Request, res: Response) => {
  const { postid } = req.params;
  const { title } = req.body;
  const { content } = req.body;

  const updatedPost = await updatePost(Number(postid), title, content);

  res.json({ message: "Post updated successfully", post: updatedPost });
};

export const deletePostController = async (req: Request, res: Response) => {
  const { postid } = req.params;
  await deletePost(Number(postid));
  res.json({ message: "Post Delete Sucessfully" });
};
