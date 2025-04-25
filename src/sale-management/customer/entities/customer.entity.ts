import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name:string;

    @Column()
    phoneNumber:string

}
