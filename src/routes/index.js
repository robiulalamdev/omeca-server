const express = require("express");
const { userRoutes } = require("../modules/user/user.route");
const { chatRoutes } = require("../modules/chat/chat.route");
const { historyRoutes } = require("../modules/history/history.route");
const { messageRoutes } = require("../modules/message/message.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/chats",
    route: chatRoutes,
  },
  {
    path: "/chats/histories",
    route: historyRoutes,
  },
  {
    path: "/chats/messages",
    route: messageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
module.exports = { routers: router };
