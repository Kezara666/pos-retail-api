import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPrice } from './entities/product-price.entity';
import { ProductPriceController } from './product-prices.controller';
import { ProductPriceService } from './product-prices.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductPrice])],
    providers: [ProductPriceService],
    controllers: [ProductPriceController],
})
export class ProductPriceModule {}