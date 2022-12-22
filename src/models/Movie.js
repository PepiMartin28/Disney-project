import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idMovie: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  calification: {
    type: DataTypes.FLOAT,
  },
});
