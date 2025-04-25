import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { QtyTypeService } from './qty-type.service';
import { CreateQtyTypeDto } from './dto/create-qty-type.dto';
import { UpdateQtyTypeDto } from './dto/update-qty-type.dto';

@Controller('qty-types')
export class QtyTypeController {
    constructor(private readonly qtyTypeService: QtyTypeService) {}

    @Post()
    create(@Body() createQtyTypeDto: CreateQtyTypeDto) {
        return this.qtyTypeService.create(createQtyTypeDto);
    }

    @Get()
    findAll() {
        return this.qtyTypeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.qtyTypeService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateQtyTypeDto: UpdateQtyTypeDto) {
        return this.qtyTypeService.update(+id, updateQtyTypeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.qtyTypeService.remove(+id);
    }
}