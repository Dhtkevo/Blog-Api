import express from "express";

export const userRouter = express.Router();

userRouter.get("/");
userRouter.get("/:userid");
userRouter.post("/");
userRouter.put("/:userid");
userRouter.delete("/:userid");
