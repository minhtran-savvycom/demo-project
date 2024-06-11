import { PrimaryGeneratedColumn } from "typeorm";

export class BaseIdentityEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string
}