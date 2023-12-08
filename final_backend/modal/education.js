import db from "../config/connection.js";
import { DataTypes } from "sequelize";
import uuid from "../utils/utils.js";

const education = db.define("education", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: () => uuid(),
    allowNull: false,
  },
  user_primaryKey: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  Institute: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pass_out_year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Percentage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default education;
