import WebSocket = require("ws")

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (server: WebSocket) => {
  console.log('connected')
  server.on("message", (data: string) => {
    console.log(data)
  })
})


server.on("error", (error: Error) => {
  console.log(error)
})
