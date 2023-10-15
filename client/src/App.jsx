import {Routes, Route} from "react-router-dom"
import './App.css'
import LoginPage from "./pages/Login/LoginPage"
import CreateAccountPage from "./pages/CreateAccount/CreateAccountPage"
import ChatPage from "./pages/Chat/ChatPage"
import RoomPage from "./pages/Room/RoomPage"
import AllChatsPage from './pages/AllChats/AllChatsPage'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<CreateAccountPage/>} />
      <Route path="/chats" element={<AllChatsPage/>} />
      <Route path="/chat/:id" element={<ChatPage/>} />
      <Route path="/room/:id" element={<RoomPage/>} />
    </Routes>
  )
}

export default App
