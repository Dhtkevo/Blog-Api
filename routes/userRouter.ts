import express from "express";
import {
  deleteUserController,
  getUsers,
  getUsersId,
  registerUser,
  updateUserController,
} from "../controllers/usersController.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:userid", getUsersId);
userRouter.post("/", registerUser);
userRouter.put("/:userid", updateUserController);
userRouter.delete("/:userid", deleteUserController);
