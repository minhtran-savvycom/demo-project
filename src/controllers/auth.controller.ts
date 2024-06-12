import { Request, Response } from 'express-serve-static-core';
import authService from '../services/auth.service';
import { NextFunction } from 'express';

class AuthController {
  private static _instance: AuthController;

  private constructor() {}

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new AuthController();
    return this._instance;
  }

  login(req: Request, res: Response, next: NextFunction) {
    authService.login(req, res, next);
  }
}

export default AuthController.getInstance();
