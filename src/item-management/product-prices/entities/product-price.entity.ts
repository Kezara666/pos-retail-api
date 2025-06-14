
import { Product } from "src/item-management/products/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductPrice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'float', default: 0 })
    wholeSalePrice: number;

    @Column({ type: 'float', default: 0 })
    broughtPrice: number;

    @Column({ type: 'float', default: 0 })
    primarySalePrice: number;

    @Column()
    productId: number;

    @ManyToOne(() => Product, (product) => product.productPrice, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'productId' })
    product: Product;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
