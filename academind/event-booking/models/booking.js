const { model, Schema, Types } = require("mongoose");

const bookingSchema = Schema(
  {
    event: {
      type: Types.ObjectId,
      ref: "Event"
    },
    user: {
      type: Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = model("Booking", bookingSchema);
