const History = require("../history/history.model");
const Message = require("./message.model");

const getMessagesByHistoryId = async (req, res) => {
  try {
    const history = await History.findById(req.params.historyId);
    const result = await Message.find({ history: req.params.historyId });
    res.status(200).json({
      status: 200,
      success: true,
      message: "Messages Retrieved Successfully",
      data: result,
      history: history,
    });
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
  getMessagesByHistoryId,
};
