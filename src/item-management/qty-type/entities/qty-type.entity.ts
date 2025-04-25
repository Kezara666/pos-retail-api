import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, Entity } from "typeorm";

@Entity('QtyType')
export class QtyType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @ManyToOne(() => QtyType, { nullable: true })
    @JoinColumn({ name: 'mainQty' })
    mainQty?: QtyType;

    @Column({ type: 'float', default: 0 })
    primaryWeightTo: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
