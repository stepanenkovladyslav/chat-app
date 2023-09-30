import WebSocket from "ws"

export const messageHandling = (client: WebSocket)=> {
  console.log("connection")
  client.on('message', (message:Buffer) => {
      console.log(message)
    })
}
