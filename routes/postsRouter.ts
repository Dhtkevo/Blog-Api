import express from "express";
import { commentRouter } from "./commentsRouter.js";
import {
  deletePostController,
  getPosts,
  getPostsId,
  newPost,
  updatePostPut,
} from "../controllers/postsController.js";

import passport from "passport";
import "../auth/passport.js";

export const postRouter = express.Router();

postRouter.use("/:postid/comments", commentRouter);

postRouter.get("/", getPosts);

postRouter.get("/:postid", getPostsId);

postRouter.post("/", passport.authenticate("jwt", { session: false }), newPost);

postRouter.put(
  "/:postid",
  passport.authenticate("jwt", { session: false }),
  updatePostPut
);

postRouter.delete(
  "/:postid",
  passport.authenticate("jwt", { session: false }),
  deletePostController
);
