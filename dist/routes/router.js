"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./userRouter"));
const chatRouter_1 = __importDefault(require("./chatRouter"));
const roomRouter_1 = __importDefault(require("./roomRouter"));
const app = (0, express_1.default)();
app.use('/user', userRouter_1.default);
app.use('/chat', chatRouter_1.default);
app.use('/room', roomRouter_1.default);
exports.default = app;
