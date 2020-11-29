import { AuthenticationError } from "apollo-server-express";
import mongoose from "mongoose";
import { attamptSignIn, signedOut } from "../auth";
import { User } from "../models";
import { signIn, signUp } from "../schemas";

export default {
  Query: {
    me: (root, arg, { req }, info) => {
      // todo: projecton
      return User.findById(req.session.userId);
    },
    users: (root, arg, { req }, info) => {
      // todo: projecton, pagination, sanitization
      return User.find({});
    },
    user: (root, { id }, { req }, info) => {
      // todo: projecton, sanitization
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AuthenticationError("user ID is not a valid Object ID.");
      }
      return User.findById(id);
    }
  },
  Mutation: {
    signUp: async (root, args, { req }, info) => {
      await signUp.validate(args, { abortEarly: false });

      const user = await User.create(args);

      req.session.userId = user.id;
      return user;
    },
    signIn: async (root, args, { req }, info) => {
      await signIn.validate(args, { abortEarly: false });

      console.log("req.session", req.session);
      const user = await attamptSignIn(args.email, args.password);

      req.session.userId = user.id;
      return user;
    },
    signOut: async (root, args, { req, res }, info) => {
      return await signedOut(req, res);
    }
  },
  User: {
    chats: async (user, args, context, info) => {
      return await user.populate({
        path: "chat"
      });
    }
  }
};
