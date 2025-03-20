import { Request, Response, Router } from "express";
import { projectController } from "../controllers";

/* TODO: This will be imported soon via external npm registry */
import { ErrorModel } from "../../modules/models";
import { HTTP_CODES, PROJECT_ROUTE, ROUTE_ERROR_MESSAGE } from "../../modules/constants";

class ProjectRoute {
  public router: Router = Router();

  constructor() {
    this.getProjectList();
  }

  private getProjectList() {
    this.router.get(PROJECT_ROUTE.BASE_ROUTE, async (req: Request, res: Response) => {
      try {
        console.log(`ProjectRoute.getProjectList start`);

        const response: any = await projectController.getProjectList(req);

        console.log(`ProjectRoute.getProjectList end`);

        res.status(response?.code || HTTP_CODES.SUCCESSFUL.OK).send(response);
      } catch (error) {
        res
          .status(HTTP_CODES.SERVER_ERROR.INTERNAL_SERVER_ERROR)
          .send(new ErrorModel(HTTP_CODES.SERVER_ERROR.INTERNAL_SERVER_ERROR, ROUTE_ERROR_MESSAGE.SOMETHING_WENT_WRONG));
      }
    });
  }
}

export const projectRoute = new ProjectRoute().router;
