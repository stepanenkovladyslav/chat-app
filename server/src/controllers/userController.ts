import { Request, Response } from "express";


export class UserController {
  
  static getInfo (req: Request, res: Response) {
    res.send('Whatever man')
  }
}
