import { Expose, Exclude } from 'class-transformer';
import { BaseIdentityResult } from './base/base-identity.result';

@Expose()
export class QueryGameResult extends BaseIdentityResult {
  @Expose()
  name: string;

  @Expose()
  yearRelease: number;
}
