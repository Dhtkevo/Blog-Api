import express from "express";
import {
  deleteUserController,
  getUsers,
  getUsersId,
  updateUserController,
} from "../controllers/usersController.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:userid", getUsersId);
userRouter.put("/:userid", updateUserController);
userRouter.delete("/:userid", deleteUserController);
