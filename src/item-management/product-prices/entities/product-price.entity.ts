import { Product } from "src/item-management/products/entities/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Product, { nullable: false } )
    @JoinColumn()
    product: Product;

}
