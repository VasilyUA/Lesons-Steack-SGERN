const { STRING, INTEGER, DATE, NOW } = require("sequelize");
const db = require("../database/Sequelize");

const boock = db.define("boock", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  publishDate: {
    type: DATE,
    defaultValue: NOW,
  },
});
//перезасдає занови тим самим стирає данні
// db.sync({ force: true }).catch((err) => console.error(err));
module.exports = boock;
