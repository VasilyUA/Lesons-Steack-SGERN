const Sequelize = require("sequelize");

module.exports = new Sequelize("todobock", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: false,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
