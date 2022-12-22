import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("disney-database", "root", "", {
  dialect: "mysql",
});
