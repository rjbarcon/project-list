import { Request } from "express";
import { projectService } from "../services";

/* TODO: This will be imported soon via external npm registry */
import { IProject, IResponse } from "../../modules/interface";
import { ErrorModel } from "../../modules/models";
import { HTTP_CODES, ROUTE_ERROR_MESSAGE } from "../../modules/constants";

export class ProjectController {
  constructor() {}

  public async getProjectList(req: Request): Promise<any> {
    try {
      console.log(`>> ProjectController.getProjectList: start`);

      const data = await projectService.getProjectList(req);

      console.log(`>> ProjectController.getProjectList: end`);

      return data;
    } catch (error) {
      if (error && error instanceof ErrorModel) throw error; // will be handle on route
      else throw new ErrorModel(HTTP_CODES.SERVER_ERROR.INTERNAL_SERVER_ERROR, ROUTE_ERROR_MESSAGE.SOMETHING_WENT_WRONG);
    }
  }
}

// TODO: To be replaced by tsyringe (for proper dependency injection)
export const projectController = new ProjectController();
