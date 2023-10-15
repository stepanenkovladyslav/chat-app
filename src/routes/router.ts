import Router from "express"
import userRouter from "./user.router"
import chatRouter from "./chat.router"
import roomRouter from "./room.router"

const app = Router()

app.use('/user', userRouter)
app.use('/chat', chatRouter)
app.use('/room', roomRouter)

export default app
