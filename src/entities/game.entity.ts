import { Column, Entity } from "typeorm"
import { BaseIdentityEntity } from "./shared/base-identity.entity"

@Entity()
export class Game extends BaseIdentityEntity {
    @Column()
    name: string

    @Column()
    yearRelease: string

    @Column()
    yearRelease: string



    
}