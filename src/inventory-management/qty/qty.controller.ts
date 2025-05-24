import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { QtyService } from './qty.service';
import { CreateQtyDto } from './dto/create-qty.dto';
import { UpdateQtyDto } from './dto/update-qty.dto';

@ApiTags('qty')
@Controller('qtys')
export class QtyController {
    constructor(private readonly qtyService: QtyService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new qty record' })
    @ApiBody({ type: CreateQtyDto })
    @ApiResponse({ status: 201, description: 'Qty record created successfully.' })
    create(@Body() createQtyDto: CreateQtyDto) {
        return this.qtyService.create(createQtyDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all qty records' })
    @ApiResponse({ status: 200, description: 'List of qty records returned.' })
    findAll() {
        return this.qtyService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a qty record by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Qty record ID' })
    @ApiResponse({ status: 200, description: 'Qty record found.' })
    @ApiResponse({ status: 404, description: 'Qty record not found.' })
    findOne(@Param('id') id: string) {
        return this.qtyService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a qty record by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Qty record ID' })
    @ApiBody({ type: UpdateQtyDto })
    @ApiResponse({ status: 200, description: 'Qty record updated successfully.' })
    @ApiResponse({ status: 404, description: 'Qty record not found.' })
    update(@Param('id') id: string, @Body() updateQtyDto: UpdateQtyDto) {
        return this.qtyService.update(+id, updateQtyDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a qty record by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Qty record ID' })
    @ApiResponse({ status: 200, description: 'Qty record deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Qty record not found.' })
    remove(@Param('id') id: string) {
        return this.qtyService.remove(+id);
    }
}
