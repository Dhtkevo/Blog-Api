import express from "express";
import { commentRouter } from "./commentsRouter.js";
import {
  deletePostController,
  getPosts,
  getPostsId,
  newPost,
  updatePostPut,
} from "../controllers/postsController.js";

export const postRouter = express.Router();

postRouter.use("/:postid/comments", commentRouter);

postRouter.get("/", getPosts);

postRouter.get("/:postid", getPostsId);

postRouter.post("/", newPost);

postRouter.put("/:postid", updatePostPut);

postRouter.delete("/:postid", deletePostController);
