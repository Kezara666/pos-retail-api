import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { QtyService } from './qty.service';
import { CreateQtyDto } from './dto/create-qty.dto';
import { UpdateQtyDto } from './dto/update-qty.dto';

@Controller('qtys')
export class QtyController {
    constructor(private readonly qtyService: QtyService) {}

    @Post()
    create(@Body() createQtyDto: CreateQtyDto) {
        return this.qtyService.create(createQtyDto);
    }

    @Get()
    findAll() {
        return this.qtyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.qtyService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateQtyDto: UpdateQtyDto) {
        return this.qtyService.update(+id, updateQtyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.qtyService.remove(+id);
    }
}