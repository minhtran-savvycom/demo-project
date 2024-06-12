import { Request, Response } from 'express-serve-static-core';
import gameService from '../services/game.service';

class GameController {
  private static _instance: GameController;

  private constructor() {}

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new GameController();
    return this._instance;
  }

  createGame(req: Request, res: Response) {
    gameService.createGame(req, res);
  }

  deleteGame(req: Request, res: Response) {
    gameService.deleteGame(req, res);
  }

  updateGame(req: Request, res: Response) {
    gameService.updateGame(req, res);
  }

  findAllGames(req: Request, res: Response) {
    gameService.findAllGames(req, res);
  }

  getGameById(req: Request, res: Response) {
    gameService.getGameById(req, res);
  }
}

export default GameController.getInstance();
