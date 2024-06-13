import express, { Express, Request, Response } from 'express';
import userController from '../controllers/user.controller';
import dtoValidationMiddleware from '../middlewares/dto-validator';
import { QueryUserResult } from '../shared/dtos/results/query-user.result';
import { CreateUserModel } from '../shared/dtos/models/create-user.model';
import { UpdateUserModel } from '../shared/dtos/models/update-user.model';
import passport from 'passport';
const userRouter = express.Router();

userRouter.get('/:id', function (req, res) {
  userController.getUserById(req, res);
});

userRouter.get('/', function (req, res) {
  userController.findAllUser(req, res);
});

userRouter.post(
  '/',
  dtoValidationMiddleware(CreateUserModel),
  function (req, res) {
    userController.createUser(req, res);
  },
);

userRouter.put(
  '/',
  dtoValidationMiddleware(UpdateUserModel),
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    userController.updateUser(req, res);
  },
);

userRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    userController.deleteUser(req, res);
  },
);

export default userRouter;
