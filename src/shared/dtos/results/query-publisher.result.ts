import { Expose, Exclude } from 'class-transformer';
import { QueryGameResult } from './query-game.result';
import { BaseIdentityResult } from './base/base-identity.result';

@Expose()
export class QueryGamePublisher extends BaseIdentityResult {
  name: string;

  address: string;

  games: QueryGameResult[];
}
