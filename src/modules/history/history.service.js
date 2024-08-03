const getHistoryByIdAndUser = async (userId, hisId) => {
  const result = await History.find({ _id: hisId, user: userId })
    .sort({ _id: -1 })
    .limit(5)
    .populate("user");
  const data = await result.reverse();
  return data;
};

module.exports = {
  getHistoryByIdAndUser,
};
