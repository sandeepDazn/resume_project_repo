import { DataTypes } from "sequelize";
import db from "../config/db.js";

const skills = db.define('skills',{
    skill_id:{
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
        type:DataTypes.INTEGER
    },
    skill_title:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

export default skills;