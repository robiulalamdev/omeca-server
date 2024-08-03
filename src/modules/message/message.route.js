const express = require("express");
const { isAuth } = require("../../middlewares/auth");
const { getMessagesByHistoryId } = require("./message.controller");
const router = express.Router();

// router.get("/my-messages", isAuth,);
router.get("/:historyId", isAuth, getMessagesByHistoryId);

module.exports = { messageRoutes: router };
