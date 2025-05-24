import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductPriceDto {
    @ApiPropertyOptional({ type: Number, example: 100.0, description: 'Wholesale price of the product (optional)' })
    wholeSalePrice?: number;

    @ApiPropertyOptional({ type: Number, example: 80.0, description: 'Brought price of the product (optional)' })
    broughtPrice?: number;

    @ApiPropertyOptional({ type: Number, example: 120.0, description: 'Primary sale price of the product (optional)' })
    primarySalePrice?: number;

    @ApiPropertyOptional({ type: Number, example: 1, description: 'ID of the associated product (optional)' })
    productId?: number;
}