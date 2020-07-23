const { readFileSync } = require("fs");
//schemas combainer
const schemaBoock = readFileSync("./schemaGraphQL/boock.graphql", {
  encoding: "utf8",
});
const schemaTodu = readFileSync("./schemaGraphQL/todu.graphql", {
  encoding: "utf8",
});
const schemaQery = readFileSync("./schemaGraphQL/schema.graphql", {
  encoding: "utf8",
});

const schemas = `${schemaBoock}${schemaTodu}${schemaQery}`;

module.exports = schemas;
