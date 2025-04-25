import { PartialType } from '@nestjs/mapped-types';
import { CreateQtyDto } from './create-qty.dto';

export class UpdateQtyDto extends PartialType(CreateQtyDto) {}
