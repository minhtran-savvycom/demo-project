import { Column, Entity } from "typeorm"
import { BaseIdentityEntity } from "./shared/base-identity.entity"

@Entity()
export class Publisher extends BaseIdentityEntity {
    @Column()
    name: string

    @Column()
    address: string

    @Column()
    yearRelease: string



    
}