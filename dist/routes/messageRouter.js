"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messageControlller_1 = require("../controllers/messageControlller");
const app = (0, express_1.Router)();
app.get('', messageControlller_1.MessageController.getAll);
