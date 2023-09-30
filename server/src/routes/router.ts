import Router from "express"
import { UserController } from "../controllers/userController"

const app = Router()


app.get('', UserController.getInfo)


export default app
