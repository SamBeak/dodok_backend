import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "src/common/entites/base.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity("tb_flights")
export class FlightsModel extends BaseModel {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        description: "항공편 uuid primary key",
        example: "123e4567-e89b-12d3-a456-426614174000"
    })
    flight_id: string;
    
    @Column({
        type: 'varchar',
        length: 10,
        nullable: false,
    })
    @ApiProperty({
        description: "항공편 번호",
        example: "KE123",
    })
    flight_number: string;
    
    @Column({
        type: 'varchar',
        length: 3,
        nullable: false,
    })
    @ApiProperty({
        description: "IATA 코드",
        example: "KE",
    })
    airline_code: string;
    
    @Index('idx_flights_dep_arr', ['departure_airport', 'arrival_airport'])
    @Column({
        type: 'varchar',
        length: 3,
        nullable: false,
    })
    @ApiProperty({
        description: "출발 공항 IATA 코드",
        example: "ICN",
    })
    departure_airport: string;
    
    @Column({
        type: 'varchar',
        length: 3,
        nullable: false,
    })
    @ApiProperty({
        description: "도착 공항 IATA 코드",
        example: "SFO",
    })
    arrival_airport: string;
    
    @Index('idx_flights_dep_time', ['departure_time'])
    @Column({
        type: 'timestamp with time zone',
        nullable: false,
    })
    @ApiProperty({
        description: "출발 시간",
        example: "2025-05-30T16:48:24.000Z",
    })
    departure_time: Date;
    
    @Column({
        type: 'timestamp with time zone',
        nullable: false,
    })
    @ApiProperty({
        description: "도착 시간",
        example: "2025-05-30T16:48:24.000Z",
    })
    arrival_time: Date;
    
    @Column({
        type: 'interval',
        nullable: false,
    })
    @ApiProperty({
        description: "항공편 소요 시간",
        example: "01:00:00",
    })
    duration: string;
    
    @Column({
        type: 'decimal',
        precision: 10, // 총 자릿수
        scale: 2, // 소수점 이하 자릿수
        nullable: false,
    })
    @ApiProperty({
        description: "항공편 가격",
        example: "100000.00",
    })
    price: number;
    
    @Column({
        type: 'integer',
        nullable: false,
    })
    @ApiProperty({
        description: "항공편 가능 좌석 수",
        example: 10,
    })
    available_seats: number;
}