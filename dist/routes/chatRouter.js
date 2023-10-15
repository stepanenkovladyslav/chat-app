"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatController_1 = require("../controllers/chatController");
const app = (0, express_1.Router)();
app.post('/create', chatController_1.ChatController.create);
exports.default = app;
