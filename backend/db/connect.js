import mysql, { createConnection } from "mysql";

export const db = createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "social",
});
