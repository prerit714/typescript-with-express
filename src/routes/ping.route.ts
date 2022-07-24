import { Request, Response, NextFunction } from "express";

/**
 * Ping the server
 */
export function ping(_req: Request, res: Response, _next: NextFunction) {
  res.status(200).json({
    body: "OK",
  });
}
