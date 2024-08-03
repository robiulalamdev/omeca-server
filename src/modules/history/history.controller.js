const { getUserInfoById } = require("../user/user.service");
const History = require("./history.model");

const getMyHistories = async (req, res) => {
  try {
    const isExistUser = await getUserInfoById(req.user?._id);
    if (isExistUser) {
      const result = await History.find({ user: req.user?._id }).sort({
        _id: -1,
      });
      res.status(200).json({
        status: 200,
        success: true,
        message: "History Retrieved Successfully",
        data: result,
      });
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

const getHistoryById = async (req, res) => {
  try {
    const result = await History.findById({ _id: req.params.id });
    res.status(200).json({
      status: 200,
      success: true,
      message: "History Retrieved Successfully",
      data: result,
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
  getMyHistories,
  getHistoryById,
};
