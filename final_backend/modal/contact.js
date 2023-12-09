import { DataTypes } from "sequelize";
import uuid from "../utils/utils.js";
import db from "../config/connection.js";

const contact = db.define("contact", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: () => uuid(),
    primaryKey: true,
  },
  user_primaryKey: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  LinkedIN: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  github: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  portfolio_website: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default contact;
