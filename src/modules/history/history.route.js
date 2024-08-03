const express = require("express");
const { isAuth } = require("../../middlewares/auth");
const { getMyHistories, getHistoryById } = require("./history.controller");
const router = express.Router();

router.get("/my-history", isAuth, getMyHistories);
router.get("/:id", isAuth, getHistoryById);

module.exports = { historyRoutes: router };
