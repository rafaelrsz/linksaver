import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "reflect-metadata";
import { AppError } from "../../errors/AppError";
import "../../container/index";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    console.log("erro");
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running!"));