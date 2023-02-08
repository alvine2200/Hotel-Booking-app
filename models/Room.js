const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumber: {
      type: [{ number: Number, unavailableDates: { type: [Date] } }],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
