const jwt_decode = require("jwt-decode");
const User = require("../models/user");
const { sign } = require("jsonwebtoken");
const { hash, compare } = require("bcrypt");
const { SECRET_KEY } = require("../config.js");
const checkLogin = require("../utils/checkLogin");

module.exports = {
  Query: {
    users: async () => await User.find({}),
    userToken: async (_, { token }) => {
      const { id } = jwt_decode(token);
      return await User.findById(id);
    }
  },
  Mutation: {
    user: async (_, { email }) => {
      const user = await User.findOne({ email });
      if (!user) return { message: "User does not existed.", isSuccess: false };
      if (user)
        return {
          message: "Success!!!.",
          isSuccess: true,
          userInfo: user
        };
    },
    registration: async (
      _,
      { email, username, position, password },
      context
    ) => {
      const logined = checkLogin(context);
      if (logined)
        return {
          message: "You have already signed in",
          isSuccess: false
        };

      const info = await User.findOne({ email });
      if (info)
        return {
          message: `${email} is in use.`,
          isSuccess: false
        };

      if (!info) {
        const hashPassword = await hash(password, 10);
        const user = await User.create({
          email,
          username,
          position,
          password: hashPassword
        });
        const token = sign({ id: user.id, email: user.email }, SECRET_KEY, {
          expiresIn: 60 * 60
        });
        return {
          id: user.id,
          name: user.username,
          email: user.email,
          message: token,
          isSuccess: true
        };
      }
    },
    login: async (_, { email, password }, context) => {
      const logined = checkLogin(context);
      if (logined)
        return {
          message: "You have already signed in",
          isSuccess: false
        };

      const user = await User.findOne({ email });
      if (!user)
        return {
          message: `${email} is not correct.`,
          isSuccess: false
        };
      const checkPassword = await compare(password, user.password);
      if (!checkPassword)
        return {
          message: `Password is not correct.`,
          isSuccess: false
        };
      const token = sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: 60 * 60
      });

      if (user && checkPassword)
        return {
          id: user.id,
          name: user.username,
          email: user.email,
          message: token,
          isSuccess: true
        };
    },
    updateUser: async (
      _,
      { username, oldEmail, newEmail, position, password }
    ) => {
      const checkUser = await User.findOne({ email: newEmail });
      if (checkUser)
        return {
          message: `${newEmail} has been used.`,
          isSuccess: false
        };
      const user = await User.findOne({ email: oldEmail });
      const checkPassword = await compare(password, user.password);
      if (!checkPassword)
        return {
          message: "Confimation password is not correct.",
          isSuccess: false
        };

      if (user && checkPassword) {
        const info = await User.updateOne(
          { email },
          { username, email, position }
        );

        if (info.n === 1 && info.nModified === 1)
          return {
            message: `Success!! ${username} has been updated.`,
            isSuccess: true
          };
      }
    },
    resetPassword: async (_, { email, oldPassword, newPassword }) => {
      const user = await User.findOne({ email });
      if (!user)
        return {
          message: `Fail!! ${email} dose not exist.`,
          isSuccess: false
        };
      if (user) {
        const checkPassword = await compare(oldPassword, user.password);
        if (!checkPassword)
          return {
            message: `Fail!! Password is not correct.`,
            isSuccess: false
          };
        if (checkPassword) {
          const hashPassword = await hash(newPassword, 10);
          const info = await User.updateOne(
            { email },
            { password: hashPassword }
          );
          if (info.n === 1 && info.nModified === 1)
            return {
              message: `Success!! Password has been updated.`,
              isSuccess: true
            };
        }
      }
    }
  }
};
