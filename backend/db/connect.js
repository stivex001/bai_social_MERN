import mysql, { createConnection } from "mysql";

export const db = createConnection({
  host: "localhost",
  user: "root",
  password: 'oladunjoye',
  database: "social",
});
