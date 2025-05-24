import { IsOptional, IsNumber, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateQtyDto } from './create-qty.dto';

export class UpdateQtyDto {
  @ApiPropertyOptional({ type: Number, description: 'Product ID (optional)' })
  @IsOptional()
  @IsInt()
  product?: number;

  @ApiPropertyOptional({ type: Number, description: 'QtyType ID (optional)' })
  @IsOptional()
  @IsInt()
  qtyType?: number;

  @ApiPropertyOptional({ type: Number, description: 'Quantity value (optional)' })
  @IsOptional()
  @IsNumber()
  qty?: number;
}
