import { Request, Response } from "express";
import { getSpecificUserUsername } from "../db/queries.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const jwt_secret = process.env.JWT_SECRET;
if (!jwt_secret) {
  throw new Error("JWT_SECRET not read in from .env file");
}

export const LoginUser = async (req: Request, res: Response) => {
  const user = await getSpecificUserUsername(req.body.username);

  if (!user) {
    res.status(400).json({ message: "Invalid Username!" });
    return;
  }

  const doPasswordsMatch = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!doPasswordsMatch) {
    res.status(400).json({ message: "Invalid Password!" });
    return;
  }

  const accessToken = jwt.sign({ id: user.id }, jwt_secret, {
    expiresIn: "1d",
  });

  res.status(200).json({ message: "User logged in", accessToken: accessToken });
};
