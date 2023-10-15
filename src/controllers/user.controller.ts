import { Request, Response } from "express";
import bcrypt from "bcrypt"

export class UserController {
  
  static register(req: Request, res: Response) {
    const {username, email, password} = req.body;


  }

  static login(req: Request, res: Response) {
    const {login, password } = req.body;
     
  }

  static authorize(req: Request, res: Response) {

  }
}
