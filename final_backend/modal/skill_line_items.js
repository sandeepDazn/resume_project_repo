import db from "../config/connection.js";
import {DataTypes} from "sequelize";
import uuid from "../utils/utils.js";

const skill_line_items = db.define('skill_line_items',
{
    id:{
        type:DataTypes.UUID,
        defaultValue:()=>uuid(),
        primaryKey:true,
        allowNull:false
    },
    skill_id:{
        type:DataTypes.UUID,
        allowNull:false,
    },
    skill_line_item_title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    is_deleted:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
}
)

export default skill_line_items;