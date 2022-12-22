import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Genre } from "./Genre.js";
import { Movie } from "./Movie.js";

export const GenreMovie = sequelize.define(
  "GenreMovie",
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

Genre.belongsToMany(Movie, {
  through: GenreMovie,
});

Movie.belongsToMany(Genre, {
  through: GenreMovie,
});
