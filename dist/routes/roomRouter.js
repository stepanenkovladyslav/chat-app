"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roomController_1 = require("../controllers/roomController");
const app = (0, express_1.Router)();
app.post('/create', roomController_1.RoomController.create);
exports.default = app;
