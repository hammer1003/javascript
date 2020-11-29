const { model, Schema } = require("mongoose");

const userSchema = Schema(
  {
    email: String,
    username: String,
    position: String,
    password: String
  },
  { timestamps: true }
);

module.exports = model("user", userSchema);
