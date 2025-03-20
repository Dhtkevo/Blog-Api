import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSpecificUser,
  updateUser,
} from "../db/queries.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req: Request, res: Response) => {
  const allUsers = await getAllUsers();
  res.json(allUsers);
};

export const getUsersId = async (req: Request, res: Response) => {
  const { userid } = req.params;
  const user = await getSpecificUser(Number(userid));
  res.json(user);
};

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await createUser(username, hashedPassword);
  res.json({ message: "User Created Succeessfully", createdUser });
};

export const updateUserController = async (req: Request, res: Response) => {
  let { username, password, isadmin } = req.body;

  // Convert isadmin to boolean value if provided, else set it as false
  isadmin ? (isadmin = Boolean(isadmin)) : (isadmin = false);

  const updatedUser = await updateUser(username, password, isadmin);
  res.json({ message: "User updated successfully", user: updatedUser });
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { userid } = req.params;
  await deleteUser(Number(userid));
  res.json({ message: "User deleted Sucessfully" });
};
