import { PartialType } from '@nestjs/mapped-types';
import { CreateQtyTypeDto } from './create-qty-type.dto';

export class UpdateQtyTypeDto extends PartialType(CreateQtyTypeDto) {}
