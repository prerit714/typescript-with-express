import { Request, Response } from "express";
import { REPOSITORY } from "../db-data";
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
        data: null,
        error: [`Invalid role given!`],
      });
    } else {
      // Add the new user to the database
      const { username, password, role } = inputUser;
      let isUsernameAlreadyExisting = false;
      for (let i = 0; i < REPOSITORY.users.length; ++i) {
        const user = REPOSITORY.users[i];
        if (user.username === username) {
          isUsernameAlreadyExisting = true;
          break;
        }
      }
      if (!isUsernameAlreadyExisting) {
        console.log(
          "[addNewUserToDatabse()] New user",
          inputUser,
          "is added to database"
        );
        const repositoryUsersCopy = [...REPOSITORY.users];
        repositoryUsersCopy.push({ username, password, role });
        REPOSITORY.users = repositoryUsersCopy;
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

export function getAllUsers(_req: Request, res: Response) {
  const allUsers = Array.from(REPOSITORY.users).map((user) => ({
    ...user,
  }));
  res.status(200).json({
    data: allUsers,
    errors: null,
  });
}
