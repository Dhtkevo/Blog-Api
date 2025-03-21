import express from "express";
import {
  deleteCommentController,
  getComments,
  getCommentsId,
  newComment,
  updateCommentController,
} from "../controllers/commentsController.js";

import passport from "passport";
import "../auth/passport.js";

export const commentRouter = express.Router({ mergeParams: true });

commentRouter.get("/", getComments);

commentRouter.get("/:commentid", getCommentsId);

commentRouter.post("/", newComment);

commentRouter.put(
  "/:commentid",
  passport.authenticate("jwt", { session: false }),
  updateCommentController
);

commentRouter.delete(
  "/:commentid",
  passport.authenticate("jwt", { session: false }),
  deleteCommentController
);
