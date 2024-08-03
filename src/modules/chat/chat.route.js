const express = require("express");
const { sendMessage } = require("./chat.controller");
const { isAuth } = require("../../middlewares/auth");
const router = express.Router();

router.post("/send-prompt", sendMessage);

module.exports = { chatRoutes: router };
