import { Client } from "pg";
import { config } from "dotenv";

/* TODO: This will be imported soon via external npm registry */
import { AbstractDatabase } from "./abstract.database";
import { ErrorModel } from "../models";
import { ERROR_DATABASE_CODES, ERROR_DATABASE_MESSAGE, HTTP_CODES } from "../constants";

config();

export class PostgresDatabase extends AbstractDatabase {
  private client: Client;

  constructor() {
    super();

    const connectionString = process.env.POSTGRESQL_CONNECTION_STRING;
    if (!connectionString || connectionString === ERROR_DATABASE_CODES.DB_MISSING_CONNECTION_STRING) {
      throw new ErrorModel(HTTP_CODES.SERVER_ERROR.INTERNAL_SERVER_ERROR, ERROR_DATABASE_MESSAGE.DB_MISSING_ENV_VARIABLE);
    }

    this.client = new Client({ connectionString });
  }

  async connect(): Promise<void> {
    await this.client.connect();
    console.log(">> PostgresDatabase.connect: Connected to PostgreSQL");
  }

  async disconnect(): Promise<void> {
    await this.client.end();
    console.log(">> PostgresDatabase.disconnect: Disconnected from PostgreSQL");
  }

  async query(sql: string, params?: any[]): Promise<any> {
    const res = await this.client.query(sql, params);
    return res.rows;
  }
}
