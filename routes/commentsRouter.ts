import express from "express";

export const commentRouter = express.Router();

commentRouter.get("/");

commentRouter.get("/:commentid");

commentRouter.post("/");

commentRouter.put("/:commentid");

commentRouter.delete("/:commentid");
