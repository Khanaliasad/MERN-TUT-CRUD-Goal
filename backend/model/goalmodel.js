const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: "string",
      required: [true, "Please enter a string"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
