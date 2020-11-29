import { model, Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const chatSchema = Schema(
  {
    title: String,
    users: [{ type: ObjectId, ref: "User" }],
    lastMessage: { type: ObjectId, ref: "Message" }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Chat = model("Chat", chatSchema);

export default Chat;
