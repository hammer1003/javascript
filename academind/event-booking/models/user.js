const { model, Schema, Types } = require("mongoose");

const userSchema = Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdEvents: [
    {
      type: Types.ObjectId,
      ref: "Event"
    }
  ]
});

module.exports = model("User", userSchema);
