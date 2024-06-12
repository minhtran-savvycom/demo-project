import express, { Express, Request, Response } from 'express';
import dtoValidationMiddleware from '../middlewares/dto-validator';
import gameController from '../controllers/game.controller';
import { QueryGameResult } from '../shared/dtos/results/query-game.result';
import { CreateGameModel } from '../shared/dtos/models/create-game.model';
import { UpdateGameModel } from '../shared/dtos/models/update-game.model';
const gameRouter = express.Router();

gameRouter.get(
  '/:id',
  dtoValidationMiddleware(QueryGameResult),
  function (req, res) {
    gameController.getGameById(req, res);
  },
);

gameRouter.get(
  '/',
  dtoValidationMiddleware(QueryGameResult),
  function (req, res) {
    gameController.findAllGames(req, res);
  },
);

gameRouter.post(
  '/',
  dtoValidationMiddleware(CreateGameModel),
  function (req, res) {
    gameController.createGame(req, res);
  },
);

gameRouter.put(
  '/:id',
  dtoValidationMiddleware(UpdateGameModel),
  function (req, res) {
    gameController.updateGame(req, res);
  },
);

gameRouter.delete('/:id', function (req, res) {
  gameController.deleteGame(req, res);
});

export default gameRouter;
