import { Expose, Exclude } from 'class-transformer';
import { QueryGameResult } from './query-game.result';

@Expose()
export class QueryUserResult {
  firstName: string;

  lastName: string;

  @Exclude()
  userName: string;

  password: string;

  games: QueryGameResult[];
}
