import { Product } from "src/item-management/products/entities/product.entity";
import { QtyType } from "src/item-management/qty-type/entities/qty-type.entity";
import { Customer } from "src/sale-management/customer/entities/customer.entity";
import { ItemSell } from "src/sale-management/item-sell/entities/item-sell.entity";
import { Column, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => ItemSell, items=>items.invoice)
    @JoinColumn({ name: 'product' })
    itemsSelled?: ItemSell[];

    @ManyToOne(() => Customer, { nullable: true })
    @JoinColumn({ name: 'customer' })
    customer?: Customer;

    @Column({ type: 'float', default: 0 })
    total: number;

    @Column({ type: 'int', default: 1 })
    status: number

    @Column({ type: 'float', default: 0 })
    discount: number;

    @Column({ type: 'float', default: 0 })
    netTotal: number;

    @Column({ type: 'boolean', default: true })
    completedItemSell: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
