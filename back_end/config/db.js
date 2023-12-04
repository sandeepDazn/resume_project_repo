import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

 dotenv.config();

const sequelizeConnection = new Sequelize({
    database:process.env.DB_NAME,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    dialect:process.env.DB_DIALECT,
    host:process.env.DB_HOST,
})

export default sequelizeConnection;