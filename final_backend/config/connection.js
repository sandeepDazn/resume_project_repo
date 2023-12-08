import db_details from './db_details.js'
import {Sequelize} from 'sequelize';

const db = new Sequelize({
    database:db_details.database_name,
    username:db_details.user,
    password:db_details.password,
    host:db_details.host,
    dialect:db_details.database_type,
})

export default db;