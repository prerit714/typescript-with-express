import { Request, Response } from "express";
import { USERS } from "../db-data";
import { IUser } from "../interfaces";

export function addNewUserToDatabase(req: Request, res: Response) {
  const inputUser = req.body as IUser;
  const inputUserKeys = Object.keys(inputUser);
  const truthyArray: Array<boolean> = [
    inputUserKeys.includes("username"),
    inputUserKeys.includes("password"),
    inputUserKeys.includes("role"),
  ];
  if (truthyArray.every((value) => value === true)) {
    if (!["seller", "buyer"].includes(inputUser.role)) {
      res.status(401).json({
        data: {},
        error: [`Invalid role given!`],
      });
    } else {
      // Add the new user to the database
      const { username, password, role } = inputUser;
      let isUsernameAlreadyExisting = false;
      for (let i = 0; i < USERS.length; ++i) {
        const user = USERS[i];
        if (user.username === username) {
          isUsernameAlreadyExisting = true;
          break;
        }
      }
      if (!isUsernameAlreadyExisting) {
        console.log(`[addNewUserToDatabse()] New user is added to database`);
        USERS.push({ username, password, role });
        res.status(200).json({
          data: {
            userAdded: { username, password, role },
          },
          errors: null,
        });
      } else {
        res.status(401).json({
          data: null,
          errors: [`Username ${username} is already taken!`],
        });
      }
    }
  } else {
    res.status(401).json({
      data: null,
      error: [`Invalid user body format!`],
    });
  }
}
