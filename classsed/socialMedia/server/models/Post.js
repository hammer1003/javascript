const { model, Schema, Types } = require("mongoose");

const postSchema = new Schema({
  username: String,
  body: String,
  createdAt: String,
  comments: [{ username: String, body: String, createdAt: String }],
  likes: [{ username: String, createdAt: String }],
  users: { type: Types.ObjectId, ref: "user" }
});

module.exports = model("Post", postSchema);
