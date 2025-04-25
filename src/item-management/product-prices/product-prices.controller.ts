import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';

import { CreateProductPriceDto } from './dto/create-product-price.dto';
import { UpdateProductPriceDto } from './dto/update-product-price.dto';
import { ProductPriceService } from './product-prices.service';

@Controller('product-prices')
export class ProductPriceController {
    constructor(private readonly productPriceService: ProductPriceService) {}

    @Post()
    create(@Body() createProductPriceDto: CreateProductPriceDto) {
        return this.productPriceService.create(createProductPriceDto);
    }

    @Get()
    findAll() {
        return this.productPriceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productPriceService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductPriceDto: UpdateProductPriceDto) {
        return this.productPriceService.update(+id, updateProductPriceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productPriceService.remove(+id);
    }
}