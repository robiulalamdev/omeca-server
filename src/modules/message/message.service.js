const Message = require("./message.model");

const oldMessageByHistoryId = async (hisId) => {
  const result = await Message.find({ history: hisId })
    .sort({ _id: -1 })
    .limit(5);
  const data = await result.reverse();
  return data;
};

const saveNewMessage = async (userPrompt, assistantResponse, hisId, userId) => {
  const newMessage = new Message({
    user: userId,
    history: hisId,
    userPrompt: userPrompt,
    assistantResponse: assistantResponse,
  });

  await newMessage.save();
  return true;
};

module.exports = {
  oldMessageByHistoryId,
  saveNewMessage,
};
