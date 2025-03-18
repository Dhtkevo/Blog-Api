import express from "express";
import { commentRouter } from "./commentsRouter.js";
import { getPosts } from "../controllers/postsController.js";

export const postRouter = express.Router();

postRouter.use("/:postid/comments", commentRouter);

postRouter.get("/", getPosts);

postRouter.get("/:postid");

postRouter.post("/");

postRouter.put("/:postid");

postRouter.delete("/:postid");
