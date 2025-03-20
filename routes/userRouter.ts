import express from "express";
import {
  deleteUserController,
  getUsers,
  getUsersId,
  registerUser,
  updateUserController,
} from "../controllers/usersController.js";

import passport from "passport";
import "../auth/passport.js";

export const userRouter = express.Router();

userRouter.get("/", passport.authenticate("jwt", { session: false }), getUsers);
userRouter.get(
  "/:userid",
  passport.authenticate("jwt", { session: false }),
  getUsersId
);
userRouter.post("/", registerUser);
userRouter.put(
  "/:userid",
  passport.authenticate("jwt", { session: false }),
  updateUserController
);
userRouter.delete(
  "/:userid",
  passport.authenticate("jwt", { session: false }),
  deleteUserController
);
