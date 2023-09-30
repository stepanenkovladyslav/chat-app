import Router from "express"
import userRouter from "./userRouter"
import chatRouter from "./chatRouter"
import roomRouter from "./roomRouter"

const app = Router()

app.use('/user', userRouter)
app.use('/chat', chatRouter)
app.use('/room', roomRouter)

export default app
