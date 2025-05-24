
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { Supplier } from '../supplier/entities/supplier.entity';
import { QtyType } from '../../inventory-management/qty-type/entities/qty-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPrice } from '../product-prices/entities/product-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Supplier, QtyType,ProductPrice])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
