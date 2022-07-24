import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export async function internalServerErrorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  res.status(err.statusCode).send({
    data: [],
    error: [err],
  });
}
