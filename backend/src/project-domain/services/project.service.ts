import { Request } from "express";
import { DatabaseService } from "./database.service";
import { DB_LIST, PROJECT_DB } from "../../modules/constants";

export class ProjectService {
  constructor() {}

  public async getProjectList(req: Request): Promise<any> {
    try {
      const database = new DatabaseService(DB_LIST.POSTGRESQL);

      const query = req.query;

      const data: any = await database.getList(PROJECT_DB.PROJECT_TABLE, query);
      console.log(`🔥 ~ data:`, data);

      return data;
    } catch (error) {
      throw error; // Can be catch on controller
    }
  }
}

// TODO: To be replaced by tsyringe (for proper dependency injection)
export const projectService = new ProjectService();
