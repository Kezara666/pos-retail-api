
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductPriceDto {
    @ApiProperty({ type: Number, example: 100.0, description: 'Wholesale price of the product' })
    wholeSalePrice: number;

    @ApiProperty({ type: Number, example: 80.0, description: 'Brought price of the product' })
    broughtPrice: number;

    @ApiProperty({ type: Number, example: 120.0, description: 'Primary sale price of the product' })
    primarySalePrice: number;

    @ApiProperty({ type: Number, example: 1, description: 'ID of the associated product' })
    productId: number;
}
