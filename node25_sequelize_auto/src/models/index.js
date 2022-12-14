const { Sequelize } = require("sequelize");
const config = require("../config/index");

const sequelize = new Sequelize(
  config.db_name,
  config.db_user,
  config.db_pass,
  {
    host: config.db_host,
    dialect: config.db_dialect,
    port: config.db_port,
  }
);
try {
  sequelize.authenticate();
  console.log("ok");
} catch (error) {
  console.error("no", error);
}

module.exports = sequelize;

//Code first

//yarn sequelize-cli init
//npm sequelize-cli init
//npx sequelize-cli init
