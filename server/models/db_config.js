const Sequelize = require("sequelize");
const sequelize = new Sequelize("searchgithub", "root", "root", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;
