const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gymUserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const gymUser = mongoose.model("GymUser", gymUserSchema);

module.exports = gymUser;
