"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const app = (0, express_1.Router)();
app.post('/login', userController_1.UserController.login);
app.post('/register', userController_1.UserController.register);
app.post('/auth', userController_1.UserController.authorize);
exports.default = app;
