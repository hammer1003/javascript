const { ApolloServer } = require("apollo-server");
const { connect } = require("mongoose");
const typeDefs = require("./typeDefs");
const { MONGODB } = require("./config.js");
const resolvers = require("./resolvers");

(async () => {
  await connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
