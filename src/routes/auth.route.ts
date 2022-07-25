import { Request, Response } from "express";
import { REPOSITORY } from "../db-data";
import { IUser } from "../interfaces";

export function userLogin(req: Request, res: Response) {
  const inputUser = req.body as IUser;
  const userKeys = Object.keys(inputUser);

  if (userKeys.length === 0) {
    res.status(401).json({
      data: {},
      errors: ["You have sent in an empty request body object with no keys"],
    });
  } else if (!userKeys.includes("username")) {
    res.status(401).json({
      data: {},
      errors: ["'username' key does not exist in request body object"],
    });
  } else if (!userKeys.includes("password")) {
    res.status(401).json({
      data: {},
      errors: ["'password' key does not exist in request body object"],
    });
  } else {
    let userFound: IUser | null = null;
    for (let i = 0; i < REPOSITORY.users.length; ++i) {
      const user = REPOSITORY.users[i];
      if (
        user.username === inputUser.username &&
        user.password === inputUser.password
      ) {
        userFound = user;
        break;
      }
    }
    if (userFound !== null) {
      res.status(200).json({
        data: {
          userFound,
          message: "You are authenticated!",
        },
        errors: [],
      });
    } else {
      res.status(404).json({
        data: {},
        errors: [`Invalid Credentials :(`],
      });
    }
  }
}
