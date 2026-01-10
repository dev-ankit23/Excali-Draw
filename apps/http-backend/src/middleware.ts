import jwt from "jsonwebtoken";
import JWT_SECRET from "./config";
import type { NextFunction, Request, Response } from "express";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";
  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded) {
    //@ts-ignore
    req.userID = decoded.sub;
  } else {
    res.status(403).json({
      message: "Unautorized",
    });
  }
}
