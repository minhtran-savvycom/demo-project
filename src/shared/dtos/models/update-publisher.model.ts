import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePublisherModel {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsOptional()
  @IsArray()
  gameNames: string[];
}
