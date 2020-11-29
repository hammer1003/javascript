const posts = require("./posts");
const users = require("./users");
const comments = require("./comments");

module.exports = {
  Post: { ...posts.Post },
  Query: { ...posts.Query, ...users.Query },
  Mutation: { ...users.Mutation, ...posts.Mutation, ...comments.Mutation },
  Subscription: { ...posts.Subscription }
};
