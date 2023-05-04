const Sequelize = require("sequelize");

const dbConection = new Sequelize("itemdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

dbConection
  .authenticate()
  .then(() => {
    console.log("Database Conected ");
  })
  .catch((err) => {
    console.log(err);
  });

// Synchronize the model with the database
dbConection
  .sync()
  .then(() => console.log("Model synchronized with database."))
  .catch((err) => console.error("Unable to sync model with database:", err));

module.exports = dbConection;
