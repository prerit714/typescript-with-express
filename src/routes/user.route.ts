import { Request, Response } from "express";
import { IUser } from "../interfaces";

export function addNewUserToDatabase(req: Request, res: Response) {
  const { username, password } = req.body as IUser;
}
