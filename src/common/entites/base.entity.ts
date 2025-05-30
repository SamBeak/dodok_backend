import { ApiProperty } from "@nestjs/swagger";
import { CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export abstract class BaseModel {
    @CreateDateColumn()
    @ApiProperty({ example: new Date().toISOString() })
    createdAt: Date;
    
    @UpdateDateColumn()
    @ApiProperty({ example: new Date().toISOString() })
    updatedAt: Date;
    
    
    @VersionColumn()
    @ApiProperty({ example: 1 })
    version: number;
}