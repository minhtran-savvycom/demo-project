import { Request, Response } from 'express';
import { dataSource } from '../setting/configuration';
import { User } from '../shared/entities/user.entity';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { QueryUserResult } from '../shared/dtos/results/query-user.result';
import { Game } from '../shared/entities/game.entity';

dotenv.config();

class UserService {
  private static _instance: UserService;

  private constructor() {}

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new UserService();
    return this._instance;
  }

  async createUser(req: Request, res: Response) {
    try {
      // Check if the email already exists
      const existingUser = await dataSource.getRepository(User).findOneBy({
        email: req.body.email,
      });
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already in use' });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = dataSource.getRepository(User).create({
        ...req.body,
        password: hashedPassword,
      });
      const result = await dataSource.getRepository(User).save(user);
      const dto = plainToClass(QueryUserResult, result, {
        excludeExtraneousValues: true,
      });
      res.status(201).json(dto);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while creating the user' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const result = await dataSource.getRepository(User).delete(req.params.id);
      if (result.affected === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while deleting the user' });
    }
  }

  async updateUser(req: any, res: Response) {
    try {
      const user = await dataSource
        .getRepository(User)
        .findOneBy({ id: req?.user?.id.toString() });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      if (req?.body?.password) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
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
        .getRepository(User)
        .save(dataSource.getRepository(User).merge(user, req.body));
      const dto = plainToClass(QueryUserResult, result, {
        excludeExtraneousValues: true,
      });
      res.status(201).json(dto);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await dataSource
        .getRepository(User)
        .findOneBy({ id: req.params.id.toString() });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const dto = plainToClass(QueryUserResult, user, {
        excludeExtraneousValues: true,
      });
      res.status(201).json(dto);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while fetching the user' });
    }
  }

  async findAllUser(req: Request, res: Response) {
    try {
      const users = await dataSource.getRepository(User).find();
      const dto = plainToClass(QueryUserResult, users, {
        excludeExtraneousValues: true,
      });
      res.json(dto);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  }
}

export default UserService.getInstance();
