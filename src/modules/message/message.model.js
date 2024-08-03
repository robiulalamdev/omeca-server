const { Schema, SchemaTypes, default: mongoose } = require("mongoose");

const messageSchema = new Schema(
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    history: {
      type: SchemaTypes.ObjectId,
      ref: "History",
      required: true,
    },
    userPrompt: {
      type: String,
      required: true,
    },
    assistantResponse: {
      type: String,
      required: true,
    },
  },
  { timeseries: true, timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
