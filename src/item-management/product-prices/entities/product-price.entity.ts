
import { Product } from "src/item-management/products/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductPrice  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'float', default: 0 })
    wholeSalePrice: number;

    @Column({ type: 'float', default: 0 })
    broughtPrice: number;

    @Column({ type: 'float', default: 0 })
    primarySalePrice: number;

    @OneToOne(() => Product, { nullable: false })
    @JoinColumn()
    product: Product;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
