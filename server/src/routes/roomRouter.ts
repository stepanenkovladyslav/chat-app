import { Router } from "express";
import { RoomController } from "../controllers/roomController";

const app = Router();

app.post('/create', RoomController.create);


export default app;
