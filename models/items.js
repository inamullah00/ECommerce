const Sequelize = require("sequelize");
const dbConection = require("../config/db");

const items = dbConection.define("items", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = items;
