
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQtyTypeDto {
  @ApiProperty({ example: 'Box', description: 'Name of the quantity type' })
  name: string;

  @ApiPropertyOptional({ example: 1, description: 'ID of the parent QtyType (if any)' })
  mainQtyId?: number;

  @ApiProperty({ example: 12, description: 'Primary weight to convert to base unit' })
  primaryWeightTo: number;
}
