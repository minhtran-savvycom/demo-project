import { Contains, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';
import { Game } from '../../entities/game.entity';

export class UpdateUserModel {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  games: Game[];
}
