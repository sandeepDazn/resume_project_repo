import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "resume_database",
  username: "root",
  password:"Dazn@143",
  dialect: "mysql",
  host: process.env.DB_HOST,
  logging:false
});

export default db;
