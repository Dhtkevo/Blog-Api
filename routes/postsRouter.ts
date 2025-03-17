import express from "express";
import { commentRouter } from "./commentsRouter.js";

export const postRouter = express.Router();

postRouter.use("/:postid/comments", commentRouter);

postRouter.get("/");

postRouter.get("/:postid");

postRouter.post("/");

postRouter.put("/:postid");

postRouter.delete("/:postid");
