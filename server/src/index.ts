import WebSocket = require("ws")
require('dotenv').config()
import express from "express"
import router from "./routes/router"
import { messageHandling } from "./messageHandling";
import { MongoClient, ServerApiVersion } from "mongodb";


const app = express(); 

const uri= process.env.DB_CONNECT;

const client = new MongoClient((uri as string), {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

client.connect().then(() => {
  console.log('client connected')
}).catch(() => {
    console.log('connection error')
  })

app.use(router)

const server = app.listen('8080')

const ws = new WebSocket.Server({server})

ws.on('connection', messageHandling)


