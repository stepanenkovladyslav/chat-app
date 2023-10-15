import { Router } from "express";
import { MessageController } from "../controllers/messageControlller";

const app = Router();

app.get('', MessageController.getAll)
