const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
      required: true,
    },
    verified: {
      type: Boolean,
      enum: [true, false],
      default: false,
      required: true,
    },
    provider: {
      type: String,
      enum: ["Manual", "Google", "Facebook", "Apple"],
      default: "Manual",
      required: true,
    },
    reset_password: {
      type: Boolean,
      enum: [true, false],
      default: false,
      required: false,
    },
    reset_email: {
      type: Boolean,
      enum: [true, false],
      default: false,
      required: false,
    },
  },
  {
    timestamps: true,
    timeseries: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
