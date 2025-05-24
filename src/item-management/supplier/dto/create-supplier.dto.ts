
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateSupplierDto {
  @ApiProperty({
    description: 'Name of the supplier',
    maxLength: 255,
    example: 'Acme Supplies Ltd.',
  })
  name: string;
}

