/* NOTE: This is just to show that this can be use later (via factory class) */

// import { createConnection, Connection } from 'mysql2/promise';
// import { AbstractDatabase } from './abstract-database';

// export class MySQLDatabase extends AbstractDatabase {
//   private connection!: Connection;

//   async connect(): Promise<void> {
//     this.connection = await createConnection({
//       host: process.env.MYSQL_HOST,
//       user: process.env.MYSQL_USER,
//       password: process.env.MYSQL_PASSWORD,
//       database: process.env.MYSQL_DATABASE,
//     });
//     console.log('Connected to MySQL');
//   }

//   async disconnect(): Promise<void> {
//     if (this.connection) {
//       await this.connection.end();
//       console.log('Disconnected from MySQL');
//     }
//   }

//   async query(sql: string, params?: any[]): Promise<any> {
//     const [rows] = await this.connection.execute(sql, params);
//     return rows;
//   }
// }
