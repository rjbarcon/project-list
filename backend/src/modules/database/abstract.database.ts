export abstract class AbstractDatabase {
  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
  abstract query(sql: string, params?: any[]): Promise<any>;
}
