import { Exclude } from 'class-transformer';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseIdentityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'createdAt',
    type: 'date',
  })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', type: 'date' })
  @Exclude()
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn({
    name: 'deletedAt',
    type: 'date',
  })
  deletedAt?: Date;
}
