import { Request, Response } from "express";
import { REPOSITORY } from "../db-data";
import { IUser, PartialProductAndPartialUser } from "../interfaces";

export function addProductToUserHavingUsername(req: Request, res: Response) {
  const requestBody = req.body as PartialProductAndPartialUser;
  const requestBodyKeys = Object.keys(requestBody);

  if (
    !requestBodyKeys.includes("user") ||
    !requestBodyKeys.includes("product")
  ) {
    res.status(400).json({
      data: null,
      errors: [`Invalid input request body!`],
    });
    return;
  }

  const { username } = requestBody.user;
  if (username === undefined) {
    res.status(400).json({
      data: null,
      errors: [`Input user object does not container username as a field`],
    });
    return;
  }

  let userFound: IUser | null = null;
  for (const user of REPOSITORY.users) {
    if (user.username === username) {
      userFound = user;
      break;
    }
  }

  if (userFound === null) {
    res.status(400).json({
      data: null,
      errors: [`No username ${username} was found in the database!`],
    });
    return;
  }

  if (userFound.role === "buyer") {
    res.status(400).json({
      data: null,
      errors: [`You cant be a buyer and add products`],
    });
    return;
  }

  const userFoundProductsCopy =
    userFound.hasProducts === undefined ? [] : [...userFound.hasProducts];

  const product = requestBody.product;
  const { name, price, category } = product;

  if (userFoundProductsCopy.length === 0) {
    if (name === undefined || price === undefined || category === undefined) {
      res.status(400).json({
        data: null,
        errors: [
          `Invalid products body object was passed to the request body!`,
        ],
      });
      return;
    } else {
      userFoundProductsCopy.push({ name, price, category });
      userFound.hasProducts = userFoundProductsCopy;
      console.log(
        "[addProductToUserHavingUsername()] Added",
        { name, price, category },
        "to",
        username
      );
      res.status(200).json({
        data: {
          message: "Done with insertion of a new product",
        },
        errors: null,
      });
      return;
    }
  }

  if (name === undefined || price === undefined || category === undefined) {
    res.status(400).json({
      data: null,
      errors: [`name, price and category of product cannot be empty`],
    });
    return;
  } else {
    userFoundProductsCopy.push({ name, price, category });
  }

  userFound.hasProducts = userFoundProductsCopy;

  console.log(
    "[addProductToUserHavingUsername()] Added",
    { name, price, category },
    "to",
    username
  );

  res.status(200).json({
    data: {
      message: "Product was added successfully!",
    },
    errors: null,
  });
}
