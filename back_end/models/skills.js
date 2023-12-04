import sequelizeConnection from "../config/db.js";

import { DataTypes } from "sequelize";

const Skills = sequelizeConnection.define('Skills',{
    skill_id: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    skill_title:{
        type:DataTypes.TEXT,
        allowNull: false
    }
})

export default Skills;