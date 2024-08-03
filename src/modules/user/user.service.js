const User = require("./user.model");
const bcrcypt = require("bcryptjs");

const createNewUser = async (data) => {
  const newUser = new User({
    firstName: data.firstName,
    lastName: data.lastName || "",
    password: bcrcypt.hashSync(data.password),
    email: data?.email,
    verified: true,
  });
  const result = await newUser.save();
  return result;
};

const getUser = async (email) => {
  const result = await User.findOne({ email: email });
  return result;
};

const getUserByUsername = async (username) => {
  const result = await User.findOne({ username: username });
  return result;
};

const getUserWithPassword = async (email) => {
  const result = await User.findOne({ email: email }).select("+password");
  return result;
};

const getUserByIdWithPassword = async (id) => {
  const result = await User.findOne({ _id: id }).select("+password");
  return result;
};

const getUserInfoById = async (id) => {
  const result = await User.findOne({ _id: id });
  return result;
};

const getUserById = async (id) => {
  const result = await User.findById({ _id: id });
  return result;
};

const getUserByEmail = async (email) => {
  const result = await User.findOne({ email: email });
  return result;
};

const updateUserWithSetMethod = async (data, id) => {
  const result = await User.findByIdAndUpdate(
    { _id: id },
    {
      $set: data,
    },
    { new: false }
  );
  return result;
};

module.exports = {
  createNewUser,
  getUser,
  getUserWithPassword,
  getUserInfoById,
  getUserByUsername,
  updateUserWithSetMethod,
  getUserByIdWithPassword,
  getUserByEmail,
  getUserById,
};
