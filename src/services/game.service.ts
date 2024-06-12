import { Request, Response } from 'express';
import { dataSource } from '../setting/configuration';
import { Game } from '../shared/entities/game.entity';

class GameService {
  private static _instance: GameService;

  private constructor() {}

  static getInstance() {
    if (!this._instance) {
      this._instance = new GameService();
    }
    return this._instance;
  }

  async createGame(req: Request, res: Response) {
    try {
      const game = dataSource.getRepository(Game).create(req.body);
      const result = await dataSource.getRepository(Game).save(game);
      res.status(201).json(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while creating the game' });
    }
  }

  async deleteGame(req: Request, res: Response) {
    try {
      const result = await dataSource.getRepository(Game).delete(req.params.id);
      if (result.affected === 0) {
        return res.status(404).json({ error: 'Game not found' });
      }
      res.json({ message: 'Game deleted successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while deleting the game' });
    }
  }

  async updateGame(req: Request, res: Response) {
    try {
      const game = await dataSource
        .getRepository(Game)
        .findOneBy({ id: req.params.id.toString() });
      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }
      dataSource.getRepository(Game).merge(game, req.body);
      const result = await dataSource.getRepository(Game).save(game);
      res.json(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while updating the game' });
    }
  }

  async getGameById(req: Request, res: Response) {
    try {
      const game = await dataSource
        .getRepository(Game)
        .findOneBy({ id: req.params.id.toString() });
      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }
      res.json(game);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while fetching the game' });
    }
  }

  async findAllGames(req: Request, res: Response) {
    try {
      const games = await dataSource.getRepository(Game).find();
      res.json(games);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching games' });
    }
  }
}

export default GameService.getInstance();
