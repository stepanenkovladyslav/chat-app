import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ChatPage = () => {

  // const chatId = useParams()
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080')
    ws.addEventListener('open', () => {
      // ws.send(chatId.id)
      // ws.addEventListener('message', (message) => {
      //   console.log(message)
      // })
    })
  }, [])

  return (
    <h1>What's up my boy</h1>
  )
}

export default ChatPage;
