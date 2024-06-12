import { NextFunction, Request, Response } from 'express-serve-static-core';
import { dataSource } from '../setting/configuration';
import { User } from '../shared/entities/user.entity';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class AuthService {
  private static _instance: AuthService;

  private constructor() {}

  static getInstance() {
    if (!this._instance) {
      this._instance = new AuthService();
    }
    return this._instance;
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      // Check if user exists
      const userExists = await dataSource
        .getRepository(User)
        .findOneBy({ email: req.body.email });

      if (!userExists) {
        return res.status(400).json({ message: 'User does not exist' });
      }

      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userExists.password,
      );
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Incorrect password' });
      }

      // Generate access token
      const accessToken = jwt.sign(
        {
          id: userExists.id,
        },
        process.env.JWT_SECRET as string,
        { expiresIn: '1d' },
      );

      return res.status(200).json({ message: 'User logged in', accessToken });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  //   async verifyToken(
  //     req: Request,
  //     res: Response,
  //     next: NextFunction,
  //   ): Promise<any> {
  //     try {
  //       // check if user exists
  //       const userExists = await dataSource
  //         .getRepository(User)
  //         .findOneBy({ email: req.body.email });

  //       if (!userExists)
  //         return res.status(400).json({ message: 'user does not exist' });

  //       return res
  //         .status(200)
  //         .json({ userId: userExists._id, email: userExists.email });
  //     } catch (error) {
  //       console.log(error);
  //       next(error);
  //     }
  //   }

  //   signToken(userId: string): string {
  //     const payload = {
  //       sub: userId,
  //     };
  //     return jwt.sign(payload, process.env.JWT_SECRET as string, {
  //       expiresIn: process.env.JWT_EXPIRATION,
  //     });
  //   }
}

export default AuthService.getInstance();
