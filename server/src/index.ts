import WebSocket = require("ws")
import express from "express"
import router from "./routes/router"

const app = express(); 

app.use(router)

const server = app.listen('8080')

const ws = new WebSocket.Server({server})

ws.on('connection', (client: WebSocket)=> {
  console.log("connection")
  client.on('message', (message:Buffer) => {
      console.log(message)
    })
})


