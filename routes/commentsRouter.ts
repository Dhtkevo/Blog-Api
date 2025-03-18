import express from "express";
import {
  deleteCommentController,
  getComments,
  getCommentsId,
  newComment,
  updateCommentController,
} from "../controllers/commentsController.js";

export const commentRouter = express.Router({ mergeParams: true });

commentRouter.get("/", getComments);

commentRouter.get("/:commentid", getCommentsId);

commentRouter.post("/", newComment);

commentRouter.put("/:commentid", updateCommentController);

commentRouter.delete("/:commentid", deleteCommentController);
