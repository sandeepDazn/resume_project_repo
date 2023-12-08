import db from "../config/connection.js";
import uuid from "../utils/utils.js";
import { DataTypes } from "sequelize";

const projects = db.define("projects", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuid(),
    allowNull: false,
    unique:true
  },
  user_primaryKey: {
    type:DataTypes.UUID,
    allowNull:false
  },
  project_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  project_role:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  project_technologies:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default projects;
