import { Product } from "src/item-management/products/entities/product.entity";
import { QtyType } from "src/item-management/qty-type/entities/qty-type.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Qty {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, { nullable: true })
    @JoinColumn({ name: 'product' })
    product?: Product;

    @ManyToOne(() => QtyType, { nullable: true })
    @JoinColumn({ name: 'qtyType' })
    qtyType?: QtyType;

    @Column({ type: 'float', default: 0 })
    qty: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
