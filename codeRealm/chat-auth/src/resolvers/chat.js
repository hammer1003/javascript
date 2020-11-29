import { UserInputError } from "apollo-server-express";
import { Chat, User } from "../models";
import { startChat } from "../schemas";

export default {
  Mutation: {
    startChat: async (root, args, context, info) => {
      const { title, userIds } = args;
      await startChat.validate(args, { abortEarly: false });

      const idsFound = await User.where("_id")
        .in(userIds)
        .countDocuments();

      if (idsFound !== userIds.length) {
        throw new UserInputError("One or more User IDs are invalid.");
      }

      const chat = await Chat.create({ title, users: userIds });

      await User.updateMany(
        { _id: { $in: userIds } },
        { $push: { chat: chat } }
      );

      return chat;
    }
  }
};
