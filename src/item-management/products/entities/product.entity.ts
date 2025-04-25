// src/products/product.entity.ts
import { QtyType } from 'src/item-management/qty-type/entities/qty-type.entity';
import { Supplier } from 'src/item-management/supplier/entities/supplier.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';


@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  category: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  subcategory: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  currentPrice: number;

  @Column({ type: 'integer'})
  warranty: number;

  @ManyToOne(() => Supplier, { nullable: false })
  supplier: Supplier;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => QtyType, { nullable: false })
  qtyType: QtyType;
}