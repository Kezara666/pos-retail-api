import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemSellService } from './item-sell.service';
import { CreateItemSellDto } from './dto/create-item-sell.dto';
import { UpdateItemSellDto } from './dto/update-item-sell.dto';

@Controller('item-sell')
export class ItemSellController {
  constructor(private readonly itemSellService: ItemSellService) {}

  @Post()
  create(@Body() createItemSellDto: CreateItemSellDto) {
    return this.itemSellService.create(createItemSellDto);
  }

  @Get()
  findAll() {
    return this.itemSellService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemSellService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemSellDto: UpdateItemSellDto) {
    return this.itemSellService.update(+id, updateItemSellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemSellService.remove(+id);
  }
}
