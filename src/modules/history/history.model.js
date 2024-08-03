const { Schema, SchemaTypes, default: mongoose } = require("mongoose");

const historySchema = new Schema(
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: false,
    },
  },
  { timeseries: true, timestamps: true }
);

const History = mongoose.model("History", historySchema);
module.exports = History;
