const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const User = require("../models/user");
const { SECRET_KEY } = require("../config");

module.exports = {
  createUser: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      const hashedPassword = await hash(args.userInput.password, 12);

      const user = new User({
        email: args.userInput.email,
        password: hashedPassword
      });

      const result = await user.save();

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist!");
    }
    const isEqual = await compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect!");
    }
    const token = sign({ userId: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h"
    });
    return { userId: user.id, token: token, tokenExpiration: 1 };
  }
};
