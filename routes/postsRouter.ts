import express from "express";

export const postRouter = express.Router();

postRouter.get("/");

postRouter.get("/:postid");

postRouter.get("/:postid/comments");

postRouter.get("/:postid/comments/:commentid");

postRouter.post("/");

postRouter.post("/:postid/comments");

postRouter.put("/:postid");

postRouter.put("/:postid/comments/:commentid");

postRouter.delete("/:postid");

postRouter.delete("/:postid/comments/:commentid");
