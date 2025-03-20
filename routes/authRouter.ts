import express from "express";
import { LoginUser } from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.post("/login", LoginUser);
