import { ApiErr } from "./ApiErr";
import express from "express";

const apiErrorHandler = (
  err: Error,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
): express.Response => {

  

  if (err instanceof ApiErr) {
    console.log(err.code);
    console.log(err);
    return res.status(err.code).json(err);
  }

  return res.status(500).json(err);
};

export default apiErrorHandler;
