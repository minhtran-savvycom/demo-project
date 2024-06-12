import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseIdentityEntity } from './base/base-identity.entity';
import { Game } from './game.entity';

@Entity()
export class Publisher extends BaseIdentityEntity {
  @Column('varchar', {
    nullable: false,
    name: 'Name',
  })
  name: string;

  @Column('varchar', {
    nullable: true,
    name: 'Address',
  })
  address: string;

  @OneToMany(() => Game, (g) => g.publisher)
  games: Game[];
}
