const express = require("express");
const bodyParser = require("body-parser");
const graphql = require("express-graphql");
const { connect } = require("mongoose");
const { MONGODB } = require("./config");
const { isAuth } = require("./utils");

const schema = require("./schema");
const rootValue = require("./resolvers");

const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
  "/graphql",
  graphql({
    schema,
    rootValue,
    graphiql: true
  })
);

connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
