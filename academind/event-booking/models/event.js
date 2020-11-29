const { model, Schema, Types } = require("mongoose");

const eventSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creator: {
    type: Types.ObjectId,
    ref: "User"
  }
});

module.exports = model("Event", eventSchema);
