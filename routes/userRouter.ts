import express from "express";
import {
  deleteUserController,
  getUsers,
  getUsersId,
  newUser,
  updateUserController,
} from "../controllers/usersController.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:userid", getUsersId);
userRouter.post("/", newUser);
userRouter.put("/:userid", updateUserController);
userRouter.delete("/:userid", deleteUserController);
