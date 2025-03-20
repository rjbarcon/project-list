import { Client } from "pg";
import { config } from "dotenv";

/* TODO: This will be imported soon via external npm registry */
import { AbstractDatabase } from "./abstract.database";

config();

export class PostgresDatabase extends AbstractDatabase {
  private client: Client;

  constructor() {
    super();
    this.client = new Client({
      connectionString: process.env.POSTGRESQL_CONNECTION_STRING,
    });
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
