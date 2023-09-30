import { Router } from "express";
import { RoomController } from "../controllers/RoomController";

const app = Router();

app.post('/create', RoomController.create);


export default app;
