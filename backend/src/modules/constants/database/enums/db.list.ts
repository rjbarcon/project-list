export const DB_LIST = {
  MONGODB: "MONGODB",
  MSSQL: "MSSQL",
  MYSQL: "MYSQL",
  POSTGRESQL: "POSTGRESQL",
} as const;

export type DB_LIST_TYPE = keyof typeof DB_LIST;
