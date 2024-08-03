const express = require("express");
const { sendMessage } = require("./chat.controller");
const { isAuth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/send-prompt", isAuth, sendMessage);

module.exports = { chatRoutes: router };
