import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { BaseIdentityEntity } from "./shared/base-identity.entity"

@Entity()
export class User extends BaseIdentityEntity {
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean

    
}