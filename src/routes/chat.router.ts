import { Router } from "express";
import { ChatController } from "../controllers/chatController";

const app = Router();

app.post('/create', ChatController.create)

export default app;
