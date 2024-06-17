import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseIdentityEntity } from './base/base-identity.entity';
import { Game } from './game.entity';

@Entity()
export class Publisher extends BaseIdentityEntity {
  @Column('varchar', {
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    nullable: true,
  })
  address: string;

  @OneToMany(() => Game, (g) => g.publisher, {
    cascade: false,
    eager: true,
  })
  games: Game[];
}
