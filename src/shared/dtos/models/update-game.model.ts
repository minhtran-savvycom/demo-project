import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';
import { Game } from '../../entities/game.entity';

export class UpdateGameModel {
  @Length(1, 50)
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  yearRelease: number;
}
