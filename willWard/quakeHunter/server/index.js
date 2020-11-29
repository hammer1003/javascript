const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { createStore } = require("./utils");
const jwt = require("jsonwebtoken");

const QuakeAPI = require("./datasources/quake");
const UserAPI = require("./datasources/user");

const store = createStore();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    quakeAPI: new QuakeAPI(),
    userAPI: new UserAPI({ store })
  }),
  context: async ({ req }) => {
    // simple auth check on every request
    const auth = (req.headers && req.headers.authorization) || "";
    let email = "";
    let token = "";
    console.log("auth", auth);

    const getToken = () => {
      return auth.split(" ")[1];
    };
    if (auth.length && auth.split(" ")[1]) {
      token = getToken();
    }
    if (token !== "") {
      email = jwt.verify(token, "secret_key").email;
    }

    console.log("email", email);

    // find a user by their email
    const usercheck = await store.users.map(user => {
      if (email === user.email) {
        return user;
      }
    });

    console.log("usercheck", usercheck);

    let users = [];
    await usercheck.forEach(elem => {
      if (elem) {
        users.push(elem);
      }
    });
    console.log("users Array", users);

    const user = users && users[0] ? users[0] : null;

    console.log("user", user);

    return { user };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
