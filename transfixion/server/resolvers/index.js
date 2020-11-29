const users = require("./users");
const factories = require("./factories");

module.exports = {
  Query: {
    ...users.Query,
    ...factories.Query
  },
  Mutation: {
    ...users.Mutation,
    ...factories.Mutation
  }
};
