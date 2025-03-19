import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";

/* TODO: This will be imported soon via external npm registry */
import { ErrorModel } from "./modules/models/common/error.model";
import { HTTP_CODES } from "./modules/constants/common";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initialize();
  }

  private initialize() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      return res.status(HTTP_CODES.CLIENT_ERROR.NOT_FOUND).send(new ErrorModel({ code: HTTP_CODES.CLIENT_ERROR.NOT_FOUND, message: "Error! Page not found" }));
    });
  }
}

export default new App().app;
