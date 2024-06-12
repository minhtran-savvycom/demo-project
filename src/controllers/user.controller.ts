import { Request, Response } from 'express-serve-static-core';
import userService from '../services/user.service';

class UserController {
  private static _instance: UserController;

  private constructor() {}

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new UserController();
    return this._instance;
  }

  createUser(req: Request, res: Response) {
    userService.createUser(req, res);
  }

  deleteUser(req: Request, res: Response) {
    userService.deleteUser(req, res);
  }

  updateUser(req: Request, res: Response) {
    userService.updateUser(req, res);
  }

  findAllUser(req: Request, res: Response) {
    userService.findAllUser(req, res);
  }

  getUserById(req: Request, res: Response) {
    userService.getUserById(req, res);
  }
}

export default UserController.getInstance();
