import bcrypt from "bcryptjs";
import { Response, Request } from "express";
import { createUser } from "../db/queries.js";

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await createUser(username, hashedPassword);
  res.json({ message: "User Created Succeessfully", createdUser });
};
