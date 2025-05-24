import { IsNumber, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQtyDto {
    @ApiProperty({ 
        type: Number, 
        description: 'ID of the associated product',
        example: 1
    })
    @IsInt()
    productId: number;

    @ApiProperty({ 
        type: Number, 
        description: 'ID of the associated QtyType',
        example: 1
    })
    @IsInt()
    qtyTypeId: number;

    @ApiProperty({ 
        type: Number, 
        description: 'Quantity value',
        example: 10
    })
    @IsNumber()
    qty: number;
}
