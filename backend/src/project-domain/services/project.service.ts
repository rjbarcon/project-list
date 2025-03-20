import { Request } from "express";
import { DatabaseService } from "./database.service";
import { DB_LIST, PROJECT_DB } from "../../modules/constants";
import { IProjectGetListQuery } from "../../modules/interface";

export class ProjectService {
  constructor() {}

  public async getProjectList(req: Request): Promise<any> {
    try {
      const database = new DatabaseService(DB_LIST.POSTGRESQL);

      const query: IProjectGetListQuery = {
        since: req.query?.since ? Number(req.query?.since) : 0,
        limit: req.query?.limit ? Number(req.query?.limit) : 3,
        sortBy: req.query?.sortBy ? String(req.query?.sortBy) : null,
        orderBy: req.query?.orderBy ? String(req.query?.orderBy) : null,

        id: req.query?.id ? Number(req.query?.id) : null,
        name: req.query?.name ? String(req.query?.name) : null,
        description: req.query?.description ? String(req.query?.description) : null,
      };

      console.log(`🔥 ~ query:`, query);

      const data: any = await database.getList(PROJECT_DB.PROJECT_TABLE, query);

      return data;
    } catch (error) {
      throw error; // Can be catch on controller
    }
  }
}

// TODO: To be replaced by tsyringe (for proper dependency injection)
export const projectService = new ProjectService();
