const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

//підключення конфіг залежностей
const config = require("./config");
//schemas grphql
const schemas = require("./schemaGraphQL/index");
const schema = buildSchema(schemas);
//resloves
const root = require("./resolve/index");
const app = express();

app.use("/", graphqlHTTP({ schema: schema, graphiql: true, rootValue: root }));

app.listen(config.PORT, () => {
  console.log(`Server started on port ${config.PORT}`);
});
