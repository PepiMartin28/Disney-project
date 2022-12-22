import express from "express";
import { sequelize } from "./database/database.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

try {
  await sequelize.sync({ force: false });
} catch (error) {
  console.error(`Unable to connect to the database. Error: ${error}.`);
}
