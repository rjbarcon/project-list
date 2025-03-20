/* TODO: This will be imported soon via external npm registry */
import { DB_LIST, DB_LIST_TYPE, ERROR_DATABASE_CODES, ERROR_DATABASE_MESSAGE, HTTP_CODES, ROUTE_ERROR_MESSAGE } from "../../modules/constants";
import { AbstractDatabase, DatabaseFactory } from "../../modules/database";
import { IProject, IProjectGetListQuery } from "../../modules/interface";
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
      throw error;
    }
  }

  public async getList(tableName: string, query: IProjectGetListQuery) {
    try {
      console.log(`>> DatabaseService.getList: ${tableName} start`);

      if (!this.database) throw new ErrorModel(HTTP_CODES.SERVER_ERROR.INTERNAL_SERVER_ERROR, "Database not initialized");
      if (!ALLOWED_TABLES.includes(tableName)) throw new ErrorModel(HTTP_CODES.CLIENT_ERROR.BAD_REQUEST, `Table name ${tableName} is not allowed.`);

      const { queryText, values } = this.buildProjectQuery(tableName, query);

      await this.database.connect();

      const result = await this.database.query(queryText, values);

      await this.database.disconnect();

      console.log(`>> DatabaseService.getList: ${tableName} end`);

      return result;
    } catch (error: any) {
      if (error?.code === ERROR_DATABASE_CODES.DB_CONNECTION_FAILURE) {
        throw new ErrorModel(HTTP_CODES.SERVER_ERROR.INTERNAL_SERVER_ERROR, ERROR_DATABASE_MESSAGE.DB_CONNECTION_FAILURE);
      } else {
        throw new ErrorModel(HTTP_CODES.SERVER_ERROR.INTERNAL_SERVER_ERROR, ROUTE_ERROR_MESSAGE.SOMETHING_WENT_WRONG);
      }
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
      conditions.push(`name ILIKE $${index++}`);
      values.push(`%${project.name}%`);
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
