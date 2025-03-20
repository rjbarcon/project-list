import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { projectRoute } from "./project-domain";

/* TODO: This will be imported soon via external npm registry */
import { HTTP_CODES, ROUTE_ERROR_MESSAGE } from "./modules/constants";
import { ErrorModel } from "./modules/models";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initialize();
  }

  private initialize() {
    this.app.use(cors()); // DO NOT USE THIS ON PRODUCTION

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use("/api", projectRoute);

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      return res.status(HTTP_CODES.CLIENT_ERROR.NOT_FOUND).send(new ErrorModel(HTTP_CODES.CLIENT_ERROR.NOT_FOUND, ROUTE_ERROR_MESSAGE.PAGE_NOT_FOUND));
    });
  }
}

export default new App().app;
