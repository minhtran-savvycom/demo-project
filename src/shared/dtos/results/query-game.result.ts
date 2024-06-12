import { Expose, Exclude } from 'class-transformer';

@Expose()
export class QueryGameResult {
  name: string;

  text: string;

  yearRelease: number;
}
