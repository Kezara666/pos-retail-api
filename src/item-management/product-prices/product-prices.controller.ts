import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

import { CreateProductPriceDto } from './dto/create-product-price.dto';
import { UpdateProductPriceDto } from './dto/update-product-price.dto';
import { ProductPriceService } from './product-prices.service';

@ApiTags('product-prices')
@Controller('product-prices')
export class ProductPriceController {
    constructor(private readonly productPriceService: ProductPriceService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new product price' })
    @ApiBody({ type: CreateProductPriceDto })
    @ApiResponse({ status: 201, description: 'Product price created successfully.' })
    create(@Body() createProductPriceDto: CreateProductPriceDto) {
        return this.productPriceService.create(createProductPriceDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all product prices' })
    @ApiResponse({ status: 200, description: 'List of product prices returned.' })
    findAll() {
        return this.productPriceService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a product price by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Product Price ID' })
    @ApiResponse({ status: 200, description: 'Product price found.' })
    @ApiResponse({ status: 404, description: 'Product price not found.' })
    findOne(@Param('id') id: string) {
        return this.productPriceService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a product price by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Product Price ID' })
    @ApiBody({ type: UpdateProductPriceDto })
    @ApiResponse({ status: 200, description: 'Product price updated successfully.' })
    @ApiResponse({ status: 404, description: 'Product price not found.' })
    update(@Param('id') id: string, @Body() updateProductPriceDto: UpdateProductPriceDto) {
        return this.productPriceService.update(+id, updateProductPriceDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a product price by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Product Price ID' })
    @ApiResponse({ status: 200, description: 'Product price deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Product price not found.' })
    remove(@Param('id') id: string) {
        return this.productPriceService.remove(+id);
    }
}
