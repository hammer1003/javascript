import { model, Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const messageSchema = Schema(
  {
    body: String,
    sender: { type: ObjectId, ref: "User" },
    chat: { type: ObjectId, ref: "Chat" }
  },
  { timestamps: true }
);

const Message = model("Message", messageSchema);

export default Message;
