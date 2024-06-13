import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  Unique,
} from 'typeorm';
import { BaseIdentityEntity } from './base/base-identity.entity';
import { Game } from './game.entity';

@Entity()
@Unique(['email'])
export class User extends BaseIdentityEntity {
  @Column('varchar', {
    nullable: false,
  })
  firstName: string;

  @Column('varchar', {
    nullable: false,
  })
  lastName: string;

  @Column('varchar', {
    nullable: false,
  })
  email: string;

  @Column('varchar', {
    nullable: false,
  })
  userName: string;

  @Column('varchar', {
    nullable: false,
  })
  password: string;

  @ManyToMany(() => Game, (g) => g.users, {
    eager: true,
  })
  @JoinTable({
    name: 'user_game', // table name for the junction table of this relation
    joinColumn: {
      name: 'UserId',
      foreignKeyConstraintName: 'user_game_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'GameId',
      foreignKeyConstraintName: 'game_user_id',
      referencedColumnName: 'id',
    },
  })
  games: Game[];
}
