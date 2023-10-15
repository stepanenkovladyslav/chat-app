"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageHandling = void 0;
const messageHandling = (client) => {
    console.log("connection");
    client.on('message', (message) => {
        console.log(message);
    });
};
exports.messageHandling = messageHandling;
