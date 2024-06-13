import express from 'express';
import authController from '../controllers/auth.controller';
import dtoValidationMiddleware from '../middlewares/dto-validator';
import { AuthModel } from '../shared/dtos/models/auth.model';
const authRouter = express.Router();

authRouter.post(
  '/login',
  dtoValidationMiddleware(AuthModel),
  function (req, res, next) {
    authController.login(req, res, next);
  },
);

export default authRouter;
