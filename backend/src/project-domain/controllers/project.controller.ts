import { Request } from "express";
import { IProject, IResponse } from "../../modules/interface";
import { ResponseModel } from "../../modules/models/common/response.model";

export class ProjectController {
  constructor() {}

  public async getProjectList(req: Request) {
    console.log(`ProjectController.getProjectList start`);

    const data: IProject[] = [
      { id: 1, name: "Project Alpha", description: "A React project." },
      { id: 2, name: "Project Beta", description: "A Node.jsproject." },
    ];

    console.log(`ProjectController.getProjectList end`);

    return data;
  }
}

// TODO: To be replaced by tsyringe (for proper dependency injection)
export const projectController = new ProjectController();
