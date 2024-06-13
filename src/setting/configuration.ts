import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST as any,
  port: process.env.DB_PORT as any,
  username: process.env.DB_USER,
  password: process.env.DB_ROOT_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/shared/entities/*.entity.ts'],
  logging: false,
  synchronize: true,
});
