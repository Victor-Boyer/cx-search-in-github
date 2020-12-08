const Sequelize = require("sequelize");
const {Users, sequelize} = require("../Users")

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
  });