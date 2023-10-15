"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const messageHandling_1 = require("./messageHandling");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const mongoUrl = process.env.DB_CONNECT;
mongoose_1.default.connect(mongoUrl);
mongoose_1.default.connection.once('open', () => {
    console.log("MongoDB open");
});
mongoose_1.default.connection.on('error', (error) => {
    console.error(error);
});
app.use(router_1.default);
const server = app.listen(PORT);
const ws = new WebSocket.Server({ server });
ws.on('connection', messageHandling_1.messageHandling);
