import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  Unique,
} from 'typeorm';
import { BaseIdentityEntity } from './base/base-identity.entity';
import { Publisher } from './publisher.entity';
import { User } from './user.entity';

@Entity()
@Unique(['name'])
export class Game extends BaseIdentityEntity {
  @Column('varchar', {
    nullable: false,
  })
  name: string;

  @Column('int', {
    nullable: false,
  })
  yearRelease: number;

  @ManyToOne(() => Publisher, (p) => p.games)
  @JoinColumn({
    foreignKeyConstraintName: 'Game_Pulisher',
  })
  publisher: Publisher;

  @ManyToMany(() => User, (u) => u.games)
  users: User[];
}
