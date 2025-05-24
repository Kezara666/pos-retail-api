
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { QtyTypeService } from './qty-type.service';
import { CreateQtyTypeDto } from './dto/create-qty-type.dto';
import { UpdateQtyTypeDto } from './dto/update-qty-type.dto';

@ApiTags('qty-types')
@Controller('qty-types')
export class QtyTypeController {
    constructor(private readonly qtyTypeService: QtyTypeService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new qty type' })
    @ApiBody({ type: CreateQtyTypeDto })
    @ApiResponse({ status: 201, description: 'Qty type created successfully.' })
    create(@Body() createQtyTypeDto: CreateQtyTypeDto) {
        return this.qtyTypeService.create(createQtyTypeDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all qty types' })
    @ApiResponse({ status: 200, description: 'List of qty types returned.' })
    findAll() {
        return this.qtyTypeService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a qty type by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Qty type ID' })
    @ApiResponse({ status: 200, description: 'Qty type found.' })
    @ApiResponse({ status: 404, description: 'Qty type not found.' })
    findOne(@Param('id') id: string) {
        return this.qtyTypeService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a qty type by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Qty type ID' })
    @ApiBody({ type: UpdateQtyTypeDto })
    @ApiResponse({ status: 200, description: 'Qty type updated successfully.' })
    @ApiResponse({ status: 404, description: 'Qty type not found.' })
    update(@Param('id') id: string, @Body() updateQtyTypeDto: UpdateQtyTypeDto) {
        return this.qtyTypeService.update(+id, updateQtyTypeDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a qty type by ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Qty type ID' })
    @ApiResponse({ status: 200, description: 'Qty type deleted successfully.' })
    @ApiResponse({ status: 404, description: 'Qty type not found.' })
    remove(@Param('id') id: string) {
        return this.qtyTypeService.remove(+id);
    }
}
