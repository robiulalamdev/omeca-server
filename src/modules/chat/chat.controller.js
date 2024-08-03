const { sendPromptToOpenAi } = require("../../config/openai");
const {
  oldMessageByHistoryId,
  saveNewMessage,
} = require("../message/message.service");
const { getUserInfoById } = require("../user/user.service");
const { createHistoryAndMessage } = require("./chat.service");

const sendMessage = async (req, res) => {
  try {
    const isExistUser = await getUserInfoById(req.user?._id);
    if (isExistUser) {
      let messages = [];
      if (req.body.historyId) {
        const oldHistories = await oldMessageByHistoryId(req.body.historyId);

        for (let i = 0; i < oldHistories?.length; i++) {
          const element = oldHistories[i];
          if (element) {
            messages.push({ role: "user", content: element.userPrompt });
            messages.push({
              role: "assistant",
              content: element.assistantResponse,
            });
          }
        }
      }
      await messages.push({ role: "user", content: req.body.userPrompt });
      const result = await sendPromptToOpenAi(messages);
      let newHistory = null;
      if (req.body.historyId) {
        await saveNewMessage(
          req.body?.userPrompt,
          result?.data,
          req.body.historyId,
          req.user?._id
        );
      } else {
        newHistory = await createHistoryAndMessage(
          req.body?.userPrompt,
          result?.data,
          req.body?.categoryName,
          req.user?._id
        );
      }
      if (result.success) {
        res.status(200).json({
          success: true,
          message: "Message Send Success",
          data: {
            userPrompt: req.body.userPrompt,
            assistantResponse: result?.data,
          },
          history: newHistory || null,
        });
      } else {
        res.status(201).json({
          success: false,
          message: "Message Send Failure",
          data: result,
        });
      }
    } else {
      res.status(404).json({
        status: 404,
        success: false,
        message: "User Not Found",
      });
    }
  } catch (error) {
    res.status(201).json({
      status: 201,
      success: false,
      message: "Something went wrong",
      error_message: error.message,
    });
  }
};

module.exports = {
  sendMessage,
};
