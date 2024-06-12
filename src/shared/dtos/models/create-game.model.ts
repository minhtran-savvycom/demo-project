import { Contains, IsInt, IsNotEmpty, Length } from 'class-validator';

export class CreateGameModel {
  @Length(1, 50)
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  yearRelease: number;
}
