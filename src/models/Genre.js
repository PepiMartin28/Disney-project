import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Genre = sequelize.define("Genre", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idGenre: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
  },
});
