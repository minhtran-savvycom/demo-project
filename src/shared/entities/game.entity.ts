import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { BaseIdentityEntity } from './base/base-identity.entity';
import { Publisher } from './publisher.entity';
import { User } from './user.entity';

@Entity()
export class Game extends BaseIdentityEntity {
  @Column('varchar', {
    nullable: false,
    name: 'Name',
  })
  name: string;

  @Column('int', {
    nullable: false,
    name: 'YearRelease',
  })
  yearRelease: number;

  @ManyToOne(() => Publisher, (p) => p.games)
  @JoinColumn({
    name: 'PublisherId',
    foreignKeyConstraintName: 'Game_Pulisher',
  })
  publisher: Publisher;

  @ManyToMany(() => User, (u) => u.games)
  users: User[];
}
