import { PartialType, ApiProperty } from "@nestjs/swagger";
import { CreateSupplierDto } from "./create-supplier.dto";

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  @ApiProperty({
    description: 'Name of the supplier',
    maxLength: 255,
    example: 'Acme Supplies Ltd.',
    required: false,
  })
  name?: string;
}