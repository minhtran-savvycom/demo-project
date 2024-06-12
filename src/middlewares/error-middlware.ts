// src/middlewares/error-middleware.ts
import { Request, Response, NextFunction } from 'express';
import HttpException from '../exception/http-exception';

function errorMiddleware(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  console.error(`[Error] Status: ${status}, Message: ${message}`);
  res.status(status).json({ status, message });
}

export default errorMiddleware;
