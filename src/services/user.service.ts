import { Request, Response } from 'express';
import { dataSource } from '../setting/configuration';
import { User } from '../shared/entities/user.entity';

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
      const user = dataSource.getRepository(User).create(req.body);
      const result = await dataSource.getRepository(User).save(user);
      res.status(201).json(result);
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

  async updateUser(req: Request, res: Response) {
    try {
      const user = await dataSource
        .getRepository(User)
        .findOneBy({ id: req.params.id.toString() });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      dataSource.getRepository(User).merge(user, req.body);
      const result = await dataSource.getRepository(User).save(user);
      res.json(result);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while updating the user' });
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
      res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'An error occurred while fetching the user' });
    }
  }

  async findAllUser(req: Request, res: Response) {
    try {
      const users = await dataSource.getRepository(User).find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  }
}

export default UserService.getInstance();
