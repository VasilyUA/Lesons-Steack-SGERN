const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const bodyParser = require("body-parser");
//import config env
const config = require("./config");
//import schemas grphql
const schemas = require("./schemaGraphQL/index");
const schema = buildSchema(schemas);
//import resloves grphql
const root = require("./resolve/index");
// import database seqelize
const db = require("./database/Sequelize") 

//body server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", graphqlHTTP({ schema, graphiql: true, rootValue: root }));
//Test Db conection
db.authenticate()
  .then(() => {
    console.log("Connected...");
app.listen(config.PORT, () => { 
  console.log(`Server started on port ${config.PORT}`);
})  })
.catch(err => console.error("Error: " + err));
