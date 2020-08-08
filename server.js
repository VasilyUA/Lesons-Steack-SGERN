const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
//import config env
const { PORT, NODE_ENV, DATA_BASE } = require("./config");
//import schemas grphql
const schemas = require("./schemaGraphQL/index");
const schema = buildSchema(schemas);
//import resloves grphql
const root = require("./resolve/index");
// import database seqelizey
const db = require("./database/Sequelize");

//body server
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/graphql", graphqlHTTP({ schema, graphiql: true, rootValue: root }));

if (NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//перезасдає занови тим самим стирає данні
// db.sync({ force: true })
//   .then(() => console.log("Таблиця перебудована"))
//   .catch((err) => console.error(err));

//Test Db conection
db.authenticate()
  .then(() => {
    console.log(`Connected to database ${DATA_BASE}!`);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}!`);
    });
  })
  .catch((err) => console.error("Error: " + err));
