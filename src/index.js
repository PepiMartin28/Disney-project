import app from "./app.js";
import { sequelize } from "./database/database.js";

const main = async () => {
  await sequelize.sync({force:false});
  app.listen(process.env.PORT || 3000);
  console.log(`Server running on port ${3000}`);
};

main();
