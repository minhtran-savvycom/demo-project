import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'demo-db',
  entities: ['src/shared/entities/*.entity.ts'],
  logging: false,
  synchronize: true,
});
