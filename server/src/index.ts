import WebSocket = require("ws")
require('dotenv').config()
import express from "express"
import router from "./routes/router"
import { messageHandling } from "./messageHandling";
import mongoose from "mongoose"


const app = express();

const PORT = process.env.PORT || 8000;

const mongoUrl = process.env.DB_CONNECT;

mongoose.connect(mongoUrl as string)

mongoose.connection.once('open', () => {
  console.log("MongoDB open")
})

mongoose.connection.on('error', (error: Error) => {
  console.error(error)
})

app.use(router)

const server = app.listen(PORT)

const ws = new WebSocket.Server({ server })

ws.on('connection', messageHandling)

