import { Expose, Exclude } from 'class-transformer';
import { QueryGameResult } from './query-game.result';

@Expose()
export class QueryGamePublisher {
  name: string;

  address: string;

  games: QueryGameResult[];
}
