// import { MySQLDatabase } from './mysql.database'; /* TO BE USE SOONER  */

import { DB_LIST, DB_LIST_TYPE } from "../constants";
import { AbstractDatabase } from "./abstract.database";
import { PostgresDatabase } from "./postgresql.database";

export class DatabaseFactory {
  static createDatabase(type: (typeof DB_LIST)[DB_LIST_TYPE]): AbstractDatabase {
    switch (type) {
      case DB_LIST.POSTGRESQL:
        return new PostgresDatabase();

      // case "mysql":
      //    return new MySQLDatabase();

      default:
        throw new Error(`Database type ${type} is not supported.`);
    }
  }
}
