const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");
const User = require("../../models/user");
const { SECRET_KEY } = require("../../config");
const {
  validateRegisterInput,
  validateLoginInput
} = require("../../utils/validator");

const gToken = user =>
  sign(
    {
      id: user.id,
      email: user.email,
      username: user.username
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

module.exports = {
  Mutation: {
    login: async (_, { username, password }) => {
      const { valid, errors } = validateLoginInput(username, password);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ username });
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }
      const match = await compare(password, user.password);
      if (!match) {
        errors.general = "Wrong Password";
        throw new UserInputError("Wrong Password", { errors });
      }
      const token = gToken(user);
      return {
        ...user._doc,
        id: user._id,
        token
      };
    },
    register: async (
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) => {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken"
          }
        });
      }
      password = await hash(password, 12);
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      });

      const res = await newUser.save();
      const token = gToken(res);
      return {
        ...res._doc,
        id: res._id,
        token
      };
    }
  }
};
