import { IsNotEmpty } from 'class-validator';

export class AuthModel {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
