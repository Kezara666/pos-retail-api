import { Product } from "src/item-management/products/entities/product.entity";
import { QtyType } from "src/inventory-management/qty-type/entities/qty-type.entity";
import { Invoice } from "src/sale-management/invoice/entities/invoice.entity";
import { PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class ItemSell {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, { nullable: true })
    @JoinColumn({ name: 'product' })
    product?: Product;

    @ManyToOne(() => Invoice, { nullable: true })
    @JoinColumn({ name: 'invoice' })
    invoice?: Invoice;

    @ManyToOne(() => QtyType, { nullable: true })
    @JoinColumn({ name: 'qtyType' })
    qtyType?: QtyType;

    @Column({ type: 'float', default: 0 })
    qty: number;

    @Column({ type: 'float', default: 0 })
    qntPrice: number;

    @Column({ type: 'float', default: 0 })
    pendingdAmount: number

    @Column({ type: 'boolean', default: true })
    completedItemSell: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
