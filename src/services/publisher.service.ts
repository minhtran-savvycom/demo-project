import { Request, Response } from 'express';
import { dataSource } from '../setting/configuration';
import { Publisher } from '../shared/entities/publisher.entity';
import { Game } from 'shared/entities/game.entity';

class PublisherService {
  private static _instance: PublisherService;

  private constructor() {}

  static getInstance() {
    if (!this._instance) {
      this._instance = new PublisherService();
    }
    return this._instance;
  }

  async createPublisher(req: Request, res: Response) {
    try {
      const publisher = dataSource.getRepository(Publisher).create(req.body);
      const result = await dataSource.getRepository(Publisher).save(publisher);
      res.status(201).json(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while creating the publisher' });
    }
  }

  async deletePublisher(req: Request, res: Response) {
    try {
      const publisherRepository = dataSource.getRepository(Publisher);
      const publisher = await publisherRepository.findOne({
        where: { id: req.params.id },
      });

      if (!publisher) {
        return res.status(404).json({ error: 'Publisher not found' });
      }

      const gameRepository = dataSource.getRepository(Game);
      const games = await gameRepository.find({
        where: { publisher: { id: publisher.id } },
      });

      for (const game of games) {
        game.publisher = null;
        await gameRepository.save(game);
      }

      await publisherRepository.delete(req.params.id);
      res.json({ message: 'Publisher deleted successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while deleting the publisher' });
    }
  }

  async updatePublisher(req: Request, res: Response) {
    try {
      const publisher = await dataSource
        .getRepository(Publisher)
        .findOneBy({ id: req.params.id.toString() });
      if (!publisher) {
        return res.status(404).json({ error: 'Publisher not found' });
      }

      if (req?.body?.gameNames && Array.isArray(req.body.gameNames)) {
        const gameNames = req.body.gameNames;
        const games = await dataSource.getRepository(Game).find({
          where: gameNames.map((name: any) => ({ name })),
        });

        if (!games || games.length !== gameNames.length) {
          return res.status(400).json({ error: 'One or more games not found' });
        }

        req.body.games = games; // Associate the games with the user
      }

      const result = await dataSource
        .getRepository(Publisher)
        .save(dataSource.getRepository(Publisher).merge(publisher, req.body));
      res.json(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while updating the publisher' });
    }
  }

  async getPublisherById(req: Request, res: Response) {
    try {
      const publisher = await dataSource
        .getRepository(Publisher)
        .findOneBy({ id: req.params.id.toString() });
      if (!publisher) {
        return res.status(404).json({ error: 'Publisher not found' });
      }

      res.json(publisher);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while fetching the publisher' });
    }
  }

  async findAllPublishers(req: Request, res: Response) {
    try {
      const publishers = await dataSource.getRepository(Publisher).find();
      res.json(publishers);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while fetching publishers' });
    }
  }
}

export default PublisherService.getInstance();
