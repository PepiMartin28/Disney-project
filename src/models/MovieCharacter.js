import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Character } from "./Character.js";
import { Movie } from "./Movie.js";

export const MovieCharacter = sequelize.define(
  "MovieCharacter",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

Character.belongsToMany(Movie, {
  through: MovieCharacter,
});

Movie.belongsToMany(Character, {
  through: MovieCharacter,
});
