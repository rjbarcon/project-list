/* TODO: This will be imported soon via external npm registry */
import { DB_LIST, DB_LIST_TYPE, HTTP_CODES } from "../../modules/constants";
import { AbstractDatabase, DatabaseFactory } from "../../modules/database";
import { IProject } from "../../modules/interface";
import { ErrorModel } from "../../modules/models";

const ALLOWED_TABLES = ["projects"];

export class DatabaseService {
  private database: AbstractDatabase | null;

  constructor(databaseName: (typeof DB_LIST)[DB_LIST_TYPE]) {
    this.database = null;
    this.initDB(databaseName);
  }

  private initDB(databaseName: (typeof DB_LIST)[DB_LIST_TYPE]) {
    try {
      this.database = DatabaseFactory.createDatabase(databaseName);
    } catch (error) {
      throw error; // will be catch on the service
    }
  }

  public async getList(tableName: string, query: IProject) {
    try {
      console.log(`>> DatabaseService.getList: ${tableName} start`);

      if (!this.database) throw new ErrorModel(HTTP_CODES.SERVER_ERROR.INTERNAL_SERVER_ERROR, "Database not initialized");
      if (!ALLOWED_TABLES.includes(tableName)) throw new ErrorModel(HTTP_CODES.CLIENT_ERROR.BAD_REQUEST, `Table name ${tableName} is not allowed.`);

      const { queryText, values } = this.buildProjectQuery(tableName, query);

      await this.database.connect();

      const result = await this.database.query(queryText, values);

      console.log(`>> DatabaseService.getList: ${tableName} end`);

      return result;
    } catch (error) {
      throw error; // will be catch on the service
    }
  }

  private buildProjectQuery(tableName: string, project: IProject): { queryText: string; values: any[] } {
    let queryText = `SELECT * FROM ${tableName}`;
    let index = 1;

    const values: any[] = [];
    const conditions: string[] = [];

    if (project.id !== undefined && project.id !== null) {
      conditions.push(`id = $${index++}`);
      values.push(project.id);
    }
    if (project.name) {
      conditions.push(`name = $${index++}`);
      values.push(project.name);
    }
    if (project.description) {
      conditions.push(`description = $${index++}`);
      values.push(project.description);
    }

    if (conditions.length > 0) {
      queryText += " WHERE " + conditions.join(" AND ");
    }

    return { queryText, values };
  }
}
