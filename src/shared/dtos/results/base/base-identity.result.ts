import { Expose } from 'class-transformer';

export class BaseIdentityResult {
  @Expose()
  id: string;
}
