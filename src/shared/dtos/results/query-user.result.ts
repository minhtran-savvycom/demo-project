import { Expose, Exclude, Type } from 'class-transformer';
import { QueryGameResult } from './query-game.result';
import { BaseIdentityResult } from './base/base-identity.result';

@Expose()
export class QueryUserResult extends BaseIdentityResult {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  userName: string;

  @Exclude()
  password: string;

  @Expose()
  @Type(() => QueryGameResult)
  games: QueryGameResult[];
}
