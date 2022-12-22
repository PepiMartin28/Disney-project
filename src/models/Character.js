import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Character = sequelize.define("Character", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idCharacter: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  history: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
});
