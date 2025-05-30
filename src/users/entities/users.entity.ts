import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "src/common/entites/base.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_users')
export class UsersModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;
    
    @Index(
        "idx_users_email", 
        {
            unique: true,
        }
    )
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    @ApiProperty({
        example: 'dodok@gmail.com',
    })
    email: string;
    
    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    password_hash: string;
    
    @Column({
        type: 'varchar',
        length: 50,
    })
    @ApiProperty({
        example: 'Dodo',
    })
    first_name: string;
    
    @Column({
        type: 'varchar',
        length: 50,
    })
    @ApiProperty({
        example: 'K',
    })
    last_name: string;
    
    @Column({
        type: 'varchar',
        length: 20,
    })
    @ApiProperty({
        example: '1012345678',
    })
    phone_number: string;
    
    @Column({
        type: 'varchar',
        length: 3,
    })
    @ApiProperty({
        example: 82,
    })
    country_code: string;
}