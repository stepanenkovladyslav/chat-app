import { Router } from "express";
import { UserController } from "../controllers/userController";

const app = Router()

app.post('/login', UserController.login)
app.post('/register', UserController.register)
app.post('/auth', UserController.authorize)

export default app;
