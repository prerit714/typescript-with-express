import { Request, Response } from "express";
import { IProductTransactionRequestBody } from "../interfaces";

export function doTransaction(req: Request, res: Response) {
  const transactionRequestBody = req.body as IProductTransactionRequestBody;
  const transactionRequestBodyKeys = Object.keys(transactionRequestBody);

  // Guard Clauses Start

  if (transactionRequestBodyKeys.length === 0) {
    res.status(400).json({
      data: null,
      errors: [`You have passed in an empty object as request body`],
    });
    return;
  }

  if (!transactionRequestBodyKeys.includes("fromUser")) {
    res.status(400).json({
      data: null,
      errors: [`No fromUser key is in request body`],
    });
    return;
  }

  if (!transactionRequestBodyKeys.includes("toUser")) {
    res.status(400).json({
      data: null,
      errors: [`No toUser key is in request body`],
    });
    return;
  }

  if (!transactionRequestBodyKeys.includes("product")) {
    res.status(400).json({
      data: null,
      errors: [`No product key is in request body`],
    });
    return;
  }

  // Guard Clauses end

  // Destructure the request body
  const { toUser, fromUser, product } = transactionRequestBody;

  const toUserKeys = Object.keys(toUser);
  const fromUserKeys = Object.keys(fromUser);
  const productKeys = Object.keys(product);

  // Guard Clauses for destructured request body

  if (!toUserKeys.includes("username")) {
    res.status(400).json({
      data: null,
      errrors: [`Passed in toUser key does not have a username key`],
    });
    return;
  }

  if (!toUserKeys.includes("role")) {
    res.status(400).json({
      data: null,
      errrors: [`Passed in toUser key does not have a role key`],
    });
    return;
  }

  if (!fromUserKeys.includes("username")) {
    res.status(400).json({
      data: null,
      errrors: [`Passed in fromUser key does not have a username key`],
    });
    return;
  }

  if (!fromUserKeys.includes("role")) {
    res.status(400).json({
      data: null,
      errrors: [`Passed in fromUser key does not have a role key`],
    });
    return;
  }

  if (productKeys.length === 0) {
    res.status(400).json({
      data: null,
      errrors: [`Passed in product key is an empty object`],
    });
    return;
  }

  if (!productKeys.includes("name")) {
    res.status(400).json({
      data: null,
      errrors: [`Passed in product key does not have a name key`],
    });
    return;
  }

  if (!productKeys.includes("category")) {
    res.status(400).json({
      data: null,
      errrors: [`Passed in product key does not have a category key`],
    });
    return;
  }

  if (!productKeys.includes("price")) {
    res.status(400).json({
      data: null,
      errrors: [`Passed in product key does not have a price key`],
    });
    return;
  }

  // Guard Clauses for destructured request body end
  res.status(200).json({ ...transactionRequestBody });
}
