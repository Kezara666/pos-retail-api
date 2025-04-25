import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductPrice } from './entities/product-price.entity';
import { CreateProductPriceDto } from './dto/create-product-price.dto';
import { UpdateProductPriceDto } from './dto/update-product-price.dto';

@Injectable()
export class ProductPriceService {
    constructor(
        @InjectRepository(ProductPrice)
        private readonly productPriceRepository: Repository<ProductPrice>,
    ) {}

    async create(createProductPriceDto: CreateProductPriceDto): Promise<ProductPrice> {
        const productPrice = this.productPriceRepository.create(createProductPriceDto);
        return await this.productPriceRepository.save(productPrice);
    }

    async findAll(): Promise<ProductPrice[]> {
        return await this.productPriceRepository.find({ relations: ['product'] });
    }

    async findOne(id: number): Promise<ProductPrice> {
        return await this.productPriceRepository.findOneOrFail({ where: { id }, relations: ['product'] });
    }

    async update(id: number, updateProductPriceDto: UpdateProductPriceDto): Promise<ProductPrice> {
        await this.productPriceRepository.update(id, updateProductPriceDto);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.productPriceRepository.delete(id);
    }
}