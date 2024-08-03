const History = require("../history/history.model");
const Message = require("../message/message.model");

const createHistoryAndMessage = async (
  userPrompt,
  assistantResponse,
  categoryName = "",
  userId
) => {
  const newHistory = new History({
    user: userId,
    title: userPrompt,
    categoryName: categoryName,
  });
  const result = await newHistory.save();
  const newMessage = new Message({
    user: userId,
    history: result._id,
    userPrompt: userPrompt,
    assistantResponse: assistantResponse,
  });

  await newMessage.save();
  return result;
};

module.exports = {
  createHistoryAndMessage,
};
