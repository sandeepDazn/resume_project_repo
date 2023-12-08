import db from "../config/connection.js";
import { DataTypes } from "sequelize";
import uuid from "../utils/utils.js";

const skills = db.define("skills", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue:()=>uuid(),
    primaryKey: true,
  },
  skills_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default skills;
